import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type Card = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/auto-model-review';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Дилеры премиум-сегмента',
        text: 'Для площадок с BMW, Mercedes, Lexus, Porsche в наличии, где важна экспертная подача и честный осмотр.',
    },
    {
        title: 'Экспортные площадки',
        text: 'Для команд, работающих с покупателями из Казахстана, России и Европы, которые выбирают автомобиль удалённо.',
    },
    {
        title: 'Мультибрендовые автоцентры',
        text: 'Если у вас 20+ позиций одной модели (Camry, Prius, кроссоверы), обзор превращается в универсальный продающий актив.',
    },
    {
        title: 'Автоподборщики и автоэксперты',
        text: 'Для специалистов, которые строят YouTube-канал и хотят монетизировать экспертность через контент.',
    },
    {
        title: 'Площадки Руставского авторынка',
        text: 'Там, где покупатель особенно часто принимает решение по видео до личного визита в Грузию.',
    },
    {
        title: 'Дилеры с высокой нагрузкой на менеджеров',
        text: 'Если устали от десятков одинаковых звонков по одной машине, обзор закрывает основные вопросы заранее.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Экономит время продавца',
        text: 'Один структурированный обзор заменяет 20-30 одинаковых диалогов: «как кузов?», «что с салоном?», «смотрели на подъёмнике?».',
    },
    {
        title: 'Закрывает сделки удалённо',
        text: 'Покупатель из Алматы или Варшавы получает полный контекст, задаёт 2-3 точных вопроса и быстрее готов к задатку.',
    },
    {
        title: 'Строит экспертный YouTube-канал',
        text: 'Плейлисты по моделям и сегментам формируют органический трафик, который не зависит от рекламного бюджета.',
    },
    {
        title: 'Повышает воспринимаемую цену',
        text: 'Та же машина с качественным видеообзором выглядит ценнее, чем лот только с фотографиями и коротким описанием.',
    },
];

const painCards: Card[] = [
    {
        title: '«Один и тот же вопрос 30 раз в день»',
        text: '«Можно фото кузова под светом?», «подъёмник был?», «что с ЛКП?» — видео отвечает на это до звонка.',
    },
    {
        title: '«Удалённый покупатель не верит фотографиям»',
        text: 'Фото можно снять так, чтобы скрыть дефекты. Честный обзор с крупными планами и кузовным осмотром снижает недоверие.',
    },
    {
        title: '«Машина висит на площадке 60+ дней»',
        text: 'Долгая продажа = хранение + уценка. Видео ускоряет оборот, потому что приводит более подготовленные лиды.',
    },
    {
        title: '«Канал есть, а системного контента нет»',
        text: 'Хаотичные публикации не растят аудиторию. Нужны повторяемые структурные обзоры и плейлисты по моделям.',
    },
    {
        title: '«Конкуренты продают такие же машины дешевле»',
        text: 'При двух похожих объявлениях побеждает цена. При наличии честного обзора покупатель часто выбирает вас, даже дороже.',
    },
    {
        title: '«Клиент приехал и разочаровался»',
        text: 'Если ожидания не совпали с реальностью, растёт риск возврата, конфликта и репутационных потерь. Обзор это предотвращает.',
    },
];

const earnPoints: string[] = [
    'Больше предоплат от удалённых покупателей: детальный обзор повышает готовность к задатку без личного визита.',
    'Выше цена лота: клиент, который уже увидел честный обзор, реже давит на торг.',
    'YouTube-трафик без рекламного бюджета: обзоры Camry, Prius и кроссоверов из Грузии получают органические просмотры.',
    'Контент работает долго: обзор популярной модели можно использовать годами для новых покупателей.',
];

const avoidLossPoints: string[] = [
    'Меньше возвратов и конфликтов за счёт точного ожидания состояния авто до визита.',
    'Меньше времени менеджеров на типовые ответы в WhatsApp и мессенджерах.',
    'Снижение риска «висяков»: лоты с обзором обычно продаются быстрее.',
    'Защита репутации: честный видеоосмотр фиксирует состояние машины на момент публикации.',
];

