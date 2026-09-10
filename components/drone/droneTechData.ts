export type RecentProject = {
    date: string;
    client: string;
    location: string;
    format: string;
};

export type GearItem = {
    name: string;
    specs: string;
    purpose: string;
};

export type FormatComparison = {
    feature: string;
    standard: string;
    fpv: string;
};

export const techDataRu = {
    recentProjects: [
        { date: 'Ноябрь 2026', client: 'Девелоперский проект', location: 'Тбилиси, Ваке', format: 'Аэропанорама + Видео' },
        { date: 'Октябрь 2026', client: 'Пятизвездочный Отель', location: 'Батуми', format: 'FPV пролет + Стандарт' },
        { date: 'Сентябрь 2026', client: 'Ресторанный комплекс', location: 'Мцхета', format: 'FPV внутри помещений' },
        { date: 'Сентябрь 2026', client: 'Логистический центр', location: 'Рустави', format: 'Инспекция + Ортофото' },
        { date: 'Август 2026', client: 'Винное Шато', location: 'Кахетия', format: 'Промо-видео 4K + Reels' },
    ] as RecentProject[],

    gearList: [
        { name: 'DJI Mavic 3 Pro', specs: 'Hasselblad 4K/60fps, 10-bit D-Log M, 3x/7x Zoom', purpose: 'Архитектура, фасады, пейзажи, киношная картинка' },
        { name: 'DJI Avata', specs: '4K/60fps, D-Cinelike, RockSteady 2.0', purpose: 'Внутри помещений (FPV), рестораны, цеха, отели' },
        { name: 'DJI Mini 3 Pro / 4 Pro', specs: 'Вертикальная съемка (True Vertical), 4K HDR', purpose: 'Reels, Shorts, съемка в узких пространствах' },
        { name: 'Apple ProRes & RAW', specs: 'Форматы без потерь качества', purpose: 'Профессиональный цветокор для рекламы и ТВ' },
    ] as GearItem[],

    comparison: [
        { feature: 'Скорость и Динамика', standard: 'Плавный, кинематографичный полет', fpv: 'Быстрый, агрессивный, пролеты в узкие окна' },
        { feature: 'Съемка внутри зданий', standard: 'Возможна в больших ангарах', fpv: 'Идеально для офисов, квартир, ресторанов' },
        { feature: 'Внимание зрителя', standard: 'Показывает масштаб и красоту', fpv: 'Удерживает внимание за счет "эффекта полета"' },
        { feature: 'Тип дрона', standard: 'Крупный, с оптическим зумом (Mavic 3)', fpv: 'Компактный, с защитой винтов (Avata / Cinewhoop)' },
    ] as FormatComparison[],
};

export const techDataEn = {
    recentProjects: [
        { date: 'November 2026', client: 'Development Project', location: 'Tbilisi, Vake', format: 'Aerial Panorama + Video' },
        { date: 'October 2026', client: '5-Star Hotel', location: 'Batumi', format: 'FPV fly-through + Standard' },
        { date: 'September 2026', client: 'Restaurant Complex', location: 'Mtskheta', format: 'Indoor FPV filming' },
        { date: 'September 2026', client: 'Logistics Hub', location: 'Rustavi', format: 'Inspection + Orthophoto' },
        { date: 'August 2026', client: 'Wine Chateau', location: 'Kakheti', format: '4K Promo Video + Reels' },
    ] as RecentProject[],

    gearList: [
        { name: 'DJI Mavic 3 Pro', specs: 'Hasselblad 4K/60fps, 10-bit D-Log M, 3x/7x Zoom', purpose: 'Architecture, facades, landscapes, cinematic look' },
        { name: 'DJI Avata', specs: '4K/60fps, D-Cinelike, RockSteady 2.0', purpose: 'Indoors (FPV), restaurants, factories, hotels' },
        { name: 'DJI Mini 3 Pro / 4 Pro', specs: 'True Vertical Shooting, 4K HDR', purpose: 'Reels, Shorts, tight space operations' },
        { name: 'Apple ProRes & RAW', specs: 'Lossless quality formats', purpose: 'Professional color grading for TV and Ads' },
    ] as GearItem[],

    comparison: [
        { feature: 'Speed & Dynamics', standard: 'Smooth, cinematic flight', fpv: 'Fast, aggressive, diving through narrow gaps' },
        { feature: 'Indoor Filming', standard: 'Possible in large hangars', fpv: 'Perfect for offices, apartments, restaurants' },
        { feature: 'Viewer Attention', standard: 'Shows scale and beauty', fpv: 'Grabs attention via immersive "flight effect"' },
        { feature: 'Drone Type', standard: 'Large, optical zoom (Mavic 3)', fpv: 'Compact, ducted propellers (Avata / Cinewhoop)' },
    ] as FormatComparison[],
};
