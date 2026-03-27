"use client";
import React from "react";
import { DebugWrapper } from "../debug/DebugWrapper";

export function DroneServices() {
    return (
        <section id="uslugi" aria-label="Услуги аэросъёмки в Грузии" className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/5">
            <style>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                
                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .card-niches {
                    font-size: 11px;
                    color: rgba(255,255,255,0.45);
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }

                .card-tag {
                    display: inline-flex;
                    padding: 6px 14px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 20px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    color: white;
                }

                .card-tag--accent {
                    background: #D4A017;
                    color: #000;
                    font-weight: 700;
                }

                .card-specs {
                    font-size: 13px;
                    font-weight: 600;
                    color: #D4A017;
                    margin-bottom: 24px;
                }

                .service-card--wide {
                    grid-column: 1 / -1;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    padding: 40px;
                    align-items: center;
                    background: #111111;
                    border: 1px solid rgba(212,160,23,0.4);
                    border-radius: 1rem;
                }

                @media (max-width: 768px) {
                    .service-card--wide {
                        grid-template-columns: 1fr;
                        padding: 32px 24px;
                    }
                }

                .tag-cloud {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    padding: 0;
                    margin: 0;
                }

                .tag-cloud li span {
                    display: inline-block;
                    padding: 6px 14px;
                    border: 1px solid rgba(212,160,23,0.5);
                    border-radius: 20px;
                    font-size: 13px;
                    color: #D4A017;
                }

                .btn-gold-outline {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 14px 28px;
                    border: 1px solid #D4A017;
                    color: #D4A017;
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-top: 16px;
                }
                
                .btn-gold-outline:hover {
                    background: #D4A017;
                    color: #000;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">НАШИ УСЛУГИ</h2>
                <p className="section-subtitle text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                    Комплексные решения аэросъёмки для бизнеса и частных лиц.<br className="hidden md:block" />
                    Тбилиси, Батуми и вся Грузия — 4K, доставка за 24 часа.
                </p>
            </div>

            <div className="services-grid" role="list">

                {/*─────────────────────────────
                CARD 1 — НЕДВИЖИМОСТЬ
                ─────────────────────────────*/}
                <DebugWrapper id={9000} label="Card 1: Недвижимость">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                                alt="Аэросъёмка недвижимости в Тбилиси — жилой комплекс с воздуха"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">НЕДВИЖИМОСТЬ</span>
                            </div>
                            <p className="card-niches">Риелторы · Застройщики · Инвесторы</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Недвижимость</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Аэрофото и видео для листингов, инвест-презентаций и продаж. Объекты с аэровидео продаются на 68% быстрее.
                            </p>
                            <p className="card-specs">4K · GPS · от 250 ₾</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/недвижимость" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 2 — МОНИТОРИНГ СТРОЙКИ
                ─────────────────────────────*/}
                <DebugWrapper id={9001} label="Card 2: Мониторинг стройки">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=800&q=80"
                                alt="Мониторинг строительства дроном — аэросъёмка стройки в Тбилиси"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">СТРОЙКА</span>
                            </div>
                            <p className="card-niches">Девелоперы · Банки · Подрядчики</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Мониторинг стройки</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Еженедельные облёты с GPS-привязкой. PDF-отчёты о прогрессе для инвесторов без выезда на площадку.
                            </p>
                            <p className="card-specs">4K · PDF-отчёт · GPS · от 600 ₾/мес</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/мониторинг" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 3 — ИНСПЕКЦИЯ ОБЪЕКТОВ
                ─────────────────────────────*/}
                <DebugWrapper id={9002} label="Card 3: Инспекция объектов">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1525983360072-2ea9dc8eaa33?w=800&q=80"
                                alt="Инспекция фасадов и крыш дроном — Тбилиси, без лесов"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">ИНСПЕКЦИЯ</span>
                            </div>
                            <p className="card-niches">Фасады · Крыши · Промздания</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Инспекция объектов</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Визуальная диагностика без лесов и промальпинистов. Быстрее, безопаснее и дешевле ручной проверки.
                            </p>
                            <p className="card-specs">Hi-Res · PDF-акт · Аннотации</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/drone-object-inspection" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 4 — ОТЕЛИ
                ─────────────────────────────*/}
                <DebugWrapper id={9003} label="Card 4: Отели и курорты">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                                alt="Аэросъёмка отеля в Батуми — дрон-видео для Booking и сайта"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">ОТЕЛИ</span>
                            </div>
                            <p className="card-niches">Отели · Апарт-отели · Курорты</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Отели и курорты</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Hero-ролики территории и номеров для сайта, Booking и соцсетей. Гости бронируют там, где видят атмосферу.
                            </p>
                            <p className="card-specs">4K · Монтаж · Booking-формат</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/отели" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 5 — РЕСТОРАНЫ
                ─────────────────────────────*/}
                <DebugWrapper id={9004} label="Card 5: Рестораны">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                                alt="Аэросъёмка ресторана в Тбилиси — веранда и терраса с дрона"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">РЕСТОРАНЫ</span>
                            </div>
                            <p className="card-niches">Веранды · Локации · Атмосфера</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Рестораны</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Аэросъёмка открытых террас, ресторанов на крышах и за городом. Контент, который приводит гостей.
                            </p>
                            <p className="card-specs">4K · Reels · Stories</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/рестораны" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 6 — FPV-СЪЁМКА
                ─────────────────────────────*/}
                <DebugWrapper id={9005} label="Card 6: FPV-съёмка">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#D4A017]/50 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80"
                                alt="FPV-съёмка в Тбилиси — дрон-пролёт через интерьер"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag card-tag--accent">FPV-СЪЁМКА</span>
                            </div>
                            <p className="card-niches">Интерьеры · Склады · Спорт · Пространства</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">FPV-съёмка</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Cinematic пролёты изнутри и снаружи. FPV-дрон там, где обычный не пролетит — залы, арки, цеха, арены.
                            </p>
                            <p className="card-specs">4K · до 100 к/с · WOW-эффект</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/fpv" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-[#D4A017]/50 rounded-full hover:bg-[#D4A017]/10 transition-colors text-center text-[#D4A017]">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 7 — РЕКЛАМА И РОЛИКИ
                ─────────────────────────────*/}
                <DebugWrapper id={9006} label="Card 7: Реклама и ролики">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542152341-3b7c4d5b248e?w=800&q=80"
                                alt="Рекламная аэросъёмка для брендов и компаний в Грузии"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">РЕКЛАМА И РОЛИКИ</span>
                            </div>
                            <p className="card-niches">Реклама · Корпоративы · Продукт</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Реклама и ролики</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Рекламные ролики, брендовый контент и корпоративное видео с воздуха для сайта и соцсетей.
                            </p>
                            <p className="card-specs">4K · Сценарий · Монтаж включён</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/реклама" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 8 — ТУРИЗМ
                ─────────────────────────────*/}
                <DebugWrapper id={9007} label="Card 8: Туризм">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1531737212413-667205e1cda7?w=800&q=80"
                                alt="Аэросъёмка природы и туристических локаций Грузии"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">ТУРИЗМ</span>
                            </div>
                            <p className="card-niches">Природа · Маршруты · Глэмпинги</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Туризм</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Cinematic аэросъёмка локаций Грузии. Горы, ущелья, замки — контент, который продаёт маршруты.
                            </p>
                            <p className="card-specs">4K · Cinematic · Лицензионная музыка</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/туризм" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>

                {/*─────────────────────────────
                CARD 9 — МЕРОПРИЯТИЯ
                ─────────────────────────────*/}
                <DebugWrapper id={9008} label="Card 9: Мероприятия">
                    <article className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col group" role="listitem">
                        <div className="h-56 relative w-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80"
                                alt="Аэросъёмка мероприятий в Тбилиси — ивенты и открытия с дрона"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div>
                                <span className="card-tag">МЕРОПРИЯТИЯ</span>
                            </div>
                            <p className="card-niches">Ивенты · Открытия · Спорт</p>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Мероприятия</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                                Аэросъёмка открытий, корпоративов, спортивных соревнований и фестивалей на открытом воздухе.
                            </p>
                            <p className="card-specs">4K · Многокамерный монтаж</p>
                            <div className="flex gap-3 mt-auto">
                                <a href="/аэросъёмка/мероприятия" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-center">ПОДРОБНЕЕ</a>
                                <a href="/contact" className="flex-1 px-4 py-3 text-xs font-bold uppercase tracking-widest bg-[#D4A017] text-black rounded-full hover:bg-[#b58813] transition-colors text-center">ЗАКАЗАТЬ</a>
                            </div>
                        </div>
                    </article>
                </DebugWrapper>


                {/*═══════════════════════════════════════════
                 CARD 10 — FULL WIDTH "ALL SERVICES" CARD
                ═══════════════════════════════════════════*/}
                <DebugWrapper id={9009} label="Card 10: Все услуги">
                    <article className="service-card--wide" role="listitem">
                        <div>
                            <span className="card-tag font-bold text-white mb-4">ВСЕ УСЛУГИ</span>
                            <h3 className="text-3xl font-semibold mb-4 text-white">Другие услуги аэросъёмки</h3>
                            <p className="text-white/70 text-base leading-relaxed mb-6 max-w-sm">
                                Не нашли нужное? У нас есть ещё. Смотрите полный список или опишите задачу — подберём формат под вашу задачу и бюджет.
                            </p>
                            <a href="/аэросъёмка" className="btn-gold-outline">
                                Все услуги аэросъёмки →
                            </a>
                        </div>

                        <div>
                            <ul className="tag-cloud" aria-label="Другие направления">
                                <li><span>Контроль территорий</span></li>
                                <li><span>Таймлапс и Hyperlapse</span></li>
                                <li><span>3D-модели объектов</span></li>
                                <li><span>Спорткомплексы и арены</span></li>
                                <li><span>Агро-съёмка</span></li>
                                <li><span>Склады и производства</span></li>
                                <li><span>Визуальная инспекция панелей</span></li>
                                <li><span>Другой запрос → обсудим</span></li>
                            </ul>
                        </div>
                    </article>
                </DebugWrapper>

            </div>
        </section>
    );
}