const deliverables: string[] = [
    'Full Model Review: обзор 3-8 минут с экстерьером, интерьером, кузовом под светом, пробегом, комплектацией, плюсами и минусами.',
    'Short Listing Cut: 45-60 секунд для MyAuto, мессенджеров и сайта.',
    'Кадры под подъёмником: видео и фото нижней части кузова для прозрачного осмотра.',
    'Key Frame Package: 10-15 качественных кадров экстерьера, интерьера и деталей.',
    'Spec Slide: графическая карточка с ключевыми характеристиками лота.',
    'Voiceover / Caption Script: готовый текст закадрового комментария или субтитров RU/EN.',
    'Playlist Structuring Notes: рекомендации по группировке обзоров на YouTube-канале.',
];

const useCases: Card[] = [
    {
        title: 'Экспортный дилер Toyota Camry, Рустави',
        text: 'Снимаем «типовой» обзор Camry для СНГ: на что смотреть, плюсы/минусы, почему берут из Грузии. Один ролик работает на серию похожих лотов.',
    },
    {
        title: 'BMW/Mercedes дилер, Дигоми',
        text: 'Индивидуальный обзор каждой машины: отделка, состояние кожи, кузовной осмотр и тест-проезд. Покупатель из Европы переводит предоплату после просмотра.',
    },
    {
        title: 'Автоподборщик строит YouTube-канал',
        text: 'Серия обзоров «топ по бюджету», «почему везут из Грузии», «как проверить пробег» создаёт стабильный поток подписчиков и клиентов.',
    },
    {
        title: 'Мультибрендовая площадка обновляет сайт',
        text: 'Короткие обзоры по категориям: седаны, кроссоверы, электромобили. Посетитель смотрит видео в карточке и звонит уже тёплым.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Серия обзоров Toyota Camry 70 для СНГ-рынка',
        text: 'Экспортная площадка выпустила 5 обзоров комплектаций Camry с RU-описаниями. Через 2 месяца пошли органические запросы из Казахстана и России.',
    },
    {
        title: 'Индивидуальный обзор BMW X5 для покупателя из Польши',
        text: 'Сняли детальный кузовной осмотр, кадры на подъёмнике и тест-проезд. Предоплата поступила в день отправки ролика.',
    },
    {
        title: 'Плейлист «Гибриды для Казахстана»',
        text: 'Серия Prius/Aqua/Leaf дала стабильные просмотры от целевой аудитории и несколько удалённых сделок по экспорту.',
    },
];

