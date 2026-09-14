// ============================================================
// ENGLISH WORDS
// 1500 слов: A1, A2, B1, B2, C1, C2
// 250 слов на каждый уровень
// ============================================================

function makeWords(data, level) {
    return data.trim().split("\n").map(line => {
        const [word, translation] = line.split("|");

        return {
            word: word.trim(),
            translation: translation.trim(),
            example: `You can use "${word.trim()}" in English.`
        };
    }).map(item => ({
        ...item,
        level: level
    }));
}


// ============================================================
// A1 — 250 слов
// Не самые банальные слова для начального уровня
// ============================================================

const A1_DATA = `
accept|принимать
add|добавлять
address|адрес
advice|совет
afraid|испуганный
agree|соглашаться
allow|позволять
almost|почти
alone|один
already|уже
answer|отвечать
appear|появляться
arrive|прибывать
article|статья
attention|внимание
available|доступный
avoid|избегать
background|фон
balance|баланс
belong|принадлежать
beside|рядом
between|между
beyond|за пределами
borrow|одалживать
brain|мозг
bridge|мост
bright|яркий
broken|сломанный
button|кнопка
careful|осторожный
carry|нести
cause|причина
certain|определённый
change|изменять
choice|выбор
choose|выбирать
clearly|ясно
climb|взбираться
collect|собирать
comfortable|удобный
common|распространённый
compare|сравнивать
complete|завершать
condition|условие
continue|продолжать
corner|угол
correct|правильный
cost|стоить
count|считать
couple|пара
cover|покрывать
crowd|толпа
daily|ежедневный
danger|опасность
deal|иметь дело
decide|решать
deep|глубокий
degree|степень
depend|зависеть
describe|описывать
difference|разница
direction|направление
discover|обнаруживать
distance|расстояние
divide|делить
double|двойной
drop|ронять
early|рано
earth|земля
easily|легко
empty|пустой
enough|достаточно
especially|особенно
event|событие
exact|точный
example|пример
excited|взволнованный
exercise|упражнение
experience|опыт
explain|объяснять
express|выражать
fair|справедливый
famous|известный
feature|особенность
field|поле
final|окончательный
follow|следовать
foreign|иностранный
forward|вперёд
friendly|дружелюбный
future|будущее
general|общий
guess|догадываться
habit|привычка
happen|происходить
healthy|здоровый
heavy|тяжёлый
however|однако
huge|огромный
include|включать
increase|увеличивать
inside|внутри
instead|вместо
invite|приглашать
island|остров
journey|путешествие
knowledge|знания
language|язык
later|позже
least|наименьший
likely|вероятный
local|местный
lucky|удачливый
main|главный
manage|справляться
matter|иметь значение
maybe|возможно
mean|означать
message|сообщение
middle|середина
mistake|ошибка
modern|современный
notice|замечать
offer|предлагать
opinion|мнение
outside|снаружи
pair|пара
passenger|пассажир
perhaps|возможно
personal|личный
place|место
possible|возможный
practice|практика
prefer|предпочитать
prepare|готовить
present|представлять
problem|проблема
probably|вероятно
promise|обещать
protect|защищать
public|общественный
quiet|тихий
realize|осознавать
receive|получать
recent|недавний
record|запись
remember|помнить
repair|ремонтировать
repeat|повторять
reply|отвечать
report|сообщать
return|возвращаться
ride|ехать
rise|подниматься
safe|безопасный
save|сохранять
seem|казаться
several|несколько
share|делиться
simple|простой
single|одиночный
skill|навык
slowly|медленно
solve|решать
somewhere|где-нибудь
sound|звучать
space|пространство
special|особенный
spend|тратить
straight|прямой
strange|странный
subject|предмет
suggest|предлагать
support|поддерживать
suppose|предполагать
surface|поверхность
surprise|удивление
teach|учить
temperature|температура
terrible|ужасный
though|хотя
through|через
together|вместе
toward|по направлению к
traffic|движение
train|поезд
travel|путешествовать
trust|доверять
usually|обычно
value|ценность
various|различный
visit|посещать
voice|голос
weather|погода
weight|вес
whole|целый
wide|широкий
wonder|интересоваться
worth|стоящий
wrong|неправильный
ability|способность
active|активный
actual|фактический
additional|дополнительный
adventure|приключение
afford|позволить себе
amount|количество
ancient|древний
announce|объявлять
anywhere|где угодно
appropriate|подходящий
area|область
argue|спорить
arrangement|договорённость
average|средний
basic|базовый
benefit|польза
care|заботиться
chance|шанс
character|характер
charge|плата
check|проверять
choice|выбор
community|сообщество
contact|контакт
conversation|разговор
create|создавать
customer|клиент
decision|решение
develop|развивать
difference|различие
discuss|обсуждать
education|образование
effect|эффект
environment|окружающая среда
equipment|оборудование
excuse|оправдание
factory|фабрика
feeling|чувство
furniture|мебель
goal|цель
government|правительство
growth|рост
imagine|представлять
important|важный
improve|улучшать
industry|промышленность
information|информация
interest|интерес
interview|собеседование
introduce|представлять
machine|машина
member|член
necessary|необходимый
opportunity|возможность
population|население
position|позиция
project|проект
reason|причина
relationship|отношения
result|результат
situation|ситуация
society|общество
solution|решение
store|магазин
success|успех
system|система
task|задача
technology|технология
training|обучение
unusual|необычный
useful|полезный
`;


