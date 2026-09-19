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

export const GeoSemanticLayerV14 = () => {
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
            // Tbilisi districts — AdministrativeArea (not independent cities)
            ...geoData.tbilisiDistricts.map(d => ({ "@type": "AdministrativeArea", "name": d })),
            // Villa suburbs — AdministrativeArea (settlements within Tbilisi agglomeration)
            ...geoData.villaZones.map(d => ({ "@type": "AdministrativeArea", "name": d })),
            // Actual cities and regions — City
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
            
            <div className="sr-only">
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