const socialProofBullets: string[] = [
    'Покупатели, посмотревшие обзор до звонка, задают в среднем в 3 раза меньше уточняющих вопросов (по данным дилеров, работающих с видео).',
    '72% покупателей предпочитают видео тексту при принятии решения о крупной покупке.',
    'YouTube-каналы дилеров с регулярными обзорами показывают более стабильный органический рост без платного продвижения.',
    'Экспортные дилеры отмечают: лоты с видеообзорами продаются на 30-40% быстрее лотов только с фото.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'В чём разница между коротким Reels и полноценным обзором?',
        answer:
            'Reels (15-60 сек) привлекает внимание и охват. Обзор 3-8 минут даёт полный контекст для решения. Reels приводит, обзор закрывает сделку. Лучше использовать оба формата.',
    },
    {
        question: 'Нужно ли снимать обзор на каждую машину?',
        answer:
            'Нет. Обычно эффективнее начать с «типовых» лотов и популярных моделей. Один обзор Camry 2022 может работать на несколько похожих авто в стоке.',
    },
    {
        question: 'Можно ли использовать обзор на MyAuto.ge?',
        answer:
            'Да. Загружаем видео на YouTube и добавляем ссылку в объявление на MyAuto. Такие объявления заметнее и получают больше вовлечения.',
    },
    {
        question: 'Нужен ли диктор или достаточно субтитров?',
        answer:
            'Оба варианта рабочие. Живой голос эксперта чаще даёт больше доверия, субтитры подходят как удобная альтернатива.',
    },
    {
        question: 'Как быстро ролики начинают находиться на YouTube?',
        answer:
            'При правильных заголовках и описаниях ролики обычно начинают попадать в поиск через 2-4 недели после публикации.',
    },
    {
        question: 'Снимаете ли вы битые или восстановленные авто?',
        answer:
            'Да. Наш стандарт — честный осмотр, включая следы ремонта. Это снижает риск споров и укрепляет репутацию продавца.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеообзор одного автомобиля?',
        answer:
            'От 350 ₾ за базовый обзор одного автомобиля. При пакете 3+ обзоров стоимость за единицу ниже. Финальная цена зависит от объёма и форматов.',
    },
    {
        question: 'Можно ли снять сразу несколько машин в один день?',
        answer:
            'Да, это базовый и самый выгодный формат: обычно 3-5 автомобилей за съёмочный день.',
    },
    {
        question: 'Входит ли подъёмник в стандартную съёмку?',
        answer:
            'Кадры снизу кузова включены в Standard и Full. Если на площадке нет подъёмника, можно использовать партнёрский сервис или смотровую яму.',
    },
    {
        question: 'Нужно ли готовить машину к съёмке?',
        answer:
            'Желательно: мойка, порядок в салоне, базовая подготовка. Мелкие дефекты показываем честно — не маскируем.',
    },
    {
        question: 'Как долго используется один обзор?',
        answer:
            'Для конкретного лота — до продажи. Для типового обзора модели — несколько лет, пока модель актуальна на рынке.',
    },
    {
        question: 'Делаете ли вы обзоры на английском?',
        answer:
            'Да. По запросу делаем EN-версию или EN-субтитры для европейской и международной аудитории.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Экспертиза грузинского авторынка',
        text: 'Понимаем логику удалённого покупателя из СНГ: важна честность, кузовной осмотр и конкретика без рекламного шума.',
    },
    {
        title: 'Технический уровень съёмки',
        text: '4K, правильный свет для кузова, стабилизация и читаемый монтаж. Машина в кадре выглядит реалистично и профессионально.',
    },
    {
        title: 'Структурный сценарий',
        text: 'Каждый обзор строится по логике решения: экстерьер -> интерьер -> кузов -> выводы.',
    },
    {
        title: 'YouTube-стратегия в комплекте',
        text: 'Помогаем с заголовками, описаниями и плейлистами, чтобы канал рос органически, а не только за счёт рекламы.',
    },
    {
        title: 'Быстрый оборот продакшна',
        text: 'Бриф накануне, съёмка в согласованный слот, монтаж обычно в пределах 5-10 рабочих дней.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Бриф (1-2 дня)',
        text: 'Собираем список машин, приоритеты, целевую аудиторию и набор форматов на выходе.',
    },
    {
        title: 'Подготовка (1-2 дня)',
        text: 'Делаем сценарный план и чеклист для продавца/площадки, чтобы съёмочный день прошёл без пауз.',
    },
    {
        title: 'Съёмочный день',
        text: 'Снимаем 3-5 машин с кузовным осмотром и тест-проездом при необходимости.',
    },
    {
        title: 'Монтаж и постпродакшн (5-8 дней)',
        text: 'Собираем ролики, делаем цвет, добавляем субтитры и подготавливаем spec slides.',
    },
    {
        title: 'Передача + рекомендации',
        text: 'Отдаём готовые файлы через Google Drive и даём советы по YouTube-заголовкам и описаниям.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic — «Лот»',
        price: 'от 350 ₾ / авто',
        audience: 'Разовый обзор конкретного лота под продажу',
        timeline: '5-7 рабочих дней',
        items: ['Полный обзор 3-5 мин (горизонтальный)', 'Short Cut 45-60 сек', '10 фотографий', 'Субтитры RU'],
    },
    {
        title: 'Standard — «Модель»',
        price: 'от 900 ₾ / 3 авто',
        audience: 'Серия обзоров одной модели или старт YouTube-канала',
        timeline: '7-9 рабочих дней',
        featured: true,
        items: [
            '3 полных обзора по 4-6 мин',
            'Short Cut для каждого автомобиля',
            'Кадры под подъёмником',
            'Spec Slides для каждого авто',
            'Субтитры RU/EN',
            'Playlist notes',
        ],
    },
    {
        title: 'Full — «Канал»',
        price: 'от 2 000 ₾ / 6-8 авто',
        audience: 'Экспортный дилер или автоподборщик с акцентом на YouTube',
        timeline: '8-10 рабочих дней',
        items: [
            '6-8 полных обзоров с тест-проездами',
            'Short Cuts для MyAuto и мессенджеров',
            'Voiceover или субтитры RU/EN',
            'Key Frame Package для каждого авто',
            'YouTube Structuring + SEO-подсказки по заголовкам',
            'Рекомендации по аудитории Казахстана и России',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают только экстерьер',
        text: 'Покупателю нужны интерьер, кузов под светом и фактура состояния. Без этого обзор кажется неполным и вызывает недоверие.',
    },
    {
        title: 'Делают «продающий» ролик вместо честного',
        text: 'Если всё выглядит идеально без деталей, аудитория воспринимает ролик как рекламу, а не как экспертный осмотр.',
    },
    {
        title: 'Не структурируют YouTube-канал',
        text: 'Без плейлистов и ключевых слов алгоритм хуже понимает тематику, и органический поиск практически не растёт.',
    },
    {
        title: 'Снимают один раз и ждут поток клиентов',
        text: 'Один ролик — это одна точка входа. Стабильный органический поток появляется при серийном контенте.',
    },
    {
        title: 'Пропускают Short Cut для MyAuto',
        text: 'Полный обзор нужен для YouTube, но в объявлении короткая версия работает лучше по первому вниманию.',
    },
    {
        title: 'Не используют RU-ключевые слова в описании',
        text: '«Toyota Camry из Грузии», «авто в Казахстан» и похожие формулировки критичны для релевантного поиска.',
    },
];