// ============================================================
// A2 — 250 слов
// ============================================================

const A2_DATA = `
achieve|достигать
active|активный
admire|восхищаться
advantage|преимущество
affect|влиять
afford|позволить себе
announce|объявлять
anxious|тревожный
apologize|извиняться
apply|применять
appointment|встреча
argue|спорить
arrange|организовывать
atmosphere|атмосфера
attend|посещать
average|средний
aware|осведомлённый
behave|вести себя
believable|правдоподобный
belong|принадлежать
benefit|преимущество
blame|винить
bother|беспокоить
brief|краткий
calm|спокойный
cancel|отменять
capable|способный
celebrate|праздновать
challenge|вызов
characteristic|характеристика
choice|выбор
claim|утверждать
client|клиент
communicate|общаться
competition|соревнование
complain|жаловаться
concentrate|сосредотачиваться
concern|беспокойство
confidence|уверенность
confident|уверенный
confirm|подтверждать
connect|соединять
consider|рассматривать
contact|связываться
contain|содержать
continue|продолжать
contribute|вносить вклад
convenient|удобный
conversation|разговор
convince|убеждать
curious|любопытный
damage|ущерб
decision|решение
delay|задержка
deliver|доставлять
demand|требовать
describe|описывать
deserve|заслуживать
destroy|разрушать
determine|определять
difference|различие
direct|направлять
disappear|исчезать
disappointed|разочарованный
discover|обнаруживать
distance|расстояние
divide|разделять
download|скачивать
effective|эффективный
effort|усилие
encourage|поощрять
energy|энергия
entire|весь
environment|окружающая среда
equipment|оборудование
escape|сбегать
eventually|в конце концов
exactly|точно
exchange|обмен
exist|существовать
expand|расширять
expect|ожидать
experience|опыт
experiment|эксперимент
explain|объяснять
familiar|знакомый
failure|неудача
feature|особенность
feedback|обратная связь
flexible|гибкий
focus|сосредотачиваться
formal|официальный
fortunately|к счастью
freedom|свобода
frequent|частый
generally|обычно
generation|поколение
goal|цель
gradually|постепенно
harm|вред
identify|определять
ignore|игнорировать
immediately|немедленно
impression|впечатление
improve|улучшать
include|включать
increase|увеличивать
independent|независимый
influence|влияние
inform|информировать
instead|вместо
intelligent|умный
intention|намерение
involve|вовлекать
issue|вопрос
knowledge|знания
lack|нехватка
limit|ограничивать
local|местный
maintain|поддерживать
manage|справляться
measure|измерять
mention|упоминать
method|метод
motivate|мотивировать
necessary|необходимый
negative|отрицательный
obvious|очевидный
occasion|случай
opportunity|возможность
ordinary|обычный
organize|организовывать
original|оригинальный
participate|участвовать
particular|конкретный
patient|терпеливый
perform|выполнять
permission|разрешение
personal|личный
pleasant|приятный
positive|положительный
predict|предсказывать
prevent|предотвращать
process|процесс
produce|производить
progress|прогресс
protect|защищать
provide|предоставлять
purpose|цель
quality|качество
realistic|реалистичный
recommend|рекомендовать
reduce|уменьшать
refuse|отказываться
regular|регулярный
relationship|отношения
remain|оставаться
remove|удалять
replace|заменять
require|требовать
research|исследование
respond|отвечать
responsible|ответственный
result|результат
risk|риск
schedule|расписание
separate|отделять
serious|серьёзный
similar|похожий
specific|конкретный
strength|сила
successful|успешный
suggest|предлагать
support|поддержка
suppose|предполагать
survive|выживать
temporary|временный
tend|иметь тенденцию
theory|теория
traditional|традиционный
typical|типичный
unique|уникальный
variety|разнообразие
volunteer|волонтёр
wonder|интересоваться
achievement|достижение
advertisement|реклама
alternative|альтернатива
analysis|анализ
application|заявление
argument|аргумент
background|предыстория
behavior|поведение
circumstance|обстоятельство
communication|общение
comparison|сравнение
complaint|жалоба
condition|условие
connection|связь
consequence|последствие
construction|строительство
consumer|потребитель
context|контекст
culture|культура
customer|покупатель
definition|определение
development|развитие
discussion|обсуждение
education|образование
employment|занятость
entertainment|развлечение
environmental|экологический
essential|необходимый
expression|выражение
financial|финансовый
government|правительство
individual|отдельный
international|международный
investment|инвестиция
leadership|лидерство
lifestyle|образ жизни
material|материал
modern|современный
natural|естественный
organization|организация
performance|результативность
political|политический
practical|практический
professional|профессиональный
reaction|реакция
resource|ресурс
responsibility|ответственность
security|безопасность
service|услуга
strategy|стратегия
structure|структура
successfully|успешно
technology|технология
transport|транспорт
valuable|ценный
`;


