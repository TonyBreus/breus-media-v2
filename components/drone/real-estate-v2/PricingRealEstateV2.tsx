import React from 'react';
import { PackageCta } from '@/components/drone-hotels-tourism/PackageCta';

const pricingPackages = [
    {
        title: 'Базовый облёт',
        price: '200 ₾',
        subtitle: 'Панорамы и фасад для MyHome.ge',
        items: [
            '10+ фото с воздуха (RAW/JPEG)',
            'Обзорное видео 4K (сырое без монтажа)',
            'Сдача от 24 часов'
        ]
    },
    {
        title: 'Промо-ролик',
        price: '350 ₾',
        subtitle: 'Смонтированное видео + соцсети',
        items: [
            '15+ фото с воздуха (цветокоррекция)',
            'Динамичный ролик до 60 сек',
            'Вертикальный Reels / Shorts',
            'Сдача от 48 часов'
        ]
    },
    {
        title: 'Полный с FPV',
        price: '500 ₾',
        subtitle: 'Аэро + пролёт внутри помещения',
        popular: true,
        items: [
            'Всё из Промо-ролика',
            'FPV-тур по квартире или лобби',
            'Плавные переходы (улица -> интерьер)',
            'Сдача от 48 часов'
        ]
    },
    {
        title: 'Девелопмент Премиум',
        price: '700 ₾',
        subtitle: 'Максимальный пакет для инвесторов',
        items: [
            'Аэросъёмка инфраструктуры (до 2 км)',
            'Полный FPV-тур по шоуруму',
            'Короткие выжимки для таргета',
            '360° аэропанорама',
            'Сдача от 72 часов'
        ]
    }
];

export const PricingRealEstateV2 = () => {
    return (
        <section id="pricing" className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Тарифы на аэросъёмку</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Прозрачные пакеты для любых задач: от базовых фото для классифайдов до премиального кино-монтажа для девелоперов.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {pricingPackages.map((pkg, idx) => (
                        <div 
                            key={idx}
                            className={`relative flex flex-col rounded-[24px] border p-6 md:p-8 ${
                                pkg.popular 
                                    ? 'border-[#FFD23F]/50 bg-gradient-to-b from-[#FFD23F]/10 to-[#141414]' 
                                    : 'border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD23F] text-black font-bold uppercase tracking-wider text-[10px] px-4 py-1.5 rounded-full">
                                    Хит для квартир
                                </div>
                            )}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                            <p className="text-xs text-white/50 mb-4 h-8">{pkg.subtitle}</p>
                            <div className="text-3xl md:text-4xl font-black text-[#FFD23F] mb-6">{pkg.price}</div>
                            
                            <ul className="flex-1 space-y-3 mb-8">
                                {pkg.items.map((item, i) => (
                                    <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                                        <span className="text-[#FFD23F] mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/995501103183?text=${encodeURIComponent(`Здравствуйте! Интересует пакет [${pkg.title}] для недвижимости в Грузии.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3.5 rounded-[12px] text-sm font-bold uppercase tracking-wider transition-colors text-center ${
                                    pkg.popular 
                                        ? 'bg-[#FFD23F] text-black hover:bg-white' 
                                        : 'border border-white/20 text-white hover:border-[#FFD23F] hover:text-[#FFD23F]'
                                }`}
                            >
                                Заказать в WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