const improveWithoutPurchase: string[] = [
    'Добавьте в описания уже опубликованных роликов модель, год, «из Грузии» и ваш город/площадку.',
    'Создайте плейлисты по моделям (Camry, Prius, кроссоверы), чтобы YouTube чаще рекомендовал ролики внутри канала.',
    'Поставьте ссылки на YouTube в профиль MyAuto и Instagram для бесплатного перетока трафика.',
    'Снимайте хотя бы один крупный план кузова под прямым светом на каждый лот — это самый запрашиваемый кадр.',
    'Проверяйте поисковые запросы в YouTube Studio и адаптируйте заголовки под реальные формулировки аудитории.',
];

const checklistItems: string[] = [
    'Машина вымыта снаружи и в салоне.',
    'Пепельница очищена, коврики приведены в порядок.',
    'Есть доступ к подъёмнику или смотровой яме.',
    'Подготовлен список: комплектация, год, пробег, история.',
    'Машина заведена, климат/мультимедиа/кнопки проверены.',
    'Вокруг авто минимум 2 метра свободного пространства для съёмки.',
    'Согласован формат: обзор конкретного лота или типовой обзор модели.',
    'Определён формат подачи: живая речь эксперта или субтитры.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видеообзор лучше фотографий для экспортных продаж?',
        answer: [
            'Покупатель, который берёт машину «из Грузии», часто не может приехать на первичный осмотр. Он принимает решение по онлайн-информации.',
            'Фото можно отобрать так, чтобы скрыть дефекты. Видео сложнее «пригладить»: движение камеры, свет и крупные планы показывают реальное состояние.',
            'Кузовной осмотр под светом и кадры снизу снимают главный страх удалённого клиента и ускоряют решение о задатке.',
        ],
    },
    {
        question: 'Как строить YouTube-канал для автобизнеса в Грузии?',
        answer: [
            'Канал эффективнее растёт по плейлистам: «Toyota по бюджетам», «Гибриды для Казахстана», «Честные обзоры из Рустави».',
            'Заголовок должен быть поисковым: «Toyota Camry 2022 из Грузии — честный обзор для Казахстана» обычно работает лучше, чем общий заголовок.',
            'В первые 30 дней алгоритм активно тестирует ролик. Ключевые факторы — CTR превью и удержание в первые минуты просмотра.',
        ],
    },
    {
        question: 'Сколько обзоров нужно для первых результатов?',
        answer: [
            'Практическое правило: около 10 обзоров дают первые стабильные органические показы.',
            'Диапазон 20-30 обзоров обычно даёт более предсказуемый поток просмотров и входящих вопросов.',
            'После 50+ роликов канал начинает работать как самостоятельный источник лидов и продолжает приносить заявки без постоянного рекламного бюджета.',
        ],
    },
    {
        question: 'Какие машины снимать в первую очередь?',
        answer: [
            'Приоритет — типовые лоты, которые постоянно есть в наличии: Camry 70, Prius, RAV4, массовые кроссоверы.',
            'Один качественный обзор типовой модели может закрывать вопросы по нескольким похожим машинам в стоке.',
            'Индивидуальные обзоры особенно выгодны для дорогих и нестандартных лотов (обычно от $20 000+).',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое обзорный видеоконтент по автомобилям?',
        answer:
            'Это структурированный ролик 3-8 минут о конкретной машине или модели: экстерьер, интерьер, состояние кузова, комплектация и ключевые выводы.',
    },
    {
        question: 'Зачем автодилеру в Тбилиси видеообзоры машин?',
        answer:
            'Удалённые покупатели из СНГ и Европы принимают решение по видео. Обзор заменяет первичный визит и ускоряет согласование сделки.',
    },
    {
        question: 'Сколько стоит видеообзор автомобиля в Тбилиси?',
        answer:
            'Базовый обзор — от 350 ₾. Пакет 3 обзоров — от 900 ₾. Полный пакет 6-8 обзоров для канала — от 2 000 ₾.',
    },
    {
        question: 'Как использовать видеообзор для продажи на MyAuto.ge?',
        answer:
            'Загрузить ролик на YouTube и добавить ссылку в карточку объявления. Объявления с видео обычно заметнее в ленте.',
    },
    {
        question: 'Помогает ли видеообзор при экспорте авто из Грузии?',
        answer:
            'Да. Для покупателей из Казахстана, России и Беларуси честный видеоосмотр снижает ключевые риски и ускоряет решение.',
    },
    {
        question: 'Можно ли снять несколько обзоров за один день?',
        answer: 'Да, стандартный темп — 3-5 автомобилей за съёмочный день, что обычно выгоднее по себестоимости.',
    },
    {
        question: 'Нужен ли диктор в видеообзоре?',
        answer:
            'Живой голос эксперта обычно усиливает доверие. Альтернатива — полные субтитры RU/EN. Оба формата применимы.',
    },
    {
        question: 'Где публиковать видеообзоры автомобилей?',
        answer:
            'YouTube как основная платформа, ссылка в объявлениях MyAuto.ge, короткие версии в Instagram Reels и на сайте дилера.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'YouTube — это только для блогеров, не для дилеров.',
        reality:
            'YouTube — один из главных поисковых каналов. По запросам вроде «Camry из Грузии» люди ищут именно автомобили, которые вы продаёте.',
    },
    {
        myth: 'Покупатели смотрят только обзоры автожурналов.',
        reality:
            'Покупателю подержанного авто чаще нужен честный осмотр «как есть». Такой формат от дилера работает практичнее глянца.',
    },
    {
        myth: 'Обзор одной машины слишком дорогой для каждого лота.',
        reality:
            'Типовой обзор модели может работать сразу на 10 похожих машин и экономить время отдела продаж.',
    },
    {
        myth: 'На обзоры нет времени.',
        reality:
            'Один съёмочный день обычно закрывает 3-5 роликов. Это регулярный, но не тяжёлый операционный цикл.',
    },
    {
        myth: 'Конкуренты уже делают обзоры, мы не выделимся.',
        reality:
            'Большая часть рынка всё ещё без системного видео. Ранний системный контент всё ещё даёт конкурентное преимущество.',
    },
];