// ============================================================
// B1 — 250 слов
// ============================================================

const B1_DATA = `
acquire|приобретать
adapt|адаптироваться
adequate|достаточный
alternative|альтернатива
analyze|анализировать
anticipate|предвидеть
apparent|очевидный
approach|подход
appropriate|подходящий
assess|оценивать
assume|предполагать
attitude|отношение
attribute|приписывать
authentic|подлинный
barrier|преграда
beneficial|полезный
capacity|способность
category|категория
circumstance|обстоятельство
clarify|прояснять
coherent|связный
commit|совершать
compensate|компенсировать
complex|сложный
component|компонент
comprehensive|всесторонний
concentrate|сосредотачиваться
concept|концепция
conduct|проводить
conflict|конфликт
consequence|последствие
consistent|последовательный
consume|потреблять
contemporary|современный
contradict|противоречить
controversial|спорный
cooperate|сотрудничать
core|основа
crucial|решающий
decline|снижаться
demonstrate|демонстрировать
derive|происходить
detect|обнаруживать
devote|посвящать
distinct|отличный
domestic|внутренний
dominate|доминировать
emerge|возникать
emphasis|акцент
enable|давать возможность
encounter|сталкиваться
enhance|улучшать
ensure|обеспечивать
equivalent|эквивалентный
evaluate|оценивать
evident|очевидный
exclude|исключать
expose|подвергать
facilitate|облегчать
fundamental|основополагающий
generate|создавать
implement|осуществлять
implication|значение
imply|подразумевать
incentive|стимул
incorporate|включать
indicate|указывать
inevitable|неизбежный
initial|первоначальный
innovative|инновационный
insight|понимание
integrate|интегрировать
interpret|интерпретировать
justify|обосновывать
logical|логичный
magnitude|масштаб
modify|изменять
monitor|контролировать
mutual|взаимный
notion|представление
objective|цель
obtain|получать
overall|общий
participate|участвовать
perceive|воспринимать
perspective|перспектива
precise|точный
predict|предсказывать
priority|приоритет
proceed|продолжать
promote|продвигать
proportion|доля
pursue|преследовать
rational|рациональный
recover|восстанавливаться
relevant|уместный
reluctant|неохотный
resolve|решать
retain|сохранять
reveal|раскрывать
rigid|жёсткий
significant|значительный
sufficient|достаточный
sustain|поддерживать
transform|преобразовывать
undergo|проходить
valid|действительный
widespread|широко распространённый
accommodation|жильё
accumulate|накапливать
accurate|точный
acknowledge|признавать
allocate|распределять
appeal|привлекательность
assemble|собирать
cease|прекращать
collapse|рушиться
compelling|убедительный
contemporary|современный
contrary|противоположный
coordinate|координировать
criterion|критерий
deduce|делать вывод
deficiency|недостаток
desirable|желательный
diminish|уменьшать
distribute|распределять
diverse|разнообразный
dynamic|динамичный
eliminate|устранять
empirical|эмпирический
encourage|поощрять
equivalent|равноценный
ethical|этический
exceed|превышать
explicit|явный
fluctuate|колебаться
framework|структура
highlight|выделять
hypothesis|гипотеза
illustrate|иллюстрировать
inhibit|сдерживать
innovate|внедрять новшества
inspect|осматривать
intense|интенсивный
interact|взаимодействовать
justify|оправдывать
mechanism|механизм
objective|объективный
persistent|настойчивый
phenomenon|явление
precisely|точно
predominant|преобладающий
principle|принцип
profound|глубокий
regulate|регулировать
reinforce|укреплять
restrict|ограничивать
simulate|моделировать
specify|уточнять
subsequent|последующий
substantial|значительный
supplement|дополнение
terminate|прекращать
thereby|тем самым
underlying|лежащий в основе
unprecedented|беспрецедентный
utilize|использовать
whereas|тогда как
abstract|абстрактный
accessible|доступный
advocate|выступать за
aggregate|совокупность
ambiguous|неоднозначный
arbitrary|произвольный
coincide|совпадать
compatible|совместимый
contemporary|современный
contradiction|противоречие
crucial|крайне важный
dilemma|дилемма
discrete|отдельный
distinctive|характерный
diversity|разнообразие
domain|область
duration|продолжительность
exhibit|демонстрировать
extract|извлекать
feasible|осуществимый
flaw|недостаток
forthcoming|предстоящий
inherent|присущий
integral|неотъемлемый
intervene|вмешиваться
intrinsic|внутренне присущий
invoke|вызывать
manual|ручной
mature|зрелый
mediate|посредничать
minimal|минимальный
ongoing|текущий
orient|ориентировать
paradigm|парадигма
persistent|устойчивый
precede|предшествовать
preliminary|предварительный
presume|предполагать
protocol|протокол
refine|совершенствовать
regime|режим
reluctance|нежелание
restore|восстанавливать
substitute|заменять
transmit|передавать
trigger|вызывать
underestimate|недооценивать
unify|объединять
upgrade|модернизировать
versatile|универсальный
violate|нарушать
voluntary|добровольный
`
;


