// ============================================
// words.js
// 1500 слов: A1, A2, B1, B2, C1, C2
// 250 слов на каждый уровень
// ============================================

const WORDS_PER_LEVEL = 250;

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

const WORDS_URL =
    "https://raw.githubusercontent.com/Maximax67/Words-CEFR-Dataset/main/datasets/word_list_cefr.csv";

const words = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
};


// --------------------------------------------
// Создание примера
// --------------------------------------------

function createExample(word, partOfSpeech) {

    const examples = {

        noun:
            `The word "${word}" is useful in everyday English.`,

        verb:
            `People often use "${word}" in everyday English.`,

        adjective:
            `This is an example of how "${word}" can be used.`,

        adverb:
            `The word "${word}" can describe how something happens.`,

        preposition:
            `"${word}" can connect different parts of a sentence.`,

        conjunction:
            `"${word}" can connect ideas in a sentence.`,

        pronoun:
            `"${word}" can be used as a pronoun.`,

        determiner:
            `"${word}" can be used before a noun.`,

        default:
            `You can meet the word "${word}" in English texts and conversations.`
    };

    return examples[partOfSpeech] || examples.default;
}


// --------------------------------------------
// Очистка слова
// --------------------------------------------

function cleanWord(word) {

    if (!word) return null;

    word = word.trim();

    // Убираем кавычки
    word = word.replace(/^["']|["']$/g, "");

    // Слишком длинные записи нам не нужны
    if (word.length > 45) return null;

    // Оставляем английские слова
    if (!/^[a-zA-Z][a-zA-Z' -]*$/.test(word)) {
        return null;
    }

    return word;
}


// --------------------------------------------
// Загрузка CEFR
// --------------------------------------------

async function loadWords() {

    try {

        console.log("Загружаем словарь CEFR...");

        const response = await fetch(WORDS_URL);

        if (!response.ok) {
            throw new Error(
                `Ошибка загрузки словаря: ${response.status}`
            );
        }

        const csv = await response.text();

        const lines = csv.split(/\r?\n/);

        const collected = {
            A1: [],
            A2: [],
            B1: [],
            B2: [],
            C1: [],
            C2: []
        };

        const alreadyAdded = {
            A1: new Set(),
            A2: new Set(),
            B1: new Set(),
            B2: new Set(),
            C1: new Set(),
            C2: new Set()
        };


        // ----------------------------------------
        // Разбираем CSV
        // ----------------------------------------

        for (let i = 1; i < lines.length; i++) {

            const line = lines[i].trim();

            if (!line) continue;

            const parts = line.split(";");

            const word = cleanWord(parts[0]);

            const partOfSpeech =
                (parts[1] || "")
                    .trim()
                    .toLowerCase();

            const level =
                (parts[2] || "")
                    .trim()
                    .toUpperCase();


            if (!word) continue;

            if (!LEVELS.includes(level)) continue;


            const key = word.toLowerCase();

            // Не добавляем одно и то же слово дважды
            if (alreadyAdded[level].has(key)) {
                continue;
            }

            alreadyAdded[level].add(key);


            collected[level].push({

                word: word,

                // Пока используем английское определение
                // как запасное значение.
                translation:
                    `English word: ${word}`,

                example:
                    createExample(word, partOfSpeech),

                pos: partOfSpeech,

                level: level
            });
        }


        // ----------------------------------------
        // Берём по 250 слов каждого уровня
        // ----------------------------------------

        for (const level of LEVELS) {

            words[level] =
                collected[level]
                    .slice(0, WORDS_PER_LEVEL);
        }


        // ----------------------------------------
        // Проверяем результат
        // ----------------------------------------

        let total = 0;

        for (const level of LEVELS) {

            console.log(
                `${level}: ${words[level].length} слов`
            );

            total += words[level].length;
        }

        console.log(
            `Всего загружено: ${total} слов`
        );


        // ----------------------------------------
        // Если script.js использует window.words
        // ----------------------------------------

        window.words = words;

        // Сообщаем приложению,
        // что слова уже загрузились.

        window.dispatchEvent(
            new CustomEvent("wordsReady")
        );


        return words;

    } catch (error) {

        console.error(
            "Не удалось загрузить словарь:",
            error
        );


        // ----------------------------------------
        // Запасные слова
        // ----------------------------------------

        window.words = {

            A1: [
                {
                    word: "hello",
                    translation: "привет",
                    example: "Hello! How are you?"
                },
                {
                    word: "learn",
                    translation: "учить",
                    example: "I want to learn English."
                },
                {
                    word: "friend",
                    translation: "друг",
                    example: "My friend speaks English."
                }
            ],

            A2: [
                {
                    word: "improve",
                    translation: "улучшать",
                    example: "I want to improve my English."
                },
                {
                    word: "decide",
                    translation: "решать",
                    example: "We need to decide today."
                }
            ],

            B1: [
                {
                    word: "achieve",
                    translation: "достигать",
                    example: "She achieved her goal."
                },
                {
                    word: "reliable",
                    translation: "надёжный",
                    example: "He is a reliable person."
                }
            ],

            B2: [
                {
                    word: "ambiguous",
                    translation: "неоднозначный",
                    example: "The answer was ambiguous."
                },
                {
                    word: "inevitable",
                    translation: "неизбежный",
                    example: "Some changes are inevitable."
                }
            ],

            C1: [
                {
                    word: "compelling",
                    translation: "убедительный",
                    example: "She gave a compelling argument."
                },
                {
                    word: "mitigate",
                    translation: "смягчать",
                    example: "The plan may mitigate the risks."
                }
            ],

            C2: [
                {
                    word: "albeit",
                    translation: "хотя",
                    example: "It was useful, albeit expensive."
                },
                {
                    word: "conundrum",
                    translation: "сложная проблема",
                    example: "This creates a difficult conundrum."
                }
            ]
        };

        window.dispatchEvent(
            new CustomEvent("wordsReady")
        );

        return window.words;
    }
}


// --------------------------------------------
// Запускаем загрузку
// --------------------------------------------

loadWords();