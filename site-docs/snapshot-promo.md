# Breus Media — Promo Video — 26 марта 2026
Страницы: /promo-video-service, /promo-video/auto-model-review, /promo-video/auto-service-detailing, /promo-video/clinic-interior, /promo-video/promo-car-dealer, /promo-video/promo-clinic, /promo-video/promo-doctor, /promo-video/promo-excursion, /promo-video/promo-hotel, /promo-video/promo-real-estate, /promo-video/promo-residential-complex, /promo-video/promo-restaurant, /promo-video/promo-tourism-route, /promo-video/restaurant-interior-food

## /promo-video-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.promoVideoService;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function PromoVideoServicePage() {
    return <L2DirectionRenderer schemaKey="promo-video-service" config={config} />;
}

```
---
---

## /promo-video/auto-model-review
Lines: 1281
```tsx
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
    title: 'Видеообзоры автомобилей в Тбилиси — для дилеров и экспорта',
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

```
---
---

## /promo-video/auto-service-detailing
Lines: 1284
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/auto-service-detailing';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Детейлинг-студии, которые хотят продавать дорогие пакеты',
        text: 'Керамика, PPF и комплексный детейлинг лучше продаются, когда клиент видит процесс, а не только результат.',
    },
    {
        title: 'Автосервисы, уставшие от торга «у соседа дешевле»',
        text: 'Видео оборудования, стандартов и аккуратности помогает объяснить цену без долгих споров.',
    },
    {
        title: 'Кузовные мастерские с высоким уровнем работы',
        text: 'Сильный ремонт нужно показывать наглядно: путь от повреждения до финального результата.',
    },
    {
        title: 'СТО с современным диагностическим оборудованием',
        text: 'Когда клиент видит процесс диагностики и отчётность, ценность услуги становится понятной.',
    },
    {
        title: 'Дилеры с собственной сервисной базой',
        text: 'Видео усиливает доверие к бренду дилера и помогает продавать сервис вместе с автомобилем.',
    },
    {
        title: 'Любой автосервис, который хочет поток из Instagram, TikTok и сайта',
        text: 'Регулярные короткие ролики создают стабильный входящий спрос без постоянных скидок.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Переводит доверие в цифры',
        text: 'Клиент, который видел процесс работы на видео, чаще выбирает более дорогой пакет и реже торгуется.',
    },
    {
        title: 'Отстраивает от конкурентов по цене',
        text: 'Когда видно разницу в оборудовании, материалах и технологии, аргумент «у соседа дешевле» перестаёт быть главным.',
    },
    {
        title: 'Привлекает клиентов из Instagram без постоянных рекламных расходов',
        text: '«До/после» ролики в авто-нише дают органический охват и приводят людей, которые ещё не знали о сервисе.',
    },
    {
        title: 'Документирует качество и процесс',
        text: 'Видео приёмки и выдачи защищает от споров и упрощает коммуникацию в конфликтных ситуациях.',
    },
];

const painCards: Card[] = [
    {
        title: '«Клиенты выбирают по цене, а не по качеству»',
        text: 'Пока разница между сервисами не видна, клиент уходит к более дешёвому варианту. Видео делает качество визуально очевидным.',
    },
    {
        title: '«Объясняем словами — не убеждает»',
        text: 'Фразы про профессиональное оборудование и материалы звучат как реклама. Кадры реальной работы воспринимаются как доказательство.',
    },
    {
        title: '«Клиенты боятся оставлять дорогие машины»',
        text: 'Ролик о том, как вы работаете с премиальными авто, снимает тревогу ещё до первого визита.',
    },
    {
        title: '«Нет стабильного потока — то пусто, то очередь»',
        text: 'Нерегулярный контент даёт нерегулярные заявки. Контент-система даёт предсказуемый входящий спрос.',
    },
    {
        title: '«Отзывы есть, но новые клиенты их не находят»',
        text: 'Отзывы помогают тем, кто уже ищет вас. Reels находит аудиторию, которая ещё не знакома с сервисом.',
    },
    {
        title: '«Конкурент хуже, но раскручен лучше»',
        text: 'Качество без видимости проигрывает. Видео делает ваш реальный уровень заметным и запоминаемым.',
    },
];

const earnPoints: string[] = [
    'Продаёт дорогие пакеты: клиент видит этапы нанесения керамики и понимает, почему услуга стоит дороже.',
    'Снижает стоимость привлечения: запрос «нашёл вас по ролику» обычно самый дешёвый по цене лида.',
    'Увеличивает средний чек через видео-апселл: клипы про PPF и допуслуги продают расширенные пакеты мягко и без давления.',
    'Возвращает клиента на следующий сезон: когда сервис регулярно в ленте, повторное обращение происходит легче.',
];

const avoidLossPoints: string[] = [
    'Фиксирует состояние авто при приёмке и защищает от спорных претензий.',
    'Снижает количество рекламаций: честный показ процесса формирует реалистичные ожидания.',
    'Уменьшает зависимость от «сарафана»: контент масштабируется быстрее личных рекомендаций.',
    'Защищает ценовую позицию: клиент видит аргументацию цены в кадре, а не в переписке.',
];

const deliverables: string[] = [
    'Service Process Video (60-120 сек): приёмка авто, этапы работ, выдача клиенту.',
    'Detailing Before/After Showreel (30-60 сек): контрастные трансформации кузова, салона, полировки и керамики.',
    'Short Clips Library (10-20 фрагментов по 10-20 сек): Reels/TikTok/Stories из рабочих моментов.',
    'Trust Elements Overlays: вставки с материалами, брендами оборудования, гарантией, сертификатами.',
    'Usage & Offer Notes: рекомендации, как привязывать ролики к офферам и сезонным предложениям.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — детейлинг-студия запускает Instagram',
        text: 'Снимаем серию «до/после» по 5 кейсам, добавляем ASMR-процессы (полировка, пена, блеск). Результат: органический охват и входящие записи от людей, которые хотят такой же эффект.',
    },
    {
        title: 'Сценарий 2 — автосервис продаёт комплексное ТО',
        text: 'Показываем приёмку, диагностику, работу механика и финальную проверку. Клиент видит ценность комплексной услуги и меньше сравнивает только по цене.',
    },
    {
        title: 'Сценарий 3 — кузовная мастерская после сложного ремонта',
        text: 'Фиксируем путь «до/после»: повреждение, этапы восстановления, финальный результат и реакцию владельца. Такой контент становится лучшей витриной качества.',
    },
    {
        title: 'Сценарий 4 — пакет видео для сайта',
        text: 'Делаем один ролик «как мы работаем» и три отдельных по услугам (ТО, диагностика, детейлинг), чтобы каждая страница сайта сразу показывала процесс.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — детейлинг-студия, Сабуртало',
        text: 'Серия «до/после» со старым Porsche после полировки разошлась по локальным авто-сообществам и дала прямые записи из Instagram.',
    },
    {
        title: 'Кейс 2 — автосервис, Дигоми',
        text: 'Ролик по диагностике (подъёмник, сканер, механик, отчёт) снизил торг за цену диагностики и упростил объяснение ценности услуги.',
    },
    {
        title: 'Кейс 3 — PPF-студия, Тбилиси',
        text: 'Видео с полным процессом поклейки PPF на BMW стало самопродающим форматом: заявки приходили уже с пониманием пакета.',
    },
];

const socialProofBullets: string[] = [
    '«До/после» в авто-нише — один из самых сохраняемых форматов в Instagram.',
    'Сервисы, которые показывают процесс, обычно отмечают рост доверия и меньше конфликтных ситуаций.',
    'Кадры оборудования и материалов помогают удерживать цену выше рынка, потому что клиент видит, за что платит.',
    'ASMR-форматы детейлинга часто дают в 3-5 раз больше органики, чем обычные рекламные ролики.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что снимать в детейлинг-студии кроме «до/после»?',
        answer:
            '«До/после» — база, но хорошо работают и другие форматы: нанесение керамики, обзор оборудования, комментарий мастера, ASMR-процессы и мини-обзоры материалов.',
    },
    {
        question: 'Нужно ли показывать лица мастеров?',
        answer:
            'Желательно, потому что люди доверяют людям. Если команда не хочет лица в кадре, можно снимать руки, детали процесса и результат — это тоже эффективно.',
    },
    {
        question: 'Автосервис выглядит «обычно». Можно ли сделать сильный ролик?',
        answer:
            'Да. Даже в стандартном СТО можно красиво показать диагностику, инструмент, аккуратность работы и логику процесса. Подача и режиссура решают.',
    },
    {
        question: 'Как часто нужно снимать?',
        answer:
            'Базовый пакет обычно обновляют раз в квартал или при запуске новой услуги. Короткие Reels-клипы лучше снимать регулярно, примерно раз в месяц.',
    },
    {
        question: 'Можно ли использовать контент не только в Instagram?',
        answer:
            'Да. Process Video подходит для сайта и YouTube, короткие клипы — для Reels/TikTok/Shorts, а before/after-материалы — для Google Business и агрегаторов.',
    },
    {
        question: 'Снимаете ли вы кузовные мастерские?',
        answer:
            'Да. Кузовной ремонт — один из самых убедительных форматов, потому что трансформация «до/после» визуально очевидна и хорошо конвертирует.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеосъёмка детейлинга или автосервиса?',
        answer:
            'Basic-пакет — от 450 ₾ (Process Video + 5-7 Reels-клипов). Полный пакет с showreel, библиотекой клипов и overlay-графикой — от 1 000 ₾.',
    },
    {
        question: 'Достаточно одного съёмочного дня?',
        answer:
            'В большинстве случаев да: 5-7 часов хватает. Если много рабочих зон или сложные процессы, оптимально закладывать 2 съёмочных дня.',
    },
    {
        question: 'Нужно ли останавливать работу сервиса на время съёмки?',
        answer:
            'Нет. Обычно снимаем прямо в рабочем процессе, это делает ролик более убедительным и живым.',
    },
    {
        question: 'Что делать, если нет готового кейса для «до/после»?',
        answer:
            'Подбираем момент из текущей загрузки или заранее планируем автомобиль клиента на дату съёмки.',
    },
    {
        question: 'Входит ли графика (Trust Overlays) в стоимость?',
        answer:
            'Да, в Standard и Full. В Basic — как дополнительная опция по запросу.',
    },
    {
        question: 'Можно ли работать регулярно, раз в месяц?',
        answer:
            'Да. Есть формат абонемента: ежемесячная съёмка Reels и ежеквартальное обновление основного контента.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Снимаем процессы, а не «рекламную постановку»',
        text: 'Клиент автосервиса доверяет реальности. Мы показываем живую работу и честный результат.',
    },
    {
        title: 'Понимаем, что продаёт в авто-нише',
        text: 'В кадре не только красота, но и доказательства: оборудование, материалы, этапы и финальный эффект.',
    },
    {
        title: 'Полный пакет в одной съёмке',
        text: 'Process Video, showreel, короткие клипы и overlay-графика собираются в одном продакшн-цикле.',
    },
    {
        title: 'Быстро и без операционного хаоса',
        text: 'Один съёмочный день может закрыть контент-задачи на квартал вперёд.',
    },
    {
        title: 'Работаем на рост, а не только на «файлы»',
        text: 'Передаём не просто ролики, а рекомендации по офферам, публикациям и конверсионным сценариям.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф (1-2 дня)',
        text: 'Определяем услуги, целевую аудиторию и ключевые доказательства, которые должны быть в кадре.',
    },
    {
        title: 'Шаг 2. Подготовка (1-2 дня)',
        text: 'Составляем список кадров и согласовываем слот, когда у вас идут нужные процессы.',
    },
    {
        title: 'Шаг 3. Съёмочный день (5-7 часов)',
        text: 'Фиксируем приёмку, процесс, выдачу, рабочие зоны и детали сервиса в живом режиме.',
    },
    {
        title: 'Шаг 4. Монтаж (7-12 дней)',
        text: 'Собираем Process Video, before/after showreel, short-клипы и графические вставки.',
    },
    {
        title: 'Шаг 5. Передача + Usage Notes',
        text: 'Передаём структурированный пакет файлов и рекомендации по офферам и графику публикаций.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic - Процесс',
        price: 'от 450 ₾',
        audience: 'Первый видеоконтент о студии или сервисе, один ключевой формат',
        timeline: '7-12 рабочих дней',
        items: [
            'Process Video 60-90 сек (горизонтальный)',
            '5-7 Reels-клипов 15-20 сек',
            'Базовый монтаж',
            'Передача в MP4',
        ],
    },
    {
        title: 'Standard - Доказательство',
        price: 'от 900 ₾',
        audience: 'Полноценный контент-комплект для Instagram, сайта и офферов',
        timeline: '7-12 рабочих дней',
        featured: true,
        items: [
            'Process Video 90-120 сек',
            'Before/After Showreel 30-60 сек (горизонтальный + вертикальный)',
            '10-15 Reels-клипов',
            'Trust Elements Overlays (2-3 графики)',
            '10 фотографий + Usage Notes',
        ],
    },
    {
        title: 'Full - Библиотека',
        price: 'от 1 500 ₾',
        audience: 'Сервис с несколькими услугами и задачей закрыть контент на квартал',
        timeline: '7-12 рабочих дней',
        items: [
            'Process Videos x3 (полировка / керамика / ТО)',
            'Before/After Showreel (полный)',
            '20+ Reels-клипов',
            'Trust Overlays x5 + 20+ фото',
            'Posting schedule + Usage & Offer Notes + адаптации для TikTok/Shorts/Stories',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Публикуют только финальный результат без процесса',
        text: 'Красивое «после» привлекает взгляд, но не объясняет цену. Продаёт именно демонстрация этапов.',
    },
    {
        title: 'Снимают постановочно, а не в рабочем процессе',
        text: 'Постановка выглядит как реклама. Живой процесс воспринимается как честное доказательство.',
    },
    {
        title: 'Не используют графические вставки',
        text: 'Кадры процесса сильнее работают вместе с короткими пояснениями про материалы, бренды и гарантии.',
    },
    {
        title: 'Публикуют контент без оффера',
        text: 'Каждый ролик должен вести к действию: запись, пакет, сезонное предложение, диагностика перед покупкой.',
    },
    {
        title: 'Снимают один раз в год',
        text: 'Контент быстро «выгорает». Нужен регулярный поток коротких клипов и периодическое обновление ключевого ролика.',
    },
    {
        title: 'Показывают только «после», без исходного состояния',
        text: 'Трансформация продаёт лучше всего, поэтому «до» обязательно фиксируем в начале работ.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимайте «до» каждой машины на телефон при приёмке — это 2 минуты и готовый материал для контента.',
    'Публикуйте before/after в Stories с опросом «угадаете, что сделали?» для бесплатного интерактива.',
    'Добавьте в профиль Instagram информацию об оборудовании и материалах для более сильного позиционирования.',
    'Снимайте короткие 5-10 секундные клипы прямо в процессе: пена, полировка, свет, детали.',
    'Просите довольных клиентов записать 15-секундный отзыв у выдачи автомобиля.',
];

const checklistItems: string[] = [
    'Рабочее пространство чистое и аккуратное: лишние предметы убраны, визуальный шум минимален.',
    'Подготовлен реальный клиентский автомобиль для сильного «до/после».',
    'Оборудование готово к съёмке: полировальные машины, пеногенератор, подъёмник, диагностика.',
    'Согласована логика съёмки по этапам: приёмка -> процесс -> выдача.',
    'Команда предупреждена о съёмке и знает, как будет проходить день.',
    'Есть доступ к подъёмнику или смотровой зоне, если снимаем низ кузова.',
    'Свет в рабочих зонах достаточный или согласовано дополнительное освещение.',
    'Подготовлены материалы/бренды, которые хотите показать в кадре (керамика, PPF, масла).',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему «до/после» видео работает лучше любой рекламы в детейлинге?',
        answer: [
            'Трансформация — один из самых сильных визуальных триггеров: грязное становится чистым, тусклое становится блестящим, повреждённое становится восстановленным.',
            'Клиент проецирует увиденный «до»-кадр на свою машину, а «после»-кадр воспринимает как обещанный результат. Такой контент понятен без длинных объяснений.',
            'Плюс формат хорошо сохраняют «на потом», поэтому ролик продолжает приводить заявки и спустя недели после публикации.',
        ],
    },
    {
        question: 'Как правильно снимать ASMR-контент для детейлинг-студии?',
        answer: [
            'Нужны крупные планы, чистый направленный звук и аккуратное движение камеры. Важны звуки полировальной машины, пены и работы материалов.',
            'Сильный ASMR держится на синхроне картинки и звука: зритель должен почти физически ощущать процесс.',
            'Оптимальная связка — профессиональный беспроводной микрофон + стабилизатор + монтаж без перегруженной музыки.',
        ],
    },
    {
        question: 'Как привязывать видео к конкретным услугам, а не просто «для красоты»?',
        answer: [
            'Каждый ролик должен иметь чёткий оффер: например, «керамика от X ₾» или «диагностика перед покупкой за X ₾».',
            'Сценарий публикации: показываем процесс, фиксируем результат, добавляем призыв к записи и понятный срок действия предложения.',
            'Хорошо работают пакетные офферы: ТО + детейлинг, диагностика + миниполировка. Один ролик может продавать комбинацию услуг.',
        ],
    },
    {
        question: 'Как видео помогает сервису в конфликтных ситуациях с клиентами?',
        answer: [
            'Съёмка при приёмке фиксирует состояние автомобиля до начала работ и защищает от претензий «это вы поцарапали».',
            'Видео выдачи показывает, что именно было сделано и в каком состоянии машина передана клиенту.',
            'Таким образом, контент работает не только как маркетинг, но и как операционная защита сервиса.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое видеоконтент для детейлинга?',
        answer:
            'Это профессиональные ролики о процессах детейлинг-студии: до/после, нанесение керамики, полировка, выдача авто. Используются для Instagram, TikTok и сайта.',
    },
    {
        question: 'Зачем автосервису видео о своей работе?',
        answer:
            'Видео процессов формирует доверие, объясняет ценность услуги и помогает удерживать цену без постоянных скидок.',
    },
    {
        question: 'Сколько стоит съёмка детейлинг-студии в Тбилиси?',
        answer:
            'Базовый пакет начинается от 450 ₾. Полная контент-библиотека с несколькими форматами — от 1 500 ₾.',
    },
    {
        question: 'Что такое before/after showreel для детейлинга?',
        answer:
            'Это нарезка 30-60 секунд с несколькими трансформациями автомобиля до и после работ. Один из самых конверсионных форматов в соцсетях.',
    },
    {
        question: 'Помогает ли видео продавать дорогие пакеты детейлинга?',
        answer:
            'Да. Когда клиент видит этапы нанесения керамики и стандарты работ, он лучше понимает цену и реже торгуется.',
    },
    {
        question: 'Нужно ли снимать лица мастеров?',
        answer:
            'Желательно, но не обязательно. Если сотрудники не хотят лица в кадре, можно строить ролик на руках, инструментах и результате.',
    },
    {
        question: 'Как использовать детейлинг-видео в соцсетях?',
        answer:
            'Process Video размещают на сайте и YouTube, а short clips и before/after — в Instagram Reels, TikTok и Stories с привязкой к офферу.',
    },
    {
        question: 'Снимаете ли вы ASMR-контент для детейлинга?',
        answer:
            'Да. Это формат с акцентом на звук и крупные планы процесса: полировка, пена, блеск, защита покрытия.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Наш сервис выглядит обычно, из него не сделать красивый ролик.',
        reality:
            'Сильная подача строится на свете, ракурсе, динамике и деталях процесса. Дизайнерский интерьер не обязателен.',
    },
    {
        myth: 'Клиенты смотрят только цену, видео не важно.',
        reality:
            'Клиенты уходят в цену, когда не видят разницы. Видео как раз создаёт видимую разницу между сервисами.',
    },
    {
        myth: 'Мы загружены, контент нам не нужен.',
        reality:
            'Загрузка сегодня не гарантирует загрузку завтра. Контент формирует очередь и репутацию на будущее.',
    },
    {
        myth: 'Фото «до/после» достаточно, видео необязательно.',
        reality:
            'Видео удерживает внимание дольше и передаёт то, что фото не может: звук, движение, реакцию клиента.',
    },
    {
        myth: 'Нужно снять один хороший ролик и забыть.',
        reality:
            'Один ролик даёт точечный эффект. Регулярный поток клипов создаёт системное привлечение.',
    },
];

const glossary: Card[] = [
    {
        title: 'Детейлинг',
        text: 'Профессиональная обработка автомобиля: полировка, керамика, PPF, химчистка и уход за материалами салона.',
    },
    {
        title: 'PPF (Paint Protection Film)',
        text: 'Прозрачная защитная плёнка для кузова, которая снижает риск сколов и мелких царапин.',
    },
    {
        title: 'ASMR-контент',
        text: 'Видео с акцентом на звук и крупные планы процесса, создающее эффект присутствия.',
    },
    {
        title: 'Process Video',
        text: 'Ролик с этапами работ от приёмки автомобиля до выдачи результата клиенту.',
    },
    {
        title: 'Trust Overlays',
        text: 'Графические вставки с материалами, брендами оборудования, гарантиями и сертификатами.',
    },
    {
        title: 'Before/After Showreel',
        text: 'Смонтированная нарезка трансформаций «до/после», которая быстро показывает ценность услуги.',
    },
];

const notFitPoints: string[] = [
    'Сервисам с низким качеством работы, которые хотят «перекрыть» это красивой картинкой.',
    'Командам, которые не готовы дать реальный рабочий процесс для съёмки.',
    'Проектам с ожиданием мгновенного потока заказов через неделю после публикации.',
    'Сервисам, которые не готовы к регулярности и хотят снять один раз «на годы».',
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
            name: 'Видеоконтент для автосервиса и детейлинга',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Before/After Showreel для автосервиса и детейлинга — пример формата',
    description:
        'Пример формата видеоконтента для автосервиса и детейлинга: процесс работ, before/after трансформация и trust-элементы.',
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
    name: 'Видеоконтент для автосервиса и детейлинга в Тбилиси',
    description:
        'Process video, before/after showreel и Reels-клипы для детейлинг-студий, автосервисов и кузовных мастерских.',
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
        name: 'Грузия',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '450',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Видеоконтент для автобизнеса в Тбилиси: process video, before/after, Reels и контент-стратегия.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеосъёмка детейлинга и автосервиса в Тбилиси',
    description:
        'Видеоконтент для детейлинг-студий и автосервисов в Тбилиси. Process video, before/after, Reels-клипы. Показываем процессы и качество. От 450 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеоконтент для автосервиса и детейлинга — process video и before/after',
        description:
            'Показываем процесс изнутри: оборудование, материалы, команду и результат. Контент для Instagram, TikTok, сайта и YouTube.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function AutoServiceDetailingPage() {
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
                        Promo Video · Auto Service & Detailing · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеоконтент для автосервиса и детейлинга — показ процесса и качества
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Клиент не верит на слово — он верит тому, что видит.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Детейлинг-студия или автосервис в Тбилиси — это бизнес на доверии. Клиент оставляет дорогую
                        машину незнакомым людям и надеется на аккуратную работу. Большинство конкурентов объясняют
                        качество словами. Те, кто показывает процесс, оборудование и результат, выигрывают. Один
                        правильный ролик с «до/после» и живой работой команды делает больше, чем десятки текстовых
                        отзывов.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку детейлинга / сервиса
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Мы снимаем весь рабочий процесс: от приёмки автомобиля до выдачи результата. Полировка,
                        керамика, химчистка, кузовной ремонт, диагностика — превращаем ваши реальные процессы в
                        убедительный видеоконтент. Клиент видит не «мы делаем качественно», а «вот как именно это
                        делается». На выходе вы получаете основной ролик, before/after-шоурил и библиотеку коротких
                        клипов для Reels, Stories и TikTok.
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
                                <p>Process Video: MP4 1080p (16:9), Showreel: горизонтальный + вертикальный, Short Clips: 9:16, Overlays: PNG.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>7-12 рабочих дней с момента съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive, структурировано по типам роликов и материалам.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Клиенты, которые видели ваш процесс на видео, платят больше и торгуются меньше. Покажите им свою работу."
                buttonLabel="Обсудить съёмку детейлинга / сервиса"
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
                        Детейлинг и автосервис в Тбилиси — высококонкурентный рынок: десятки студий в Дигоми, Вере,
                        Сабуртало и других районах, сотни аккаунтов в Instagram. Большинство показывают только
                        финальные фото и акции. Те, кто показывает живой процесс, выделяются сразу. Для локального
                        клиента прозрачность особенно важна, когда речь идёт о дорогом автомобиле.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример before/after showreel</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь можно разместить текущий кейс из портфолио по детейлингу или автосервису.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеоконтента для автосервиса и детейлинга"
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

            <ProcessNote text="Детейлинг и сервис — бизнес на доверии, поэтому мы начинаем с вопроса: что именно нужно доказать клиенту в кадре. Снимаем не всё подряд, а только то, что реально убеждает вашу аудиторию." />

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
                        <table className="w-full text-sm min-w-[820px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Что входит</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 450₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 900₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1500₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Process Video</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Before/After Showreel</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ (полный)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Reels-клипы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-7 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10-15 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">20+ шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Trust Overlays</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2-3 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фотографии</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">20+ шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">TikTok / Shorts адаптация</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Usage & Offer Notes</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Posting schedule</td>
                                    <td className="p-3">—</td>
                                    <td className="p-3">—</td>
                                    <td className="p-3">✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Нужен первый ролик о студии для сайта или соцсетей — выбирайте Basic.</li>
                            <li>Нужен полноценный набор: Instagram + сайт + before/after — выбирайте Standard.</li>
                            <li>Несколько услуг и цель закрыть квартал контентом — выбирайте Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не знаете, с чего начать? Напишите в WhatsApp/Telegram: {CONTACT_PHONE}. Разберём задачу
                            за 15 минут.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Ваша работа стоит того, чтобы её увидели до звонка. Покажем процесс так, чтобы он продавал."
                buttonLabel="Получить расчёт для детейлинга / сервиса"
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
                                — короткие ролики для постоянного присутствия в соцсетях.
                            </li>
                            <li>
                                <Link href="/auto-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Имиджевое видео автосалона
                                </Link>{' '}
                                — брендовый ролик для дилеров и сервисной базы.
                            </li>
                            <li>
                                <Link href="/360-tour-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур для автобизнеса
                                </Link>{' '}
                                — виртуальный осмотр студии или сервиса до визита клиента.
                            </li>
                            <li>
                                <Link href="/drone-services/drone-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                    Обзорный видеоконтент по автомобилям
                                </Link>{' '}
                                — если параллельно развиваете и направление продаж авто.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Если вам нужен регулярный охват и частые касания с аудиторией, добавьте{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels-съёмку на абонементе
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Если хотите, чтобы клиент мог «зайти» в сервис онлайн ещё до звонка, посмотрите{' '}
                            <Link href="/360-tour-auto" className="text-[#D4A017] hover:text-white transition-colors">
                                360° тур для автобизнеса
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
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке сервиса/детейлинга</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>Контент-план для детейлинг-студии на 30 дней.</li>
                        <li>Гайд: как снять ASMR-детейлинг самостоятельно.</li>
                        <li>
                            Регулярный short-form контент: {' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для автобизнеса
                            </Link>
                            .
                        </li>
                        <li>Практика: как видео повышает средний чек в сервисном бизнесе.</li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Находимся в Тбилиси, работаем по всей Грузии. Напишите в Telegram/WhatsApp или позвоните:
                            {` ${CONTACT_PHONE}`}. Подскажем, что именно стоит снять в вашей студии или сервисе.
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
                        Breus Media — видеоконтент для детейлинга и автосервисов в Тбилиси. Process video,
                        before/after, Reels-клипы. Показываем работу изнутри. От 450 ₾.
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

```
---
---

## /promo-video/clinic-interior
Lines: 1231
```tsx
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

const CANONICAL_URL = 'https://breus.media/promo-video/clinic-interior';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';

const audienceItems: string[] = [
    'Стоматологии и ортодонтические клиники, где вид кабинета и оборудования напрямую влияет на выбор пациента.',
    'Клиники эстетической медицины и косметологии, где пространство — часть продукта.',
    'Wellness-центры, SPA и медицинские центры превентивной медицины.',
    'Многопрофильные медицинские центры с несколькими кабинетами и специализациями.',
    'Клиники, открывающиеся или проходящие ремонт/ребрендинг.',
    'Медицинские проекты, работающие с иностранными пациентами — для размещения в международных агрегаторах.',
];

const solutionPoints: string[] = [
    'Снижает страх неизвестного пространства. Когда пациент видел фото кабинета, стерилизационной и зоны ожидания, он приходит в знакомое место.',
    'Закрывает вопрос гигиены и стерильности без слов. Кадр автоклава или распаковки инструментов — визуальный ответ на скрытый страх.',
    'Повышает позиции в Google Maps: карточки клиник с профессиональными фото получают больше кликов и просмотров.',
    'Обосновывает ценовую категорию: качественный визуальный ряд интерьера — один из самых сильных сигналов о категории медицины.',
];

const painCards: Card[] = [
    {
        title: '«На сайте фото с телефона, а клиника в реальности намного лучше»',
        text: 'Это самая частая ситуация. Клиника хорошая, оборудование современное, но фото не передают этого — и пациент, открывший сайт, не чувствует уровня. Теряются заявки от людей, которые могли бы стать постоянными клиентами.',
    },
    {
        title: '«В Google Maps у нас мало фото — проигрываем соседям в выдаче»',
        text: 'Карточки с большим количеством профессиональных фото получают больше просмотров. Клиника с 5 телефонными снимками проигрывает конкуренту с 30 профессиональными фотографиями — даже если физически лучше.',
    },
    {
        title: '«Мы сделали ремонт, но нет нормальных материалов, чтобы об этом рассказать»',
        text: 'Ремонт в клинике — это инвестиция, которую хочется окупить маркетингом. Без профессиональных фото и видео ни в соцсетях, ни в рекламе это не работает.',
    },
    {
        title: '«Не знаем, что именно снимать — интерьер, оборудование, врачей?»',
        text: 'Большинство клиентов приходят с этим вопросом. У нас есть готовый протокол: что снимаем обязательно, что дополнительно, и какие ракурсы дают лучший результат в каждой специализации.',
    },
    {
        title: '«Боимся, что съёмка помешает работе с пациентами»',
        text: 'Страх оправданный, но решаемый. Интерьер снимается в промежутках между приёмами или в нерабочее время. Для большинства клиник достаточно 3–5 утренних часов без пациентов.',
    },
    {
        title: '«Материалы быстро устаревают после любого изменения в клинике»',
        text: 'Это правда, но один профессиональный съёмочный день при правильном планировании даёт банк на 1–2 года. Небольшие обновления оборудования не требуют полного пересъёма.',
    },
];

const earnPoints: string[] = [
    'Профессиональные фото повышают CTR карточки в Google Maps: больше кликов на карточку означает больше переходов на сайт и звонков.',
    'Визуальный уровень интерьера обосновывает более высокий чек. Пациент, увидевший современный оснащённый кабинет, понимает, за что платит.',
    'Материалы для рекламных кампаний: реальные профессиональные фото работают лучше стоков в таргетированной рекламе.',
    'Контент для соцсетей на месяцы вперёд: один съёмочный день даёт 30–50 фото и несколько видеофрагментов.',
];

const avoidLossPoints: string[] = [
    'Защита от негативных ожиданий: совпадение ожидания и реальности снижает стресс при первом визите.',
    'Уменьшает холодные уходы с сайта: профессиональные фото удерживают внимание дольше и снижают показатель отказов.',
    'Материалы для международных агрегаторов: без качественных фото размещение неэффективно или невозможно.',
    'Не нужно каждый раз искать фотографа: один большой банк материалов закрывает потребность надолго.',
];

const deliverables: string[] = [
    'Профессиональная фотосъёмка: зона ожидания, ресепшн, кабинеты, оборудование, стерилизационная зона, вход/фасад.',
    'Обработка и цветокоррекция всех фото в тёплой медицинской гамме.',
    'Базовый видеоряд интерьера: плавные проходы (walkthrough) и крупные планы оборудования.',
    'Готовые форматы для сайта (горизонтальные и квадратные), Google Maps и соцсетей.',
    'Экспортный пакет: JPEG высокого качества и web-оптимизированные версии.',
    'Опционально: 360° панорамные снимки для Google Street View и Google Maps.',
];

const useCases: Card[] = [
    {
        title: 'Клиника запускается или открывается после ремонта',
        text: 'Новый медцентр готовит сайт и Google Maps. Без профессионального фото карточка выглядит незавершённой. Съёмочный день за 3–5 утренних часов даёт полный визуальный пакет для запуска.',
    },
    {
        title: 'Стоматология обновляет сайт',
        text: 'Клиника меняет сайт и заменяет старые телефонные фото на профессиональные. Особый акцент — на оборудование (цифровой рентген, 3D-сканер) и стерилизационную зону.',
    },
    {
        title: 'Wellness-центр готовит контент для Instagram',
        text: 'Снимаем пространство: зону отдыха, кабинеты процедур, лаунж-зону. Из 40 профессиональных фото собирается контент-план на 3 месяца в едином стиле.',
    },
    {
        title: 'Клиника эстетической медицины выходит на медтуристов',
        text: 'Для международных каталогов нужны профессиональные фото в высоком разрешении, показывающие оборудование, сертификаты и уровень пространства. Одна съёмка закрывает требования платформ.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Многопрофильный медцентр — обновление Google Maps',
        text: 'Клиника добавила 35 профессиональных фото в карточку GMB. В первые два месяца выросли просмотры карточки и доля переходов «маршрут» и «позвонить». Кадры стерилизационной получили наибольшее число просмотров.',
    },
    {
        title: 'Стоматология — запуск сайта',
        text: 'Новая стоматология в Ваке за 4 часа утром, до открытия, получила 50 фото и 3 видеофрагмента. Сайт вышел с профессиональной галереей в день открытия.',
    },
    {
        title: 'Клиника косметологии — Instagram-контент',
        text: 'Центр в Сабуртало снял интерьерный банк из 45 фото в едином стиле. Контент-менеджер собрал публикации на 3 месяца с чередованием интерьера, оборудования и рабочих процессов.',
    },
];

const socialProofBullets: string[] = [
    'Световые решения: мягкий рассеянный свет передаёт чистоту и комфорт медицинского пространства.',
    'Медицинская специфика в кадре: адаптируем протокол съёмки под стоматологию, эстетику и диагностические центры.',
    'Опыт с медицинскими объектами разной площади: умеем визуально раскрывать даже компактные кабинеты.',
    'Полный пакет форматов: файлы сразу готовы для сайта, Google Maps и соцсетей.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что именно снимают при интерьерной съёмке клиники?',
        answer:
            'Базовый набор: фасад и вход, ресепшн и зона ожидания, кабинеты врачей, оборудование крупным планом, стерилизационная зона и вспомогательные пространства. Акценты адаптируются под специализацию.',
    },
    {
        question: 'Нужно ли закрывать клинику на время съёмки?',
        answer:
            'Обычно нет. Для интерьерной съёмки без пациентов работаем рано утром до открытия или в промежутках между приёмами. В большинстве случаев клиника продолжает работу.',
    },
    {
        question: 'Сколько фотографий получится в итоге?',
        answer:
            'В зависимости от пакета — от 30 обработанных фото (Basic) до 60+ (Full). Снимаем больше, отдаём лучшие кадры после отбора и обработки.',
    },
    {
        question: 'Как быстро будут готовы фото?',
        answer:
            'От 3 рабочих дней для базового пакета. В каждый кадр входит профессиональная обработка: цветокоррекция, выравнивание, устранение засветов.',
    },
    {
        question: 'Можно ли использовать фото в рекламе?',
        answer:
            'Да. Все права на коммерческое использование передаются клинике без ограничений после финального расчёта.',
    },
    {
        question: 'Нужно ли специально готовить клинику к съёмке?',
        answer:
            'Да, это важно. Мы отправляем чеклист: убрать лишние предметы, проверить лампочки, подготовить оборудование и помещения в рабочем состоянии. 30–60 минут подготовки заметно улучшают результат.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит интерьерная съёмка клиники?',
        answer:
            'Basic — от 400 ₾ (небольшая клиника, фото + обработка). Standard с видеофрагментами — от 700 ₾. Full с 360° панорамами — от 1 200 ₾. Точная стоимость зависит от площади и состава задач.',
    },
    {
        question: 'Что если нужно и видео, и фото?',
        answer:
            'Это стандартный формат. Снимаем в один день и даём более выгодную стоимость, чем два отдельных выезда. Фото и видео-слайдер вместе работают сильнее.',
    },
    {
        question: 'Можно ли добавить съёмку врачей в тот же день?',
        answer:
            'Да. Интерьер, портреты и видеовизитки специалистов можно организовать в один съёмочный день по заранее согласованному плану.',
    },
    {
        question: 'Как проходит оплата?',
        answer: '50% предоплата и 50% после согласования материалов. Работаем официально.',
    },
    {
        question: 'Нужны ли субтитры для интерьерных материалов?',
        answer:
            'Для фото — нет. Для видеофрагментов под международные каталоги можно добавить текстовые оверлеи или субтитры.',
    },
    {
        question: 'Как долго актуальны отснятые материалы?',
        answer:
            'Обычно 1–3 года в зависимости от изменений в клинике. При серьёзном ремонте или переезде лучше обновить весь банк материалов.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Медицинская специфика в каждом кадре',
        text: 'Понимаем, что именно снижает тревожность пациента: кадры стерилизационной зоны и оборудования работают как визуальные доказательства безопасности.',
    },
    {
        title: 'Тёплая медицинская гамма',
        text: 'Делаем цветокоррекцию в нейтральных тёплых тонах, чтобы пространство читалось как чистое, современное и комфортное.',
    },
    {
        title: 'Готовые форматы для всех каналов',
        text: 'Сдаём оптимизированные версии для сайта, квадраты для соцсетей и горизонтальные кадры для Google Maps.',
    },
    {
        title: 'Тбилиси — наша база',
        text: 'Работаем по всем районам Тбилиси без доплаты. По другим городам Грузии — по согласованию.',
    },
    {
        title: 'Реальные сроки без задержек',
        text: 'Обычно 3–5 рабочих дней на выдачу материалов после съёмки.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1 — Бриф',
        text: 'Вы рассказываете о специализации, размере клиники, целевых площадках размещения и приоритетных акцентах.',
    },
    {
        title: 'Шаг 2 — Подготовка',
        text: 'Отправляем чеклист подготовки, согласовываем дату и удобный интервал, чаще всего раннее утро.',
    },
    {
        title: 'Шаг 3 — Съёмка',
        text: 'Работаем по протоколу: фасад, ресепшн, ожидание, кабинеты, оборудование, вспомогательные зоны.',
    },
    {
        title: 'Шаг 4 — Отбор и обработка',
        text: 'Выбираем лучшие кадры и делаем профессиональную цветокоррекцию с единым визуальным стилем.',
    },
    {
        title: 'Шаг 5 — Передача',
        text: 'Передаём через облако структурированный пакет файлов с комментариями по платформам.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic — от 400 ₾',
        price: '400 ₾',
        audience: 'Небольшая клиника 1–3 кабинета.',
        timeline: '3 рабочих дня',
        items: [
            'Съёмка 3 часа',
            '30 обработанных фото',
            'Форматы для сайта и Google Maps',
        ],
    },
    {
        title: 'Standard — от 700 ₾',
        price: '700 ₾',
        audience: 'Клиника с несколькими специализациями.',
        timeline: '5 рабочих дней',
        featured: true,
        items: [
            'Съёмка 5 часов',
            '50 обработанных фото',
            '2 видеофрагмента интерьера',
            'Форматы для сайта, Google Maps и Instagram',
        ],
    },
    {
        title: 'Full — от 1 200 ₾',
        price: '1 200 ₾',
        audience: 'Крупный медцентр или клиника с медтуризмом.',
        timeline: '7 рабочих дней',
        items: [
            'Съёмка 6–8 часов (возможно 2 дня)',
            '60+ обработанных фото',
            '3–5 видеофрагментов',
            '360° панорамы для Google Maps',
            'Экспорт для международных агрегаторов',
        ],
    },
];

const packageHelper: string[] = [
    'Небольшая клиника, 1–3 кабинета и базовый набор для сайта/GMB — выбирайте Basic.',
    'Несколько специализаций, активные соцсети и рекламные кампании — оптимально Standard.',
    'Клиника для медтуристов, международные каталоги и 360° туры — выбирайте Full.',
];

const relatedServices = [
    {
        href: '/clinics-service',
        label: 'Имиджевое видео клиники',
        description: 'Полноформатный имиджевый ролик, который дополняет интерьерные материалы.',
    },
    {
        href: '/360-tour-clinics',
        label: '360° тур для клиники',
        description: 'Интерактивный виртуальный тур для сайта и Google Maps.',
    },
    {
        href: '/promo-video/promo-doctor',
        label: 'Видео для врача',
        description: 'Видеовизитки специалистов: пространство + люди = целостный образ клиники.',
    },
    {
        href: '/reels-service',
        label: 'Reels для клиники',
        description: 'Короткий видеоконтент из интерьерных кадров для регулярных публикаций.',
    },
];

const internalTransitions = [
    {
        href: '/360-tour-clinics',
        intro: 'Хотите превратить фото в интерактивный виртуальный тур?',
        label: '360° тур для клиники',
    },
    {
        href: '/clinics-service',
        intro: 'Нужно не только фото, но и полноформатное видео о клинике?',
        label: 'Имиджевое видео клиники',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают на телефон и сразу ставят на сайт',
        text: 'Телефонные фото с заваленным горизонтом и плохим светом сигнализируют о несерьёзном отношении к деталям. Пациент делает вывод ещё до звонка.',
    },
    {
        title: 'Забывают про стерилизационную зону',
        text: 'Именно её пациенты хотят видеть в первую очередь, особенно в стоматологии. Когда эту зону скрывают, тревожность растёт.',
    },
    {
        title: 'Снимают пациентов без согласия',
        text: 'Это риск нарушения медицинской конфиденциальности и юридических норм. Интерьер лучше снимать без пациентов в нерабочее время.',
    },
    {
        title: 'Не обновляют фото годами',
        text: 'Старые фото со старым интерьером создают разрыв между ожиданием и реальностью. Оптимально обновлять фотобанк раз в 1,5–2 года.',
    },
    {
        title: 'Снимают только парадные кабинеты',
        text: 'Пациенту важно увидеть всю клинику: ожидание, вход, даже бытовые зоны. Честная визуальная картина вызывает больше доверия.',
    },
    {
        title: 'Не оптимизируют материалы для Google Maps',
        text: 'GMB требует корректные форматы и достаточное разрешение. Неадаптированные файлы выглядят хуже и работают слабее в выдаче.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимите фасад и вход на хороший телефон при дневном освещении — это сразу улучшит первое впечатление в Google Maps.',
    'Попросите пациентов загружать фото в Google Maps: пользовательские фото влияют на видимость карточки.',
    'Уберите временные предметы из кадра: коробки, лишние папки, неподходящую мебель.',
    'Добавьте подписи к фото в GMB — это даёт небольшой SEO-бонус для локального поиска.',
    'Снимите простой горизонтальный видео-тур на телефон: даже базовый проход лучше полного отсутствия видео.',
];

const checklistItems: string[] = [
    'Все кабинеты убраны, на поверхностях нет лишних предметов.',
    'Оборудование чистое, провода и расходники аккуратно убраны.',
    'Все лампочки работают, перегоревшие заменены.',
    'Стерилизационная зона в порядке: автоклав чистый, пакеты разложены аккуратно.',
    'Ресепшн без лишних бумаг, коробок и личных предметов сотрудников.',
    'Логотипы и таблички клиники чистые и хорошо читаются.',
    'Растения, если есть, приведены в порядок.',
    'Согласован ранний утренний слот или интервал без пациентов.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему кадры стерилизационной зоны самые важные в интерьерной съёмке клиники?',
        answer: [
            'Один из главных скрытых страхов пациента, особенно в стоматологии, — риск инфекции. Этот страх редко озвучивается, но сильно влияет на решение о первом визите.',
            'Кадры автоклава, запаянных пакетов и аккуратной организации расходников работают как визуальное доказательство безопасности без лишних объяснений.',
            'Поэтому стерилизационная зона часто становится самым просматриваемым блоком в галерее клиники и важным trust-сигналом для новых пациентов.',
        ],
    },
    {
        question: 'Как интерьерные фото влияют на позиции в Google Maps?',
        answer: [
            'Google Business Profile учитывает количество, качество и разнообразие фото, а также свежесть материалов и взаимодействие пользователей с ними.',
            'Карточки с 20–30 профессиональными фото обычно получают заметно больше просмотров и кликов, чем карточки с 3–5 случайными снимками.',
            'Регулярное обновление фото после заметных изменений в клинике сигнализирует алгоритму об активности профиля и поддерживает локальные позиции.',
        ],
    },
    {
        question: 'Какие помещения клиники снимать обязательно, а какие — по желанию?',
        answer: [
            'Обязательный минимум: фасад и вход, ресепшн, зона ожидания, типичный кабинет врача, ключевое оборудование и стерилизационная зона для инвазивных направлений.',
            'Эти категории закрывают базовые вопросы пациента: как найти клинику, что внутри, насколько там чисто и на каком уровне оборудование.',
            'Дополнительно по специализации снимают детские зоны, лаборатории, диагностические кабинеты, парковку, лаунж и другие пространства.',
        ],
    },
    {
        question: 'Как часто нужно обновлять интерьерные фото клиники?',
        answer: [
            'Плановое обновление фотобанка обычно делают раз в 1,5–2 года, если серьёзных изменений в пространстве нет.',
            'Внепланово обновляться стоит после переезда, капитального ремонта, ребрендинга или закупки заметного нового оборудования.',
            'Небольшие изменения можно закрыть точечной досъёмкой нескольких сцен без полного пересъёма всего объекта.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит съёмка интерьера клиники в Тбилиси?',
        answer:
            'От 400 ₾ за Basic (30 фото). С видеофрагментами — от 700 ₾. Full с 360° панорамами — от 1 200 ₾.',
    },
    {
        question: 'Как долго снимают интерьер клиники?',
        answer: 'В среднем 3–5 часов, в зависимости от размера объекта. Оптимально снимать утром до открытия.',
    },
    {
        question: 'Нужно ли останавливать работу клиники для съёмки?',
        answer: 'Нет. Обычно съёмка проходит в промежутках между приёмами или ранним утром.',
    },
    {
        question: 'За сколько дней готовы обработанные фото?',
        answer: 'От 3 рабочих дней для Basic до 7 дней для Full-пакета.',
    },
    {
        question: 'Сколько фотографий получит клиника?',
        answer: 'От 30 обработанных снимков (Basic) до 60+ (Full) в форматах для сайта, GMB и соцсетей.',
    },
    {
        question: 'Влияют ли профессиональные фото на позиции в Google Maps?',
        answer: 'Да. Карточки с качественными и разнообразными фото получают больше просмотров и кликов.',
    },
    {
        question: 'Нужно ли готовить клинику к съёмке?',
        answer: 'Да, нужна базовая подготовка: порядок, исправный свет и готовое к съёмке оборудование.',
    },
    {
        question: 'Можно ли в один день снять и интерьер, и врачей?',
        answer: 'Да, это практично и часто выгоднее, чем два отдельных съёмочных дня.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'У нас небольшая клиника — фотосъёмка нам не нужна',
        reality: 'При правильном свете и ракурсах даже компактный кабинет выглядит профессионально. Размер не равен качеству визуала.',
    },
    {
        myth: 'Фото на хороший телефон не хуже профессиональных',
        reality: 'Профессиональный свет, оптика и обработка дают принципиально другой результат, особенно при смешанном освещении.',
    },
    {
        myth: 'Пациенты смотрят на цены, а не на фото',
        reality: 'Сначала оценивают визуал. Если первое впечатление слабое, до сравнения цен пользователь может не дойти.',
    },
    {
        myth: 'Нужно дождаться идеального ремонта',
        reality: 'Ожидание идеального момента откладывает рост. Рабочая стратегия — снять текущее состояние и обновить после крупных изменений.',
    },
    {
        myth: 'Эти фото будут актуальны максимум год',
        reality: 'При отсутствии серьёзных изменений качественные интерьерные фото обычно служат 2–3 года.',
    },
];

const glossary: Card[] = [
    {
        title: 'Walkthrough',
        text: 'Плавный видеопроход по помещению, создающий эффект присутствия. Используется на сайте и в Google Maps.',
    },
    {
        title: 'Google My Business (GMB)',
        text: 'Карточка бизнеса в Google Maps. Качество фото в профиле влияет на видимость и кликабельность.',
    },
    {
        title: 'Цветокоррекция',
        text: 'Профессиональная обработка фото/видео для выравнивания цвета, света и единообразного стиля.',
    },
    {
        title: 'Медицинская гамма',
        text: 'Нейтральные тёплые оттенки без резких контрастов, которые передают чистоту и комфорт пространства.',
    },
    {
        title: '360° панорама',
        text: 'Сферический интерактивный снимок, позволяющий осмотреть помещение вокруг в Google Maps или на сайте.',
    },
];

const notFitPoints: string[] = [
    'Клиникам, которые хотят снимать пациентов в кадре без письменного согласия.',
    'Тем, кому нужны материалы сегодня к вечеру: минимальный срок выдачи — от 3 рабочих дней.',
    'Тем, кто ждёт, что только фото сами по себе заменят сайт, соцсети и маркетинговую систему.',
    'Тем, кто хочет показать только парадные зоны и скрыть остальное: мы рекомендуем честную презентацию пространства.',
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
            name: 'Съёмка интерьера клиники',
            item: CANONICAL_URL,
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Съёмка интерьера клиники в Тбилиси',
    description:
        'Профессиональная фотосъёмка и базовый видеоряд интерьера клиники: кабинеты, оборудование, зоны ожидания, материалы для сайта, Google Maps и рекламы.',
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
        price: '400',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: профессиональная съёмка интерьеров клиник, стоматологий и wellness-центров.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Съёмка интерьера клиники Тбилиси — фото и видео от 400 ₾ | Breus Media',
    description:
        'Профессиональная съёмка интерьера клиники в Тбилиси: кабинеты, оборудование, зоны ожидания. Материалы для сайта, Google Maps и рекламы. От 400 ₾, срок от 3 дней.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Съёмка интерьера клиники Тбилиси — фото и видео от 400 ₾ | Breus Media',
        description:
            'Профессиональная съёмка интерьера клиники в Тбилиси для сайта, Google Maps и рекламы. Фото и видеофрагменты от 400 ₾.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function ClinicInteriorPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Clinics · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Съёмка интерьера клиники и кабинетов — материалы для сайта и рекламы
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Пациент решает «страшно или нет» по тому, как выглядит пространство.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Большинство клиник Тбилиси выглядят в интернете хуже, чем в реальности: телефонные снимки, плохое
                        освещение, заваленный горизонт. Профессиональная фото- и видеосъёмка интерьера показывает реальный
                        уровень вашей клиники — без стоковых изображений и без приукрашивания. Это фундамент визуального
                        присутствия для сайта, Google Maps, соцсетей и маркетинговых материалов. Снимаем в Тбилиси и по всей
                        Грузии, встраиваясь в рабочий день клиники.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать съёмку интерьера клиники
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Съёмка интерьера клиники — это профессиональные фото и видео вашего пространства: зона ожидания,
                        кабинеты, оборудование, стерилизационная зона и входная группа. На выходе вы получаете готовый
                        визуальный банк для сайта, Google Maps, соцсетей и рекламных кампаний. Один съёмочный день обычно
                        закрывает потребность в контенте на 1–2 года.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит</h2>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-white/75 leading-relaxed">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Какую задачу решает услуга</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {solutionPoints.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в услугу</h2>
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
                                <p className="font-semibold text-white">Фото</p>
                                <p>30–60 обработанных снимков в форматах для сайта и соцсетей.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Видео</p>
                                <p>2–3 video walkthrough фрагмента, по 30–60 секунд каждый.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Форматы</p>
                                <p>JPEG (полное разрешение + web) и MP4 1080p.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Срок и передача</p>
                                <p>От 3 рабочих дней. Передача через Google Drive или WeTransfer.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Права</p>
                                <p>Полная передача прав на использование материалов без ограничений.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Расскажите о вашей клинике — уточним объём, предложим удобную дату и стоимость в течение рабочего дня."
                buttonLabel="Заказать съёмку интерьера клиники"
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
                        На тбилисском медицинском рынке визуальное первое впечатление становится всё более важным конкурентным
                        фактором. Пациенты, переехавшие в Грузию из России и других стран, привыкли к высокому стандарту
                        визуального контента клиник и ожидают его здесь. Медицинские туристы сравнивают Тбилиси, Ереван и Дубай
                        по фотографиям ещё до чтения цен. Клиники с профессиональным визуальным контентом имеют преимущество и в
                        международных каталогах, и в локальном поиске Google Maps.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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

            <ProcessNote text="Интерьерная съёмка клиники занимает 3–5 часов и лучше всего проходит утром до первых пациентов." />

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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Цена от</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">400 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">700 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 200 ₾</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Длина съёмки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 часа</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 часов</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">6–8 часов</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Количество фото</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">30</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">50</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60+</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Видеофрагменты</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3–5 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">360° панорамы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Форматы для GMB</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Экспорт для агрегаторов</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок</td>
                                    <td className="p-3">3 дня</td>
                                    <td className="p-3">5 дней</td>
                                    <td className="p-3">7 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">Не уверены? Напишите — поможем определиться за 10 минут.</p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Работаем по всему Тбилиси и Грузии. Ответим на вопросы и предложим удобную дату."
                buttonLabel="Обсудить съёмку для нашей клиники"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {internalTransitions.map((item) => (
                                <p key={item.href}>
                                    {item.intro}{' '}
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                    .
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки клиник в интерьерной съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Чеклист готовности клиники к интерьерной съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            360° тур для клиники:{' '}
                            <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                /360-tour-clinics
                            </Link>
                            .
                        </li>
                        <li>
                            Имиджевое видео клиники:{' '}
                            <Link href="/clinics-service" className="text-[#D4A017] hover:text-white transition-colors">
                                /clinics-service
                            </Link>
                            .
                        </li>
                        <li>
                            Видео для врача:{' '}
                            <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                /promo-video/promo-doctor
                            </Link>
                            .
                        </li>
                        <li>
                            Reels для клиники:{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                /reels-service
                            </Link>
                            .
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Снимаем интерьеры клиник в Тбилиси, Батуми и других городах Грузии. Напишите нам — обсудим дату,
                            объём и стоимость. Первый разговор ни к чему не обязывает.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Профессиональная съёмка интерьера клиники в Тбилиси — Breus Media. Показываем ваш уровень.
                    </p>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

```
---
---

## /promo-video/promo-car-dealer
Lines: 1345
```tsx
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
    subtitle: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-car-dealer';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Владельцам и директорам автосалонов в Тбилиси, Дигоми, Рустави',
        text: 'Нужен ролик, который быстро объясняет, кто вы и почему вам доверяют удалённые покупатели.',
    },
    {
        title: 'Мультибрендовым площадкам с ассортиментом 20+ автомобилей',
        text: 'Когда большой выбор, важно показать не только машины, но и процесс, команду и масштаб бизнеса.',
    },
    {
        title: 'Экспортным дилерам для клиентов из СНГ и Европы',
        text: 'Покупатели из Казахстана, Беларуси и других стран чаще принимают решение по видео до визита.',
    },
    {
        title: 'Автоплощадкам, которые хотят выглядеть как бренд',
        text: 'Имиджевое видео поднимает восприятие с уровня «объявление» до уровня стабильного продавца.',
    },
    {
        title: 'Компаниям, открывающим новый шоурум или новую локацию',
        text: 'Ролик помогает быстро заявить о новой точке и объяснить, как вас найти.',
    },
    {
        title: 'Дилерам, уставшим повторять одно и то же каждому лиду',
        text: 'Видео снимает базовые вопросы в WhatsApp и экономит часы переговоров менеджеров.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Строит доверие у удалённых покупателей',
        text: 'Клиент из другого города или страны видит реальную площадку, живых людей и понятный процесс без личного визита.',
    },
    {
        title: 'Снижает нагрузку на продавцов',
        text: 'Вместо длинных объяснений «как вас найти» и «кто вы» менеджер отправляет один ролик с ключевой информацией.',
    },
    {
        title: 'Укрепляет позицию в переговорах о цене',
        text: 'Когда продавец воспринимается как бренд, клиент реже давит только на скидку и чаще соглашается на условия.',
    },
    {
        title: 'Работает годами',
        text: 'Один качественный ролик о площадке можно использовать 2-3 года на сайте, MyAuto, YouTube, в соцсетях и мессенджерах.',
    },
];

const painCards: Card[] = [
    {
        title: '«Удалённые клиенты срываются в последний момент»',
        text: 'Видео заранее показывает реальность площадки, чтобы ожидания совпадали с фактом и сделка не разваливалась на месте.',
    },
    {
        title: '«Мы тратим часы на объяснение, кто мы такие»',
        text: 'Имиджевый ролик закрывает повторяющиеся вопросы: адрес, процесс, гарантии, формат работы с удалёнными клиентами.',
    },
    {
        title: '«Конкуренты выглядят серьёзнее, хотя у нас лучше»',
        text: 'Покупатель сравнивает подачу. Профессиональное видео сразу повышает воспринимаемый уровень автосалона.',
    },
    {
        title: '«Нас не находят в поиске / не узнают онлайн»',
        text: 'Видео в YouTube и MyAuto усиливает органику и помогает находить площадку через видеозапросы, а не только через объявления.',
    },
    {
        title: '«Партнёры и поставщики воспринимают нас несерьёзно»',
        text: 'Для B2B-переговоров ролик работает как визитная карточка уровня и повышает доверие к бизнесу.',
    },
    {
        title: '«Мы уже снимали, но вышло любительски и не сработало»',
        text: 'Слабая съёмка часто даёт обратный эффект. Нужны сценарий, свет, звук и монтаж под реальную задачу продаж.',
    },
];

const earnPoints: string[] = [
    'Больше удалённых предоплат: покупатели из СНГ и Европы охотнее переводят задаток, когда видят площадку и команду.',
    'Выше средний чек: доверие к продавцу снижает давление на цену и количество жёсткого торга.',
    'Быстрее оборот автомобилей: сильное медийное присутствие уменьшает срок «зависания» машин на площадке.',
    'Повторные обращения и рекомендации: клиент, который «познакомился» с вами через видео, чаще возвращается и советует вас знакомым.',
];

const avoidLossPoints: string[] = [
    'Меньше срывов сделок за счёт совпадения ожиданий и реальности.',
    'Меньше конфликтов «обещали одно, увидел другое», потому что видео фиксирует честную картину.',
    'Защита от ценового демпинга: брендовый продавец сравнивается не только по цене.',
    'Экономия времени команды: ролик закрывает базовые вопросы вместо менеджеров.',
];

const deliverables: string[] = [
    'Hero Dealership Film — основной ролик 60-120 секунд: площадка, команда, процесс покупки, работа с удалёнными клиентами.',
    'Process & Trust Inserts — 4-6 коротких сегментов (подъёмник, диагностика, оформление документов, передача ключей).',
    'Location & Access Visuals — кадры «как нас найти»: Дигоми / Рустави / адрес Тбилиси, ориентиры, парковка.',
    'Субтитры RU/EN — для просмотра без звука и для покупателей из СНГ и Европы.',
    'Вертикальная версия — адаптация основного ролика под Instagram Reels / TikTok / Stories.',
    'Статичные стоп-кадры — 10-15 фотографий для MyAuto-профиля, сайта, соцсетей.',
    'Usage Guide — рекомендации по размещению: сайт, YouTube, MyAuto, WhatsApp-приветствие, закреп в соцсетях.',
    'Исходники и финалы — файлы в MP4/MOV для самостоятельного использования.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Новый шоурум в Дигоми открылся, нужно заявить о себе',
        text: 'Ролик публикуется на YouTube, закрепляется в Instagram и ставится в профиль MyAuto. Новые клиенты сразу видят масштаб, офис и команду.',
    },
    {
        title: 'Сценарий 2 — Экспортный дилер работает с покупателями из Казахстана и России',
        text: 'Покупатель смотрит видео о площадке до перевода задатка, поэтому отправляет деньги увереннее и реже отменяет сделку на финише.',
    },
    {
        title: 'Сценарий 3 — Крупная площадка хочет отстроиться от конкурентов на Руставском авторынке',
        text: 'При похожем прайсе видео делает площадку узнаваемой и формирует доверие ещё до первого звонка.',
    },
    {
        title: 'Сценарий 4 — Дилер запускает YouTube-канал для органического трафика',
        text: 'Имиджевый ролик становится «якорным» видео канала и объясняет, кто вы, зачем подписываться и чего ждать от контента.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Дилер, Дигоми',
        text: 'Площадка 40+ машин, основной трафик — WhatsApp и MyAuto. После публикации ролика входящие «расскажите о себе» сократились примерно вдвое.',
    },
    {
        title: 'Кейс 2 — Экспортная компания, Рустави',
        text: 'После запуска имиджевого видео доля отмен после задатка снизилась: покупатели заранее лучше понимали, с кем работают.',
    },
    {
        title: 'Кейс 3 — Автосалон, открытие нового офиса',
        text: 'Съёмка в день открытия: основной ролик + короткие сегменты для Reels. За первые 2 недели видео собрало органические просмотры по запросам об автосалонах Тбилиси.',
    },
];

const socialProofBullets: string[] = [
    'Автосалоны с видео обычно получают больше конверсий, чем площадки только со статикой (по отраслевым срезам рынка автодилеров).',
    'Большинство покупателей изучают продавца в интернете до первого контакта, и видео формирует ключевое первое впечатление.',
    'Профессиональный видеоконтент у дилеров часто сокращает среднее время продажи авто с площадки.',
    'Для экспортных покупателей видео о продавце регулярно становится решающим фактором доверия в удалённой сделке.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое имиджевое видео и чем оно отличается от рекламного ролика?',
        answer:
            'Имиджевое видео рассказывает о вашем бизнесе: кто вы, как работаете и почему вам доверять. Рекламный ролик продвигает конкретное предложение «здесь и сейчас». В идеале эти форматы работают вместе.',
    },
    {
        question: 'Нам нужен сценарий или вы пишете его сами?',
        answer:
            'Сценарий делаем вместе: задаём вопросы о площадке, целевой аудитории и преимуществах, затем согласовываем текст до съёмки.',
    },
    {
        question: 'Нужно ли нам специально готовиться к съёмке?',
        answer:
            'Да, минимально: убрать визуальный шум, подготовить чистую площадку и офис, выставить ключевые машины. За 2-3 дня до съёмки отправляем чеклист.',
    },
    {
        question: 'Можно снимать без людей в кадре — только площадку и машины?',
        answer:
            'Можно, но ролики с живыми людьми обычно вызывают больше доверия, особенно у удалённых покупателей.',
    },
    {
        question: 'На каком языке делается ролик?',
        answer:
            'Базово — русский с субтитрами EN. По запросу добавляем грузинскую или английскую озвучку.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Обычно 4-6 часов на площадке. При необходимости досъёмки приезжаем повторно. Монтаж занимает 5-10 рабочих дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео для автосалона?',
        answer:
            'Стартовая цена — от 700 ₾. Финальная смета зависит от объёма: локации, языки, дополнительные сегменты и адаптации.',
    },
    {
        question: 'Что входит в базовую цену?',
        answer:
            'Один съёмочный день, основной ролик 60-90 секунд, субтитры RU/EN и базовые правки (до 2 итераций). Дополнительные сегменты, вертикаль и фотосъёмка — как опции.',
    },
    {
        question: 'Как проходит оплата?',
        answer: '50% предоплата до старта работ и 50% после согласования финального монтажа. Работаем по договору.',
    },
    {
        question: 'Можно снять сразу имиджевое видео + Reels + обзоры машин в один день?',
        answer:
            'Да, комбинированная съёмка обычно выгоднее: закрываем несколько форматов за один выезд и снижаем стоимость единицы контента.',
    },
    {
        question: 'Как долго можно использовать готовое видео?',
        answer:
            'Бессрочно: вы получаете полные права. Обновлять ролик рекомендуем при переезде, ребрендинге или серьёзном изменении площадки.',
    },
    {
        question: 'Что если результат нам не понравится?',
        answer:
            'Закладываем 2 раунда правок. Если проблема возникла по нашей вине, переснимаем за свой счёт.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Знаем грузинский авторынок',
        text: 'Работаем в Тбилиси и понимаем специфику MyAuto, Рустави, Дигоми и удалённых сделок.',
    },
    {
        title: 'Фокус на результат, а не только на картинку',
        text: 'Каждый элемент ролика работает на доверие покупателя и конверсию, а не на декоративность.',
    },
    {
        title: 'Профессиональное оборудование',
        text: 'DJI Air 3S, стабилизаторы и беспроводной звук дают уровень, который считывается как серьёзный бизнес.',
    },
    {
        title: 'Полный цикл в одном месте',
        text: 'От брифа и сценария до финальных файлов и рекомендаций по размещению — без поиска нескольких подрядчиков.',
    },
    {
        title: 'Локальная B2B-команда',
        text: 'Говорим на языке автобизнеса: дилеры, экспорт, доверие, цикл сделки.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Бриф и созвон (1-2 дня)',
        text: 'Обсуждаем задачу, аудиторию и смыслы. Вы рассказываете контекст, мы структурируем и фиксируем цель ролика.',
    },
    {
        title: 'Сценарий и подготовка (2-4 дня)',
        text: 'Собираем структуру ролика, утверждаем с вами и отправляем чеклист по подготовке площадки.',
    },
    {
        title: 'Съёмочный день (1 день, 4-6 часов)',
        text: 'Снимаем площадку, команду, процессы и дополнительные сегменты с минимальной суетой для команды.',
    },
    {
        title: 'Монтаж и звук (5-10 рабочих дней)',
        text: 'Монтаж, цветокоррекция, субтитры, звук и первая версия на согласование.',
    },
    {
        title: 'Правки и финал (1-3 дня)',
        text: 'До 2 итераций правок и передача финального пакета файлов для сайта, соцсетей и мессенджеров.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic — «Доверие»',
        price: 'от 700 ₾',
        subtitle: 'Для небольшой площадки или ИП, когда нужно первое профессиональное видео о бизнесе.',
        timeline: '7-14 рабочих дней от съёмки до финала',
        items: [
            'Основной ролик 60-90 сек (горизонтальный).',
            'Субтитры RU.',
            '1 итерация правок.',
            'Финальный файл MP4.',
        ],
    },
    {
        title: 'Standard — «Бренд»',
        price: 'от 1 100 ₾',
        subtitle: 'Для автосалона с регулярным потоком клиентов, которому нужен системный контент.',
        timeline: '7-14 рабочих дней от съёмки до финала',
        featured: true,
        items: [
            'Основной ролик 90-120 сек (горизонтальный).',
            'Вертикальная версия для Reels / Stories.',
            'Субтитры RU/EN.',
            '3-4 коротких process-сегмента.',
            '10 фотографий площадки.',
            '2 итерации правок.',
        ],
    },
    {
        title: 'Full — «Экспорт»',
        price: 'от 1 700 ₾',
        subtitle: 'Для экспортной компании или крупного дилера с международной аудиторией.',
        timeline: '7-14 рабочих дней от съёмки до финала',
        items: [
            'Основной ролик 120 сек + версия EN с озвучкой.',
            'Вертикальные адаптации ×2.',
            '6-8 process-сегментов.',
            'Location & Access Visuals (как найти площадку).',
            '20+ фотографий.',
            'Usage Guide по размещению.',
            '3 итерации правок.',
        ],
    },
];

const packageHelper: string[] = [
    'Первое видео о площадке, бюджет ограничен -> Basic.',
    'Активный Instagram и MyAuto, нужен системный контент -> Standard.',
    'Работаете с удалёнными и зарубежными покупателями -> Full.',
    'Не уверены, что подойдёт? Напишите нам — разберём вашу ситуацию за 10 минут.',
];

const relatedServices = [
    {
        href: '/reels-promo/reels-auto',
        label: 'Reels для автобизнеса',
        description: 'Короткие ролики под Instagram/TikTok для ежедневного охвата и потока заявок.',
    },
    {
        href: '/promo-video/auto-model-review',
        label: 'Обзорный видеоконтент по автомобилям',
        description: 'Детальные обзоры моделей для YouTube, соцсетей и карточек авто.',
    },
    {
        href: '/360-tour-auto',
        label: '360° тур для автосалона',
        description: 'Виртуальный тур по шоуруму, который можно встроить на сайт.',
    },
    {
        href: '/drone-services/drone-auto',
        label: 'Аэросъёмка автосалона',
        description: 'Динамичная съёмка площадки с воздуха для имиджа и презентаций.',
    },
];

const internalTransitions = [
    {
        href: '/promo-video/auto-model-review',
        intro: 'Если нужно не только рассказать о площадке, но и показать конкретные машины, переходите на страницу',
        label: 'обзорного видеоконтента по автомобилям',
    },
    {
        href: '/reels-promo/reels-auto',
        intro: 'Для ежедневного охвата в Instagram и TikTok лучше подойдёт сервис',
        label: 'Reels для автобизнеса',
    },
    {
        href: '/360-tour-auto',
        intro: 'Хотите дать покупателям возможность «зайти» в шоурум онлайн? Посмотрите услугу',
        label: '360° тура для автосалона',
    },
];

const additionalMaterials = [
    {
        href: '/promo-video/auto-model-review',
        label: 'Как дилеры используют видео для увеличения продаж — разбор кейсов',
        description: 'Подборка рабочих форматов видеоконтента для автодилеров в Грузии.',
    },
    {
        href: '#checklist',
        label: 'Чеклист подготовки автосалона к съёмке',
        description: 'Короткий список действий, который повышает качество кадра уже в первый день.',
    },
    {
        href: '/360-tour-auto',
        label: '360° тур для автосалона — альтернатива или дополнение к видео?',
        description: 'Когда стоит использовать 360° как отдельный продукт, а когда — вместе с имиджевым роликом.',
    },
    {
        href: '/reels-promo/reels-auto',
        label: 'Как продвигать автобизнес в Грузии через видеоконтент',
        description: 'Практика распределения роликов по каналам: сайт, MyAuto, YouTube, соцсети, мессенджеры.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают на телефон «просто чтобы было»',
        text: 'Размытая картинка и плохой звук хуже отсутствия видео: это сигнал непрофессионализма.',
    },
    {
        title: 'Рассказывают о машинах, но не о себе',
        text: 'Покупателю важно понять, кто продавец и можно ли ему доверять. Бренд площадки продаёт сильнее отдельных объявлений.',
    },
    {
        title: 'Снимают ролик один раз и не обновляют',
        text: 'После переезда, ребрендинга или смены команды старое видео начинает работать против вас.',
    },
    {
        title: 'Не используют видео во всех точках контакта',
        text: 'Ролик должен работать не только на YouTube: закреп в соцсетях, профиль MyAuto, WhatsApp Business, сайт, email.',
    },
    {
        title: 'Смешивают имиджевый ролик с прямой рекламой',
        text: 'Имидж строит доверие, а не давит «купите сейчас». Агрессивная продажа в этом формате снижает эффект.',
    },
    {
        title: 'Игнорируют удалённую аудиторию',
        text: 'Если нет субтитров, маршрута «как нас найти» и объяснения дистанционной сделки, вы теряете часть лидов.',
    },
];

const improveWithoutPurchase: string[] = [
    'Поставьте лучшее из текущих видео в закреп Instagram и в приветствие WhatsApp Business — это даст быстрый эффект.',
    'Добавьте в MyAuto-профиль хотя бы одно видео о площадке, а не только о машинах.',
    'Оформите Google Business Profile с фото и описанием — это бесплатная точка доверия.',
    'Снимайте вертикальные ролики «сегодня на площадке» на телефон: регулярность важнее идеала на старте.',
    'Обновите описания в Instagram, Telegram и WhatsApp: кто вы и как работаете с удалёнными клиентами.',
];

const checklistItems: string[] = [
    'Площадка убрана: мусор, лишние вещи и случайные предметы убраны из кадра.',
    'Машины расставлены аккуратно, витринные автомобили вымыты и стоят на лучших местах.',
    'Офис в порядке: стойка, рабочая зона и стол менеджера готовы к съёмке.',
    'Команда предупреждена: 1-2 ключевых сотрудника готовы появиться в кадре (по желанию).',
    'Логотип / вывеска видны и не перекрыты.',
    'Согласовано время съёмки: оптимально утром или за 2-3 часа до заката.',
    'Сценарий и ключевые смыслы утверждены с командой Breus Media.',
    'Подготовлены ключи и доступ к локациям, которые будут сниматься.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему имиджевое видео важнее отдельных роликов про машины?',
        answer: [
            'На MyAuto покупатель видит характеристики и фото авто, но остаётся главный вопрос: «Кто этот продавец и можно ли ему доверять?» Имиджевый ролик отвечает именно на него.',
            'В удалённых сделках доверие к продавцу часто важнее конкретных характеристик машины. Покупатель из Алматы или Минска принимает решение по видео и ощущению прозрачности процесса.',
            'Один качественный ролик закрывает вопрос доверия надолго и работает в фоне, пока команда занимается продажами.',
        ],
    },
    {
        question: 'Как правильно использовать готовый ролик?',
        answer: [
            'Главная ошибка — просто загрузить видео и ждать. Ролик должен стоять в ключевых точках касания, где клиент впервые знакомится с площадкой.',
            'Рекомендуем: YouTube с корректным заголовком, закреп в Instagram, WhatsApp Business-приветствие, профиль MyAuto, главная сайта и коммерческие предложения для партнёров.',
            'Чем системнее размещение, тем больше ролик экономит время отдела продаж и поднимает конверсию из переписки в сделку.',
        ],
    },
    {
        question: 'Как видео помогает при работе с экспортными покупателями?',
        answer: [
            'В экспортных сделках из Грузии покупатель часто переводит деньги человеку, которого никогда не видел лично. Основной барьер здесь — не цена, а доверие.',
            'Видео с командой, процессами, офисом и реальной площадкой работает как «виза доверия»: клиент понимает, что имеет дело с системным бизнесом.',
            'Версия с EN-субтитрами открывает дополнительный спрос из Европы и упрощает работу через брокеров и партнёров.',
        ],
    },
    {
        question: 'Что делает имиджевое видео действительно сильным?',
        answer: [
            'Хороший ролик отвечает на три вопроса: кто вы, можно ли вам доверять и как у вас проходит сделка. Плохой ролик просто показывает красивые машины под музыку.',
            'Сильные признаки: есть живые люди, есть процесс покупки/диагностики/передачи, есть конкретика по локации и масштабу площадки.',
            'Слабые признаки: слайд-шоу фото, плохой звук, отсутствие сценария и непонятная цель видео.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое имиджевое видео для автосалона?',
        answer:
            'Это профессиональный ролик 60-120 секунд о дилере: площадка, команда и процессы покупки. Формирует доверие у новых и удалённых покупателей.',
    },
    {
        question: 'Зачем автосалону в Тбилиси видео о себе?',
        answer:
            'Большая часть сделок начинается удалённо. Видео о продавце заменяет первый визит и снижает количество отказов на поздних этапах.',
    },
    {
        question: 'Сколько стоит имиджевое видео для автодилера в Тбилиси?',
        answer: 'От 700 ₾ за базовый пакет. Полный пакет с English-версией и доп. сегментами — от 1 700 ₾.',
    },
    {
        question: 'Как долго делается имиджевый ролик?',
        answer: 'Съёмка — 1 день, монтаж — 5-10 рабочих дней. Обычно готовый пакет передаём за 7-14 дней.',
    },
    {
        question: 'Помогает ли видео продавать авто удалённым покупателям?',
        answer:
            'Да. Ролик о площадке и команде снижает барьер доверия и повышает готовность к задатку у покупателей из СНГ и Европы.',
    },
    {
        question: 'Нужен ли сценарий для съёмки автосалона?',
        answer:
            'Да. Сценарий собирается по брифу, чтобы ролик отвечал на реальные вопросы клиента, а не был набором случайных кадров.',
    },
    {
        question: 'Можно ли заказать видео для автосалона в Рустави?',
        answer: 'Да. Работаем по всей Грузии: Тбилиси, Рустави, Батуми, Кутаиси и другие города.',
    },
    {
        question: 'Где использовать имиджевое видео автосалона?',
        answer: 'На YouTube, в профиле MyAuto, в закрепе Instagram, на сайте и как приветственное сообщение в WhatsApp Business.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Видео нужно только крупным дилерам, нам рано.',
        reality:
            'На старте видео особенно критично: когда репутации ещё нет, покупатель оценивает вас по тому, что видит онлайн.',
    },
    {
        myth: 'Достаточно снять на телефон, сейчас все так делают.',
        reality:
            'Любительская подача часто усиливает ценовой прессинг. Профессиональное видео помогает удерживать цену и статус.',
    },
    {
        myth: 'Ролик посмотрят 100 человек, это не окупится.',
        reality:
            'Даже 100 целевых просмотров могут принести одну закрытую сделку, которая окупает производство целиком.',
    },
    {
        myth: 'У нас уже есть видео прошлого года, этого достаточно.',
        reality:
            'Если изменилась локация, команда или формат работы, старый ролик формирует ложные ожидания и мешает продаже.',
    },
    {
        myth: 'Видео для сайта и для соцсетей — это отдельные съёмки.',
        reality:
            'Один съёмочный день можно упаковать в несколько форматов: 16:9 для сайта и YouTube, 9:16 для Reels и короткие сегменты.',
    },
];

const glossary: Card[] = [
    {
        title: 'Имиджевое видео',
        text: 'Ролик о бренде и компании, который формирует доверие и восприятие, а не давит на немедленную покупку.',
    },
    {
        title: 'Deliverables',
        text: 'Готовые материалы по итогам работы: ролики, фото, субтитры, версии под разные площадки.',
    },
    {
        title: 'Hero Film',
        text: 'Главный «якорный» ролик о площадке, вокруг которого строится остальной контент.',
    },
    {
        title: 'MyAuto.ge',
        text: 'Крупнейший автомобильный маркетплейс Грузии, где размещаются объявления и формируется первый контакт с покупателем.',
    },
    {
        title: 'Субтитры RU/EN',
        text: 'Текстовые дорожки для просмотра без звука и для аудитории на разных языках.',
    },
    {
        title: 'Process Inserts',
        text: 'Короткие сегменты о процессах: диагностика, оформление, передача автомобиля и другие этапы сделки.',
    },
];

const notFitPoints: string[] = [
    'Тем, кто хочет «видео как у всех» без брифа и погружения в задачу.',
    'Тем, у кого нет 20 минут на созвон и согласование сценария.',
    'Тем, кто ищет самый дешёвый вариант в сегменте «снял и забыл».',
    'Тем, кому нужен финальный ролик «уже завтра» без времени на подготовку и монтаж.',
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
            name: 'Имиджевое видео автосалона',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Имиджевое видео автосалона — пример структуры ролика',
    description:
        'Пример флагманского ролика о площадке: команда, процессы, локация и работа с удалёнными покупателями.',
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
    name: 'Имиджевое видео автосалона в Тбилиси',
    description:
        'Профессиональное имиджевое видео для автосалонов и дилеров: площадка, команда, процессы, субтитры RU/EN и форматы для MyAuto, сайта и соцсетей.',
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
        price: '700',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: имиджевые видео, Reels, 360° туры и аэросъёмка для бизнеса по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Имиджевое видео автосалона в Тбилиси — съёмка для сайта',
    description:
        'Профессиональное имиджевое видео для автосалонов и дилеров в Тбилиси. Показываем площадку, команду, процессы. Для MyAuto, сайта и экспортных продаж. От 700 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Имиджевое видео автосалона в Тбилиси — съёмка для сайта',
        description:
            'Покажите площадку, команду и процессы в одном ролике, который работает в MyAuto, на сайте, в WhatsApp и рекламе.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoCarDealerPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Car Dealer · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Имиджевое видео автосалона — съёмка для сайта и рекламы
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Один ролик о вашей площадке — и клиент из Казахстана, Беларуси или Тбилиси понимает: вы честный продавец,
                        а не просто номер телефона на MyAuto.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Грузия — один из крупнейших автохабов Кавказа. Дигоми, Рустави, Тбилиси: ежедневно сотни покупателей
                        выбирают машины удалённо, по фото и голосовым сообщениям. Имиджевое видео автосалона меняет правила игры:
                        вместо «перешлите ещё 40 фото» — один профессиональный ролик, который показывает площадку, команду,
                        процессы и доверие.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку автосалона
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простым языком</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Имиджевое видео автосалона — это фирменный ролик на 60-120 секунд о вашем бизнесе: кто вы, где находитесь,
                        как устроен процесс покупки и почему вам можно доверять. В отличие от обзоров отдельных машин, этот ролик
                        работает как «визитка» площадки и продавца: один раз снимается и дальше используется на сайте, в закрепах
                        соцсетей, профиле MyAuto и в WhatsApp вместо длинных голосовых.
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
                                <p>
                                    Основной ролик: MP4, 4K или 1080p, горизонтальный 16:9, 60-120 сек. Вертикальная версия: MP4,
                                    1080×1920 (9:16), 30-60 сек. Короткие сегменты: MP4, 15-30 сек. Фото: JPG,
                                    веб-оптимизированные + оригиналы.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>7-14 рабочих дней с момента съёмки до готовых файлов.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Через Google Drive или WeTransfer + краткая инструкция по размещению.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Покажите покупателю свою площадку один раз — и сэкономьте сотни часов переписки."
                buttonLabel="Обсудить съёмку автосалона"
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
                        Тбилиси — один из крупнейших автохабов постсоветского пространства. Рустави и Дигоми остаются ключевыми
                        точками, откуда автомобили уходят в Казахстан, Россию, Армению, Азербайджан и страны Европы. Большинство
                        сделок начинается удалённо: покупатель видит объявление на MyAuto.ge, пишет в WhatsApp, и дальше всё
                        решает доверие к продавцу. Профессиональное имиджевое видео в этой нише пока редкость — и это окно
                        возможностей для тех, кто готов выделиться качественной подачей.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример имиджевого ролика</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь можно встроить ваш актуальный кейс с YouTube. Сейчас оставлен демо-embed, чтобы блок сразу работал в
                        разметке страницы и в schema.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример имиджевого видео автосалона"
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

            <ProcessNote text="Мы не начинаем съёмку без понимания бизнеса: сначала 20-минутный созвон, где фиксируем кто ваши покупатели, чего они боятся и что делает вас сильнее конкурентов." />

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
                                <h3 className="text-lg font-bold mb-1">{pack.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pack.subtitle}</p>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 700₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 1100₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1700₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик (горизонт.)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ 60-90 с</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ 90-120 с</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ 120 с</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия (Reels)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ ×2</td>
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
                                    <td className="p-3 border-b border-[#2a2a2a]">Озвучка EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Process-сегменты</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3-4 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">6-8 шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фотографии</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10 шт</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">20+ шт</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Location Visuals</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Usage Guide</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Правки</td>
                                    <td className="p-3">1</td>
                                    <td className="p-3">2</td>
                                    <td className="p-3">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Вы работаете, чтобы зарабатывать, а не объяснять каждому клиенту «кто вы» по 40 минут в WhatsApp. Один ролик решает это раз и навсегда."
                buttonLabel="Получить расчёт стоимости"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {internalTransitions.map((item) => (
                                <p key={item.href + item.label}>
                                    {item.intro}{' '}
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                    .
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {additionalMaterials.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                    {item.label}
                                </Link>{' '}
                                — {item.description}
                            </li>
                        ))}
                    </ul>
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

            <section id="checklist" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке автосалона</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☐</span>
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
                    <h2 className="text-3xl font-bold mb-8">Кому мы НЕ подходим</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Мы находимся в Тбилиси и работаем по всей Грузии — Рустави, Батуми, Кутаиси. Напишите в Telegram или
                            WhatsApp: {CONTACT_PHONE}. Ответим быстро, без лишних вопросов и формальностей.
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
                        Breus Media — медиапродакшн в Тбилиси. Имиджевые видео, Reels, 360° туры и аэросъёмка для бизнеса в
                        Грузии. Работаем с автосалонами, отелями, ресторанами и девелоперами.
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

```
---
---

## /promo-video/promo-clinic
Lines: 1277
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-clinic';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Частные клиники и медцентры Тбилиси, Батуми и других городов Грузии',
        text: 'Для клиник, которым важно показать пространство, оборудование и людей до первого визита пациента.',
    },
    {
        title: 'Стоматологии с высокой конкуренцией',
        text: 'Видео помогает выделиться на фоне десятков похожих карточек и сайтов.',
    },
    {
        title: 'Эстетические клиники и центры косметологии',
        text: 'Визуальный образ здесь напрямую влияет на доверие и готовность записаться.',
    },
    {
        title: 'Диагностические и реабилитационные центры',
        text: 'Если в клинике есть дорогое оборудование, его нужно показать профессионально.',
    },
    {
        title: 'Клиники, работающие с медтуризмом',
        text: 'Для иностранного пациента ролик часто является ключевым доказательством уровня.',
    },
    {
        title: 'Новые клиники и проекты после ребрендинга',
        text: 'Помогает быстро синхронизировать новый уровень сервиса с образом онлайн.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Снижает тревогу перед первым визитом',
        text: 'Видео убирает неизвестность: пациент уже «побывал» в клинике до записи.',
    },
    {
        title: 'Отстраивает от конкурентов',
        text: 'Пока у многих стоки и шаблонные тексты, живое видео пространства и команды выделяет сразу.',
    },
    {
        title: 'Обосновывает ценовую категорию',
        text: 'Качественная картинка поддерживает ощущение высокого медицинского уровня.',
    },
    {
        title: 'Работает на медтуризм',
        text: 'Пациент из другой страны принимает решение дистанционно, и видео здесь критично.',
    },
];

const painCards: Card[] = [
    {
        title: '«У нас хорошая клиника, но пациенты этого не видят»',
        text: 'Сайт есть, соцсети есть, но без живого видео люди чаще уходят без заявки.',
    },
    {
        title: '«Конкуренты с видео забирают клики в поиске и картах»',
        text: 'Видео-обложки в Google Maps визуально выигрывают и чаще получают переходы.',
    },
    {
        title: '«Не хотим ломать рабочий процесс ради съёмки»',
        text: 'Съёмка обычно занимает 4-6 часов и спокойно встраивается в график клиники.',
    },
    {
        title: '«Снимали на телефон — получилось непрезентабельно»',
        text: 'В медицине слабый визуал может снижать доверие к качеству услуг.',
    },
    {
        title: '«Не понимаем, что снимать и как строить ролик»',
        text: 'Мы закрываем это через бриф, концепцию и сценарный план до съёмочного дня.',
    },
    {
        title: '«Иностранные пациенты не понимают, чего ожидать»',
        text: 'RU/EN видео с субтитрами решает барьер ожиданий до поездки в Грузию.',
    },
];

const earnPoints: string[] = [
    'Видео на лендинге помогает увеличивать долю заявок от нового трафика.',
    'Профессиональный визуал поддерживает позиционирование в более высоком ценовом сегменте.',
    'Медтуристы быстрее принимают решение, когда видят клинику «изнутри» до поездки.',
    'Один ролик масштабируется на сайт, Google Maps, соцсети и рекламные кабинеты.',
];

const avoidLossPoints: string[] = [
    'Фильтрует нецелевые лиды: ожидания формируются заранее и честно.',
    'Снижает стоимость лида в рекламе благодаря более сильным креативам.',
    'Снижает репутационные риски за счёт прозрачной демонстрации клиники.',
    'Экономит время врачей: меньше базовых вопросов о среде на первой консультации.',
];

const deliverables: string[] = [
    'Бриф, концепция и сценарный план до съёмки.',
    'Выезд команды (оператор + свет + звук при необходимости).',
    'Съёмка интерьера: ресепшн, зона ожидания, кабинеты, оборудование, стерилизация.',
    'Съёмка команды в работе без лишней постановки.',
    'Монтаж, музыка и цветокоррекция в тёплой медицинской гамме.',
    'Субтитры RU/EN (опционально).',
    'Версии под сайт, Instagram, YouTube.',
    '4K мастер + web-версия.',
];

const useCases: Card[] = [
    {
        title: 'Запуск новой клиники',
        text: 'Ролик на главной и в Google Maps сразу создаёт образ «серьёзного игрока» на рынке Тбилиси.',
    },
    {
        title: 'Привлечение пациентов из России и СНГ',
        text: 'RU/EN субтитры и запуск в рекламе помогают конвертировать иностранный спрос.',
    },
    {
        title: 'Ребрендинг и переход в премиальный сегмент',
        text: 'Новое видео синхронизирует реальный уровень клиники с её цифровым образом.',
    },
    {
        title: 'Запуск Meta-рекламы',
        text: 'Из одного имиджевого ролика нарезаются форматы, которые работают лучше статики.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Стоматология в Ваке',
        text: 'После запуска RU/EN видео выросли запросы в WhatsApp по конкретным процедурам.',
    },
    {
        title: 'Эстетический центр после ремонта',
        text: 'Один ролик закрыл контент для сайта, Instagram и рекламы на старте обновлённого позиционирования.',
    },
    {
        title: 'Многопрофильный центр диагностики',
        text: 'После добавления видео в Google Maps выросли просмотры карточки и переходы на сайт.',
    },
];

const socialProofBullets: string[] = [
    'Профессиональные камеры и мягкий свет для чистого, но «живого» медицинского визуала.',
    'Опыт в медицинской нише: понимаем этику, приватность и рабочий процесс клиник.',
    'Локальная команда в Тбилиси без «международных» логистических наценок.',
    'Полная передача прав на использование без ограничений.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Зачем клинике видео, если есть фотографии?',
        answer:
            'Фото показывает, как выглядит пространство, а видео показывает, как там ощущается. Для медицины это ключевая разница в доверии.',
    },
    {
        question: 'Нужно ли останавливать работу клиники во время съёмки?',
        answer:
            'Нет. Снимаем в рабочем ритме: интерьер и зоны в окнах между приёмами, команду — в короткие согласованные слоты.',
    },
    {
        question: 'Нужно ли заранее писать сценарий?',
        answer: 'Нет, мы готовим концепцию и сценарный план после короткого брифа.',
    },
    {
        question: 'Какая длительность ролика и где его использовать?',
        answer:
            'Обычно 60-120 секунд + короткая версия 30-45 секунд. Размещение: сайт, карты, соцсети, реклама.',
    },
    {
        question: 'Можно ли снимать с реальными пациентами?',
        answer:
            'Да, только при письменном согласии. При этом сильный ролик можно сделать и без съёмки пациентов в кадре.',
    },
    {
        question: 'Через сколько дней готов результат?',
        answer: 'Базовый срок от 5 рабочих дней, стандартно 5-7, Full-пакет — до 10 дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео клиники?',
        answer: 'Стартовая цена от 600 ₾. Финальная смета зависит от масштаба и состава материалов.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer: 'Выезд, съёмка, монтаж, цветокоррекция, музыка, передача файлов. Дополнительно — озвучка, субтитры на других языках, анимация, срочность.',
    },
    {
        question: 'Как происходит оплата?',
        answer: '50% предоплата до съёмки и 50% после финального согласования.',
    },
    {
        question: 'Сколько раундов правок включено?',
        answer: 'В Basic и Standard — 2 раунда, в Full — 3 раунда.',
    },
    {
        question: 'Можно ли сделать видео и фото за один выезд?',
        answer: 'Да, и это обычно выгоднее, чем два отдельных выезда.',
    },
    {
        question: 'Подойдёт ли это небольшой клинике по бюджету?',
        answer: 'Да, пакет от 600 ₾ как раз рассчитан на небольшие клиники и кабинеты.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Понимаем медицинский контекст',
        text: 'Снимаем так, чтобы визуально передать стерильность, безопасность и заботу без «холодной» подачи.',
    },
    {
        title: 'Тбилисская команда без наценки',
        text: 'Быстро выезжаем по городу и не завышаем бюджет логистикой.',
    },
    {
        title: 'Фокус на результате',
        text: 'Собираем ролик вокруг одного вопроса: почему пациент должен выбрать вашу клинику.',
    },
    {
        title: 'Полный цикл в одних руках',
        text: 'Съёмка, монтаж, цвет, субтитры и адаптации форматов делаем внутри одной команды.',
    },
    {
        title: 'Реалистичные сроки',
        text: 'Ориентир 5-7 рабочих дней для стандартного пакета, без маркетинговых обещаний.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и концепция',
        text: '20 минут созвона или короткий бриф: фиксируем задачу, смысл ролика и ориентир по смете.',
    },
    {
        title: 'Шаг 2. Подготовка',
        text: 'Согласовываем дату и отправляем чеклист по подготовке клиники к съёмочному дню.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Обычно 4-6 часов: пространство, оборудование, команда и ключевые сцены сервиса.',
    },
    {
        title: 'Шаг 4. Монтаж и правки',
        text: 'Передаём черновой монтаж, собираем комментарии и выпускаем финал.',
    },
    {
        title: 'Шаг 5. Передача файлов',
        text: 'Отдаём мастер и web-версии в облако, храним исходный проект для будущих адаптаций.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 600 ₾',
        audience: 'Для небольшой клиники или одного кабинета',
        timeline: '5 рабочих дней',
        items: [
            'Съёмка 4 часа',
            'Ролик 60-90 сек',
            'Монтаж + цвет + музыка',
            '1080p версия для сайта/соцсетей',
            '2 раунда правок',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 000 ₾',
        audience: 'Для клиники с несколькими кабинетами и врачами',
        timeline: '7 рабочих дней',
        featured: true,
        items: [
            'Съёмка до 6 часов',
            'Ролик 90-120 сек + короткая версия',
            '4K + 1080p версии',
            'RU/EN субтитры',
            '2 раунда правок',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 800 ₾',
        audience: 'Для крупного медцентра и задач медтуризма',
        timeline: '10 рабочих дней',
        items: [
            'Съёмка до 8 часов (или 2 дня)',
            'Главный ролик + короткий + вертикаль',
            'Озвучка + музыка',
            'Субтитры RU/EN/GEO',
            'Анимационные элементы',
            '3 раунда правок',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают «красоту» вместо «доверия»',
        text: 'Кадры интерьера без людей и процессов редко конвертируют в запись.',
    },
    {
        title: 'Используют стоковые фото',
        text: 'Стоки считываются мгновенно и подрывают доверие к медицинскому бренду.',
    },
    {
        title: 'Не показывают стерилизацию и оборудование',
        text: 'Именно эти 3-5 секунд часто снимают главный страх пациента.',
    },
    {
        title: 'Снимают один раз и забывают',
        text: 'Имиджевый ролик нужно обновлять раз в 1-2 года и поддерживать Reels-контентом.',
    },
    {
        title: 'Не используют видео в Google Maps',
        text: 'Карточка с видео чаще получает клик и переход на сайт.',
    },
    {
        title: 'Игнорируют субтитры и языки',
        text: 'Для иностранной аудитории видео без субтитров теряет эффективность.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимите короткое «добро пожаловать» видео от главврача на главный экран сайта.',
    'Обновите Google Maps реальными фото команды вместо стоков.',
    'Попросите лояльных пациентов записать короткий видео-отзыв.',
    'Показывайте оборудование в еженедельных Stories.',
    'Сделайте видео-ответ врача на самый частый вопрос пациентов.',
];

const checklistItems: string[] = [
    'Кабинеты убраны, лишние предметы убраны из кадра.',
    'Оборудование чистое и готово к демонстрации.',
    'Команда предупреждена о съёмке.',
    'Форма и халаты подготовлены.',
    'Ресепшн и зона ожидания приведены в порядок.',
    'Освещение проверено, перегоревшие лампы заменены.',
    'Логотип клиники виден в ключевых точках.',
    'Письменные согласия пациентов подготовлены (если пациенты могут попасть в кадр).',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видео для клиники — это базовый инструмент, а не роскошь?',
        answer: [
            'Пациент принимает решение в первые секунды знакомства со страницей: нужно быстро снять тревогу и показать среду.',
            'Видео одновременно передаёт пространство, людей и процессы, чего не делает один только текст или фото.',
            'Даже небольшой рост конверсии в медицине быстро монетизируется за счёт высокого среднего чека.',
        ],
    },
    {
        question: 'Что делает медицинское видео «доверительным»?',
        answer: [
            'Честные кадры: реальные врачи, реальные кабинеты, реальные процессы без переглянца.',
            'Детали безопасности: стерилизация, оборудование, порядок, спокойная коммуникация врача.',
            'Свет и цвет: тёплая медицинская гамма создаёт ощущение комфорта и профессионализма.',
        ],
    },
    {
        question: 'Как видео помогает в медицинском туризме?',
        answer: [
            'Иностранный пациент не может приехать «просто посмотреть», поэтому решение принимается по онлайн-контенту.',
            'RU/EN субтитры и понятная структура ролика снижают языковой и психологический барьер.',
            'Видео превращает клинику из «неизвестного бренда» в понятное и безопасное место ещё до поездки.',
        ],
    },
    {
        question: 'Как часто обновлять имиджевое видео клиники?',
        answer: [
            'Обычно раз в 1.5-3 года, если не было больших изменений в интерьере, команде и позиционировании.',
            'Если был ремонт, смена врачей, обновление оборудования — ролик лучше переснять раньше.',
            'Оптимальная модель: большое видео раз в 2 года и регулярные короткие форматы между обновлениями.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео для клиники в Тбилиси?',
        answer: 'От 600 ₾ (Basic), от 1 000 ₾ (Standard), от 1 800 ₾ (Full).',
    },
    {
        question: 'Как долго снимают видео в клинике?',
        answer: 'Один съёмочный день: обычно 4-6 часов.',
    },
    {
        question: 'Нужно ли закрывать клинику на время съёмки?',
        answer: 'Нет, съёмка идёт в рабочем ритме без остановки процессов.',
    },
    {
        question: 'За сколько дней будет готово видео?',
        answer: 'Базово от 5 дней, стандартно 5-7, Full — до 10 рабочих дней.',
    },
    {
        question: 'Помогает ли видео привлекать иностранных пациентов?',
        answer: 'Да, особенно при наличии RU/EN субтитров и грамотной дистрибуции.',
    },
    {
        question: 'Где размещать имиджевое видео клиники?',
        answer: 'На сайте, в Google Maps, Instagram, Facebook, YouTube и в рекламе.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Это слишком дорого для небольшой клиники.',
        reality: 'Пакет от 600 ₾ — это рабочий старт и актив на 2-3 года.',
    },
    {
        myth: 'Телефона достаточно, результат будет тот же.',
        reality: 'В медицине качество изображения и звука напрямую влияет на доверие.',
    },
    {
        myth: 'Пациентам важны только отзывы.',
        reality: 'Отзывы убеждают, а видео снимает страх и ускоряет решение о записи.',
    },
    {
        myth: 'Сначала дождёмся идеального ремонта.',
        reality: 'Идеального момента часто не бывает; важнее показать людей, подход и порядок уже сейчас.',
    },
    {
        myth: 'Видео нужно только сетевым клиникам.',
        reality: 'Небольшие клиники часто выигрывают от видео даже сильнее.',
    },
];

const glossary: Card[] = [
    {
        title: 'Имиджевое видео',
        text: 'Короткий ролик, который представляет клинику через пространство, команду и подход.',
    },
    {
        title: 'Hero video',
        text: 'Главный ролик на первом экране сайта, формирующий первое впечатление.',
    },
    {
        title: 'Цветокоррекция',
        text: 'Постобработка цвета для нужной атмосферы, чистоты и визуального комфорта.',
    },
    {
        title: 'Мастер-файл',
        text: 'Финальный файл в максимальном качестве (обычно 4K), из которого делаются все версии.',
    },
    {
        title: 'Субтитры',
        text: 'Текстовое сопровождение, важное для просмотра без звука и международной аудитории.',
    },
    {
        title: 'CTR',
        text: 'Click-Through Rate: доля пользователей, кликнувших по карточке/объявлению.',
    },
];

const notFitPoints: string[] = [
    'Клиникам, которым нужен только самый дешёвый формат без требований к качеству.',
    'Проектам, где хотят актёров вместо реальной команды клиники.',
    'Запросам «сегодня на сегодня»: минимальный реалистичный срок — от 5 дней.',
    'Съёмкам хирургических операций без отдельного этического и юридического протокола.',
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
            name: 'Имиджевое видео клиники',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Имиджевое видео клиники — пример формата',
    description: 'Демо-ролик формата: пространство, оборудование, команда и атмосфера клиники.',
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
    name: 'Имиджевое видео клиники в Тбилиси',
    description:
        'Имиджевый ролик для клиники: пространство, оборудование, команда и версии под сайт, карты, соцсети и рекламу.',
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
        name: 'Грузия',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '600',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: имиджевые видео, Reels, 360° туры и визуальный контент для бизнеса.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Имиджевое видео клиники в Тбилиси — от 600 ₾ | Breus Media',
    description:
        'Профессиональное имиджевое видео для клиники в Тбилиси. Показываем пространство, оборудование и подход — снижаем тревогу пациента до первого визита. Сроки от 5 дней.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Имиджевое видео клиники в Тбилиси — от 600 ₾ | Breus Media',
        description:
            'Видео-знакомство с клиникой: пространство, оборудование, команда и подход. Форматы для сайта, Google Maps, соцсетей и рекламы.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoClinicPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Clinic · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Имиджевое видео клиники — пространство, оборудование, подход
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Пациент принимает решение о первом визите в течение 30 секунд. Видео делает эти 30 секунд
                        убедительными.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Большинство пациентов ищут клинику онлайн и в первую очередь хотят увидеть, как там внутри и
                        кто там работает. Имиджевый ролик показывает клинику честно и профессионально: интерьер,
                        оборудование, команду и атмосферу. Снимаем в Тбилиси и по всей Грузии.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Получить смету имиджевого видео
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Имиджевое видео — это короткий ролик 60-120 секунд о вашей клинике. Он показывает пространство,
                        технологии и людей так, чтобы потенциальный пациент почувствовал: здесь безопасно и
                        профессионально.
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
                                <p>MP4 (4K мастер), MP4 (1080p web), вертикальная версия 9:16.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Длина</p>
                                <p>Основной ролик 60-120 сек, короткая версия 30-45 сек.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Срок</p>
                                <p>От 5 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача и права</p>
                                <p>Google Drive / WeTransfer + полная передача прав на использование.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Расскажите нам о своей клинике — предложим концепцию и стоимость в течение рабочего дня."
                buttonLabel="Получить смету имиджевого видео"
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
                        Медицинский рынок Тбилиси быстро растёт, а конкуренция за внимание пациента смещается в
                        цифровую среду. Для локальной аудитории и медтуристов видео становится самым быстрым способом
                        оценить клинику до первого контакта.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример имиджевого видео</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён embed демо-ролика. На финальной версии можно подставить релевантный кейс из
                        вашего портфолио.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример имиджевого видео клиники"
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

            <ProcessNote text="Съёмка клиники занимает один рабочий день и не требует закрытия кабинетов — мы встраиваемся в ваш рабочий ритм." />

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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Цена от</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">600 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 000 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 800 ₾</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Длина съёмки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">4 часа</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">6 часов</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">8 часов</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">90-120 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">120 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Короткая версия</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальный формат</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ + GEO</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Озвучка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">4K мастер</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Анимация/заставки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Правки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок</td>
                                    <td className="p-3">5 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">10 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Небольшая клиника и нужны материалы для сайта/соцсетей — Basic.</li>
                            <li>Несколько врачей и форматы под рекламу — Standard.</li>
                            <li>Фокус на медтуризм и полный форматный пакет — Full.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Расскажите о своём медцентре в двух словах — предложим формат именно под вашу задачу."
                buttonLabel="Обсудить видео для вашей клиники"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                    Видео для врача
                                </Link>{' '}
                                — личный бренд специалиста в дополнение к имиджевому ролику клиники.
                            </li>
                            <li>
                                <Link href="/promo-video/clinic-interior" className="text-[#D4A017] hover:text-white transition-colors">
                                    Съёмка интерьера клиники
                                </Link>{' '}
                                — фотоматериалы для сайта и Google Maps.
                            </li>
                            <li>
                                <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для клиники
                                </Link>{' '}
                                — регулярный контент после запуска имиджевого ролика.
                            </li>
                            <li>
                                <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур для клиники
                                </Link>{' '}
                                — интерактивная прогулка для сайта и Google Maps.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Хотите показать не только клинику, но и конкретных врачей? Переходите к{' '}
                            <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                «Видео для врача»
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Уже есть имиджевое видео и нужно поддерживать присутствие в соцсетях еженедельно? Смотрите{' '}
                            <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                «Reels для клиники»
                            </Link>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки клиник в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Чеклист готовности клиники к съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            <Link href="/promo-video/promo-doctor" className="text-[#D4A017] hover:text-white transition-colors">
                                Видео для врача (/promo-video/promo-doctor)
                            </Link>
                        </li>
                        <li>
                            <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для клиники (/reels-promo/reels-clinic)
                            </Link>
                        </li>
                        <li>
                            <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                360° тур для клиники (/360-tour-clinics)
                            </Link>
                        </li>
                        <li>
                            <Link href="/promo-video/clinic-interior" className="text-[#D4A017] hover:text-white transition-colors">
                                Съёмка интерьера клиники (/promo-video/clinic-interior)
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем с клиниками в Тбилиси, Батуми и других городах Грузии. Напишите в WhatsApp или
                            заполните форму — расскажем о формате, сроках и стоимости без шаблонных ответов.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Imago-видео для клиники в Тбилиси — Breus Media. Снимаем доверие.
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

```
---
---

## /promo-video/promo-doctor
Lines: 1316
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

type MythItem = {
    myth: string;
    reality: string;
};

type GlossaryItem = {
    term: string;
    description: string;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-doctor';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Частные врачи',
        text: 'Для специалистов, которые ведут приём самостоятельно или хотят развивать личный бренд независимо от клиники.',
    },
    {
        title: 'Специалисты клиники',
        text: 'Для врачей, которым нужна карточка на сайте клиники с видео-представлением, а не только фото и регалии.',
    },
    {
        title: 'Руководители направлений',
        text: 'Для тех, кто хочет стать «лицом» своей специализации и усиливать доверие к направлению через личный контакт.',
    },
    {
        title: 'Практикующие врачи разных специализаций',
        text: 'Стоматологи, косметологи, хирурги, гинекологи, офтальмологи и другие специалисты с частной практикой.',
    },
    {
        title: 'Врачи с иностранными пациентами',
        text: 'Для тех, кому важно показать себя до поездки пациента в Грузию и снизить барьер первого контакта.',
    },
    {
        title: 'Врачи с активным или планируемым Instagram',
        text: 'Для специалистов, которым нужен базовый профессиональный контент для системного присутствия в соцсетях.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Делает врача узнаваемым до первой встречи',
        text: 'Пациент, который видел видео доктора, приходит на приём не к незнакомцу. Это снижает тревогу и ускоряет формирование доверительных отношений.',
    },
    {
        title: 'Отстраивает специалиста от конкурентов',
        text: 'В большинстве тбилисских клиник в карточке врача есть только фото и список дипломов. Видео сразу выделяет специалиста в каталоге и агрегаторах.',
    },
    {
        title: 'Создаёт постоянно работающий инструмент привлечения',
        text: 'Видеовизитка работает 24/7, не требует ежемесячных расходов и не устаревает быстро, в отличие от разовых рекламных кампаний.',
    },
    {
        title: 'Помогает врачу говорить о себе без дискомфорта',
        text: 'Доктору не нужно «продавать себя» на приёме: видео заранее доносит подход, ценности и стиль коммуникации с пациентом.',
    },
];

const painCards: Card[] = [
    {
        title: '«Пациенты не знают, кто я, пока не придут на приём»',
        text: 'Даже врач с 15-летним опытом на странице агрегатора выглядит так же, как начинающий коллега. Видео показывает личность, уровень и подход ещё до первого контакта.',
    },
    {
        title: '«Сложно привлекать новых пациентов — только по рекомендациям»',
        text: 'Сарафанное радио не масштабируется. Видеовизитка в Instagram и на сайте работает как постоянный «рекомендатель» для новой аудитории.',
    },
    {
        title: '«Не знаю, что говорить в кадре — не умею продавать»',
        text: 'Мы подготавливаем вопросы и структуру беседы, чтобы вместо заученного монолога получился естественный и уверенный разговор.',
    },
    {
        title: '«У меня нет бюджета на полноценный маркетинг»',
        text: 'Ролик за 350–700 ₾ может работать 2–3 года и закрывать базовую задачу доверия без постоянных рекламных расходов.',
    },
    {
        title: '«Мои пациенты — иностранцы, им нужна информация на их языке»',
        text: 'Субтитры на русском и английском позволяют пациенту познакомиться с доктором до поездки, что особенно важно для медтуризма.',
    },
    {
        title: '«Я веду Instagram, но не знаю, что публиковать»',
        text: 'Видеовизитка становится якорным контентом: из неё получаются фрагменты для Stories, Reels и постов на несколько недель вперёд.',
    },
];

const earnPoints: string[] = [
    'Повышает запись без дополнительных расходов: карточки врачей с видео обычно конвертируют лучше, чем профили только с фото.',
    'Позволяет поднять чек за счёт личного бренда: специалист с видео присутствием воспринимается как более авторитетный.',
    'Открывает аудиторию медтуристов: иностранцы чаще выбирают врача, которого «увидели и почувствовали» до приезда.',
    'Работает как реклама без постоянного бюджета: ролик в Google Maps и Instagram может приводить трафик органически.',
];

const avoidLossPoints: string[] = [
    'Снижает число сценариев «посмотрел, но не записался» за счёт более сильного первого впечатления на странице врача.',
    'Уменьшает время консультации на базовые объяснения: видео заранее закрывает типовые вопросы о подходе и процессе приёма.',
    'Защищает репутацию при смене места работы: видеовизитка остаётся активом врача и помогает перевести аудиторию в новую клинику.',
    'Поддерживает соцсети в периоды занятости: контент из одного съёмочного дня закрывает 1–2 месяца публикаций.',
];

const deliverables: string[] = [
    'Предсъёмочный разговор: специализация, целевая аудитория, ключевые месседжи, формат ролика.',
    'Набор вопросов/тезисов для врача — опора для натурального разговора на камеру.',
    'Выезд оператора с профессиональным светом и петличным микрофоном.',
    'Съёмка в кабинете врача или в подходящей локации.',
    'Основной ролик 45–90 секунд: монтаж, цветокоррекция, музыка.',
    'Короткая версия 20–30 секунд для Stories/Reels.',
    'Субтитры на русском и английском (опционально).',
    'Финальные файлы в горизонтальном и вертикальном форматах.',
];

const outputSpecs: Card[] = [
    {
        title: 'Форматы',
        text: 'MP4 горизонтальный (16:9) + MP4 вертикальный (9:16).',
    },
    {
        title: 'Длина',
        text: 'Основной ролик 45–90 секунд, короткая версия 20–30 секунд.',
    },
    {
        title: 'Срок',
        text: 'От 4 рабочих дней после съёмки.',
    },
    {
        title: 'Передача',
        text: 'Google Drive или WeTransfer, постоянное хранение на облаке Breus Media.',
    },
    {
        title: 'Права',
        text: 'Полная передача прав без ограничений по сроку и территории.',
    },
];

const useCases: Card[] = [
    {
        title: 'Стоматолог запускает личный Instagram',
        text: 'Видеовизитка становится «нулевым» постом и базой для 4–6 недель контента: цитаты, рабочие моменты, ответы на вопросы.',
    },
    {
        title: 'Клиника обновляет страницы врачей на сайте',
        text: 'Снимаем пакет видеовизиток за 1–2 дня: единый стиль для всей команды при индивидуальном содержании каждого ролика.',
    },
    {
        title: 'Косметолог привлекает пациентов из-за рубежа',
        text: 'Видео с субтитрами RU/EN публикуется на сайте и продвигается в Instagram на аудиторию из России, Армении и Израиля.',
    },
    {
        title: 'Врач переходит в новую клинику',
        text: 'Новая версия видеовизитки с актуальным адресом помогает мягко перевести текущую аудиторию в новое место работы.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Гинеколог — видеовизитка для клиники в Ваке',
        text: 'После 90-минутной съёмки в кабинете специалист получил видео для сайта и Instagram. Ролик подчеркнул внимательность и человечность врача — ключевые факторы первичного выбора пациента.',
    },
    {
        title: 'Стоматолог — пакет видеовизиток для клиники',
        text: 'Тбилисская стоматология обновляла сайт и заказала съёмку для 5 врачей за один день. Видео использовали на сайте, в Google Maps и в рекламных кампаниях.',
    },
    {
        title: 'Косметолог — выход на русскоязычную аудиторию',
        text: 'Видеовизитка с русскими субтитрами продвигалась в Instagram и Telegram-каналах. Первый поток пациентов «из видео» пришёл в течение двух недель.',
    },
];

const socialProofBullets: string[] = [
    'Профессиональный петличный микрофон обязателен: в медицинской нише плохой звук моментально снижает доверие.',
    'Умеем работать с врачами, которые стесняются камеры: правильные вопросы, спокойная атмосфера, несколько дублей.',
    'Учитываем локальный контекст Тбилиси и ожидания грузинской, русскоязычной и международной аудитории пациентов.',
    'Полный цикл: от концепции до финальных файлов в нужных форматах без необходимости координировать нескольких подрядчиков.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Нужно ли мне готовить текст или учить монолог перед съёмкой?',
        answer:
            'Нет. Мы заранее присылаем вопросы и тезисы, а съёмка проходит в формате беседы. Монтаж убирает паузы и неудачные дубли — результат получается живым и уверенным.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Обычно 1–2 часа для одного врача: настройка света и звука, несколько дублей интервью и короткие рабочие кадры в кабинете.',
    },
    {
        question: 'Где размещать видеовизитку?',
        answer:
            'Основные площадки: карточка врача на сайте, Google Maps (Google Business Profile), Instagram и Facebook. Вертикальная версия подходит для Stories и Reels.',
    },
    {
        question: 'Что если мне не понравится результат?',
        answer:
            'В пакет включены 2 раунда правок. Обычно этого достаточно: после черновика вносим точечные изменения по вашим комментариям.',
    },
    {
        question: 'Можно ли снять видеовизитки для нескольких врачей за один день?',
        answer:
            'Да. Для съёмок от 3 врачей за один выезд действует пакетная стоимость, что особенно удобно для клиник.',
    },
    {
        question: 'Нужно ли специально оформлять кабинет перед съёмкой?',
        answer:
            'Нужна только лёгкая подготовка: убрать лишнее, проверить аккуратность фона и выбрать одежду. Капитальные изменения не требуются.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеовизитка врача?',
        answer:
            'От 350 ₾ за один ролик. При пакетной съёмке для нескольких врачей стоимость каждого видео снижается.',
    },
    {
        question: 'Что влияет на цену?',
        answer:
            'Длина съёмки, количество врачей, необходимость субтитров и дополнительных языков, сложность монтажа и срочность проекта.',
    },
    {
        question: 'Как проходит оплата?',
        answer:
            '50% предоплата до съёмки и 50% после утверждения финального варианта. Работаем официально и выставляем счёт.',
    },
    {
        question: 'Кому принадлежат права на видео?',
        answer:
            'Права полностью передаются врачу или клинике без ограничений по срокам, территории и каналам использования.',
    },
    {
        question: 'Что если понадобится обновить видео через год?',
        answer:
            'Делаем обновлённую версию при смене клиники, специализации или позиционирования. Для повторных клиентов действуют специальные условия.',
    },
    {
        question: 'Можно ли снять видеовизитку не в кабинете?',
        answer:
            'Да. При необходимости снимаем в студии или на нейтральном фоне — формат подбирается под задачу и аудиторию.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Умеем снимать людей, которые стесняются камеры',
        text: 'Создаём комфортную атмосферу, в которой врач говорит естественно: не «на камеру», а о своей работе и пациентах.',
    },
    {
        title: 'Тбилиси — наша база',
        text: 'Выезжаем по районам Тбилиси без доплаты за логистику. По всей Грузии работаем по согласованию.',
    },
    {
        title: 'Один стиль для всей клиники',
        text: 'Если нужно снять несколько специалистов, обеспечиваем единый визуальный стиль и цельный образ бренда.',
    },
    {
        title: 'Понимаем медицинскую специфику',
        text: 'Учитываем этику медицинской коммуникации и помогаем объяснять сложные процедуры понятно, без тревожных формулировок.',
    },
    {
        title: 'Сдаём в срок',
        text: 'Обычно черновик готов через 3 дня, финал — через 4–5 рабочих дней после съёмки.',
    },
    {
        title: 'Работаем под бизнес-задачу, а не только под красивую картинку',
        text: 'Цель ролика — повысить доверие и запись. Поэтому мы проектируем структуру видео под реальные точки контакта с пациентом.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1 — Бриф',
        text: 'Короткий разговор или анкета: специализация, целевая аудитория, ключевые сообщения и площадки размещения.',
    },
    {
        title: 'Шаг 2 — Подготовка',
        text: 'Присылаем вопросы/тезисы для врача и чеклист подготовки кабинета. Согласовываем дату и время.',
    },
    {
        title: 'Шаг 3 — Съёмка',
        text: 'Приезжаем с оборудованием, настраиваем свет и звук, снимаем интервью и рабочие кадры за 1–2 часа.',
    },
    {
        title: 'Шаг 4 — Монтаж',
        text: 'Собираем черновик, отправляем на согласование и вносим правки.',
    },
    {
        title: 'Шаг 5 — Передача',
        text: 'Передаём финальные файлы через облако и даём рекомендации по размещению на площадках.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 350 ₾',
        audience: 'Для одной базовой видеовизитки врача',
        timeline: '4 рабочих дня',
        items: [
            'Съёмка 1–1,5 часа',
            'Ролик 45–60 секунд',
            'Монтаж + цветокоррекция + музыка',
            'Форматы 16:9 и 9:16',
            '2 раунда правок',
        ],
    },
    {
        title: 'Standard',
        price: 'от 550 ₾',
        audience: 'Для врача с соцсетями и/или иностранными пациентами',
        timeline: '5 рабочих дней',
        featured: true,
        items: [
            'Съёмка до 2 часов',
            'Основной ролик 60–90 секунд + короткая версия 20–30 секунд',
            'Субтитры RU/EN',
            'Форматы для сайта, Instagram и YouTube',
            '2 раунда правок',
        ],
    },
    {
        title: 'Full',
        price: 'от 700 ₾',
        audience: 'Для врача-бренда и задач медтуризма',
        timeline: '7 рабочих дней',
        items: [
            'Съёмка до 3 часов',
            'Главный ролик 90 секунд + короткая версия + Reels-фрагмент',
            'Субтитры RU/EN + GEO',
            'Рабочие кадры для контента соцсетей',
            '3 раунда правок',
        ],
    },
];

const packageComparisonRows: Card[] = [
    { title: 'Цена', text: '350 ₾ | 550 ₾ | 700 ₾' },
    { title: 'Длина съёмки', text: '1,5 часа | 2 часа | 3 часа' },
    { title: 'Основной ролик', text: '45–60 сек | 60–90 сек | 90 сек' },
    { title: 'Короткая версия', text: '— | ✓ | ✓' },
    { title: 'Субтитры RU/EN', text: '— | ✓ | ✓ + GEO' },
    { title: 'Рабочие кадры', text: '— | — | ✓' },
    { title: 'Reels-фрагмент', text: '— | — | ✓' },
    { title: 'Правки', text: '2 | 2 | 3' },
    { title: 'Срок', text: '4 дня | 5 дней | 7 дней' },
];

const packageAssistant: string[] = [
    'Если нужна одна базовая видеовизитка для сайта клиники — выбирайте Basic.',
    'Если вы работаете с иностранными пациентами или ведёте Instagram — Standard закрывает задачу оптимально.',
    'Если строите личный бренд и хотите запас контента для старта контент-стратегии — Full даёт максимум форматов.',
    'Если сомневаетесь, напишите нам: поможем выбрать пакет под вашу специализацию и каналы.',
];

const relatedServices: Card[] = [
    {
        title: 'Имиджевое видео клиники',
        text: 'Если видеовизитка врача — это шаг 2, то имиджевое видео клиники — шаг 1: представление пространства и команды.',
    },
    {
        title: 'Reels для клиники',
        text: 'Регулярный контент для Instagram, который поддерживает видимость врача после выхода видеовизитки.',
    },
    {
        title: 'Съёмка интерьера клиники',
        text: 'Фотоматериалы для карточки врача и сайта, которые дополняют видеопрезентацию.',
    },
    {
        title: '360° тур для клиники',
        text: 'Интерактивный тур по кабинету и клинике с встраиванием в Google Maps и сайт.',
    },
];

const additionalMaterials: { label: string; href: string; description: string }[] = [
    {
        label: 'Имиджевое видео клиники',
        href: '/clinics-service',
        description: 'Представление всей клиники как системы, на фоне которой видеовизитки врачей работают ещё сильнее.',
    },
    {
        label: 'Reels для клиники',
        href: '/reels-promo/reels-clinic',
        description: 'Регулярный контент, который поддерживает присутствие врача в соцсетях после запуска визитки.',
    },
    {
        label: 'Съёмка интерьера клиники',
        href: '/promo-video/clinic-interior',
        description: 'Фотоматериалы для карточки врача и сайта, усиливающие восприятие сервиса.',
    },
    {
        label: '360° тур для клиники',
        href: '/360-tour-clinics',
        description: 'Интерактивный формат демонстрации кабинета и клиники изнутри.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают один раз и не обновляют годами',
        text: 'Если изменилась клиника, специализация или внешний образ врача, старое видео начинает работать против доверия.',
    },
    {
        title: 'Пишут скрипт и учат его наизусть',
        text: 'Заученный монолог звучит неестественно. Пациенту важнее живой стиль общения, чем идеальная дикция.',
    },
    {
        title: 'Снимают на фоне загруженного кабинета',
        text: 'Даже мелкий визуальный шум в кадре снижает восприятие профессионализма врача и клиники.',
    },
    {
        title: 'Используют видео только на сайте и не добавляют в Maps',
        text: 'Google Maps — одна из ключевых точек выбора врача. Отсутствие видео там часто снижает кликабельность карточки.',
    },
    {
        title: 'Говорят только о дипломах, а не о пациентах',
        text: 'Опыт важен, но пациент выбирает по ощущению безопасности и понятности. В видео нужен акцент на подход к человеку.',
    },
    {
        title: 'Снимают без профессионального микрофона',
        text: 'Плохой звук убивает доверие к ролику. Для медицинской темы качественный аудиосигнал обязателен.',
    },
];

const improveWithoutPurchase: string[] = [
    'Запишите короткое 30-секундное приветствие на телефон в кабинете с хорошим светом.',
    'Поставьте в профиль живое рабочее фото вместо студийного портрета «в галстуке».',
    'Снимите видео-ответ на самый частый вопрос пациента в Stories или Reels.',
    'Попросите пациентов отмечать вас в историях — это недорогой источник социального доказательства.',
    'Обновите Bio в Instagram: кто вы, чем помогаете, как записаться.',
];

const checklistItems: string[] = [
    'Кабинет убран, лишние предметы убраны со стола и подоконников.',
    'Подготовлена одежда: чистый халат или деловой образ без ярких принтов.',
    'Оборудование в кадре чистое и визуально аккуратное.',
    'Нет фоновых шумов: кондиционер, уведомления и звонки отключены.',
    'Подготовлены 2–3 ключевые мысли, которые важно донести пациенту.',
    'Врач ознакомился с вопросами от команды съёмки.',
    'Выделено 1,5–2 часа без пациентов в расписании.',
    'Дата и слот согласованы с администратором клиники.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему личный бренд врача важнее бренда клиники в Грузии?',
        answer: [
            'В грузинском контексте пациент обычно идёт «к врачу», а не «в клинику». Рекомендация конкретного специалиста весит больше, чем коммуникация медцентра как бренда.',
            'Видеовизитка масштабирует эту логику рекомендаций в digital-среду: человек без личного знакомства может «почувствовать» врача и принять решение о записи.',
        ],
    },
    {
        question: 'Как снять видео с врачом, который стесняется камеры?',
        answer: [
            'Мы не строим съёмку как выступление перед камерой. Вместо этого задаём 4–5 практичных вопросов о работе врача и пациентских сценариях.',
            'Когда доктор объясняет свою работу, а не «продаёт себя», речь становится естественной. На монтаже убираются паузы и лишние формулировки.',
        ],
    },
    {
        question: 'Сколько лет работает одна видеовизитка?',
        answer: [
            'Обычно 2–3 года при условии, что не изменились место работы, специализация и ключевой образ врача.',
            'Если врач перешёл в другую клинику, расширил практику или хочет обновить позиционирование, разумно снять новую версию.',
        ],
    },
    {
        question: 'Как видео врача помогает привлекать медтуристов?',
        answer: [
            'Иностранный пациент принимает решение полностью онлайн и не может заранее познакомиться с врачом офлайн. Видео становится ключевой точкой доверия до поездки.',
            'Для медтуризма особенно важны субтитры, понятная коммуникация процесса приёма и человеческий тон без «продающей» агрессии.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит видеовизитка врача в Тбилиси?',
        answer: 'От 350 ₾ за базовый ролик. С субтитрами RU/EN — от 550 ₾. Полный пакет с дополнительными кадрами — от 700 ₾.',
    },
    {
        question: 'Как долго снимают видеовизитку врача?',
        answer: 'Обычно 1–2 часа в кабинете врача, без остановки работы клиники на весь день.',
    },
    {
        question: 'Нужно ли врачу учить текст перед съёмкой?',
        answer: 'Нет. Мы присылаем вопросы заранее, а съёмка проходит как живой разговор.',
    },
    {
        question: 'За сколько дней готова видеовизитка?',
        answer: 'Обычно 4–5 рабочих дней с момента съёмки. Базовый пакет — от 4 дней.',
    },
    {
        question: 'Где размещать видеовизитку врача?',
        answer: 'На сайте в карточке врача, в Google Maps, Instagram и Facebook. Вертикальная версия — для Stories и Reels.',
    },
    {
        question: 'Помогает ли видеовизитка привлекать иностранных пациентов?',
        answer: 'Да. Видео с субтитрами позволяет медтуристам познакомиться с врачом до поездки и снижает барьер записи.',
    },
    {
        question: 'Можно ли снять видео для нескольких врачей за один день?',
        answer: 'Да. При съёмке 3 и более врачей за один выезд действуют пакетные условия.',
    },
    {
        question: 'Что делать, если врач плохо говорит на камеру?',
        answer: 'Мы задаём вопросы вместо монолога, снимаем дубли и убираем лишнее на монтаже — это рабочий стандарт для таких кейсов.',
    },
];

const myths: MythItem[] = [
    {
        myth: 'Врачу не нужен личный бренд — пусть клиника занимается маркетингом',
        reality:
            'Клиники могут меняться, а репутация врача остаётся. Личный бренд помогает привлекать пациентов независимо от вывески клиники.',
    },
    {
        myth: 'Видеовизитка нужна только известным врачам',
        reality:
            'Как раз малоизвестным специалистам она нужна больше: видео помогает быстро создать доверие там, где нет «сарафана».',
    },
    {
        myth: 'Пациентов интересуют только дипломы и опыт',
        reality:
            'Дипломы важны, но финальный выбор часто зависит от ощущения контакта и доверия. Видео формирует это ощущение заранее.',
    },
    {
        myth: 'Снять на телефон достаточно — результат такой же',
        reality:
            'Профессиональный свет и звук кардинально меняют восприятие. В медицине качество подачи напрямую влияет на доверие.',
    },
    {
        myth: 'Я не умею говорить перед камерой — мне не подойдёт',
        reality:
            'Не нужно быть оратором. Достаточно честно отвечать на вопросы о своей работе — это и даёт лучший результат в кадре.',
    },
];

const glossary: GlossaryItem[] = [
    {
        term: 'Видеовизитка',
        description: 'Короткое видео (45–90 секунд), где врач представляет себя, специализацию и подход к пациенту.',
    },
    {
        term: 'Петличный микрофон',
        description: 'Небольшой микрофон на одежде, который обеспечивает чистую речь без фоновых шумов.',
    },
    {
        term: 'Reels',
        description: 'Короткий вертикальный формат Instagram, который может получать органический охват без рекламного бюджета.',
    },
    {
        term: 'Google Business Profile (GMB)',
        description: 'Карточка бизнеса в Google Maps. Наличие видео повышает CTR и количество переходов.',
    },
    {
        term: 'Trust-сигнал',
        description: 'Элемент, который повышает доверие пациента. Видеовизитка врача — один из сильнейших trust-сигналов.',
    },
    {
        term: 'Медицинский туризм',
        description: 'Поездка в другую страну за медицинской помощью. Для этой аудитории видео помогает принять решение до поездки.',
    },
];

const notFitPoints: string[] = [
    'Врачам, которые категорически не хотят появляться в кадре: видеовизитка без врача теряет смысл.',
    'Тем, кто ждёт поток пациентов на следующий день: это инструмент устойчивого доверия, а не мгновенной рекламной волны.',
    'Тем, кто хочет «снять за час сегодня» без подготовки: минимальный цикл от брифа до съёмки обычно 1–2 дня.',
    'Тем, кто хочет нарушать медицинскую этику и использовать необоснованные обещания результата.',
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
            name: 'Видео для врача',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Демо видеовизитки врача в Тбилиси',
    description: 'Пример формата видеовизитки врача: представление специалиста, подход к пациенту и доверительный тон коммуникации.',
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
    name: 'Видеовизитка врача в Тбилиси',
    description:
        'Профессиональное видео для врача в Тбилиси: личный бренд, доверие пациентов, размещение на сайте, в Google Maps и Instagram.',
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
        name: 'Грузия',
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
    description: 'Видеопродакшн в Тбилиси: видеовизитки врачей, промо-видео, reels и контент для медицинского направления.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеовизитка врача в Тбилиси — личный бренд от 350 ₾ | Breus Media',
    description:
        'Профессиональное видео для врача в Тбилиси: представление специалиста, личный бренд, доверие пациентов. Снимаем видеовизитки врачей для сайта, Instagram, Google Maps. От 350 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеовизитка врача в Тбилиси — личный бренд и доверие пациентов',
        description:
            'Видео-представление врача для сайта, Google Maps и Instagram. Форматы под личный бренд, локальный рынок и медтуризм. От 350 ₾.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoDoctorPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Doctor · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видео для врача и медицинского направления — личный бренд и доверие
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Пациент идёт к конкретному врачу, а не в клинику. Видео-визитка делает знакомство до первого приёма.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        В Грузии пациенты выбирают доктора по рекомендации и по личному впечатлению. Если врача нет «в видео» —
                        его нет в интернете. Видеовизитка специалиста — это 45–60 секунд, в которых пациент знакомится с доктором,
                        понимает его подход и принимает решение записаться. Это не рекламный ролик, а живое представление
                        человека, которому пациент собирается доверить своё здоровье.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать видеовизитку врача
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Видео для врача — это короткое профессиональное видео, в котором специалист представляет себя, свою
                        специализацию и подход к пациентам. Готовый ролик размещается на сайте клиники в карточке врача, в
                        Google Maps, в профиле Instagram и используется в таргетированной рекламе. Одно видео одновременно
                        работает как визитка, trust-сигнал и инструмент прогрева аудитории.
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в услугу</h2>
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
                            {outputSpecs.map((item) => (
                                <div key={item.title}>
                                    <p className="font-semibold text-white">{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Снимаем в Тбилиси и по всей Грузии. Съёмка занимает 1–2 часа в вашем кабинете. Ответим на вопросы и предложим формат в течение дня."
                buttonLabel="Заказать видеовизитку врача"
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
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст Тбилиси и Грузии</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        На медицинском рынке Тбилиси и Грузии личное доверие к врачу часто важнее доверия к бренду клиники.
                        Пациенты передают специалистов «из рук в руки», и репутация доктора нередко становится главным фактором
                        выбора. Видеовизитка в этом контексте — не просто маркетинг, а цифровое продолжение «знакомства по
                        рекомендации». Для медтуристов это нередко единственный способ познакомиться с врачом до поездки.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Social Proof / доказательства</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример видеовизитки</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Ниже размещён embed демо-ролика. На боевой версии страницы заменим его на актуальный кейс из медицинского
                        направления.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеовизитки врача"
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

            <ProcessNote text="Съёмка видеовизитки занимает 1–2 часа в вашем кабинете — без перерыва в работе клиники." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                {packageComparisonRows.map((row) => {
                                    const [basic, standard, full] = row.text.split(' | ');
                                    return (
                                        <tr key={row.title}>
                                            <td className="p-3 border-b border-[#2a2a2a]">{row.title}</td>
                                            <td className="p-3 border-b border-[#2a2a2a]">{basic}</td>
                                            <td className="p-3 border-b border-[#2a2a2a]">{standard}</td>
                                            <td className="p-3 border-b border-[#2a2a2a]">{full}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageAssistant.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Снимаем в вашем кабинете в любой день. Первый разговор — 15 минут по телефону или в WhatsApp. +995 574 619 393"
                buttonLabel="Записаться на съёмку видеовизитки"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/clinics-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    {relatedServices[0]?.title}
                                </Link>{' '}
                                — {relatedServices[0]?.text}
                            </li>
                            <li>
                                <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                                    {relatedServices[1]?.title}
                                </Link>{' '}
                                — {relatedServices[1]?.text}
                            </li>
                            <li>
                                <Link href="/promo-video/clinic-interior" className="text-[#D4A017] hover:text-white transition-colors">
                                    {relatedServices[2]?.title}
                                </Link>{' '}
                                — {relatedServices[2]?.text}
                            </li>
                            <li>
                                <Link href="/360-tour-clinics" className="text-[#D4A017] hover:text-white transition-colors">
                                    {relatedServices[3]?.title}
                                </Link>{' '}
                                — {relatedServices[3]?.text}
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Дополнительные материалы</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {additionalMaterials.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Внутренние переходы</h2>
                    <p className="text-sm text-white/75 leading-relaxed mb-4">
                        Хотите не только представить врачей, но и показать клинику целиком? Смотрите страницу{' '}
                        <Link href="/clinics-service" className="text-[#D4A017] hover:text-white transition-colors">
                            «Имиджевое видео клиники»
                        </Link>
                        .
                    </p>
                    <p className="text-sm text-white/75 leading-relaxed">
                        Нужен регулярный контент для Instagram, а не разовая съёмка? Переходите в раздел{' '}
                        <Link href="/reels-promo/reels-clinic" className="text-[#D4A017] hover:text-white transition-colors">
                            «Reels для клиники»
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки врачей в контенте</h2>
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Что можно улучшить без покупки</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист готовности врача к съёмке</h2>
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Мини-словарь терминов</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {glossary.map((item) => (
                            <article key={item.term} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-[#D4A017]">{item.term}</h3>
                                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Мы снимаем видеовизитки врачей в Тбилиси, Батуми и других городах Грузии. Напишите нам — обсудим
                            формат, сроки и стоимость без обязательств. Первый звонок займёт 15 минут.
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
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Видеовизитка врача в Тбилиси — Breus Media. Пациент должен знать вас до первого приёма.
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

```
---
---

## /promo-video/promo-excursion
Lines: 1255
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-excursion';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Гидам с авторскими экскурсиями по Тбилиси, Кахетии и Батуми',
        text: 'Когда маршрут уникальный, его важно показать так, чтобы гость захотел записаться сразу после просмотра.',
    },
    {
        title: 'Организаторам adventure-активностей',
        text: 'Рафтинг, параглайдинг, джип-туры и трекинг лучше всего продаются через эмоцию и динамику в кадре.',
    },
    {
        title: 'Организаторам wine tour и гастро-экскурсий',
        text: 'Видео помогает передать атмосферу дегустации, людей и локаций, а не просто список остановок.',
    },
    {
        title: 'Escape-room, квест и experience-проектам',
        text: 'Короткий ролик показывает механику опыта и снимает барьер «я не понимаю, что меня ждёт».',
    },
    {
        title: 'Малым туристическим бизнесам с уникальными предложениями',
        text: 'Если ваш продукт нестандартный, промо-видео делает его понятным за 30-60 секунд.',
    },
    {
        title: 'Проектам на Viator, GetYourGuide и других маркетплейсах',
        text: 'Карточка с видео выделяется среди конкурентов и быстрее объясняет ценность активности.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Показывает активность в действии',
        text: 'Не «у нас есть рафтинг», а вот как это реально выглядит: старт, динамика, эмоции, финал.',
    },
    {
        title: 'Снимает страх «скучно / страшно / не для меня»',
        text: 'Визуал работает лучше описаний и сразу отвечает на главные сомнения клиента.',
    },
    {
        title: 'Усиливает карточку на маркетплейсах',
        text: 'Карточки с видео обычно конвертируют на 40-80% лучше, чем карточки только с фото.',
    },
    {
        title: 'Даёт готовый креатив для рекламы',
        text: 'Из одного ролика получаете материалы для Instagram, Facebook, TikTok и мессенджеров.',
    },
];

const painCards: Card[] = [
    {
        title: 'Карточка теряется среди конкурентов',
        text: 'На Viator и GetYourGuide сотни похожих предложений. Видео — самый быстрый способ выделиться.',
    },
    {
        title: 'Сложно объяснить нагрузку и эмоцию текстом',
        text: '«Умеренная сложность» для каждого разная. Видео показывает реальный темп и уровень активности.',
    },
    {
        title: 'Много просмотров, мало броней',
        text: 'Люди заинтересованы, но не решаются. Эмоции реальных участников в ролике закрывают это сомнение.',
    },
    {
        title: 'Реклама работает слабо без сильного креатива',
        text: 'Таргет без качественного видео в 2025-2026 годах теряет эффективность и бюджет.',
    },
    {
        title: 'Сезонный продукт трудно продать заранее',
        text: 'Летние и зимние активности нужно продавать заранее, и промо-ролик работает на это лучше текста.',
    },
    {
        title: 'Нет времени заниматься контентом',
        text: 'Вы работаете с туристами, мы берём съёмку и монтаж на себя и отдаём готовые файлы.',
    },
];

const earnPoints: string[] = [
    'Повышает конверсию карточки на маркетплейсе: меньше просмотров впустую и больше бронирований.',
    'Даёт готовый рекламный материал для таргета без отдельного производства креатива.',
    'Позволяет продавать активность заранее через соцсети, рассылки и мессенджеры.',
    'Обосновывает цену выше среднего через визуальное качество и прозрачность опыта.',
];

const avoidLossPoints: string[] = [
    'Снижает процент возвратов: гость заранее понимает формат активности и уровень сложности.',
    'Сокращает время переписки: на типовые вопросы отвечает само видео.',
    'Защищает от отзывов «не то, чего я ожидал», потому что ожидания формируются честно.',
    'Служит 2-3 года без обновления, если сама активность и маршрут остаются прежними.',
];

const deliverables: string[] = [
    'Основной промо-ролик 30-90 сек (горизонтальный 16:9).',
    'Вертикальная версия 9:16 для Instagram Reels, TikTok и Stories.',
    'Квадратная версия 1:1 для рекламных креативов (опционально).',
    'Субтитры RU и/или EN.',
    'Цветокоррекция, монтаж, музыкальное оформление.',
    'Финальная версия и рабочие исходники (опционально).',
    'Рекомендации по размещению: маркетплейс, сайт, реклама.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Маркетплейс',
        text: 'Организатор wine tour добавляет 60-секундный ролик в карточку GetYourGuide. Бронирований становится больше, потому что гости видят реальную дегустацию и реальных людей.',
    },
    {
        title: 'Сценарий 2 — Реклама в Instagram',
        text: 'Adventure-компания запускает ролик рафтинга в таргете. Видео с живыми эмоциями конвертирует заметно лучше статичного баннера.',
    },
    {
        title: 'Сценарий 3 — WhatsApp-продажа',
        text: 'Гид отправляет ролик тем, кто спрашивает про экскурсию. Сообщение «вот как это выглядит» переводит диалог в конкретные брони.',
    },
    {
        title: 'Сценарий 4 — B2B-партнёрство',
        text: 'Отель показывает ролик экскурсии своим гостям на ресепшн и в мессенджере. Партнёр охотнее продаёт вашу активность как доп.услугу.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Wine tour в Сигнахи',
        text: 'После добавления ролика в Highlights Instagram и на сайт клиенты чаще пишут сразу про запись, а не задают уточняющие вопросы.',
    },
    {
        title: 'Кейс 2 — Рафтинг на Арагви',
        text: 'Adventure-компания использует 30-секундный ролик в рекламе. Стоимость привлечения клиента снижается по сравнению с баннерами.',
    },
    {
        title: 'Кейс 3 — Экскурсия по старому Тбилиси',
        text: 'Авторский гид получил нишевую иностранную аудиторию: ролик разошёлся в expat-сообществах и привёл новые брони.',
    },
];

const socialProofBullets: string[] = [
    'Снимаем с пониманием туристической психологии: что именно подталкивает к бронированию.',
    'DJI Air 3S + Avata 2 (FPV): профессиональная аэро- и наземная съёмка под динамичные активности.',
    'Из одной съёмки делаем несколько форматов: маркетплейс, соцсети, реклама.',
    'Живём и работаем в Грузии, знаем ключевые локации и специфику маршрутов по сезонам.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем промо-ролик для экскурсии отличается от Reels?',
        answer:
            'Промо-ролик сфокусирован на одной конкретной активности и заканчивается чётким CTA: забронировать, написать, перейти по ссылке. Reels чаще работает на охват и узнаваемость. Оба формата полезны, но решают разные задачи.',
    },
    {
        question: 'Какой длины должен быть промо-ролик?',
        answer:
            'Обычно 30-60 секунд для маркетплейсов и рекламы. До 90 секунд — если активность многоэтапная и её нужно объяснить подробнее. Длиннее 2 минут обычно оставляют только для сайта.',
    },
    {
        question: 'Нужно ли организовывать отдельную группу для съёмки?',
        answer:
            'Лучший вариант — снимать во время реального тура: настоящие эмоции всегда сильнее постановки. Если ближайшей группы нет, можем обсудить альтернативный формат.',
    },
    {
        question: 'Можно ли использовать ролик в рекламе?',
        answer:
            'Да. Мы сразу готовим адаптации под рекламные размещения в Instagram, Facebook и TikTok.',
    },
    {
        question: 'Нужно ли согласие туристов на съёмку?',
        answer:
            'Да, согласие обязательно. Обычно это устная договорённость или короткая форма согласия — подскажем удобный вариант под вашу ситуацию.',
    },
    {
        question: 'Сколько времени занимает производство?',
        answer: '5-8 рабочих дней от съёмки до финального файла.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит промо-ролик для экскурсии?',
        answer: 'Базовый формат — от 500 ₾. С несколькими форматами и аэросъёмкой — от 900 ₾.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer:
            'Съёмка до 4 часов, монтаж ролика до 90 секунд, вертикальная версия, субтитры на одном языке, цветокоррекция и передача файлов.',
    },
    {
        question: 'Можно ли снять сразу несколько активностей?',
        answer: 'Да, это обычно выгоднее: можно закрыть несколько продуктов за один-два выезда.',
    },
    {
        question: 'Нужно ли отдельно оплачивать права на музыку?',
        answer: 'Нет. Используем лицензионные треки, включённые в стоимость.',
    },
    {
        question: 'Как передаются готовые файлы?',
        answer: 'Через Google Drive или WeTransfer. Все форматы передаются в одной структурированной папке.',
    },
    {
        question: 'Какая схема оплаты?',
        answer: '50% до съёмки и 50% после согласования финальной версии.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Туристический контент в Грузии — наша профильная специализация',
        text: 'Мы не снимаем «всё подряд»: основной опыт именно в туристическом и экскурсионном сегменте.',
    },
    {
        title: 'Полный цикл под ключ',
        text: 'Бриф, shot list, съёмка, монтаж и адаптация форматов под все нужные платформы.',
    },
    {
        title: 'Быстрые сроки производства',
        text: 'Стандартно отдаём финальные материалы через 5-8 рабочих дней после съёмки.',
    },
    {
        title: 'Одна съёмка — несколько форматов',
        text: 'Экономим ваше время и бюджет, сразу закрывая сайт, маркетплейс, рекламу и соцсети.',
    },
    {
        title: 'Фокус на конверсию, а не только на «красиво»',
        text: 'Строим ролик так, чтобы он подталкивал к действию: заявке, звонку, бронированию.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф',
        text: 'Обсуждаем активность, аудиторию, платформы и tone of voice будущего ролика.',
    },
    {
        title: 'Шаг 2. Shot list',
        text: 'Формируем список ключевых сцен: начало, действие, эмоция, финальный CTA.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Выезд на экскурсию или активность, обычно в течение 1 дня.',
    },
    {
        title: 'Шаг 4. Монтаж',
        text: 'Черновик, согласование правок, финальная версия с цветом, музыкой и субтитрами.',
    },
    {
        title: 'Шаг 5. Передача',
        text: 'Отдаём все форматы и короткие рекомендации по размещению на площадках.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 500 ₾',
        audience: 'Первый промо-ролик для сайта и WhatsApp без лишнего',
        timeline: '5-8 дней',
        items: [
            'Съёмка 1 день',
            'Промо-ролик до 60 сек (16:9)',
            'Вертикальная версия 9:16',
            'Субтитры RU',
            'Монтаж и цветокоррекция',
        ],
    },
    {
        title: 'Standard',
        price: 'от 900 ₾',
        audience: 'Маркетплейс + соцсети + работа с иностранной аудиторией',
        timeline: '5-8 дней',
        featured: true,
        items: [
            'Съёмка 1 день + аэросъёмка (DJI Air 3S)',
            'Промо-ролик до 90 сек',
            'Вертикальная и квадратная версии',
            'Субтитры RU/EN',
            'Монтаж, цвет, лицензионная музыка',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 500 ₾',
        audience: 'Несколько активностей и закрытие всех каналов продаж разом',
        timeline: '5-8 дней',
        items: [
            '2 выезда или несколько активностей',
            'FPV + аэро + наземная съёмка',
            '3 отдельных промо-ролика под разные соотношения сторон',
            'Субтитры RU/EN',
            'Адаптация под маркетплейс и рекламный кабинет',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Ошибка 1 — Одно фото на маркетплейсе',
        text: 'Карточки с видео обычно получают в 2-3 раза больше кликов. Фото не заменяет видео.',
    },
    {
        title: 'Ошибка 2 — Постановка без реальных людей',
        text: 'Пустые красивые кадры не продают активность. Нужны реальные участники и реальные эмоции.',
    },
    {
        title: 'Ошибка 3 — Слишком длинный ролик',
        text: '3-5 минут для экскурсии — слишком много. Для рекламы и маркетплейса лучше 30-60 секунд.',
    },
    {
        title: 'Ошибка 4 — Нет CTA в конце',
        text: 'Если непонятно, что делать дальше, часть трафика просто теряется после просмотра.',
    },
    {
        title: 'Ошибка 5 — Только один формат видео',
        text: 'Маркетплейсу нужен горизонталь, Instagram и TikTok — вертикаль. Из одной съёмки стоит делать оба.',
    },
    {
        title: 'Ошибка 6 — Съёмка в плохую погоду «пока есть время»',
        text: 'Свет формирует восприятие. Лучше дождаться хороших условий, чем выпускать слабый ролик.',
    },
];

const improveWithoutPurchase: string[] = [
    'Попросите следующую группу туристов разрешить съёмку и запишите хотя бы 3-4 ключевые сцены на телефон.',
    'Обновите обложку карточки на маркетплейсе: выберите самое эмоциональное фото.',
    'Добавьте в описание чёткий тайминг маршрута: старт, активность, финал.',
    'Вставьте в WhatsApp-шаблон ответа фото или GIF вашей активности.',
    'Соберите 2-3 коротких видеоотзыва от довольных туристов.',
];

const checklistItems: string[] = [
    'Определён ключевой момент активности, который надо снять в первую очередь.',
    'Есть реальная группа туристов или подготовлен соло-формат с гидом.',
    'Получено устное согласие участников на видеосъёмку.',
    'Выбран день с подходящей погодой и светом.',
    'Составлен список сцен: начало, кульминация, эмоция, финал.',
    'Определены каналы размещения: маркетплейс, соцсети, реклама, сайт.',
    'Согласованы форматы: горизонт, вертикаль, квадрат.',
    'Подобран референс ролика, который вам нравится по стилю.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видео важнее фото для продажи экскурсии?',
        answer: [
            'Фото фиксирует один момент, а видео передаёт движение, темп и эмоцию всей активности. Для рафтинга, параглайдинга, дегустации или трекинга это критично: человек должен почувствовать опыт до покупки.',
            'Потенциальный гость сравнивает десятки похожих карточек. Видео быстро объясняет, что именно он получит, и снижает страх неопределённости.',
            'Для активностей с физическим и эмоциональным компонентом карточки с видео обычно конвертируют заметно лучше, чем карточки только с фото.',
        ],
    },
    {
        question: 'Как промо-ролик работает в таргетированной рекламе?',
        answer: [
            'Видеоролик передаёт больше информации за меньшее время и удерживает внимание дольше статичного креатива.',
            'Эмоциональная реакция на динамику, лица и звук повышает вероятность клика и заявки, особенно в Instagram и TikTok.',
            'Один промо-ролик можно разрезать на несколько рекламных версий, чтобы тестировать разные аудитории без дополнительной съёмки.',
        ],
    },
    {
        question: 'Как часто нужно обновлять промо-ролик?',
        answer: [
            'Обычно хороший ролик служит 2-3 года, если сама активность, маршрут и позиционирование не меняются.',
            'Обновление нужно, когда меняются ключевые локации, добавляются новые этапы программы или меняется целевая аудитория.',
            'Также стоит обновить ролик, если текущая версия визуально устарела относительно конкурентной среды.',
        ],
    },
    {
        question: 'Чем отличается промо для adventure-активности и культурной экскурсии?',
        answer: [
            'Adventure-ролик строится на темпе, адреналине, скорости и реакциях участников: монтаж быстрее, музыка энергичнее.',
            'Культурная экскурсия опирается на атмосферу, детали, историю и спокойный ритм восприятия.',
            'Обе версии решают одну задачу: зритель должен чётко понять формат и захотеть забронировать.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое промо-ролик для экскурсии?',
        answer:
            'Короткое видео 30-90 секунд, которое показывает конкретную экскурсию или активность в действии для маркетплейса, сайта, соцсетей и рекламы.',
    },
    {
        question: 'Сколько стоит промо-ролик для экскурсии в Тбилиси?',
        answer: 'От 500 ₾ за базовый формат. Полный пакет с аэросъёмкой и несколькими версиями — от 1 500 ₾.',
    },
    {
        question: 'Чем ролик помогает на маркетплейсах вроде Viator?',
        answer: 'Карточки с видео обычно получают больше кликов и бронирований, чем карточки только с фото.',
    },
    {
        question: 'Какой формат лучше для рекламы экскурсии?',
        answer: 'Вертикальный 9:16 для Instagram и TikTok, плюс горизонтальный 16:9 для сайта и YouTube.',
    },
    {
        question: 'Нужно ли собирать отдельную группу для съёмки?',
        answer: 'Нет, лучше снимать во время реального тура: так ролик выглядит честно и убедительно.',
    },
    {
        question: 'Где можно использовать готовый ролик?',
        answer: 'На сайте, в карточке маркетплейса, в WhatsApp, в рекламных кампаниях, Instagram и TikTok.',
    },
    {
        question: 'Кому принадлежат права на видео?',
        answer: 'Права на использование передаются заказчику без ограничений.',
    },
    {
        question: 'Как быстро готов финальный файл?',
        answer: 'Обычно через 5-8 рабочих дней после съёмки.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Достаточно красиво снять, и продажи придут сами.',
        reality:
            'Красота без структуры не продаёт. Нужны логичный сценарий, ключевая эмоция и чёткий призыв к бронированию.',
    },
    {
        myth: 'Промо нужно только для дорогих туров.',
        reality:
            'Даже недорогая экскурсия продаётся лучше, когда человек видит понятный формат и реальные эмоции участников.',
    },
    {
        myth: 'Туристы читают только отзывы, видео не важно.',
        reality: 'Отзывы подтверждают выбор, а видео создаёт желание и помогает принять решение быстрее.',
    },
    {
        myth: 'Смартфона достаточно для всего.',
        reality:
            'Смартфон годится для Stories, но для маркетплейса и платной рекламы обычно нужен более стабильный продакшн-уровень.',
    },
    {
        myth: 'Нужно переснимать ролик каждый сезон.',
        reality:
            'Если ролик сделан без жёсткой привязки к датам, он спокойно работает несколько лет.',
    },
];

const glossary: Card[] = [
    {
        title: 'Промо-ролик',
        text: 'Короткое рекламное видео, цель которого — подтолкнуть к конкретному действию: бронь, звонок, заявка.',
    },
    {
        title: 'CTA (Call to Action)',
        text: 'Призыв к действию в конце видео: «Забронируйте», «Напишите нам», «Узнайте подробности».',
    },
    {
        title: 'Маркетплейс',
        text: 'Платформа для продажи экскурсий: Viator, GetYourGuide, TripAdvisor Experiences.',
    },
    {
        title: 'Shot list',
        text: 'Список конкретных сцен, которые нужно снять. Готовится до съёмочного дня.',
    },
    {
        title: 'Таргетинг',
        text: 'Показ рекламного ролика выбранной аудитории по интересам, географии и другим параметрам.',
    },
];

const notFitPoints: string[] = [
    'Экскурсиям со стоимостью до 20 ₾: ROI от продакшна обычно не окупается.',
    'Разовым активностям, которые не планируется повторять.',
    'Тем, у кого нет реальных туристов или доступной локации для съёмки.',
    'Клиентам, не готовым участвовать в согласовании shot list и финального результата.',
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
            name: 'Промо-ролик для экскурсии',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Промо-ролик для экскурсии — пример формата',
    description:
        'Короткий промо-ролик 30-90 секунд для экскурсии: подготовка, действие, эмоция и финальный призыв к бронированию.',
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
    name: 'Промо-ролик для экскурсии в Грузии',
    description:
        'Съёмка промо-роликов для экскурсий и активностей в Грузии: 30-90 секунд, версии для маркетплейсов, соцсетей и рекламы.',
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
        name: 'Грузия',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '500',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Промо-ролики, Reels, дрон-съёмка и туристический видеоконтент в Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Промо-ролик для экскурсии Грузия | Видео под бронирование — Breus Media',
    description:
        'Создаём промо-ролики для экскурсий и активностей в Грузии. Рафтинг, wine tour, гиды Тбилиси. От 500 ₾. Быстро, конверсионно, под маркетплейсы.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Промо-ролик для экскурсии — видео под бронирование и рекламу',
        description:
            'Промо-видео 30-90 секунд для экскурсий и активностей: маркетплейсы, соцсети, таргет. Тбилиси и вся Грузия.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoExcursionPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Excursion · Грузия
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Промо-ролик для экскурсии — видео под бронирование и рекламу
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        30-60 секунд, которые объясняют вашу активность лучше, чем страница текста.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        У вас есть рафтинг, дегустация, конный тур или adventure-маршрут, и вы знаете, что это стоит
                        того. Но потенциальный клиент видит лишь пару фото и описание, которое не отличается от десятков
                        конкурентов. Промо-ролик для экскурсии показывает путь от подготовки до финала и делает продукт
                        понятным с первого просмотра. Это видео для страницы бронирования, мессенджеров и таргетированной
                        рекламы. Breus Media делает такие ролики для активностей в Грузии — от wine tour до джип-приключений.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать промо-ролик для экскурсии
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть тарифы
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что такое промо-ролик для экскурсии?</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Это короткое видео (30-90 секунд), сфокусированное на одной конкретной активности. Не общий
                        «красивый Тбилиси», а именно ваш продукт: как начинается маршрут, что происходит в процессе,
                        какие эмоции получают люди и чем всё заканчивается. В финале — чёткий CTA: ссылка, кнопка
                        бронирования или контакт для записи.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Кому нужен промо-ролик для экскурсии?</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Задачи промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Боли организаторов экскурсий и активностей</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как промо-ролик помогает зарабатывать?</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как помогает избежать потерь?</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в промо-ролик для экскурсии?</h2>
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
                        <h3 className="text-xl font-bold mb-4">Форматы и сроки</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Форматы файлов</p>
                                <p>MP4 1080p, три соотношения сторон (16:9, 9:16, 1:1 — при необходимости).</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Готовые файлы через облако в течение 5-8 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Права</p>
                                <p>Полные права на использование передаются заказчику без ограничений.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Ваша активность заслуживает ролика, который заставляет сказать «хочу это». Расскажите о ней — обсудим формат и структуру."
                buttonLabel="Заказать промо-ролик для экскурсии"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Сценарии использования промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Экскурсионный рынок Грузии</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Грузия предлагает уникальный набор активностей: рафтинг на Арагви, параглайдинг над Тбилиси,
                        конные прогулки в Казбеги, wine tour в Телави и трекинг в Сванетии. Каждая из этих активностей
                        требует своей визуальной подачи. Мы снимали в ключевых туристических регионах страны и понимаем,
                        как передать адреналин, спокойствие дегустации и масштаб горных маршрутов в одном коротком ролике.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Почему нам доверяют</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример промо-ролика</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён embed примера. На финальной версии можно подставить актуальный ролик из вашего
                        портфолио по экскурсиям.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример промо-ролика для экскурсии"
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
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media?</h2>
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

            <ProcessNote text="Начинаем с обсуждения активности и опасений клиентов, затем собираем shot list, снимаем за 1 день, монтируем, согласуем и передаём финал без лишних встреч и затянутых согласований." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">5 шагов</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Тарифы на промо-ролик для экскурсии</h2>
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

                    <h3 className="text-2xl font-bold mt-12 mb-5">Сравнение пакетов</h3>

                    <div className="overflow-x-auto rounded-[12px] border border-[#2a2a2a]">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмочные выезды</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик (16:9)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 60 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 90 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия (9:16)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Квадратная версия (1:1)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">DJI Air 3S</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">DJI Air 3S + FPV</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Число активностей</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена от</td>
                                    <td className="p-3">500 ₾</td>
                                    <td className="p-3">900 ₾</td>
                                    <td className="p-3">1 500 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Какой пакет выбрать?</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Basic — если нужен первый промо-ролик для сайта и WhatsApp без лишнего.</li>
                            <li>Standard — если важны маркетплейс, соцсети и иностранные туристы.</li>
                            <li>Full — если нужно сразу закрыть маркетплейс, рекламу и соцсети.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <MidCta
                text="Покажите нам вашу активность — мы покажем её клиентам так, чтобы они захотели записаться прямо сейчас."
                buttonLabel="Заказать промо для экскурсии"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Смежные услуги</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для туристического проекта
                                </Link>{' '}
                                — серия роликов под соцсети.
                            </li>
                            <li>
                                <Link
                                    href="/promo-video/promo-tourism-route"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    Видеогид по маршруту
                                </Link>{' '}
                                — длинный формат для маршрутного тура.
                            </li>
                            <li>
                                <Link
                                    href="/ai-content/tourism-ai-packaging"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    AI-упаковка туристических предложений
                                </Link>{' '}
                                — тексты и описание под маркетплейсы.
                            </li>
                            <li>
                                <Link href="/drone-hotels-tourism" className="text-[#D4A017] hover:text-white transition-colors">
                                    Аэросъёмка для туристического бизнеса
                                </Link>{' '}
                                — виды локаций с воздуха.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Если вам нужен стабильный поток вертикального контента, посмотрите услугу{' '}
                            <Link href="/reels-service" className="text-[#D4A017] hover:text-white transition-colors">
                                Reels для бизнеса
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Для презентации локаций сверху и усиления wow-эффекта можно добавить{' '}
                            <Link href="/drone-hotels-tourism" className="text-[#D4A017] hover:text-white transition-colors">
                                аэро- и FPV-съёмку
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Нужен комбинированный пакет под маркетплейс и рекламу? Напишите в{' '}
                            <a href={WHATSAPP_HREF} className="text-[#D4A017] hover:text-white transition-colors">
                                WhatsApp
                            </a>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">6 ошибок при продвижении экскурсий</h2>
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
                    <h2 className="text-3xl font-bold mb-8">5 шагов без вложений</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист перед съёмкой промо-ролика</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Короткие ответы для поиска</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Мифы о промо-роликах для экскурсий</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Словарь</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Тбилиси, Грузия. Снимаем по всей стране. Напишите в WhatsApp или позвоните: {CONTACT_PHONE}.
                            На сайте подробнее: <a href="https://breus.media" className="text-[#D4A017] hover:text-white">breus.media</a>.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — промо-ролики для экскурсий и активностей в Грузии. Тбилиси. +995 574 619 393
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

```
---
---

## /promo-video/promo-hotel
Lines: 1331
```tsx
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
    subtitle: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-hotel';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Бутик-отелям и дизайн-отелям в Тбилиси',
        text: 'Сильный интерьер и атмосфера не работают на продажи, если на сайте и OTA нет качественного видео.',
    },
    {
        title: 'Апарт-отелям с карточкой только из фото',
        text: 'Когда на Booking нет видео, гость не понимает пространство и выбирает более понятного конкурента.',
    },
    {
        title: 'Гестхаусам и небольшим гостиницам',
        text: 'Профессиональный видеотур помогает выглядеть на одном уровне с сетевыми отелями.',
    },
    {
        title: 'Отелям после ремонта или открытия',
        text: 'Новый интерьер и сервис нужно показать рынку быстро, пока идёт пик интереса.',
    },
    {
        title: 'Управляющим компаниям нескольких объектов',
        text: 'Единый стандарт видеоподачи упрощает маркетинг и усиливает бренд всей сети.',
    },
    {
        title: 'Отелям с уникальным видом и архитектурой',
        text: 'Горы, Кура, Старый город и нестандартные пространства лучше раскрываются в движении, а не в статике.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Закрывает провал доверия до бронирования',
        text: 'Гость видит реальный масштаб номера, вид из окна и атмосферу. Это снижает неопределённость и число отказов.',
    },
    {
        title: 'Создаёт один флагманский медиаактив',
        text: 'Одно видео работает на сайте, в OTA, в рекламе, в email до заезда и в презентациях для корпоративных клиентов.',
    },
    {
        title: 'Выделяет среди конкурентов в Тбилиси',
        text: 'Пока большинство отелей работают только с фото, видеотур сразу выводит объект в более высокий класс восприятия.',
    },
    {
        title: 'Снижает нагрузку на ресепшн',
        text: 'Ролик заранее отвечает на типовые вопросы гостей о номерах, завтраке, локации и сервисе.',
    },
];

const painCards: Card[] = [
    {
        title: '«У нас красивый отель, но на Booking это не видно»',
        text: 'Фото не передают масштаб, свет и атмосферу. Видеотур делает отель осязаемым ещё до приезда.',
    },
    {
        title: '«Гости приезжают и говорят: мы не ожидали, что будет так хорошо»',
        text: 'Это сигнал разрыва между ожиданием и реальностью. Контент не продаёт реальное качество объекта.',
    },
    {
        title: '«Мы вложили деньги в ремонт, но бронирований больше не стало»',
        text: 'Если сайт и OTA показывают старую картинку, инвестиции в обновление не превращаются в загрузку.',
    },
    {
        title: '«Иностранные гости не понимают, что у нас есть»',
        text: 'Без видео и мультиязычного оформления международный гость не готов бронировать вслепую.',
    },
    {
        title: '«Ресепшн постоянно отвечает на одни и те же вопросы»',
        text: 'Видеотур автоматизирует коммуникацию и закрывает до 80% повторяющихся уточнений до звонка.',
    },
    {
        title: '«Мы не знаем, что и как снимать»',
        text: 'Мы берём на себя сценарий, съёмку, монтаж и форматы. Команде отеля нужно только открыть двери и подготовить зоны.',
    },
];

const earnPoints: string[] = [
    'Больше бронирований с той же аудитории: после видео гость легче принимает решение и реже откладывает выбор.',
    'Рост прямых бронирований через сайт: встроенный ролик снижает мотивацию уходить на OTA и платить комиссию.',
    'Продажа номеров выше категорией: визуальная разница между стандартом и люксом чаще приводит к апгрейду.',
    'Более быстрые сделки с корпоративными клиентами: сильный ролик упрощает согласование размещения и мероприятий.',
];

const avoidLossPoints: string[] = [
    'Снижение отмен и жалоб: гость заранее понимает, что его ждёт, и не сталкивается с неприятными сюрпризами.',
    'Защита от ценовой конкуренции: эмоционально вовлечённого гостя сложнее перехватить только более низкой ценой.',
    'Стабильность при смене персонала: видеоактив продолжает работать независимо от текучки в команде.',
    'Экономия на постоянных съёмках: один качественный ролик обычно работает 2-3 года.',
];

const deliverables: string[] = [
    'Основной cinematic-ролик 60-120 секунд (16:9) для сайта, YouTube и OTA-медиасекции.',
    '2-4 мини-клипа по типам номеров (стандарт, семейный, люкс/suite) для сравнения на сайте и OTA.',
    'Вертикальная версия 9:16 для Instagram Stories, TikTok и YouTube Shorts.',
    'Скриншот-пак 8-12 кадров для OTA-галереи и hero-блоков сайта.',
    'Субтитры на выбранных языках (RU / EN / GE): оверлей и отдельные SRT-файлы.',
    'Инструкция по размещению на Booking, сайте, YouTube и в email-рассылках.',
    'Мастер-файл высокого качества (MP4 H.264/H.265) для архива и будущего перемонтажа.',
];

const useCases: Card[] = [
    {
        title: 'Бутик-отель в Старом городе после ремонта',
        text: 'Съёмка с акцентом на архитектуру, детали и вид на Метехи. Ролик сразу объясняет, почему здесь стоит остановиться.',
    },
    {
        title: 'Апарт-отель усиливает прямые бронирования',
        text: 'Видеотур встраивается на главную и в письма подтверждения. Гость видит пространство заранее, тревога снижается.',
    },
    {
        title: 'Отель с несколькими категориями номеров',
        text: 'Мини-клипы по каждому типу помогают наглядно продавать апгрейд через сайт и диалог с гостем.',
    },
    {
        title: 'Сетевой объект перед высоким сезоном',
        text: 'Обновление контента под лето или праздники поддерживает актуальность и повышает отдачу пикового трафика.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Бутик-отель, Старый Тбилиси, 18 номеров',
        text: 'После ремонта сняли основной ролик и 3 мини-клипа. Владелец отмечает рост прямых обращений через форму сайта.',
    },
    {
        title: 'Апарт-отель, Сабуртало, 30 юнитов',
        text: 'Субтитры EN/RU и акцент на лобби, кухню и вид помогли снизить число уточняющих звонков от иностранных гостей.',
    },
    {
        title: 'Горный курорт, Гудаури',
        text: 'Зимний видеотур с номерами, рестораном и террасой используется в декабрьско-январской рекламе для туристов.',
    },
];

const socialProofBullets: string[] = [
    'Отели с видео в OTA-медиасекции обычно получают больше времени просмотра страницы и глубже вовлекают гостя в сравнение.',
    'Гости из Russia/CIS и Европы всё чаще называют просмотр видео причиной выбора конкретного объекта.',
    'Один качественный видеоактив работает в среднем 2-3 года и распределяет стоимость производства на сотни бронирований.',
    'Breus Media работает в Тбилиси и снимает по всей Грузии с учётом сезонности и ожиданий разных рынков гостей.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое видеотур по отелю и зачем он нужен?',
        answer:
            'Видеотур — это cinematic-ролик, который показывает отель глазами гостя: вход, лобби, номера, ванную, вид и завтрак. Он снижает неопределённость перед бронированием и повышает доверие к объекту.',
    },
    {
        question: 'Чем видеотур отличается от обычной съёмки?',
        answer:
            'Обычная съёмка — это набор кадров. Видеотур строится как история с движением, ритмом и монтажом, создавая эффект присутствия.',
    },
    {
        question: 'Нужно ли специально готовить отель к съёмке?',
        answer:
            'Да, но это просто. Перед съёмкой мы даём понятный чеклист по подготовке номеров, лобби и зон сервиса, чтобы результат выглядел профессионально.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Обычно один рабочий день (6-8 часов) для объекта до 30-40 номеров. Крупные отели снимаем за 1,5-2 дня.',
    },
    {
        question: 'Где можно использовать готовый ролик?',
        answer:
            'На сайте (embed), в медиасекции Booking.com, на YouTube, в Instagram/TikTok (вертикальная версия), в мессенджерах и email-рассылках.',
    },
    {
        question: 'Можно ли сделать ролик на нескольких языках?',
        answer:
            'Да. Добавляем субтитры на RU, EN, GE по вашему запросу. Обычно это стандарт для отелей с международной аудиторией.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеотур по отелю в Тбилиси?',
        answer:
            'Basic — от 600 ₾, Standard — от 950 ₾, Full — от 1 400 ₾. Финальная стоимость зависит от размера объекта и задач после короткого брифинга.',
    },
    {
        question: 'Нужно ли платить сразу?',
        answer: 'Предоплата 50% перед съёмкой, остаток — после утверждения финальной версии ролика.',
    },
    {
        question: 'Сколько времени от заявки до готового видео?',
        answer: 'Обычно 10-14 дней: 1-3 дня подготовка, 1 день съёмка, 5-7 рабочих дней монтаж и правки.',
    },
    {
        question: 'Сколько правок входит в стоимость?',
        answer: 'Включены 2 раунда корректировок. Третий и существенные изменения — по согласованию.',
    },
    {
        question: 'Можно ли использовать ролик в платной рекламе?',
        answer: 'Да. Права на финальный ролик переходят клиенту, можно использовать в Meta Ads, Google Ads и других каналах.',
    },
    {
        question: 'Что если через год захотим обновить видео?',
        answer:
            'Доступна частичная пересъёмка отдельных зон (например, новые номера или летняя терраса) с интеграцией в существующий монтаж.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Локальная экспертиза по отельному рынку Грузии',
        text: 'Понимаем сезонность, географию спроса и ожидания гостей из России, Европы и СНГ.',
    },
    {
        title: 'Съёмка под задачу бронирования, а не просто красиво',
        text: 'Каждый кадр отвечает на практический вопрос гостя перед покупкой номера.',
    },
    {
        title: 'Собственный продакшн-комплект',
        text: 'DJI Air 3S для аэрообзора, Insta360 X5 для интерьеров и профессиональный стабилизатор для проходов по отелю.',
    },
    {
        title: 'Мультиязычная подача для международной аудитории',
        text: 'Делаем субтитры RU/EN/GE и адаптируем оформление под разные сегменты гостей.',
    },
    {
        title: 'Один подрядчик для всего контента',
        text: 'При необходимости дополнительно закрываем Reels, 360° тур и AI-описания для OTA без отдельной координации студий.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и подготовка (1-2 дня)',
        text: 'Собираем данные об объекте, типах номеров и целевой аудитории. Предлагаем сценарий и чеклист подготовки.',
    },
    {
        title: 'Шаг 2. Съёмочный день',
        text: 'Приезжаем с оборудованием, снимаем по сценарию и работаем аккуратно, чтобы не мешать гостям. Обычно 6-8 часов.',
    },
    {
        title: 'Шаг 3. Монтаж и первая версия (3-5 дней)',
        text: 'Цветокоррекция, звук, монтаж, субтитры и передача черновой версии на согласование.',
    },
    {
        title: 'Шаг 4. Правки',
        text: 'Вносим корректировки по комментариям. Два раунда правок уже включены в стоимость.',
    },
    {
        title: 'Шаг 5. Финальная передача',
        text: 'Отдаём все форматы (16:9, 9:16, скриншоты, SRT) через облако и прикладываем инструкцию по размещению.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 600 ₾',
        subtitle: 'Для небольшого объекта: базовый видеоактив для сайта и Booking',
        timeline: '5-7 рабочих дней после съёмки',
        items: [
            'Основной ролик 60-90 секунд (16:9).',
            'Вертикальная версия 9:16 для Stories/Reels.',
            '5 скриншотов для OTA.',
            'Передача финала в MP4.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 950 ₾',
        subtitle: 'Для бутик-отелей с несколькими категориями номеров',
        timeline: '5-7 рабочих дней после съёмки',
        featured: true,
        items: [
            'Всё из Basic.',
            '2-3 мини-клипа по типам номеров.',
            'Субтитры на 2 языках (RU + EN или EN + GE).',
            '10 скриншотов.',
            'Инструкция по размещению на Booking и сайте.',
        ],
    },
    {
        title: 'Full',
        price: 'от 1 400 ₾',
        subtitle: 'Для полного медиапакета под рекламу, соцсети и OTA',
        timeline: '5-7 рабочих дней после съёмки',
        items: [
            'Всё из Standard.',
            'Аэросъёмка локации, фасада и окружения.',
            'Субтитры на 3 языках (RU + EN + GE).',
            '15+ скриншотов для hero/OTA/соцсетей.',
            'Версия для YouTube с обложкой.',
            'Расширенный монтаж с музыкальным оформлением под бренд.',
        ],
    },
];

const packageHelper: string[] = [
    'Если у вас небольшой объект и нужен один сильный ролик для сайта и Booking -> Basic.',
    'Если несколько категорий номеров и международная аудитория -> Standard.',
    'Если нужен полный медиапакет для рекламы, соцсетей и OTA -> Full.',
];

const relatedServices = [
    {
        href: '/reels-promo/reels-hotel',
        label: 'Reels для отеля',
        description: 'Короткие вертикальные видео для Instagram и TikTok, которые привлекают новых гостей из соцсетей.',
    },
    {
        href: '/360-tour/360-tour-hotels',
        label: '360° тур по отелю',
        description: 'Интерактивный виртуальный тур, который можно встроить на сайт и OTA.',
    },
    {
        href: '/reels-promo/hotel-seasonal-content',
        label: 'Сезонный контент-пакет',
        description: 'Съёмка под сезон и события: Новый год, лето, Тбилисоба и другие кампании.',
    },
    {
        href: '/ai-content/hotel-ai-descriptions',
        label: 'AI-описания для Booking',
        description: 'Тексты о номерах и услугах на RU/EN/GE, оптимизированные под OTA-алгоритмы.',
    },
];

const internalTransitions = [
    {
        href: '/360-tour/360-tour-hotels',
        intro: 'Хотите показать гостям весь отель интерактивно? Посмотрите услугу',
        label: '360° тур по отелю',
    },
    {
        href: '/reels-promo/reels-hotel',
        intro: 'Нужен не только видеотур, но и регулярный контент в Instagram? Узнайте о',
        label: 'Reels-пакете для отеля',
    },
    {
        href: '/ai-content/hotel-ai-descriptions',
        intro: 'Описания на Booking устарели или только на одном языке? Подойдёт услуга',
        label: 'AI-описаний для OTA',
    },
];

const additionalMaterials = [
    {
        href: '/blog/hotel-video-checklist',
        label: 'Как подготовить отель к профессиональной видеосъёмке: чеклист за 1 день',
        description: 'Практический гайд по подготовке команды и зон перед съёмкой.',
    },
    {
        href: '/portfolio/hotel-walkthrough-tbilisi',
        label: 'Видеотур бутик-отеля в Старом Тбилиси',
        description: 'Пример структуры и визуальной подачи для OTA и сайта.',
    },
    {
        href: '/guide/booking-video-upload',
        label: 'Как загрузить видео на Booking.com: пошаговая инструкция',
        description: 'Проверочный чеклист и порядок действий для партнёров.',
    },
    {
        href: '/blog/hotel-video-vs-360',
        label: 'Видеотур vs 360° тур: что выбрать для отеля',
        description: 'Сравнение форматов по задаче, бюджету и сценарию использования.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимают на смартфон и выкладывают без монтажа',
        text: 'Любительская подача снижает доверие к объекту вместо его роста и проигрывает в сравнении с конкурентами.',
    },
    {
        title: 'Делают видео один раз и забывают',
        text: 'Интерьер и сервис меняются, а ролик устаревает. Несоответствие контента и реальности бьёт по доверию.',
    },
    {
        title: 'Снимают для красоты, а не для бронирования',
        text: 'Без ответов на практические вопросы гостя ролик может быть красивым, но не продающим.',
    },
    {
        title: 'Не делают вертикальную версию',
        text: 'В Stories и TikTok горизонтальный ролик выглядит обрезанным и теряет качество восприятия.',
    },
    {
        title: 'Не добавляют видео на OTA',
        text: 'Снятый ролик не работает, пока не встроен в Booking и сайт. Многие отели теряют эффект именно на этом шаге.',
    },
    {
        title: 'Снимают в неправильное время',
        text: 'Плохой свет, неподготовленные зоны и визуальный шум напрямую ухудшают итоговый материал.',
    },
];

const improveWithoutPurchase: string[] = [
    'Пересмотрите текущую галерею на Booking: если фото тёмные или устаревшие, запросите бесплатный апгрейд в поддержке Booking.',
    'Снимите короткий рум-тур на смартфон и добавьте в Instagram Stories: это уже лучше, чем отсутствие видео.',
    'Попросите довольных гостей дать видео-отзыв и согласие на публикацию: UGC усиливает социальное доказательство.',
    'Добавьте YouTube-ролик в описание на Booking, чтобы увеличить время пребывания пользователя на карточке объекта.',
    'Обновите главное фото на Booking: первый кадр в галерее напрямую влияет на кликабельность.',
];

const checklistItems: string[] = [
    'Номера убраны, кровати заправлены, полотенца уложены аккуратно.',
    'Из кадра убраны личные вещи персонала и технические предметы.',
    'Включён свет там, где он усиливает атмосферу.',
    'Шторы настроены под вид: открыты для сильного фона, закрыты для слабого.',
    'Лобби и общие зоны очищены и визуально оформлены.',
    'Завтрак сервирован эстетично на реальном столе (если снимается).',
    'Персонал предупреждён о съёмке, ключевые сотрудники доступны для координации.',
    'Определены 2-3 точки гордости отеля, которые обязательно должны попасть в ролик.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему видео важнее фотографий для бронирования отеля?',
        answer: [
            'Фотографии показывают момент, а видео показывает место. Гость видит движение по пространству, масштаб и логику объекта.',
            'Психологически решение о покупке легче, когда продукт уже увиден в динамике. Для отеля это уменьшает страх неизвестности.',
            'Поэтому видеотур напрямую помогает конверсии: после просмотра ролика гость чаще переходит к бронированию.',
        ],
    },
    {
        question: 'Как видеотур помогает сократить отмены и претензии?',
        answer: [
            'Большая часть претензий связана с разрывом ожидания и реальности: размер номера, вид, формат завтрака, детали удобств.',
            'Когда ролик честно показывает реальные условия, гость бронирует осознанно и реже сталкивается с неприятным сюрпризом.',
            'Это влияет не только на операционную нагрузку, но и на рейтинг объекта и долю повторных визитов.',
        ],
    },
    {
        question: 'Можно ли снимать работающий отель, не мешая гостям?',
        answer: [
            'Да. Мы обычно начинаем съёмку утром, когда поток гостей ниже, и снимаем номера после уборки по согласованной очереди.',
            'Общие зоны фиксируем в спокойные интервалы, согласуя ритм с менеджером объекта заранее.',
            'Работаем компактной командой и аккуратной логистикой, чтобы не нарушать сервисные процессы.',
        ],
    },
    {
        question: 'Что такое аэрокадр для отеля и когда он нужен?',
        answer: [
            'Аэрокадр добавляет контекст локации: близость к центру, реке, горам, морю или ключевым точкам района.',
            'Особенно полезен для курортных объектов и отелей с сильным расположением или видовым преимуществом.',
            'Короткие 10-20 секунд в начале или финале ролика усиливают масштаб и запоминаемость подачи.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое видеотур по отелю?',
        answer: 'Cinematic-ролик 60-120 секунд, который показывает номера, лобби, вид и атмосферу для сайта, Booking и соцсетей.',
    },
    {
        question: 'Сколько стоит снять видеотур по отелю в Тбилиси?',
        answer: 'От 600 ₾ за Basic, от 950 ₾ за Standard, от 1 400 ₾ за Full с аэросъёмкой.',
    },
    {
        question: 'Как видеотур влияет на бронирования?',
        answer: 'Он снижает тревогу перед покупкой, повышает доверие и увеличивает вероятность бронирования.',
    },
    {
        question: 'Можно ли загрузить видеотур на Booking.com?',
        answer: 'Да. Booking поддерживает видео в медиасекции объекта, мы даём инструкцию и нужные форматы.',
    },
    {
        question: 'Сколько занимает съёмка видеотура?',
        answer: 'Один рабочий день (6-8 часов) для объектов до 40 номеров. Монтаж обычно 5-7 рабочих дней.',
    },
    {
        question: 'На каких языках делать субтитры?',
        answer: 'Для большинства отелей Тбилиси рекомендуем RU + EN, язык GE добавляется по запросу.',
    },
    {
        question: 'Нужна ли аэросъёмка для отельного видеотура?',
        answer: 'Не обязательна, но очень полезна для видовых и курортных объектов. Входит в пакет Full.',
    },
    {
        question: 'Кто делает видеотуры по отелям в Тбилиси?',
        answer: 'Breus Media, Тбилиси. Снимаем видеотуры и Reels для отелей по всей Грузии. +995 574 619 393.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Видеотур нужен только большим отелям.',
        reality:
            'Маленький бутик-отель с уникальным интерьером часто выигрывает от видео даже больше, потому что атмосферу сложно передать фото.',
    },
    {
        myth: 'Мы снимем на смартфон и сэкономим.',
        reality:
            'Смартфонное видео обычно выдаёт слабый свет, дрожание и монтаж. Это понижает восприятие качества объекта.',
    },
    {
        myth: 'Booking не поддерживает видео.',
        reality: 'Booking.com поддерживает видео в медиасекции для партнёров, важно только подготовить корректные файлы.',
    },
    {
        myth: 'Гости смотрят только на цену.',
        reality:
            'Цена фильтрует выбор, но в одном диапазоне решают доверие и впечатление. Здесь видео стабильно сильнее статичных фото.',
    },
    {
        myth: 'Это слишком дорого для нашего масштаба.',
        reality:
            'Стоимость от 600 ₾ распределяется на сотни бронирований за 2-3 года и часто становится одним из самых рентабельных активов.',
    },
];

const glossary: Card[] = [
    {
        title: 'Cinematic',
        text: 'Стиль съёмки с кинематографичным движением, работой со светом и монтажом для эффекта качества и присутствия.',
    },
    {
        title: 'OTA (Online Travel Agency)',
        text: 'Платформы бронирования вроде Booking.com, Expedia, Hotels.com, Airbnb, которые берут комиссию с бронирований.',
    },
    {
        title: 'Прямое бронирование',
        text: 'Бронирование через сайт отеля или по телефону без комиссии посредника.',
    },
    {
        title: '16:9 / 9:16',
        text: 'Форматы видео: горизонтальный для сайта/YouTube и вертикальный для Stories, Reels, Shorts и TikTok.',
    },
    {
        title: 'SRT',
        text: 'Файл субтитров, который прикрепляется к видео или платформам для корректного отображения текста.',
    },
    {
        title: 'Апгрейд',
        text: 'Повышение категории номера. Наглядная видеоподача категорий помогает продавать апгрейд чаще.',
    },
];

const notFitPoints: string[] = [
    'Отелям, которым нужен результат уже завтра: качественное производство требует подготовки и времени.',
    'Хостелам и эконом-объектам с бюджетом ниже 300 ₾: в этом диапазоне мы не работаем.',
    'Отелям, которым нужны только скриншоты или фото без видеосоставляющей.',
    'Объектам с незавершённым ремонтом или неготовыми пространствами: лучше снимать после полной готовности.',
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
            name: 'Видеотур по отелю',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Видеотур по отелю — cinematic-ролик для сайта и Booking',
    description:
        'Пример структуры отельного видеотура: лобби, номера, атмосфера и вид из окна. Формат для сайта, OTA и соцсетей.',
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
    name: 'Видеотур по отелю в Тбилиси',
    description:
        'Cinematic-видеотур по отелю: номера, атмосфера, сервис. Форматы для сайта, Booking, YouTube и соцсетей с субтитрами RU/EN/GE.',
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
        price: '600',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Видеопродакшн в Тбилиси: видеотуры, Reels, 360° туры и AI-контент для отелей и бизнеса по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеотур по отелю в Тбилиси — съёмка для сайта и Booking',
    description:
        'Cinematic-видеотур по вашему отелю: номера, атмосфера, сервис. Гость видит всё до бронирования — меньше отказов, больше доверия. От 600 ₾, Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеотур по отелю в Тбилиси — съёмка для сайта и Booking',
        description:
            'Покажите отель до бронирования: номера, вид, сервис и атмосферу в одном ролике для сайта, OTA и соцсетей.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoHotelPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Hotels · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеотур по отелю — cinematic-ролик для сайта и Booking
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Гость видит ваш отель до бронирования. Номера, атмосфера, вид из окна — в одном ролике, который работает 24/7 вместо вас.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Когда потенциальный гость сравнивает 5 отелей на Booking, решает не цена — решает доверие. Видеотур — это
                        формат, который позволяет гостю зайти в отель ещё до бронирования: пройти по лобби, увидеть реальный вид
                        из номера и почувствовать атмосферу. Мы снимаем cinematic-ролик под ваш бренд для сайта, OTA, соцсетей и
                        писем гостям. Один съёмочный день даёт флагманский видеоактив, который работает годами.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить видеотур
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простым языком</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Видеотур по отелю — это профессиональный cinematic-ролик 60-120 секунд, который показывает объект в
                        лучшем свете: вход, лобби, номера разных категорий, завтрак, террасу и вид. Мы монтируем его под ваш стиль,
                        добавляем субтитры на нужных языках и передаём форматы для сайта, Booking, YouTube и Instagram. Гость
                        смотрит ролик и понимает всё, что обычно спрашивает по телефону.
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
                                <p>MP4 (16:9 и 9:16), SRT-субтитры, JPG-скриншоты.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Качество</p>
                                <p>4K/1080p, цветокоррекция, звуковое оформление.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Съёмка — 1 рабочий день, монтаж и финальные правки — 5-7 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Через Google Drive / WeTransfer, ссылка действует 30 дней.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Правки</p>
                                <p>2 раунда корректировок входят в стоимость.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Готовы показать ваш отель так, чтобы гость почувствовал его ещё до приезда?"
                buttonLabel="Обсудить видеотур"
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
                        Тбилиси остаётся ключевым туристическим направлением Грузии, а Батуми, Сигнахи, Местиа и горные курорты
                        продолжают расти. При этом многие независимые отели в стране до сих пор работают без профессионального
                        видеоконтента, поэтому страницы на Booking и собственные сайты выглядят очень похоже. Качественный
                        видеотур в Тбилиси сегодня — это практическое конкурентное преимущество, а не декоративный бонус.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример видеотура по отелю</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Ниже демо-embed для структуры страницы. На боевой версии можно поставить реальный кейс вашего отеля в
                        Тбилиси, Батуми, Гудаури или другом направлении.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеотура по отелю"
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

            <ProcessNote text="Съёмка занимает один рабочий день. Вам не нужно закрывать отель или переселять гостей — мы работаем аккуратно и в удобное для вас время, обычно с утра, пока номера не заняты." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                <h3 className="text-lg font-bold mb-1">Пакет {pack.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pack.subtitle}</p>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Основной ролик 16:9</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия 9:16</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Мини-клипы по типам номеров</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2-3 клипа</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2-3 клипа</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2 языка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 языка</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Скриншоты</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 кадров</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10 кадров</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">15+ кадров</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">YouTube-версия с обложкой</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Инструкция по размещению</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена</td>
                                    <td className="p-3">от 600 ₾</td>
                                    <td className="p-3">от 950 ₾</td>
                                    <td className="p-3">от 1 400 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">Не уверены, что подойдёт? Напишите нам — расскажем за 5 минут.</p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы снять видеотур, который продаёт ваш отель каждую ночь?"
                buttonLabel="Написать нам и выбрать пакет"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {internalTransitions.map((item) => (
                                <p key={item.href + item.label}>
                                    {item.intro}{' '}
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                    .
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {additionalMaterials.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                    {item.label}
                                </Link>{' '}
                                — {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки отелей в видеоконтенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Чеклист готовности отеля к съёмке</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☐</span>
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
                    <h2 className="text-3xl font-bold mb-8">Кому мы НЕ подходим</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Напишите нам в WhatsApp или Telegram, и мы ответим в течение 2 часов. Работаем в Тбилиси и по всей
                            Грузии, выезжаем в Батуми, Сигнахи, Гудаури и другие туристические направления. Консультация по вашему
                            отелю — бесплатно.
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
                        <p className="text-white/55 text-sm mt-5">Тбилиси, работаем по всей Грузии</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — видеопродакшн в Тбилиси. Снимаем видеотуры, Reels, 360° туры и делаем AI-контент для
                        отелей и бизнеса по всей Грузии.
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

```
---
---

## /promo-video/promo-real-estate
Lines: 1248
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-real-estate';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Риелтор с объектами от $80 000',
        text: 'Нужен формат, который даёт удалённому покупателю полную картину и экономит время обоих.',
    },
    {
        title: 'Агентство с иностранными клиентами',
        text: 'Покупатели из России, Израиля, ОАЭ и Европы принимают решение удалённо по видео.',
    },
    {
        title: 'Небольшой девелопер',
        text: 'Продаёт 5-20 квартир и хочет видео для сайта проекта и листингов.',
    },
    {
        title: 'Собственник дорогого объекта',
        text: 'Пентхаус, дом, видовая квартира: здесь обычное фото не передаёт ценность.',
    },
    {
        title: 'Агент, работающий с переселенцами',
        text: 'Клиенты не были в Тбилиси и выбирают жильё полностью онлайн.',
    },
    {
        title: 'Риелтор, строящий личный бренд',
        text: 'Профессиональное видео на каждый объект поднимает статус агента в глазах продавцов и покупателей.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Удалённый показ без потери качества восприятия',
        text: 'Покупатели из-за рубежа и из других городов не могут приехать на каждый объект. Видеотур даёт им возможность пройтись по квартире, понять планировку, увидеть отделку и принять предварительное решение.',
    },
    {
        title: 'Фильтрация нецелевых запросов',
        text: 'После просмотра видеотура на показ приезжают только те, кого объект заинтересовал. Нет неожиданных разочарований на месте.',
    },
    {
        title: 'Переговорная позиция на цену',
        text: 'Профессионально снятый объект воспринимается дороже. Покупатель видит ценность ещё до торга, и давление на снижение цены становится ниже.',
    },
    {
        title: 'Видеотур живёт дольше объявления',
        text: 'Ролик публикуется на портале, встраивается на сайт агентства, загружается на YouTube и отправляется в мессенджере. Один контент работает сразу в нескольких каналах.',
    },
];

const painCards: Card[] = [
    {
        title: 'Покупатели из других стран не приезжают',
        text: 'Иностранный инвестор не полетит в Тбилиси смотреть несколько квартир наугад. Видеотур снимает неопределённость: клиент видит всё что нужно и приезжает с намерением купить.',
    },
    {
        title: 'После показа говорят «подумаем» и пропадают',
        text: 'Часто показ не отвечает на все вопросы. Видеотур закрывает их заранее: планировка, вход, район, вид, логика объекта.',
    },
    {
        title: 'Объект хороший, но в объявлении это не видно',
        text: 'Широкоугольные фото искажают пространство, сухое описание не передаёт атмосферу. Видеотур превращает listing в понятный маршрут для покупателя.',
    },
    {
        title: 'Дорогой объект подан как обычный листинг',
        text: 'Пентхаус, дом или видовая квартира требуют кинематографичной съёмки, структурированного монтажа и при необходимости аэросъёмки.',
    },
    {
        title: 'Не хочется тратить время на пустые показы',
        text: 'Каждый пустой показ — это час риелтора. Видеотур фильтрует обращения: если человек звонит после просмотра, разговор уже предметный.',
    },
    {
        title: 'Конкуренты выглядят лучше при равном объекте',
        text: 'Упаковка работает. Объект с профессиональным видеотуром воспринимается более ценным уже на этапе первого контакта.',
    },
];

const earnPoints: string[] = [
    'Привлечь иностранных покупателей: клиенты из Израиля, ОАЭ и Европы принимают решения удалённо по видео.',
    'Закрывать сделки быстрее: после видеотура покупатель быстрее принимает решение о показе и авансе.',
    'Обосновывать цену выше рынка: сильная подача создаёт правильный ценовой якорь.',
    'Выигрывать конкуренцию за продавца: риелтор с видеотуром выглядит профессиональнее тех, кто снимает на телефон.',
];

const avoidLossPoints: string[] = [
    'Не терять время на нецелевые показы: видеотур закрывает вопросы до звонка.',
    'Не упускать иностранного покупателя: объявление без видео часто не попадает в shortlist.',
    'Не уступать в цене из-за слабой подачи: торг стартует с более сильной базы.',
    'Не теряться среди похожих объектов: выигрывает тот объект, который покупатель уже прошёл онлайн.',
];

const deliverables: string[] = [
    'Видеотур 1,5-2,5 минуты: логичный маршрут по объекту с акцентом на планировку, свет и ключевые зоны.',
    'Версия с субтитрами или текст-оверлеем (для иностранных покупателей — опционально EN).',
    'Короткая версия 30-60 секунд для Instagram и TikTok (вертикаль).',
    'Профессиональный фотосет 20-30 кадров для портала и сайта.',
    'Текстовое описание объекта на русском и английском: позиционирование, характеристики, локальный контекст.',
    'Аэросъёмка здания и района (опционально, в Full-пакете).',
    'Передача файлов через Google Drive в течение 3-4 рабочих дней.',
];

const useCases: Card[] = [
    {
        title: 'Квартира с видом на Мтацминду — покупатель из Израиля',
        text: 'Агент продаёт квартиру на верхнем этаже с панорамным видом. Видеотур с аэросъёмкой и кадрами вида позволяет инвестору пройти объект дистанционно и принять решение за один созвон.',
    },
    {
        title: 'Агентство с сайтом — раздел «наши объекты»',
        text: 'Снимаем видеотуры в едином стиле для 5-10 квартир, они встраиваются на сайт через YouTube embed и формируют профессиональный образ компании.',
    },
    {
        title: 'Девелопер продаёт квартиры в новостройке Сабуртало',
        text: 'Для 8 юнитов снимаем единые видеотуры и аэрокадры. Покупатели выбирают квартиру онлайн ещё до звонка в отдел продаж.',
    },
    {
        title: 'Собственник продаёт дом в пригороде Тбилиси',
        text: 'Дом сложно показать только фото: важны двор, гараж, состояние этажей, вид. Видеотур снимает эти вопросы до показа.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Пентхаус в Ваке — продажа без личного визита',
        text: 'Объект за $350 000 для покупателя из ОАЭ. После видеотура на 2 минуты с аэросъёмкой и обзором всех зон покупатель приехал уже на подписание авансового договора.',
    },
    {
        title: 'Новостройка в Сабуртало — видео для сайта девелопера',
        text: 'Сняли 6 видеотуров в единой стилистике за 2 дня. Раздел объектов на сайте стал удерживать посетителей дольше и чаще приводить заявки.',
    },
    {
        title: 'Дом в Мцхете — удалённая продажа',
        text: 'Семья, переезжающая из России, приняла решение после одного онлайн-звонка с демонстрацией полного видеотура и аэросъёмки территории.',
    },
];

const socialProofBullets: string[] = [
    'Съёмка на DJI Air 3S и профессиональную камеру. Аэросъёмка здания и окружения входит в Full-пакет.',
    'Нарративный монтаж, а не слайд-шоу. Зритель проходит квартиру как реальный покупатель.',
    'Два языка: описание и субтитры на русском и английском.',
    'Опыт с квартирами, пентхаусами, домами, таунхаусами и апартаментами в новостройках.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Чем видеотур отличается от обычного промо-ролика?',
        answer:
            'Видеотур — это структурированный обход объекта, чтобы зритель понял планировку и увидел все ключевые зоны. Промо-ролик может быть атмосферным, но даёт меньше прикладной информации для сделки.',
    },
    {
        question: 'Нужно ли делать видеотур для каждого объекта?',
        answer:
            'Не всегда. Обычно видеотур оправдан для объектов от $60 000-$80 000, для сложных планировок, больших домов, видовых квартир и кейсов с иностранными покупателями.',
    },
    {
        question: 'Можно ли вставить видеотур на сайт?',
        answer: 'Да. Мы загружаем ролик на YouTube (или другую платформу) и даём embed-код для разработчика.',
    },
    {
        question: 'Нужна ли музыка в видеотуре?',
        answer:
            'Да, лёгкая фоновая музыка улучшает восприятие. Используем royalty-free треки, безопасные для публикации в соцсетях.',
    },
    {
        question: 'Сколько длится съёмка на объекте?',
        answer:
            'Квартира до 100 м² — обычно 2-3 часа. Крупный объект (дом, несколько этажей, двор) — до 4-5 часов, включая фото и опциональную аэросъёмку.',
    },
    {
        question: 'Можно получить исходники для самостоятельного монтажа?',
        answer:
            'Стандартно передаём готовый смонтированный ролик. Передача исходников обсуждается отдельно по запросу.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеотур по квартире в Тбилиси?',
        answer:
            'Базовый видеотур — от 500 ₾. Стандартный пакет с фото и текстом — от 800 ₾. Full с аэросъёмкой и двуязычными материалами — от 1 400 ₾.',
    },
    {
        question: 'Есть скидки для агентств с несколькими объектами?',
        answer:
            'Да. При заказе от 3 объектов действуют пакетные условия. Для регулярного потока обсуждаем партнёрские тарифы.',
    },
    {
        question: 'Когда и как оплачивается работа?',
        answer: '50% предоплата перед съёмкой и 50% после передачи готовых материалов. Оплата: банковский перевод или наличные в GEL.',
    },
    {
        question: 'Что если объект продался раньше, чем получили видео?',
        answer:
            'Если объект продан до съёмки — возвращаем предоплату. Если после съёмки — завершаем монтаж и передаём материалы: они пригодятся для портфолио или похожего объекта.',
    },
    {
        question: 'Можно добавить аэросъёмку к уже снятому видеотуру?',
        answer: 'Да, организуем отдельный выезд дрона. Стоимость рассчитывается отдельно.',
    },
    {
        question: 'В какие дни вы работаете?',
        answer:
            'Работаем в будни и выходные. Чаще рекомендуем первую половину дня, когда естественный свет лучше для интерьерной съёмки.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Понимаем специфику продажи недвижимости',
        text: 'Маршрут видеотура строим под логику покупательского решения: планировка, свет, вид из окна, вход и подъезд.',
    },
    {
        title: 'Аэросъёмка собственным дроном',
        text: 'DJI Air 3S с нами, поэтому не нужно отдельно искать пилота и координировать второго подрядчика.',
    },
    {
        title: 'Материалы для всех каналов',
        text: 'Одна съёмка закрывает горизонтальный ролик, вертикальную версию, фото для листинга и текст для объявления.',
    },
    {
        title: 'Двуязычный контент',
        text: 'Описание и субтитры на русском и английском помогают работать с иностранными покупателями.',
    },
    {
        title: 'Фиксированные сроки',
        text: 'Через 3-4 дня после съёмки получаете готовую папку файлов без затяжек и сюрпризов.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и согласование (15-20 минут)',
        text: 'Вы рассказываете про объект: адрес, метраж, аудиторию, акценты и необходимость аэросъёмки. Фиксируем пакет и дату.',
    },
    {
        title: 'Шаг 2. Подготовка объекта',
        text: 'Отправляем чек-лист: убрать лишнее, открыть шторы, включить свет. Обычно подготовка занимает 20-30 минут.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'На объекте проводим 2-5 часов в зависимости от масштаба. Снимаем видеотур, фото и опционально аэросъёмку.',
    },
    {
        title: 'Шаг 4. Монтаж и постпродакшн',
        text: 'За 3-4 рабочих дня собираем ролик, обрабатываем фото и готовим текст RU + EN.',
    },
    {
        title: 'Шаг 5. Передача и правки',
        text: 'Передаём полный комплект через Google Drive. Одна итерация правок включена бесплатно.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic - Видеотур без лишнего',
        price: 'от 500 ₾',
        audience: 'Риелтор или собственник с объектом от $60 000',
        timeline: '3 рабочих дня',
        items: [
            'Видеотур 1,5-2 мин (горизонтальный)',
            'Короткая версия 30-60 сек (вертикальный для соцсетей)',
            'Базовый фотосет 15-20 кадров',
        ],
    },
    {
        title: 'Standard - Полный листинг-пакет',
        price: 'от 800 ₾',
        audience: 'Агентство, риелтор с иностранными клиентами, объект для сайта',
        timeline: '3-4 рабочих дня',
        featured: true,
        items: [
            'Видеотур 2 мин + вертикальная версия',
            'Профессиональный фотосет 25-30 кадров',
            'Текст RU + EN с описанием и характеристиками',
            'Субтитры или текст-оверлей (RU или EN)',
        ],
    },
    {
        title: 'Full - Премиум-объект с аэросъёмкой',
        price: 'от 1 400 ₾',
        audience: 'Дорогие объекты, пентхаусы, дома, новостройки',
        timeline: '4 рабочих дня',
        items: [
            'Видеотур 2-2,5 мин + вертикальная версия',
            'Аэросъёмка здания и района',
            'Полный фотосет 30-35 кадров',
            'Текст RU + EN (расширенный, с позиционированием)',
            'Субтитры на RU + EN',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимать обход на телефон без стабилизатора',
        text: 'Тряска при ходьбе делает видео тяжёлым для просмотра. Зритель закрывает его уже в первые секунды.',
    },
    {
        title: 'Слишком длинный ролик «показать всё»',
        text: 'Видеотур длиннее 3 минут часто теряет внимание. Важнее маршрут и акценты, чем количество кадров.',
    },
    {
        title: 'Снимать в неправильное время суток',
        text: 'При плохом свете квартира выглядит мрачной. Оптимальное окно — первая половина дня с открытыми шторами и включённым светом.',
    },
    {
        title: 'Не показывать вход и подъезд',
        text: 'Покупатель оценивает объект с момента подхода к зданию. Лифт, холл и входная группа влияют на решение.',
    },
    {
        title: 'Снимать без логики пространства',
        text: 'Прыжки между зонами сбивают ориентир. Маршрут должен идти как реальный обход: вход -> комнаты -> балкон.',
    },
    {
        title: 'Не делать вертикальную версию',
        text: 'Горизонталь нужна для портала и сайта, но без вертикали вы теряете охват соцсетей и мессенджеров.',
    },
];

const improveWithoutPurchase: string[] = [
    'Составьте маршрут перед съёмкой: от входной двери до балкона по логике перемещения покупателя.',
    'Включите всё освещение, даже днём: тёмные зоны удешевляют восприятие ремонта.',
    'Снимите подъезд и лифт: 30 секунд общих зон снижают тревожность удалённого клиента.',
    'Добавьте субтитры или простые подписи в кадре для иностранного покупателя.',
    'Загрузите видео на YouTube и вставьте в объявление на ss.ge / myhome.ge.',
];

const checklistItems: string[] = [
    'Определён маршрут обхода: вход -> прихожая -> комнаты -> кухня -> санузел -> балкон.',
    'Все шторы открыты, естественный свет максимальный.',
    'Включены все светильники и торшеры.',
    'Лишние вещи убраны с поверхностей, полок и холодильника.',
    'Ванная и туалет чистые, бытовые средства убраны.',
    'Кухня подготовлена: посуда и визуальный шум убраны.',
    'Подъезд и лифт готовы к показу в кадре.',
    'Есть доступ к балкону, двору или входной группе для аэросъёмки.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Как видеотур помогает продать квартиру иностранному покупателю?',
        answer: [
            'Дистанционные покупатели в Грузии выбирают объект до поездки, а часть сделок вообще проходит без предварительного визита. Для них видеотур — эквивалент первого очного показа.',
            'Если в ролике есть логичный маршрут, вид из окна, входная группа и подписи на английском, покупатель понимает состояние квартиры до звонка.',
            'Практически это сокращает пустые диалоги: после видеотура клиент задаёт уже конкретные вопросы по документам и условиям сделки.',
        ],
    },
    {
        question: 'Чем видеотур отличается от 360° виртуального тура?',
        answer: [
            'Видеотур — это монтированный ролик с выбранным темпом и акцентами. Он быстрее даёт цельное впечатление и хорошо работает в мессенджерах и листингах.',
            '360° тур интерактивный: клиент сам кликает и исследует объект в своём темпе. Он полезен для детального изучения на сайте агентства или девелопера.',
            'Для дорогих объектов часто лучше комбинация: видеотур для первого контакта + 360° тур для углублённого изучения.',
        ],
    },
    {
        question: 'Как правильно снять видеотур по большой квартире или дому?',
        answer: [
            'Нужен сценарий маршрута: от входа к самой ценной зоне объекта. Для видовой квартиры — финал на балконе, для дома — выход к двору и территории.',
            'Каждую зону лучше показывать широким планом и 1-2 акцентами, без хаотичных повторов. Для нескольких этажей соблюдайте последовательность уровней.',
            'По таймингу чаще работает 2-3 минуты. Более длинная версия допустима только если каждую минуту добавляется новая, важная информация.',
        ],
    },
    {
        question: 'Нужна ли аэросъёмка при продаже городской квартиры в Тбилиси?',
        answer: [
            'Для стандартной квартиры аэросъёмка не обязательна. Но для видовых объектов, пентхаусов и домов она заметно усиливает восприятие ценности.',
            'В Тбилиси дрон особенно полезен, когда важно показать горизонт, расположение в районе и близость к инфраструктуре.',
            'Добавление аэросъёмки обычно стоит от 200-250 ₾, а в Full-пакете уже включено.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит видеотур по квартире в Тбилиси?',
        answer: 'От 500 ₾ за базовый видеотур. Стандартный пакет с фото и текстом — от 800 ₾. Полный пакет с аэросъёмкой — от 1 400 ₾.',
    },
    {
        question: 'За сколько дней делается видеотур?',
        answer: '3-4 рабочих дня: 1 день съёмки и 2-3 дня монтажа/постпродакшна.',
    },
    {
        question: 'Нужен ли видеотур для продажи квартиры?',
        answer: 'Да, если есть удалённые или иностранные покупатели. Формат заменяет первый осмотр и снижает число пустых показов.',
    },
    {
        question: 'Можно ли встроить видеотур на сайт агентства?',
        answer: 'Да. Ролик загружается на YouTube и встраивается стандартным embed-кодом.',
    },
    {
        question: 'Что входит в услугу у Breus Media?',
        answer: 'Смонтированный ролик 1,5-2,5 мин, вертикальная версия, фотосет и текст RU/EN (зависит от пакета).',
    },
    {
        question: 'Делаете ли вы видеотур на английском?',
        answer: 'Да. В Standard и Full доступны EN-субтитры/оверлей, а также описание RU + EN.',
    },
    {
        question: 'Нужна ли аэросъёмка для городской квартиры?',
        answer: 'Не всегда. Чаще нужна для видовых объектов, пентхаусов и загородных домов.',
    },
    {
        question: 'Как быстро можно назначить съёмку?',
        answer: 'Обычно ближайший слот — в течение 3-5 дней.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Для иностранцев достаточно фото — они всё равно приедут смотреть.',
        reality:
            'Часть клиентов принимает решение полностью дистанционно. Без видео объект может не попасть в shortlist вообще.',
    },
    {
        myth: 'Видеотур нужен только для элитной недвижимости.',
        reality:
            'Формат оправдан уже от $60 000+ при конкуренции и удалённой аудитории.',
    },
    {
        myth: 'Видеотур слишком долго делается.',
        reality: 'Обычно 3-4 дня после съёмки. Для объекта, который продаётся месяцами, это быстрый цикл.',
    },
    {
        myth: 'Покупатель всё равно захочет приехать лично.',
        reality: 'Да, но после видеотура приезжают более целевые клиенты, а не «туристы».',
    },
    {
        myth: 'Можно снять на iPhone и не платить продакшену.',
        reality: 'Без стабилизации, монтажа и цветокоррекции видео часто снижает ценность объекта вместо усиления.',
    },
];

const glossary: Card[] = [
    {
        title: 'Walk-through',
        text: 'Жанр видео, где оператор проходит пространство по логике реального обхода.',
    },
    {
        title: 'Субтитры',
        text: 'Текстовые подписи в кадре. Критичны для зрителей, которые смотрят без звука или не знают язык.',
    },
    {
        title: 'Embed',
        text: 'Встраивание ролика с YouTube или Vimeo на сайт через iframe-код.',
    },
    {
        title: 'Постпродакшн',
        text: 'Монтаж, цветокоррекция, музыка, субтитры и экспорт после съёмки.',
    },
    {
        title: 'Листинг',
        text: 'Объявление о продаже объекта на ss.ge, myhome.ge и других площадках.',
    },
    {
        title: 'Шорт-лист',
        text: 'Короткий список объектов, которые покупатель реально рассматривает.',
    },
];

const notFitPoints: string[] = [
    'Если нужен видеотур за 1 день. Наш минимальный качественный цикл: съёмка + 3-4 дня монтажа.',
    'Если бюджет ниже 500 ₾ на видеотур: в этом диапазоне качественный продукт сделать невозможно.',
    'Если объект дешевле $40 000: чаще окупается базовая съёмка без полного walk-through.',
    'Если вам нужна гарантия продажи: мы усиливаем упаковку и конверсию, но не можем гарантировать сделку.',
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
            name: 'Видеотур по квартире и дому',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Пример видеотура по квартире в Тбилиси',
    description:
        'Пример структуры видеотура: вход, жилые зоны, кухня, балкон и вид из окна. Формат для листинга, сайта и удалённых покупателей.',
    thumbnailUrl: [VIDEO_THUMBNAIL_URL],
    uploadDate: '2026-03-21',
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
    name: 'Видеотур по квартире и дому в Тбилиси',
    description:
        'Кинематографичный видеотур для листинга и сайта: 1,5-2,5 минуты, вертикальная версия, фото и двуязычные материалы под удалённых покупателей.',
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
        '@type': 'City',
        name: 'Тбилиси',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '500',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Видеопродакшн в Тбилиси: видеотуры, промо-видео, аэросъёмка и контент для недвижимости.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеотур по квартире в Тбилиси — съёмка для листинга',
    description:
        'Кинематографичный видеотур по вашей квартире или дому в Тбилиси. Для удалённых и иностранных покупателей. Готово за 3 дня. Цены от 500 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеотур по квартире и дому — съёмка для листинга и сайта',
        description:
            'Структурированный walk-through для удалённых покупателей. Видео, фото, RU+EN описание и опциональная аэросъёмка.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoRealEstatePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Real Estate · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеотур по квартире и дому — съёмка для листинга и сайта
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Структурированный walk-through, который показывает объект удалённому покупателю лучше, чем личный осмотр.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Видеотур — это цифровой первый показ: покупатель проходит по квартире, видит планировку, понимает метраж,
                        оценивает свет и вид из окна и принимает предварительное решение до звонка или поездки. Снимаем видеотуры
                        для квартир, апартаментов, таунхаусов и домов в Тбилиси с правильным монтажом и форматами для портала,
                        сайта агентства и соцсетей.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Заказать видеотур для объекта
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Видеотур — это ролик на 1-2 минуты, который проводит зрителя по объекту в логичном порядке: вход, прихожая,
                        гостиная, кухня, спальня, балкон, вид. Покупатель видит всё важное без лишнего и быстро понимает, стоит ли
                        ехать на показ. Особенно ценно для объектов выше $80 000 и для клиентов, которые находятся за рубежом или
                        в другом городе.
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в услугу</h2>
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
                                <p className="font-semibold text-white">Форматы файлов</p>
                                <p>Видео: MP4 1080p (16:9 и 9:16), фото: JPG, текст: Google Doc/PDF RU+EN, опционально SRT.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>3-4 рабочих дня после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Одна ссылка на Google Drive, всё готово к публикации на портал, сайт и в мессенджеры.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Есть объект, который нужно правильно показать удалённым покупателям? За 5 минут определим формат и дату съёмки."
                buttonLabel="Заказать видеотур для объекта"
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
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст Тбилиси</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Рынок недвижимости Тбилиси всё сильнее зависит от удалённых покупателей. В 2024 году доля иностранных
                        сделок выросла, и покупатели из Израиля и стран Персидского залива суммарно формируют около 10% рынка.
                        Параллельно растёт внутренний релокейт из Батуми, Кутаиси и других городов. Для этих аудиторий объект
                        без видеотура часто не попадает в shortlist. При средней цене сделки выше $80 000 качество подачи прямо
                        влияет на срок продажи и переговорную позицию.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Social Proof / доказательства</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример видеотура</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Ниже размещён embed-блок примера формата видеотура. На боевой версии страницы можно заменить его на ваш
                        актуальный кейс с YouTube.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеотура по квартире"
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

            <FaqSection
                items={beginnerFaqItems}
                title="FAQ для новичка"
                variant="beginner"
            />

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

            <ProcessNote text="Звоните или пишите — согласуем дату и состав съёмки за один разговор. Через 3-4 дня получите папку с файлами. Одна итерация правок включена." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Видеотур (горизонт.)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1,5-2 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2-2,5 мин</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Да</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Да</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Да</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фотосет</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">15-20 кадров</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">25-30 кадров</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">30-35 кадров</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Нет</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Нет</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Да</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Текст для портала</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Нет</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU + EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU + EN (расширенный)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры / оверлей</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Нет</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU или EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU + EN</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Срок</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 дня</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3-4 дня</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">4 дня</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена от</td>
                                    <td className="p-3">500 ₾</td>
                                    <td className="p-3">800 ₾</td>
                                    <td className="p-3">1 400 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Если нужен только видеотур для квартиры без дополнительных материалов — выбирайте Basic.</li>
                            <li>Если нужен полный листинг-комплект и работа с иностранными покупателями — Standard.</li>
                            <li>Если продаёте дорогой объект, пентхаус или дом с аэросъёмкой — Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не уверены, что выбрать? Напишите в WhatsApp/Telegram: {CONTACT_PHONE}.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Назовите объект в Telegram или WhatsApp, и мы дадим точную цену и ближайшую свободную дату съёмки."
                buttonLabel="Узнать стоимость видеотура"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-promo/reels-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                    Видеосъёмка квартиры для продажи
                                </Link>{' '}
                                — быстрый пакет для листинга: фото + короткий ролик без полноценного видеотура.
                            </li>
                            <li>
                                <Link href="/reels-promo/reels-realtor" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для риелтора
                                </Link>{' '}
                                — личный бренд агента и регулярный экспертный контент.
                            </li>
                            <li>
                                <Link href="/360-tour-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° виртуальный тур
                                </Link>{' '}
                                — интерактивный формат, где покупатель самостоятельно ходит по объекту.
                            </li>
                            <li>
                                <Link href="/drone-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                    Аэросъёмка объекта
                                </Link>{' '}
                                — отдельная съёмка здания, ЖК и прилегающей территории.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Если нужна более доступная версия для стандартной квартиры, посмотрите пакет{' '}
                            <Link href="/reels-promo/reels-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                «Видеосъёмка квартир для продажи»
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Если нужен интерактивный формат, где пользователь сам перемещается между комнатами, переходите на{' '}
                            <Link href="/360-tour-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                360° виртуальный тур
                            </Link>
                            .
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки в нише</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Что можно улучшить без покупки услуги</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Расширенные ответы для long-tail SEO</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем по всему Тбилиси. Снимаем дома, квартиры и апартаменты в будни и выходные. Первый слот
                            обычно в течение 3-5 дней.
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
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — видеопродакшн в Тбилиси. Видеотуры для продажи недвижимости в Грузии.
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

```
---
---

## /promo-video/promo-residential-complex
Lines: 1342
```tsx
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
    subtitle: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-residential-complex';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Застройщики на этапе активных продаж квартир',
        text: 'Нужно быстро показать проект потенциальным покупателям и сократить время на объяснения.',
    },
    {
        title: 'Девелоперы, которые привлекают инвестиции',
        text: 'Видео снимает ключевые вопросы и формирует доверие инвестора за считанные минуты.',
    },
    {
        title: 'Отделы продаж ЖК',
        text: 'Видеопрезентация заменяет десятки повторяющихся объяснений менеджеров.',
    },
    {
        title: 'Маркетологи девелоперских компаний',
        text: 'Готовый контент под сайт, рекламу, соцсети, рассылки и показы в офисе продаж.',
    },
    {
        title: 'Проекты на стадии строительства',
        text: 'Видео хода строительства демонстрирует прогресс и укрепляет доверие дольщиков.',
    },
    {
        title: 'Компании, продающие квартиры иностранцам и релокантам',
        text: 'Видео работает удалённо, когда клиент не может приехать на площадку.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Показать проект быстро и убедительно',
        text: 'За 2-3 минуты покупатель и инвестор понимают, что это за комплекс, где он расположен и почему стоит внимания.',
    },
    {
        title: 'Сформировать доверие на этапе off-plan',
        text: 'Когда квартиры продаются по рендерам, видео реального прогресса и окружения снимает страх покупки воздуха.',
    },
    {
        title: 'Дать отделу продаж единый сильный инструмент',
        text: 'Одно видео работает сразу в нескольких каналах: сайт, соцсети, мессенджеры, рассылки и офлайн-презентации.',
    },
    {
        title: 'Обосновать цену за квадратный метр',
        text: 'Качественная визуализация локации, инфраструктуры и видов помогает покупателю увидеть ценность предложения.',
    },
];

const painCards: Card[] = [
    {
        title: '«Проект хороший, но покупатели не понимают, что мы строим»',
        text: 'Рендеры и планировки не передают масштаб и атмосферу района. Отдел продаж вынужден объяснять одно и то же каждому лиду.',
    },
    {
        title: '«Инвесторы просят материалы, а показать нечего»',
        text: 'Таблицы и схемы без сильной визуальной упаковки не создают ощущения проекта, и внимание уходит к конкурентам.',
    },
    {
        title: '«Отдел продаж тратит часы на объяснения»',
        text: 'Без видео каждый звонок начинается с нуля: район, виды, инфраструктура и стадия строительства объясняются вручную.',
    },
    {
        title: '«Мы продаём квартиры на стадии котлована, и нам не верят»',
        text: 'Покупатель off-plan боится затяжки стройки и расхождения с обещаниями. Визуальное доказательство прогресса критично: по отраслевым оценкам, до 87% решений в недвижимости зависят от визуального впечатления и доверия.',
    },
    {
        title: '«Конкуренты с похожим проектом выглядят сильнее»',
        text: 'Похожий ЖК с качественным видео забирает лидов уже в первые секунды контакта, даже если ваш продукт сильнее по сути.',
    },
    {
        title: '«Нужен контент на разные каналы, но бюджет ограничен»',
        text: 'Отдельные съёмки для сайта, соцсетей, офиса продаж и рекламы обходятся дорого. Нужна единая production-логика.',
    },
];

const earnPoints: string[] = [
    'Ускоряет продажи на ранней стадии: видео снимает до 80% базовых вопросов до звонка.',
    'Обосновывает премиальную цену: покупатель видит ценность локации, видов и инфраструктуры.',
    'Привлекает иностранных покупателей: решение можно принять удалённо, без визита на площадку.',
    'Увеличивает конверсию рекламы: единый футаж масштабируется в форматы для каждого канала.',
];

const avoidLossPoints: string[] = [
    'Не терять лидов из-за слабой первой презентации проекта.',
    'Не сливать бюджет на повторные объяснения и однотипные созвоны.',
    'Не терять доверие дольщиков благодаря регулярным видеоотчётам.',
    'Не упускать окно продаж из-за отсутствия готового контента.',
];

const deliverables: string[] = [
    'Основной презентационный ролик 2-3 минуты: монтаж, цветокоррекция, музыка, титры.',
    'Дрон-облёт комплекса и окрестностей в HD/4K.',
    'Съёмка интерьеров и общих зон: лобби, терраса, двор, фитнес.',
    'Контекстная съёмка района: парки, транспорт, инфраструктура в пешей доступности.',
    'Короткие нарезки 15-30 секунд для Instagram Stories, Reels, Facebook Ads.',
    'Версия 9:16 для мобильных соцсетей.',
    'Файлы в MP4 (H.264) для web и соцсетей.',
    'Исходный отснятый материал по запросу или в расширенном пакете.',
];

const useCases: Card[] = [
    {
        title: 'Запуск продаж новой очереди',
        text: 'Для второй очереди ЖК в Дигоми показываем изменения, виды и готовые зоны первой очереди. Видео становится центром рекламной кампании.',
    },
    {
        title: 'Презентация для инвестиционного фонда',
        text: 'Видео с архитектурным контекстом, локацией и прогрессом строительства усиливает инвестиционный пакет вместе с финмоделью.',
    },
    {
        title: 'Контент для digital-рекламы',
        text: 'Из одной съёмки делаем 6-8 коротких нарезок под разные аудитории и форматы для Meta, YouTube и мессенджеров.',
    },
    {
        title: 'Обновление контента по стадии стройки',
        text: 'Видеоотчёт с дроновой съёмкой и комментариями команды поддерживает доверие покупателей и дольщиков.',
    },
];

const miniCases: Card[] = [
    {
        title: 'ЖК бизнес-класса, Сабуртало',
        text: 'Показали виды с верхних этажей и окружение до завершения стройки. Отдел продаж сообщает о существенном снижении базовых вопросов на первом контакте.',
    },
    {
        title: 'Инвестиционный проект, побережье Батуми',
        text: 'Сделали ролик 2,5 минуты для инвесторов из Израиля и ОАЭ. Видео включено в инвестиционный пакет для брокерских сетей.',
    },
    {
        title: 'Жилой район комфорт-класса, Дигоми',
        text: 'Для запуска второй очереди показали живую инфраструктуру первой. CTR кампании с видео вырос в 2,8 раза против статичных рендеров.',
    },
];

const socialProofBullets: string[] = [
    'Оборудование уровня кино: DJI Air 3S (4K, HDR), стабилизатор, беспроводные микрофоны.',
    'Понимание рынка недвижимости Грузии: акценты под локального покупателя и иностранного инвестора.',
    'Системный подход к deliverables: основное видео, вертикали и нарезки под несколько каналов.',
    'Прозрачный процесс: сценарий до съёмки, черновой монтаж на согласование, финал после правок.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое презентационное видео ЖК и чем оно отличается от рекламного ролика?',
        answer:
            'Презентационное видео — это развёрнутый формат 2-3 минуты с архитектурой, районом, инфраструктурой и стадией проекта. Рекламный ролик — короткий формат 15-60 секунд для лидогенерации и охватных кампаний.',
    },
    {
        question: 'Можно ли снять видео, если комплекс ещё строится?',
        answer:
            'Да. Мы снимаем ход строительства, окружение, виды с будущих этажей и существующую инфраструктуру, чтобы повысить доверие на этапе off-plan.',
    },
    {
        question: 'Нужно ли нам предоставлять сценарий?',
        answer:
            'Нет. Мы сами готовим сценарий по брифу: аудитория, ключевые преимущества, нужные зоны и формат подачи. Вы утверждаете структуру до съёмки.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Обычно один съёмочный день: 4-6 часов на площадке для дрон-облёта, интерьеров, общих зон и контекстных кадров района.',
    },
    {
        question: 'Можно ли использовать одно видео для сайта и соцсетей?',
        answer:
            'Да. Из одной съёмки делаем основной ролик и короткие вертикальные/горизонтальные версии под Instagram, Facebook, TikTok и YouTube Shorts.',
    },
    {
        question: 'На каких языках можно сделать титры и озвучку?',
        answer:
            'Базово — русский и английский. Грузинский и дополнительные языки (арабский, иврит, турецкий) — по запросу.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит презентационное видео ЖК?',
        answer:
            'Basic — от 1 200 ₾, Standard — от 2 000 ₾, Full — от 3 500 ₾ в зависимости от состава съёмки, объёма монтажа и языковых версий.',
    },
    {
        question: 'Что входит в стоимость, а что оплачивается отдельно?',
        answer:
            'Включены съёмка, монтаж, цветокоррекция, лицензионная музыка, титры и финальные файлы. Отдельно: дикторская озвучка, 3D-вставки, допсъёмочные дни и перевод на третий язык.',
    },
    {
        question: 'Как происходит оплата?',
        answer:
            'Стандартно 50% предоплата перед съёмкой и 50% после утверждения финального монтажа. Для крупных пакетов возможна оплата в три этапа.',
    },
    {
        question: 'Можно ли заказать только дроновую съёмку без монтажа?',
        answer:
            'Да, можно получить исходники. Для задач продаж и работы с инвесторами мы рекомендуем полный монтажный пакет.',
    },
    {
        question: 'Сколько правок включено?',
        answer:
            'Включены два раунда правок. Третий и последующие раунды выполняются по заранее согласованной фиксированной ставке.',
    },
    {
        question: 'Можно ли снять несколько корпусов или проектов за один день?',
        answer:
            'Если локации рядом, это возможно в один выезд. Для проектов в разных районах/городах считаем отдельные съёмочные блоки с пакетной скидкой.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Специализация на недвижимости в Грузии',
        text: 'Понимаем, какие аргументы продают ЖК в Тбилиси и Батуми для разных сегментов аудитории.',
    },
    {
        title: 'Полный цикл за один выезд',
        text: 'Дрон, камера, стабилизатор, микрофоны и полный production-процесс без привлечения нескольких подрядчиков.',
    },
    {
        title: 'Фокус на результате для продаж',
        text: 'Каждый блок ролика отвечает на вопросы покупателя: где это, что рядом, какая стадия и в чём ценность.',
    },
    {
        title: 'Прозрачный процесс и сроки',
        text: 'Бриф -> сценарий -> съёмка -> черновой монтаж -> правки -> финальные файлы в договорённый срок.',
    },
    {
        title: 'Масштабируемый контент-результат',
        text: 'Из одного съёмочного дня получаете материалы для сайта, рекламы, соцсетей, рассылок и офиса продаж.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1: Бриф и знакомство с проектом (день 1)',
        text: 'Определяем аудиторию, ключевые преимущества, локации и цели видео для продаж и инвестиций.',
    },
    {
        title: 'Шаг 2: Сценарий и план съёмки (дни 2-3)',
        text: 'Собираем структуру сцен, акценты и хронометраж. Согласовываем до выезда на площадку.',
    },
    {
        title: 'Шаг 3: Съёмка на объекте (день 4-5)',
        text: 'Дрон-облёт, интерьеры, общие зоны и контекст района. Обычно 4-6 часов на площадке.',
    },
    {
        title: 'Шаг 4: Монтаж и цветокоррекция (дни 6-12)',
        text: 'Собираем главный ролик, добавляем музыку, титры и отправляем черновой монтаж на согласование.',
    },
    {
        title: 'Шаг 5: Правки и финальная выдача (дни 13-14)',
        text: 'Вносим правки и передаём финальные версии для web, соцсетей и презентаций.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 1 200 ₾',
        subtitle: 'Быстрый обзор проекта',
        timeline: '5 рабочих дней',
        items: [
            'Дрон-облёт комплекса и окрестностей (4K).',
            'Монтаж обзорного ролика до 90 секунд.',
            'Цветокоррекция и лицензионная музыка.',
            'Финальный MP4 (горизонтальный).',
        ],
    },
    {
        title: 'Standard',
        price: 'от 2 000 ₾',
        subtitle: 'Полная презентация проекта',
        timeline: '7 рабочих дней',
        featured: true,
        items: [
            'Всё из Basic.',
            'Съёмка интерьеров и общих зон.',
            'Контекстная съёмка района.',
            'Основной ролик до 2,5 минут.',
            '3 короткие нарезки 15-30 сек.',
            'Вертикальная версия 9:16.',
            'Титры на русском и английском.',
        ],
    },
    {
        title: 'Full',
        price: 'от 3 500 ₾',
        subtitle: 'Инвестиционный пакет',
        timeline: '10 рабочих дней',
        items: [
            'Всё из Standard.',
            'Основной ролик до 3,5 минут.',
            'Интервью с архитектором или руководителем проекта.',
            '5-6 коротких нарезок под разные сегменты.',
            'Версии на двух языках (RU + EN).',
            'Исходные материалы и приоритетная обработка.',
        ],
    },
];

const packageHelper: string[] = [
    'Нужен обзорный ролик для сайта и первого впечатления? -> Basic.',
    'Нужен полный набор для сайта, соцсетей и офиса продаж? -> Standard.',
    'Работаете с инвесторами и иностранными покупателями? -> Full.',
];

const relatedServices = [
    {
        href: '/reels-promo/promo-zhk-launch',
        label: 'Рекламный ролик для ЖК',
        description: 'Короткий промо-формат для digital-рекламы и запуска продаж.',
    },
    {
        href: '/drone-real-estate',
        label: 'Аэросъёмка недвижимости',
        description: 'Дрон-облёт объектов для каталогов, сайтов и маркетинговых материалов.',
    },
    {
        href: '/360-tour-real-estate',
        label: '360° виртуальный тур по недвижимости',
        description: 'Интерактивный формат для удалённых покупателей.',
    },
    {
        href: '/drone-construction-monitoring',
        label: 'Мониторинг хода строительства с дрона',
        description: 'Регулярная съёмка прогресса стройки для дольщиков и инвесторов.',
    },
];

const internalTransitions = [
    {
        href: '/360-tour-real-estate',
        intro: 'Если нужен интерактивный формат вместо ролика, посмотрите',
        label: '360° тур для недвижимости',
    },
    {
        href: '/drone-construction-monitoring',
        intro: 'Если проект на стадии строительства и нужна регулярная съёмка, подойдёт',
        label: 'мониторинг стройки с дрона',
    },
    {
        href: '/reels-promo/promo-zhk-launch',
        intro: 'Для digital-рекламы и запуска продаж перейдите к услуге',
        label: 'рекламный ролик для ЖК',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Надеяться только на CGI-рендеры',
        text: 'Рендеры выглядят идеально, но не формируют доверие так, как реальные кадры окружения и прогресса стройки.',
    },
    {
        title: 'Не показывать район и окружение',
        text: 'Покупатель выбирает не только квартиру, но и образ жизни вокруг: школы, парки, транспорт, сервисы.',
    },
    {
        title: 'Использовать один и тот же контент для всех аудиторий',
        text: 'Инвестор, молодая семья и релокант ожидают разных аргументов. Контент нужно сегментировать.',
    },
    {
        title: 'Снимать без сценария и структуры',
        text: 'Съёмка для галочки на телефон без монтажа и цветокоррекции снижает восприятие качества проекта.',
    },
    {
        title: 'Откладывать видео до завершения стройки',
        text: 'На этапе котлована и каркаса видео особенно важно, потому что именно тогда формируется основная воронка.',
    },
    {
        title: 'Не обновлять контент по мере строительства',
        text: 'Разовая съёмка быстро устаревает. Регулярные обновления поддерживают доверие и динамику продаж.',
    },
];

const improveWithoutPurchase: string[] = [
    'Снимайте прогресс строительства раз в месяц на телефон со штатива и публикуйте обновления.',
    'Добавьте на сайт раздел «Ход строительства» с регулярными фотоотчётами.',
    'Подготовьте PDF с реальными видами из окон с разных этажей.',
    'Соберите карту инфраструктуры вокруг ЖК с ключевыми точками в пешей доступности.',
    'Если первая очередь заселена, добавьте живые отзывы жителей.',
];

const checklistItems: string[] = [
    'Определена целевая аудитория видео: покупатели, инвесторы или оба сегмента.',
    'Выделены ключевые преимущества проекта: локация, вид, инфраструктура, архитектура.',
    'Подготовлена площадка: убран строительный мусор, лишняя техника отключена или отодвинута.',
    'Шоу-рум или модельная квартира готовы к съёмке (если есть).',
    'Согласован доступ на крышу/верхние этажи для дроновой съёмки.',
    'Согласованы общие зоны: лобби, двор, фитнес, терраса.',
    'Определены локации района для контекстной съёмки.',
    'Назначен ответственный от застройщика для координации на объекте.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Как презентационное видео помогает продавать квартиры на стадии off-plan?',
        answer: [
            'Покупка квартиры на стадии строительства всегда связана с неопределённостью: клиент видит не готовый продукт, а обещание будущего результата.',
            'Видео решает это через реальный контекст: прогресс стройки, район, видовые точки с высоты будущих этажей, инфраструктура и логика повседневной жизни.',
            'Когда человек видит живую картинку вместо набора рендеров, уровень доверия заметно растёт. Для значимой части аудитории это ключевой шаг перед записью на просмотр.',
        ],
    },
    {
        question: 'В чём разница между презентационным видео и рекламным роликом для ЖК?',
        answer: [
            'Презентационное видео — глубокий формат 2-3 минуты для тех, кто уже заинтересован и хочет разобраться в проекте детально.',
            'Рекламный ролик — короткий 15-60 секундный формат для охвата, внимания и перехода на сайт или в отдел продаж.',
            'Лучшая стратегия — использовать оба формата в связке: короткое видео приводит лида, длинное прогревает к решению.',
        ],
    },
    {
        question: 'Какие зоны и ракурсы важнее всего снять для застройщика?',
        answer: [
            'Базовый приоритет: дрон-облёт для масштаба, вид с будущих этажей, ключевые общие зоны (лобби, двор, фитнес, терраса) и модельные помещения.',
            'Второй уровень — контекст района в радиусе 500 метров: транспорт, парки, школы, коммерция и факторы, влияющие на ежедневный комфорт.',
            'Набор локаций формируется заранее по целевой аудитории: для инвестора важна ликвидность и рост, для семьи — сценарии жизни.',
        ],
    },
    {
        question: 'Как часто нужно обновлять видеоконтент по мере строительства?',
        answer: [
            'На активной стадии стройки оптимально обновлять видеоматериалы каждые 2-3 месяца, чтобы фиксировать заметный прогресс.',
            'Для дольщиков и инвесторов это снижает тревожность и количество повторяющихся вопросов в отдел продаж.',
            'Для digital-каналов обновления важны ещё и технически: свежие креативы поддерживают охваты и удерживают стоимость лида.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит презентационное видео жилого комплекса в Тбилиси?',
        answer: 'От 1 200 ₾ за базовый пакет до 3 500 ₾ за полный инвестиционный пакет с расширенными deliverables.',
    },
    {
        question: 'Можно ли снять видео ЖК, если дом ещё строится?',
        answer: 'Да. Снимаем ход строительства, окружение, виды с высоты и существующую инфраструктуру района.',
    },
    {
        question: 'Что входит в съёмку презентации жилого комплекса?',
        answer: 'Дрон-облёт, съёмка интерьеров и общих зон, контекст района, монтаж, цветокоррекция, музыка, титры и короткие нарезки.',
    },
    {
        question: 'За сколько дней готовится презентационное видео ЖК?',
        answer: 'Съёмка обычно занимает 1 день, постпродакшн — от 5 до 10 рабочих дней в зависимости от пакета.',
    },
    {
        question: 'Как видео помогает продавать квартиры в новостройке?',
        answer: 'Оно снимает базовые вопросы до звонка, ускоряет прогрев лида и усиливает конверсию рекламных кампаний.',
    },
    {
        question: 'Нужно ли отдельно заказывать видео для соцсетей?',
        answer: 'Нет. В пакетах Standard и Full короткие вертикальные форматы уже включены.',
    },
    {
        question: 'Какое оборудование используется для съёмки ЖК?',
        answer: 'DJI Air 3S (4K HDR), камера на стабилизаторе и беспроводные микрофоны для интервью/комментариев.',
    },
    {
        question: 'Чем презентационное видео отличается от рекламного ролика?',
        answer: 'Презентация даёт развёрнутую картину проекта, рекламный ролик решает задачу быстрого привлечения внимания.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Видео имеет смысл только после завершения стройки.',
        reality: 'Основной цикл продаж часто идёт именно в период строительства, и контент нужен уже на этом этапе.',
    },
    {
        myth: 'Профессиональное видео слишком дорого для одного проекта.',
        reality: 'Одна съёмка закрывает сразу несколько каналов и работает месяцами, снижая стоимость привлечения лида.',
    },
    {
        myth: 'Рендеров достаточно, покупатель всё понимает по 3D.',
        reality: 'Реальные кадры прогресса и окружения формируют доверие заметно сильнее, чем идеализированный рендер.',
    },
    {
        myth: 'Можно снять на телефон, качество не важно.',
        reality: 'Качество презентации напрямую влияет на восприятие качества самого проекта и готовность платить.',
    },
    {
        myth: 'Одного видео хватит на весь цикл продаж.',
        reality: 'Контент нужно обновлять по мере стройки и под разные этапы воронки, иначе охваты и вовлечённость падают.',
    },
];

const glossary: Card[] = [
    {
        title: 'Off-plan',
        text: 'Продажа квартир до завершения строительства, по проекту и рендерам.',
    },
    {
        title: 'Дрон-облёт (fly-through)',
        text: 'Съёмка с воздуха по заданному маршруту для демонстрации масштаба и окружения.',
    },
    {
        title: 'Цветокоррекция',
        text: 'Постобработка видео для единого визуального стиля, баланса цвета и контраста.',
    },
    {
        title: 'Deliverables',
        text: 'Конкретный набор финальных материалов: ролик, нарезки, исходники, форматы.',
    },
    {
        title: 'CTR (Click-Through Rate)',
        text: 'Процент людей, которые нажали на объявление после просмотра контента.',
    },
    {
        title: 'Sales toolkit',
        text: 'Пакет материалов для отдела продаж: видео, PDF, нарезки, презентационные ассеты.',
    },
];

const notFitPoints: string[] = [
    'Если вам нужен CGI/3D-рендер с нуля, а не съёмка реального объекта и окружения.',
    'Если вы ищете формат «снять за 200 ₾» без production-уровня и постпродакшна.',
    'Если вы хотите полностью директивно управлять каждым творческим решением без agreed сценария.',
    'Если вам нужен ежедневный потоковый контент вместо презентационного проектного продакшна.',
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
            name: 'Презентационное видео жилого комплекса',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Презентационное видео жилого комплекса — демо-ролик',
    description:
        'Демо-структура презентационного видео ЖК: масштаб, окружение, ход строительства и атмосфера будущей жизни для покупателей и инвесторов.',
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
    name: 'Презентационное видео жилого комплекса в Тбилиси',
    description:
        'Съёмка презентационного видео для девелоперов: дрон, интерьер, инфраструктура, монтаж и версии для сайта, соцсетей и инвестпрезентаций.',
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
        price: '1200',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: промо-видео, аэросъёмка, 360° туры, Reels и AI-визуализация для бизнеса в Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Презентационное видео ЖК в Тбилиси — съёмка для продаж и инвесторов | Breus Media',
    description:
        'Презентационное видео жилого комплекса: дрон, интерьеры, инфраструктура. Снимаем для отделов продаж и инвесторов в Тбилиси и Грузии. От 1 200 ₾.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Презентационное видео ЖК в Тбилиси — съёмка для продаж и инвесторов',
        description:
            'Видео для девелоперов: дрон, интерьеры, инфраструктура, монтаж и форматы для сайта, рекламы и инвестпрезентаций.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoResidentialComplexPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Residential Complex · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Презентационное видео жилого комплекса — съёмка для продаж и инвесторов
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Покажите масштаб, локацию и философию проекта за 2-3 минуты вместо пяти созвонов и десятка PDF.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Покупатель квартиры в новостройке принимает одно из самых дорогих решений в жизни и делает выбор по тому,
                        что видит. Если проект представлен слабыми рендерами и разрозненными фотографиями, отдел продаж тратит
                        часы на объяснения, а инвестор уходит к конкуренту с сильной упаковкой. Мы снимаем презентационные видео,
                        которые за 2-3 минуты передают масштаб комплекса, окружение, ход строительства и атмосферу будущей жизни.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку презентации ЖК
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простым языком</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Презентационное видео — это ролик 2-3 минуты, который показывает жилой комплекс с воздуха, изнутри и в
                        контексте района. Мы снимаем дроном, ручной камерой и стабилизатором, делаем монтаж с цветокоррекцией и
                        фоновой музыкой. На выходе вы получаете готовые файлы для сайта, соцсетей, презентаций инвесторам и
                        показов в офисе продаж.
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
                                <p>MP4 (H.264), 1920x1080 и 3840x2160, горизонтальный и вертикальный монтаж. По запросу — ProRes.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Съёмка — 1 день. Основной ролик — 5-7 рабочих дней. Нарезки — 2-3 дня после утверждения монтажа.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Доставка</p>
                                <p>Облачная ссылка (Google Drive / WeTransfer). Файлы хранятся 30 дней после передачи.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Хотите показать свой комплекс так, чтобы покупатель понял проект за 3 минуты без долгих объяснений?"
                buttonLabel="Обсудить съёмку презентации ЖК"
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
                        Девелоперский рынок Тбилиси продолжает расти: новые жилые комплексы одновременно выходят в Сабуртало,
                        Дигоми, Ваке, Лиси и вдоль Куры. Конкуренция за покупателя и иностранного инвестора усиливается, но
                        большинство проектов всё ещё продаются через CGI и PDF-брошюры. Профессиональное видео пока остаётся
                        редкостью, а значит даёт заметное конкурентное преимущество при том же медиабюджете. В Батуми ситуация
                        похожая: спрос со стороны СНГ и Ближнего Востока высокий, а сильного видеоконтента на рынке всё ещё мало.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример презентационного ролика</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён демо-embed формата developer showreel. На боевой версии страницы можно заменить на кейс
                        вашего текущего девелоперского проекта.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример презентационного видео жилого комплекса"
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

            <ProcessNote text="Работа с нами — спокойный и предсказуемый процесс: вы делитесь целями проекта, утверждаете сценарий и получаете финальные файлы в срок. Вопросы по технике, логистике и постпродакшну берём на себя." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                <h3 className="text-lg font-bold mb-1">Пакет {pack.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pack.subtitle}</p>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Цена от</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1 200 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2 000 ₾</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 500 ₾</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Для кого</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Быстрый обзор для сайта</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Отдел продаж и маркетинг</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Инвесторы и масштабные кампании</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Дрон-облёт 4K</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмка интерьеров и зон</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Контекст района</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Хронометраж ролика</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 2,5 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 3,5 мин</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Короткие нарезки</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 шт.</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-6 шт.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия 9:16</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Титры RU + EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Интервью</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Исходники</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Приоритетная обработка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок выдачи</td>
                                    <td className="p-3">5 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">10 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">Не уверены в выборе? Напишите нам — подберём пакет под проект и бюджет.</p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы превратить свой ЖК в проект, который покупатель понимает за 3 минуты?"
                buttonLabel="Запросить коммерческое предложение"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {internalTransitions.map((item) => (
                                <p key={item.href + item.label}>
                                    {item.intro}{' '}
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                    .
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            <Link href="/drone-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                Аэросъёмка недвижимости в Тбилиси
                            </Link>{' '}
                            — если нужны отдельные дрон-кадры для каталога.
                        </li>
                        <li>
                            <Link href="/360-tour-real-estate" className="text-[#D4A017] hover:text-white transition-colors">
                                360° виртуальный тур по недвижимости
                            </Link>{' '}
                            — интерактивный осмотр для удалённых покупателей.
                        </li>
                        <li>
                            <Link href="/drone-construction-monitoring" className="text-[#D4A017] hover:text-white transition-colors">
                                Мониторинг хода строительства с дрона
                            </Link>{' '}
                            — регулярные видеоотчёты для дольщиков.
                        </li>
                        <li>
                            <Link href="/reels-promo/promo-zhk-launch" className="text-[#D4A017] hover:text-white transition-colors">
                                Рекламный ролик для ЖК
                            </Link>{' '}
                            — короткий промо для запуска продаж и digital-рекламы.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки девелоперов в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности объекта к съёмке</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☐</span>
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
                    <h2 className="text-3xl font-bold mb-8">Кому мы НЕ подходим</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Хотите обсудить съёмку для вашего жилого комплекса? Напишите или позвоните — расскажем, что можем
                            сделать для вашего проекта, и пришлём ориентировочную стоимость в течение дня.
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
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия — работаем по всей стране</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — медиапродакшн в Тбилиси. Аэросъёмка, 360° туры, Reels, промо-видео и AI-визуализация для бизнеса в Грузии.
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

```
---
---

## /promo-video/promo-restaurant
Lines: 1317
```tsx
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

type PackageCard = {
    title: string;
    price: string;
    audience: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

type FaqItem = {
    question: string;
    answer: string;
};

type LongTailAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-restaurant';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceCards: Card[] = [
    {
        title: 'Владелец ресторана на открытии или ребрендинге',
        text: 'Нужно заявить о заведении правильно с первого месяца и сразу задать нужный тон визуальной коммуникации.',
    },
    {
        title: 'Управляющий, который общается с партнёрами и медиа',
        text: 'Нужен сильный имиджевый материал для презентаций, блогеров и деловых переговоров.',
    },
    {
        title: 'Маркетолог ресторана с контент-стратегией',
        text: 'Стратегия есть, но нет флагманского ролика, вокруг которого строится весь визуал.',
    },
    {
        title: 'Ресторан после ремонта или смены концепции',
        text: 'Старый контент больше не соответствует реальности и создаёт ошибочные ожидания у гостей.',
    },
    {
        title: 'Заведение уровня выше среднего',
        text: 'Гостевые фото и случайные Reels не передают реальный вайб, уровень сервиса и подачу.',
    },
    {
        title: 'Ресторанные группы и отельные F&B-аутлеты',
        text: 'Нужен единый стандарт визуала для нескольких точек и понятный контент-пакет под все площадки.',
    },
];

const solutionCards: Card[] = [
    {
        title: 'Формирует flagship-контент для бренда',
        text: 'Одно главное видео становится ядром всей коммуникации ресторана: сайт, соцсети, презентации, реклама.',
    },
    {
        title: 'Закрывает разрыв между офлайном и онлайном',
        text: 'Гость видит в сети ту же атмосферу, которую потом получает вживую, без разочарований и нестыковок.',
    },
    {
        title: 'Даёт универсальный материал из одной съёмки',
        text: 'Контент сразу готов для Instagram, сайта, YouTube, рекламных кабинетов и питчей партнёрам.',
    },
    {
        title: 'Работает на нужный образ до первого визита',
        text: 'Видео заранее формирует правильное впечатление у локальной аудитории, туристов и экспатов.',
    },
];

const painCards: Card[] = [
    {
        title: '«У нас нет нормального видео — только гостевые ролики на телефон»',
        text: 'Случайные видео неуправляемы: плохой свет, неудачные ракурсы и чужая логика. Имиджевое видео даёт вам контролируемую историю о ресторане.',
    },
    {
        title: '«Instagram не похож на реальный зал»',
        text: 'Когда онлайн-образ слабее реальности, часть гостей просто не доходит до бронирования или приходит с неверными ожиданиями.',
    },
    {
        title: '«Нечего показать партнёрам и блогерам»',
        text: 'Без флагманского ролика презентация выглядит сырой, даже если у вас сильная кухня, интерьер и сервис.',
    },
    {
        title: '«Реклама не работает — нет сильного креатива»',
        text: 'Таргет требует качественного визуала. Имиджевый ролик становится базовым активом для всех рекламных запусков.',
    },
    {
        title: '«Открываемся и хотим стартовать правильно»',
        text: 'Первые 2-3 месяца задают цифровую репутацию. Профессиональный ролик на старте помогает избежать хаотичного контента.',
    },
    {
        title: '«Старое видео уже устарело после обновления»',
        text: 'После ремонта или смены концепции старый ролик работает против вас и создаёт ложное восприятие заведения.',
    },
];

const earnPoints: string[] = [
    'Больше первых визитов от туристов и экспатов: сильный ролик вызывает желание прийти без долгих раздумий.',
    'Рост среднего чека: видео с фирменными блюдами и атмосферой разогревает интерес ещё до визита.',
    'Быстрее закрываются переговоры по банкетам и корпоративам: ролик продаёт зал и атмосферу за минуты.',
    'Легче договариваться о коллаборациях: медиа и блогеры охотнее работают с заведениями с качественным контентом.',
];

const avoidLossPoints: string[] = [
    'Меньше «неправильных» гостей: видео задаёт честное ожидание и снижает негатив из-за несовпадения атмосферы.',
    'Независимость от случайного контента гостей: у вас есть собственная стабильная видеовизитка.',
    'Контент остаётся в бизнесе при смене SMM-менеджера: актив не привязан к одному сотруднику.',
    'Одинаково сильный образ на всех платформах: Instagram, Google Maps, сайт и TikTok работают согласованно.',
];

const deliverables: string[] = [
    'Мастер-ролик 60-90 сек (горизонтальный, 4K, 16:9) для сайта, YouTube, Facebook и презентаций.',
    'Короткая версия 30-45 сек для Instagram и рекламы (4:5 или 9:16).',
    '3-5 обложек-скриншотов для YouTube, шапки сайта и Facebook Cover.',
    'Мини-сценарий ключевых сцен: вход, зал, бар, кухня, hero-блюда, команда, вечерний свет.',
    'Краткий гайд по использованию контента в рекламе, питчах и на площадках.',
    'Финальные файлы в разных разрешениях под каждую платформу.',
];

const useCases: Card[] = [
    {
        title: 'Открытие нового ресторана',
        text: 'Ресторан грузинской кухни в Старом Тбилиси снимает имиджевое видео за день до запуска и публикует его в день открытия, получая органический охват с первых часов.',
    },
    {
        title: 'Обновление после ремонта',
        text: 'Бистро в Ваке обновило интерьер и меню. Новая съёмка за один день синхронизирует Instagram, сайт и карты с актуальным образом.',
    },
    {
        title: 'Питч для корпоративного клиента',
        text: 'Ресторан добавляет ролик с сервировкой и атмосферой вечера в презентацию и быстрее закрывает бронь банкетного зала.',
    },
    {
        title: 'Запуск таргетированной рекламы',
        text: 'SMM-менеджер использует флагманский ролик как основной creative для Instagram и Facebook, повышая конверсию в бронирование.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Винный бар, Вера',
        text: 'После съёмки ролика с вечерним светом, сомелье и подачей вина профиль за первую неделю получил в 3 раза больше сохранений и запросы на частные мероприятия.',
    },
    {
        title: 'Ресторан грузинской кухни, Старый Тбилиси',
        text: 'Ролик использовали как embed в lifestyle-медиа перед публикацией интервью. Охват материала дал +40% новых подписчиков.',
    },
    {
        title: 'Ресторан при бутик-отеле, Батуми',
        text: 'После добавления имиджевого ролика в коммерческие предложения конверсия переговоров в бронирование выросла с 30% до 65%.',
    },
];

const socialProofBullets: string[] = [
    '61% посетителей признают, что видео в TikTok и Instagram напрямую влияет на выбор ресторана (HoReCa trends 2024).',
    'Заведения с профессиональным имиджевым контентом привлекают до 38% больше первых визитов от туристов и экспатов.',
    '94% потенциальных гостей проверяют соцсети или карты перед визитом и формируют мнение за первые 5 секунд.',
    'В Тбилиси более 2 000 заведений, и видео-визитка становится базовым стандартом для среднего и верхнего сегмента.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое имиджевое видео ресторана и чем оно отличается от обычной съёмки?',
        answer:
            'Имиджевое видео — это кинематографичный ролик 60-90 секунд, который рассказывает историю заведения через атмосферу, подачу блюд, свет и эмоцию. В отличие от репортажной съёмки, здесь выстроены ракурсы, свет, движение камеры и монтажный ритм под конкретную цель: вызвать желание прийти.',
    },
    {
        question: 'Нужно ли специально готовиться к съёмке?',
        answer:
            'Да, но минимально. Достаточно подготовить зал, выбрать 3-5 ключевых блюд в лучшей подаче и привести в порядок визуальные зоны. Перед съёмкой мы отправляем короткий чеклист на 15-20 минут подготовки.',
    },
    {
        question: 'Сколько времени занимает сама съёмка?',
        answer:
            'Обычно один визит на 4-6 часов в зависимости от масштаба заведения. Снимаем в дневное время или комбинируем день и начало вечерней смены для более богатой атмосферы.',
    },
    {
        question: 'Вы снимаете только в Тбилиси?',
        answer:
            'Тбилиси — наша база, но работаем по всей Грузии: Батуми, Кутаиси, Боржоми и горные локации. Выезды за пределы Тбилиси согласовываются отдельно.',
    },
    {
        question: 'Можно ли совместить имиджевое видео с фотосъёмкой блюд?',
        answer:
            'Частично — да. Но если нужен полноценный каталог блюд для Wolt/Glovo и сайта, лучше брать отдельную услугу съёмки интерьера и блюд. Имиджевый ролик фокусируется на атмосфере и эмоции.',
    },
    {
        question: 'Сколько ревизий включено?',
        answer:
            'В базовой логике проекта включены два раунда правок. Для расширенного пакета возможно больше итераций по согласованию до старта работ.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео ресторана?',
        answer:
            'Basic — от 600 ₾, Standard — от 1 000 ₾, Full — от 1 500 ₾. Точная цена зависит от масштаба объекта, числа форматов и сложности постпродакшна.',
    },
    {
        question: 'Есть ли предоплата?',
        answer: 'Да, 50% при подтверждении даты съёмки и 50% после передачи финальных материалов.',
    },
    {
        question: 'Как быстро будет готово видео?',
        answer:
            'Стандартный срок — 5-7 рабочих дней с момента съёмки. Срочный монтаж за 3 дня возможен за дополнительную оплату.',
    },
    {
        question: 'Мы получаем исходники?',
        answer:
            'В стандартный пакет исходники не входят. Передача RAW-файлов доступна как отдельная опция, если согласована до старта проекта.',
    },
    {
        question: 'Если нам не понравится результат — что тогда?',
        answer:
            'Перед съёмкой мы согласовываем мини-бриф и reference-видео, чтобы попасть в нужный стиль. Далее в работу включены раунды правок, которых в большинстве случаев достаточно для финального согласования.',
    },
    {
        question: 'Можно ли использовать видео в платной рекламе?',
        answer: 'Да, клиент получает права на использование контента в рекламных кампаниях.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Фокус на ресторанной нише Тбилиси',
        text: 'Понимаем, как думает локальная аудитория, туристы и экспаты, и снимаем ролики, которые реально приводят гостей.',
    },
    {
        title: 'Ориентация на бизнес-цель',
        text: 'Свет, темп, музыка и драматургия выбираются не по шаблону, а под задачу конкретного заведения.',
    },
    {
        title: 'Минимальная нагрузка на команду ресторана',
        text: 'Один выезд, чёткий план и спокойный процесс без длительных согласований и лишнего операционного стресса.',
    },
    {
        title: 'Контент сразу под все платформы',
        text: 'Горизонтальные и вертикальные версии, обложки и адаптированные файлы передаются единым пакетом.',
    },
    {
        title: 'Мы медиапродакшн, а не SMM-агентство',
        text: 'Глубоко специализируемся на визуальном контенте для бизнеса и производственном качестве материалов.',
    },
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Бриф и подготовка',
        text: 'Согласовываем концепцию, стиль, ключевые сцены и reference. Вы получаете чеклист подготовки заведения.',
    },
    {
        title: 'Шаг 2. Дата и логистика',
        text: 'Выбираем оптимальный слот по загрузке зала и свету, чтобы не мешать операционной работе.',
    },
    {
        title: 'Шаг 3. Съёмочный день',
        text: '4-6 часов съёмки: интерьер, блюда, бар, команда и детали атмосферы с минимальным вмешательством.',
    },
    {
        title: 'Шаг 4. Монтаж и цветокоррекция',
        text: '3-5 рабочих дней на черновой монтаж, ритм, цвет и финальную сборку под утверждённый стиль.',
    },
    {
        title: 'Шаг 5. Финальные правки и передача',
        text: 'Доводим финал по комментариям и передаём полный пакет файлов с гайдом по размещению.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic - Первый шаг',
        price: 'от 600 ₾',
        audience: 'Для открытия, обновления профиля или разовой имиджевой задачи',
        timeline: '7 дней',
        items: [
            '1 мастер-ролик 60-90 сек (4K, горизонталь)',
            '1 короткая версия 30-45 сек для Instagram',
            '3 обложки-скриншота',
            '1 раунд правок',
            'Передача файлов через облако',
        ],
    },
    {
        title: 'Standard - Уверенный образ',
        price: 'от 1 000 ₾',
        audience: 'Для активных заведений с соцсетями и рекламными запусками',
        timeline: '7 дней',
        featured: true,
        items: [
            'Всё из Basic',
            'Дополнительные версии под 9:16 и 4:5',
            '5 обложек-скриншотов',
            'Гайд по размещению на платформах',
            '2 раунда правок',
        ],
    },
    {
        title: 'Full - Флагманский контент',
        price: 'от 1 500 ₾',
        audience: 'Для ребрендинга, отельных ресторанов и ресторанных групп',
        timeline: '5-7 дней',
        items: [
            'Всё из Standard',
            'Съёмка в два света (день + вечер)',
            'Titling и субтитры RU/EN',
            'Расширенный пакет файлов и исходники по запросу',
            'Приоритетный монтаж и 3 раунда правок',
        ],
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимать на телефон «как есть» без подготовки',
        text: 'Даже хорошая камера не компенсирует слабую подачу, неподготовленный зал и невыстроенный свет.',
    },
    {
        title: 'Использовать одно и то же видео годами',
        text: 'После ремонта и обновлений старый ролик создаёт ложные ожидания и снижает доверие.',
    },
    {
        title: 'Делать один ролик «под всё» без адаптации',
        text: 'Сайт, Reels и реклама требуют разных форматов. Без адаптации вы теряете значимую часть охвата.',
    },
    {
        title: 'Прятать флагманский ролик в середине профиля',
        text: 'Главное видео должно быть закреплено в Instagram, на сайте и в профиле Google Business.',
    },
    {
        title: 'Снимать только блюда и игнорировать атмосферу',
        text: 'Гости выбирают не только еду, но и пространство, свет, ритм и общее ощущение от заведения.',
    },
    {
        title: 'Откладывать видео из-за нехватки времени',
        text: 'Формат рассчитан на один съёмочный визит, чтобы не тормозить операционную работу ресторана.',
    },
];

const improveWithoutPurchase: string[] = [
    'Закрепите лучшее доступное видео в Instagram, чтобы профиль не начинался со слабого фото или текста.',
    'Попросите лояльных гостей отмечать заведение в Stories и репостите лучшие кадры в актуальные.',
    'Обновите Google Maps: добавьте хотя бы 3-5 актуальных фото зала и фирменных блюд.',
    'Проверьте обложку в Wolt/Glovo: одна свежая фотография часто заметно поднимает CTR.',
    'Снимите 3-5 ключевых блюд при дневном свете у окна — это уже лучше, чем устаревшие материалы.',
];

const checklistItems: string[] = [
    'Зал убран и оформлен в обычном рабочем состоянии.',
    'Подготовлены 3-5 ключевых блюд и напитков для постановочной съёмки.',
    'Бар и стойка чистые, визуальный шум и лишние предметы убраны.',
    'Освещение работает штатно, дополнительный свет привозим мы.',
    'Команда предупреждена о съёмке, участие сотрудников в кадре — по желанию.',
    'Согласовано время: до открытия, в тихий час или после закрытия.',
    'Есть Wi-Fi или стабильный мобильный интернет для передачи материалов.',
    'Подобраны 3-5 reference-видео в похожем стиле и атмосфере.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему имиджевое видео важнее фотографии для ресторана в 2025-2026 году?',
        answer: [
            'Фотография фиксирует момент, а видео передаёт ощущение. В ленте Instagram и TikTok именно первые 5-15 секунд ролика решают, откроет ли человек профиль дальше.',
            'Платформы системно отдают приоритет видеоформату, поэтому заведения без сильного видеоконтента реже попадают в рекомендации даже при регулярных публикациях.',
            'Для Тбилиси это особенно важно: туристы и экспаты часто принимают решение быстро, иногда ещё до первого дня в городе. Видео создаёт эмоциональный кредит доверия заранее.',
        ],
    },
    {
        question: 'Из чего складывается хорошее имиджевое видео для ресторана?',
        answer: [
            'Первый элемент — свет: неправильный свет убивает подачу еды и интерьер. Второй — движение камеры: статичные планы не дают динамики атмосферы.',
            'Третий элемент — блюда в пиковой подаче, а не случайный сервисный вид. Четвёртый — монтажный ритм, который поддерживает эмоцию и темп заведения.',
            'Пятый элемент — структура истории: вход, вовлечение, кульминация и завершение. Без этого ролик превращается в хаотичный набор красивых кадров.',
        ],
    },
    {
        question: 'Как использовать имиджевое видео максимально эффективно после съёмки?',
        answer: [
            'Закрепите мастер-ролик в Instagram, разместите на главной странице сайта и добавьте в Google Business Profile. Это три ключевые точки решения гостя.',
            'Короткие версии используйте как базовый creative для таргетированной рекламы: одна съёмка может закрыть 3-5 рекламных форматов без новых затрат.',
            'Ролик также работает в продажах B2B: при переговорах с партнёрами, блогерами и корпоративными клиентами он заменяет длинные объяснения.',
        ],
    },
    {
        question: 'Что влияет на цену имиджевого видео ресторана?',
        answer: [
            'Цена зависит от масштаба съёмки: маленькое кафе и большой ресторан с баром, террасой и кухней требуют разного продакшн-времени.',
            'Второй фактор — объём версий под платформы. Третий — сложность постпродакшна: базовый монтаж или расширенный пакет с titling, субтитрами и доп. графикой.',
            'Четвёртый фактор — логистика выезда. В пределах Тбилиси базовые условия обычно включены, за пределами города расчёт индивидуальный.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит имиджевое видео ресторана в Тбилиси?',
        answer: 'В Breus Media — от 600 ₾ за базовый пакет. Standard с версиями для Reels и рекламы — от 1 000 ₾. Full со съёмкой в два света — от 1 500 ₾.',
    },
    {
        question: 'Как долго снимают имиджевое видео ресторана?',
        answer: 'Съёмка занимает 1 день (4-6 часов). Монтаж и передача — обычно 5-7 рабочих дней.',
    },
    {
        question: 'Зачем ресторану профессиональное имиджевое видео?',
        answer: 'Оно передаёт атмосферу, которую фото не передают, и помогает быстрее принять решение о визите или бронировании.',
    },
    {
        question: 'Можно ли использовать ролик в рекламе Facebook и Instagram?',
        answer: 'Да. Права на рекламное использование передаются клиенту, плюс делаем адаптации под форматы Reels и ленты.',
    },
    {
        question: 'Где ещё размещать имиджевое видео?',
        answer: 'На сайте ресторана, в Google Business Profile, на YouTube, в презентациях и партнёрских питчах.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer: 'Нет. Снимаем в тихие часы, до открытия или в начале вечерней смены, с минимальной нагрузкой на команду.',
    },
    {
        question: 'Что входит в услугу?',
        answer: 'Мастер-ролик 60-90 сек, короткая версия, обложки-скриншоты и гайд по размещению. В старших пакетах добавляются субтитры, titling и расширенные форматы.',
    },
    {
        question: 'Какие рестораны чаще заказывают такую съёмку?',
        answer: 'Чаще всего — заведения среднего и верхнего сегмента в Вере, Сололаки, Ваке и Старом Тбилиси, а также рестораны при отелях.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Хорошее видео можно снять на iPhone.',
        reality:
            'Смартфон даёт приемлемую картинку, но без постановочного света, грамотного движения камеры и продуманного монтажа результат обычно выглядит как «любительский».',
    },
    {
        myth: 'Нам не нужно видео, у нас и так хорошие отзывы.',
        reality: 'Отзывы убеждают, но видео привлекает. Новый гость принимает решение по визуалу ещё до чтения отзывов.',
    },
    {
        myth: 'Съёмка мешает работе ресторана.',
        reality: 'Съёмка занимает один визит 4-6 часов и планируется в тихие слоты, чтобы команда работала в обычном режиме.',
    },
    {
        myth: 'Видео быстро устаревает, придётся переснимать каждый год.',
        reality: 'Качественный имиджевый ролик обычно служит 1,5-3 года, пока не изменится интерьер или позиционирование.',
    },
    {
        myth: 'Сначала нужно набрать аудиторию, а потом снимать.',
        reality: 'Сильный видеоконтент как раз и ускоряет рост аудитории, поэтому откладывание замедляет развитие.',
    },
];

const glossary: Card[] = [
    {
        title: 'Hero-блюдо',
        text: 'Флагманская позиция меню, которую снимают как ключевой визуальный акцент ролика.',
    },
    {
        title: 'Мастер-ролик',
        text: 'Главная финальная версия видео (обычно 60-90 сек, 16:9), из которой делаются остальные адаптации.',
    },
    {
        title: 'Cutdown',
        text: 'Сокращённая версия ролика под конкретную площадку, например 15-30 секунд для рекламы.',
    },
    {
        title: 'Titling',
        text: 'Текстовые вставки поверх видео: название заведения, ключевые сообщения, акценты.',
    },
    {
        title: 'Reference',
        text: 'Пример видео по стилю, темпу или атмосфере, на который ориентируемся при подготовке проекта.',
    },
    {
        title: 'Color grading',
        text: 'Финальная цветокоррекция ролика под нужное настроение: тёплый/холодный тон, контраст, насыщенность.',
    },
];

const notFitPoints: string[] = [
    'Заведениям, которым нужна репортажная съёмка «просто зафиксировать процесс» без имиджевой постановки.',
    'Тем, кому требуется полноценное ежемесячное SMM-ведение аккаунтов «под ключ».',
    'Проектам с бюджетом ниже 400 ₾: ниже этого порога невозможно обеспечить качественный продакшн-уровень.',
    'Клиентам, которым нужен длинный корпоративный фильм 5-10 минут: это отдельный формат и смета.',
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
            name: 'Имиджевое видео ресторана',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Имиджевое видео ресторана — пример формата',
    description:
        'Кинематографичный ролик 60-90 секунд: атмосфера зала, подача блюд, детали кухни и вечерний вайб ресторана.',
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
    name: 'Имиджевое видео ресторана в Тбилиси',
    description:
        'Имиджевый ролик ресторана 60-90 секунд: атмосфера, интерьер, подача блюд и версии под сайт, Instagram и рекламу.',
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
        name: 'Грузия',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'GEL',
        price: '600',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: имиджевые видео, Reels, 360° туры и визуальный контент для бизнеса.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Имиджевое видео ресторана в Тбилиси — съёмка атмосферы и блюд',
    description:
        'Снимем имиджевый ролик вашего ресторана: атмосфера, подача, кухня и вайб заведения. Готово за 5–7 дней. От 600 ₾. Тбилиси и вся Грузия.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Имиджевое видео ресторана — атмосфера, свет, подача',
        description:
            'Флагманский ролик 60-90 сек для сайта, Instagram и рекламы. Один съёмочный день, готовый пакет файлов за 5-7 дней.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoRestaurantPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Restaurant · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Имиджевое видео ресторана - атмосфера, свет, подача
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Один ролик, который наконец покажет ваш ресторан таким, каким гости чувствуют его изнутри.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Ваш ресторан выглядит потрясающе вживую, но онлайн это часто незаметно. Instagram, Google Maps,
                        сайт и страница на Wolt нередко транслируют случайные гостевые фото или устаревшую съёмку,
                        которая не передаёт атмосферу и уровень заведения. Имиджевое видео 60-90 секунд меняет это:
                        свет, движение, подача и эмоция складываются в цельный образ, из-за которого гости хотят
                        вернуться снова. Breus Media снимает такие ролики в Тбилиси и по всей Грузии быстро,
                        профессионально и без лишнего стресса для команды.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить съёмку ролика
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Имиджевое видео ресторана — это короткий кинематографичный ролик 60-90 секунд, который
                        передаёт атмосферу, подчёркивает блюда и интерьер и создаёт у зрителя ощущение «хочу туда».
                        Это не прайс-лист в видеоформате и не съёмка мероприятия, а ваша визуальная визитная карточка
                        для Instagram, сайта, рекламы и партнёрских презентаций. Съёмка занимает один визит,
                        финальные материалы готовы за 5-7 дней.
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
                                <p>MP4 (4K master), сжатые версии для Instagram/TikTok, PNG-обложки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Съёмка 1 день, монтаж и цветокоррекция 3-5 рабочих дней, итог 5-7 дней.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive или WeTransfer + краткий гайд по размещению.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Хотите, чтобы люди в соцсетях наконец почувствовали, зачем приходить именно к вам?"
                buttonLabel="Обсудить съёмку ролика"
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
                    <h2 className="text-3xl font-bold mb-6">Локальный контекст Тбилиси</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Тбилиси — один из самых конкурентных ресторанных рынков Кавказа. В Сололаки, Вере, Ваке и
                        Старом Тбилиси десятки заведений конкурируют за локальных гостей, туристов из Европы и Азии,
                        экспатов и удалёнщиков. В этой среде онлайн-образ решает не меньше меню: Instagram изучают до
                        бронирования, Google Maps — перед тем, как пойти в ресторан. Заведение без флагманского видео
                        теряет часть гостей ещё на этапе первого касания.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Social Proof / доказательства</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример имиджевого видео</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        Здесь размещён embed-блок примера формата. На финальной версии можно подставить актуальный
                        кейс из вашего портфолио.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример имиджевого видео ресторана"
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

            <ProcessNote text="Весь процесс от первого контакта до готового ролика занимает 7-10 рабочих дней: 1-2 дня на бриф и подготовку, 1 день съёмки, 5-7 дней монтажа и согласования." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 600₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 1 000₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1 500₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Мастер-ролик 60-90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Версия для Reels (9:16)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Версия для ленты (4:5)</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Обложки-скриншоты</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 шт.</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5 шт.</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5+ шт.</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмка в два света</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Titling / субтитры RU+EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Гайд по размещению</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Раунды правок</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок готовности</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">5-7 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            <li>Открываетесь или нужно одно видео под конкретную задачу — выбирайте Basic.</li>
                            <li>Ведёте соцсети и рекламу, нужны версии под разные форматы — Standard.</li>
                            <li>Ребрендинг, отельный ресторан или группа заведений — Full.</li>
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не уверены? Напишите нам, подберём пакет за 10 минут разговора: {CONTACT_PHONE}.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы снять видео, которое наконец передаст вайб вашего ресторана? Оставьте заявку — обсудим формат, сроки и стоимость."
                buttonLabel="Оставить заявку на съёмку"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            <li>
                                <Link href="/reels-promo/reels-restaurant" className="text-[#D4A017] hover:text-white transition-colors">
                                    Reels для ресторана
                                </Link>{' '}
                                — серия вертикальных роликов для Instagram и TikTok.
                            </li>
                            <li>
                                <Link
                                    href="/promo-video/restaurant-interior-food"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    Съёмка интерьера и блюд
                                </Link>{' '}
                                — фотобиблиотека под Wolt, Glovo, Google Maps, меню и сайт.
                            </li>
                            <li>
                                <Link href="/360-tour-restaurants" className="text-[#D4A017] hover:text-white transition-colors">
                                    360° тур по ресторану
                                </Link>{' '}
                                — виртуальная прогулка по залу с интеграцией на сайт и карты.
                            </li>
                            <li>
                                <Link
                                    href="/reels-promo/restaurant-content-pack"
                                    className="text-[#D4A017] hover:text-white transition-colors"
                                >
                                    Контент-пакет на месяц
                                </Link>{' '}
                                — регулярная съёмка и контент-план для стабильной активности.
                            </li>
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Нужна не только атмосфера, но и контент для доставки и сайта? Перейдите в{' '}
                            <Link
                                href="/promo-video/restaurant-interior-food"
                                className="text-[#D4A017] hover:text-white transition-colors"
                            >
                                съёмку интерьера и блюд
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed mb-3">
                            Хотите регулярный поток видео без ежемесячных согласований? Посмотрите{' '}
                            <Link
                                href="/reels-promo/restaurant-content-pack"
                                className="text-[#D4A017] hover:text-white transition-colors"
                            >
                                контент-пакет для ресторана
                            </Link>
                            .
                        </p>
                        <p className="text-sm text-white/75 leading-relaxed">
                            Нужен комплексный выезд (видео + фото + Reels)? Напишите в{' '}
                            <a href={WHATSAPP_HREF} className="text-[#D4A017] hover:text-white transition-colors">
                                WhatsApp
                            </a>{' '}
                            и соберём пакет под ваш формат.
                        </p>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки ресторанов в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности к съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            Примеры имиджевых видео ресторанов:{' '}
                            <a
                                href="https://breus.media/portfolio/restaurants"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#D4A017] hover:text-white transition-colors"
                            >
                                breus.media/portfolio/restaurants
                            </a>
                        </li>
                        <li>
                            Гайд по подготовке к съёмке (PDF):{' '}
                            <a
                                href="https://breus.media/guides/restaurant-shooting-checklist"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#D4A017] hover:text-white transition-colors"
                            >
                                breus.media/guides/restaurant-shooting-checklist
                            </a>
                        </li>
                        <li>
                            Статья «5 причин, почему ресторану нужен флагманский ролик»:{' '}
                            <a
                                href="https://breus.media/blog/why-restaurants-need-image-video"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#D4A017] hover:text-white transition-colors"
                            >
                                breus.media/blog/why-restaurants-need-image-video
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
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

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем в Тбилиси и по всей Грузии. Чтобы обсудить съёмку, напишите в WhatsApp или
                            позвоните: {CONTACT_PHONE}. Ответим в течение нескольких часов и предложим удобное время
                            для созвона или выезда на объект.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — медиапродакшн в Тбилиси. Имиджевые видео, Reels, 360° туры и AI-контент для
                        ресторанов и бизнеса в Грузии. Съёмка от 1 дня, результат от 5 дней.
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

```
---
---

## /promo-video/promo-tourism-route
Lines: 1208
```tsx
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
    subtitle: string;
    timeline: string;
    items: string[];
    featured?: boolean;
};

const CANONICAL_URL = 'https://breus.media/promo-video/promo-tourism-route';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';
const VIDEO_EMBED_URL = 'https://www.youtube.com/embed/M7lc1UVf-VE';
const VIDEO_PAGE_URL = 'https://www.youtube.com/watch?v=M7lc1UVf-VE';
const VIDEO_THUMBNAIL_URL = 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg';

const audienceItems: string[] = [
    'Туроператорам с авторскими маршрутами по Грузии: Казбеги, Кахетия, Сванетия.',
    'Гидам, строящим личный бренд и продающим туры напрямую без агрегаторов.',
    'Организаторам джип-туров, треккинговых и рафтинг-маршрутов.',
    'Нишевым проектам: гастро-экспедиции, ретриты, эко-туры.',
    'Inbound-операторам, привлекающим гостей из Европы, США и ОАЭ.',
    'Туристическим агентствам, желающим отстроиться от массового рынка.',
];

const solutionPoints: string[] = [
    'Снижает страх туристической ловушки: гость видит реальный маршрут, а не рекламные обещания.',
    'Заменяет 20+ однотипных вопросов в мессенджерах: транспорт, еда, физическая нагрузка, погода.',
    'Создаёт визуальный аргумент для обоснования более высокой цены тура.',
    'Работает на сайте, маркетплейсах (Viator, GetYourGuide), в рекламе и у партнёров одновременно.',
];

const painCards: Card[] = [
    {
        title: 'Клиенты спрашивают, но не бронируют',
        text: 'Много запросов в WhatsApp, но конверсия низкая: люди не уверены в том, что получат. Визуал снимает этот барьер.',
    },
    {
        title: 'Невозможно объяснить уникальность текстом',
        text: 'У вас авторский маршрут, скрытые локации, особая атмосфера, но в описании это выглядит как у всех. Видео показывает разницу.',
    },
    {
        title: 'Давление агрегаторов с 20%+ комиссией',
        text: 'Зависимость от Viator и Expedia дорого обходится. Своё видео даёт инструмент для прямых продаж.',
    },
    {
        title: 'Сезонный провал в бронированиях',
        text: 'Межсезонье убивает загрузку. Видеогид под каждый сезон помогает продавать туры заранее.',
    },
    {
        title: 'Конкуренты снижают цену, и сложно обосновать свой чек',
        text: 'Качественный контент помогает аргументировать стоимость выше рынка без скидок.',
    },
    {
        title: 'Нет времени и навыков делать видео самому',
        text: 'Вы занимаетесь турами, не монтажом. Мы берём на себя весь продакшн: от сценария до готового файла.',
    },
];

const earnPoints: string[] = [
    'Повышает конверсию: посмотрел видео и забронировал, без лишних вопросов.',
    'Даёт аргумент для повышения цены тура на 30-50% за счёт образа премиум-маршрута.',
    'Открывает прямой канал продаж, снижая зависимость от агрегаторов.',
    'Привлекает платёжеспособную аудиторию из Европы и ОАЭ, которая делает выбор по визуалу.',
];

const avoidLossPoints: string[] = [
    'Снижает количество возвратов и негативных отзывов: гость заранее знает, на что идёт.',
    'Экономит время менеджера, потому что видео автоматически отвечает на типовые вопросы.',
    'Защищает от претензий в стиле нам не сказали: прозрачный маршрут снимает спорные ожидания.',
    'Контент живёт годами и продолжает работать без дополнительных вложений.',
];

const deliverables: string[] = [
    'Главный маршрутный фильм 5-15 минут (16:9) для сайта и YouTube.',
    'Версия 60-90 секунд для рекламы и маркетплейсов.',
    'Вертикальная версия 9:16 для Instagram и TikTok.',
    'B-roll: отдельные сцены локаций, транспорта, еды для соцсетей.',
    'Субтитры на русском и английском языках.',
    'Музыкальное оформление и цветокоррекция.',
    'Финальный монтаж в двух форматах: для онлайн-размещения и для загрузки партнёрам.',
    'Рекомендации по размещению и SEO-описание для YouTube/сайта.',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1: Флагманский маршрут',
        text: 'Туроператор с маршрутом Казбеги за день размещает видеогид на сайте и в карточке Viator. Конверсия растёт, потому что гость видит реальный транспорт, виды и гида.',
    },
    {
        title: 'Сценарий 2: Отстройка от масс-рынка',
        text: 'Авторский гид с нишевым маршрутом по Кахетии добавляет видеогид в рассылку и Instagram Bio. Клиенты сами пишут уже посмотрел, хочу записаться.',
    },
    {
        title: 'Сценарий 3: Привлечение иностранцев',
        text: 'Inbound-оператор использует видео с английскими субтитрами для Google Ads и туристических блогов. Трафик из Европы и ОАЭ приходит уже тёплым.',
    },
    {
        title: 'Сценарий 4: Партнёрские продажи',
        text: 'Маршрутный фильм передаётся турагентствам и отелям как материал для рекомендаций. Партнёры охотнее продают тур, когда есть что показать.',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1: Джип-тур по Казбеги',
        text: 'После добавления видеогида на страницу бронирования выросло среднее время на странице, а количество уточняющих вопросов снизилось примерно на 60%.',
    },
    {
        title: 'Кейс 2: Гастро-тур по Кахетии',
        text: 'Тур Вино и деревни Кахетии получил видеогид с акцентом на локальных виноделов и кухню, что принесло 12 прямых бронирований без рекламного бюджета.',
    },
    {
        title: 'Кейс 3: Культурный маршрут по Тбилиси',
        text: 'Гид-историк использует видеогид как визитную карточку в переписке с корпоративными клиентами и получает более высокую конверсию из первого контакта в договор.',
    },
];

const socialProofBullets: string[] = [
    'Работаем в Грузии и знаем локации, сезоны, логистику и визуальный язык каждого региона.',
    'DJI Air 3S + Insta360: профессиональный набор для маршрутных съёмок.',
    'Производим контент на русском и английском, учитывая обе аудитории.',
    'Есть опыт с туристическими проектами: от авторских гидов до inbound-операторов.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Зачем видеогид, если у меня уже есть фотографии маршрута?',
        answer:
            'Фото показывают точки, а видео показывает опыт. Гость видит движение, атмосферу, темп и людей, поэтому принимает решение быстрее и увереннее.',
    },
    {
        question: 'Нужно ли мне самому участвовать в съёмке?',
        answer:
            'Необязательно. Мы можем снимать маршрут с вашим гидом, с группой или самостоятельно. Ваше присутствие в кадре — опция.',
    },
    {
        question: 'Для каких платформ подойдёт видео?',
        answer:
            'Делаем несколько форматов: горизонтальный для сайта/YouTube, вертикальный для Reels и TikTok, короткие версии для рекламы и маркетплейсов.',
    },
    {
        question: 'Как долго занимает производство?',
        answer:
            'Обычно от 7 до 14 рабочих дней: съёмка, монтаж, согласование и передача финальных файлов.',
    },
    {
        question: 'Мой маршрут работает только летом. Стоит ли вкладываться в видео?',
        answer:
            'Да. Летний видеогид продаёт бронирования заранее, когда туристы планируют поездки в апреле-мае. Контент работает и в межсезонье.',
    },
    {
        question: 'Смогу ли я обновлять видео потом?',
        answer:
            'Да. Передаём финальный материал, а при изменениях маршрута можем сделать дополнительный выезд или точечное обновление монтажа.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит видеогид по маршруту?',
        answer:
            'От 800 ₾ за базовый формат одного маршрута. Цена зависит от длины маршрута, количества форматов и дополнительных опций.',
    },
    {
        question: 'Что входит в базовую стоимость?',
        answer:
            'Съёмка в один день, монтаж главного фильма до 10 минут и короткой версии для рекламы, субтитры на одном языке и цветокоррекция.',
    },
    {
        question: 'Есть ли скрытые доплаты?',
        answer:
            'Нет. Стоимость фиксируем в брифе до старта. Доплаты возможны только за новые задачи, о которых не договаривались изначально.',
    },
    {
        question: 'Можно заказать сразу несколько маршрутов?',
        answer:
            'Да. Это выгоднее: снимаем несколько маршрутов в рамках одного проекта со скидкой на каждый следующий.',
    },
    {
        question: 'Кому принадлежат права на видео?',
        answer:
            'Права на использование передаются вам. Мы можем показывать кейс в портфолио только по согласованию.',
    },
    {
        question: 'Как проходит оплата?',
        answer: '50% предоплата до съёмки и 50% после финального согласования. Принимаем ₾, USD и EUR.',
    },
];

const whyUsPoints: string[] = [
    'Мы в Грузии и знаем локации изнутри: от Старого Тбилиси до горных дорог Сванетии.',
    'Полный цикл производства: сценарий, съёмка (включая дрон), монтаж, субтитры, форматирование.',
    'Работаем на двух языках: контент сразу готов для русскоязычной и международной аудитории.',
    'Понимаем задачи турбизнеса и фокусируемся на результате в бронированиях.',
    'Быстрые сроки: 5-10 рабочих дней от съёмки до финальных файлов.',
];

const processSteps: Card[] = [
    {
        title: 'Шаг 1. Заявка и разбор маршрута',
        text: 'Бесплатный звонок/встреча: обсуждаем задачу, позиционирование и структуру видеогида.',
    },
    {
        title: 'Шаг 2. Бриф и сценарий',
        text: 'Фиксируем ключевые точки, тайминг, акценты и согласуем сценарный план до выезда.',
    },
    {
        title: 'Шаг 3. Съёмка',
        text: 'Выезд по маршруту 1-2 дня: снимаем транспорт, локации, активности, еду, атмосферу и финал тура.',
    },
    {
        title: 'Шаг 4. Монтаж и согласование',
        text: 'Передаём черновой монтаж, собираем обратную связь и вносим до двух раундов правок.',
    },
    {
        title: 'Шаг 5. Финальная передача',
        text: 'Отдаём все форматы через облако и даём рекомендации по размещению на каналах продаж.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic',
        price: 'от 800 ₾',
        subtitle: 'Один рабочий видеогид для сайта и WhatsApp',
        timeline: '5-10 рабочих дней после съёмки',
        items: [
            'Съёмка маршрута 1 день.',
            'Главный фильм до 10 минут (16:9).',
            'Короткая версия 60 секунд для рекламы.',
            'Субтитры RU.',
            'Монтаж и цветокоррекция.',
        ],
    },
    {
        title: 'Standard',
        price: 'от 1 400 ₾',
        subtitle: 'Для охвата сайта, соцсетей и иностранной аудитории',
        timeline: '5-10 рабочих дней после съёмки',
        featured: true,
        items: [
            'Съёмка маршрута 1-2 дня.',
            'Аэросъёмка (DJI Air 3S).',
            'Главный фильм до 15 минут + короткая версия.',
            'Вертикальная версия 9:16.',
            'Субтитры RU/EN.',
            'Музыка, цветокоррекция, монтаж.',
        ],
    },
    {
        title: 'Full',
        price: 'от 2 200 ₾',
        subtitle: 'Полная упаковка флагманского маршрута под все каналы',
        timeline: 'Приоритетные сроки',
        items: [
            'Всё из Standard.',
            '3 коротких клипа для соцсетей.',
            'Reels-версия + b-roll пакет (20+ сцен).',
            'Субтитры RU/EN/GE.',
            'SEO-описание для YouTube и рекомендации по публикации.',
        ],
    },
];

const packageHelper: string[] = [
    'Basic: если нужен один рабочий видеогид для сайта и WhatsApp без лишних форматов.',
    'Standard: если важны сайт, соцсети и иностранные туристы (дрон + вертикаль + EN-субтитры).',
    'Full: если маршрут ваш флагман и нужен полный контент-пакет для всех каналов.',
];

const relatedServices = [
    {
        href: '/reels-service',
        label: 'Reels для туристического проекта',
        description: 'Короткий контент для соцсетей и алгоритмов продвижения.',
    },
    {
        href: '/promo-video-service',
        label: 'Промо-ролик для экскурсии',
        description: 'Сфокусированное видео под конкретную активность или программу.',
    },
    {
        href: '/tourism-service',
        label: 'AI-упаковка туристических предложений',
        description: 'Тексты и описания маршрутов для сайта, карточек и рекламы.',
    },
    {
        href: '/drone-hotels-tourism',
        label: 'Аэросъёмка для туристического бизнеса',
        description: 'Виды маршрута с воздуха для усиления визуальной ценности продукта.',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Ошибка 1: Только текст и фото',
        text: 'По картинкам турист не чувствует маршрут. Видео создаёт эффект присутствия и снимает страх неизвестности.',
    },
    {
        title: 'Ошибка 2: Одно видео на все каналы',
        text: 'Один и тот же длинный ролик не работает везде одинаково. Нужны форматы под платформу и цель.',
    },
    {
        title: 'Ошибка 3: Нет субтитров',
        text: 'Большинство видео в соцсетях смотрят без звука. Без субтитров теряется значительная часть аудитории.',
    },
    {
        title: 'Ошибка 4: Снимают достопримечательности, а не опыт',
        text: 'Гостей интересует не только место, но и то, что они будут делать: люди, еда, эмоции, темп маршрута.',
    },
    {
        title: 'Ошибка 5: Нет чёткого призыва к действию',
        text: 'Видео заканчивается, и зритель не понимает, что делать дальше. Нужен конкретный следующий шаг.',
    },
    {
        title: 'Ошибка 6: Видео снимается один раз и забывается',
        text: 'Маршруты меняются и контент устаревает. Обновляйте видеогид минимум раз в год.',
    },
];

const improveWithoutPurchase: string[] = [
    'Добавьте на страницу бронирования хотя бы 30-секундное видео с телефона — это лучше, чем ничего.',
    'Укажите конкретные цифры в описании маршрута: 6 часов, 3 остановки, 1 дегустация — это снижает тревогу.',
    'Снимите вертикальное видео на ближайшем выезде и опубликуйте в Stories.',
    'Попросите гостей снять момент на маршруте и отметить вас: user-generated контент усиливает доверие.',
    'Добавьте в WhatsApp-переписку фото или видео с реального маршрута, чтобы быстрее закрывать запросы.',
];

const checklistItems: string[] = [
    'Определены ключевые точки маршрута: 3-7 обязательных остановок.',
    'Понятно, что показывать на каждой точке: пейзаж, активность, еда, эмоция.',
    'Определена целевая аудитория: русскоязычные, иностранцы, семьи, молодёжь.',
    'Определены форматы: сайт, Instagram, маркетплейсы, реклама.',
    'Понятен сезон съёмки: лето/осень/зима влияют на свет и атмосферу.',
    'Есть гид или сотрудник, который будет на съёмке (или мы снимаем самостоятельно).',
    'Согласован бюджет и примерные сроки.',
    'Запланирован хотя бы один реальный выезд группы для съёмки живого тура.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Чем видеогид отличается от обычного рекламного ролика?',
        answer: [
            'Видеогид по маршруту — это образовательно-продающий формат, а не просто промо.',
            'Его задача провести зрителя по маршруту шаг за шагом, чтобы он понял, что его ждёт в поездке.',
            'Рекламный ролик в первую очередь работает на эмоцию и охват, а видеогид — на доверие и конверсию.',
        ],
    },
    {
        question: 'Как правильно использовать видеогид для увеличения продаж?',
        answer: [
            'Разместите видео на странице бронирования рядом с кнопкой Забронировать.',
            'Отправляйте ссылку в WhatsApp всем, кто запрашивает детали, и добавьте ролик в карточки Viator/GetYourGuide.',
            'Используйте короткие версии в рекламе и делитесь ими с партнёрами: отелями, турагентствами и блогами.',
        ],
    },
    {
        question: 'Нужен ли видеогид, если уже есть красивый Instagram с фото?',
        answer: [
            'Фото в Instagram дают эстетику и узнаваемость, но не отвечают на вопрос как именно пройдёт день туриста.',
            'Видеогид показывает последовательность маршрута, детали логистики и атмосферу в динамике.',
            'Связка хорошего Instagram и маршрутного видеогида обычно даёт лучший результат, чем любой из форматов по отдельности.',
        ],
    },
    {
        question: 'Как видеогид помогает в межсезонье?',
        answer: [
            'В межсезонье туристы активно планируют поездки заранее, и именно тогда видео формирует выбор.',
            'Размещение видеогида в феврале-марте может приносить бронирования на май-июнь.',
            'Отдельные сезонные версии маршрута (например, зима в Казбеги) помогают продавать то, что конкуренты не упаковали визуально.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Что такое видеогид по туристическому маршруту?',
        answer: 'Это профессиональный фильм 5-15 минут, который показывает весь маршрут: транспорт, локации, еду и активности до бронирования.',
    },
    {
        question: 'Сколько стоит видеогид по маршруту в Тбилиси?',
        answer: 'От 800 ₾ за базовый формат. Полный пакет с дроном, несколькими форматами и субтитрами RU/EN — от 2 200 ₾.',
    },
    {
        question: 'Для кого нужен видеогид по маршруту?',
        answer: 'Для туроператоров, авторских гидов и организаторов нишевых туров, которые хотят выше конверсию и больше прямых продаж.',
    },
    {
        question: 'Сколько времени занимает производство видеогида?',
        answer: 'Обычно 7-14 рабочих дней от съёмки до финальной передачи файлов.',
    },
    {
        question: 'Помогает ли видеогид привлекать иностранных туристов?',
        answer: 'Да. Версии с английскими субтитрами хорошо работают для аудитории из Европы, США, ОАЭ и других стран.',
    },
    {
        question: 'Можно ли использовать видеогид на маркетплейсах туров?',
        answer: 'Да, делаем короткие версии для Viator, GetYourGuide и других платформ.',
    },
    {
        question: 'Где снимает Breus Media?',
        answer: 'В Тбилиси и по всей Грузии: Казбеги, Кахетия, Боржоми, Батуми, Сванетия, Местиа и другие регионы.',
    },
    {
        question: 'Что входит в видеогид по маршруту?',
        answer: 'Главный фильм, короткая рекламная версия, вертикальный формат, субтитры, цветокоррекция и музыкальное оформление.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Видео нужно только крупным операторам.',
        reality:
            'Авторские гиды с небольшими группами часто выигрывают от видео даже больше, потому что их ценность сложнее объяснить текстом.',
    },
    {
        myth: 'Достаточно снять всё на телефон.',
        reality:
            'Телефон подходит для Stories, но редко формирует доверие к туру стоимостью 800-2000 ₾.',
    },
    {
        myth: 'Видео работает только на молодёжь.',
        reality:
            'Аудитория 40+ тоже активно использует YouTube и видео при выборе поездок. Важнее платформа и подача, а не возраст сам по себе.',
    },
    {
        myth: 'У нас нет красивых локаций для съёмки.',
        reality:
            'Для продаж важны не только виды: людей, еду, атмосферу и ощущения путешествия можно раскрыть почти на любом маршруте.',
    },
    {
        myth: 'Видео быстро устаревает.',
        reality:
            'Качественно снятый видеогид обычно служит 2-4 года, а обновления требуются только при заметных изменениях маршрута.',
    },
];

const glossary: Card[] = [
    {
        title: 'Видеогид (Route Video Guide)',
        text: 'Маршрутный фильм, который проводит зрителя по туру от начала до конца и снимает страх неизвестности.',
    },
    {
        title: 'B-roll',
        text: 'Дополнительные кадры локаций, деталей и атмосферы без основного действия для монтажа и коротких форматов.',
    },
    {
        title: 'Вертикальный формат (9:16)',
        text: 'Формат для мобильного просмотра: Instagram Reels, TikTok и YouTube Shorts.',
    },
    {
        title: 'Субтитры (SRT)',
        text: 'Текстовые подписи к видео, критически важные для просмотра без звука и для международной аудитории.',
    },
    {
        title: 'Inbound-туризм',
        text: 'Поток туристов, приезжающих в Грузию из-за рубежа; обычно это более платёжеспособный сегмент.',
    },
    {
        title: 'Конверсия',
        text: 'Доля людей, которые после просмотра видео или посещения страницы реально бронируют тур.',
    },
];

const notFitPoints: string[] = [
    'Операторам масс-маркета с ценами 30-50 ₾ на человека: формат может не окупиться.',
    'Тем, кто ищет максимально быстро и дёшево без понятной бизнес-задачи.',
    'Компаниям без реально работающего маршрута и реальных групп.',
    'Тем, кто не готов участвовать в согласовании материалов и давать обратную связь.',
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
            name: 'Видеогид по туристическому маршруту',
            item: CANONICAL_URL,
        },
    ],
};

const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Видеогид по туристическому маршруту в Грузии',
    description:
        'Маршрутный фильм для туроператоров: транспорт, локации, остановки, еда, активности. Форматы для сайта, маркетплейсов и соцсетей.',
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
    name: 'Видеогид по туристическому маршруту в Грузии',
    description:
        'Профессиональный видеогид 5-15 минут для туроператоров: съёмка маршрута, монтаж, версии для рекламы и соцсетей, субтитры RU/EN.',
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
        price: '800',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Breus Media — медиапродакшн в Тбилиси: видеогиды по маршрутам, Reels, 360° туры и AI-контент для турбизнеса.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси и вся Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Видеогид по маршруту Грузия | Промо для туров — Breus Media',
    description:
        'Профессиональный видеогид по туристическому маршруту в Грузии. Казбеги, Кахетия, Батуми. От 800 ₾. Повышает конверсию в бронирования. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Видеогид по маршруту Грузия | Промо для туров — Breus Media',
        description:
            'Покажите маршрут до бронирования: транспорт, пейзажи, остановки и атмосферу. Видеогид для турбизнеса с фокусом на конверсию.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function PromoTourismRoutePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пример видео', href: '#examples' },
                    { label: 'Тарифы', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Tourism Routes · Georgia
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Видеогид по туристическому маршруту — промо для турбизнеса
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Покажите маршрут до бронирования, и гости придут уже подготовленными.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Туристы бронируют не маршрут, а уверенность в том, что день пройдёт именно так, как обещано. Видеогид
                        превращает абстрактное описание тура в конкретный визуальный опыт: транспорт, пейзажи, остановки, еда и
                        атмосфера становятся понятны до отъезда. Это инструмент продаж, который работает круглосуточно на сайте,
                        в WhatsApp, на маркетплейсах и в рекламных кампаниях. Breus Media производит видеогиды по маршрутам
                        Грузии: Казбеги, Кахетия, Боржоми, Местиа — с фокусом на доверие и конверсию в бронирование.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Обсудить видеогид для маршрута
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть тарифы
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что такое видеогид по маршруту?</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Видеогид — это профессиональный маршрутный фильм длиной 5-15 минут, который проводит зрителя по ключевым
                        точкам тура: старт, транспорт, пейзажи, остановки, еда, активности и возвращение. Он закрывает до 80%
                        вопросов клиента ещё до диалога в WhatsApp. Результат: больше уверенных бронирований, меньше переписки в
                        стиле а что там будет и более высокий средний чек за счёт видимого качества маршрута.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит видеогид по маршруту?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {audienceItems.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Задачи, которые решает видеогид</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {solutionPoints.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Боли туроператора, которые мы понимаем</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как видеогид помогает зарабатывать больше</h2>
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
                        <h2 className="text-2xl font-bold mb-5">Как видеогид помогает не терять деньги</h2>
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
                        <h2 className="text-3xl font-bold mb-6">Что входит в видеогид по маршруту?</h2>
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
                        <h3 className="text-xl font-bold mb-4">Сроки и форматы</h3>
                        <div className="space-y-4 text-sm text-white/75 leading-relaxed">
                            <div>
                                <p className="font-semibold text-white">Сроки</p>
                                <p>Готовый видеогид в течение 5-10 рабочих дней после съёмки.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Форматы</p>
                                <p>MP4 (H.264, 1080p/4K), соотношения 16:9 и 9:16, плюс SRT-субтитры.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Все файлы передаются через облако.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Права</p>
                                <p>Полные права на использование — без ограничений.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Ваш маршрут заслуживает видео, которое продаёт. Оставьте заявку: разберём ваш тур и предложим структуру видеогида бесплатно."
                buttonLabel="Обсудить видеогид для маршрута"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Как туроператоры используют видеогид</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Туризм в Грузии: контекст рынка</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Грузия принимает миллионы туристов в год, и конкуренция между туроператорами растёт с каждым сезоном.
                        Маршруты по Казбеги, Военно-Грузинской дороге, Кахетии и Батуми предлагают десятки компаний, но их
                        описания часто неотличимы. Видеогид становится фактором выбора: путешественник, который прошёл маршрут на
                        экране, бронирует с большей уверенностью. Мы снимаем в Тбилиси, Казбеги, Сигнахи, Боржоми, Батуми и других
                        точках Грузии с учётом местного света, сезонности и визуальных кодов международной аудитории.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры</h2>
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
                    <h2 className="text-3xl font-bold mb-6">Почему нам доверяют</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Пример видеогида</h2>
                    <p className="text-white/70 mb-8 max-w-3xl leading-relaxed">
                        На странице размещается embed готового видеогида по маршруту. Сейчас установлен технический демо-плейсхолдер
                        до публикации финального кейса.
                    </p>
                    <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                        <div className="aspect-video rounded-[12px] overflow-hidden border border-[#2a2a2a] bg-black">
                            <iframe
                                src={VIDEO_EMBED_URL}
                                title="Пример видеогида по маршруту"
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

            <FaqSection items={beginnerFaqItems} title="Частые вопросы (для тех, кто пока не делал видео)" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы про стоимость и процесс"
                variant="commercial"
                id="faq"
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Почему Breus Media?</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {whyUsPoints.map((item) => (
                            <article key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Начинаем с бесплатного разбора маршрута, фиксируем бриф и сценарий до выезда, снимаем за 1-2 дня, монтируем, согласуем и передаём финал без неожиданностей." />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">5 шагов от заявки до готового видеогида</h2>
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
                    <h2 className="text-3xl font-bold mb-10">Тарифы на видеогид по маршруту</h2>
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
                                <h3 className="text-lg font-bold mb-1">Пакет {pack.title}</h3>
                                <p className="text-sm text-white/70 mb-2">{pack.subtitle}</p>
                                <p className="text-3xl font-bold text-[#D4A017] mb-3">{pack.price}</p>
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

                    <h3 className="text-xl font-bold mb-4">Сравнение пакетов</h3>
                    <div className="overflow-x-auto rounded-[12px] border border-[#2a2a2a]">
                        <table className="w-full text-sm min-w-[760px]">
                            <thead className="bg-[#141414]">
                                <tr>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Что входит</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Главный фильм 16:9</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 10 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 15 мин</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">до 15 мин</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Короткая версия для рекламы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">60-90 сек</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Вертикальная версия 9:16</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Аэросъёмка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Субтитры</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">RU/EN/GE</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Дополнительные клипы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3 клипа + b-roll</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Цена</td>
                                    <td className="p-3">от 800 ₾</td>
                                    <td className="p-3">от 1 400 ₾</td>
                                    <td className="p-3">от 2 200 ₾</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Какой пакет выбрать?</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">Не уверены? Напишите нам — подберём решение под задачу и бюджет.</p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Готовы показать ваш маршрут так, чтобы он продавал себя сам? Напишите нам: обсудим структуру видеогида и сделаем расчёт под ваш тур."
                buttonLabel="Получить расчёт стоимости"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Смежные услуги</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Кому мы не подходим</h2>
                        <ul className="space-y-3 text-sm text-white/75">
                            {notFitPoints.map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="text-[#D4A017]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">6 ошибок, которые мешают вашему туру продаваться</h2>
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
                    <h2 className="text-3xl font-bold mb-8">5 вещей, которые вы можете сделать прямо сейчас</h2>
                    <ol className="space-y-4 text-sm text-white/75 leading-relaxed list-decimal list-inside">
                        {improveWithoutPurchase.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Чеклист: готов ли ваш маршрут к видеосъёмке?</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {checklistItems.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">☐</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Расширенные ответы на важные вопросы</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Короткие ответы для поиска</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Мифы о видеогидах для туров</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Словарь терминов</h2>
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Свяжитесь с нами, обсудим ваш маршрут и подберём формат видеогида. Работаем в Тбилиси и по всей
                            Грузии.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                            <a
                                href="https://breus.media"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                breus.media
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — медиапродакшн в Тбилиси, Грузия. Видеогиды по маршрутам, Reels, 360° туры и AI-контент для
                        туристического бизнеса. {CONTACT_PHONE}
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

```
---
---

## /promo-video/restaurant-interior-food
Lines: 1260
```tsx
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

const CANONICAL_URL = 'https://breus.media/promo-video/restaurant-interior-food';
const CONTACT_PHONE = '+995 574 619 393';
const CONTACT_PHONE_PLAIN = '+995574619393';
const WHATSAPP_HREF = 'https://wa.me/995574619393';

const audienceItems: string[] = [
    'Владелец ресторана, у которого нет актуальных профессиональных фото блюд и зала.',
    'Маркетолог, которому нужна единая визуальная база для всех каналов коммуникации.',
    'Ресторан, выходящий на delivery-платформы (Wolt, Glovo) или обновляющий профили на них.',
    'Заведение с новым меню или обновлённым интерьером — нужно зафиксировать и показать изменения.',
    'Отельный ресторан или F&B-аутлет, которому нужны материалы для сайта отеля и booking-платформ.',
    'Заведения, готовящиеся к открытию нового сезона или ребрендингу.',
];

const solutionPoints: string[] = [
    'Создаёт «базу» — единую визуальную библиотеку, из которой черпает весь контент: SMM, delivery, меню, сайт.',
    'Устраняет разрыв между реальным качеством блюд и тем, как они выглядят на платформах доставки.',
    'Даёт материал для всех платформ за один день — без необходимости переснимать «под каждый формат».',
    'Закрывает хроническую проблему «нечем обновить профиль» — контента хватает на 2-3 месяца.',
];

const painCards: Card[] = [
    {
        title: '«Фото на Wolt — стыдно показывать. Гости видят совсем не то, что получают»',
        text: 'Плохое фото блюда = меньше кликов = меньше заказов. На delivery-платформах фото — это единственный способ «продать» блюдо. Хорошая съёмка окупается с первых недель.',
    },
    {
        title: '«У нас нет нормальных фото зала — только то, что гости выложили в Instagram»',
        text: 'Гостевые фото непредсказуемы: неудачный ракурс, плохой свет, тарелки с едой у края кадра. Профессиональная интерьерная съёмка — это контроль над тем, как вас видят потенциальные гости.',
    },
    {
        title: '«SMM спрашивает фото для поста — и мы каждый раз ищем что-то в телефонах»',
        text: 'Без структурированной библиотеки контент-планирование превращается в хаос. Разложенная по папкам библиотека — это порядок и скорость.',
    },
    {
        title: '«Google Maps — три фото 2021 года и пять гостевых снимков»',
        text: 'Google Business Profile с хорошими фото получает в 2-3 раза больше просмотров и кликов «Получить маршруты». Это прямой трафик в ресторан.',
    },
    {
        title: '«Меню на сайте — только текст. Или фото 5-летней давности»',
        text: '91% гостей смотрят меню онлайн перед посещением. Меню без фото — это потеря части аудитории, которая «выбирает глазами».',
    },
    {
        title: '«Обновили меню, но снимать некогда — работаем без новых фото уже три месяца»',
        text: 'Каждый месяц без обновлённого визуала — это упущенные заказы новых позиций и неактуальный образ заведения в сети.',
    },
];

const earnPoints: string[] = [
    'Рост CTR на delivery-платформах: хорошее фото блюда увеличивает количество кликов на позицию в среднем на 30-40% — это прямой рост заказов через Wolt и Glovo.',
    'Продажа «глазами»: атмосферные интерьерные фото на сайте и Google Maps конвертируют браузеров в реальных гостей — особенно туристов, принимающих решение по визуалу.',
    'Повышение среднего чека: профессиональные фото коктейлей, десертов и premium-блюд увеличивают их заказываемость без дополнительных усилий от персонала.',
    'Быстрый старт рекламы: готовые фото — это immediate-creative для таргета, Google Ads и рекламных кампаний в соцсетях.',
];

const avoidLossPoints: string[] = [
    'Меньше «визуального разочарования»: когда блюда на фото соответствуют реальной подаче, гости приходят с правильными ожиданиями и оставляют лучшие отзывы.',
    'Независимость от гостевого контента: ваши платформы всегда выглядят профессионально — не зависят от того, кто и что снял за вечер.',
    'Защита позиций в Google Maps: профили с качественными фото получают больший приоритет в локальном поиске.',
    'Экономия времени команды: структурированная библиотека — SMM, маркетолог и менеджер тратят в разы меньше времени на поиск и подготовку контента.',
];

const deliverables: string[] = [
    'Фото блюд и напитков: 15-25 ключевых позиций меню (герой-блюда, сеты, десерты, коктейли), оптимизированы под delivery-платформы и меню.',
    'Фото интерьера: 10-15 кадров зала, бара, террасы, private-зоны и деталей оформления (день/вечер при наличии).',
    'B-roll видеоклипы: 5-20 коротких клипов (steam, полив соусом, нарезка, подача, наливание, атмосфера зала) для Reels и Stories.',
    'Экспорт по платформам: отдельные папки и форматы для Instagram, Wolt/Glovo, Google Maps, сайт/меню.',
    'Индекс-карта ассетов: простой документ «где что лежит» — «бургер вид сверху для Wolt», «общее фото зала вечером».',
];

const useCases: Card[] = [
    {
        title: 'Сценарий 1 — Выход на Wolt/Glovo',
        text: 'Ресторан регистрируется на Wolt. Без хороших фото блюд аккаунт запускается слабо: низкий CTR на позиции, мало заказов. Мы снимаем все позиции меню за один день. Профиль запускается с полным профессиональным визуалом.',
    },
    {
        title: 'Сценарий 2 — Обновление сайта',
        text: 'Ресторан переделывает сайт. Дизайнер требует качественные фото зала, бара и 5-7 блюд. Один съёмочный день закрывает потребность полностью — горизонтальные кадры для десктопа, вертикальные для мобильного.',
    },
    {
        title: 'Сценарий 3 — Сезонное меню',
        text: 'Появились новые летние позиции. Нужно обновить фото в Instagram, добавить на Wolt и разослать партнёрам. Снимаем новинки за пару часов — без необходимости снимать всё меню целиком.',
    },
    {
        title: 'Сценарий 4 — Пресс-кит для медиа',
        text: 'Lifestyle-медиа хочет написать материал о ресторане и просит фото для публикации. Профессиональная библиотека с правами на использование готова мгновенно, без паники «где взять хорошие фото».',
    },
];

const miniCases: Card[] = [
    {
        title: 'Кейс 1 — Ресторан с доставкой, обновление Wolt',
        text: 'После профессиональной съёмки 18 позиций меню ресторан обновил профиль на Wolt. CTR на позиции вырос в среднем на 35%, общие заказы через приложение за первый месяц — +28%.',
    },
    {
        title: 'Кейс 2 — Грузинское кафе, Google Business Profile',
        text: 'Профиль в Google Maps содержал только гостевые фото. После загрузки 12 профессиональных кадров (зал, хинкали, хачапури, вид с улицы) количество просмотров профиля выросло в 2,4 раза, кликов на «позвонить» и «маршрут» — в 1,8 раза.',
    },
    {
        title: 'Кейс 3 — Бистро с обновлённым меню',
        text: 'Новый шеф-повар ввёл 8 новых позиций. Снимать всё меню с нуля дорого — согласовали фокусную съёмку только новинок + обновление 3 hero-блюд. Обновили Wolt, Instagram и сайт за один день съёмки и 5 дней обработки.',
    },
];

const socialProofBullets: string[] = [
    '91% гостей ресторана изучают меню онлайн перед посещением, и 65% признают, что фото блюда влияет на решение заказать именно эту позицию.',
    'Профили Google Business с 10+ профессиональными фото получают в 2-3 раза больше кликов и просмотров, чем без них.',
    'На delivery-платформах позиции с хорошим фото получают на 30-40% больше кликов, чем позиции без фото или с фото низкого качества.',
    '60% потенциальных гостей говорят, что фото атмосферы заведения важнее для принятия решения, чем текстовое описание.',
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'В чём отличие этой услуги от имиджевого видео ресторана?',
        answer:
            'Имиджевое видео — это один флагманский ролик об атмосфере. Съёмка интерьера и блюд — это производство библиотеки: десятки фото и b-roll клипов для практического использования на всех платформах. Разные задачи, разный формат результата.',
    },
    {
        question: 'Нужно ли готовить все блюда меню к съёмке?',
        answer:
            'Нет, снимаем целенаправленно: 15-25 ключевых позиций (герой-блюда, наиболее заказываемые, новинки). Полное покадровое меню из 100+ позиций — отдельный объём, обсуждаем индивидуально.',
    },
    {
        question: 'Как правильно подготовить блюда к съёмке?',
        answer:
            'Блюда должны быть в лучшей постановочной подаче — как будто их несут самому важному гостю. Мы заранее пришлём рекомендации по сервировке и деталям. Шеф-повар или су-шеф участвует минимально — готовит блюда в нужный момент.',
    },
    {
        question: 'Сколько часов занимает съёмка?',
        answer:
            '5-7 часов в зависимости от объёма меню и площади заведения. Обычно снимаем в первой половине дня при дневном свете, если нужны вечерние варианты интерьера — добавляем 1-2 часа.',
    },
    {
        question: 'Фото и видео — это разные услуги?',
        answer:
            'У нас — комплекс: в один съёмочный день снимаем и фото, и b-roll видеоклипы. Это выгоднее и быстрее, чем отдельные выезды под каждый формат.',
    },
    {
        question: 'Кто использует готовые материалы после съёмки?',
        answer:
            'Вы и ваша команда. SMM берёт фото для Instagram, менеджер загружает на Wolt и Glovo, веб-мастер обновляет сайт. Всё разложено по папкам с понятными названиями.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит съёмка интерьера и блюд ресторана?',
        answer:
            'Базовый пакет — от 500 ₾ (фото 10-15 блюд + 5 кадров интерьера). Стандарт — от 900 ₾ (фото 15-25 блюд + интерьер + b-roll клипы). Полный пакет — от 1 400 ₾ (всё выше + разбивка по платформам + индекс-карта ассетов + приоритетная обработка).',
    },
    {
        question: 'Есть ли предоплата?',
        answer: 'Да. 50% при подтверждении съёмки, остаток — при передаче материала.',
    },
    {
        question: 'Когда будут готовы материалы?',
        answer: '5-7 рабочих дней после съёмки. Срочная обработка (3 дня) — за доплату.',
    },
    {
        question: 'Мы можем сами делать фото, а вы только обработаете?',
        answer:
            'Обсуждается. Берём материал клиента на обработку, если он пригоден по качеству. Покажите примеры — скажем честно.',
    },
    {
        question: 'Включает ли пакет права на использование фото в рекламе?',
        answer:
            'Да, все файлы передаются клиенту с полными правами на коммерческое использование, включая рекламу.',
    },
    {
        question: 'Нужно ли что-то специально готовить к съёмке?',
        answer:
            'Зал убрать, блюда подготовить к постановочной подаче, убрать лишние предметы из кадра. Мы заранее пришлём подробный чеклист — 15-20 минут подготовки.',
    },
];

const whyUsCards: Card[] = [
    {
        title: 'Комплексный подход',
        text: 'За один выезд снимаем и фото, и видеоклипы — не нужно планировать два отдельных визита.',
    },
    {
        title: 'Структурированная сдача',
        text: 'Не просто папка с 200 файлами, а организованная библиотека с индексом — легко передать любому члену команды.',
    },
    {
        title: 'Понимание delivery-специфики',
        text: 'Знаем требования Wolt и Glovo к форматам и пропорциям — файлы сразу готовы к загрузке.',
    },
    {
        title: 'Работа без остановки ресторана',
        text: 'Адаптируемся под ваш рабочий график, снимаем до открытия или в тихий час.',
    },
    {
        title: 'Постоянный визуальный язык',
        text: 'Все фото в одном стиле и цветовой обработке — единый образ на всех платформах.',
    },
];

const processSteps: Card[] = [
    {
        title: '1. Бриф и составление shot-листа',
        text: 'Согласовываем, какие блюда и зоны снимаем, приоритеты, стиль подачи.',
    },
    {
        title: '2. Подготовка',
        text: 'Вы готовите блюда и зал, мы приезжаем с оборудованием и светом.',
    },
    {
        title: '3. Съёмочный день',
        text: '5-7 часов: блюда + интерьер + детали + b-roll.',
    },
    {
        title: '4. Обработка и сортировка',
        text: 'Ретушь, цветокоррекция, раскладка по платформам.',
    },
    {
        title: '5. Передача библиотеки',
        text: 'Google Drive + индекс-карта + рекомендации по размещению.',
    },
];

const packageCards: PackageCard[] = [
    {
        title: 'Basic — «Обновление профиля»',
        price: 'от 500 ₾',
        audience: 'Небольшие заведения, кафе с ограниченным меню, обновление отдельных позиций.',
        timeline: '7 дней',
        items: [
            'Фото 10-15 блюд/напитков (JPEG 4K).',
            '5-7 кадров интерьера.',
            'Базовая цветокоррекция.',
            '1 раунд правок.',
        ],
    },
    {
        title: 'Standard — «Полная база»',
        price: 'от 900 ₾',
        audience: 'Ресторан с активным SMM, выходящий на delivery или обновляющий сайт.',
        timeline: '7 дней',
        featured: true,
        items: [
            'Фото 15-25 блюд + напитки/десерты.',
            '10-15 кадров интерьера (разные зоны и детали).',
            '5-10 b-roll видеоклипов.',
            'Экспорт под платформы (Wolt, Instagram, Google Maps).',
            '2 раунда правок.',
        ],
    },
    {
        title: 'Full — «Производственная библиотека»',
        price: 'от 1 400 ₾',
        audience: 'Рестораны при отелях, ресторанные группы, заведения с большим меню.',
        timeline: '5 дней',
        items: [
            'Фото 25-40 позиций меню.',
            'Полная интерьерная съёмка (день + вечер).',
            '15-20 b-roll клипов.',
            'Разбивка по платформам + индекс-карта ассетов.',
            'Приоритетная обработка и 3 раунда правок.',
        ],
    },
];

const packageHelper: string[] = [
    'Обновить Wolt-профиль или отдельные позиции меню -> Basic.',
    'Выйти на delivery + обновить Instagram и Google Maps -> Standard.',
    'Отельный ресторан, большое меню или нужна полная библиотека -> Full.',
];

const relatedServices = [
    {
        href: '/reels-promo/reels-restaurant',
        label: 'Reels для ресторана',
        description: 'Серия коротких вертикальных роликов — используем b-roll клипы из съёмки как основу.',
    },
    {
        href: '/promo-video/promo-restaurant',
        label: 'Имиджевое видео ресторана',
        description: 'Флагманский ролик 60-90 сек: атмосфера, подача, вайб — идеальное дополнение к фотобиблиотеке.',
    },
    {
        href: '/reels-promo/restaurant-content-pack',
        label: 'Контент-пакет на месяц',
        description: 'Ежемесячная съёмка: регулярное обновление библиотеки и контент-потока.',
    },
    {
        href: '/360-tour-restaurants',
        label: '360° тур по ресторану',
        description: 'Виртуальная прогулка по залу с интеграцией в Google Maps — логичное продолжение интерьерной съёмки.',
    },
];

const internalTransitions = [
    {
        href: '/reels-promo/reels-restaurant',
        intro: 'Есть фото, нужны ещё и Reels из b-roll клипов?',
        label: 'Reels для ресторана',
    },
    {
        href: '/reels-promo/restaurant-content-pack',
        intro: 'Хотите не только фото, но и регулярное обновление визуала каждый месяц?',
        label: 'Контент-пакет для ресторана',
    },
    {
        href: '/360-tour-restaurants',
        intro: 'Нужна атмосферная виртуальная прогулка по залу для Google Maps?',
        label: '360° тур для ресторана',
    },
];

const commonMistakes: Card[] = [
    {
        title: 'Снимать блюда при потолочном освещении ресторана',
        text: 'Ресторанное освещение создано для атмосферы, не для съёмки. Оно слишком тёплое, неравномерное и плоское. Правильный свет — мягкий боковой, у окна или с отдельным источником.',
    },
    {
        title: 'Публиковать фото блюд в разных стилях из разных источников',
        text: 'Смешанный контент: одни фото тёплые, другие холодные, третьи — явно телефонные снимки. Это дробит образ бренда и выглядит непрофессионально. Нужен единый визуальный язык.',
    },
    {
        title: 'Выкладывать на Wolt/Glovo одно фото на все вариации блюда',
        text: '«Пицца маргарита с грибами» и «пицца маргарита со шпинатом» — разные блюда. Общее фото снижает кликабельность нестандартных вариантов.',
    },
    {
        title: 'Снимать интерьер с включёнными столовыми приборами и посудой под разными углами',
        text: 'Детали имеют значение. Пустые тарелки, случайная посуда, кресла со смятыми подушками — всё это попадает в кадр и снижает впечатление.',
    },
    {
        title: 'Не обновлять фото после изменений в меню или интерьере',
        text: 'Старые фото продают то, чего уже нет. Гость заказывает «это» — и получает другое. Разочарование = плохой отзыв.',
    },
    {
        title: 'Не иметь горизонтальных кадров для сайта и десктопа',
        text: 'Instagram — вертикальный. Сайт — горизонтальный. Многие снимают только под мобильный и потом не могут закрыть потребности веб-дизайна.',
    },
];

const improveWithoutPurchase: string[] = [
    'Сфотографируйте 5 самых популярных блюд у окна при дневном свете — это уже существенно лучше, чем ничего.',
    'Проверьте Google Business Profile: добавьте актуальные фото в разделы «Еда» и «Интерьер».',
    'Обновите обложки на Wolt/Glovo хотя бы для топ-5 позиций меню — это даёт немедленный эффект по кликам.',
    'Сделайте 2-3 горизонтальных снимка зала при естественном свете — для сайта и медиа-запросов.',
    'Попросите шеф-повара фотографировать новые позиции в момент финальной подачи — это лучший момент для съёмки.',
];

const checklistItems: string[] = [
    'Составлен shot-лист блюд (какие позиции снимаем в этот день).',
    'Блюда подготовлены к постановочной подаче — как для самого важного гостя.',
    'Зал убран: столы чистые, стулья ровно, лишние предметы убраны.',
    'Бар и барная стойка в порядке: чистые полки, аккуратно расставленные бутылки.',
    'Терраса/веранда подготовлены, если входит в объём.',
    'Время съёмки выбрано под дневной свет или согласован вечерний вариант.',
    'Шеф или су-шеф доступен для финальной подачи блюд к съёмке.',
    'Есть отдельная поверхность для предметной съёмки (стол у окна или белый фон) — по запросу.',
];

const longTailAnswers: LongTailAnswer[] = [
    {
        question: 'Почему фото блюд на Wolt и Glovo так сильно влияют на продажи?',
        answer: [
            'Delivery-платформы — это визуальный маркет. Пока человек листает список ресторанов и блюд, единственный контакт с позицией до заказа — это фотография.',
            'Позиции с профессиональным фото обычно кликаются заметно чаще. Даже прирост в 20% CTR при стабильном трафике даёт ощутимый рост заказов.',
            'Для заведений это один из самых быстрых способов поднять продажи без изменения кухни и операционных процессов.',
        ],
    },
    {
        question: 'Как правильно снимать еду, чтобы она выглядела аппетитно?',
        answer: [
            'Основа фуд-съёмки — мягкий свет, правильный угол и аккуратная подача. Прямая вспышка почти всегда ухудшает объём и текстуру.',
            'Угол выбирают по блюду: 45° чаще подходит супам, пасте и мясу; top-view лучше работает для пиццы, сетов и салатов.',
            'Задача съёмки — показать реальное блюдо в его лучшем состоянии, без визуального обмана и без разрыва ожиданий у гостя.',
        ],
    },
    {
        question: 'Что такое b-roll клипы и зачем они нужны ресторану?',
        answer: [
            'B-roll — это короткие видеофрагменты 3-10 секунд: пар, наливание, нарезка, подача, детали атмосферы.',
            'Они становятся строительным материалом для Reels и Stories, которые можно быстро собирать внутри команды без новых выездов.',
            'Один съёмочный день с 15-20 клипами обычно закрывает несколько месяцев регулярного видеоконтента.',
        ],
    },
    {
        question: 'Как правильно использовать фотографии после съёмки?',
        answer: [
            'Главный принцип — структура. Без неё через 2-3 месяца команда не найдёт нужный кадр среди сотен файлов.',
            'Рабочая система: отдельные папки под Wolt/Glovo, Instagram, Google Maps, сайт/меню и Media/PR.',
            'Индекс-карта ассетов экономит время каждому участнику команды: от SMM до менеджера и веб-разработчика.',
        ],
    },
];

const shortQa: FaqItem[] = [
    {
        question: 'Сколько стоит фотосъёмка блюд для ресторана в Тбилиси?',
        answer:
            'Базовый пакет — от 500 ₾ (10-15 блюд + интерьер). Стандарт с b-roll клипами — от 900 ₾. Полная библиотека — от 1 400 ₾.',
    },
    {
        question: 'Как улучшить фото блюд для Wolt и Glovo в Тбилиси?',
        answer:
            'Профессиональная съёмка блюд с правильным светом и постановочной подачей часто даёт прирост кликабельности на 30-40%. Один съёмочный день позволяет обновить ключевые позиции меню.',
    },
    {
        question: 'Что входит в съёмку интерьера ресторана?',
        answer:
            'Широкие и детальные кадры зала, бара, террасы и деталей оформления. Плюс предметная съёмка блюд и b-roll клипы для Reels и Stories.',
    },
    {
        question: 'Как правильно фотографировать еду для Instagram?',
        answer:
            'Используйте мягкий боковой свет, ракурс 45° или top-view в зависимости от блюда, и снимайте без прямой вспышки.',
    },
    {
        question: 'Какие форматы нужны для фото ресторана на разных платформах?',
        answer:
            'Wolt/Glovo — квадрат или 4:3; Instagram — 4:5 или квадрат; Google Maps — горизонталь 16:9; сайт — горизонтальные фото в высоком разрешении.',
    },
    {
        question: 'Сколько блюд нужно снять для обновления Wolt-профиля?',
        answer:
            'Для качественного старта обычно достаточно 15-20 ключевых позиций: hero-блюда, популярные позиции, сеты, десерты и коктейли.',
    },
    {
        question: 'За сколько дней готова фотосъёмка ресторана?',
        answer: 'Съёмка — 1 день, обработка и передача — 5-7 рабочих дней. Срочная обработка возможна от 3 дней.',
    },
    {
        question: 'Нужно ли закрывать ресторан для интерьерной съёмки?',
        answer: 'Нет. Обычно снимаем до открытия или в тихий час, чтобы не мешать работе заведения.',
    },
];

const myths: Array<{ myth: string; reality: string }> = [
    {
        myth: 'Фото на iPhone достаточно для Wolt.',
        reality:
            'Технически возможно, но коммерчески проигрывает профессиональному визуалу. При одинаковой цене гость выбирает более аппетитную подачу.',
    },
    {
        myth: 'Нам не нужны интерьерные фото — мы не фотостудия.',
        reality:
            'Интерьерные фото решают практическую задачу: отвечают гостю на вопрос «как там внутри?» и влияют на решение о визите.',
    },
    {
        myth: 'Лучше подождать нового интерьера или нового меню.',
        reality:
            'Ожидание «идеального момента» сжигает недели трафика. Рабочая стратегия — снимать текущую версию и обновлять контент по мере изменений.',
    },
    {
        myth: 'Гостевые фото в Google Maps делают свою работу.',
        reality:
            'Гостевые снимки непредсказуемы. Профессиональная галерея лучше управляет первым впечатлением и повышает клики.',
    },
    {
        myth: 'Съёмка всего меню — это долго и дорого.',
        reality:
            'Для эффекта не нужно снимать 100+ позиций. Фокус на 15-20 hero-блюдах обычно даёт основную часть результата.',
    },
];

const glossary: Card[] = [
    {
        title: 'Фуд-стилинг',
        text: 'Профессиональная подготовка блюда к съёмке: подача, расположение элементов и визуальные акценты.',
    },
    {
        title: 'B-roll',
        text: 'Короткие дополнительные клипы 3-10 секунд: движение, детали и процессы для сборки Reels и Stories.',
    },
    {
        title: 'Hero-блюдо',
        text: 'Флагманская позиция меню, которую снимают в первую очередь и используют как основной визуальный крючок.',
    },
    {
        title: 'Shot-лист',
        text: 'Заранее согласованный список блюд, сцен и ракурсов для съёмочного дня.',
    },
    {
        title: 'Цветокоррекция',
        text: 'Финальная обработка цвета, чтобы вся библиотека выглядела единообразно на разных платформах.',
    },
    {
        title: 'Asset map',
        text: 'Индекс-карта ассетов: документ, который показывает, где лежит каждый файл и для какой задачи он подходит.',
    },
];

const notFitPoints: string[] = [
    'Если нужна предметная съёмка в профессиональной студии с белым фоном под каталог — это другой формат, не on-location.',
    'Если бюджет менее 300 ₾ — качественная съёмка с обработкой требует минимального порога.',
    'Если нужен копирайт для меню или дизайн меню — мы производим фото и видео, не дизайн.',
    'Если заведение находится на этапе реконструкции — лучше дождаться готового интерьера.',
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
            name: 'Съёмка интерьера и блюд ресторана',
            item: CANONICAL_URL,
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Съёмка блюд и интерьера ресторана в Тбилиси',
    description:
        'Профессиональная фото- и видеосъёмка блюд и интерьера ресторана. Готовая библиотека для Wolt, Glovo, Google Maps, меню и сайта.',
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
        price: '500',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    url: 'https://breus.media',
    telephone: CONTACT_PHONE,
    description: 'Медиапродакшн в Тбилиси: съёмка блюд и интерьеров ресторанов для Wolt, Glovo, Google Maps, меню и сайта.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Съёмка блюд и интерьера ресторана в Тбилиси — для меню и Wolt',
    description:
        'Профессиональная фото- и видеосъёмка блюд и интерьера ресторана. Готовая библиотека для Wolt, Glovo, Google Maps, меню и сайта. От 500 ₾. Тбилиси.',
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: 'Съёмка блюд и интерьера ресторана в Тбилиси — для меню и Wolt',
        description:
            'Один день съёмки — полная фото- и видеобиблиотека для Wolt, Glovo, Google Maps, сайта, меню и соцсетей.',
        url: CANONICAL_URL,
        type: 'website',
        locale: 'ru_RU',
    },
};

export default function RestaurantInteriorFoodPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Пакеты', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section id="hero" className="relative pt-40 md:pt-44 pb-20 border-b border-[#2a2a2a]">
                <div className="container mx-auto px-6">
                    <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                        Promo Video · Restaurants · Тбилиси
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                        Съёмка интерьера и блюд — материалы для сайта, меню и delivery
                    </h1>
                    <p className="text-lg md:text-2xl text-white/85 max-w-4xl leading-relaxed mb-6">
                        Один день съёмки — полная фото- и видеобиблиотека для всех платформ.
                    </p>
                    <p className="text-base md:text-xl text-white/70 max-w-5xl leading-relaxed">
                        Ваши блюда вкуснее, чем выглядят на Wolt. Интерьер привлекательнее, чем показывают гостевые фото в Google
                        Maps. И вы об этом знаете — просто не было времени сделать нормальную съёмку. Один выезд Breus Media — и
                        вы получаете полную библиотеку фото и коротких видеоклипов: блюда под delivery и меню, зал и детали
                        атмосферы, бар и терраса. Всё отсортировано по платформам, готово к загрузке на Wolt, Glovo, Google
                        Business Profile, сайт и в соцсети.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-10">
                        <a
                            href={WHATSAPP_HREF}
                            className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                        >
                            Записаться на съёмку
                        </a>
                        <a
                            href="#pricing"
                            className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                        >
                            Смотреть пакеты и цены
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6">Что это за услуга простыми словами</h2>
                    <p className="text-white/75 leading-relaxed text-lg">
                        Съёмка интерьера и блюд — это профессиональный съёмочный день, на выходе которого вы получаете готовую
                        визуальную библиотеку: чистые фото ключевых блюд, напитков и сетов; широкие и детальные кадры зала, бара,
                        террасы и деталей; короткие b-roll видеоклипы для будущих Reels и сторис. Всё разложено по папкам под
                        конкретные платформы (Wolt, Glovo, Instagram, Google Maps, сайт, меню) и снабжено понятным индексом.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10">Кому подходит</h2>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-white/75 leading-relaxed">
                        {audienceItems.map((item) => (
                            <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6 flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-8">Какую задачу решает услуга</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        {solutionPoints.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="text-[#D4A017]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
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
                                <p className="font-semibold text-white">Фото</p>
                                <p>JPEG 4K, оптимизированные для каждой платформы (Instagram, delivery, меню).</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Видео</p>
                                <p>MP4 B-roll клипы (1080p/4K), готовые для монтажа в Reels и Stories.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Срок</p>
                                <p>Съёмка 1 день (5-7 часов), обработка и передача — 5-7 рабочих дней.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white">Передача</p>
                                <p>Google Drive со структурированными папками + индекс-карта ассетов.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <MidCta
                text="Готовы наконец обновить Wolt, Google Maps и Instagram одним выездом?"
                buttonLabel="Записаться на съёмку"
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
                        Wolt и Glovo занимают значительную долю ресторанного рынка Тбилиси: сотни заведений конкурируют за один
                        клик. Единственный визуальный элемент, который помогает выбрать именно ваше блюдо в общем списке — это
                        фото. Для туристов, которые ищут рестораны через Google Maps, качество фотогалереи напрямую влияет на
                        решение «зайти или нет». Профессиональная съёмка интерьера и блюд — это уже базовый стандарт для
                        заведений среднего сегмента и выше в Тбилиси и Батуми.
                    </p>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Примеры и мини-кейсы</h2>
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

            <ProcessNote text="От заявки до готовой библиотеки — 8-10 рабочих дней: 1-2 дня на согласование объёма и времени, 1 день съёмки, 5-7 дней обработки и сдачи." />

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
                    <h2 className="text-3xl font-bold mb-10">Пакеты и цены</h2>
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
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Параметр</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Basic 500₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Standard 900₾</th>
                                    <th className="text-left p-3 border-b border-[#2a2a2a]">Full 1 400₾</th>
                                </tr>
                            </thead>
                            <tbody className="text-white/75">
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фото блюд</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10-15</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">15-25</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">25-40</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Фото интерьера</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-7</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">10-15</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">Полный зал</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">B-roll видеоклипы</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">5-10</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">15-20</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Съёмка вечернего света</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Разбивка по платформам</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Индекс-карта ассетов</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Приоритетная обработка</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">—</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">✓ (5 дней)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-[#2a2a2a]">Раунды правок</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">1</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">2</td>
                                    <td className="p-3 border-b border-[#2a2a2a]">3</td>
                                </tr>
                                <tr>
                                    <td className="p-3">Срок готовности</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">7 дней</td>
                                    <td className="p-3">5 дней</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h3 className="text-xl font-bold mb-4">Помощник выбора пакета</h3>
                        <ul className="space-y-2 text-sm text-white/75">
                            {packageHelper.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-white/70 mt-5">
                            Не уверены в объёме? Напишите нам — обсудим меню и платформы, предложим оптимальный пакет.
                        </p>
                    </div>
                </div>
            </section>

            <MidCta
                text="Обновите визуал ресторана за один съёмочный день. Оставьте заявку — согласуем объём и дату."
                buttonLabel="Заказать съёмку блюд и интерьера"
                href={WHATSAPP_HREF}
                bgColor="#0D0D0D"
            />

            <section className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                        <h2 className="text-2xl font-bold mb-5">Related services</h2>
                        <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {relatedServices.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>{' '}
                                    — {item.description}
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                        <h2 className="text-2xl font-bold mb-5">Внутренние переходы</h2>
                        <div className="space-y-3 text-sm text-white/75 leading-relaxed">
                            {internalTransitions.map((item) => (
                                <p key={item.href}>
                                    {item.intro} {' '}
                                    <Link href={item.href} className="text-[#D4A017] hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                    .
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10">Частые ошибки ресторанов в контенте</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Checklist готовности заведения к съёмке</h2>
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
                    <h2 className="text-3xl font-bold mb-8">Дополнительные материалы</h2>
                    <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                        <li>
                            Примеры фотосъёмки блюд и интерьеров:{' '}
                            <a
                                href="https://breus.media/portfolio/food-interior"
                                className="text-[#D4A017] hover:text-white transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                breus.media/portfolio/food-interior
                            </a>
                        </li>
                        <li>
                            Гайд: как подготовить блюдо к профессиональной съёмке (PDF):{' '}
                            <a
                                href="https://breus.media/guides/food-photography-prep"
                                className="text-[#D4A017] hover:text-white transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                breus.media/guides/food-photography-prep
                            </a>
                        </li>
                        <li>
                            Статья: как обновить профиль на Wolt за один день:{' '}
                            <a
                                href="https://breus.media/blog/wolt-profile-update"
                                className="text-[#D4A017] hover:text-white transition-colors"
                                target="_blank"
                                rel="noreferrer"
                            >
                                breus.media/blog/wolt-profile-update
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-24 border-b border-[#2a2a2a] bg-[#0D0D0D]">
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

            <section id="contact" className="py-24 border-b border-[#2a2a2a] bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="rounded-[16px] border border-[#D4A017]/35 bg-[#121212] p-8 md:p-10">
                        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
                        <p className="text-white/75 max-w-3xl leading-relaxed mb-6">
                            Работаем в Тбилиси и по всей Грузии. Чтобы обсудить объём съёмки — напишите в WhatsApp. Расскажите о
                            меню и платформах — подберём пакет за 10 минут.
                        </p>
                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={WHATSAPP_HREF}
                                className="inline-flex items-center justify-center bg-[#D4A017] text-black px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                WhatsApp: {CONTACT_PHONE}
                            </a>
                            <a
                                href={`tel:${CONTACT_PHONE_PLAIN}`}
                                className="inline-flex items-center justify-center border border-white/25 text-white px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Позвонить
                            </a>
                        </div>
                        <p className="text-white/55 text-sm mt-5">Тбилиси, Грузия</p>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-[#0D0D0D]">
                <div className="container mx-auto px-6">
                    <p className="text-center text-white/55 text-sm">
                        Breus Media — медиапродакшн в Тбилиси. Профессиональная съёмка блюд и интерьеров ресторанов: Wolt,
                        Glovo, Google Maps, сайт и меню. Один выезд — готовая библиотека.
                    </p>
                </div>
            </section>

            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

```
---
---