// ============================================================
// B2 — 250 слов
// ============================================================

const B2_DATA = `
abandon|отказываться
abolish|отменять
abrupt|резкий
absurd|абсурдный
accelerate|ускорять
accommodate|приспосабливать
accumulate|накапливать
adjacent|смежный
allege|утверждать
allocate|распределять
amend|вносить поправки
anticipate|предвидеть
apparent|очевидный
arbitrary|произвольный
articulate|формулировать
assert|утверждать
attain|достигать
attribute|приписывать
authenticity|подлинность
autonomous|автономный
bias|предвзятость
cease|прекращать
coherent|связный
coincide|совпадать
commence|начинать
compel|вынуждать
compile|составлять
complement|дополнять
comprise|состоять из
conceive|представлять
concurrent|одновременный
confine|ограничивать
conform|соответствовать
consecutive|последовательный
consent|согласие
constrain|ограничивать
contemplate|обдумывать
contradictory|противоречивый
convey|передавать
correspond|соответствовать
credible|заслуживающий доверия
crude|грубый
dedicate|посвящать
deficit|дефицит
depict|изображать
deprive|лишать
devise|разрабатывать
diminish|уменьшать
disclose|раскрывать
discrete|отдельный
distort|искажать
divert|отвлекать
elaborate|подробный
empirical|эмпирический
encounter|сталкиваться
endure|выдерживать
enhance|усиливать
enormous|огромный
entail|влечь за собой
equivalent|эквивалентный
erode|размывать
exaggerate|преувеличивать
exclude|исключать
exploit|использовать
facilitate|облегчать
feasible|осуществимый
fluctuate|колебаться
formulate|формулировать
forthcoming|предстоящий
foster|способствовать
frustrate|расстраивать
fundamental|основополагающий
hierarchy|иерархия
implicit|неявный
incentive|стимул
incidence|частота
inherent|присущий
innovative|инновационный
inspect|проверять
integrity|целостность
intervene|вмешиваться
intricate|сложный
invoke|вызывать
isolate|изолировать
legitimate|законный
likewise|аналогично
magnitude|величина
manipulate|манипулировать
marginal|незначительный
mediate|посредничать
migration|миграция
notwithstanding|несмотря на
ongoing|продолжающийся
overlap|перекрываться
paradox|парадокс
persistent|настойчивый
plausible|правдоподобный
precise|точный
predominant|преобладающий
preliminary|предварительный
presume|предполагать
profound|глубокий
prominent|выдающийся
protocol|протокол
radical|радикальный
refine|совершенствовать
reinforce|укреплять
reluctant|неохотный
reside|проживать
retain|сохранять
rigid|жёсткий
simultaneous|одновременный
solely|исключительно
sophisticated|сложный
subordinate|подчинённый
subsequent|последующий
subtle|тонкий
suppress|подавлять
sustain|поддерживать
terminate|прекращать
transmit|передавать
trigger|вызывать
undermine|подрывать
unify|объединять
versatile|универсальный
viable|жизнеспособный
widespread|широко распространённый
yield|давать результат
acquisition|приобретение
adaptation|адаптация
advocate|сторонник
ambiguity|неоднозначность
analogy|аналогия
applicable|применимый
assumption|предположение
authentic|подлинный
capacity|вместимость
commodity|товар
compatibility|совместимость
competence|компетентность
complexity|сложность
concession|уступка
configuration|конфигурация
conformity|соответствие
consensus|консенсус
constraint|ограничение
consult|консультироваться
controversy|спор
conventional|традиционный
criterion|критерий
cumulative|накопленный
deficiency|недостаток
demographic|демографический
deviation|отклонение
discourse|дискурс
distinction|различие
diverse|разнообразный
domain|область
dynamic|динамичный
eligible|имеющий право
emission|выброс
empower|расширять возможности
equation|уравнение
ethical|этический
explicit|явный
exploitation|эксплуатация
framework|структура
globalization|глобализация
hypothesis|гипотеза
implementation|осуществление
implication|последствие
infrastructure|инфраструктура
inhibit|сдерживать
innovation|инновация
inspection|проверка
integration|интеграция
intermediate|промежуточный
interpretation|интерпретация
justification|обоснование
legislation|законодательство
mechanism|механизм
notion|представление
objective|цель
orientation|ориентация
paradigm|парадигма
parameter|параметр
perspective|перспектива
precedent|прецедент
predominantly|преимущественно
preservation|сохранение
priority|приоритет
proportion|пропорция
rational|рациональный
regulation|регулирование
relevance|актуальность
restraint|сдержанность
scenario|сценарий
specification|спецификация
stability|стабильность
substantial|существенный
supplementary|дополнительный
transformation|преобразование
transparency|прозрачность
underlying|основополагающий
validity|обоснованность
`
;