const glossary: Card[] = [
    {
        title: 'Лот',
        text: 'Конкретный автомобиль на продажу с VIN и техническими параметрами.',
    },
    {
        title: 'ЛКП',
        text: 'Лакокрасочное покрытие. Один из ключевых индикаторов состояния кузова.',
    },
    {
        title: 'Short Cut',
        text: 'Сокращённая версия ролика 45-90 секунд для объявлений и мессенджеров.',
    },
    {
        title: 'Реэкспорт',
        text: 'Продажа авто, ввезённого в Грузию, в третью страну (рынки СНГ и не только).',
    },
    {
        title: 'Плейлист YouTube',
        text: 'Группировка видео по теме/модели, которая улучшает удержание и навигацию канала.',
    },
    {
        title: 'Spec Slide',
        text: 'Графическая карточка характеристик: год, объём, КПП, пробег, цена.',
    },
];

const notFitPoints: string[] = [
    'Если нужен «обзор ради обзора» без понимания целевой аудитории и воронки продаж.',
    'Если планируется скрывать реальные дефекты или следы ремонта автомобиля.',
    'Если невозможно заранее согласовать список машин и формат съёмочного дня.',
    'Если ожидается, что один ролик даст мгновенный постоянный поток клиентов с YouTube.',
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems, ...shortQa].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://breus.media',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Промо-видео',
            item: 'https://breus.media/promo-video-service',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Обзорный видеоконтент по автомобилям',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример обзорного видеоконтента по автомобилям',
    description:
        'Пример структуры модельного видеообзора: экстерьер, интерьер, кузов под светом, осмотр снизу и выводы для удалённого покупателя.',
    thumbnailUrl: [VIDEO_THUMBNAIL_URL],
    uploadDate: '2026-03-22',
    embedUrl: VIDEO_EMBED_URL,
    contentUrl: VIDEO_PAGE_URL,
    publisher: {
        '@type': 'Organization',
        name: 'Breus Media',
        url: 'https://breus.media',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Обзорный видеоконтент по автомобилям в Тбилиси',
    description:
        'Профессиональные обзорные видео 3-8 минут для дилеров и экспортных площадок: YouTube, MyAuto, мессенджеры, RU/EN версии.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        telephone: CONTACT_PHONE,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Country',
        name: 'Georgia',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '350',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description:
        'Breus Media — видеообзоры автомобилей для дилеров и экспортёров в Грузии. Полные обзоры, Short Cuts, YouTube-стратегия.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Рустави, Батуми, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеообзоры автомобилей в Тбилиси — для дилеров и экспорта | Breus Media',
    description:
        'Профессиональные видеообзоры авто для дилеров в Тбилиси и Рустави. Обзоры моделей для YouTube, MyAuto и экспортных продаж в СНГ. От 350 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Обзорный видеоконтент по автомобилям — Breus Media',
        description:
            'Честные обзорные ролики 3-8 минут для дилеров, экспортных площадок и YouTube-каналов. Тбилиси и Рустави. От 350 ₾.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function AutoModelReviewPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Auto Review · Тбилиси / Рустави
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Обзорный видеоконтент по автомобилям — подача модельного ряда
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-5xl leading-relaxed mb-6">
                        Ваш покупатель смотрит YouTube перед тем, как написать в WhatsApp. Дайте ему честный, профессиональный обзор — и он придёт к вам, а не к конкуренту.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        На грузинском авторынке покупатель давно не ограничивается фотографиями в объявлении. Он ищет обзор на YouTube,
                        смотрит состояние кузова под светом и хочет мнение эксперта до перевода предоплаты. Особенно это важно для
                        удалённых покупателей из СНГ, которые выбирают Camry, Prius или кроссовер «из Грузии» без личного осмотра.
                        Профессиональный модельный обзор — ваш круглосуточный продавец, который снимает возражения до звонка.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать обзор автомобиля
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простым языком</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Модельный видеообзор — это структурированный ролик 3-8 минут о конкретном автомобиле или сегменте:
                        экстерьер, интерьер, комплектация, состояние, пробег, нюансы модели и рекомендации, кому она подходит.
                        Снимаем так, как хочет видеть удалённый покупатель: честно, детально, с крупными планами и обязательными
                        кадрами под подъёмником. Дополнительно делаем 45-60 секундный Short Cut для MyAuto и мессенджеров.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {audienceCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Какую задачу решает услуга</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {solutionCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Боли клиента</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {painCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold mb-5">Как помогает заработать</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {earnPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-7">
                        <h2 className="text-2xl font-bold mb-5">Как помогает не потерять</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {avoidLossPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article>
                        <h2 className="text-3xl font-bold mb-6">Deliverables</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {deliverables.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Что получает клиент на выходе</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Форматы</p>
                                <p>Полный обзор: MP4 4K/1080p (16:9). Short Cut: MP4 горизонтальный + вертикальный. Фото: JPG web + оригиналы. Spec Slide: PNG.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Обычно 5-10 рабочих дней с момента съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive с понятной папочной структурой по лотам и моделям.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Пусть видеообзор работает вместо менеджера 24/7 — на русском и английском для покупателей со всего мира."
                buttonLabel="Заказать обзор автомобиля"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Сценарии использования</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Грузия — один из крупнейших реэкспортёров автомобилей в регионе. Рустави и Тбилиси — хаб, откуда машины
                        уходят в Казахстан, Россию, Армению и Азербайджан. Покупатели этих рынков часто принимают решение удалённо:
                        по видео, отзывам и YouTube-каналу продавца. На рынке, где многие всё ещё ограничиваются фото и голосовыми,
                        профессиональный обзор становится прямым конкурентным преимуществом.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры / мини-кейсы</h2>
                    <div className="grid md:grid-cols-3 gap-5">
                        {miniCases.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Social proof / доказательства</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed max-w-5xl">
                        {socialProofBullets.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="examples" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Пример обзора</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        В этот блок можно встроить ваш актуальный YouTube-обзор. Сейчас используется технический embed-шаблон для
                        структуры страницы и schema-разметки.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример обзорного видео по автомобилю"
                                className="w-full h-full"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection items={beginnerFaqItems} title="FAQ для новичка" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по деньгам и процессу"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyUsCards.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Обзорное видео — это не «красивая съёмка машины», а инструмент удалённой продажи. Мы начинаем с аудитории и её вопросов, чтобы закрыть типовые возражения ещё до первого звонка." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Этапы работы</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {processSteps.map((step) => (
                            <article key={step.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Пакеты</h2>
                    <div className="grid md:grid-cols-3 gap-6 items-start mb-10">
                        {packageCards.map((pack) => (
                            <article
                                key={pack.title}
                                className={`rounded-[12px] border p-6 ${
                                    pack.featured
                                        ? 'border-[#D4A017] bg-[#141414] shadow-[0_12px_32px_rgba(212,160,23,0.18)]'
                                        : 'border-[#2a2a2a] bg-[#111111]'
                                }`}
                            >
                                <h3 className="text-lg font-bold mb-2">{pack.title}</h3>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
                                <p className="text-sm text-white/70 mb-2">Для кого: {pack.audience}</p>
                                <p className="text-sm text-white/70 mb-5">Срок: {pack.timeline}</p>
                                <ul className="space-y-2 text-sm text-white/75">
                                    {pack.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="text-[#D4A017]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="overflow-x-auto rounded-[12px] border border-[#2a2a2a]">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Что входит</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 350₾/авто</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 900₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 2000₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Кол-во авто</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">6-8</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Полный обзор</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3-5 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">4-6 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-8 мин</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Short Cut</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фото 10+</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Кадры под подъёмником</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Spec Slide</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры RU</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Voiceover</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">YouTube / Playlist Notes</td>
                                    <td className="p-3">—</td>
                                    <td className="p-3">✓</td>
                                    <td className="p-3">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Нужен обзор одной машины для продажи здесь и сейчас — выбирайте Basic.</li>
                            <li>Нужна серия обзоров одной модели и старт системного YouTube — Standard.</li>
                            <li>Строите экспортную воронку и канал как источник лидов — Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Сомневаетесь, сколько обзоров оптимально? Напишите в WhatsApp/Telegram: {CONTACT_PHONE}.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваш следующий покупатель из Казахстана уже ищет Camry на YouTube. Будьте там первыми с честным обзором."
                buttonLabel="Обсудить пакет для канала"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для автобизнеса
                                </Link>{' '}
                                — короткие ролики для Instagram/TikTok, которые доводят аудиторию до длинного обзора.
                            </li>
                            <li>
                                <Link href="/promo-video-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Имиджевое видео автосалона
                                </Link>{' '}
                                — ролик о площадке и команде для формирования доверия к бренду.
                            </li>
                            <li>
                                <Link href="/drone-services/drone-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    Аэросъёмка автосалона
                                </Link>{' '}
                                — динамичные пролёты и общие планы площадки для усиления презентации.
                            </li>
                            <li>
                                <Link href="/360-tour-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур для автосалона
                                </Link>{' '}
                                — интерактивный показ шоурума и инфраструктуры.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Для ежедневного охвата в соцсетях длинные обзоры удобно усиливать сервисом{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels
                            </Link>
                            , который приводит новую аудиторию на ваш YouTube-канал.
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Хотите сначала показать «кто вы», а затем «что продаёте»? Комбинируйте эту страницу с{' '}
                            <Link href="/promo-video-service" className="text-[#D4A017] hover:text-white transition-colors">
                                имиджевым видео автосалона
                            </Link>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки автобизнеса в контенте</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {commonMistakes.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Что можно улучшить без покупки</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке обзора</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☑</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Расширенные ответы</h2>
                    <div className="space-y-6">
                        {longTailAnswers.map((item) => (
                            <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                                <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Short Q&A для AI-поиска</h2>
                    <div className="space-y-4">
                        {shortQa.map((item) => (
                            <article key={item.question} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <h3 className="font-bold mb-2">{item.question}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Мифы и реальность</h2>
                    <div className="space-y-5">
                        {myths.map((item) => (
                            <article key={item.myth} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm font-bold mb-2">Миф: «{item.myth}»</p>
                                <p className="text-sm text-white/75 leading-relaxed">
                                    <span className="font-semibold text-[#D4A017]">Реальность:</span> {item.reality}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Мини-словарь терминов</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {glossary.map((item) => (
                            <article key={item.title} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Кому мы не подходим</h2>
                    <ul className="space-y-4 text-sm text-white/75 leading-relaxed">
                        {notFitPoints.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>Как снимать обзоры авто для YouTube — чеклист.</li>
                        <li>SEO для YouTube-канала автодилера — базовый гайд.</li>
                        <li>Reels для автобизнеса — быстрый формат в дополнение к обзорам.</li>
                        <li>Как экспортировать авто из Грузии — контент для покупателей.</li>
                    </ul>
                </div>
            </section>

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем с дилерами, экспортёрами и автоподборщиками по всей Грузии: Тбилиси, Рустави, Батуми.
                            Первый звонок — бесплатный разбор вашей задачи.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp / Telegram: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия · breus.media</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — видеообзоры автомобилей для дилеров и экспортёров в Грузии. Полные обзоры, Short Cuts,
                        YouTube-стратегия. Тбилиси. От 350 ₾.
                    </p>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .clean-debug-overlays [data-debug-badge] {
                            display: none !important;
                        }

                        .clean-debug-overlays [data-debug-content] {
                            --tw-ring-shadow: 0 0 #0000 !important;
                            box-shadow: none !important;
                        }
                    `,
                }}
            />
        </main>
    );
}
