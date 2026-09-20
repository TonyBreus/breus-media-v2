const fs = require('fs');

let content = fs.readFileSync('components/drone/v15/DroneServicesCatalogV15.tsx', 'utf-8');

// Rename exports
content = content.replace(/DRONE_CATEGORIES_V14/g, 'DRONE_CATEGORIES_V15');
content = content.replace(/DRONE_SERVICES_ITEMS_V14/g, 'DRONE_SERVICES_ITEMS_V15');
content = content.replace(/DroneServicesCatalogV14/g, 'DroneServicesCatalogV15');

// Update LSI map
const lsiMap = {
    'nedvizhimost': 'MYHOME.GE · SS.GE · ВИДОВЫЕ ЭТАЖИ',
    'zemelnye-uchastki': 'ГРАНИЦЫ · РЕЛЬЕФ · КАДАСТР',
    'oteli-kurorty': 'BOOKING · AIRBNB · GOOGLE MAPS',
    'restorany': 'ТЕРРАСЫ · ROOFTOP · REELS',
    'turizm': 'ПРИРОДА · МАРШРУТЫ · ШАТО',
    'monitoring-stroiki': 'ТЕХНАДЗОР · БАНКИ · ИНВЕСТОРЫ',
    'regulyarnye-aerootchety': 'ФИКСАЦИЯ ЭТАПОВ · GPS-ОТЧЁТЫ',
    'inspekciya-obektov': 'ВЫСОТА · БЕЗ ЛЕСОВ · БЕЗОПАСНО',
    'inspekciya-fasadov': 'ДЕФЕКТОВКА ШВОВ · БЕЗ ВЫШЕК',
    'inspekciya-krysh': 'ПРИМЫКАНИЯ · ВОДОСТОКИ · КРОВЛЯ',
    'inspekciya-solnechnyh-paneley': 'ДЕФЕКТЫ · ЗАГРЯЗНЕНИЯ · КПД',
    'fpv-semka': 'ПРОЛЁТ ВНУТРИ · 1 ДУБЛЬ · 100 КМ/Ч',
    'aerosyemka-dlya-avto-i-avtosalonov': 'АВТОДИЛЕРЫ · ШОУРУМЫ · ДИНАМИКА',
    'interiery-sklady': 'ЛОГИСТИКА · СТЕЛЛАЖИ · ЦЕХА',
    'sport-kompleksy': 'СТАДИОНЫ · АРЕНЫ · МАСШТАБ',
    'meropriyatiya': 'ФЕСТИВАЛИ · ОПЕН-ЭЙР · ИВЕНТЫ',
    'reklama-brand-video': 'РЕКЛАМА · ПРОМО · D-LOG ЦВЕТ',
    'agro-i-vinodelie': 'ВИНОГРАДНИКИ · ШАТО · УРОЖАЙ',
    'arenda-drona-s-pilotom': 'DJI AIR 3S / AVATA 2 · ИСХОДНИКИ'
};

for (const [slug, lsi] of Object.entries(lsiMap)) {
    const regex = new RegExp(`(slug:\\s*'${slug}',[\\s\\S]*?lsiSubtitle:\\s*').*?(')`, 'g');
    content = content.replace(regex, `$1${lsi}$2`);
}

// Remove Price & Specs block
content = content.replace(/\s*\{\/\*\s*Price & Specs\s*\*\/\}\s*<div className="flex items-center gap-3 mb-5">[\s\S]*?<\/div>/g, '');

fs.writeFileSync('components/drone/v15/DroneServicesCatalogV15.tsx', content);