// ============================================================
// C1 — 250 слов
// ============================================================

const C1_DATA = `
abate|ослабевать
aberration|отклонение
abide|соблюдать
abruptly|внезапно
acclaim|признание
accommodate|приспосабливать
accomplice|соучастник
accordingly|соответственно
adverse|неблагоприятный
advocate|отстаивать
albeit|хотя
alleviate|смягчать
ambiguous|неоднозначный
amendment|поправка
analogous|аналогичный
anomaly|аномалия
anticipatory|предвосхищающий
apprehensive|опасающийся
arbitrary|произвольный
articulate|чётко выражать
assertion|утверждение
astute|проницательный
attainable|достижимый
attribute|характеристика
authenticity|подлинность
autonomous|автономный
benevolent|доброжелательный
bolster|укреплять
brevity|краткость
candid|откровенный
causal|причинный
coerce|принуждать
coherent|логичный
collaborative|совместный
commensurate|соразмерный
compelling|убедительный
comprehensive|всесторонний
conceivably|теоретически
concede|признавать
concurrent|одновременный
condone|потакать
conspicuous|заметный
constitute|составлять
constrain|ограничивать
contentious|спорный
contradiction|противоречие
conundrum|сложная проблема
corroborate|подтверждать
credible|достоверный
cumulative|накопительный
deceptive|обманчивый
deduce|делать вывод
defer|откладывать
deliberate|преднамеренный
delineate|очерчивать
denote|обозначать
deplete|истощать
deplore|сожалеть
derivative|производный
deter|удерживать
detrimental|вредный
deviate|отклоняться
discerning|проницательный
discrete|отдельный
disparity|неравенство
disseminate|распространять
divergent|расходящийся
dubious|сомнительный
elicit|вызывать
elusive|неуловимый
empirical|эмпирический
encompass|охватывать
endeavor|стремление
enduring|долговечный
enhance|усиливать
entail|влечь за собой
ephemeral|мимолётный
equivocal|двусмысленный
erode|разрушать
erroneous|ошибочный
exacerbate|усугублять
exemplify|служить примером
exhaustive|исчерпывающий
expedite|ускорять
explicitly|явно
exploitative|эксплуататорский
facilitate|облегчать
feasible|осуществимый
fluctuation|колебание
formidable|внушительный
forthcoming|предстоящий
frivolous|несерьёзный
fundamental|основополагающий
futile|бесполезный
garner|собирать
haphazard|беспорядочный
hinder|мешать
holistic|целостный
hypothetical|гипотетический
illuminate|прояснять
immutable|неизменный
impartial|беспристрастный
implicit|подразумеваемый
inadvertent|непреднамеренный
incompatible|несовместимый
incorporate|включать
indispensable|незаменимый
inept|неумелый
inherent|присущий
intrinsic|внутренне присущий
invoke|вызывать
irreversible|необратимый
jeopardize|ставить под угрозу
legitimate|законный
lucrative|прибыльный
meticulous|скрупулёзный
mitigate|смягчать
mundane|обыденный
negligible|незначительный
notwithstanding|несмотря на
nuance|тонкий оттенок
obsolete|устаревший
omnipresent|вездесущий
paradigm|парадигма
pervasive|всеобъемлющий
plausible|правдоподобный
precarious|ненадёжный
precedent|прецедент
profound|глубокий
prohibit|запрещать
proliferate|быстро распространяться
prudent|благоразумный
quantify|количественно оценивать
rationale|обоснование
reconcile|согласовывать
redundant|избыточный
refute|опровергать
reinstate|восстанавливать
reluctance|нежелание
repercussion|последствие
resilient|устойчивый
scrutinize|тщательно изучать
subsequent|последующий
substantiate|подтверждать
subtle|тонкий
supersede|заменять
suppress|подавлять
tangible|осязаемый
tentative|предварительный
thwart|препятствовать
transcend|выходить за пределы
ubiquitous|повсеместный
unprecedented|беспрецедентный
validate|подтверждать
viable|жизнеспособный
vigilant|бдительный
virtually|практически
vulnerable|уязвимый
withstand|выдерживать
yield|давать результат
zealous|рьяный
aggregate|совокупность
ambivalence|двойственность
analogous|аналогичный
apprehend|понимать
articulation|формулировка
assertive|напористый
brevity|краткость
circumvent|обходить
cohesive|сплочённый
comply|соблюдать
conclusive|убедительный
concurrent|параллельный
confer|советоваться
conform|соответствовать
connotation|подтекст
consensus|согласие
constrain|ограничивать
contemplate|обдумывать
contention|спорное утверждение
conventional|традиционный
correlation|взаимосвязь
credible|правдоподобный
cumulative|накопительный
deteriorate|ухудшаться
discrepancy|расхождение
discretion|усмотрение
disrupt|нарушать
distort|искажать
diversify|разнообразить
elaborate|подробный
eminent|выдающийся
encompassing|охватывающий
endorse|поддерживать
equitable|справедливый
exert|прилагать
extrapolate|экстраполировать
facilitation|облегчение
fluctuate|колебаться
foster|способствовать
inference|вывод
inhibit|сдерживать
innovative|инновационный
integral|неотъемлемый
intervene|вмешиваться
intricate|запутанный
legislation|законодательство
mandatory|обязательный
marginal|незначительный
monetary|денежный
negligence|халатность
normative|нормативный
offset|компенсировать
perpetuate|увековечивать
prevalent|распространённый
provisional|временный
reciprocal|взаимный
requisite|необходимый
retrospective|ретроспективный
scrutiny|тщательное изучение
subordinate|подчинённый
substantial|значительный
supplement|дополнять
transient|временный
unwarranted|неоправданный
versatile|многосторонний
`
;


