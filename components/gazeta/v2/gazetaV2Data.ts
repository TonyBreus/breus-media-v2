// Gazeta V2 — single source of truth for texts, prices and links.
// Prices are taken from the existing /gazeta catalog (GazetaMobileStepChooser / NichesStack).

export const WA_BASE = "https://wa.me/995501103183?text=";

export const waLink = (text: string) => `${WA_BASE}${encodeURIComponent(text)}`;

export type PortfolioItem = { image: string; title: string; tag: string };

export const PORTFOLIO: PortfolioItem[] = [
    { image: "/media/drone-service/hotels-resorts-5.png", title: "Отель и курорт", tag: "Дрон · 4K" },
    { image: "/media/drone-service/real-estate-1.png", title: "Жилой комплекс", tag: "Дрон · Недвижимость" },
    { image: "/media/gazeta/360-real-estate-1.png", title: "Квартира", tag: "360° тур" },
    { image: "/media/drone-service/restaurants-3.png", title: "Ресторан", tag: "FPV-пролёт" },
    { image: "/media/drone-service/agro-wine-1.png", title: "Винодельня, Кахетия", tag: "Дрон · Туризм" },
    { image: "/media/gazeta/reels-realtor-1.png", title: "Риелтор", tag: "Reels" },
    { image: "/media/drone-service/auto-showroom-1.png", title: "Автосалон", tag: "FPV · Бренд" },
    { image: "/media/drone-service/construction-monitoring-1.png", title: "Стройплощадка", tag: "Мониторинг" },
];

export type Solution = { title: string; desc: string; price: string; href: string };
export type Industry = { id: string; label: string; solutions: Solution[] };

export const INDUSTRIES: Industry[] = [
    {
        id: "real-estate",
        label: "Недвижимость",
        solutions: [
            { title: "Аэросъёмка объекта", desc: "4K-облёт фасада, территории и района для объявлений на MyHome.ge и SS.ge.", price: "от 250 ₾", href: "/drone-services/drone-real-estate" },
            { title: "360° тур", desc: "Онлайн-показ квартиры или дома до выезда покупателя.", price: "от 300 ₾", href: "/360-tour-real-estate" },
            { title: "Reels для риелтора", desc: "Короткие видео объекта для Instagram и TikTok.", price: "от 250 ₾", href: "/reels-promo/reels-realtor" },
        ],
    },
    {
        id: "hotels",
        label: "Отели и туризм",
        solutions: [
            { title: "Аэросъёмка отеля", desc: "Локация, вид и территория для Booking и сайта.", price: "от 250 ₾", href: "/drone-services/drone-hotels-tourism" },
            { title: "360° тур по номерам", desc: "Номера и лобби в Google Maps и на сайте.", price: "от 300 ₾", href: "/360-tour-hotels" },
            { title: "Сезонные Reels", desc: "Регулярные короткие видео для соцсетей отеля.", price: "от 450 ₾", href: "/reels-promo/hotel-seasonal-content" },
        ],
    },
    {
        id: "restaurants",
        label: "Рестораны",
        solutions: [
            { title: "FPV-пролёт по залу", desc: "Один непрерывный пролёт через зал, кухню и террасу.", price: "от 300 ₾", href: "/drone-services/drone-restaurants" },
            { title: "Контент-пакет", desc: "Фото блюд и интерьера плюс Reels на месяц.", price: "от 450 ₾", href: "/reels-promo/restaurant-content-pack" },
            { title: "Google Maps", desc: "Оформление профиля, фото и 360° для карт.", price: "от 350 ₾", href: "/360-tour-restaurants" },
        ],
    },
    {
        id: "auto",
        label: "Авто",
        solutions: [
            { title: "FPV для автосалона", desc: "Динамичный пролёт по шоуруму и автомобилям.", price: "от 300 ₾", href: "/drone-services/drone-auto" },
            { title: "Обзор модели", desc: "Экстерьер, интерьер и детали для сайта и соцсетей.", price: "от 500 ₾", href: "/promo-video/auto-model-review" },
            { title: "Reels для сервиса", desc: "Видео работ детейлинга и сервиса.", price: "от 450 ₾", href: "/reels-promo/reels-auto" },
        ],
    },
    {
        id: "clinics",
        label: "Клиники",
        solutions: [
            { title: "Видео клиники", desc: "Пространство, команда и услуги в одном ролике.", price: "от 350 ₾", href: "/promo-video/promo-clinic" },
            { title: "Reels для врачей", desc: "Короткие экспертные видео для доверия пациентов.", price: "от 450 ₾", href: "/reels-promo/reels-clinic" },
            { title: "360° тур", desc: "Ресепшен и кабинеты онлайн до первого визита.", price: "от 500 ₾", href: "/360-tour-clinics" },
        ],
    },
    {
        id: "business",
        label: "Бизнес и бренды",
        solutions: [
            { title: "Имиджевое видео", desc: "Ролик для сайта, презентации или запуска.", price: "от 300 ₾", href: "/promo-video/promo-business" },
            { title: "AI-креативы и 3D", desc: "Рекламные изображения и визуализация без съёмки.", price: "от 180 ₾", href: "/ai-visualization-service" },
            { title: "Сайт на Next.js", desc: "Быстрый B2B-сайт, который находят Google и нейросети.", price: "от 1 200 ₾", href: "#contact" },
        ],
    },
];

export const PACKAGES = [
    { name: "Старт", price: "от 250 ₾", desc: "Один формат на выбор", items: ["Аэросъёмка или 360° тур", "Съёмка 1–2 часа", "Сдача от 24 часов"], featured: false },
    { name: "Бизнес", price: "от 700 ₾", desc: "Комплект для продаж", items: ["Видео + фото + дрон", "3 Reels для соцсетей", "Монтаж и цветокоррекция"], featured: true },
    { name: "Индивидуально", price: "по задаче", desc: "Регулярный контент или сайт", items: ["Контент-план на месяц", "Сайт или Google Maps", "Официальный B2B-договор"], featured: false },
];

export const PROCESS = [
    { step: "01", title: "Заявка", desc: "Пишете в WhatsApp, отвечаем в течение часа." },
    { step: "02", title: "Бриф", desc: "Согласуем задачу, дату и цену." },
    { step: "03", title: "Съёмка", desc: "Выезжаем в Тбилиси и по всей Грузии." },
    { step: "04", title: "Сдача", desc: "Готовые материалы через 24–48 часов." },
];
