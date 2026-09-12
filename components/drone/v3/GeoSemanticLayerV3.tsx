import React from 'react';

const geoData = {
    tbilisiDistricts: ['Vake', 'Saburtalo', 'Mtatsminda', 'Sololaki', 'Vera', 'Ortachala', 'Didi Digomi', 'Chugureti', 'Krtsanisi', 'Isani', 'Samgori'],
    villaZones: ['Tskneti', 'Saguramo', 'Tabakhmela', 'Kojori', 'Lisi Lake'],
    regions: ['Batumi', 'Kutaisi', 'Gudauri', 'Stepantsminda', 'Kakheti (Telavi, Signagi)'],
    facts: [
        '-40% отказов на сайтах с видеотурами',
        '73% продавцов и инвесторов выбирают комплексный видеопродакшн'
    ]
};

export const GeoSemanticLayerV3 = () => {
    // Generate JSON-LD schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Аэросъёмка",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Breus Media",
            "image": "https://breus.media/logo.png",
            "telephone": "+995501103183",
            "priceRange": "от 200 ₾"
        },
        "areaServed": [
            ...geoData.tbilisiDistricts.map(d => ({ "@type": "City", "name": d })),
            ...geoData.villaZones.map(d => ({ "@type": "City", "name": d })),
            ...geoData.regions.map(d => ({ "@type": "City", "name": d }))
        ],
        "description": "Съёмка на дроны DJI снаружи и манёвренные FPV внутри помещений в Тбилиси и регионах Грузии. 4K-видео и фото для отелей, недвижимости, стройки, ресторанов, инспекций и брендов. Готовые материалы от 24 часов."
    };

    return (
        <>
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
            />
            
            <div className="sr-only" aria-hidden="true">
                <h2>География аэросъёмки в Грузии</h2>
                
                <h3>Районы Тбилиси</h3>
                <ul>
                    {geoData.tbilisiDistricts.map(d => <li key={d}>{d}</li>)}
                </ul>

                <h3>Зоны загородных вилл</h3>
                <ul>
                    {geoData.villaZones.map(d => <li key={d}>{d}</li>)}
                </ul>

                <h3>Регионы и курорты</h3>
                <ul>
                    {geoData.regions.map(d => <li key={d}>{d}</li>)}
                </ul>

                <h3>Статистика и факты</h3>
                <ul>
                    {geoData.facts.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
            </div>
        </>
    );
};