// ============================================================
// C2 — 250 слов
// ============================================================

const C2_DATA = `
abject|крайний
abrogate|отменять
acquiesce|уступать
acrimonious|язвительный
adamant|непреклонный
admonish|предостерегать
adroit|искусный
aesthetic|эстетический
affable|приветливый
alacrity|готовность
alleviate|смягчать
ambivalent|двойственный
ameliorate|улучшать
anachronistic|устаревший
antagonistic|враждебный
apathetic|апатичный
appease|умиротворять
arbitrary|произвольный
arcane|тайный
arduous|трудный
artifice|уловка
assiduous|усердный
audacious|дерзкий
auspicious|благоприятный
austere|строгий
avarice|жадность
belligerent|воинственный
benevolent|благожелательный
bombastic|напыщенный
cacophony|какофония
capricious|капризный
catalyst|катализатор
circumspect|осмотрительный
clandestine|тайный
coalesce|сливаться
cogent|убедительный
commensurate|соразмерный
complicity|соучастие
conciliatory|примирительный
conflagration|пожар
conjecture|предположение
connoisseur|знаток
conscientious|добросовестный
contemptuous|презрительный
contentious|спорный
contrite|раскаивающийся
copious|обильный
corroborate|подтверждать
credulous|доверчивый
cryptic|загадочный
culminate|завершаться
cumbersome|громоздкий
deference|почтительность
deleterious|вредный
demagogue|демагог
denigrate|очернять
deride|высмеивать
despondent|унылый
diatribe|резкая критика
dichotomy|разделение
diffident|неуверенный
dilatory|медлительный
disparate|разнородный
disseminate|распространять
dogmatic|догматичный
duplicity|двуличие
ebullient|жизнерадостный
eclectic|эклектичный
efficacious|эффективный
egregious|вопиющий
elucidate|прояснять
emulate|подражать
enervate|ослаблять
engender|порождать
enigmatic|загадочный
ephemeral|мимолётный
equivocate|уклоняться от ответа
erudite|эрудированный
esoteric|эзотерический
exacerbate|усугублять
exculpate|оправдывать
exigent|неотложный
extol|превозносить
fastidious|привередливый
fecund|плодородный
florid|цветистый
fortuitous|случайный
fractious|сварливый
garrulous|болтливый
grandiose|грандиозный
gregarious|общительный
hackneyed|заезженный
harangue|длинная речь
hegemony|гегемония
iconoclast|ниспровергатель
idiosyncratic|своеобразный
immutable|неизменный
impasse|тупик
impecunious|бедный
impervious|непроницаемый
implacable|неумолимый
inchoate|неоформленный
incisive|проницательный
incontrovertible|неоспоримый
indefatigable|неутомимый
indolent|ленивый
ineffable|невыразимый
inexorable|неумолимый
ingenuous|искренний
insidious|коварный
insipid|безвкусный
insolent|дерзкий
intrepid|бесстрашный
inveterate|укоренившийся
irascible|вспыльчивый
laconic|немногословный
laudable|похвальный
loquacious|разговорчивый
magnanimous|великодушный
malevolent|злонамеренный
malleable|податливый
mercurial|переменчивый
meticulous|скрупулёзный
misanthropic|человеконенавистнический
mitigate|смягчать
morose|угрюмый
munificent|щедрый
nefarious|гнусный
negligent|небрежный
nonchalant|беззаботный
obdurate|упрямый
obfuscate|затемнять
obsequious|угодливый
obstinate|упрямый
omnipotent|всемогущий
onerous|обременительный
opprobrium|позор
ostensible|кажущийся
ostracize|изгонять
palpable|ощутимый
paradigmatic|парадигматический
parsimonious|скупой
perfunctory|поверхностный
pernicious|вредоносный
perspicacious|проницательный
pertinent|уместный
phlegmatic|невозмутимый
placate|успокаивать
platitude|банальность
plethora|избыток
pragmatic|прагматичный
precocious|одарённый
preclude|исключать возможность
prodigious|огромный
profligate|расточительный
prolific|плодотворный
propensity|склонность
proponent|сторонник
prosaic|заурядный
quintessential|типичный
recalcitrant|непокорный
recondite|трудный для понимания
redoubtable|внушительный
relinquish|отказываться
remiss|небрежный
reprehensible|предосудительный
rescind|отменять
reticent|неразговорчивый
reverent|почтительный
sagacious|мудрый
salient|наиболее заметный
sanctimonious|лицемерно благочестивый
scrupulous|щепетильный
serendipity|счастливая случайность
soporific|усыпляющий
spurious|ложный
staid|сдержанный
steadfast|непоколебимый
stoic|стойкий
subjugate|покорять
superfluous|излишний
surreptitious|тайный
sycophant|льстец
tacit|молчаливый
tantamount|равнозначный
tenacious|упорный
terse|краткий
tirade|гневная речь
transient|временный
trenchant|резкий
ubiquitous|повсеместный
untenable|неприемлемый
vacillate|колебаться
venerable|почтенный
veracity|правдивость
verbose|многословный
vindicate|оправдывать
vociferous|крикливый
wary|настороженный
whimsical|причудливый
zealous|рьяный
abstruse|трудный для понимания
acrimony|озлобленность
bellicose|воинственный
circumlocution|иносказание
confluent|сливающийся
deleterious|вредный
desultory|бессистемный
disingenuous|неискренний
effrontery|наглость
equanimity|невозмутимость
exigent|срочный
fastidiousness|щепетильность
intransigent|непримиримый
juxtapose|сопоставлять
mendacious|лживый
obviate|устранять необходимость
perfidious|вероломный
perspicuity|ясность
reprobate|порочный человек
reticence|сдержанность
solicitous|заботливый
taciturn|молчаливый
vicissitude|перемена обстоятельств
`
;


// ============================================================
// СОЗДАЁМ WORDS
// ============================================================

const WORDS = {

    A1: makeWords(A1_DATA, "A1"),

    A2: makeWords(A2_DATA, "A2"),

    B1: makeWords(B1_DATA, "B1"),

    B2: makeWords(B2_DATA, "B2"),

    C1: makeWords(C1_DATA, "C1"),

    C2: makeWords(C2_DATA, "C2")

};


// ============================================================
// ДЕЛАЕМ WORDS ДОСТУПНЫМ ДЛЯ ПРИЛОЖЕНИЯ
// ============================================================

window.WORDS = WORDS;


// ============================================================
// ПРОВЕРКА
// ============================================================

console.log("English Words загружен.");

console.log("A1:", WORDS.A1.length);
console.log("A2:", WORDS.A2.length);
console.log("B1:", WORDS.B1.length);
console.log("B2:", WORDS.B2.length);
console.log("C1:", WORDS.C1.length);
console.log("C2:", WORDS.C2.length);

console.log(
    "Всего:",
    Object.values(WORDS)
        .reduce((sum, level) => sum + level.length, 0)
);


// ============================================================
// СООБЩАЕМ SCRIPT.JS, ЧТО СЛОВА ГОТОВЫ
// ============================================================

window.dispatchEvent(
    new CustomEvent("wordsReady")
);
