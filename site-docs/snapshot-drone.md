# Breus Media — Drone — Аэросъёмка — 26 марта 2026
Страницы: /drone-service, /drone-service/monitoring-stroiki, /drone-real-estate, /drone-fpv-cinema, /drone-hotels-tourism, /drone-construction-monitoring, /drone-object-inspection, /drone-weddings-events, /drone-warehouses, /drone-services/drone-auto, /drone-services/drone-brand-video, /drone-services/drone-facade, /drone-services/drone-land-sale, /drone-services/drone-reporting, /drone-services/drone-restaurants, /drone-services/drone-solar, /drone-services/drone-sport, /drone-services/drone-territory, /drone-services/drone-warehouses, /drone-services/drone-wine

## /drone-service
Lines: 110
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneHeroStitch } from '@/components/drone/DroneHeroStitch';
import { DroneSocialProofStitch } from '@/components/drone/DroneSocialProofStitch';
import { DroneServicesStitch } from '@/components/drone/DroneServicesStitch';
import { DroneProcessStitch } from '@/components/drone/DroneProcessStitch';
import { DroneFlightConditionsNote } from '@/components/drone/DroneFlightConditionsNote';
import { DroneTrustLite } from '@/components/drone/DroneTrustLite';
import { DroneMapStitch } from '@/components/drone/DroneMapStitch';
import { DronePricingStitch } from '@/components/drone/DronePricingStitch';
import { DroneGoogleTrustLite } from '@/components/drone/DroneGoogleTrustLite';
import { DroneFAQExpanded } from '@/components/drone/DroneFAQExpanded';
import { DroneRelatedLinksCompact } from '@/components/drone/DroneRelatedLinksCompact';
import { DroneContactStitch } from '@/components/drone/DroneContactStitch';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { DronePageScrollProgress } from '@/components/drone/DronePageScrollProgress';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { droneServiceItems } from '@/components/drone/droneServicesData';
import { droneDirectionPages } from '@/constants/droneDirectionPages';
import { buildDirectionJsonLd, buildDirectionMetadata } from '@/lib/seo/directionSeo';

const pageConfig = droneDirectionPages.droneService;
const jsonLdSchemas = buildDirectionJsonLd(
    pageConfig,
    droneServiceItems.map((service) => service.title)
);

export const metadata: Metadata = buildDirectionMetadata(pageConfig);

export default function DroneServicePage() {
    return (
        <main className="relative min-h-screen bg-[#080808] text-white">
            {jsonLdSchemas.map((schema, index) => (
                <script
                    key={`drone-service-schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <DronePageScrollProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />
            <div className="pointer-events-none absolute left-0 right-0 top-[92px] z-[950]">
                <div className="container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="pointer-events-auto">
                        <ol className="flex items-center gap-2 text-xs tracking-wide text-white/55">
                            <li>
                                <Link href="/" className="transition-colors hover:text-white/80">
                                    Главная
                                </Link>
                            </li>
                            <li aria-hidden className="text-white/30">
                                →
                            </li>
                            <li aria-current="page" className="text-white/70">
                                Аэросъёмка
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <DebugWrapper id={10100} label="Hero Section">
                <DroneHeroStitch hero={pageConfig.hero} />
            </DebugWrapper>
            <DebugWrapper id={10200} label="Social Proof Section">
                <DroneSocialProofStitch />
            </DebugWrapper>
            <DebugWrapper id={10300} label="Services Section">
                <DroneServicesStitch />
            </DebugWrapper>
            <DebugWrapper id={10500} label="Process Section">
                <DroneProcessStitch />
            </DebugWrapper>
            <DebugWrapper id={10550} label="Flight Conditions Note">
                <DroneFlightConditionsNote />
            </DebugWrapper>
            <DebugWrapper id={10400} label="Trust Lite Section">
                <DroneTrustLite trust={pageConfig.trust} />
            </DebugWrapper>
            <DebugWrapper id={10600} label="Map Section">
                <DroneMapStitch />
            </DebugWrapper>
            <DebugWrapper id={10700} label="Pricing Section">
                <DronePricingStitch />
            </DebugWrapper>
            <DebugWrapper id={10750} label="Google Trust Lite Section">
                <DroneGoogleTrustLite googleTrust={pageConfig.googleTrust} />
            </DebugWrapper>
            <DebugWrapper id={10800} label="FAQ Section">
                <DroneFAQExpanded />
            </DebugWrapper>
            <DebugWrapper id={10850} label="Related Links Section">
                <DroneRelatedLinksCompact links={pageConfig.relatedLinks} />
            </DebugWrapper>
            <DebugWrapper id={10900} label="Contact Section">
                <DroneContactStitch />
            </DebugWrapper>
            <DebugWrapper id={11000} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}

```
---
---

## /drone-service/monitoring-stroiki
Lines: 53
```tsx
'use client';

import React from 'react';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

export default function MonitoringStroikiPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            {/* Global Header in Internal Mode (isLanding={false} by default) */}
            <SmartHeader transparent={true} isLanding={false} />

            <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
                <DebugWrapper id={12000} label="Hero Section - Monitoring">
                    <div className="flex flex-col gap-6">
                        <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-sm">Услуга</span>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Мониторинг <br />
                            <span className="text-white/20">Стройки</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Профессиональный видеоконтроль и аэрофотофиксация этапов строительства.
                            Отчетность в 4K и создание таймлапсов для инвесторов.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all">
                                Заказать отчет
                            </button>
                        </div>
                    </div>
                </DebugWrapper>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Таймлапсы", desc: "Визуализация прогресса за весь период строительства." },
                        { title: "4K Контроль", desc: "Детальная съемка узлов и конструкций с воздуха." },
                        { title: "Облако", desc: "Доступ к архиву материалов 24/7 из любой точки мира." }
                    ].map((item, i) => (
                        <DebugWrapper key={i} id={12100 + i} label={`Feature: ${item.title}`}>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-colors group">
                                <h3 className="text-xl font-bold uppercase mb-4 text-[#D4AF37] group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </DebugWrapper>
                    ))}
                </div>
            </div>

            {/* Tickers are already integrated into SmartHeader */}
        </main>
    );
}

```
---
---

## /drone-real-estate
Lines: 1150
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-real-estate/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-real-estate/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ListCard = {
    title: string;
    text: string;
};

type MetricCard = {
    value: string;
    text: string;
    source?: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type AudienceCard = {
    title: string;
    text: string;
};

type UseCaseCard = {
    title: string;
    text: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка недвижимости и зачем она нужна?',
        answer:
            'Аэросъёмка — это фото и видео объекта с высоты от 30 до 120 метров с помощью дрона. Для недвижимости это значит: покупатель видит не только интерьер, но и расположение дома, вид из окна, двор и ближайшее окружение. Это особенно важно для иностранных покупателей, которые не могут приехать на осмотр.',
    },
    {
        question: 'Чем аэросъёмка лучше обычных фото с земли?',
        answer:
            'Обычное фото показывает стены и комнаты. Аэрофото показывает масштаб объекта, расположение в квартале, вид на горы или центр города, расстояние до парка или школы. Для квартиры на 15-м этаже — это единственный способ показать реальный вид из окна.',
    },
    {
        question: 'Можно ли летать дроном в Тбилиси?',
        answer:
            'Да. Мы работаем в соответствии с правилами Агентства гражданской авиации Грузии (GCAA). Максимальная высота полёта — 120 м. В черте города съёмка разрешена в большинстве районов при соблюдении ограничений. Отдельные зоны вблизи аэропорта и госучреждений требуют дополнительного согласования — мы берём это на себя.',
    },
    {
        question: 'Нужны ли специальные разрешения?',
        answer:
            'Для коммерческой съёмки дрон должен быть зарегистрирован в GCAA. Наш дрон зарегистрирован. Для съёмки в стандартных жилых районах дополнительных разрешений обычно не требуется. Если объект находится в зоне ограничений — уточним заранее и организуем согласование.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'Дрон летает при ветре до 10–12 м/с и без осадков. Если погода в день съёмки не позволяет подняться — переносим на ближайший подходящий день без доплат. Обычно ожидание не превышает 1–2 рабочих дня.',
    },
    {
        question: 'Как долго длится съёмка на объекте?',
        answer:
            'Съёмка квартиры или дома занимает 1–2 часа на месте. ЖК или крупный объект — 2–3 часа. После этого ещё 1–2 рабочих дня на монтаж и обработку. Итого: от заявки до готовых файлов — обычно 2–4 рабочих дня.',
    },
    {
        question: 'Что такое FPV-съёмка и чем она отличается от обычного дрона?',
        answer:
            'FPV (First Person View) — это динамичная съёмка на DJI Avata 2. Он летает быстро и маневренно: пролетает вдоль фасадов, через открытые пространства и снимает динамичные облёты. Обычный дрон DJI Air 3S летает плавно и делает стабильные панорамные кадры — для видео-туров, объявлений и презентаций.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка недвижимости в Тбилиси?',
        answer:
            'Базовый пакет фото + видео-тур — от 350 ₾ за объект. Стандартный пакет с Reels — от 600 ₾. Инвест-пакет с FPV — от 1 200 ₾. Точный расчёт — бесплатно, в течение 2 часов после заявки.',
    },
    {
        question: 'В каком формате я получу материалы?',
        answer:
            'Фото — JPG, высокое разрешение. Видео — MP4, качество 4K. Вертикальные Reels — 9:16, MP4. Всё передаётся через Google Drive или Telegram. Оригиналы без водяного знака, права на коммерческое использование включены.',
    },
    {
        question: 'Сколько времени от заявки до готовых файлов?',
        answer:
            'Съёмка проходит в согласованный день. Обработка и монтаж — 48 часов после съёмки. Итого: обычно 2–4 рабочих дня от первого контакта до готового контента.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Основной рынок — Тбилиси и ближайшая область. Батуми, Кутаиси и другие регионы — по договорённости. Стоимость выезда рассчитывается индивидуально.',
    },
    {
        question: 'Можно ли заказать регулярную съёмку для нескольких объектов?',
        answer:
            'Да. Если вы агентство недвижимости или застройщик с потоком объектов — обсудим ежемесячный пакет. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Снимаете ли вы строящиеся объекты?',
        answer:
            'Да. Для строящихся ЖК снимаем прогресс стройки, вид с высоты будущих этажей и локацию. Это сильный контент для старта продаж — покупатель видит реальную картину, а не только рендер.',
    },
    {
        question: 'Можно ли снять вид из конкретного окна или этажа?',
        answer:
            'Да, это одна из самых востребованных услуг. Поднимаем дрон на высоту вашего этажа и снимаем в направлении, в котором будет выходить окно. Покупатель видит свой будущий вид заранее.',
    },
    {
        question: 'Что если результат меня не устроит?',
        answer:
            'В каждый пакет включена 1 итерация правок — если что-то нужно перемонтировать. Обсудим пожелания до съёмки, чтобы результат совпал с ожиданиями.',
    },
];

const experienceCards: ListCard[] = [
    {
        title: 'Сценарий 1 — Риелтор',
        text:
            'Покупатель открывает объявление и видит аэрофото: дом сверху, двор, парк рядом и вид из будущего окна. Он понимает, подходит ли ему это место, ещё до звонка агенту.',
    },
    {
        title: 'Сценарий 2 — Застройщик',
        text:
            'Иностранный инвестор смотрит короткое видео: ЖК, окружение, расстояние до центра и ключевых точек. Он задаёт предметные вопросы вместо просьбы сначала показать район.',
    },
    {
        title: 'Сценарий 3 — Владелец дома',
        text:
            'Хозяин виллы или коттеджа публикует 30-секундный FPV-облёт. Масштаб участка и виды читаются сразу, поэтому запрос приходит раньше, чем клиент успевает дойти до галереи обычных фото.',
    },
];

const socialProofCards: MetricCard[] = [
    {
        value: '85%',
        text: 'покупателей недвижимости ожидают видео об объекте до просмотра.',
        source: 'NAR, 2024',
    },
    {
        value: '68%',
        text: 'быстрее продаются объекты с аэрофото по сравнению с объектами без него.',
        source: 'Redfin, 2024',
    },
    {
        value: '60%',
        text: 'времени на листинге покупатель проводит в фото и видео, а не в описании.',
    },
    {
        value: 'Редкость',
        text: 'На рынке Тбилиси большинство объявлений всё ещё ограничиваются фото с телефона. Аэросъёмка остаётся заметным преимуществом.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Риелтор',
        text:
            'Объект сильный, но фото с телефона. Покупатель смотрит визуал и уходит к соседнему объявлению, где подача понятнее уже с первой секунды.',
    },
    {
        title: 'Застройщик',
        text:
            'Иностранные инвесторы не летят смотреть стройку. Им нужно короткое видео с районом, видом и локацией на карте, а не длинная переписка.',
    },
    {
        title: 'Девелопер ЖК',
        text:
            'Показываете рендеры, а клиент хочет видеть текущую реальность: что сейчас на площадке, как выглядит окружение и какой будет вид из будущего окна.',
    },
    {
        title: 'Владелец дома или виллы',
        text:
            'Красивый участок и масштаб территории не раскрываются обычными фото. Чтобы почувствовать пространство, нужно подняться выше уровня земли.',
    },
    {
        title: 'Агентство недвижимости',
        text:
            'Конкуренты уже добавляют аэрофото и короткие пролёты. Если этого нет у вас, разница заметна и в объявлениях, и в переговорах с собственниками.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Покупатель видит объект до звонка',
        text: 'Он уже принял предварительное решение. Ваш разговор начинается не с объяснений района, а с подтверждения интереса.',
    },
    {
        title: 'Иностранный инвестор смотрит дистанционно',
        text: 'Не нужно организовывать отдельный выезд. Видео и фото закрывают большую часть вопросов по локации ещё до перелёта в Тбилиси.',
    },
    {
        title: 'Вид из окна заранее',
        text: 'Для строящегося ЖК снимаем с высоты будущего этажа. Клиент видит не обещание, а понятный визуальный ориентир.',
    },
    {
        title: 'Листинг выделяется среди похожих',
        text: 'На SS.ge и MyHome.ge аэрофото всё ещё редкость. Это помогает объекту выглядеть собраннее уже в первой выдаче.',
    },
    {
        title: 'Один выезд закрывает несколько задач',
        text: 'Из одной съёмки вы получаете фото, видео-тур, Reels и материал для сайта, презентации или соцсетей отдела продаж.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'Базовый пакет',
        subtitle: 'Фото + Видео',
        items: [
            '20–25 аэрофото JPG: фасад, двор, локация, разные ракурсы',
            'Видео-облёт 2–3 минуты с музыкой',
            'Top-down кадры для понимания участка и окружения',
            'Вид из окна с высоты вашего этажа',
            'Доставка через Google Drive или Telegram',
            'Срок: 48 часов после съёмки',
        ],
    },
    {
        title: 'Расширенный пакет',
        subtitle: '+ Reels',
        items: [
            'Всё из базового пакета',
            '2–3 вертикальных клипа по 30–60 секунд для Instagram, Stories и Reels',
            'Горизонтальная версия для YouTube и сайта',
            'Адаптация под 9:16 и 16:9',
        ],
    },
    {
        title: 'FPV-пакет',
        subtitle: 'Динамика на DJI Avata 2',
        items: [
            'FPV-облёт через объект и вокруг него',
            'Монтаж 30–60 секунд под соцсети или рекламу',
            'Кинематографичный темп и более быстрые пролёты',
            'Доставка за 48–72 часа',
        ],
    },
];

const includedItems = [
    'Оригинальные файлы без водяного знака',
    'Право на коммерческое использование',
    '1 итерация правок',
];

const audienceCards: AudienceCard[] = [
    {
        title: 'Риелторы и агентства',
        text: 'Для объявлений на SS.ge, MyHome.ge и в соцсетях. Выделяетесь среди конкурентов и получаете более тёплые запросы.',
    },
    {
        title: 'Застройщики и девелоперы ЖК',
        text: 'Для сайта проекта, инвест-презентаций и Instagram. Показываете реальность, а не только рендеры.',
    },
    {
        title: 'Инвестиционные агентства',
        text: 'Для удалённых клиентов из России, ОАЭ и Европы. Видео закрывает вопросы по локации без выезда.',
    },
    {
        title: 'Владельцы домов, вилл и апарт-отелей',
        text: 'Для продажи или аренды объектов, где масштаб и вид невозможно передать только интерьерной съёмкой.',
    },
    {
        title: 'Апарт-отели и Airbnb',
        text: 'Аэровидео для карточек размещения и соцсетей. Гость видит территорию и окружение до бронирования.',
    },
];

const useCaseCards: UseCaseCard[] = [
    {
        title: 'ЖК в Сабуртало или Ваке',
        text:
            'Снимаем фасад, двор, вид на город и расстояние до центра. Итог: видео для сайта и Instagram, которое помогает иностранным покупателям понять локацию дистанционно.',
    },
    {
        title: 'Вилла или дом в пригороде Тбилиси',
        text:
            'Показываем размер участка, рельеф, зелень и вид на горы. Покупатель сразу видит масштаб, а не достраивает картину по описанию.',
    },
    {
        title: 'Инвест-квартира для иностранного покупателя',
        text:
            'Снимаем вид с высоты будущего этажа, район и инфраструктуру. Видео удобно отправить в мессенджер, чтобы решение принималось без перелёта.',
    },
    {
        title: 'Апарт-отель или Airbnb в Старом городе',
        text:
            'FPV-пролёт через балкон, двор и крыши даёт короткий ролик для Instagram, который помогает объекту запомниться среди типовых карточек.',
    },
];

const evidenceCards: MetricCard[] = [
    {
        value: '403%',
        text: 'больше запросов получают объявления с аэрофото по сравнению с объявлениями без него.',
        source: 'Realtor.com, 2023',
    },
    {
        value: '73%',
        text: 'покупателей говорят, что видео повлияло на решение посетить объект.',
        source: 'NAR Survey, 2024',
    },
    {
        value: 'Тбилиси',
        text: 'На локальном рынке большинство объявлений всё ещё обходятся только фото с телефона. Аэросъёмка остаётся вашим конкурентным окном.',
    },
    {
        value: 'Remote first',
        text: 'Для покупателей из России, ОАЭ, Израиля и Германии удалённый просмотр — часто обязательный первый этап, а не дополнительная опция.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Нишевый подход под недвижимость',
        text: 'У риелтора, девелопера и инвест-агентства разные задачи. Поэтому страница, пакеты и подача собраны именно под рынок недвижимости.',
    },
    {
        title: 'Два дрона под две разные задачи',
        text: 'DJI Air 3S закрывает плавные панорамы и обзорные кадры. DJI Avata 2 отвечает за быстрые FPV-пролёты для Reels и рекламы.',
    },
    {
        title: 'Работаем в рамках GCAA',
        text: 'Дрон зарегистрирован, ограничения по зонам в Тбилиси проверяем заранее. Если нужно согласование, организуем его до дня съёмки.',
    },
    {
        title: 'Пакеты с понятным входом',
        text: 'На странице сразу видны форматы и цены: от 350 ₾, от 600 ₾ и от 1 200 ₾. Точный расчёт отправляем в течение 2 часов.',
    },
    {
        title: 'Материалы готовы к публикации',
        text: 'Фото, смонтированное видео, вертикальные Reels и файлы без водяного знака можно сразу ставить в листинг, сайт или презентацию.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка',
        text: 'Вы отправляете адрес, тип объекта и задачу. Мы уточняем формат и присылаем расчёт в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Согласование',
        text: 'Подбираем дату, время и сценарий съёмки. Проверяем ограничения по полётам в районе объекта.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Приезжаем на объект с DJI Air 3S и при необходимости DJI Avata 2. На месте обычно нужно 1–2 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка',
        text: 'Обрабатываем фото, собираем видео, подготавливаем вертикальные версии и передаём готовые файлы через Google Drive или Telegram.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'Пакет 1: Базовый',
        price: 'от 350 ₾',
        subtitle: 'Для риелторов и частных объявлений',
        items: [
            '20–25 аэрофото JPG',
            'Видео-тур 2–3 минуты',
            'Вид из окна с воздуха',
            'Доставка за 48 часов',
            'Право на коммерческое использование',
        ],
    },
    {
        title: 'Пакет 2: Стандарт',
        price: 'от 600 ₾',
        subtitle: 'Для застройщиков и агентств',
        items: [
            '30–40 аэрофото JPG',
            'Видео-тур 3–4 минуты',
            '2 вертикальных Reels по 30–60 сек',
            'Горизонтальная и вертикальная версии',
            'Вид из окна + обзор локации сверху',
            'Доставка за 48 часов',
        ],
        popular: true,
    },
    {
        title: 'Пакет 3: Инвест',
        price: 'от 1 200 ₾',
        subtitle: 'Для инвест-агентств и девелоперов',
        items: [
            '40–60 аэрофото',
            'Видео-тур 4–6 минут',
            'FPV-пролёт DJI Avata 2 на 30–60 сек',
            '3 вертикальных Reels',
            'Локационный обзор района',
            'Доставка за 72 часа',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Добавьте интерактивный просмотр внутри объекта, чтобы клиент мог пройти квартиру или дом прямо в браузере.',
    },
    {
        title: 'Дрон-мониторинг строительства',
        href: '/drone-service/monitoring-stroiki',
        text: 'Регулярные выезды и отчёты для девелоперов, инвесторов и банков по ходу стройки.',
    },
    {
        title: 'AI virtual staging',
        href: '/ai-visualization-service',
        text: 'Пустая квартира превращается в обставленную визуализацию без мебели и отдельной интерьерной съёмки.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка недвижимости в Тбилиси',
    description:
        'Дрон-съёмка квартир, ЖК, домов и земельных участков. Аэрофото, видео-туры и FPV-пролёты для риелторов, застройщиков и инвесторов в Тбилиси.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
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
        price: '350',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, 360° туры, промо-видео для бизнеса в Тбилиси.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Аэросъёмка недвижимости в Тбилиси | Дрон для ЖК и риелторов | Breus Media',
    description:
        'Аэрофото и видео объектов недвижимости в Тбилиси. Инвесторы видят квартиру и район дистанционно. От 350 ₾. Доставка за 48 часов.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-real-estate',
    },
};

export default function DroneRealEstatePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={381100} label="Hero Section">
                <section
                    id="drone-real-estate-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Аэросъёмка недвижимости · Тбилиси
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Аэросъёмка недвижимости для риелторов и застройщиков в Тбилиси
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Показываем объект с воздуха: квартиру, дом, ЖК или участок. Покупатель видит район,
                                    виды и окружение ещё до первого звонка и быстрее понимает, подходит ли ему этот объект
                                    в Тбилиси.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка объекта — 1–2 часа, монтаж — 1–2 рабочих дня.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Что получает клиент</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 350 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для квартиры, дома или участка в Тбилиси.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Доставка</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">1 итерация</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Правок</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Аэрофото фасада, двора и локации</li>
                                        <li>Видео-тур для сайта, листинга и мессенджера</li>
                                        <li>FPV-пролёты для Reels и рекламы при необходимости</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381120} label="What Is Section">
                <section id="tour-what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка для недвижимости</h2>
                                <p className="mt-5 max-w-3xl leading-relaxed text-white/74">
                                    Аэросъёмка недвижимости — это фото и видео объекта с высоты 30–120 метров. Дрон снимает
                                    квартиру, дом, участок или ЖК с разных сторон и высот, показывает вид из окна, район,
                                    подъезды и инфраструктуру вокруг. В результате покупатель или инвестор получает не только
                                    интерьер, но и контекст: где стоит объект, что рядом и какой вид открывается.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-[#2a2a2a] bg-[#131313] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Это работает для</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                    <li>Объявлений на SS.ge и MyHome.ge</li>
                                    <li>Инвест-презентаций для иностранных покупателей</li>
                                    <li>Сайтов застройщиков и Instagram девелоперов</li>
                                    <li>Видео для удалённого просмотра без выезда на объект</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381140} label="Experience Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит для вашего клиента</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Один и тот же выезд по-разному работает для риелтора, застройщика и владельца объекта, но
                                во всех сценариях убирает лишние вопросы ещё до показа.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {experienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381200} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Цифры рынка</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Реальные кейсы Breus Media для этой страницы появятся после первых проектов. Пока опираемся на
                                рыночные сигналы и на то, как покупатели выбирают объект онлайн.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>

                        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/58">
                            Реальные кейсы Breus Media появятся после первых проектов. Свяжитесь с нами, если хотите обсудить
                            пилотный проект на выгодных условиях.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381250} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте себя?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Обычно потребность в аэросъёмке появляется не из-за тренда, а из-за конкретных узких мест в
                                продаже объекта или презентации ЖК.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381300} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что меняется, когда есть аэросъёмка</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот формат помогает не просто показать объект, а сократить путь от первого просмотра до
                                предметного разговора о покупке или показе.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381305} label="Mid CTA Section 1">
                <MidCta
                    text="Есть объект или ЖК в Тбилиси, который нужно снять? Обсудим формат и пришлём примеры в течение 30 минут."
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={381350} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны под разные задачи: быстрый листинг, контент для отдела продаж и динамичный
                                формат для соцсетей или рекламы.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[18px] border border-[#FFD23F]/20 bg-[#111111] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Все пакеты включают</p>
                            <div className="mt-4 grid gap-3 md:grid-cols-3">
                                {includedItems.map((item) => (
                                    <div key={item} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/74">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381360} label="Audience Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Кому подходит аэросъёмка недвижимости</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В Тбилиси один и тот же формат помогает и частным продажам, и девелоперским задачам, и
                                удалённой квалификации инвесторов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {audienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381380} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это применяется в Тбилиси</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже — четыре типовых сценария, в которых аэрофото, обзорное видео и FPV действительно
                                помогают объекту продаваться понятнее.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {useCaseCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={381500} label="Portfolio Section">
                    <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold md:text-4xl">Примеры работ</h2>
                                <p className="mt-4 leading-relaxed text-white/70">
                                    Реальные кейсы на этой странице появятся после первых проектов. Сейчас блок отмечен как
                                    честный placeholder, чтобы не имитировать портфолио до съёмок в Тбилиси.
                                </p>
                            </div>

                            <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                                <p className="text-lg font-semibold text-white">Портфолио наполняется</p>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                    Мы только начинаем накапливать портфолио в Тбилиси. Свяжитесь с нами, чтобы обсудить
                                    пилотный проект на специальных условиях. Первые 5 клиентов получают съёмку по
                                    себестоимости.
                                </p>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={381520} label="Evidence Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему аэросъёмка работает — не мнение, а данные</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот блок собран для тех, кто хочет аргументировать запуск услуги цифрами, а не только визуальным впечатлением.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {evidenceCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-2xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для тех, кто впервые сталкивается с аэросъёмкой" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={381700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={381560} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media, а не просто дрон-оператор</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Здесь важен не только полёт, но и то, как собран маршрут, что увидит клиент и под какой канал вы публикуете контент.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381399} label="Process Note Section">
                <ProcessNote text="Съёмка объекта занимает 1–2 часа — без остановки продаж и показов" />
            </DebugWrapper>

            <DebugWrapper id={381400} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От первого сообщения до готовых файлов обычно проходит 2–4 рабочих дня, если погода позволяет летать по плану.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381600} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет стартует от 350 ₾, стандартный — от 600 ₾, инвест-формат с FPV — от 1 200 ₾. Если нужно, соберём свой состав под конкретный объект.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш объект или задачу?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={381620} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если объекту нужна более широкая упаковка, эти услуги чаще всего заказывают вместе с аэрофото и обзорным видео.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={381800} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Опишите объект — мы ответим в течение 2 часов и пришлём расчёт. Работаем с квартирами, домами, ЖК и участками по Тбилиси и ближайшей области.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram просто укажите ваш юзернейм в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                        <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                            <option>Квартира</option>
                                            <option>Дом</option>
                                            <option>ЖК</option>
                                            <option>Участок</option>
                                            <option>Другое</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Что нужно снять</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Адрес, что важно показать, нужен ли FPV, есть ли дедлайн и куда пойдут материалы"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={381900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-fpv-cinema
Lines: 1091
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-fpv-cinema/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-fpv-cinema/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ProductCard = {
    title: string;
    subtitle: string;
    text: string;
    specs: string;
};

type ListCard = {
    title: string;
    text: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const productCards: ProductCard[] = [
    {
        title: 'FPV flythrough (DJI Avata 2)',
        subtitle: 'Продукт 1',
        text:
            'Динамичные пролёты сквозь пространство: рестораны, отели, шоурумы, ивент-площадки, жилые объекты. Скорость, манёвренность и «невозможные» траектории.',
        specs: 'Сенсор 1/1.3", 4K/100fps, D-Log M — подходит для профессионального грейда.',
    },
    {
        title: 'Cinematic aerials (DJI Air 3S)',
        subtitle: 'Продукт 2',
        text:
            'Плавные установочные и проходные кадры с воздуха. Двойная камера: 1" wide + 70mm medium tele. Формат для рекламы, недвижимости и продакшна.',
        specs: '4K120, 4K60 HDR, 10-bit D-Log M — материал для профессионального монтажа и цветокоррекции.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Ограниченное окно света',
        text: 'Нужен вау-кадр, но боюсь что не попадём с первого дубля — окно света и локация ограничены.',
    },
    {
        title: 'Нужна съёмка внутри пространства',
        text: 'Обычный дрон снимает только снаружи. Мне нужно показать пространство изнутри — за одним непрерывным кадром.',
    },
    {
        title: 'Контент не адаптирован под соцсети',
        text: 'Хочу контент под Reels и TikTok, а не просто красивое видео которое некуда поставить.',
    },
    {
        title: 'Риски по разрешениям',
        text: 'Не знаю можно ли летать в моей локации — боюсь проблем с разрешениями.',
    },
    {
        title: 'Нужен локальный FPV-оператор',
        text:
            'Иностранный продакшн ищет локального FPV-оператора в Грузии с правильным workflow — без неприятных сюрпризов на площадке.',
    },
    {
        title: 'Съёмка без остановки работы',
        text:
            'Хочу показать ресторан/отель атмосферно, но не понимаю как это организовать без остановки работы заведения.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Один непрерывный кадр от входа до финала',
        text: 'FPV-пролёт заменяет длинный монтаж — пространство читается за 30 секунд.',
    },
    {
        title: 'Планируем траекторию до съёмки',
        text: 'Shot-list и pre-flight walkthrough. Ключевой пролёт — минимум 2–3 дубля. Вы знаете результат до монтажа.',
    },
    {
        title: 'Контент готов под все платформы',
        text: 'Вертикальные Reels, горизонтальный hero и короткие hook-клипы — всё нарезаем сразу.',
    },
    {
        title: 'Работаем в рамках правил GCAA',
        text:
            'Для сложных зон и съёмок рядом с событиями берём согласование на себя. Если локация запрещена — предлагаем альтернативный кадр.',
    },
    {
        title: 'Понятен для международного продакшна',
        text:
            'Работаем по шот-листу режиссёра, отдаём исходники, общаемся на RU и EN. Понимаем контекст Film in Georgia.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ ПАКЕТ',
        subtitle: 'Social / Small Business',
        items: [
            'До 1 часа на локации',
            '1 hero-ролик 30–45 сек (вертикальный)',
            '5–8 коротких клипов 6–10 сек для Reels/TikTok',
            'Базовая стабилизация, цвет, музыка',
            'Доставка: 48 часов (Google Drive / Telegram)',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Real Estate / Hotels',
        items: [
            'До 2 часов на объекте',
            'FPV-пролёт внутри + 1–2 кадра с Air 3S снаружи',
            'Hero-ролик 60–90 сек (horizontal или mixed)',
            '10–15 вертикальных клипов под соцсети',
            '5–10 аэрофото по запросу',
            'Доставка: 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН-ПАКЕТ',
        subtitle: 'Agencies / Film',
        items: [
            'Half-day или full-day по шот-листу режиссёра',
            'Pre-production: бриф, рекогносцировка, safety-план',
            'Несколько дублей ключевых пролётов',
            'Исходники (RAW) — включены',
            'Line-item смета под проект',
            'Коммуникация RU/EN',
        ],
    },
];

const allPackagesItems: string[] = [
    'Оригиналы без водяного знака',
    'Право на коммерческое использование',
    '1 итерация правок по монтажу',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Рестораны и бары',
        pain: 'Показать атмосферу и зонирование быстро, не мешая гостям.',
        solution: 'Съёмка в тихие часы, маршрут «вход → бар → зал → подача».',
        deliverables: '30–45 сек вертикальный ролик + 5–8 клипов по зонам.',
    },
    {
        title: 'Отели и апарт-отели',
        pain: 'Показать номер, лобби и территорию за 30 секунд для Booking.',
        solution: 'FPV «лобби → коридор → номер → вид» + 2–3 внешних кадра.',
        deliverables: '45–60 сек hero + 3 версии 15 сек под OTA/соцсети.',
    },
    {
        title: 'Недвижимость и девелоперы',
        pain: 'Покупатель хочет «почувствовать» квартиру, а не смотреть слайды.',
        solution: 'FPV walkthrough + установочные кадры фасада и локации.',
        deliverables: '60–90 сек тур + 10–15 вертикальных клипов.',
    },
    {
        title: 'Ивент-площадки и клубы',
        pain: 'Нужно зрелищно показать площадку до мероприятия.',
        solution: 'Staged-пролёт до открытия, без публики — без ограничений GCAA.',
        deliverables: 'Aftermovie 45–90 сек + 10–20 клипов «под ночь».',
    },
    {
        title: 'Рекламные агентства и продакшн',
        pain: 'Нужен конкретный кадр по шот-листу, предсказуемо и без задержек.',
        solution: 'Продакшн-workflow, 2–3 дубля ключевого пролёта, исходники.',
        deliverables: 'Исходники + смонтированный hero по ТЗ.',
    },
    {
        title: 'Иностранные продакшны в Грузии',
        pain: 'Нужен локальный FPV-оператор который понимает permits и workflow.',
        solution:
            'Знаем правила GCAA, работаем как local drone unit, RU/EN коммуникация, понимаем контекст Film in Georgia (20–25% rebate).',
        deliverables: 'По шот-листу, line-item смета, исходники.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое FPV-съёмка и чем она отличается от обычного дрона?',
        answer:
            'FPV (First Person View) — это съёмка на манёвренном маленьком дроне, который летает быстро и точно: пролетает сквозь дверные проёмы, вдоль стен, по сложным траекториям внутри помещений. Обычный дрон (как DJI Air 3S) летает плавно и снимает стабильные панорамы снаружи. Мы используем оба — FPV для динамики и атмосферы, кино-дрон для установочных кадров.',
    },
    {
        question: 'Можно ли снимать FPV внутри помещения?',
        answer:
            'Да. FPV-дрон DJI Avata 2 специально рассчитан на съёмку в закрытых пространствах — рестораны, лобби отелей, шоурумы, офисы. Перед съёмкой делаем walkthrough и согласуем маршрут.',
    },
    {
        question: 'Законно ли летать FPV-дроном в Тбилиси?',
        answer:
            'Да, при соблюдении правил GCAA. Наш дрон зарегистрирован. Для съёмок внутри и на закрытых локациях специальных разрешений обычно не требуется. Для съёмок рядом с публичными событиями и в зонах ограничений — решаем это на этапе брифа.',
    },
    {
        question: 'Можно ли снимать при работающих гостях или посетителях?',
        answer:
            'Рекомендуем снимать в тихие часы — до открытия или между сменами. Это даёт чистый кадр и не мешает работе заведения. Для постановочных пролётов на ивентах — снимаем до прихода гостей или в технические перерывы.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer: 'Для наружной съёмки — ветер до 10–12 м/с, без осадков. Внутренняя FPV-съёмка — не зависит от погоды совсем.',
    },
    {
        question: 'Что значит «продакшн-подход»?',
        answer:
            'Это значит что мы не приезжаем и просто «летаем». Мы сначала изучаем задачу: нужный кадр, маршрут, условия локации, ограничения. Снимаем по плану с дублями ключевых пролётов. Отдаём смонтированный результат под ваши платформы в оговорённые сроки.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит FPV-съёмка в Тбилиси?',
        answer:
            'Базовый пакет для ресторана или отеля — от 400 ₾. Стандартный пакет для недвижимости — от 700 ₾. Продакшн-пакет (half-day, по шот-листу) — от 1 500 ₾. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Что входит в базовый результат?',
        answer:
            '1 hero-ролик 30–45 сек (вертикальный) + 5–8 коротких клипов 6–10 сек для Reels. Базовая стабилизация, цвет, музыка. Доставка через Google Drive или Telegram за 48 часов.',
    },
    {
        question: 'Можно получить исходники (RAW)?',
        answer:
            'Да, в продакшн-пакете исходники включены по умолчанию. В базовом и стандартном пакете — по запросу, уточняем на этапе брифа.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Базовый пакет — 1–2 часа на локации. Стандарт — до 3 часов. Продакшн (half-day) — 4–5 часов по шот-листу. Монтаж и доставка — 48–72 часа после съёмки.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Сигнахи, Кутаиси и другие локации — по договорённости. Стоимость выезда рассчитывается индивидуально.',
    },
    {
        question: 'Как вы работаете с иностранными продакшнами?',
        answer:
            'Коммуникация на RU и EN. Работаем по шот-листу режиссёра, даём line-item смету, отдаём исходники. Знаем правила GCAA и локальные особенности съёмок в Тбилиси. Понимаем контекст Film in Georgia (20–25% rebate на расходы в Грузии).',
    },
    {
        question: 'Можно ли снять FPV на свадьбе или мероприятии с людьми?',
        answer:
            'По правилам GCAA полёты БПЛА рядом с публичными событиями требуют специального согласования. Поэтому для ивентов рекомендуем staged-формат: пролёт площадки до прихода гостей или в технический перерыв. Это даёт чистый кадр и полную безопасность без бюрократических рисков.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Два дрона — два типа съёмки под одну задачу',
        text:
            'DJI Avata 2 для FPV-пролётов внутри и снаружи. DJI Air 3S для кинематографичных установочных кадров. Не выбираете между динамикой и стабильностью — берёте оба.',
    },
    {
        title: 'Продакшн-подход, не «просто полёт»',
        text: 'Бриф → план траектории → дубли → монтаж под платформы. Вы знаете что получите ещё до съёмки.',
    },
    {
        title: 'Единственные в Грузии с нишевой FPV-страницей',
        text: 'Локальные операторы предлагают «дрон для всего». Мы специализируемся — и это видно в структуре предложения.',
    },
    {
        title: 'Работаем в рамках GCAA',
        text: 'Знаем ограничения по зонам. Для сложных локаций берём согласование на себя.',
    },
    {
        title: 'Понятны для международного продакшна',
        text: 'RU/EN коммуникация, line-item смета, исходники, знание Film in Georgia. Работаем как local drone unit.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 400 ₾',
        subtitle: 'Для ресторанов, отелей, малого бизнеса',
        items: [
            'До 1 часа на локации (FPV Avata 2)',
            'Hero-ролик 30–45 сек (вертикальный)',
            '5–8 клипов 6–10 сек для Reels/TikTok',
            'Стабилизация, цвет, музыка',
            'Доставка за 48 часов',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 700 ₾',
        subtitle: 'Для недвижимости, отелей, девелоперов',
        items: [
            'До 2–3 часов (FPV внутри + Air 3S снаружи)',
            'Hero-ролик 60–90 сек (horizontal + vertical)',
            '10–15 клипов под соцсети',
            '5–10 аэрофото по запросу',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 1 500 ₾',
        subtitle: 'Для агентств, продакшнов, иностранных команд',
        items: [
            'Half-day по шот-листу режиссёра',
            'Pre-production: бриф, рекогносцировка, safety-план',
            'Несколько дублей ключевых пролётов',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Описываете задачу: локация, формат, для каких платформ контент. Расчёт и предложение — в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Согласуем маршрут, тайминг, ограничения локации. Для сложных зон — проверяем разрешения заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Работаем по согласованному сценарию. Ключевой пролёт — 2–3 дубля. 1–3 часа на локации.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–6)',
        text: 'Стабилизация, цвет, нарезка под платформы. Google Drive или Telegram. Готово к публикации.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Кинематографичные aerial-кадры для продажи квартир, домов, апартаментов и ЖК.',
    },
    {
        title: 'Дрон-мониторинг строительства',
        href: '/drone-construction-monitoring',
        text: 'Регулярные выезды и отчётность по объектам девелоперов, инвесторов и генподрядчиков.',
    },
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для удалённых показов объектов и презентации пространств.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'FPV-съёмка и кинематографические дроны в Тбилиси',
    description:
        'FPV-пролёты и кинодрон-съёмка для ресторанов, отелей, недвижимости и продакшна в Тбилиси и Грузии. DJI Avata 2 + DJI Air 3S.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
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
    description: 'FPV-съёмка, кинодрон-съёмка, 360° туры и коммерческий видеопродакшн в Тбилиси и по Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com/drone-fpv-cinema',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'FPV-съёмка и кинематографические дроны в Тбилиси | Breus Media',
    description:
        'FPV-пролёты и кинодроны для рекламы, ресторанов, отелей и продакшна в Тбилиси. DJI Avata 2 + Air 3S. От 400 ₾. Результат за 48 часов.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-fpv-cinema',
    },
};

export default function DroneFpvCinemaPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <DebugWrapper id={384100} label="Hero Section">
                <section
                    id="drone-fpv-cinema-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        FPV + Cinematic Aerials
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Avata 2 + DJI Air 3S
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    FPV-съёмка и кинематографичные аэрокадры в Тбилиси и по Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    FPV Drone Filming &amp; Cinematic Aerials in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Динамичные FPV-пролёты для пространств и событий — и чистые кинематографичные кадры для
                                    рекламы и продакшна. Продакшн-подход: бриф → план траектории → безопасная съёмка →
                                    готовые версии под ваши платформы.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка на одной локации — 1–3 часа. Монтаж — 48 часов.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по результату</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 400 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                                            Базовый пакет для социальных сетей и локального бизнеса.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Монтаж</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">2–3 дубля</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Ключевой пролёт</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>FPV внутри и снаружи пространства</li>
                                        <li>Кинематографичные aerial-кадры на Air 3S</li>
                                        <li>Готовые версии под Reels, TikTok и hero-размещение</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384120} label="What Is It Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">What Is It: два продукта в одной съёмке</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В зависимости от задачи комбинируем динамичный FPV flythrough и кинематографичные
                                установочные кадры. Получаете и вау-эффект, и чистую коммерческую подачу локации.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-2">
                            {productCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{card.subtitle}</p>
                                    <h3 className="mt-3 text-2xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/74">{card.text}</p>
                                    <p className="mt-4 rounded-[12px] border border-[#FFD23F]/30 bg-[#121212] px-4 py-3 text-sm leading-relaxed text-white/84">
                                        {card.specs}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">С какими проблемами к нам приходят</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Это частые запросы от локального бизнеса, агентств и продакшн-команд перед FPV-съёмкой в
                                Тбилиси и по Грузии.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что решает наш формат</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Структурируем работу так, чтобы вы получили прогнозируемый результат в сжатые сроки без
                                лишних рисков на площадке.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Есть локация или проект в Тбилиси? Обсудим сценарий и пришлём расчёт за 2 часа.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить проект
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Deliverables и пакеты</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От social-задач до полноценного production day: выбираем пакет по глубине задач и формату
                                финальной выдачи.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Во всех пакетах</p>
                            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-3">
                                {allPackagesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384220} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и use cases</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже шесть сценариев, где FPV и cinematic aerials закрывают конкретные коммерческие задачи.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span> {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384240} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/30 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Полёты в Грузии — как мы работаем с правилами</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Максимальная высота —
                                120 м. Дрон зарегистрирован.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для съёмок рядом с публичными мероприятиями и в чувствительных зонах (аэропорт,
                                госучреждения) заранее обсуждаем формат и берём на себя подготовку документации — risk
                                assessment, маршруты, споттер при необходимости.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Принцип: если локация ограничена — предлагаем безопасный альтернативный кадр. Ваш проект не
                                срывается из-за правил.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384260} label="International Production Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Снимаете в Грузии? Мы — ваш local drone unit.</h2>
                            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-white/78 md:text-base">
                                <li>Двуязычная команда: RU и EN.</li>
                                <li>Знаем ограничения по зонам и форматам съёмки в Тбилиси.</li>
                                <li>
                                    Понимаем контекст Film in Georgia: официальная программа даёт 20–25% cash rebate на
                                    квалифицированные расходы в Грузии.
                                </li>
                                <li>Работаем по шот-листу режиссёра, отдаём исходники, даём line-item смету.</li>
                                <li>
                                    Грузия = горы, старый город, современная архитектура, чёрное море — всё в одной
                                    стране, за 1 съёмочный день.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры FPV и cinematic кадров</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. При необходимости пришлём подборку релевантных
                                кейсов под вашу нишу и формат площадки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Опишите задачу: ниша, длительность ролика, платформа публикации. Подберём примеры и
                                предложим съёмочный сценарий.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого знакомства с FPV-съёмкой" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={384320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={384340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Наша задача — дать вам рабочий результат для бизнеса и продакшна, а не просто красивый
                                облёт в вакууме.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет от 400 ₾, стандарт от 700 ₾ и продакшн-пакет от 1 500 ₾ — под разные
                                объёмы задач и типы проектов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Нужен расчёт под вашу локацию или проект?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Получить расчёт
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384400} label="Process Note Section">
                <ProcessNote text="Съёмка на одной локации — 1–3 часа. Монтаж — 48 часов." />
            </DebugWrapper>

            <DebugWrapper id={384420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Работаем по чёткой последовательности: от брифа до готовых монтажных версий под ваши
                                платформы.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если нужно усилить результат, комбинируем FPV с другими форматами визуального продакшна.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={384460} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите нишу и задачу, а мы предложим траекторию съёмки и расчёт в течение 2
                                        часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип проекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Ресторан / Бар</option>
                                                <option>Отель / Апарт-отель</option>
                                                <option>Недвижимость / Девелопмент</option>
                                                <option>Ивент-площадка / Клуб</option>
                                                <option>Агентство / Продакшн</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Формат съёмки</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>FPV flythrough</option>
                                                <option>Cinematic aerials</option>
                                                <option>Комбинированный (FPV + Air 3S)</option>
                                                <option>Нужна консультация</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Локация и сроки</label>
                                        <input
                                            type="text"
                                            placeholder="Тбилиси / регион, желаемая дата и срок публикации"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Задача, платформа публикации, референсы, ограничения площадки"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={384480} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-hotels-tourism
Lines: 1110
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-hotels-tourism/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-hotels-tourism/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type MetricCard = {
    value: string;
    text: string;
    source: string;
};

type PainCard = {
    title: string;
    role: string;
    text: string;
};

type BenefitCard = {
    title: string;
    text: string;
    detail: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const socialProofCards: MetricCard[] = [
    {
        value: '67%',
        text: 'Гости более склонны забронировать отель, если доступен видео-тур.',
        source: 'SiteMinder · Cloudbeds',
    },
    {
        value: 'x3',
        text: 'Видео почти в 3 раза сильнее влияет на решение о путешествии, чем статичные фото.',
        source: 'Expedia, 2026',
    },
    {
        value: '50%+',
        text: 'Страницы с видео конвертируют заметно лучше, чем страницы только с фото.',
        source: 'HospitalityNet',
    },
    {
        value: '93%',
        text: 'Путешественников смотрят видео-контент перед бронированием.',
        source: 'Отраслевые исследования travel-сегмента',
    },
];

const painCards: PainCard[] = [
    {
        title: 'Боль 1',
        role: 'Владелец бутик-отеля',
        text: '«На Booking мы выглядим как все. Фото хорошие, но сосед тоже сделал хорошие фото. Гость не чувствует разницы.»',
    },
    {
        title: 'Боль 2',
        role: 'Маркетолог курортного отеля',
        text: '«Нам нужен контент и для сайта, и для Instagram, и для рассылки. Одна съёмка не закрывает все форматы.»',
    },
    {
        title: 'Боль 3',
        role: 'Управляющий апарт-отелем / Airbnb',
        text: '«Хочу показать не только комнату, но и район, вид, инфраструктуру рядом. Обычное фото это не передаёт.»',
    },
    {
        title: 'Боль 4',
        role: 'Директор горного или эко-отеля',
        text: '«Наша главная ценность — природа вокруг. Но фото с земли это не показывает. Нужен вид сверху.»',
    },
    {
        title: 'Боль 5',
        role: 'Международная отельная сеть',
        text: '«Ищем локального оператора в Грузии с правильным workflow. Нужна предсказуемая смета, работа в рамках закона, нормальная коммуникация на английском.»',
    },
];

const benefitCards: BenefitCard[] = [
    {
        title: 'Гость видит отель до бронирования',
        text: 'Не только номер, но и территорию, вид, расположение в городе или природе.',
        detail: 'Исследования показывают рост вероятности бронирования на 60–70% при наличии видео-тура.',
    },
    {
        title: 'Один выезд — контент для всех платформ',
        text: 'Из одной съёмки получаете hero-ролик для сайта, вертикальные Reels для Instagram, фото для Booking и короткие клипы для email-рассылки.',
        detail: 'Больше не нужно организовывать отдельные съёмки под каждую площадку.',
    },
    {
        title: 'FPV-пролёт показывает пространство в движении',
        text: 'Лобби, коридор, номер, вид из окна — один непрерывный кадр, который создаёт эффект присутствия лучше любого фото.',
        detail: 'Для hospitality-сегмента это самый быстрый способ передать атмосферу.',
    },
    {
        title: 'Аэрокадры показывают то, что не видно с земли',
        text: 'Территория отеля, бассейн, горы или море вокруг, расположение в городе.',
        detail: 'Для горных и курортных отелей это часто главный аргумент в пользу бронирования.',
    },
    {
        title: 'Понятен для международных сетей',
        text: 'Работаем на RU и EN, даём line-item смету, знаем правила GCAA, понимаем контекст Film in Georgia.',
        detail: 'Проект прозрачен по коммуникации, срокам и формату выдачи материалов.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ',
        subtitle: 'Городской отель / апарт-отель',
        items: [
            '1 hero-ролик 45–60 сек (горизонтальный, для сайта)',
            '3–5 вертикальных Reels 15–30 сек',
            '15–20 аэрофото JPG (для OTA и сайта)',
            'Виды с воздуха: территория, локация, окружение',
            'Доставка за 48–72 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Курортный / SPA / горный отель',
        items: [
            'Hero-ролик 60–90 сек (сайт + YouTube)',
            'FPV-пролёт по ключевым зонам (лобби / бассейн / вид)',
            '5–8 вертикальных Reels разной длины',
            '25–35 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН',
        subtitle: 'Международные сети / рекламные кампании',
        items: [
            'Full-day по шот-листу',
            'Pre-production: бриф, план полётов, проверка GCAA',
            'Hero-ролик + серия роликов под платформы',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Контекст Film in Georgia (20–25% rebate)',
        ],
    },
];

const allPackagesItems: string[] = ['Без водяного знака', 'Право на коммерческое использование', '1 итерация правок'];

const nicheCards: NicheCard[] = [
    {
        title: 'Городской бутик-отель (Тбилиси)',
        pain: 'Теряемся среди похожих объектов на Booking.',
        solution: 'Аэрокадры района, вид из номера сверху, FPV-пролёт по лобби и общим зонам.',
        deliverables: 'Hero + Reels + фото для OTA.',
    },
    {
        title: 'Курортный отель (Батуми / Black Sea)',
        pain: 'Главная ценность — море и природа, но фото с земли это не передаёт.',
        solution: 'Аэровидео территории, бассейна, береговой линии.',
        deliverables: 'Cinematic hero + FPV + 30+ аэрофото.',
    },
    {
        title: 'Горный / эко-отель (Казбеги, Местиа, Кахетия)',
        pain: 'Ландшафт вокруг — главный продукт, его нельзя показать с земли.',
        solution: 'Съёмка с воздуха горного контекста + путь к отелю + виды из номеров.',
        deliverables: 'Кинематографичный hero + аэрофото для сайта и соцсетей.',
    },
    {
        title: 'Апарт-отель и Airbnb (10+ объектов)',
        pain: 'Нужен контент для каждого объекта, но бюджет ограничен.',
        solution: 'Пакет на несколько объектов за один выезд, быстрая доставка, готово к публикации.',
        deliverables: 'Аэрофото + короткий ролик на каждый объект.',
    },
    {
        title: 'Тревел-контент и туроператоры',
        pain: 'Нужен destination-ролик, который продаёт Грузию как направление, а не конкретный отель.',
        solution: 'Аэросъёмка локаций, пейзажей, культурных объектов — весь визуальный контекст страны.',
        deliverables: 'Hero-ролик + серия под соцсети.',
    },
    {
        title: 'Международная отельная сеть',
        pain: 'Нужен локальный оператор с правильным workflow, предсказуемой сметой и коммуникацией на EN.',
        solution: 'Продакшн-пакет, line-item смета, исходники, работа в рамках GCAA, контекст Film in Georgia.',
        deliverables: 'По шот-листу, форматы под глобальные стандарты сети.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Можно ли снимать отель, когда в нём есть гости?',
        answer:
            'Да, но с оговорками. Для съёмки снаружи и с воздуха гости не мешают. Для FPV-пролётов внутри рекомендуем тихие часы — до открытия, после завтрака или в технический перерыв. Снимаем пространство, а не лица — приватность гостей не нарушается.',
    },
    {
        question: 'Как аэросъёмка влияет на бронирования?',
        answer:
            'Исследования SiteMinder и Cloudbeds показывают, что гости на 67% более склонны забронировать отель, если доступен видео-тур. Expedia (2026): видео почти в 3 раза сильнее влияет на решение, чем статичные фото. Это данные индустрии.',
    },
    {
        question: 'Чем FPV-пролёт отличается от обычного аэровидео?',
        answer:
            'Обычный дрон (Air 3S) снимает плавные стабильные панорамы снаружи. FPV-дрон (Avata 2) залетает внутрь — лобби, коридор, номер, вид из окна — и создаёт непрерывный иммерсивный кадр. Для отелей это убедительный способ передать атмосферу.',
    },
    {
        question: 'Подходит ли контент для Booking, Airbnb и других OTA?',
        answer:
            'Да. Отдаём в форматах, которые принимают основные платформы: JPG для фото, MP4 для видео. Горизонтальные версии для сайта и YouTube, вертикальные для Reels и мобильных OTA. Адаптируем под ваши требования.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Батуми, Казбеги, Кахетия, Местиа и другие регионы — по договорённости. Стоимость выезда зависит от расстояния и логистики — уточняем на этапе брифа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Горные регионы обсуждаем отдельно, там своя специфика погоды. Если условия не позволяют — переносим без доплат.',
    },
    {
        question: 'Что входит в базовый пакет?',
        answer:
            'Hero-ролик 45–60 сек + 3–5 вертикальных Reels + 15–20 аэрофото. Готово к публикации на сайте, в соцсетях и на OTA. Доставка за 48–72 часа.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка отеля в Тбилиси?',
        answer:
            'Базовый пакет — от 450 ₾. Стандартный пакет для курортного отеля — от 800 ₾. Продакшн-пакет (full-day, международные сети) — от 2 000 ₾. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Городской отель — 2–3 часа на объекте. Курортный отель с большой территорией — 3–5 часов. Монтаж и доставка — 48–72 часа после съёмки.',
    },
    {
        question: 'Можно ли снять сразу несколько объектов?',
        answer:
            'Да. Если у вас несколько апарт-отелей или объектов в одном городе — обсудим пакет на несколько съёмок. При регулярном сотрудничестве цена за объект ниже.',
    },
    {
        question: 'Вы работаете с иностранными отельными сетями?',
        answer:
            'Да. Коммуникация на RU и EN, line-item смета, исходники по запросу. Понимаем требования к форматам и стандартам крупных сетей. Знаем контекст Film in Georgia (20–25% rebate на квалифицированные расходы).',
    },
    {
        question: 'Как получить Film in Georgia rebate?',
        answer:
            'Программа даёт до 20–25% возврата расходов при съёмке коммерческого контента в Грузии. Минимальный порог — от 300 000 GEL локальных расходов. Это актуально для крупных рекламных кампаний отельных брендов.',
    },
    {
        question: 'Что если погода испортится в день съёмки?',
        answer: 'Переносим на ближайший подходящий день без доплат. Горные регионы бронируем с запасным днём.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для продакшн-пакетов и регулярного сотрудничества заключаем договор с графиком, форматами и условиями выдачи материала.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Единственная нишевая страница под отели в Грузии',
        text: 'Локальные операторы предлагают «дрон для всего». Мы сделали отдельный продукт под hospitality — с deliverables, сроками и пониманием OTA-логики.',
    },
    {
        title: 'Два дрона под разные задачи',
        text: 'Air 3S — плавные аэрокадры снаружи. Avata 2 — FPV-пролёты внутри. Не выбираете между динамикой и стабильностью.',
    },
    {
        title: 'Контент сразу под все платформы',
        text: 'Hero-ролик, Reels, фото для OTA — из одного выезда. Берёте и публикуете без дополнительной адаптации.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Дрон зарегистрирован. Ограничения знаем. Для сложных зон согласование берём на себя.',
    },
    {
        title: 'Понятны для международных сетей',
        text: 'RU/EN, line-item смета, исходники, Film in Georgia. Работаем как local drone unit международного уровня.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 450 ₾',
        subtitle: 'Городской отель / апарт-отель / Airbnb',
        items: [
            'Hero-ролик 45–60 сек (горизонтальный)',
            '3–5 Reels 15–30 сек (вертикальные)',
            '15–20 аэрофото для OTA и сайта',
            'Доставка за 48–72 часа',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 800 ₾',
        subtitle: 'Курортный / SPA / горный отель',
        items: [
            'Hero-ролик 60–90 сек',
            'FPV-пролёт по ключевым зонам',
            '5–8 вертикальных Reels',
            '25–35 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 2 000 ₾',
        subtitle: 'Международные сети / рекламные кампании',
        items: [
            'Full-day по шот-листу',
            'Pre-production + safety-план',
            'Hero + серия роликов под платформы',
            'Исходники (RAW) включены',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Контекст Film in Georgia',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Описываете отель: локация, тип объекта, для каких платформ контент, есть ли гости в день съёмки. Расчёт — в течение 2 часов.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Согласуем маршрут, тайминг, ограничения локации. Для горных или специфических зон — проверяем GCAA заранее.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Аэрокадры снаружи + FPV внутри по согласованному сценарию. 2–3 часа на объекте. Работы не останавливаются.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–7)',
        text: 'Hero-ролик, Reels, аэрофото — всё нарезано под платформы. Google Drive или Telegram. Готово к публикации.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Динамичные FPV-пролёты и cinematic aerials для рекламы, брендов и локаций.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивные туры для сайта и OTA-платформ, чтобы увеличить глубину вовлечения.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Съёмка жилых и коммерческих объектов для презентации, маркетинга и продаж.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Дрон-съёмка отелей и туризма в Тбилиси',
    description:
        'Кинематографичные аэрокадры и FPV-пролёты для отелей, курортов и туризма в Тбилиси и Грузии. Контент для сайта, Booking, OTA и соцсетей.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: 'Тбилиси, Батуми, Казбеги, Кахетия, Грузия',
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
    description: 'Дрон-съёмка отелей, курортов и тревел-контента в Тбилиси, Батуми и по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com/drone-hotels-tourism',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка отелей и курортов в Тбилиси | Аэровидео для туризма | Breus Media',
    description:
        'Кинематографичные аэрокадры и FPV-пролёты для отелей, курортов и туризма в Тбилиси и Грузии. Контент для сайта, Booking и соцсетей. От 450 ₾.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-hotels-tourism',
    },
};

export default function DroneHotelsTourismPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <DebugWrapper id={385100} label="Hero Section">
                <section
                    id="drone-hotels-tourism-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Hotels & Tourism Drone Content
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-съёмка отелей и курортов в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    Hotel &amp; Resort Drone Filming in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Кинематографичные аэрокадры и FPV-пролёты, которые показывают отель так, как его
                                    видит гость — от подъезда до вида из номера. Продакшн-подход: бриф → план полётов →
                                    безопасная съёмка → готовые ролики под сайт, Booking/OTA и соцсети.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить съёмку
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть цены
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка среднего отеля — 2–3 часа. Монтаж — 48–72 часа.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по пакету</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Базовый пакет для отелей и апарт-формата.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48–72 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Монтаж</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">RU / EN</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Коммуникация</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Аэрокадры + FPV-пролёты в одном выезде</li>
                                        <li>Контент под OTA, сайт и Reels</li>
                                        <li>Работаем по правилам GCAA</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385120} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему отели инвестируют в аэросъёмку</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                В hospitality видео влияет на выбор гостя до момента бронирования. Это уже стандарт
                                конкурентной упаковки объекта.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.source}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p>
                                </article>
                            ))}
                        </div>

                        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/58">
                            Реальные кейсы Breus Media появятся после первых проектов. Свяжитесь — обсудим пилотный
                            проект на выгодных условиях.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте себя?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже типовые запросы от владельцев отелей, маркетологов и международных hospitality-команд.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{card.title}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{card.role}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что даёт аэросъёмка вашему отелю</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Это не просто красивое видео, а инструмент для роста бронирований и усиления позиционирования.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    <p className="mt-3 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/78">
                                        {card.detail}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Есть отель или курорт в Тбилиси, Батуми или горных регионах Грузии?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны под тип объекта: городской отель, курорт или международная рекламная
                                кампания.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Во всех пакетах</p>
                            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-3">
                                {allPackagesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385220} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и типы объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Под каждый тип объекта собираем свой набор кадров и deliverables с понятной коммерческой
                                целью.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span> {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385240} label="Georgia Location Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Грузия — это особый визуальный продукт</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Тбилиси — контраст старой архитектуры, ущелья реки и современных кварталов в одном кадре.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Батуми — черноморское побережье, пальмы и ультрасовременные отели — всё в одном горизонте.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Казбеги и горные регионы — дикий пейзаж кавказских вершин как фон для boutique-отелей.
                                Нигде больше такого нет.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Кахетия — виноградники, монастыри и горы. Идеально для эко-отелей и тревел-контента.
                            </p>
                            <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                Georgia (country) offers 20–25% cash rebate on qualified production expenses through the
                                Film in Georgia programme. Ask us how this applies to your hotel campaign.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385260} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как мы работаем с правилами полётов в Грузии</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован.
                                Максимальная высота — 120 м.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для съёмок рядом с публичными событиями и в чувствительных зонах проверяем ограничения
                                заранее и предлагаем сценарий, который даёт нужный кадр без юридических рисков.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Съёмка с гостями: можно работать в тихие часы (до открытия, ранним утром),
                                фокусироваться на территории и архитектуре, а не на лицах — без нарушения приватности.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры съёмки hospitality-проектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. Под ваш тип объекта дадим релевантные
                                референсы и сценарий пилотной съёмки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Опишите формат отеля, целевые платформы и сезонность. Предложим съёмочный план и выдачу
                                материалов под ваш маркетинг.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого запуска съёмки" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={385320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={385340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы упаковали отдельный продукт под hospitality и туризм, а не универсальную услугу «дрон
                                для всего».
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Базовый пакет от 450 ₾, стандартный от 800 ₾ и продакшн-пакет от 2 000 ₾ для
                                международных кампаний.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">Нужен точный расчёт под ваш отель или локацию?</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Получить расчёт
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385400} label="Process Note Section">
                <ProcessNote text="Съёмка среднего отеля — 2–3 часа. Монтаж — 48–72 часа." />
            </DebugWrapper>

            <DebugWrapper id={385420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Каждый этап заранее согласован: маршрут, сроки, формат выдачи и юридически безопасный
                                сценарий полётов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                При необходимости комбинируем aerial-видео, FPV и интерактивные форматы в единую
                                воронку контента.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={385460} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите тип объекта и регион — вернёмся с расчётом, маршрутом полётов и
                                        рекомендованным пакетом в течение 2 часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Городской отель</option>
                                                <option>Курортный / SPA отель</option>
                                                <option>Горный / эко-отель</option>
                                                <option>Апарт-отель / Airbnb</option>
                                                <option>Отельная сеть / бренд</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Регион</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Тбилиси</option>
                                                <option>Батуми / Black Sea</option>
                                                <option>Казбеги / горные регионы</option>
                                                <option>Кахетия</option>
                                                <option>Другой регион</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Задача и платформы</label>
                                        <input
                                            type="text"
                                            placeholder="Сайт, Booking/OTA, Reels, YouTube, рекламная кампания"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Даты, наличие гостей, ограничения площадки, референсы"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={385480} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-construction-monitoring
Lines: 1141
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-construction-monitoring/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-construction-monitoring/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ListCard = {
    title: string;
    text: string;
};

type MetricCard = {
    value: string;
    text: string;
    source?: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type AudienceCard = {
    title: string;
    text: string;
};

type UseCaseCard = {
    title: string;
    text: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое дрон-мониторинг строительства?',
        answer:
            'Это регулярная аэрофотосъёмка объекта с фиксированных точек и высот. Каждый визит даёт набор датированных фото и видео, которые показывают реальное состояние стройки. В отличие от разовой съёмки, здесь важна периодичность и сравнение между визитами.',
    },
    {
        question: 'Чем это отличается от обычной дрон-съёмки?',
        answer:
            'Обычная съёмка чаще нужна для маркетинга. Мониторинг — это документация для управления. Мы снимаем одни и те же точки в одном порядке каждый визит, чтобы можно было сравнивать прогресс по неделям и месяцам.',
    },
    {
        question: 'Можно ли летать дроном над стройкой в Тбилиси?',
        answer:
            'Да. Мы работаем в соответствии с правилами GCAA Грузии. Максимальная высота — 120 м. Дрон зарегистрирован. Для большинства строительных объектов дополнительных согласований не требуется, а спецзоны мы берём на себя.',
    },
    {
        question: 'Нужно ли останавливать работы на объекте во время съёмки?',
        answer:
            'Нет. Дрон снимает объект с воздуха, пока бригады работают в обычном режиме. Один выезд обычно занимает 1,5–2 часа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Если погода не позволяет выполнять полёт безопасно, переносим выезд на следующий подходящий день без доплат.',
    },
    {
        question: 'Что такое PDF-отчёт и кому он нужен?',
        answer:
            'Это структурированный документ с датированными фото, GPS-точками и кратким описанием состояния объекта. Формат понятен инвестору, банку или партнёру без технического бэкграунда.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-мониторинг строительства в Тбилиси?',
        answer:
            'Разовый выезд — от 250 ₾. Ежемесячный пакет с 4 визитами — от 900 ₾. Инвест-пакет с расширенными PDF-отчётами — от 1 800 ₾/мес. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Что входит в PDF-отчёт?',
        answer:
            'Датированные фото с объекта, сравнение с предыдущим визитом, GPS-координаты точек съёмки и краткое описание состояния. В инвест-версии добавляем титульную страницу и executive summary на RU/EN.',
    },
    {
        question: 'Как инвестор или банк получает доступ к материалам?',
        answer:
            'Через ссылку на Google Drive с папкой, именованной по объекту и дате. Доступ можно открыть для любого числа участников без дополнительной регистрации.',
    },
    {
        question: 'Как часто нужно снимать?',
        answer:
            'Зависит от темпа стройки. Для активного этапа чаще всего еженедельно. Для более спокойного цикла — раз в 2 недели или раз в месяц. Частоту согласуем на старте.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Основной рынок — Тбилиси и область. Батуми и другие регионы — по договорённости. Стоимость выезда считается отдельно под локацию.',
    },
    {
        question: 'Можно ли начать с разового выезда, а потом перейти на пакет?',
        answer:
            'Да. Многие команды начинают с одного выезда, оценивают формат отчётности и после этого переходят на регулярный мониторинг.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для регулярных пакетов заключаем договор с графиком выездов, форматом отчётов и условиями хранения архива.',
    },
];

const experienceCards: ListCard[] = [
    {
        title: 'Сценарий 1 — Девелопер',
        text:
            'Руководитель проекта открывает папку за текущую неделю и сразу видит, как изменились ключевые зоны относительно прошлого визита, без поездки на площадку.',
    },
    {
        title: 'Сценарий 2 — Инвестор',
        text:
            'Инвестор из России, ОАЭ или ЕС получает ссылку и PDF-отчёт, где прогресс стройки показан по датам и этапам, без длинных объяснений в чате.',
    },
    {
        title: 'Сценарий 3 — Банк',
        text:
            'Финансирующая сторона получает документ с датой, визуальными подтверждениями и milestone-комментарием, что ускоряет коммуникацию по траншу.',
    },
];

const socialProofCards: MetricCard[] = [
    {
        value: '24 ч',
        text: 'доставка съёмки и отчёта после выезда на объект.',
    },
    {
        value: '1,5–2 ч',
        text: 'средняя длительность одного выезда без остановки строительных работ.',
    },
    {
        value: '4 визита',
        text: 'базовый ежемесячный ритм для активной стройки в Тбилиси.',
    },
    {
        value: 'от 250 ₾',
        text: 'стоимость разового выезда для старта и пилотного контроля.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Нет прозрачного прогресса без выезда',
        text: 'Мы не видим реальный прогресс без выезда на площадку.',
    },
    {
        title: 'Разрозненные фото в мессенджерах',
        text: 'Инвестор просит апдейт, а у нас только разрозненные фото из WhatsApp.',
    },
    {
        title: 'Банку нечем подтвердить milestone',
        text: 'Банк требует подтверждение этапа, а готового отчёта нет.',
    },
    {
        title: 'Нет быстрой проверки слов подрядчика',
        text: 'Подрядчики говорят «всё готово», но это нечем быстро проверить.',
    },
    {
        title: 'Хаотичная съёмка вместо сравнения',
        text: 'Нужно одинаково фиксировать объект каждую неделю, а не снимать хаотично.',
    },
    {
        title: 'Конфликт задач технадзора и маркетинга',
        text: 'Маркетингу тоже нужен контент, но технадзору важнее доказательная документация.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Единый визуальный архив по объекту',
        text: 'Каждая съёмка датирована и хранится по этапам в едином архиве.',
    },
    {
        title: 'Проверка прогресса без выезда',
        text: 'Собственник или инвестор открывает отчёт и видит актуальное состояние объекта.',
    },
    {
        title: 'Подтверждение milestone для банка',
        text: 'PDF-отчёт с фото и датой подходит для подтверждения этапа перед банком или партнёром.',
    },
    {
        title: 'Раннее выявление отклонений',
        text: 'Одинаковые ракурсы помогают быстрее заметить задержки и ошибки.',
    },
    {
        title: 'Investor-ready формат',
        text: 'Это не просто файлы, а понятный пакет для удалённого контроля.',
    },
    {
        title: 'Контент для продаж из тех же выездов',
        text: 'Часть материала из тех же выездов можно использовать в соцсетях и отделе продаж.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'Базовый выезд',
        subtitle: 'Разовый формат',
        items: [
            '20–30 фото с фиксированных точек (JPG)',
            'Видео-облёт 1–2 мин (MP4, 4K)',
            'Top-down обзор объекта сверху',
            'Доставка за 24 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'Мониторинг пакет',
        subtitle: 'Регулярный контроль',
        items: [
            'Фиксированные ракурсы каждый визит для сравнения',
            'Облёт периметра с 4 сторон',
            'Крупный план ключевых зон: кран, перекрытия, фасад',
            'PDF-отчёт с датой, GPS и сравнением с прошлым визитом',
            'Облачный архив для инвестора и банка по ссылке',
            'Именование файлов по дате и номеру визита',
        ],
    },
    {
        title: 'Инвест-пакет',
        subtitle: 'Премиум отчётность',
        items: [
            'Всё из мониторинг-пакета',
            'Брендированный PDF-отчёт с титульной страницей и executive summary',
            'Сравнение milestone с предыдущим визитом',
            'Таймлапс-ролик по итогам месяца',
            'Двуязычные подписи RU/EN по запросу',
            'ZIP-архив для банка, инвестора и партнёра',
        ],
    },
];

const audienceCards: AudienceCard[] = [
    {
        title: 'Застройщики и девелоперы ЖК',
        text: 'Контроль подрядчиков и отчёты для акционеров по этапам в едином формате.',
    },
    {
        title: 'Генподрядчики',
        text: 'Документация этапов и защита от спорных ситуаций с субподрядчиками.',
    },
    {
        title: 'Инвест-агентства',
        text: 'Прозрачность для иностранных инвесторов из РФ, ОАЭ и ЕС без визита в Тбилиси.',
    },
    {
        title: 'Банки и финансирующие структуры',
        text: 'Подтверждение milestone перед траншом через понятный PDF-формат.',
    },
    {
        title: 'Собственники коммерческой недвижимости',
        text: 'Удалённый контроль реконструкции и накапливаемый архив по объекту.',
    },
];

const useCaseCards: UseCaseCard[] = [
    {
        title: 'ЖК в Ваке или Сабуртало',
        text:
            'Застройщик ставит объект на еженедельный мониторинг. Инвесторы из России и ОАЭ получают отчёт по ссылке без выезда в Тбилиси.',
    },
    {
        title: 'Коммерческий объект в Дидубе или Глдани',
        text:
            'Банк финансирует строительство, а PDF с фото и датой подтверждает этап для следующего транша.',
    },
    {
        title: 'Реконструкция в Старом городе',
        text:
            'Собственник контролирует ход работ удалённо, а каждый визит сравнивается с предыдущим для прозрачной динамики.',
    },
    {
        title: 'Склад или логистический центр на выезде из Тбилиси',
        text:
            'Генподрядчик фиксирует этапы и формирует доказательную базу для защиты от претензий субподрядчиков.',
    },
];

const evidenceCards: MetricCard[] = [
    {
        value: 'Фиксированные точки',
        text: 'Одинаковые ракурсы в каждом визите дают сопоставимость, которую нельзя получить хаотичной съёмкой.',
    },
    {
        value: 'Визуал + PDF',
        text: 'Фото и 4K-видео закрывают оперативный контроль, а PDF закрывает коммуникацию с инвестором и банком.',
    },
    {
        value: 'Поэтапный архив',
        text: 'История объекта накапливается автоматически: дата, визит, зона, сравнение с прошлой съёмкой.',
    },
    {
        value: '24 часа на отчёт',
        text: 'Критичные вопросы по прогрессу решаются в течение суток, а не в конце месяца.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Нишевая специализация под мониторинг стройки',
        text: 'Фокус на документации и инвест-отчётах, а не на универсальной съёмке «для всего».',
    },
    {
        title: 'Два дрона под разные задачи',
        text: 'DJI Air 3S для стабильных панорам и обзоров 4K, DJI Avata 2 для FPV при необходимости.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Дрон зарегистрирован. Ограничения по зонам проверяем заранее и берём юридические риски на себя.',
    },
    {
        title: 'Фиксированные точки каждый визит',
        text: 'Сравнение прогресса по неделям становится объективным и удобным для команды проекта.',
    },
    {
        title: 'PDF-отчёт за 24 часа',
        text: 'Материалы готовы для инвестора или банка без дополнительной ручной сборки внутри вашей команды.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка (день 1)',
        text: 'Вы описываете адрес, стадию стройки и получателей отчётов. Расчёт и рекомендацию по частоте выездов отправляем за 2 часа.',
    },
    {
        step: 'Шаг 2',
        title: 'Согласование (день 1–2)',
        text: 'Фиксируем график выездов, постоянные точки съёмки, формат отчёта и список участников с доступом.',
    },
    {
        step: 'Шаг 3',
        title: 'Первый выезд (день 2–3)',
        text: 'Приезжаем на объект, задаём базовые ракурсы для сравнения. Первый отчёт передаём через 24 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Регулярный мониторинг',
        text: 'Работаем по графику. Каждый новый отчёт сравнивается с предыдущим, а архив по объекту пополняется автоматически.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'Разовый выезд',
        price: 'от 250 ₾',
        subtitle: 'Для первого знакомства с форматом',
        items: [
            '20–30 фото JPG с фиксированных точек',
            'Видео-облёт 1–2 мин (4K)',
            'Доставка за 24 часа (Google Drive)',
        ],
    },
    {
        title: 'Мониторинг',
        price: 'от 900 ₾/мес',
        subtitle: '4 визита в месяц (еженедельно)',
        items: [
            'Всё из разового выезда × 4',
            'PDF-отчёт после каждого визита',
            'Сравнение с предыдущим визитом',
            'Облачный архив по ссылке',
        ],
        popular: true,
    },
    {
        title: 'Инвест-пакет',
        price: 'от 1 800 ₾/мес',
        subtitle: '4 визита + расширенная документация',
        items: [
            'Брендированный PDF (RU/EN)',
            'Executive summary страница',
            'Таймлапс-ролик по итогам месяца',
            'ZIP-архив для банка и инвестора',
            'Договор с графиком выездов',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Обзор локации и презентационный контент для продаж квартир, домов и ЖК.',
    },
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для удалённого показа помещений и объектов.',
    },
    {
        title: 'FPV-съёмка для рекламы',
        href: '/drone-fpv-cinema',
        text: 'Динамичные пролёты для промо-роликов, запуска кампаний и performance-креативов.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Дрон-мониторинг строительства в Тбилиси',
    description:
        'Регулярная аэрофотосъёмка строительных объектов. Фото, видео и PDF-отчёты для застройщиков, инвесторов и банков в Тбилиси.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
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
        price: '250',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, мониторинг стройки, 360° туры и промо-видео для бизнеса в Тбилиси.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-мониторинг строительства в Тбилиси | Отчёты для инвесторов | Breus Media',
    description:
        'Еженедельный дрон-мониторинг стройки в Тбилиси: фото, 4K-видео, PDF-отчёты для инвесторов и банков. Разовый выезд от 250 ₾, пакеты от 900 ₾/мес.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-construction-monitoring',
    },
};

export default function DroneConstructionMonitoringPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={382100} label="Hero Section">
                <section
                    id="drone-construction-monitoring-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Мониторинг стройки · Тбилиси
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-мониторинг строительства в Тбилиси для застройщиков, инвесторов и генподрядчиков
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Еженедельные выезды на объект. Фото, видео и PDF-отчёт готовы для инвестора, банка
                                    или технадзора за 24 часа.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Один выезд занимает 1,5–2 часа — без остановки работ на объекте.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Что получает команда проекта</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                                            Разовый выезд для проверки формата мониторинга.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">24 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Отчёт</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">4 визита</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">В месяц</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Фото, видео и PDF после каждого выезда</li>
                                        <li>Сравнение с предыдущим визитом по фиксированным точкам</li>
                                        <li>Архив по ссылке для инвестора, банка и проектной команды</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382120} label="What Is Section">
                <section id="monitoring-what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Что такое дрон-мониторинг строительства</h2>
                                <p className="mt-5 max-w-3xl leading-relaxed text-white/74">
                                    Это регулярная аэрофотосъёмка стройки с повторяемых точек и высот. Каждый визит
                                    фиксирует состояние объекта в одном формате: фото, 4K-видео и отчёт. В результате
                                    застройщик, инвестор и генподрядчик видят прогресс без выезда и без разрозненных
                                    файлов в мессенджерах.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-[#2a2a2a] bg-[#131313] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Формат нужен для</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                    <li>Еженедельных апдейтов для инвесторов</li>
                                    <li>Подтверждения этапов для банков и траншей</li>
                                    <li>Контроля подрядчиков без выезда на площадку</li>
                                    <li>Сбора архивной документации по объекту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382140} label="Experience Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит для вашей команды</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы не просто снимаем красивый облёт, а строим регулярный процесс, где каждый участник
                                проекта получает свои данные в одном понятном пакете.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {experienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382200} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Операционные ориентиры</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мониторинг работает, когда у команды есть стабильный ритм съёмок и предсказуемый формат
                                доставки отчётов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382250} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте эти проблемы на стройке?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже типовые точки напряжения, из-за которых контроль затягивается, а коммуникация между
                                подрядчиком, инвестором и банком становится медленной.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382300} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что меняется после запуска мониторинга</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Регулярный формат превращает «покажите, что происходит на площадке» в прозрачный процесс
                                с понятными сроками и фиксируемыми данными.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382305} label="Mid CTA Section 1">
                <MidCta
                    text="Есть объект в Тбилиси, который нужно поставить на регулярный мониторинг?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={382350} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От разового выезда до investor-ready пакета: отчётность, архив и материалы для разных
                                участников проекта в одном процессе.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382360} label="Audience Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Кому подходит мониторинг стройки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Формат полезен всем, кто принимает решения по объекту и должен видеть подтверждённый прогресс,
                                а не только текстовые апдейты.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {audienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382380} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это применяется в Тбилиси</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже четыре рабочих сценария, где регулярная съёмка даёт практическую ценность и для
                                операционного контроля, и для финансирования.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {useCaseCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={382500} label="Portfolio Section">
                    <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold md:text-4xl">Примеры мониторинга</h2>
                                <p className="mt-4 leading-relaxed text-white/70">
                                    На странице оставлен прозрачный placeholder. Реальные мониторинг-кейсы по Тбилиси
                                    будут добавляться по мере накопления проектов.
                                </p>
                            </div>

                            <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                                <p className="text-lg font-semibold text-white">Кейсы в работе</p>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                    Если нужен пилотный запуск мониторинга на вашем объекте, можем начать с разового выезда
                                    и зафиксировать базовый формат отчётности под вашу команду.
                                </p>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={382520} label="Evidence Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему формат работает в реальных проектах</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сила мониторинга в системности: одинаковая логика съёмки, короткий цикл отчётности и
                                архив, который остаётся полезным на каждом этапе стройки.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {evidenceCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-2xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого знакомства с мониторингом" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={382700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={382560} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media для мониторинга стройки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Наша цель не просто снять стройку с воздуха, а сделать отчётность пригодной для принятия
                                решений в девелопменте и финансировании.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382399} label="Process Note Section">
                <ProcessNote text="Один выезд занимает 1,5–2 часа — без остановки работ на объекте" />
            </DebugWrapper>

            <DebugWrapper id={382400} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сначала фиксируем процесс и точки съёмки, затем работаем по графику так, чтобы отчёты были
                                сопоставимыми и предсказуемыми по срокам.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382600} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Разовый выезд от 250 ₾, регулярный пакет от 900 ₾/мес и расширенный инвест-пакет от
                                1 800 ₾/мес для объектов с банковским или инвест-финансированием.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш объект и частоту выездов?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={382620} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Для сильной упаковки стройки обычно комбинируют регулярный мониторинг, презентационный
                                контент и формат удалённого показа.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382800} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Опишите объект и желаемую частоту выездов — подготовим расчёт и предложим формат
                                        мониторинга в течение 2 часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>ЖК</option>
                                                <option>Коммерческий объект</option>
                                                <option>Склад или логистический центр</option>
                                                <option>Реконструкция здания</option>
                                                <option>Другое</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Частота выездов</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Разовый выезд</option>
                                                <option>Еженедельно</option>
                                                <option>Раз в 2 недели</option>
                                                <option>Ежемесячно</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Кому нужны отчёты</label>
                                        <input
                                            type="text"
                                            placeholder="Инвестор, банк, технадзор, собственник, отдел продаж"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Адрес, стадия стройки, дедлайн и особенности площадки"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={382900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-object-inspection
Lines: 1141
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-object-inspection/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-object-inspection/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type ListCard = {
    title: string;
    text: string;
};

type MetricCard = {
    value: string;
    text: string;
    source?: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type AudienceCard = {
    title: string;
    text: string;
};

type UseCaseCard = {
    title: string;
    text: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое дрон-инспекция объектов?',
        answer:
            'Это регулярная аэрофотосъёмка объекта с фиксированных точек и высот. Каждый визит даёт набор датированных фото и видео, которые показывают реальное состояние объекта. В отличие от разовой съёмки, здесь важна периодичность и сравнение между визитами.',
    },
    {
        question: 'Чем это отличается от обычной дрон-съёмки?',
        answer:
            'Обычная съёмка чаще нужна для маркетинга. Инспекция — это документация для управления. Мы снимаем одни и те же точки в одном порядке каждый визит, чтобы можно было сравнивать прогресс по неделям и месяцам.',
    },
    {
        question: 'Можно ли летать дроном над объектом в Тбилиси?',
        answer:
            'Да. Мы работаем в соответствии с правилами GCAA Грузии. Максимальная высота — 120 м. Дрон зарегистрирован. Для большинства объектов недвижимости и инфраструктуры дополнительных согласований не требуется, а спецзоны мы берём на себя.',
    },
    {
        question: 'Нужно ли останавливать работы на объекте во время съёмки?',
        answer:
            'Нет. Дрон снимает объект с воздуха, пока бригады работают в обычном режиме. Один выезд обычно занимает 1,5–2 часа.',
    },
    {
        question: 'В какую погоду летает дрон?',
        answer:
            'При ветре до 10–12 м/с и без осадков. Если погода не позволяет выполнять полёт безопасно, переносим выезд на следующий подходящий день без доплат.',
    },
    {
        question: 'Что такое PDF-отчёт и кому он нужен?',
        answer:
            'Это структурированный документ с датированными фото, GPS-точками и кратким описанием состояния объекта. Формат понятен инвестору, банку или партнёру без технического бэкграунда.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-инспекция объектов в Тбилиси?',
        answer:
            'Разовый выезд — от 250 ₾. Ежемесячный пакет с 4 визитами — от 900 ₾. Инвест-пакет с расширенными PDF-отчётами — от 1 800 ₾/мес. Точный расчёт — бесплатно, в течение 2 часов.',
    },
    {
        question: 'Что входит в PDF-отчёт?',
        answer:
            'Датированные фото с объекта, сравнение с предыдущим визитом, GPS-координаты точек съёмки и краткое описание состояния. В инвест-версии добавляем титульную страницу и executive summary на RU/EN.',
    },
    {
        question: 'Как инвестор или банк получает доступ к материалам?',
        answer:
            'Через ссылку на Google Drive с папкой, именованной по объекту и дате. Доступ можно открыть для любого числа участников без дополнительной регистрации.',
    },
    {
        question: 'Как часто нужно снимать?',
        answer:
            'Зависит от темпа объекта. Для активного этапа чаще всего еженедельно. Для более спокойного цикла — раз в 2 недели или раз в месяц. Частоту согласуем на старте.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Основной рынок — Тбилиси и область. Батуми и другие регионы — по договорённости. Стоимость выезда считается отдельно под локацию.',
    },
    {
        question: 'Можно ли начать с разового выезда, а потом перейти на пакет?',
        answer:
            'Да. Многие команды начинают с одного выезда, оценивают формат отчётности и после этого переходят на регулярную инспекцию.',
    },
    {
        question: 'Есть ли договор?',
        answer:
            'Да. Для регулярных пакетов заключаем договор с графиком выездов, форматом отчётов и условиями хранения архива.',
    },
];

const experienceCards: ListCard[] = [
    {
        title: 'Сценарий 1 — Девелопер',
        text:
            'Руководитель проекта открывает папку за текущую неделю и сразу видит, как изменились ключевые зоны относительно прошлого визита, без поездки на площадку.',
    },
    {
        title: 'Сценарий 2 — Инвестор',
        text:
            'Инвестор из России, ОАЭ или ЕС получает ссылку и PDF-отчёт, где прогресс объекта показан по датам и этапам, без длинных объяснений в чате.',
    },
    {
        title: 'Сценарий 3 — Банк',
        text:
            'Финансирующая сторона получает документ с датой, визуальными подтверждениями и milestone-комментарием, что ускоряет коммуникацию по траншу.',
    },
];

const socialProofCards: MetricCard[] = [
    {
        value: '24 ч',
        text: 'доставка съёмки и отчёта после выезда на объект.',
    },
    {
        value: '1,5–2 ч',
        text: 'средняя длительность одного выезда без остановки высотных работ.',
    },
    {
        value: '4 визита',
        text: 'базовый ежемесячный ритм для активного объекта в Тбилиси.',
    },
    {
        value: 'от 250 ₾',
        text: 'стоимость разового выезда для старта и пилотного контроля.',
    },
];

const painCards: ListCard[] = [
    {
        title: 'Нет прозрачного прогресса без выезда',
        text: 'Мы не видим реальный прогресс без выезда на площадку.',
    },
    {
        title: 'Разрозненные фото в мессенджерах',
        text: 'Инвестор просит апдейт, а у нас только разрозненные фото из WhatsApp.',
    },
    {
        title: 'Банку нечем подтвердить milestone',
        text: 'Банк требует подтверждение этапа, а готового отчёта нет.',
    },
    {
        title: 'Нет быстрой проверки слов подрядчика',
        text: 'Подрядчики говорят «всё готово», но это нечем быстро проверить.',
    },
    {
        title: 'Хаотичная съёмка вместо сравнения',
        text: 'Нужно одинаково фиксировать объект каждую неделю, а не снимать хаотично.',
    },
    {
        title: 'Конфликт задач технадзора и маркетинга',
        text: 'Маркетингу тоже нужен контент, но технадзору важнее доказательная документация.',
    },
];

const benefitCards: ListCard[] = [
    {
        title: 'Единый визуальный архив по объекту',
        text: 'Каждая съёмка датирована и хранится по этапам в едином архиве.',
    },
    {
        title: 'Проверка прогресса без выезда',
        text: 'Собственник или инвестор открывает отчёт и видит актуальное состояние объекта.',
    },
    {
        title: 'Подтверждение milestone для банка',
        text: 'PDF-отчёт с фото и датой подходит для подтверждения этапа перед банком или партнёром.',
    },
    {
        title: 'Раннее выявление отклонений',
        text: 'Одинаковые ракурсы помогают быстрее заметить задержки и ошибки.',
    },
    {
        title: 'Investor-ready формат',
        text: 'Это не просто файлы, а понятный пакет для удалённого контроля.',
    },
    {
        title: 'Контент для продаж из тех же выездов',
        text: 'Часть материала из тех же выездов можно использовать в соцсетях и отделе продаж.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'Базовый выезд',
        subtitle: 'Разовый формат',
        items: [
            '20–30 фото с фиксированных точек (JPG)',
            'Видео-облёт 1–2 мин (MP4, 4K)',
            'Top-down обзор объекта сверху',
            'Доставка за 24 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'Инспекция пакет',
        subtitle: 'Регулярный контроль',
        items: [
            'Фиксированные ракурсы каждый визит для сравнения',
            'Облёт периметра с 4 сторон',
            'Крупный план ключевых зон: кран, перекрытия, фасад',
            'PDF-отчёт с датой, GPS и сравнением с прошлым визитом',
            'Облачный архив для инвестора и банка по ссылке',
            'Именование файлов по дате и номеру визита',
        ],
    },
    {
        title: 'Инвест-пакет',
        subtitle: 'Премиум отчётность',
        items: [
            'Всё из пакета инспекции',
            'Брендированный PDF-отчёт с титульной страницей и executive summary',
            'Сравнение milestone с предыдущим визитом',
            'Таймлапс-ролик по итогам месяца',
            'Двуязычные подписи RU/EN по запросу',
            'ZIP-архив для банка, инвестора и партнёра',
        ],
    },
];

const audienceCards: AudienceCard[] = [
    {
        title: 'Застройщики и девелоперы ЖК',
        text: 'Контроль подрядчиков и отчёты для акционеров по этапам в едином формате.',
    },
    {
        title: 'Генподрядчики',
        text: 'Документация этапов и защита от спорных ситуаций с субподрядчиками.',
    },
    {
        title: 'Инвест-агентства',
        text: 'Прозрачность для иностранных инвесторов из РФ, ОАЭ и ЕС без визита в Тбилиси.',
    },
    {
        title: 'Банки и финансирующие структуры',
        text: 'Подтверждение milestone перед траншом через понятный PDF-формат.',
    },
    {
        title: 'Собственники коммерческой недвижимости',
        text: 'Удалённый контроль реконструкции и накапливаемый архив по объекту.',
    },
];

const useCaseCards: UseCaseCard[] = [
    {
        title: 'ЖК в Ваке или Сабуртало',
        text:
            'Застройщик ставит объект на еженедельную инспекцию. Инвесторы из России и ОАЭ получают отчёт по ссылке без выезда в Тбилиси.',
    },
    {
        title: 'Коммерческий объект в Дидубе или Глдани',
        text:
            'Банк финансирует строительство, а PDF с фото и датой подтверждает этап для следующего транша.',
    },
    {
        title: 'Реконструкция в Старом городе',
        text:
            'Собственник контролирует ход работ удалённо, а каждый визит сравнивается с предыдущим для прозрачной динамики.',
    },
    {
        title: 'Склад или логистический центр на выезде из Тбилиси',
        text:
            'Генподрядчик фиксирует этапы и формирует доказательную базу для защиты от претензий субподрядчиков.',
    },
];

const evidenceCards: MetricCard[] = [
    {
        value: 'Фиксированные точки',
        text: 'Одинаковые ракурсы в каждом визите дают сопоставимость, которую нельзя получить хаотичной съёмкой.',
    },
    {
        value: 'Визуал + PDF',
        text: 'Фото и 4K-видео закрывают оперативный контроль, а PDF закрывает коммуникацию с инвестором и банком.',
    },
    {
        value: 'Поэтапный архив',
        text: 'История объекта накапливается автоматически: дата, визит, зона, сравнение с прошлой съёмкой.',
    },
    {
        value: '24 часа на отчёт',
        text: 'Критичные вопросы по прогрессу решаются в течение суток, а не в конце месяца.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Нишевая специализация под инспекцию объектов',
        text: 'Фокус на документации и инвест-отчётах, а не на универсальной съёмке «для всего».',
    },
    {
        title: 'Два дрона под разные задачи',
        text: 'DJI Air 3S для стабильных панорам и обзоров 4K, DJI Avata 2 для FPV при необходимости.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Дрон зарегистрирован. Ограничения по зонам проверяем заранее и берём юридические риски на себя.',
    },
    {
        title: 'Фиксированные точки каждый визит',
        text: 'Сравнение прогресса по неделям становится объективным и удобным для команды проекта.',
    },
    {
        title: 'PDF-отчёт за 24 часа',
        text: 'Материалы готовы для инвестора или банка без дополнительной ручной сборки внутри вашей команды.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка (день 1)',
        text: 'Вы описываете адрес, стадию объекта и получателей отчётов. Расчёт и рекомендацию по частоте выездов отправляем за 2 часа.',
    },
    {
        step: 'Шаг 2',
        title: 'Согласование (день 1–2)',
        text: 'Фиксируем график выездов, постоянные точки съёмки, формат отчёта и список участников с доступом.',
    },
    {
        step: 'Шаг 3',
        title: 'Первый выезд (день 2–3)',
        text: 'Приезжаем на объект, задаём базовые ракурсы для сравнения. Первый отчёт передаём через 24 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Регулярная инспекция',
        text: 'Работаем по графику. Каждый новый отчёт сравнивается с предыдущим, а архив по объекту пополняется автоматически.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'Разовый выезд',
        price: 'от 250 ₾',
        subtitle: 'Для первого знакомства с форматом',
        items: [
            '20–30 фото JPG с фиксированных точек',
            'Видео-облёт 1–2 мин (4K)',
            'Доставка за 24 часа (Google Drive)',
        ],
    },
    {
        title: 'Инспекция',
        price: 'от 900 ₾/мес',
        subtitle: '4 визита в месяц (еженедельно)',
        items: [
            'Всё из разового выезда × 4',
            'PDF-отчёт после каждого визита',
            'Сравнение с предыдущим визитом',
            'Облачный архив по ссылке',
        ],
        popular: true,
    },
    {
        title: 'Инвест-пакет',
        price: 'от 1 800 ₾/мес',
        subtitle: '4 визита + расширенная документация',
        items: [
            'Брендированный PDF (RU/EN)',
            'Executive summary страница',
            'Таймлапс-ролик по итогам месяца',
            'ZIP-архив для банка и инвестора',
            'Договор с графиком выездов',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Обзор локации и презентационный контент для продаж квартир, домов и ЖК.',
    },
    {
        title: '360° виртуальные туры',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат для удалённого показа помещений и объектов.',
    },
    {
        title: 'FPV-съёмка для рекламы',
        href: '/drone-fpv-cinema',
        text: 'Динамичные пролёты для промо-роликов, запуска кампаний и performance-креативов.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Дрон-инспекция объектов в Тбилиси',
    description:
        'Регулярная аэрофотосъёмка объектов недвижимости и инфраструктуры. Фото, видео и PDF-отчёты для застройщиков, инвесторов и банков в Тбилиси.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
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
        price: '250',
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. Аэросъёмка, инспекция объектов, 360° туры и промо-видео для бизнеса в Тбилиси.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-инспекция объектов в Тбилиси | Отчёты для инвесторов | Breus Media',
    description:
        'Инспекция фасадов, крыш и промобъектов в Тбилиси: фото, 4K-видео и PDF-отчёты за 24 часа. Разовый выезд от 250 ₾, пакеты от 900 ₾/мес.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-object-inspection',
    },
};

export default function DroneObjectInspectionPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={382100} label="Hero Section">
                <section
                    id="drone-object-inspection-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.22),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Инспекция объектов · Тбилиси
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-инспекция объектов в Тбилиси для застройщиков, инвесторов и генподрядчиков
                                </h1>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Еженедельные выезды на объект. Фото, видео и PDF-отчёт готовы для инвестора, банка
                                    или технадзора за 24 часа.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить проект
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть пакеты
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Один выезд занимает 1,5–2 часа — без остановки работ на объекте.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Что получает команда проекта</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                                            Разовый выезд для проверки формата инспекции.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">24 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Отчёт</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">4 визита</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">В месяц</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Фото, видео и PDF после каждого выезда</li>
                                        <li>Сравнение с предыдущим визитом по фиксированным точкам</li>
                                        <li>Архив по ссылке для инвестора, банка и проектной команды</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382120} label="What Is Section">
                <section id="object-inspection-what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
                            <div>
                                <h2 className="text-3xl font-bold md:text-4xl">Что такое дрон-инспекция объектов</h2>
                                <p className="mt-5 max-w-3xl leading-relaxed text-white/74">
                                    Это регулярная аэрофотосъёмка объекта с повторяемых точек и высот. Каждый визит
                                    фиксирует состояние объекта в одном формате: фото, 4K-видео и отчёт. В результате
                                    застройщик, инвестор и генподрядчик видят прогресс без выезда и без разрозненных
                                    файлов в мессенджерах.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-[#2a2a2a] bg-[#131313] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Формат нужен для</p>
                                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                    <li>Еженедельных апдейтов для инвесторов</li>
                                    <li>Подтверждения этапов для банков и траншей</li>
                                    <li>Контроля подрядчиков без выезда на площадку</li>
                                    <li>Сбора архивной документации по объекту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382140} label="Experience Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит для вашей команды</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы не просто снимаем красивый облёт, а строим регулярный процесс, где каждый участник
                                проекта получает свои данные в одном понятном пакете.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 lg:grid-cols-3">
                            {experienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382200} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Операционные ориентиры</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Инспекция работает, когда у команды есть стабильный ритм съёмок и предсказуемый формат
                                доставки отчётов.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382250} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте эти проблемы на объекте?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже типовые точки напряжения, из-за которых контроль затягивается, а коммуникация между
                                подрядчиком, инвестором и банком становится медленной.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382300} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что меняется после запуска инспекции</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Регулярный формат превращает «покажите, что происходит на площадке» в прозрачный процесс
                                с понятными сроками и фиксируемыми данными.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382305} label="Mid CTA Section 1">
                <MidCta
                    text="Есть объект в Тбилиси, который нужно поставить на регулярную инспекцию?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={382350} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                От разового выезда до investor-ready пакета: отчётность, архив и материалы для разных
                                участников проекта в одном процессе.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382360} label="Audience Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Кому подходит инспекция объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Формат полезен всем, кто принимает решения по объекту и должен видеть подтверждённый прогресс,
                                а не только текстовые апдейты.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {audienceCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382380} label="Use Cases Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как это применяется в Тбилиси</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ниже четыре рабочих сценария, где регулярная съёмка даёт практическую ценность и для
                                операционного контроля, и для финансирования.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2">
                            {useCaseCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={382500} label="Portfolio Section">
                    <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl font-bold md:text-4xl">Примеры инспекции объектов</h2>
                                <p className="mt-4 leading-relaxed text-white/70">
                                    На странице оставлен прозрачный placeholder. Реальные кейсы инспекции по Тбилиси
                                    будут добавляться по мере накопления проектов.
                                </p>
                            </div>

                            <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                                <p className="text-lg font-semibold text-white">Кейсы в работе</p>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                    Если нужен пилотный запуск инспекции на вашем объекте, можем начать с разового выезда
                                    и зафиксировать базовый формат отчётности под вашу команду.
                                </p>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={382520} label="Evidence Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему формат работает в реальных проектах</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сила инспекции в системности: одинаковая логика съёмки, короткий цикл отчётности и
                                архив, который остаётся полезным на каждом этапе объекта.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {evidenceCards.map((card) => (
                                <article key={`${card.value}-${card.text}`} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-2xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    {card.source ? <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">{card.source}</p> : null}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого знакомства с инспекцией" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={382700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={382560} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media для инспекции объектов</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Наша цель не просто снять объект с воздуха, а сделать отчётность пригодной для принятия
                                решений в девелопменте и финансировании.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382399} label="Process Note Section">
                <ProcessNote text="Один выезд занимает 1,5–2 часа — без остановки работ на объекте" />
            </DebugWrapper>

            <DebugWrapper id={382400} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Сначала фиксируем процесс и точки съёмки, затем работаем по графику так, чтобы отчёты были
                                сопоставимыми и предсказуемыми по срокам.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382600} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Разовый выезд от 250 ₾, регулярный пакет от 900 ₾/мес и расширенный инвест-пакет от
                                1 800 ₾/мес для объектов с банковским или инвест-финансированием.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш тип объекта и приоритетные зоны осмотра?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={382620} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Для сильной упаковки объекта обычно комбинируют регулярную инспекцию, презентационный
                                контент и формат удалённого показа.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={382800} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Опишите объект и желаемую частоту выездов — подготовим расчёт и предложим формат
                                        инспекции в течение 2 часов.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип объекта</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>ЖК</option>
                                                <option>Коммерческий объект</option>
                                                <option>Склад или логистический центр</option>
                                                <option>Реконструкция здания</option>
                                                <option>Другое</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Частота выездов</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Разовый выезд</option>
                                                <option>Еженедельно</option>
                                                <option>Раз в 2 недели</option>
                                                <option>Ежемесячно</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Кому нужны отчёты</label>
                                        <input
                                            type="text"
                                            placeholder="Инвестор, банк, технадзор, собственник, отдел продаж"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Адрес, стадия объекта, дедлайн и особенности площадки"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={382900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-weddings-events
Lines: 1119
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-weddings-events/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-weddings-events/DroneStickyCta';

type FaqItem = {
    question: string;
    answer: string;
};

type MetricCard = {
    value: string;
    text: string;
};

type PainCard = {
    title: string;
    role: string;
    text: string;
};

type BenefitCard = {
    title: string;
    text: string;
    detail: string;
};

type PackageCard = {
    title: string;
    subtitle: string;
    items: string[];
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type WhyUsCard = {
    title: string;
    text: string;
};

type PricingCard = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const socialProofCards: MetricCard[] = [
    {
        value: '01',
        text: 'Дрон показывает масштаб площадки, маршрут, ландшафт и атмосферу дня — то, что невозможно передать только с земли.',
    },
    {
        value: '02',
        text: 'Для destination wedding локация — часть продукта, а не просто фон.',
    },
    {
        value: '03',
        text: 'Один aerial session даёт материалы сразу для highlight-видео, Reels, stories и промо площадки.',
    },
    {
        value: '04',
        text: 'У event-контента с сильным establishing shot выше шанс удержать внимание в первые секунды ролика.',
    },
];

const painCards: PainCard[] = [
    {
        title: 'Боль 1',
        role: 'Пара / wedding couple',
        text: '«Мы хотим красивые кадры локации и дня целиком, но не хотим, чтобы дрон мешал церемонии или создавал суету.»',
    },
    {
        title: 'Боль 2',
        role: 'Wedding planner',
        text: '«Тайминг плотный. Любая техника, которая работает хаотично, начинает ломать процесс и раздражать площадку.»',
    },
    {
        title: 'Боль 3',
        role: 'Event venue / wedding venue',
        text: '«Площадка выглядит сильнее всего сверху, но клиенты редко видят её масштаб, подъезд, природу и окружение.»',
    },
    {
        title: 'Боль 4',
        role: 'Корпоративный организатор',
        text: '«Нужен яркий event recap для соцсетей и отчётности, но с понятным сценарием, без полётов наугад и без риска для гостей.»',
    },
    {
        title: 'Боль 5',
        role: 'Destination clients',
        text: '«Мы не находимся в Грузии постоянно. Нужен локальный оператор, который объяснит процесс, ограничения и заранее скажет, что реально можно снять.»',
    },
];

const benefitCards: BenefitCard[] = [
    {
        title: 'Показывает не только людей, но и контекст дня',
        text: 'Локация, маршрут, архитектура, природа, вид сверху, вход, церемониальная зона — всё, что создаёт ощущение масштаба.',
        detail: 'Кадры воздуха работают как визуальный каркас всей истории дня.',
    },
    {
        title: 'Делает wedding / event film визуально дороже',
        text: 'Один точный aerial layer сразу поднимает восприятие итогового ролика и помогает связать наземные кадры в цельную историю.',
        detail: 'Важно не количество полётов, а точные моменты и аккуратная интеграция.',
    },
    {
        title: 'Помогает площадке и организатору',
        text: 'Материал можно использовать не только для пары или заказчика, но и для venue-маркетинга, reels, stories и будущих продаж.',
        detail: 'Одна съёмка закрывает сразу несколько задач после события.',
    },
    {
        title: 'Работает как планируемый инструмент, а не как хаос в воздухе',
        text: 'Мы заранее определяем safe windows, точки взлёта и конкретные кадры, а не летаем всё время без задачи.',
        detail: 'Тайминг мероприятия остаётся под контролем planner-команды.',
    },
    {
        title: 'Можно снять и спокойно, и эффектно',
        text: 'Air 3S даёт плавные cinematic aerial shots, а Avata 2 используем точечно для динамики и FPV-сценариев там, где это уместно и безопасно.',
        detail: 'FPV — дополнительный инструмент, а не основной режим для свадебной площадки.',
    },
];

const deliverablePackages: PackageCard[] = [
    {
        title: 'БАЗОВЫЙ',
        subtitle: 'Свадьба / камерный private event / venue content',
        items: [
            '1 highlight-ролик 30–60 сек',
            '3–5 вертикальных Reels 10–20 сек',
            '10–15 аэрофото JPG',
            'Establishing shots локации, подъезда, церемониальной зоны, природы вокруг',
            'Доставка за 48–72 часа',
            'Google Drive или Telegram',
        ],
    },
    {
        title: 'СТАНДАРТ',
        subtitle: 'Свадьба с несколькими aerial-сценами / брендовый event / корпоратив',
        items: [
            'Highlight-ролик 45–90 сек',
            '5–8 вертикальных Reels разной длины',
            '15–25 аэрофото JPG',
            'Кадры площадки, гостей на безопасной дистанции, общей атмосферы и вечернего света',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
    },
    {
        title: 'ПРОДАКШН',
        subtitle: 'Destination wedding / luxury venue / крупный event по таймингу',
        items: [
            'Pre-production: бриф, сценарий полётов, проверка ограничений',
            'Full coverage воздушной части по согласованным окнам',
            'Highlight + набор коротких клипов под платформы',
            'RAW / исходники по запросу',
            'Line-item смета',
            'Коммуникация RU/EN',
            'Сценарий с учётом локации, гостей и ограничений GCAA',
        ],
    },
];

const allPackagesItems: string[] = [
    'Без водяного знака',
    'Право на коммерческое использование для согласованных задач',
    '1 итерация правок',
];

const nicheCards: NicheCard[] = [
    {
        title: 'Wedding couple / destination wedding',
        pain: 'Хочется красоты и масштаба, но без лишней техники над головой весь день.',
        solution: 'Заранее планируем 2–4 точных aerial windows и снимаем только то, что реально усиливает фильм.',
        deliverables: 'Highlight + reels + aerial photos.',
    },
    {
        title: 'Wedding planner',
        pain: 'Дрон часто воспринимается как фактор хаоса и риска для тайминга.',
        solution: 'Согласуем маршрут, окна съёмки и точки работы заранее, чтобы aerial layer был частью плана, а не помехой.',
        deliverables: 'Структурированный aerial coverage plan + финальные материалы.',
    },
    {
        title: 'Wedding venue / ресторан / загородная площадка',
        pain: 'Клиент не видит весь потенциал места с уровня земли.',
        solution: 'Aerial hero-кадры территории, подъезда, церемониальной зоны, террас, природы и окружающего ландшафта.',
        deliverables: 'Короткий promo hero + reels + фото площадки.',
    },
    {
        title: 'Corporate event / brand event',
        pain: 'Нужен event recap, который выглядит масштабно и современно, но без риска и «дрон ради эффекта».',
        solution: 'Establishing shots, crowd energy с безопасной дистанции, входные группы, venue reveal, outdoor-сцены по плану.',
        deliverables: 'Recap clips + vertical edits + venue/context shots.',
    },
    {
        title: 'Частный outdoor event',
        pain: 'Хочется запомнить место и атмосферу, а не только людей крупным планом.',
        solution: 'Показываем связку «люди + пространство + природа + свет».',
        deliverables: 'Highlight sequence + atmosphere reels + aerial stills.',
    },
    {
        title: 'Destination / international client',
        pain: 'Нужен локальный подрядчик, который понимает Грузию, говорит по-английски и не скрывает ограничения.',
        solution: 'Прозрачный workflow, коммуникация RU/EN, понятный бриф, проверка локации и реалистичный план съёмки.',
        deliverables: 'Scoped package + clear delivery timeline.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Можно ли использовать дрон на свадьбе в Тбилиси?',
        answer:
            'Да, но не в формате «летаем как угодно весь день». Сначала оцениваем локацию, количество людей, сценарий события и ограничения по зоне. Для камерных свадеб и частных мероприятий это часто реально, если съёмка заранее спланирована и не нарушает безопасность.',
    },
    {
        question: 'Будет ли дрон мешать церемонии и гостям?',
        answer:
            'Нет, если aerial-съёмка встроена в тайминг. Обычно работаем короткими planned windows: до начала, в спокойные интервалы или на открытых участках. Наша цель — снять материал без давления на площадку и без ощущения суеты.',
    },
    {
        question: 'Вы летаете над толпой во время мероприятия?',
        answer:
            'По умолчанию нет. Для сценариев рядом с большим количеством людей сначала оцениваем формат события, плотность гостей и допустимые траектории. Безопасность всегда важнее эффектного кадра.',
    },
    {
        question: 'Что лучше для свадьбы: обычный дрон или FPV?',
        answer:
            'Для свадеб чаще основа — плавные cinematic кадры на Air 3S. FPV на Avata 2 используем точечно, только где это уместно и безопасно. Такой баланс даёт и спокойную картинку, и динамику без перегруза.',
    },
    {
        question: 'Можно ли снимать venue-контент отдельно от дня свадьбы?',
        answer:
            'Да. Часто это даже удобнее: отдельно снимаем площадку в спокойном режиме для promo-материалов, а в день события берём только короткий aerial layer по заранее согласованным окнам.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Кахетия, Батуми, Казбеги и другие регионы — по договорённости. На брифе учитываем логистику, погодные условия и тайминг площадки.',
    },
    {
        question: 'В какую погоду возможна съёмка?',
        answer:
            'Обычно при ветре до 10–12 м/с и без осадков. Если погода мешает безопасной съёмке, переносим aerial-часть на ближайшее подходящее окно.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка свадьбы или event в Тбилиси?',
        answer:
            'Стартовый пакет — от 450 ₾. Стандартный пакет — от 800 ₾. Продакшн-пакет для destination wedding или крупного мероприятия — от 2 000 ₾. Точный расчёт делаем после короткого брифа.',
    },
    {
        question: 'Сколько времени занимает aerial-часть в день съёмки?',
        answer:
            'Обычно 1–3 часа в зависимости от размера локации и числа запланированных окон. Мы заранее фиксируем, когда работаем, чтобы не ломать общий тайминг мероприятия.',
    },
    {
        question: 'Что входит в результат и когда вы отдаёте материалы?',
        answer:
            'В зависимости от пакета: highlight-ролик, вертикальные reels и аэрофото. Базовая выдача обычно 48–72 часа, расширенные пакеты — 3–5 рабочих дней.',
    },
    {
        question: 'Можно ли включить aerial-кадры в фильм внешнего видеографа?',
        answer:
            'Да. Работаем как отдельный aerial layer и передаём материал в согласованном формате, чтобы ваш монтажёр или команда продакшна могли удобно встроить кадры в общий фильм.',
    },
    {
        question: 'Вы работаете с иностранными клиентами и planner-командами?',
        answer:
            'Да. Коммуникация на RU/EN, понятный бриф, прозрачный scope и реалистичный план съёмки с учётом локации и ограничений.',
    },
    {
        question: 'Есть ли договор для крупных мероприятий?',
        answer:
            'Да. Для продакшн-пакетов и сложных сценариев оформляем договор с описанием объёма работ, сроков выдачи и условий использования материалов.',
    },
    {
        question: 'Что если часть плана нельзя безопасно реализовать на площадке?',
        answer:
            'Сразу предлагаем альтернативный кадр или сценарий. Наша задача — сохранить стиль и результат, не нарушая безопасный формат работы мероприятия.',
    },
];

const whyUsCards: WhyUsCard[] = [
    {
        title: 'Спокойный и управляемый aerial workflow',
        text: 'Дрон встраивается в тайминг события как часть плана, а не как отдельное шоу в воздухе.',
    },
    {
        title: 'Два инструмента под разные задачи',
        text: 'Air 3S для плавных establishing кадров и Avata 2 для точечной динамики там, где это безопасно и уместно.',
    },
    {
        title: 'Контент сразу под разные форматы',
        text: 'Highlight, reels и aerial photos можно использовать для пары, организатора и площадки.',
    },
    {
        title: 'Работа в рамках GCAA без запугивания',
        text: 'Объясняем ограничения простым языком и заранее собираем реалистичный сценарий съёмки.',
    },
    {
        title: 'Понятная коммуникация для local и destination клиентов',
        text: 'RU/EN бриф, прозрачный scope, чёткие сроки и аккуратная работа с площадкой.',
    },
];

const pricingCards: PricingCard[] = [
    {
        title: 'БАЗОВЫЙ',
        price: 'от 450 ₾',
        subtitle: 'Свадьба / private event / venue content',
        items: [
            'Highlight 30–60 сек',
            '3–5 Reels 10–20 сек',
            '10–15 аэрофото JPG',
            'Доставка за 48–72 часа',
        ],
    },
    {
        title: 'СТАНДАРТ',
        price: 'от 800 ₾',
        subtitle: 'Свадьба с несколькими aerial-сценами / брендовый event',
        items: [
            'Highlight 45–90 сек',
            '5–8 вертикальных Reels',
            '15–25 аэрофото JPG',
            'Горизонтальная и вертикальная версия',
            'Доставка за 3–5 рабочих дней',
        ],
        popular: true,
    },
    {
        title: 'ПРОДАКШН',
        price: 'от 2 000 ₾',
        subtitle: 'Destination wedding / luxury venue / крупный event',
        items: [
            'Pre-production и сценарий полётов',
            'Full coverage воздушной части',
            'Highlight + короткие клипы',
            'RAW по запросу',
            'Line-item смета',
            'RU/EN коммуникация',
        ],
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф (день 1)',
        text: 'Обсуждаем формат события, локацию, тайминг и желаемые кадры. Вы сразу понимаете, что реалистично и безопасно.',
    },
    {
        step: 'Шаг 2',
        title: 'Препродакшн (день 1–2)',
        text: 'Фиксируем окна съёмки, точки взлёта и последовательность кадров. Для сложных зон заранее проверяем ограничения.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка (день 2–4)',
        text: 'Работаем точечно по плану, без хаотичных полётов. Aerial-часть обычно занимает 1–3 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и доставка (день 3–7)',
        text: 'Собираем highlight, reels и фото в согласованных форматах. Передаём через Google Drive или Telegram.',
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'FPV-съёмка и кинодроны',
        href: '/drone-fpv-cinema',
        text: 'Комбинированный aerial и FPV-подход для брендов, пространств и коммерческих задач.',
    },
    {
        title: 'Дрон-съёмка отелей и туризма',
        href: '/drone-hotels-tourism',
        text: 'Aerial-контент для hospitality и destination-направлений в Тбилиси и по Грузии.',
    },
    {
        title: '360° виртуальные туры для отелей',
        href: '/360-tour-hotels',
        text: 'Интерактивная презентация площадки для продаж и удалённого знакомства с локацией.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Дрон-съёмка свадеб и мероприятий в Тбилиси',
    description:
        'Кинематографичная дрон-съёмка свадеб, private events и selected corporate events в Тбилиси и по Грузии. Безопасный сценарий, aerial highlights, FPV по согласованию.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: 'Тбилиси, Кахетия, Батуми, Казбеги, Грузия',
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
    description: 'Дрон-съёмка свадеб, private events и площадок в Тбилиси и по всей Грузии.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    url: 'https://breusmedia.com/drone-weddings-events',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: 'Дрон-съёмка свадеб и мероприятий в Тбилиси | Wedding & Event Drone | Breus Media',
    description:
        'Кинематографичная дрон-съёмка свадеб, private events и selected corporate events в Тбилиси и по Грузии. Безопасный сценарий, aerial highlights, FPV по согласованию. От 450 ₾.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-weddings-events',
    },
};

export default function DroneWeddingsEventsPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <DronePageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <DebugWrapper id={386100} label="Hero Section">
                <section
                    id="drone-weddings-events-hero"
                    className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80')",
                        }}
                    />
                    <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_38%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.94)_65%,#080808)]" />
                    <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                    <div className="container relative mx-auto px-6">
                        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                            <div>
                                <div className="mb-5 flex flex-wrap gap-2">
                                    <span className="rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                        Weddings & Events Drone Layer
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                                        DJI Air 3S + DJI Avata 2
                                    </span>
                                </div>

                                <h1 className="max-w-5xl text-4xl font-bold leading-[0.92] md:text-6xl lg:text-7xl">
                                    Дрон-съёмка свадеб и мероприятий в Тбилиси и по всей Грузии
                                </h1>

                                <p className="mt-4 text-sm uppercase tracking-[0.12em] text-white/60 md:text-base">
                                    Wedding &amp; Event Drone Filming in Tbilisi, Georgia (country)
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                    Добавляем воздух, масштаб и атмосферу в ваш день — без хаоса и без лишнего риска.
                                    Заранее планируем, когда и как летит дрон, что снимаем и что вы получаете на
                                    выходе: aerial highlights, reels, фото локации и кадры для свадебного или
                                    event-фильма.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-[12px] bg-[#FFD23F] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Обсудить съёмку
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                    >
                                        Посмотреть цены
                                    </a>
                                </div>

                                <p className="mt-6 text-sm leading-relaxed text-white/58">
                                    Съёмка свадьбы или event venue обычно занимает 1–3 часа для воздушной части. Монтаж —
                                    48–72 часа.
                                </p>
                            </div>

                            <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко по пакету</p>
                                <div className="mt-5 space-y-4">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                        <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для свадеб и мероприятий.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">48–72 ч</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Монтаж</p>
                                        </div>
                                        <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                            <p className="text-lg font-bold text-white">RU / EN</p>
                                            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Коммуникация</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                        <li>Aerial highlights + establishing shots</li>
                                        <li>Wedding / venue / event content</li>
                                        <li>Работаем по правилам GCAA</li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386120} label="Social Proof Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему свадьбы и ивенты выигрывают от кадров с воздуха</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Этот блок про практическую пользу: масштаб локации, атмосфера дня и сильные первые
                                секунды финального ролика.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {socialProofCards.map((card) => (
                                <article key={card.value} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.value}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>

                        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/58">
                            Первые event-кейсы Breus Media будут усиливать этот блок. Сейчас делаем ставку на понятный
                            процесс, безопасность и аккуратную интеграцию в тайминг мероприятия.
                        </p>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386140} label="Pain Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Узнаёте свою ситуацию?</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Типовые сценарии, где aerial-съёмка нужна, но есть опасения по таймингу, безопасности и
                                уместности на площадке.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {painCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{card.title}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{card.role}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386160} label="Benefits Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что даёт дрон-съёмка свадьбе или мероприятию</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Ценность aerial-слоя не в «эффекте ради эффекта», а в том, как он усиливает историю дня.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {benefitCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                    <p className="mt-3 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/78">
                                        {card.detail}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386180} label="Mid CTA 1 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Планируете свадьбу, private event или площадку в Тбилиси, Кахетии, Батуми или Казбеги?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить съёмку
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386200} label="Deliverables Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Пакеты собраны так, чтобы закрыть и задачу пары/заказчика, и маркетинг площадки, и
                                контент для соцсетей.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {deliverablePackages.map((pkg) => (
                                <article key={pkg.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{pkg.subtitle}</p>
                                    <h3 className="mt-3 text-xl font-bold text-white">{pkg.title}</h3>
                                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                        {pkg.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Во всех пакетах</p>
                            <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-3">
                                {allPackagesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386220} label="Niches Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Ниши и типы событий</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Для каждого формата события важны свои кадры, свои окна съёмки и своя логика выдачи.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {nicheCards.map((card) => (
                                <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-4 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Боль:</span> {card.pain}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Решение:</span> {card.solution}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">
                                        <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386240} label="Georgia Location Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Грузия — сильная локация для свадеб и events</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Тбилиси — старый город, холмы, видовые площадки, винтажная архитектура и современные
                                venues в одном городе.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Кахетия — винодельни, поля, горы и тёплый свет. Идеально для destination weddings и
                                частных мероприятий на открытом воздухе.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Казбеги и горные регионы — драматичный пейзаж, который сам становится частью истории дня.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Батуми и побережье — море, современная архитектура, пальмы и вечерний свет для яркого
                                event-контента.
                            </p>
                            <p className="mt-6 rounded-[12px] border border-[#FFD23F]/25 bg-[#0d0d0d] px-4 py-3 text-sm leading-relaxed text-white/82">
                                Georgia (country) is strong for destination weddings and visual events: scenic
                                locations, relatively easy logistics and a distinctive landscape in one small country.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386260} label="Safety Rules Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как мы работаем с полётами на свадьбах и мероприятиях</h2>
                            <p className="mt-5 leading-relaxed text-white/74">
                                Мы работаем в рамках правил Georgian Civil Aviation Agency (GCAA). Дрон зарегистрирован.
                                Максимальная рабочая высота — до 120 м в рамках общих правил.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Для площадок в чувствительных или ограниченных зонах заранее проверяем локацию. Для
                                public events и сценариев рядом с большим количеством людей не обещаем полёт «по
                                умолчанию» — сначала оцениваем формат события, локацию, плотность людей и допустимый
                                сценарий съёмки.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Наша задача — не просто снять кадр, а сделать это спокойно, безопасно и без лишнего
                                давления на площадку, пару, гостей или организаторов.
                            </p>
                            <p className="mt-4 leading-relaxed text-white/74">
                                Свадебный или event-дрон не должен быть «шумной звездой» на площадке. Обычно мы снимаем
                                короткими planned windows: до начала, в спокойные интервалы, на открытых участках или в
                                заранее согласованных точках.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386280} label="Examples Section">
                <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Примеры wedding и event aerial-layer</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                На странице оставлен прозрачный placeholder. По запросу отправим примеры под формат
                                вашего события и площадки.
                            </p>
                        </div>

                        <div className="mt-10 rounded-[22px] border border-dashed border-[#FFD23F]/35 bg-[#101010] p-10 text-center">
                            <p className="text-lg font-semibold text-white">Кейсы по запросу</p>
                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/64">
                                Расскажите о локации и тайминге мероприятия. Подготовим реалистичный aerial-план без
                                лишней сложности для вашей команды.
                            </p>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386300} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для первого планирования" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={386320} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" bgColor="#0D0D0D" />
            </DebugWrapper>

            <DebugWrapper id={386340} label="Why Us Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Мы продаём не «полёт ради эффекта», а аккуратный aerial-layer, который усиливает событие
                                и не мешает ему.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {whyUsCards.map((card) => (
                                <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386360} label="Pricing Section">
                <section id="pricing" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Подбираем пакет под формат события, размер площадки и необходимый объём финального
                                контента.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 xl:grid-cols-3">
                            {pricingCards.map((card) => (
                                <article
                                    key={card.title}
                                    className={`rounded-[20px] border p-6 ${
                                        card.popular
                                            ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                            : 'border-[#2a2a2a] bg-[#141414]'
                                    }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                            <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                        </div>
                                        {card.popular ? (
                                            <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                                Popular
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                        {card.items.map((item) => (
                                            <li key={item}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386380} label="Mid CTA 2 Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                    <div className="container mx-auto px-6">
                        <p className="mb-6 text-center text-sm text-white/50">
                            Все цены в грузинских лари (₾) — без скрытых платежей.
                        </p>
                        <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <p className="max-w-2xl leading-relaxed text-white/80">
                                Нужен точный расчёт под ваш формат свадьбы или мероприятия?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Получить расчёт
                            </a>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386400} label="Process Note Section">
                <ProcessNote text="Съёмка свадьбы или event venue обычно занимает 1–3 часа для воздушной части. Монтаж — 48–72 часа." />
            </DebugWrapper>

            <DebugWrapper id={386420} label="Process Section">
                <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Всё строится вокруг предсказуемого процесса: без хаоса, с уважением к площадке и
                                таймингу события.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step) => (
                                <article key={step.step} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386440} label="Related Services Section">
                <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                            <p className="mt-4 leading-relaxed text-white/70">
                                Если нужно усилить результат, комбинируем aerial-layer с другими визуальными форматами.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedServices.map((service) => (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={386460} label="Contact Section">
                <section id="contact" className="bg-[#080808] py-20">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                                <div>
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                    <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                        Напишите формат события, локацию и ключевые моменты тайминга. Предложим
                                        реалистичный aerial-сценарий и расчёт под ваш день.
                                    </p>

                                    <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Напрямую</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            <a
                                                href="https://wa.me/995574619393"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href="mailto:hello@breus.media"
                                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                            >
                                                hello@breus.media
                                            </a>
                                        </div>
                                        <p className="mt-4 text-sm leading-relaxed text-white/55">
                                            Для Telegram укажите username в форме. Отвечаем ежедневно с 9:00 до 21:00.
                                        </p>
                                    </div>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                                            <input
                                                type="text"
                                                placeholder="Ваше имя"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                                                Телефон / WhatsApp / Telegram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="+995 ... или @username"
                                                className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Тип события</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Свадьба</option>
                                                <option>Private event</option>
                                                <option>Venue-контент</option>
                                                <option>Corporate / brand event</option>
                                                <option>Destination event</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Локация</label>
                                            <select className="w-full rounded-[14px] border border-white/12 bg-[#121212] px-4 py-3 text-white outline-none transition-colors focus:border-[#FFD23F]/55">
                                                <option>Тбилиси</option>
                                                <option>Кахетия</option>
                                                <option>Батуми</option>
                                                <option>Казбеги</option>
                                                <option>Другая локация в Грузии</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Дата и тайминг</label>
                                        <input
                                            type="text"
                                            placeholder="Дата события, ключевые интервалы, ограничения площадки"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Комментарий</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Что важно снять, какие форматы нужны, есть ли внешний видеограф"
                                            className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                    >
                                        Отправить заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DroneStickyCta />

            <DebugWrapper id={386480} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] {
                            height: 2px !important;
                        }

                        .clean-debug-overlays > div[aria-hidden][class*="fixed"][class*="top-0"] > div {
                            background: #FFD23F !important;
                            opacity: 1 !important;
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

## /drone-warehouses
Lines: 5
```tsx
import { redirect } from 'next/navigation';

export default function DroneWarehousesAliasPage() {
    redirect('/drone-services/drone-warehouses');
}

```
---
---

## /drone-services/drone-auto
Lines: 1207
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { AutoContactForm } from './AutoContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type MistakeItem = {
    title: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type ExampleItem = {
    tag: string;
    title: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-auto';
const PAGE_TITLE = 'Аэросъёмка авто и автосалонов в Тбилиси — Breus Media';
const PAGE_DESCRIPTION =
    'Дрон-съёмка для автосалонов, детейлинга и проката в Тбилиси. FPV-пролёты, трекинг авто в движении, обзор шоурума. Пакеты от 590 ₾. Работаем по всей Грузии.';

const serviceTypes: CardItem[] = [
    {
        title: 'Съёмка автосалона и площадки',
        text: 'Обзорные планы шоурума снаружи, стоянка с автопарком, фасад и территория. Акцент на масштаб, геометрию и бренд.',
    },
    {
        title: 'Трекинг-съёмка авто в движении',
        text: 'Дрон сопровождает автомобиль на дороге: параллельно, сзади, низко на взлёте. FPV-режим добавляет ощущение скорости.',
    },
    {
        title: 'Промо-контент для соцсетей и рекламы',
        text: 'Короткие ролики для Reels и Shorts, аэрофото и имиджевые видео для Instagram, TikTok, Facebook, YouTube и сайта.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Автосалоны',
        text: 'Новые и подержанные авто. Помогает показать масштаб площадки, качество инвентаря и атмосферу шоурума.',
    },
    {
        title: 'Детейлинг-студии',
        text: 'Результат работы виден в деталях. Дрон даёт эффектные кадры снаружи, а наземная камера закрывает детали.',
    },
    {
        title: 'Автопрокат',
        text: 'Покажите парк машин сверху, локацию и удобство. Это продаёт быстрее, чем прайс-лист на странице.',
    },
    {
        title: 'Частные продавцы премиальных авто',
        text: 'Видео с дрона делает объявление на MyAuto заметно дороже и сильнее конкурентов в ленте.',
    },
    {
        title: 'Дилерские центры и импортёры',
        text: 'Презентационные ролики для партнёров, стартов продаж новых моделей и корпоративных задач.',
    },
    {
        title: 'Авто-блогеры и тест-драйв каналы',
        text: 'Красивый обзор машины в городе или на природе, который выглядит киношно и удерживает просмотр.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Все выглядят одинаково',
        text: 'Фото у стены, одинаковые ракурсы и свет. Покупатель листает объявления и не видит разницы.',
    },
    {
        title: 'Видео есть, но оно не работает',
        text: 'Ролик снят на телефон, просмотры минимальные, заявок нет. Контент не запоминается и не удерживает внимание.',
    },
    {
        title: 'Площадка большая, но это не видно',
        text: 'Сотня машин и инфраструктура выглядят как обычный рынок, если показывать всё только с земли.',
    },
    {
        title: 'Нет времени этим заниматься',
        text: 'Снять, смонтировать, опубликовать — это отдельный проект, который откладывается «на потом».',
    },
    {
        title: 'Конкуренты из-за рубежа выглядят лучше',
        text: 'Продукт может быть таким же, но визуально проигрывает международным дилерам и крупным брендам.',
    },
];

const earnList: string[] = [
    'Видео с дрона увеличивает время просмотра страницы и объявления, повышая шанс заявки.',
    'Сильный визуал помогает удерживать цену: к красиво снятой машине торг обычно ниже.',
    'Контент для соцсетей может приводить трафик месяцами без постоянных доплат на продакшн.',
    'Имиджевый ролик повышает доверие иногородних клиентов, которые едут из других регионов Грузии.',
];

const saveList: string[] = [
    'Один съёмочный день закрывает сайт, соцсети, рекламу и презентации без пересъёмок под каждый канал.',
    'Контент работает без вашего участия: клиент смотрит ролик вечером, заявка приходит утром.',
    'Понятный договор и полные права на использование материалов в рекламе и digital-каналах.',
    'Съёмка не мешает работе салона: дрон работает над площадкой и снаружи шоурума.',
];

const shootDayItems: string[] = [
    'Разведка локации и выбор точек съёмки',
    'Аэросъёмка площадки, шоурума и/или авто в движении на DJI Air 3S (4K)',
    'FPV-пролёты на DJI Avata 2 (при включении в пакет)',
    'Наземная видео- и фотосъёмка для дополнения воздушного контента',
    'Работа с вашей командой по сценарию: какие машины, какие ракурсы, какая атмосфера',
    'Все исходные материалы хранятся на время проекта',
];

const finalResultItems: string[] = [
    'Основной ролик 1–3 минуты (4K, монтаж, цветокоррекция, музыка)',
    'Короткие версии для Reels/Shorts 15–60 секунд (по пакету или отдельно)',
    'Аэрофотографии: 15–40 обработанных JPG-кадров',
    'Форматы под публикацию: сжатые версии для соцсетей + оригиналы для сайта и печати',
    'Передача через облако в течение 3–7 рабочих дней',
    'Полные права на использование материалов без ограничений по времени и территории',
];

const useCases: CardItem[] = [
    {
        title: 'Запуск нового автосалона',
        text: 'Снимаем шоурум, парк машин и атмосферу открытия. Получается пакет контента сразу для нескольких каналов.',
    },
    {
        title: 'Обновление контента для MyAuto и сайта',
        text: 'Свежие аэрофото площадки и наземные кадры машин за один день меняют восприятие объявлений.',
    },
    {
        title: 'Промо конкретной модели',
        text: 'Трекинг-видео на дороге и кинематографичные кадры на фоне Тбилиси или природы для Instagram и YouTube.',
    },
    {
        title: 'Детейлинг «до/после»',
        text: 'Обзор с воздуха + наземные детали дают короткий ролик, который хорошо работает в Reels.',
    },
    {
        title: 'Видео для франшизы или инвестора',
        text: 'Имиджевый материал о площадке и масштабе бизнеса для партнёров и презентаций.',
    },
    {
        title: 'Прокат авто',
        text: 'Показываем парк и машины в движении на красивых локациях, делаем короткие ролики по моделям.',
    },
];

const examples: ExampleItem[] = [
    {
        tag: 'Имиджевый ролик · Автосалон, Тбилиси',
        title: 'Обзор площадки крупного дилера',
        text: 'Дрон поднимается над стоянкой с 80+ машинами, делает дугу над фасадом, затем опускается к главному входу. Монтаж дополнен кадрами интерьера шоурума. Итог: ролик 1:40 для сайта и YouTube.',
    },
    {
        tag: 'Трекинг в движении · Тбилиси — Мцхета',
        title: 'Погоня за автомобилем',
        text: 'DJI Air 3S сопровождает авто на скорости 80 км/ч сзади-сбоку, затем уходит вверх. FPV-добавка: низкий пролёт и резкий взлёт с раскрытием пейзажа. Итог: ролик 40 сек для Reels.',
    },
    {
        tag: 'Детейлинг · До/После, Сабуртало',
        title: 'Контент-пакет для студии',
        text: 'Аэрофото фасада + наземные кадры процесса + финальный облёт машины после обработки. Результат: 8 фото, Reels 30 сек и кадр для обложки.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '85%',
        label: 'Покупателей начинают онлайн',
        text: 'До визита в салон клиент сначала оценивает визуал. Контент становится первым фильтром доверия.',
    },
    {
        value: '3x',
        label: 'Больше просмотров',
        text: 'Видео с дрона в среднем получает кратно больше просмотров в соцсетях, чем обычные наземные ролики.',
    },
    {
        value: '7 дней',
        label: 'Средний цикл выдачи',
        text: 'От съёмки до готового материала в стандартном процессе. Экспресс-монтаж возможен за 1–2 дня.',
    },
    {
        value: '100%',
        label: 'Полёты по правилам GCAA',
        text: 'Работаем легально и заранее проверяем зоны полётов, чтобы у клиента не было юридических рисков.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка для автобизнеса и зачем она нужна?',
        answer:
            'Это съёмка с дрона, которая показывает машины, площадку и шоурум с ракурсов, недоступных с земли. Такой контент передаёт масштаб, движение и атмосферу бренда и помогает выделиться среди конкурентов.',
    },
    {
        question: 'Опасен ли дрон для автомобилей во время съёмки?',
        answer:
            'Нет. Полёты выполняются с безопасной дистанцией и контролируемой траекторией. В профессиональной коммерческой практике основой является безопасность техники и людей.',
    },
    {
        question: 'Можно ли снимать внутри автосалона дроном?',
        answer:
            'Да, если пространство позволяет: нужна разведка, контролируемая скорость и освобождённая зона манёвра. Для динамичных внутренних пролётов используется FPV-дрон DJI Avata 2.',
    },
    {
        question: 'Нужно ли готовить площадку перед съёмкой?',
        answer:
            'Да, это сильно влияет на результат. Нужно убрать лишние предметы, выстроить машины и заранее согласовать приоритетные ракурсы. Мы даём понятный чеклист подготовки.',
    },
    {
        question: 'Можно ли снимать авто в движении по городским улицам?',
        answer:
            'Да, при соблюдении условий безопасности и выборе подходящего маршрута. Лучшие результаты обычно получаются на более свободных дорогах и заранее согласованных локациях.',
    },
    {
        question: 'Как влияет погода на съёмку?',
        answer:
            'Дождь, сильный ветер и неподходящая облачность могут потребовать переноса. Самый выигрышный свет для автомобилей — утро и золотой час перед закатом.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит дрон-съёмка для автосалона в Тбилиси?',
        answer:
            'Стартовый пакет — от 590 ₾. Полный контент-пакет с трекингом, FPV и несколькими версиями монтажа — от 1 490 ₾. Точная стоимость зависит от локаций и объёма задач.',
    },
    {
        question: 'Что входит в стоимость?',
        answer:
            'Съёмочный день с оборудованием, выезд в Тбилиси, монтаж, цветокоррекция и передача финальных файлов. Дополнительно оплачиваются выезд за пределы Тбилиси, экспресс-монтаж и дополнительные локации.',
    },
    {
        question: 'Какие форматы материалов вы передаёте?',
        answer:
            'Основной ролик в MP4 (H.264/H.265), версии для соцсетей в 16:9, 9:16 и 1:1, фото в JPEG высокого разрешения. RAW-исходники — по запросу.',
    },
    {
        question: 'Нужно ли разрешение на полёты над автосалоном в Тбилиси?',
        answer:
            'В большинстве случаев отдельное разрешение на точку не требуется, если соблюдаются правила GCAA. Для зон ограничений, включая близость к аэропорту, разрешения оформляем мы.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer: 'Да. Работаем по всей Грузии: Батуми, Рустави, Гори, Мцхета и другие локации. Выезд рассчитывается отдельно.',
    },
    {
        question: 'Кто владеет правами на готовый материал?',
        answer:
            'После оплаты заказчик получает полные права на использование материалов в рекламе, на сайте, в соцсетях, презентациях и печати. Это фиксируется в договоре.',
    },
    {
        question: 'Сколько занимает весь процесс от брифа до результата?',
        answer:
            'Обычно 7–10 рабочих дней: подготовка, один съёмочный день и монтаж. Экспресс-выдача за 1–2 дня возможна за доплату.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Специализированное оборудование',
        text: 'DJI Air 3S для чистой аэросъёмки и DJI Avata 2 для FPV-динамики. Два инструмента под разные задачи.',
    },
    {
        title: 'Понимание автомобильной съёмки',
        text: 'Трекинг требует точной скорости, дистанции и логики движения кадра. Это отдельная практика, а не универсальная съёмка.',
    },
    {
        title: 'Полный пакет, а не набор исходников',
        text: 'Вы получаете готовые ролики, версии под соцсети и обработанные фото, а не «сырой» архив.',
    },
    {
        title: 'Работа по договору',
        text: 'Бриф, договор, сроки, акт и права использования фиксируются официально и прозрачно.',
    },
    {
        title: 'Полёты с соблюдением GCAA',
        text: 'Летаем только в рамках действующих правил, заранее проверяем зоны и ограничения.',
    },
    {
        title: 'Опыт в разных нишах автобизнеса',
        text: 'Автосалоны, детейлинг, прокат и частные продажи требуют разных сценариев и визуальной подачи.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы описываете задачу: площадка, модели, движение/статика, каналы публикации. Мы уточняем детали.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка',
        text: 'Согласовываем дату, свет, погоду, список кадров и чеклист подготовки площадки.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем по плану: дрон на площадке и трекинге, наземная камера по деталям и шоуруму.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: 'Отбор материала, цветокоррекция, сборка ролика и черновая версия для одной итерации правок.',
    },
    {
        step: 'Шаг 5',
        title: 'Доставка',
        text: 'Передаём финальные файлы через облако в согласованных форматах и с полными правами.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Старт',
        price: 'от 590 ₾',
        duration: '2–3 часа',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка площадки или шоурума снаружи (DJI Air 3S)',
            'Основной ролик до 90 секунд: монтаж + цветокоррекция',
            '15 обработанных аэрофотографий',
            'Версия ролика для Instagram (9:16 или 1:1)',
        ],
        addons: ['Экспресс-монтаж 1–2 дня: +150 ₾', 'Дополнительные наземные кадры: +200 ₾'],
    },
    {
        title: 'Стандарт',
        price: 'от 1 090 ₾',
        duration: '3–5 часов',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка площадки + трекинг авто в движении',
            'Основной ролик 1.5–2.5 минуты',
            'Короткая версия Reels/Shorts 30–60 секунд',
            '25 обработанных аэрофото',
            'Форматы 16:9, 9:16, 1:1',
        ],
        addons: [
            'FPV-пролёт по шоуруму (DJI Avata 2): +300 ₾',
            'Дополнительная локация трекинга: +250 ₾',
            'Экспресс-монтаж: +200 ₾',
        ],
        popular: true,
    },
    {
        title: 'Полный контент-пакет',
        price: 'от 1 990 ₾',
        duration: '5–7 часов',
        delivery: '7–10 рабочих дней',
        items: [
            'Аэросъёмка площадки + несколько локаций трекинга',
            'FPV-пролёт по шоуруму (если позволяет пространство)',
            'Основной имиджевый ролик 2.5–4 минуты',
            '2 коротких Reels под разные форматы',
            '40 обработанных аэрофото',
            'Все версии и форматы + базовый сценарий монтажа',
        ],
        addons: [
            'Наземная интервью-съёмка (владелец/команда): +300 ₾',
            'Озвучка или диктор: по запросу',
            'Перевод и субтитры: по запросу',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: '360° тур для автосалона',
        href: '/360-tour-services/360-tour-auto',
        text: 'Виртуальный проход по шоуруму для сайта и Google Maps.',
    },
    {
        title: 'Аэросъёмка мероприятий',
        href: '/drone-services/drone-events',
        text: 'Открытие салона, тест-драйв день и автоивенты с воздушными кадрами.',
    },
    {
        title: 'Аэросъёмка отелей и курортов',
        href: '/drone-hotels-tourism',
        text: 'Если ваш проект пересекается с hospitality, используем тот же production-подход.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Площадки, склады и коммерческие объекты в смежной нише.',
    },
];

const nicheMistakes: MistakeItem[] = [
    {
        title: 'Снимать всё подряд без цели',
        text: 'Ролик должен решать конкретную задачу: сайт, Reels, YouTube или презентация. У каждого канала свой формат.',
    },
    {
        title: 'Экономить на свете и времени суток',
        text: 'Автомобиль, снятый при правильном свете, выглядит дороже даже на простой камере. Время съёмки критично.',
    },
    {
        title: 'Не готовить площадку',
        text: 'Лишний мусор и случайные объекты в кадре моментально портят восприятие и снижают ценность контента.',
    },
    {
        title: 'Публиковать ролик один раз',
        text: 'Один ролик не равен кампании. Нужны версии под сайт, Reels, Stories и рекламные размещения.',
    },
    {
        title: 'Не обновлять контент',
        text: 'Старые видео с другим парком машин создают путаницу и ослабляют доверие к текущим предложениям.',
    },
    {
        title: 'Использовать сток вместо реального объекта',
        text: 'Стоковые кадры красивы, но продаёт именно ваша площадка, ваши машины и ваш контекст в Тбилиси.',
    },
];

const freeTips: string[] = [
    'Снимайте машины за час до заката: естественный свет делает металлик объёмнее и скрывает микродефекты.',
    'Убирайте фон: лишние машины, знаки и мусор в кадре заметно удешевляют восприятие автомобиля.',
    'Снимайте отдельно горизонтальные и вертикальные версии: это два разных контент-актива.',
    'Добавьте короткое видео 20–40 сек в карточку MyAuto: это увеличивает время просмотра объявления.',
    'Сделайте обложку Instagram из лучшего кадра машины: первое впечатление влияет на доверие к бизнесу.',
];

const shootChecklist: string[] = [
    'Машины для съёмки чистые снаружи',
    'Площадка убрана: без мусора, лишнего инвентаря и посторонних машин',
    'Сотрудники предупреждены по безопасной зоне во время полёта',
    'Определены 2–3 ключевых ракурса шоурума',
    'Для трекинга заранее согласованы маршрут и время',
    'Проверен прогноз: без сильного ветра и дождя',
    'На месте назначен ответственный контакт',
    'Понятна логистика остановок и точек перестановки авто',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Сколько стоит заказать дрон-видео для автосалона в Тбилиси?',
        answer: [
            'Базовый пакет с аэросъёмкой площадки и роликом до 90 секунд стартует от 590 ₾. В него входит съёмочный день, монтаж, цветокоррекция, 15 обработанных фото и версия для Instagram.',
            'Пакет с трекингом авто в движении и несколькими форматами обычно начинается от 1 090 ₾. Полный контент-пакет для большого шоурума или дилерского центра — от 1 990 ₾.',
            'Дополнительно считаются выезд за пределы Тбилиси, FPV внутри помещений и экспресс-монтаж. Финальную смету фиксируем после короткого брифа.',
        ],
    },
    {
        question: 'Чем дрон-съёмка отличается от обычного видео для автосалона?',
        answer: [
            'Наземная съёмка показывает детали машины на уровне глаз. Это полезно, но не передаёт масштаб площадки, логику расположения и динамику движения.',
            'Дрон добавляет три ключевых эффекта: ракурс сверху, кинематографичный трекинг на скорости и раскрывающий кадр с «отрывом» вверх.',
            'На практике такой формат чаще досматривают и пересылают, особенно в соцсетях, где важно удержать внимание в первые секунды.',
        ],
    },
    {
        question: 'Можно ли снимать дроном внутри автосалона в Тбилиси?',
        answer: [
            'Да, если помещение позволяет безопасный манёвр: нужна достаточная высота потолков и заранее проверенный маршрут.',
            'FPV-дрон DJI Avata 2 хорошо подходит для динамичных пролётов через шоурум с эффектом «присутствия» клиента в пространстве.',
            'Перед полётом согласовываем зоны, где не должно быть сотрудников и клиентов. Это обязательная часть подготовки.',
        ],
    },
    {
        question: 'Нужно ли разрешение GCAA для съёмки над автосалоном в Тбилиси?',
        answer: [
            'В большинстве стандартных кейсов отдельное разрешение для конкретной точки не требуется, если полёт идёт в рамках правил GCAA.',
            'Базовые требования: высота до 120 метров, отсутствие запретных зон и соблюдение ограничений по людям и объектам.',
            'Если объект попадает в зону ограничений, включая близость к аэропорту, подготовку разрешений берём на себя.',
        ],
    },
    {
        question: 'Какие локации в Тбилиси подходят для трекинг-съёмки автомобилей?',
        answer: [
            'Часто выбирают трассу Тбилиси — Мцхета, набережные и более свободные промышленные зоны с понятной траекторией движения.',
            'Для премиальных моделей лучше работают локации с характерным фоном: горная дорога, панорама города или минималистичная индустриальная сцена.',
            'Маршрут подбирается под конкретную машину и цель ролика: для продаж, имиджа или короткого соцформата.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка недвижимости в Тбилиси', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'FPV-съёмка в Грузии', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: '360° тур для автосалона', href: '/360-tour-services/360-tour-auto' },
    { label: 'Мониторинг стройки с дрона', href: '/drone-services/drone-construction' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        ...beginnerFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
        ...commercialFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка автомобилей и автосалонов в Тбилиси',
    description:
        'Дрон-съёмка для автосалонов, детейлинга и автопроката: обзор площадки, трекинг авто в движении, FPV-пролёты и готовые ролики под сайт, соцсети и рекламу.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси и Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '590',
        highPrice: '1990',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео и контент-пакеты для автобизнеса в Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneAutoPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-auto-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for Auto Business
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка автомобилей и автосалонов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Покажите масштаб шоурума, динамику авто в движении и атмосферу вашего бренда — с
                                воздуха и с земли.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Большинство автосалонов в Тбилиси снимают машины так же, как пять лет назад: статичные
                                кадры, обычный телефон и стандартный свет. Сейчас покупатель видит видео раньше, чем
                                приезжает в салон. Дрон-съёмка даёт масштаб, скорость в кадре и ощущение, что за рулём
                                этой машины хочется оказаться.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Готовый контент для сайта, соцсетей и рекламных запусков.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 590 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для автобизнеса.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–5 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Трекинг авто и FPV-пролёты</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое дрон-съёмка для автобизнеса</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это производство видео и фото для автосалонов, детейлинг-студий, проката и частных продавцов,
                            где часть или весь контент снимается с дрона.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон может сопровождать автомобиль на скорости, облетать шоурум, заходить низко позади
                            машины и резко уходить вверх, раскрывая масштаб локации.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Такой контент используют для сайта, рекламы в соцсетях, YouTube, презентаций для партнёров
                            и инвесторов, а также для регулярного обновления объявлений.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому подходит эта съёмка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает вашему контенту продавать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto grid gap-6 px-6 lg:grid-cols-2">
                    <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold md:text-3xl">Как дрон-съёмка влияет на деньги: зарабатывает</h2>
                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                            {earnList.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                        <h2 className="text-2xl font-bold md:text-3xl">Как дрон-съёмка влияет на деньги: не теряет</h2>
                        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                            {saveList.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Хотите понять, какой формат подойдёт вашему автобизнесу? Опишите задачу — предложим
                            конкретный вариант и примерную стоимость. Без обязательств.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день включает</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где это реально используется</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые стоит знать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-3xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Вы впервые думаете о дрон-съёмке?" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Практические вопросы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмочный день занимает 2–5 часов — шоурум остаётся в рабочем режиме." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в ₾ и зависят от сценария съёмки и локаций.</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <div className="mt-2 text-sm text-white/70">
                                    <p>
                                        <span className="font-semibold text-white">Длительность съёмки:</span> {card.duration}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Срок доставки:</span> {card.delivery}
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-6 border-t border-white/10 pt-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Дополнительно</p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                                        {card.addons.map((addon) => (
                                            <li key={addon}>+ {addon}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, какой пакет подходит? Напишите кратко: что за бизнес, что хотите показать и для
                            чего. Предложим оптимальный формат без лишних звонков.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что ещё работает для автобизнеса</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">6 ошибок, которые мешают автоконтенту работать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheMistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что улучшить без покупки продакшна</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к дрон-съёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы для SEO и AI-поиска</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы</h2>
                        <div className="mt-8 grid gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если автоконтент перестал выделять вас среди конкурентов, следующий шаг простой: описать
                            задачу и получить рабочий формат под ваш бизнес.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить задачу</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Расскажите, что именно хотите показать: площадку, конкретные модели, трекинг,
                                    шоурум или пакет для соцсетей. Подберём формат и бюджет.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Альтернативные контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            @breusmedia
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <AutoContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-auto-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-brand-video
Lines: 27
```tsx
import type { Metadata } from 'next';
import { DroneBrandVideoPageClient } from './DroneBrandVideoPageClient';

const PAGE_TITLE = 'Бренд-видео и рекламная съёмка с дрона в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Бренд-видео и рекламные ролики с дрон-съёмкой для бизнеса в Тбилиси. Кинематографичная аэросъёмка + наземная съёмка под ключ. От 650 ₾. Доставка за 5 рабочих дней.';
const CANONICAL_URL = 'https://breusmedia.com/drone-services/drone-brand-video';

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneBrandVideoPage() {
    return <DroneBrandVideoPageClient />;
}

```
---
---

## /drone-services/drone-facade
Lines: 1182
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { FacadeContactForm } from './FacadeContactForm';

type CardItem = {
    title: string;
    text: string;
};

type TaggedCardItem = {
    tag: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    duration: string;
    delivery: string;
    audience: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breusmedia.com/drone-services/drone-facade';
const PAGE_TITLE = 'Инспекция фасада дроном в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Визуальная инспекция фасадов зданий дроном в Тбилиси. Фотоотчёт по всем фасадам, видеообход здания, организованный пакет материалов. От 390 ₾. Breus Media.';

const serviceTypes: CardItem[] = [
    {
        title: 'Плановая инспекция фасада',
        text: 'Периодическая фотодокументация состояния наружных стен. Используется управляющими компаниями, ТСЖ и владельцами коммерческой недвижимости для мониторинга износа и контроля за подрядчиками после ремонта.',
    },
    {
        title: 'Предпродажная или предарендная диагностика',
        text: 'Съёмка фасада перед сделкой: покупатель или арендатор хочет объективную картину состояния объекта без слов «всё в порядке». Особенно актуально для иностранных инвесторов и дистанционных сделок.',
    },
    {
        title: 'Контроль после ремонтных работ',
        text: 'Фиксация состояния фасада сразу после завершения работ: подтверждение объёма и качества выполненного, документация для оплаты подрядчику или для спора.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Управляющие компании и ТСЖ',
        text: 'Ежегодный плановый осмотр фасада без строительных лесов и без жалоб жильцов на перекрытый вход. Дрон проходит весь периметр за несколько часов, вы получаете фотоотчёт с отметками проблемных мест.',
    },
    {
        title: 'Девелоперы и застройщики',
        text: 'Документация состояния фасада при сдаче ЖК или бизнес-центра. Зафиксировали — передали подрядчику, банку, покупателям. Если через год возникнет спор о дефектах — у вас есть точка отсчёта.',
    },
    {
        title: 'Собственники коммерческой недвижимости',
        text: 'Офисные здания, торговые центры, отели — фасад это первое, что видит клиент и арендатор. Регулярная инспекция помогает не пропустить момент, когда косметический дефект превращается в капитальный ремонт.',
    },
    {
        title: 'Иностранные инвесторы и дистанционные владельцы',
        text: 'Купили объект в Тбилиси, живёте в другой стране и хотите видеть реальное состояние фасада без поездки. Мы снимаем, монтируем подробный видеообход и доставляем ссылку.',
    },
    {
        title: 'Страховые компании и инженерные бюро',
        text: 'Первичная визуальная документация перед страхованием объекта, перед началом технической экспертизы или для актуализации технического паспорта здания.',
    },
    {
        title: 'Исторические здания и архитектурные объекты',
        text: 'Тбилиси богат зданиями с лепниной, деревянными балконами и сложными фасадами, где лестница или люлька физически не поможет. Дрон снимает детали декоративных элементов, не касаясь поверхности.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Чтобы осмотреть верхние этажи, нужны леса или промальп',
        text: 'Стандартный осмотр 9-этажного здания требует либо дорогостоящих строительных лесов, либо вызова промышленных альпинистов. Это дорого, долго и неудобно для жильцов и арендаторов.',
    },
    {
        title: 'УК не может доказать, что дефект был до ремонта',
        text: 'Подрядчик говорит «это было ещё до нас». У вас нет фотодокументации состояния фасада на момент начала работ, и спор становится неразрешимым.',
    },
    {
        title: 'Инвестор покупает здание «на доверие»',
        text: 'Снаружи всё выглядит нормально. Но трещины за карнизом, отслоение утеплителя под облицовкой и следы затекания над окнами 12-го этажа не видно с тротуара.',
    },
    {
        title: 'Ремонт фасада затягивается из-за расплывчатого ТЗ',
        text: 'Подрядчик составляет смету «на глаз», а новые дефекты находит уже в процессе. Детальная фотодокументация до начала работ убирает эту неопределённость.',
    },
    {
        title: 'Нет подтверждения, что ремонт сделан как обещали',
        text: 'Подрядчик закончил работы и говорит «всё готово». С земли это трудно проверить: верхние этажи и зоны риска остаются вне контроля.',
    },
    {
        title: 'Страховая запрашивает документацию, которой нет',
        text: 'При оформлении страховки или при страховом случае нужны фотографии состояния фасада. Сделать их постфактум уже поздно.',
    },
];

const earnsItems: string[] = [
    'Находит дефекты до того, как мелкий ремонт превратился в капитальный: трещина в шве на 10-м этаже может стоить 200–400 ₾, а через 2–3 года — уже вскрытие фасада на несколько этажей.',
    'Даёт точное ТЗ для подрядчика: когда есть фото каждого дефекта с локацией, смета становится предсказуемой.',
    'Документирует состояние объекта при сделке: покупатель или арендатор видит реальный фасад, а не только слова продавца.',
    'Подтверждает выполненные работы: видеоотчёт после ремонта становится доказательством в случае претензий.',
];

const savesItems: string[] = [
    'Не теряет время на организацию лесов или промальпинистов: дрон-инспекция типового 9-этажного здания занимает 2–4 часа, включая обработку.',
    'Не теряет арендаторов и жильцов из-за перекрытого входа: дрон работает снаружи, внутри здания ничего не меняется.',
    'Не теряет юридическую позицию в споре с подрядчиком: фотодокументация «до» и «после» — это аргумент.',
    'Не теряет деньги на страховых случаях без доказательной базы: есть фото состояния — есть основание для выплаты.',
];

const shootDayItems: string[] = [
    'Облёт периметра здания по сетке с охватом всех фасадов',
    'Детальные проходы по проблемным зонам (трещины, швы, карнизы, примыкания, технические узлы)',
    'Видеозапись облёта в 4K — непрерывный проход по каждому фасаду',
    'Фотографии в высоком разрешении (RAW + JPEG экспорт) для передачи инженеру или в архив',
    'Работа без строительных ограждений и без остановки работы здания',
];

const finalResultItems: string[] = [
    'Организованный пакет фотографий по фасадам и проблемным зонам (папки: север/юг/восток/запад + детали)',
    'Смонтированный видеообход здания 2–5 минут — пригоден для презентации собственнику, инвестору и страховой',
    'Краткая сопроводительная записка с описанием видимых дефектов (опционально)',
    'Формат доставки: Google Drive или WeTransfer, срок — 1–3 рабочих дня после съёмки',
];

const useCases: CardItem[] = [
    {
        title: 'Ежегодный плановый осмотр ЖК',
        text: 'Управляющая компания заказывает инспекцию раз в год перед зимним сезоном. Отчёт идёт в протокол общего собрания жильцов — всё прозрачно.',
    },
    {
        title: 'Приёмка фасадных работ у подрядчика',
        text: 'Застройщик заказывает инспекционный облёт перед передачей объекта и закрывает акт выполненных работ с документальным подтверждением.',
    },
    {
        title: 'Due diligence перед покупкой здания',
        text: 'Инвестор из Европы до личного визита получает детальный облёт и видеоотчёт и принимает решение удалённо.',
    },
    {
        title: 'Страховая документация',
        text: 'Собственник торгового центра оформляет страховку и получает актуальный пакет фотографий наружных конструкций.',
    },
    {
        title: 'Диагностика после сезона дождей',
        text: 'Управляющий отеля проверяет, нет ли новых следов затекания над окнами верхних этажей и повреждений примыканий.',
    },
    {
        title: 'Документация исторического фасада',
        text: 'Перед реставрацией фиксируем лепнину, карнизы и деревянные балконы для архива и для сметы реставратора.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Жилой комплекс',
        title: 'Инспекция фасадов 12-этажного ЖК перед зимой',
        text: 'Управляющая компания хотела зафиксировать состояние трёх корпусов перед отопительным сезоном. Итог: 320 фотографий и видеообход по каждому корпусу, организованный по папкам. Время на площадке — 6 часов.',
    },
    {
        tag: 'Коммерческая недвижимость',
        title: 'Предпродажная диагностика бизнес-центра',
        text: 'Потенциальный покупатель запросил независимую визуальную оценку фасада до подписания договора. Мы передали 4-минутный видеообход и структурированный фотопакет.',
    },
    {
        tag: 'Историческое здание',
        title: 'Фотодокументация перед реставрацией',
        text: 'Владелец здания конца XIX века в центре Тбилиси получил детальную визуальную базу по карнизам, наличникам и пилястрам для составления сметы.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '2–4 часа',
        label: 'Типовой облёт 9-этажного здания',
        text: 'Против 2–5 дней на организацию и работу промышленных альпинистов.',
    },
    {
        value: 'До 60–70%',
        label: 'Экономия на диагностике',
        text: 'По сравнению с классическими методами визуальной инспекции с лесами или люльками.',
    },
    {
        value: '40 000+ м²',
        label: 'Нового жилья в Тбилиси ежеквартально',
        text: 'Каждый новый ЖК требует приёмки фасадов, документирования состояния и регулярного обслуживания.',
    },
    {
        value: 'DJI Air 3S',
        label: '48 МП, матрица 1/1.3"',
        text: 'Камера фиксирует мелкие дефекты поверхности на рабочей дистанции инспекционного полёта.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое инспекция фасада дроном и чем это отличается от обычного осмотра?',
        answer:
            'Обычный осмотр — это взгляд снизу или из окна, где большая часть фасада недоступна. Дрон-инспекция — это съёмка вдоль фасада на расстоянии 2–5 метров, где видны швы, следы влаги, отслоения и трещины. Результат остаётся в виде фотографий и видео для инженера, подрядчика или отчётности.',
    },
    {
        question: 'Можно ли летать дроном в городе — в Тбилиси это разрешено?',
        answer:
            'Да. Полёты регулируются GCAA (Агентством гражданской авиации Грузии). Для коммерческих операций в городской среде применяются установленные правила и, при необходимости, уведомления/согласования. Мы работаем в рамках действующих требований.',
    },
    {
        question: 'Дрон не повредит здание и людей рядом?',
        answer:
            'Инспекционные полёты выполняются с безопасного расстояния, на малой скорости и без контакта с поверхностью. Маршрут планируется заранее, а время съёмки выбирается с учётом пешеходного трафика.',
    },
    {
        question: 'Влияет ли погода на возможность провести инспекцию?',
        answer:
            'Да. В сильный дождь, при ветре свыше 12–14 м/с и в нулевой видимости полёты не выполняются. Если погода не подходит, съёмку переносим на ближайшее окно без доплаты.',
    },
    {
        question: 'Дрон видит то же самое, что инженер с люльки?',
        answer:
            'Дрон отлично фиксирует визуальные дефекты поверхности и даёт доказательную базу. Но он не простукивает фасад и не берёт пробы материалов. Для полной строительной экспертизы нужен инженер; дрон-инспекция — первый этап и основа для точечного выезда.',
    },
    {
        question: 'Как быстро я получу материал после съёмки?',
        answer:
            'Обычно в течение 1–3 рабочих дней. Файлы организуются по фасадам и проблемным зонам, видео монтируется в понятный обход здания и передаётся через Google Drive или WeTransfer.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит инспекция фасада дроном в Тбилиси?',
        answer:
            'Базовая инспекция типового здания до 10 этажей и 1 корпуса — от 390 ₾. Точная цена зависит от этажности, количества корпусов, объёма детализации и формата финальных материалов.',
    },
    {
        question: 'В каком формате вы отдаёте материалы?',
        answer:
            'Фото передаём в JPEG высокого разрешения с папочной структурой по фасадам и зонам. Видео — MP4 в 4K или Full HD в зависимости от пакета. RAW-фото выдаём по запросу.',
    },
    {
        question: 'Нужно ли разрешение GCAA для инспекции фасада?',
        answer:
            'Для полётов в городской среде действуют правила GCAA. Мы проводим работу в рамках разрешённых операций и при необходимости уведомляем регулятора. Внутренние согласования с администрацией здания, если требуются, остаются на стороне заказчика.',
    },
    {
        question: 'Вы работаете только в Тбилиси или по всей Грузии?',
        answer:
            'Основная база — Тбилиси. По Грузии (Батуми, Кутаиси и другие регионы) работаем по договорённости, выезд рассчитывается отдельно.',
    },
    {
        question: 'Можно заказать инспекцию регулярно — раз в год или два раза в год?',
        answer:
            'Да. Для управляющих компаний и собственников нескольких объектов настраиваем регулярный формат с удобной периодичностью и условиями.',
    },
    {
        question: 'Чем инспекция отличается от обычной съёмки дроном?',
        answer:
            'Обычная съёмка делает общие красивые планы. Инспекционная съёмка — это маршрут по сетке вдоль каждого фасада, детальные проходы по зонам риска и структурированная выдача файлов для инженерной и юридической работы.',
    },
    {
        question: 'Если обнаружатся серьёзные дефекты, вы помогаете дальше?',
        answer:
            'Мы фиксируем видимые дефекты и передаём их в отчёте. Дальнейшие технические решения принимает инженер и собственник. По запросу можем рекомендовать профильные инженерные бюро в Тбилиси.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'DJI Air 3S — 48 МП, матрица 1/1.3"',
        text: 'Для инспекции важна детализация. Чем точнее исходные кадры, тем полезнее материал для инженера и заказчика.',
    },
    {
        title: 'Работаем по инспекционной логике, а не ради красивых кадров',
        text: 'Строим маршрут по сетке с охватом каждого фасада и детальной фиксацией зон риска.',
    },
    {
        title: 'Организованные материалы без хаоса',
        text: 'Фотографии по фасадам и проблемным зонам, видео в логике обхода — файл можно использовать сразу.',
    },
    {
        title: 'Соблюдаем правила GCAA',
        text: 'Коммерческие полёты в городе требуют соблюдения нормативов. Мы работаем в установленном правовом поле.',
    },
    {
        title: 'Локальная экспертиза по Тбилиси',
        text: 'Понимаем специфику панельных фасадов, старого фонда и новых вентилируемых систем в городе.',
    },
    {
        title: 'Маленькая команда — быстрые согласования',
        text: 'Оперативно отвечаем, быстро согласуем формат и выезжаем в ближайшие доступные даты.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка и бриф',
        text: 'Вы описываете объект: адрес, этажность и задачу (плановый осмотр, диагностика перед сделкой, контроль после ремонта). Мы уточняем детали и подтверждаем стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Планирование полёта',
        text: 'Изучаем объект по картам, планируем маршрут по фасадам, проверяем погодный прогноз и ограничения воздушного пространства.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Выполняем полный инспекционный облёт: периметр здания по сетке плюс детальные проходы по проблемным зонам. Типовое время на площадке — 2–4 часа.',
    },
    {
        step: 'Шаг 4',
        title: 'Обработка и организация',
        text: 'Сортируем фото по фасадам и зонам, монтируем видеообход без художественных эффектов. Материал должен быть рабочим.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача результата',
        text: 'Передаём структурированный пакет через Google Drive или WeTransfer. В пакетах с отчётом добавляем сопроводительную записку по видимым дефектам.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Базовый осмотр',
        price: 'от 390 ₾',
        duration: '1,5–2 часа на объекте',
        delivery: '1–2 рабочих дня',
        audience: 'Подходит для планового осмотра, первичной диагностики и небольших зданий.',
        items: [
            'Облёт периметра здания (до 10 этажей, 1 корпус)',
            'Фотографии в 4 фасадах: 80–120 фото в JPEG',
            'Видеообход здания 2–3 минуты, 4K',
            'Папочная организация по фасадам (север/юг/восток/запад)',
            'Доставка через Google Drive',
        ],
        addons: ['RAW-фотографии +100 ₾', 'Детальные проходы по отдельным зонам +120 ₾', 'Срочная доставка (24 ч) +150 ₾'],
    },
    {
        title: 'Инспекция с детализацией',
        price: 'от 690 ₾',
        duration: '3–4 часа на объекте',
        delivery: '2–3 рабочих дня',
        audience: 'Подходит для УК, контроля после ремонта и предпродажной диагностики.',
        items: [
            'Облёт периметра здания (до 16 этажей, 1 корпус)',
            'Фотографии всех фасадов: 180–250 фото в JPEG + RAW',
            'Детальные проходы по зонам риска (швы, карнизы, примыкания, следы влаги)',
            'Видеообход здания 4–6 минут, 4K',
            'Организованный пакет по фасадам + папка «Проблемные зоны»',
            'Краткая сопроводительная записка по видимым дефектам',
            'Доставка через Google Drive',
        ],
        addons: ['Второй корпус +390 ₾', 'Видеообход с аннотациями +200 ₾', 'Тепловизионное сопровождение — по запросу'],
        popular: true,
    },
    {
        title: 'Комплексная документация',
        price: 'от 1 100 ₾',
        duration: 'от 5 часов (крупный объект или несколько корпусов)',
        delivery: '3–5 рабочих дней',
        audience: 'Подходит для due diligence, страхования, исторических объектов и девелоперов при сдаче ЖК.',
        items: [
            'Облёт до 3 корпусов или крупного нежилого здания (ТЦ, отель, бизнес-центр)',
            'Полный фотопакет: 350+ фото, JPEG + RAW',
            'Детальная съёмка всех проблемных зон',
            'Видеообходы по каждому корпусу/фасаду — 4K',
            'Организованный архив для передачи инженеру или в страховую',
            'Сопроводительный отчёт с описанием видимых дефектов и привязкой к фото',
            'Финальный презентационный ролик 5–8 минут для собственника или инвестора',
            'Доставка через Google Drive',
        ],
        addons: [
            'Регулярная инспекция (ежеквартально / раз в год) — индивидуальные условия',
            'Сравнительный отчёт «до/после» при повторной съёмке +200 ₾',
            'Выезд за пределы Тбилиси — обсуждается отдельно',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Мониторинг строительства',
        href: '/drone-services/drone-construction',
        text: 'Периодическая аэросъёмка строящегося объекта: прогресс работ, документация для банка и инвесторов, контроль подрядчика.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Съёмка для продажи и презентации объекта: общие планы здания, территории, окружения и инфраструктуры.',
    },
    {
        title: '360° тур для недвижимости',
        href: '/360-tours/360-real-estate',
        text: 'Интерактивный виртуальный тур для удалённых покупателей и инвесторов, которые принимают решение без визита.',
    },
    {
        title: 'Инспекция кровли дроном',
        href: '/drone-services/drone-roof-inspection',
        text: 'Детальная фотосъёмка кровли, водостоков и кровельных примыканий как отдельная услуга по горизонтальным поверхностям.',
    },
];

const mistakes: CardItem[] = [
    {
        title: '«Осмотрим с земли — и так всё видно»',
        text: 'С земли видны только нижние этажи и самые очевидные дефекты. Критичные зоны на верхних этажах обнаруживаются слишком поздно.',
    },
    {
        title: 'Заказывать инспекцию только после протечки',
        text: 'Когда вода уже попала внутрь, повреждение обычно серьёзное. Инспекция должна быть профилактикой, а не реакцией.',
    },
    {
        title: 'Не фиксировать состояние фасада до ремонта',
        text: 'Без визуальной базы «до» сложно доказать, какие дефекты появились после подрядчика, а какие существовали заранее.',
    },
    {
        title: 'Не проверять качество после завершения работ',
        text: 'Акт подписан, подрядчик уехал, а часть швов могла остаться незаделанной. Послеремонтный облёт закрывает этот риск.',
    },
    {
        title: 'Выбирать инспекцию только по низкой цене',
        text: 'Разница в цене часто означает разницу в методике, оборудовании и качестве итоговых файлов для инженерной работы.',
    },
    {
        title: 'Передавать сырые материалы без структуры',
        text: 'Папка с сотнями файлов в случайном порядке тратит часы инженера и страховой. Структура выдачи — это стандарт, а не опция.',
    },
];

const freeTips: string[] = [
    'Сфотографируйте фасад здания с нескольких ракурсов и сохраните фото с датой как базовую точку «сегодня».',
    'Проверьте, когда последний раз проводилась инспекция или ремонт фасада. Если прошло больше трёх лет, это сигнал риска.',
    'Осмотрите зоны над окнами и у водостоков: тёмные пятна, высолы и осыпание штукатурки — видимые признаки проблемы.',
    'Спросите у жильцов или арендаторов верхних этажей о следах влаги внутри у внешних стен.',
    'Перед подписанием договора на ремонт зафиксируйте стартовое состояние фасада хотя бы базовой съёмкой с датой в EXIF.',
];

const checklist: string[] = [
    'Адрес объекта известен, этажность и количество корпусов понятны',
    'Определена задача: плановый осмотр / контроль ремонта / предпродажная диагностика / страховая документация',
    'Доступ на территорию для дрона-оператора согласован с управляющим или охраной',
    'Прилегающая территория свободна либо выбрано время с минимальным пешеходным трафиком',
    'Нет активных строительных работ, перекрывающих зоны облёта',
    'Понятен формат результата: только фото / фото + видео / с письменным отчётом',
    'Дата съёмки согласована с учётом прогноза (ветер, осадки)',
    'Есть контактное лицо на объекте в день съёмки',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Может ли дрон полностью заменить промышленного альпиниста при инспекции фасада?',
        answer: [
            'Для визуальной диагностики дрон во многих случаях заменяет и даже превосходит промальп по скорости и охвату. За несколько часов можно пройти весь периметр и зафиксировать поверхность по сетке.',
            'Материал остаётся в виде фото и видео, его можно хранить, сравнивать и использовать как доказательную базу в переговорах, отчётах и спорах.',
            'При этом дрон не простукивает поверхность и не берёт пробы материалов. Для инструментальной экспертизы нужен инженерный выезд в конкретные проблемные точки, которые сначала определяет дрон-инспекция.',
        ],
    },
    {
        question: 'Как часто нужно проводить визуальную инспекцию фасада здания в Тбилиси?',
        answer: [
            'Для жилых домов старого фонда со штукатурными фасадами обычно рекомендуют инспекцию раз в 1–2 года, лучше перед зимним сезоном.',
            'Для новых ЖК с навесными и вентилируемыми системами разумный интервал — раз в 2–3 года в гарантийный период, далее по фактическому состоянию.',
            'Для коммерческой недвижимости (офисы, отели, ТЦ) практичный стандарт — каждые 1–2 года и дополнительно после крупных осадков, ремонтов и ощутимых сейсмических событий.',
        ],
    },
    {
        question: 'Какие дефекты фасада видно с дрона, а какие — нет?',
        answer: [
            'Дрон хорошо фиксирует трещины, отслоения облицовки, следы затекания и высолы, деформации карнизов и водостоков, нарушения швов и примыканий.',
            'Дрон не видит то, что скрыто за облицовкой: внутреннее состояние утеплителя, арматуры и слоёв конструкции без дополнительных методов.',
            'Тепловизионная съёмка может расширить диагностику (зоны теплопотерь и вероятной скрытой влаги), но не заменяет инженерное обследование.',
        ],
    },
    {
        question: 'Что входит в нормальный отчёт по инспекции фасада?',
        answer: [
            'Минимально полезный пакет: структурированные фото по фасадам, единый видеообход и понятная система папок для передачи инженеру или страховой.',
            'Расширенный пакет включает привязку проблемных зон к локации (этаж/секция), краткую записку по видимым дефектам и сравнительный формат «до/после» при повторной съёмке.',
            'Для дистанционных собственников и иностранных инвесторов полезен отдельный видеообход с поясняющими вставками на русском или английском.',
        ],
    },
    {
        question: 'Есть ли в Грузии нормативные требования к осмотру фасадов зданий?',
        answer: [
            'На 2026 год в Грузии продолжается развитие нормативной базы в части технического обслуживания зданий и качества эксплуатации фонда.',
            'В Тбилиси идёт обновление фасадов в рамках городских программ, а банки и страховые при ряде сценариев запрашивают документацию о состоянии объекта.',
            'Даже при отсутствии единого обязательного интервала инспекций для всех типов объектов, плановая визуальная диагностика становится практическим стандартом управления рисками.',
        ],
    },
];

const navLinks: NavLink[] = [
    { label: 'Мониторинг строительства дроном', href: '/drone-services/drone-construction' },
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'FPV-съёмка для видео и рекламы', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: '360° виртуальный тур для недвижимости', href: '/360-tours/360-real-estate' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Инспекция фасадов зданий дроном в Тбилиси',
    description:
        'Визуальная инспекция фасадов в Тбилиси: фото по фасадам и зонам риска, видеообход, организованный пакет материалов для инженера, страховой, собственника и девелопера.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.com',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси, Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '390',
        highPrice: '1100',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и инспекционные съёмки для бизнеса в Тбилиси.',
    url: 'https://breusmedia.com',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneFacadePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-facade-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1465800872432-7f63d7d7da9f?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Facade Inspection
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Инспекция фасада дроном для управляющих зданиями и девелоперов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон делает то, что раньше требовало лесов, люлек и промышленных альпинистов — без
                                перекрытия входа, без риска для людей, за часы вместо дней.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Трещина на 9-м этаже, отслоение облицовки, следы затекания под карнизом — это видно
                                только с воздуха. Дрон DJI Air 3S снимает фасад в деталях, недоступных с улицы: сантиметр
                                за сантиметром, без строительных ограждений и без остановки работы офиса или жилого дома.
                                Вы получаете подробную фотодокументацию фасада и видеоотчёт для инженерной оценки,
                                страховой, подрядчика или собственника.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить осмотр фасада
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры работ
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 390 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Инспекция фасадов зданий в Тбилиси</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–4 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 дня</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S</li>
                                    <li>Фото + видеообход + структура папок</li>
                                    <li>Работаем в рамках правил GCAA</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое инспекция фасада дроном — и зачем это нужно</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Визуальная инспекция фасада с дрона — это детальная фотосъёмка внешних стен, кровельных
                            примыканий, оконных блоков, карнизов, технических узлов и облицовочных элементов здания с
                            высоты и под разными углами.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон летит вдоль фасада по сетке, фиксируя поверхность с расстояния 2–5 метров — туда, куда
                            человек без специального оборудования не попадёт. Это не замена строительной экспертизе, но
                            полноценная визуальная база для неё.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            В Тбилиси одновременно растёт высотное строительство и стареет существующий жилой фонд. Оба
                            тренда увеличивают спрос на регулярную визуальную диагностику фасадов.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна инспекция фасада с дрона</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему инспекция фасада неудобна — пока не появился дрон</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что даёт инспекция фасада дроном на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Зарабатывает / сохраняет деньги</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {earnsItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Не теряет</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {savesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нужен осмотр конкретного здания в Тбилиси? Напишите нам — обсудим задачу, уточним формат и
                            скажем, сколько времени займёт съёмка вашего объекта.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить задачу
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете в итоге</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где это реально используется — 6 сценариев</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры задач, под которые мы работаем</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему это работает — цифры и факты рынка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Базовые вопросы — если вы впервые думаете об инспекции" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Практические вопросы — деньги, сроки, формат"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media для инспекции фасадов</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Инспекция типового здания — от заявки до готового отчёта за 2–4 рабочих дня." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены на инспекцию фасадов в Тбилиси</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/72">Съёмка: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, какой пакет подойдёт для вашего объекта? Напишите адрес и этажность здания —
                            ответим в течение дня с ориентиром по цене и формату.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">6 ошибок при организации инспекции фасада — и как их избежать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">5 вещей, которые можно сделать уже сейчас — без заказа инспекции</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист: готов ли ваш объект к инспекции фасада дроном</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на вопросы об инспекции фасадов дроном</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смотрите также</h2>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/80 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <span className="mr-2 text-[#FFD23F]">{index + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить инспекцию фасада</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите адрес и параметры здания. Подскажем оптимальный пакет, сроки и формат
                                    материалов под вашу задачу.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <FacadeContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-facade-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-land-sale
Lines: 1198
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { LandSaleContactForm } from './LandSaleContactForm';

type CardItem = {
    title: string;
    text: string;
};

type TaggedCardItem = {
    tag: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    subtitle: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breusmedia.ge/drone-services/drone-land-sale';
const PAGE_TITLE = 'Аэросъёмка земельных участков в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Дрон-видео и фото участков для продажи, инвесторов и девелоперов в Грузии. Пакеты от 390 ₾. Тбилиси, Кахетия, Батуми. Готовый материал за 3–5 дней.';

const serviceTypes: CardItem[] = [
    {
        title: 'Съёмка участка для продажи',
        text: 'Видеообзор с воздуха для объявления на OLX, Domex, личной презентации или сайта. Акцент на визуальную подачу и масштаб.',
    },
    {
        title: 'Съёмка для инвесторов и девелоперов',
        text: 'Расширенный материал с облётом по периметру, акцентом на рельеф, доступность и контекст. При необходимости добавляем графическое наложение границ участка.',
    },
    {
        title: 'Аэросъёмка виноградников и сельхозземель',
        text: 'Документация угодий, площади и состояния насаждений. Применяется при продаже агробизнеса и для отчётности перед партнёрами.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Частный продавец участка',
        text: 'Вы продаёте землю через объявление или агента и хотите выделить объект на фоне конкурентов, особенно для покупателей из других городов и стран.',
    },
    {
        title: 'Риелтор или агентство',
        text: 'Нужен материал, который снимает основные вопросы ещё до выезда на просмотр и сокращает число «туристических» визитов.',
    },
    {
        title: 'Девелопер',
        text: 'Запускаете посёлок, делите массив на участки или выводите на рынок новый объект. Нужен контент для сайта, соцсетей и презентаций.',
    },
    {
        title: 'Инвестор или его представитель',
        text: 'Требуется дистанционная первичная оценка участка без личного визита. Видео с дрона позволяет быстро провести предварительный due diligence.',
    },
    {
        title: 'Владелец виноградника или фермерских угодий',
        text: 'Показываете площадь и состояние земель потенциальному покупателю или партнёру в понятном визуальном формате.',
    },
    {
        title: 'Маркетолог девелопера или застройщика',
        text: 'Нужен регулярный контент для старта продаж, этапов подготовки и готовности инфраструктуры.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фото с земли не передают масштаб',
        text: 'Покупатель видит траву и деревья, но не понимает форму, размер и контекст участка. Возникают лишние визиты и несоответствие ожиданий.',
    },
    {
        title: 'Удалённые покупатели требуют личного визита',
        text: 'Нерезиденты и инвесторы не готовы ехать без первичной уверенности в объекте. Без качественного видео сделка откладывается или срывается.',
    },
    {
        title: 'Участок теряется среди похожих объявлений',
        text: 'В одной ценовой категории выигрывает тот, у кого сильнее визуал. Дрон-видео заметно повышает внимание к листингу в ленте.',
    },
    {
        title: 'Сложно объяснить расположение и окружение',
        text: 'Фразы вроде «рядом с лесом» не работают как доказательство. Видео за минуту показывает трассу, соседей, подъезды и окружение.',
    },
    {
        title: 'Девелоперу нечем иллюстрировать проект на старте',
        text: 'Когда домов ещё нет, продажам мешает слабая визуализация. Дрон-видео превращает землю в понятный продукт до строительства.',
    },
    {
        title: 'Граница участка невидима на обычном фото',
        text: 'Покупателю сложно понять периметр. Графическое наложение границ на видео убирает эту неопределённость.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Больше откликов на объявление',
        text: 'Листинг с дрон-видео обычно получает на 40–60% больше просмотров, что даёт больше звонков и быстрее ведёт к сделке.',
    },
    {
        title: 'Удалённый покупатель быстрее доходит до решения',
        text: 'Инвестор может принять предварительное решение по видео и приехать уже на финальный этап, а не на первичные смотрины.',
    },
    {
        title: 'Более высокая воспринимаемая цена',
        text: 'Профессиональная презентация снижает давление на торг и усиливает позицию продавца как серьёзного контрагента.',
    },
    {
        title: 'Для девелопера это инструмент старта продаж',
        text: 'Можно запускать рекламу и показывать проект на сайте и в соцсетях до начала стройки.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Меньше пустых показов',
        text: 'После просмотра видео приезжают более целевые покупатели, у которых уже сформированы реалистичные ожидания.',
    },
    {
        title: 'Меньше споров об окружении',
        text: 'Видео фиксирует фактическое состояние участка и окружающей среды на момент съёмки.',
    },
    {
        title: 'Документация этапов для девелопера',
        text: 'Хронология облётов даёт доказательную базу для подрядчиков, инвесторов и внутренних отчётов.',
    },
    {
        title: 'Не теряете клиента из-за слабой презентации',
        text: 'Если у конкурента есть дрон-видео, а у вас нет, вы проигрываете первое впечатление до первого контакта.',
    },
];

const shootDayItems: string[] = [
    'Выезд оператора с дроном DJI Air 3S на объект',
    'Облёт по периметру участка на нескольких высотах',
    'Горизонтальные и наклонные кадры для понимания рельефа и окружения',
    'Статичные фото с воздуха в высоком разрешении',
    'Дополнительные точки: подъезд к участку, соседние объекты, ориентиры',
    'Запись в 4K и LOG-профиль для постпродакшна',
];

const finalResultItems: string[] = [
    'Смонтированное видео: 60–90 секунд для объявлений или 2–3 минуты для девелоперских презентаций',
    'Версия для вертикального монтажа (Reels / Stories) — по запросу',
    '10–20 финальных аэрофотографий в JPG с цветокоррекцией',
    'Передача материалов через WeTransfer или Google Drive в течение 3–5 рабочих дней',
    'Исходники RAW/LOG — по запросу и фиксации в договоре',
];

const useCases: CardItem[] = [
    {
        title: 'Листинг на Domex или OLX',
        text: 'Продавец добавляет дрон-видео к объявлению и получает больше просмотров и звонков, особенно от удалённых покупателей.',
    },
    {
        title: 'Инвестиционная презентация',
        text: 'Девелопер показывает весь массив с воздуха с наложением схемы нарезки и инфраструктуры вокруг.',
    },
    {
        title: 'Удалённый инвестор из-за рубежа',
        text: 'Брокер снимает несколько объектов, инвестор выбирает один финальный для личного визита и переговоров.',
    },
    {
        title: 'Продажа виноградника в Кахетии',
        text: 'Видео показывает площадь, рельеф, дорогу к хозяйству и состояние угодий, ускоряя решение покупателя.',
    },
    {
        title: 'Хронология строительства посёлка',
        text: 'Съёмка раз в 1–2 месяца формирует визуальную историю проекта для сайта, отдела продаж и инвесторов.',
    },
    {
        title: 'Участок под застройку в черте Тбилиси',
        text: 'Аэросъёмка раскрывает городскую инфраструктуру, соседство и виды, помогая понять локацию без выезда.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Продажа / Частный участок',
        title: 'Участок 20 соток в пригороде Тбилиси',
        text: 'Съёмка с высоты 80 м показывает периметр, подъезд, соседей и лесной массив. Затем низкий плавный облёт и финальный кадр с предполагаемой высоты второго этажа. Видео 90 секунд.',
    },
    {
        tag: 'Девелопмент / Нарезка участков',
        title: 'Коттеджный посёлок, 12 участков, Мцхета',
        text: 'Облёт массива с высоты 100 м, графическое наложение границ и номеров участков, кадры подъезда и коммуникаций. Видео 2 минуты для сайта и рекламы.',
    },
    {
        tag: 'Сельхозземля / Виноградник',
        title: 'Виноградник 4 га, Кахетия',
        text: 'Съёмка в период созревания: ряды лоз, рельеф, дорога, хозяйственные постройки и границы участка. Итог: видео 90 секунд и 15 аэрофото.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '40–60%',
        label: 'Больше просмотров',
        text: 'Такой прирост получают листинги с дрон-видео по сравнению с объявлениями без видео на крупных зарубежных платформах.',
    },
    {
        value: 'от 70%',
        label: 'Дистанционный этап сделки',
        text: 'Значительная доля сделок с иностранными покупателями в Грузии проходит после удалённого знакомства с объектом.',
    },
    {
        value: '1 день',
        label: 'Съёмочный выезд',
        text: 'За один выезд можно собрать полный набор материалов для объявления, презентации и рекламного запуска.',
    },
    {
        value: '3–5 дней',
        label: 'Готовность финала',
        text: 'Типовой срок от съёмки до получения смонтированного видео и фото.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка участка и зачем это нужно?',
        answer:
            'Это видео и фото с дрона на высоте 30–120 метров. Они показывают форму участка, рельеф, дороги, соседей и окружение, чтобы покупатель или инвестор мог оценить объект дистанционно.',
    },
    {
        question: 'Можно ли летать дроном в Тбилиси и других городах Грузии?',
        answer:
            'Да, при соблюдении правил GCAA. В разрешённых зонах коммерческая съёмка проводится по установленному порядку. Если есть ограничения, мы предупреждаем заранее и согласовываем решение.',
    },
    {
        question: 'Что если погода плохая в день съёмки?',
        answer:
            'Съёмку переносим. При сильном ветре, дожде или тумане дрон не летает из соображений безопасности и качества.',
    },
    {
        question: 'Сколько времени занимает съёмка на месте?',
        answer:
            'Для стандартного участка до 1 га обычно 1–2 часа. Для больших массивов и сложного рельефа может потребоваться полный день.',
    },
    {
        question: 'Нужно ли мне присутствовать на съёмке?',
        answer:
            'Желательно, но не обязательно. При отсутствии владельца работаем по заранее согласованному брифу и документам участка.',
    },
    {
        question: 'В каком формате я получу материалы?',
        answer:
            'Смонтированное видео передаём в MP4 (4K), аэрофото — в JPG высокого разрешения. Передача через WeTransfer или Google Drive. Исходники — по договорённости.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка участка в Грузии?',
        answer:
            'Базовый пакет начинается от 390 ₾, пакет с монтажом и расширенным фото — от 590 ₾, полный девелоперский продакшн — от 990 ₾. Финальная цена зависит от локации, площади и задачи.',
    },
    {
        question: 'Вы работаете только в Тбилиси или выезжаете в регионы?',
        answer:
            'Работаем по всей Грузии: Тбилиси, Батуми, Мцхета, Кахетия, Аджария, Квемо-Картли. Условия выезда согласовываются отдельно.',
    },
    {
        question: 'Какие форматы видео доступны: горизонталь, вертикаль, оба?',
        answer:
            'Стандартный формат — горизонтальный 16:9. Вертикальный 9:16 для Reels и Stories добавляется по запросу или входит в расширенные пакеты.',
    },
    {
        question: 'Можно ли наложить границы участка на видео?',
        answer:
            'Да, это отдельная опция. Для наложения нужен кадастровый номер или план участка. Стоимость зависит от сложности графики.',
    },
    {
        question: 'Нужны ли разрешения GCAA для съёмки на моём участке?',
        answer:
            'Для большинства открытых участков вне зон ограничений работаем в рамках стандартных правил. Для локаций рядом с аэропортами и чувствительными зонами заранее проверяем требования и оформляем согласования при необходимости.',
    },
    {
        question: 'Как оформляется заказ?',
        answer:
            'Вы описываете задачу, мы согласовываем объём, дату и стоимость. После подтверждения выезжаем на объект. Договор — по запросу, оплата: 50% предоплата и остаток при передаче материалов.',
    },
    {
        question: 'Как быстро я получу готовый материал?',
        answer:
            'Стандартный срок — 3–5 рабочих дней после съёмочного дня. Срочный монтаж 1–2 дня возможен по согласованию.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Специализация по задачам, а не универсальная съёмка',
        text: 'Мы разделяем форматы по нишам и в съёмке участков делаем акцент на рельеф, масштаб и контекст, а не только на «красивые облёты».',
    },
    {
        title: 'Оборудование DJI Air 3S',
        text: 'Съёмка в 4K, работа в сложном свете, высокая детализация и гибкость постобработки.',
    },
    {
        title: 'Работаем по всей Грузии',
        text: 'Тбилиси, Кахетия, Аджария, Мцхета и другие регионы с учётом рельефа и особенностей локации.',
    },
    {
        title: 'Полный цикл: съёмка + монтаж + финальные файлы',
        text: 'Вы получаете готовый продукт, который можно сразу публиковать в объявлениях, на сайте и в рекламных кампаниях.',
    },
    {
        title: 'Предсказуемые сроки и быстрый старт',
        text: 'Оперативное согласование, съёмка в ближайшее погодное окно и финальные материалы в течение нескольких рабочих дней.',
    },
    {
        title: 'Фокус на результат продажи',
        text: 'Монтаж строится так, чтобы в первые секунды показать ключевые аргументы объекта для покупателя и инвестора.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Заявка и бриф',
        text: 'Вы пишете в мессенджер или через форму, описываете локацию, цель и акценты. Мы уточняем детали и подтверждаем стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Проверка зоны и дата',
        text: 'Перед выездом проверяем ограничения полётов и согласовываем съёмочный слот с учётом погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Оператор выполняет облёт по согласованному плану: периметр, рельеф, окружение, подъездные пути и дополнительные акценты.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и цветокоррекция',
        text: 'Собираем материал в логике продажи: нужные ракурсы, темп и акценты. Цветокоррекция остаётся реалистичной без чрезмерных фильтров.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём видео и фото через Google Drive или WeTransfer. Материалы готовы к публикации сразу после получения.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Пакет 1 — Базовый',
        subtitle: 'Участок для объявления',
        price: 'от 390 ₾',
        duration: 'до 1,5 часов на объекте',
        delivery: '3–5 рабочих дней',
        items: [
            'Аэросъёмка участка до 1 га',
            'Смонтированное видео 60–90 секунд (4K, 16:9)',
            '10 аэрофотографий (JPG, финальная цветокоррекция)',
            'Передача файлов через WeTransfer / Google Drive',
        ],
        addons: [],
    },
    {
        title: 'Пакет 2 — Стандартный',
        subtitle: 'Полный визуальный пакет',
        price: 'от 590 ₾',
        duration: 'до 3 часов на объекте',
        delivery: '3–5 рабочих дней',
        items: [
            'Аэросъёмка участка до 3 га',
            'Смонтированное видео 2–3 минуты (4K, 16:9)',
            'Вертикальная версия 9:16 для Reels/Stories (до 60 секунд)',
            '20 аэрофотографий (JPG, финальная цветокоррекция)',
            'Передача файлов через WeTransfer / Google Drive',
        ],
        addons: [],
        popular: true,
    },
    {
        title: 'Пакет 3 — Девелоперский',
        subtitle: 'Продакшн для девелопера',
        price: 'от 990 ₾',
        duration: 'полный день',
        delivery: '5–7 рабочих дней',
        items: [
            'Аэросъёмка большого массива / нескольких участков (от 3 га)',
            'Смонтированное видео 2–4 минуты (4K, 16:9)',
            'Вертикальная версия для соцсетей',
            '30+ аэрофотографий',
            'Графическое наложение границ участков (базовая графика)',
            'Передача исходников по договорённости',
        ],
        addons: ['Срочный монтаж (1–2 дня) — +150 ₾', 'Сложное кадастровое наложение — от 200 ₾', 'Дополнительные версии монтажа — от 120 ₾'],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-real-estate',
        text: 'Если на участке уже есть дом или объект, добавьте съёмку недвижимости с акцентом на архитектуру и окружение.',
    },
    {
        title: 'Мониторинг строительства',
        href: '/drone-construction-monitoring',
        text: 'Регулярные облёты фиксируют этапы работ и формируют визуальную историю проекта.',
    },
    {
        title: '360° тур для недвижимости',
        href: '/360-tour-real-estate',
        text: 'Интерактивный формат, который позволяет покупателю удалённо изучить объект через браузер.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Динамичный кинематографический формат для презентаций девелоперских проектов и рекламы.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Съёмка в полдень при жёстком солнце',
        text: 'Резкие тени и выжженные детали ухудшают качество. Для участков лучшее окно — утро и предзакатный свет.',
    },
    {
        title: 'Съёмка только с большой высоты',
        text: 'Панорама красивая, но теряется практическая информация. Нужна комбинация высот и низких проходов.',
    },
    {
        title: 'Не показывают подъездную дорогу',
        text: 'Для покупателя это ключевой фактор. Один проход вдоль маршрута закрывает главный вопрос «как доехать».',
    },
    {
        title: 'Используют только вертикальный формат',
        text: 'Для сайтов и листингов нужен горизонтальный 16:9. Только Reels-формат часто выглядит неполноценным.',
    },
    {
        title: 'Не показывают масштаб в кадре',
        text: 'Без ориентиров зрителю трудно понять размер участка. Нужны понятные объекты в кадре и правильные ракурсы.',
    },
    {
        title: 'Заказывают съёмку без цели',
        text: 'Сценарий «красиво полетать» не заменяет задачу продажи. Нужен шот-лист под конкретный результат.',
    },
];

const freeTips: string[] = [
    'Снимите горизонтальное видео с телефона с самой высокой точки участка — даже базовая панорама лучше, чем только статичные фото.',
    'Добавьте короткий ролик подъезда от известного ориентира или трассы к участку.',
    'Сфотографируйте участок в «золотой час» за час до заката для лучшей детализации рельефа.',
    'Добавьте план участка с кадастровыми границами хотя бы в виде скриншота карты.',
    'Описывайте окружение конкретно: расстояния, ориентиры, доступ к дороге и отсутствие/наличие промзон.',
];

const checklist: string[] = [
    'Участок подготовлен к съёмке или согласовано, что снимаем в текущем состоянии',
    'Подтверждены дата, время и контакт встречающего на объекте',
    'Есть номер ответственного человека на день съёмки',
    'Подготовлен кадастровый номер, если нужно наложение границ',
    'Определена главная цель видео: продажа, инвестор, девелоперский запуск',
    'Согласованы ключевые акценты: подъезд, виды, границы, окружение',
    'Проверена допустимая высота полёта для зоны',
    'Подготовлен удобный канал получения файлов (Google Drive / Dropbox)',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Зачем нужна аэросъёмка для продажи земельного участка?',
        answer:
            'Земля плохо продаётся по наземным фото, потому что покупатель не видит масштаб и окружение. Дрон показывает форму участка, рельеф, подъезды и контекст локации, поэтому решение о просмотре и покупке принимается быстрее и с меньшим количеством «холостых» визитов.',
    },
    {
        question: 'Как дрон помогает работать с иностранными покупателями?',
        answer:
            'Для нерезидента поездка на первичный просмотр связана с расходами и риском. Видео с дрона закрывает этап дистанционного due diligence: покупатель оценивает рельеф, инфраструктуру и расположение, после чего приезжает уже на финальный этап переговоров.',
    },
    {
        question: 'Какие участки особенно выигрывают от аэросъёмки?',
        answer:
            'Лучше всего формат работает для крупных массивов, участков со сложным рельефом, локаций с сильным природным окружением и девелоперских проектов с нарезкой. Также аэросъёмка особенно полезна в сделках с удалёнными покупателями.',
    },
    {
        question: 'Можно ли летать дроном в черте Тбилиси и что с разрешениями?',
        answer:
            'Полёты регулируются GCAA. Во многих пригородных зонах съёмка возможна по стандартным правилам, но в центре и рядом с ограниченными объектами могут потребоваться согласования. Перед выездом мы проверяем зону и при необходимости оформляем нужные уведомления.',
    },
    {
        question: 'Чем аэросъёмка участка отличается от обычной фотографии?',
        answer:
            'Наземная фотография показывает отдельный фрагмент, а аэросъёмка — весь объект в контексте. С высоты видно границы, направление склонов, расстояния до дорог, соседство и природные преимущества. Это делает презентацию участка значительно более убедительной.',
    },
];

const navLinks: NavLink[] = [
    { label: 'Аэросъёмка недвижимости в Тбилиси', href: '/drone-real-estate' },
    { label: 'Мониторинг строительства с дрона', href: '/drone-construction-monitoring' },
    { label: 'Инспекция объектов с воздуха', href: '/drone-object-inspection' },
    { label: 'FPV-съёмка для рекламы и девелопмента', href: '/drone-fpv-cinema' },
    { label: '360° виртуальный тур для недвижимости', href: '/360-tour-real-estate' },
    { label: 'Все услуги аэросъёмки Breus Media', href: '/drone-service' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка земельных участков для продажи и инвестиций в Грузии',
    description:
        'Дрон-видео и фото земельных участков для продажи, девелоперов и инвесторов: рельеф, периметр, подъезды, окружение. Тбилиси, Кахетия, Батуми и вся Грузия.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.ge',
        telephone: '+995574619393',
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
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '390',
        highPrice: '990',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для недвижимости и девелопмента в Грузии.',
    url: 'https://breusmedia.ge',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneLandSalePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-land-sale-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Land Sale Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка земельных участков для продажи и инвесторов в Грузии
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон-видео показывает рельеф, окружение и границы участка так, как не покажет обычная
                                фотография, и помогает продавать быстрее.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Земельный участок сложно продать по телефонным фото: покупатель не чувствует масштаб и
                                не понимает контекст. За один съёмочный день вы получаете видео и фото, которые
                                показывают рельеф, периметр, подъезды и окружение для листинга, инвестпрезентации или
                                девелоперского запуска в Тбилиси, Батуми, Кахетии и по всей Грузии.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку участка
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры и цены
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 390 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Продажа участка, инвесторы, девелопмент.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1 день</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–5 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S, 4K, LOG</li>
                                    <li>Видео + фото + опция наложения границ</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка участка и зачем она нужна</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка участка — это видео и фото с дрона, которые показывают территорию сверху: форму
                            участка, рельеф, подъезды, соседние объекты и окружающий ландшафт.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Это не «картинка для соцсетей», а инструмент принятия решения. Покупатель или инвестор
                            сразу видит склон, солнце, удалённость от дороги и характер окружения без лишних визитов.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для девелопера это также документация этапов: состояние участка до расчистки, процесс
                            нарезки и подготовка проекта к старту продаж.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта услуга</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что мешает продавать участки быстро и как это выглядит на практике
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка влияет на деньги и время</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {earningsCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы не теряете благодаря правильной презентации</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {savingsCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Есть участок под продажу или девелоперский проект в Грузии? Расскажите задачу — подскажем,
                            что можно снять за один день и сколько это будет стоить.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в съёмку и что вы получаете</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где и как используют аэросъёмку участков в Грузии</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Как выглядит аэросъёмка участка: концептуальные сценарии
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые стоят за аэросъёмкой участков</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Вопросы от тех, кто заказывает впервые" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы по деньгам, срокам и деталям работы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему выбирают Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмка участка занимает 1 день. Готовый материал — через 3–5 рабочих дней." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/72">Съёмка: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.addons.length > 0 ? (
                                    <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                        <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                            {card.addons.map((item) => (
                                                <li key={item}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой пакет подходит под вашу задачу? Напишите, подскажем оптимальный объём
                            без лишних опций.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в Telegram / WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Распространённые ошибки при съёмке участков и почему они стоят денег
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что улучшить прямо сейчас, даже без заказа дрон-съёмки
                        </h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к аэросъёмке участка</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы о дрон-съёмке земли в Грузии</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы</h2>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/80 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <span className="mr-2 text-[#FFD23F]">{index + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку участка</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите локацию, площадь и цель съёмки. Предложим формат, сроки и точный расчёт.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <LandSaleContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-land-sale-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-reporting
Lines: 1177
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { ReportingContactForm } from './ReportingContactForm';

type CardItem = {
    title: string;
    text: string;
};

type TaggedCardItem = {
    tag: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    format: string;
    delivery: string;
    audience: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breusmedia.com/drone-services/drone-reporting';
const PAGE_TITLE = 'Аэроотчёты для стройки и объектов — Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Регулярная аэросъёмка объектов по расписанию: стройка, участки, инвестиционный контроль. Тбилиси и Грузия. Разовый выезд от 450 ₾, подписка от 900 ₾/мес.';

const serviceTypes: CardItem[] = [
    {
        title: 'Мониторинг строительства',
        text: 'Периодические облёты строительной площадки с фиксацией прогресса по этапам. Подходит для девелоперов, генподрядчиков и проектных менеджеров, которым нужна визуальная хроника от котлована до финала.',
    },
    {
        title: 'Инвесторские визуальные обновления',
        text: 'Пакеты для владельцев и инвесторов, которые не могут регулярно бывать на объекте. Датированные материалы заменяют личный визит и дают уверенность, что деньги работают и прогресс есть.',
    },
    {
        title: 'Документирование территорий и участков',
        text: 'Для земельных участков, индустриальных площадок, складских дворов и других объектов, где важно фиксировать изменения: освоение территории, заезд техники, подготовку к строительству, сезонные изменения.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Девелопер и застройщик',
        text: 'Нужно документировать прогресс по этапам, защищать себя в случае споров с подрядчиком и показывать инвесторам, что стройка идёт по плану.',
    },
    {
        title: 'Удалённый инвестор',
        text: 'Вложили деньги в объект в Тбилиси, сами находитесь в другом городе или стране. Хотите регулярно видеть, что происходит на площадке — без поездки и без звонков с субъективным пересказом.',
    },
    {
        title: 'Проектный менеджер',
        text: 'Ведёте несколько объектов одновременно. Нужна повторяемая схема документирования, которая не зависит от чьей-то памяти и телефонных фотографий.',
    },
    {
        title: 'Владелец земельного участка',
        text: 'Купили участок в Грузии, но не бываете там каждую неделю. Важно видеть, что там происходит: освоение, изменения, соседние работы, состояние границ.',
    },
    {
        title: 'Генподрядчик',
        text: 'Нужно защищать себя при спорах о том, что и когда было сделано. Датированная визуальная хроника — это аргумент, который сложно оспорить.',
    },
    {
        title: 'Управляющая компания',
        text: 'Следите за состоянием территории, объекта или площадки. Регулярная аэрофиксация помогает обнаружить проблему раньше, чем она станет дорогой.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Я не понимаю, что реально происходит на объекте',
        text: 'Подрядчик говорит одно, прораб говорит другое, фотографии с телефона показывают угол, который ничего не объясняет. Аэроотчёт даёт вид сверху — без интерпретаций и без субъективности.',
    },
    {
        title: 'Споры с подрядчиком без доказательств',
        text: 'Когда возникает конфликт о том, что было сделано и когда, выигрывает тот, у кого есть документация. Датированные материалы с воздуха — это не просто контент, это хронология.',
    },
    {
        title: 'Инвестор требует отчёт, а у вас нет ничего убедительного',
        text: 'Словесные обновления и несколько строительных фотографий не создают доверие. Видео с воздуха с датой и охватом всей площадки — совсем другой разговор.',
    },
    {
        title: 'Проблему заметили слишком поздно',
        text: 'Отклонение в строительстве, нежелательное изменение на территории, спорная ситуация с соседним участком — всё это лучше обнаружить на раннем этапе. Регулярный облёт даёт эту возможность.',
    },
    {
        title: 'Разрозненные фото и видео без структуры',
        text: 'У вас есть материалы из разных источников, но их невозможно сравнить между собой: разные ракурсы, разные даты, разный формат. Аэроотчёты строятся по единой логике — их можно сравнивать период к периоду.',
    },
    {
        title: 'Нет визуальной истории объекта для продажи или презентации',
        text: 'Когда объект завершён или готов к следующему раунду инвестиций, визуальная хроника от нулевого цикла до финала — это сильный материал. Он создаётся сам собой, если отчёты делались регулярно.',
    },
];

const earnsItems: string[] = [
    'Инвестор видит реальный прогресс и охотнее входит в следующий этап финансирования.',
    'Визуальная хроника стройки становится маркетинговым материалом при продаже объекта или привлечении партнёров.',
    'Регулярные обновления для клиентов недвижимости повышают их уверенность и снижают количество тревожных звонков.',
    'Профессиональная документация поднимает статус проекта и воспринимаемую серьёзность команды.',
];

const savesItems: string[] = [
    'Не теряет деньги на разборе споров с подрядчиком: датированные материалы говорят сами за себя.',
    'Не теряет время на объяснение инвестору, что происходит — материалы отправляются готовыми.',
    'Не теряет контроль над объектом из-за расстояния: регулярные выезды дают постоянную картину.',
    'Не теряет возможность заметить отклонение вовремя — когда исправить ещё дёшево.',
];

const shootDayItems: string[] = [
    'Полёт по заранее согласованному маршруту.',
    'Охват всей площадки или ключевых зон объекта.',
    'Несколько ракурсов: обзорный, средний, акцентный.',
    'Фото в формате RAW + JPEG, видео в 4K.',
    'Все вылеты с одними и теми же опорными точками — для сравнения между периодами.',
    'При необходимости: ночная съёмка, расширенный охват, дополнительные зоны.',
];

const finalResultItems: string[] = [
    'Датированный пакет аэрофотографий (обработанные, структурированные по зонам).',
    'Прогресс-клип 1–3 минуты: монтаж с датой и логикой последовательности.',
    'При заказе сводки: PDF-отчёт с ключевыми визуалами, датой и пояснениями.',
    'Организованная архивная папка по периодам — все выезды в одном месте.',
    'При подписке: сравнительные стоп-кадры «тогда и сейчас» по ключевым зонам.',
    'Доставка: облачная ссылка в течение 48 часов после выезда.',
];

const useCases: CardItem[] = [
    {
        title: 'Жилой комплекс в стадии строительства',
        text: 'Застройщик отправляет инвесторам ежемесячные видеообновления с воздуха. Доверие растёт, количество тревожных звонков падает, сделки по следующим этажам закрываются быстрее.',
    },
    {
        title: 'Коттеджный посёлок или частный проект',
        text: 'Владелец живёт в другом городе, стройка идёт в пригороде Тбилиси. Раз в две недели получает пакет с фотографиями и коротким клипом — знает, что происходит, без личного визита.',
    },
    {
        title: 'Земельный участок в Грузии',
        text: 'Инвестор купил участок в Кахетии или Аджарии. Раз в месяц прилетает дрон: фиксирует состояние, видно, нет ли незаконного использования, как идёт освоение соседних территорий.',
    },
    {
        title: 'Подготовка к следующему раунду инвестиций',
        text: 'Перед встречей с новым инвестором или партнёром собирается визуальная хроника: объект от нуля до текущего состояния. Это работает убедительнее любой презентации в слайдах.',
    },
    {
        title: 'Спор с подрядчиком или субподрядчиком',
        text: 'Клиент утверждает, что работы не были сделаны в срок. У заказчика есть датированные аэрофотографии с привязкой по неделям. Аргумент закрыт.',
    },
    {
        title: 'Промышленная площадка или логистический двор',
        text: 'Операционный менеджер следит за перемещением техники, состоянием территории и зон хранения. Регулярные облёты дают актуальную картину без лишних визитов на объект.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Жилая стройка',
        title: 'Ежемесячный отчёт для ЖК в Дидубе',
        text: 'Застройщик заказал 6-месячный цикл аэроотчётов. Каждый пакет — датированные фотографии по этажам, прогресс-клип с 3 ракурсов, PDF с ключевыми зонами. На 4-м месяце обнаружили визуальное отставание по одной секции — зафиксировали, скорректировали план с подрядчиком.',
    },
    {
        tag: 'Удалённый инвестор',
        title: 'Визуальные обновления для инвестора из Европы',
        text: 'Клиент инвестировал в объект в Тбилиси, сам живёт за рубежом. Раз в две недели получает облачную папку: 15–20 обработанных аэрофотографий и 2-минутный клип. Вопросов к проектному менеджеру стало меньше в несколько раз — всё видно без звонков.',
    },
    {
        tag: 'Земельный участок',
        title: 'Сезонный мониторинг участка в Кахетии',
        text: 'Владелец виноградника заказал ежемесячные облёты для контроля состояния территории в межсезонье. Результат — датированная визуальная история участка за весь цикл, которую можно использовать при продаже или привлечении арендатора.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '78%',
        text: 'строительных споров, дошедших до суда или официальных разбирательств, не имеют визуальной документации — только слова и пересказы.',
    },
    {
        value: '40% быстрее',
        text: 'инвесторы принимают решение о повторном входе в проект, когда получают регулярные визуальные обновления вместо только текстовых отчётов.',
    },
    {
        value: '1–2 часа',
        text: 'занимает разовый выезд на объекте. Серия из 6 ежемесячных выездов создаёт историю, которую невозможно снять задним числом.',
    },
    {
        value: '2025',
        text: 'спрос на регулярные аэроотчёты в Грузии заметно вырос вместе с долей проектов, где инвесторы контролируют стройку удалённо.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэроотчёт?',
        answer:
            'Это повторяющаяся съёмка одного объекта дроном по заранее согласованному графику. Каждый выезд даёт датированный пакет материалов: фотографии с воздуха, прогресс-клип и при необходимости PDF-сводку. Это не разовое видео, а регулярная визуальная документация.',
    },
    {
        question: 'Чем это отличается от обычной аэросъёмки?',
        answer:
            'Обычная аэросъёмка — это одноразовый результат. Аэроотчёты строятся на повторяемости: одни и те же точки, одна и та же логика, разные периоды. Главная ценность — сравнение во времени. Через 3 месяца у вас есть хроника, а не просто видео.',
    },
    {
        question: 'Мне это нужно или это только для крупных девелоперов?',
        answer:
            'Это работает для любого масштаба. Если у вас есть объект — участок, частная стройка, небольшой жилой дом — и вам важно видеть, что там происходит без постоянных визитов, аэроотчёты решают эту задачу. Разовый выезд стартует от 450 ₾.',
    },
    {
        question: 'Можно ли летать дроном в Тбилиси и по всей Грузии?',
        answer:
            'Да. GCAA регулирует использование беспилотников, и мы работаем в рамках действующих правил. Для большинства объектов — строительные площадки, участки, промышленные территории за пределами ограниченных зон — полёты разрешены. Если объект рядом с аэропортом или в особой зоне, уточняем заранее.',
    },
    {
        question: 'Влияет ли погода на регулярность выездов?',
        answer:
            'Да, в плохую погоду — сильный ветер, дождь, туман — выезд переносится. Это стандарт безопасности. Если выезд перенесён из-за погоды, он выполняется в ближайший доступный день без потери периода.',
    },
    {
        question: 'Сколько времени занимает выезд?',
        answer:
            'Непосредственно съёмка на объекте обычно занимает 1–2 часа в зависимости от размера площадки. После выезда материал обрабатывается и доставляется в течение 48 часов.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэроотчёт в Грузии?',
        answer:
            'Разовый выезд с базовым пакетом — от 450 ₾. Регулярный мониторинг оформляется как ежемесячная услуга: от 900 ₾ в месяц за двухнедельный ритм. Точный расчёт зависит от размера объекта, частоты выездов и состава отчёта.',
    },
    {
        question: 'Что входит в стандартный пакет?',
        answer:
            'Съёмочный выезд, обработанный пакет аэрофотографий, прогресс-клип и облачная доставка в течение 48 часов. PDF-сводка добавляется к пакету по запросу.',
    },
    {
        question: 'Можно ли заказать разовый выезд без подписки?',
        answer:
            'Да. Разовый формат называется Baseline Report и подходит как стартовая точка: вы фиксируете текущее состояние объекта, даже если пока не планируете регулярный мониторинг.',
    },
    {
        question: 'Как организованы разрешения — нужно ли что-то согласовывать?',
        answer:
            'Для большинства объектов согласования на стороне клиента не нужны. Мы работаем в соответствии с правилами GCAA. Если объект расположен в зоне ограничений, сообщаем об этом заранее и решаем вопрос до выезда.',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Нет. Работаем по всей Грузии: Тбилиси, Батуми, Кутаиси, Рустави и регионы. Для выездов за пределы Тбилиси добавляется стоимость транспортировки, обсуждается отдельно.',
    },
    {
        question: 'В каком формате приходят материалы?',
        answer:
            'Фотографии — обработанные JPEG, RAW по запросу. Видео — MP4 в 4K. Папка организована по датам и зонам. Доставка через облачный сервис: Google Drive, Яндекс Диск или аналог по согласованию.',
    },
    {
        question: 'Можно ли сделать сравнительный монтаж «тогда и сейчас» по итогу нескольких месяцев?',
        answer:
            'Да. По завершении цикла собираем сравнительные стоп-кадры по ключевым зонам и монтируем хроникальный клип. Стоимость зависит от объёма материалов.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Снимаем на DJI Air 3S',
        text: 'Камера с 1-дюймовым сенсором, 4K/60fps и высокой детализацией даже в сложном свете. Это уровень, подходящий для документирования и презентации.',
    },
    {
        title: 'Понимаем разницу между визуальным отчётом и просто съёмкой',
        text: 'Аэроотчёт — это повторяемая структура: одни и те же опорные точки, один формат выдачи, сопоставимость периодов.',
    },
    {
        title: 'Работаем на регулярной основе, не только разово',
        text: 'Выстраиваем цикличные схемы: ежемесячно, еженедельно или по событию. Это другой уровень организации и контроля.',
    },
    {
        title: 'Удобная доставка без хаоса',
        text: 'Материалы структурированы по периодам и зонам, приходят в согласованный срок через облако.',
    },
    {
        title: 'Работаем по всей Грузии',
        text: 'Тбилиси, Батуми и регионы — выезжаем туда, где находится ваш объект.',
    },
    {
        title: 'Без лишних посредников',
        text: 'Не перепродаём задачи фрилансерам и не меняем оператора от выезда к выезду. Это критично для регулярного мониторинга.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Разбор объекта и задачи',
        text: 'Обсуждаем, что нужно фиксировать, как часто и какие зоны приоритетны. Согласуем маршрут полёта и формат отчёта.',
    },
    {
        step: 'Шаг 2',
        title: 'Первый выезд — базовая фиксация',
        text: 'Снимаем стартовое состояние объекта. Это точка отсчёта для сравнения всех следующих периодов.',
    },
    {
        step: 'Шаг 3',
        title: 'Обработка и доставка материалов',
        text: 'В течение 48 часов после выезда вы получаете готовый пакет: фотографии, клип и при необходимости PDF-сводку.',
    },
    {
        step: 'Шаг 4',
        title: 'Регулярные выезды по графику',
        text: 'Каждый следующий выезд делаем по тем же опорным точкам. Если на объекте происходят изменения, корректируем маршрут.',
    },
    {
        step: 'Шаг 5',
        title: 'Итоговые материалы по завершении цикла',
        text: 'По запросу собираем финальную хронику: сравнительный монтаж, архив по периодам и визуальную историю от начала до текущего состояния.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Baseline Report (Стартовая фиксация)',
        price: 'от 450 ₾',
        format: 'Разовый выезд',
        delivery: '48 часов',
        audience: 'Подходит для первичной фиксации состояния объекта и стартовой точки перед мониторингом.',
        items: [
            '1 выезд на объект',
            'Обработанные аэрофотографии (15–25 снимков)',
            'Прогресс-клип до 2 минут',
            'Структурированная облачная папка с датой',
        ],
        addons: ['Расширенный охват (+150 ₾)', 'PDF-сводка (+100 ₾)', 'Ночная съёмка (+200 ₾)'],
    },
    {
        title: 'Monthly Reporting (Ежемесячный мониторинг)',
        price: 'от 900 ₾ / месяц',
        format: '2 выезда в месяц',
        delivery: '48 часов после каждого выезда',
        audience: 'Подходит для стройки в активной фазе, инвесторских обновлений и мониторинга крупных территорий.',
        items: [
            '2 выезда в месяц по согласованному маршруту',
            'Обработанные аэрофотографии после каждого выезда',
            'Прогресс-клип по каждому периоду',
            'Архив папок, структурированных по датам',
            'Сравнительная подборка «период к периоду» раз в месяц',
        ],
        addons: ['PDF-сводка (+100 ₾ / выезд)', 'Расширенный охват (+200 ₾ / месяц)', 'Еженедельный ритм (цена по запросу)'],
        popular: true,
    },
    {
        title: 'Project Chronicle (Хроника проекта)',
        price: 'от 2 500 ₾ / квартал',
        format: 'Регулярные выезды + финальная хроника',
        delivery: '48 часов после выезда + итоговый пакет в конце квартала',
        audience: 'Подходит для долгосрочных проектов, объектов с несколькими инвесторами и задач с полной визуальной историей.',
        items: [
            'Выезды по согласованному ритму (еженедельно или раз в 2 недели)',
            'Полные пакеты материалов по каждому выезду',
            'Расширенная архивная структура по зонам и периодам',
            'Сравнительный монтаж «тогда и сейчас» по итогам квартала',
            'PDF-сводка с ключевыми визуалами и хронологией',
            'Материалы для инвесторской презентации или коммуникации с партнёрами',
        ],
        addons: [
            'Брендирование PDF под клиента (+150 ₾)',
            'Дополнительные зоны и ракурсы (по запросу)',
            'Ускоренная доставка в течение 24 часов (+100 ₾ / выезд)',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Разовая аэросъёмка объекта недвижимости для продажи, маркетинга или презентации. Подходит как стартовый формат перед мониторингом.',
    },
    {
        title: 'Мониторинг территорий',
        href: '/drone-services/drone-territory-monitoring',
        text: 'Периодические облёты для контроля состояния территории: участки, промышленные дворы, зоны хранения.',
    },
    {
        title: 'Инспекция фасадов',
        href: '/drone-services/drone-facade-inspection',
        text: 'Аэровизуальная документация состояния фасадов зданий. Полезно при приёмке объекта и оценке текущего состояния.',
    },
    {
        title: 'Инспекция кровель',
        href: '/drone-services/drone-roof-inspection',
        text: 'Осмотр кровли дроном без лесов и подъёмников. Датированные фото и видео состояния кровельного покрытия.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Снимают один раз и считают, что этого достаточно',
        text: 'Разовая аэросъёмка фиксирует момент, но не даёт истории. Инвестору и подрядчику нужна динамика во времени.',
    },
    {
        title: 'Снимают без единой логики ракурсов',
        text: 'Каждый выезд — другой оператор и другие углы. Сравнивать периоды невозможно. Для документирования нужны повторяемые опорные точки.',
    },
    {
        title: 'Хранят материалы в мессенджерах',
        text: 'Видео в WhatsApp, фото в Telegram, часть файлов на личных телефонах. Через полгода нужный материал найти практически невозможно.',
    },
    {
        title: 'Начинают документировать слишком поздно',
        text: 'Когда «появится что показать», первые этапы уже позади. Хроника строится только если начата с самого начала.',
    },
    {
        title: 'Не учитывают разрешённые зоны полётов',
        text: 'Объект рядом с аэропортом или в зоне ограничений может требовать дополнительных процедур. Это нужно проверять до выезда.',
    },
    {
        title: 'Смешивают документирование с маркетинговой съёмкой',
        text: 'Аэроотчёт и рекламное видео — разные форматы с разными задачами. Попытка сделать одно вместо другого ухудшает результат.',
    },
];

const freeTips: string[] = [
    'Начните фиксировать состояние объекта телефоном: выберите одни и те же точки и подписывайте дату.',
    'Создайте отдельную облачную папку для материалов объекта и ведите её по периодам.',
    'Согласуйте с командой единые ракурсы съёмки, чтобы данные были сопоставимы между визитами.',
    'Проверьте ограничения по полётам на сайте GCAA и в AirMap до планирования выезда.',
    'Определите, кто получает отчёты: инвестор, управляющая компания или партнёры — это задаст правильный формат.',
];

const checklist: string[] = [
    'Объект определён: адрес, площадь, ключевые зоны для съёмки.',
    'Понятно, кто будет получать материалы и для каких целей.',
    'Согласована частота выездов: разово / ежемесячно / еженедельно.',
    'Выбран формат отчёта: фото + клип / с PDF / без PDF.',
    'Проверено, есть ли ограничения для полётов в зоне объекта.',
    'Определена точка отсчёта: первый выезд фиксирует стартовое состояние.',
    'Подготовлено место хранения: облачная папка или корпоративное хранилище.',
    'Согласованы срок доставки и канал получения материалов.',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Что такое аэроотчёт и чем он отличается от просто видео с дрона?',
        answer: [
            'Аэроотчёт — это сервис, построенный на повторяемости. Дрон прилетает к одному объекту по согласованному маршруту несколько раз: еженедельно, раз в две недели или раз в месяц.',
            'Каждый выезд даёт датированный пакет: фото с фиксированных точек, прогресс-клип и при необходимости PDF-сводку.',
            'Главное отличие от разовой съёмки — сравнимость периодов. Один и тот же ракурс в разные даты превращает контент в инструмент контроля.',
        ],
    },
    {
        question: 'Для каких объектов нужны регулярные аэроотчёты?',
        answer: [
            'В первую очередь для строительных площадок: от частных домов до жилых комплексов и промышленных объектов.',
            'Также это земельные участки, логистические дворы, складские территории и объекты, где собственник не может быть на месте регулярно.',
            'Если важно видеть изменения во времени и иметь датированную историю — формат аэроотчётов подходит.',
        ],
    },
    {
        question: 'Как часто нужно делать аэроотчёты?',
        answer: [
            'На активной стройке оптимально еженедельно или раз в две недели, чтобы вовремя заметить отклонения.',
            'На спокойной фазе проекта или этапе подготовки участка обычно достаточно ежемесячного ритма.',
            'Для объектов без активных работ подходит квартальный мониторинг. Точный ритм подбирается после разбора задачи.',
        ],
    },
    {
        question: 'Заменяют ли аэроотчёты инженерную экспертизу или технический надзор?',
        answer: [
            'Нет. Аэроотчёт — это визуальная документация, а не инженерная аттестация.',
            'Он не заменяет технический надзор, геодезию или юридически значимые акты.',
            'Его ценность в прозрачности и коммуникации: владельцы, инвесторы и менеджеры видят объективную картину площадки в конкретную дату.',
        ],
    },
    {
        question: 'Как аэроотчёты помогают в работе с инвесторами?',
        answer: [
            'Удалённым инвесторам проще принимать решения, когда они видят датированные визуальные обновления, а не только текстовые отчёты и звонки.',
            'Регулярные материалы снижают тревожность, уменьшают поток уточняющих вопросов и ускоряют согласование следующих этапов финансирования.',
            'Накопленная хроника также становится сильным аргументом при привлечении новых партнёров.',
        ],
    },
];

const navLinks: NavLink[] = [
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Мониторинг территорий дроном', href: '/drone-services/drone-territory-monitoring' },
    { label: 'Инспекция фасадов с воздуха', href: '/drone-services/drone-facade-inspection' },
    { label: 'Инспекция кровель дроном', href: '/drone-services/drone-roof-inspection' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
    { label: '360° виртуальные туры для недвижимости', href: '/360-tours/360-tour-real-estate' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Регулярные аэроотчёты для объектов и стройки в Тбилиси',
    description:
        'Регулярная аэросъёмка объектов в Тбилиси и по Грузии: повторяемые маршруты, датированные фото и видео, прогресс-клипы и отчётные пакеты для девелоперов, инвесторов и управляющих компаний.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.com',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси и Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '450',
        highPrice: '2500',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, аэроотчёты, FPV-видео и 360° туры для бизнеса в Тбилиси и по Грузии.',
    url: 'https://breusmedia.com',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneReportingPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-reporting-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Reporting
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Регулярные аэроотчёты для объектов и стройки в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон фиксирует состояние вашего объекта по расписанию — вы получаете датированные
                                визуальные обновления вместо хаоса в мессенджерах.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Аэроотчёт — это не просто видео с дрона. Это повторяемая визуальная система: один и тот
                                же объект, одни и те же ракурсы, в каждый период. Девелопер видит прогресс стройки.
                                Инвестор получает обновление из Тбилиси, находясь в другом городе. Менеджер проекта не
                                тратит время на объяснения, что было сделано несколько недель назад — у него есть
                                датированная визуальная история.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить объект
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть пакеты
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Разовый отчёт для объекта</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–2 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выезд</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Доставка</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S</li>
                                    <li>Датированные фото + 4K клип</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Аэроотчёт — это визуальная система контроля, а не разовая съёмка</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Обычная съёмка дроном делается один раз: получили красивое видео — на этом всё. Аэроотчёты
                            работают иначе. Мы прилетаем на один и тот же объект регулярно — еженедельно, раз в две
                            недели или раз в месяц — и фиксируем его состояние по одной и той же логике.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Каждый выезд даёт датированный пакет материалов: фотографии с воздуха, короткий
                            прогресс-клип и при необходимости PDF-сводку. Через месяц-два у вас есть визуальная история
                            объекта, которую можно показать инвестору, предъявить подрядчику или использовать в
                            коммуникации с партнёрами.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Ценность не в картинке — ценность в повторяемости и структуре. Один выезд даёт моментальный
                            снимок. Серия выездов даёт контроль.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому это нужно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Проблемы, которые решает этот формат</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что это даёт бизнесу</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Зарабатывает</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {earnsItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Не теряет</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {savesItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, нужны ли вашему объекту регулярные аэроотчёты? Расскажите о проекте — мы
                            разберём сценарий вместе и порекомендуем частоту и формат под вашу задачу.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить объект
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный выезд</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где это используют в Грузии</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Концепт {index + 1}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые объясняют, зачем это нужно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item, index) => (
                            <article key={item.value} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Факт {index + 1}</p>
                                <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Если вы впервые слышите об аэроотчётах" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы по стоимости, срокам и организации"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему работают с нами</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Первый выезд занимает 1,5–2 часа на объекте. Последующие — короче, потому что маршрут уже согласован." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/72">Формат: {card.format}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Если объект уже в работе — лучше начать сейчас. Каждый пропущенный период — это часть
                            визуальной истории, которую нельзя восстановить. Обсудите сценарий, и мы подберём ритм и
                            формат под вашу задачу.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки при организации визуальной документации объекта</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно сделать уже сейчас</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к первому выезду</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробнее об аэроотчётах</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы</h2>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/80 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <span className="mr-2 text-[#FFD23F]">{index + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить объект</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите адрес и задачу. Подскажем оптимальную частоту выездов, формат отчётов и
                                    ориентир по стоимости под ваш сценарий.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <ReportingContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-reporting-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-restaurants
Lines: 1391
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { DroneRestaurantsContactForm } from '@/components/drone-restaurants/DroneRestaurantsContactForm';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type RoleCard = {
    title: string;
    text: string;
};

type DeliverablePackage = {
    title: string;
    price: string;
    audience: string;
    items: string[];
    timeline: string;
    exclusions: string;
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type SeoAnswer = {
    question: string;
    answer: string;
};

const audienceCards: RoleCard[] = [
    {
        title: 'Владелец ресторана или кафе',
        text: 'Нужен свежий визуальный материал после открытия, ремонта или смены концепции.',
    },
    {
        title: 'Управляющий заведения',
        text: 'Ищете контент для сайта и Google Business Profile, который покажет место убедительнее.',
    },
    {
        title: 'Маркетолог HoReCa',
        text: 'Нужны вертикальные форматы для Reels и Stories, а также материалы под таргетинг.',
    },
    {
        title: 'Владелец rooftop или venue',
        text: 'Есть эффектное пространство, которое трудно передать обычной съёмкой.',
    },
    {
        title: 'Ресторан со скрытым входом',
        text: 'Хотите помочь гостям визуально понять, как найти заведение.',
    },
    {
        title: 'Ресторан перед сезоном или запуском',
        text: 'Нужен базовый visual kit быстро и с понятным итогом.',
    },
];

const problemCards: CardItem[] = [
    {
        title: '«У нас красивое место, но на фотографиях это не видно»',
        text: 'Дрон показывает масштаб, планировку и атмосферу — то, что один кадр не захватывает.',
    },
    {
        title: '«Instagram не даёт броней — гости смотрят и не приходят»',
        text: 'Видео с движением делает место считываемым за первые секунды.',
    },
    {
        title: '«Переехали / сделали ремонт / открылись, но нового контента нет»',
        text: 'Один визит закрывает hero video, вертикальные нарезки и обработанные кадры.',
    },
    {
        title: '«Хотим показать rooftop или двор, но не хватает ракурса»',
        text: 'Дрон даёт обзор, который недоступен ручной камере.',
    },
    {
        title: '«Конкуренты уже с видео, мы проигрываем в сравнении»',
        text: 'Если у соседей есть видео на Google Maps, а у вас нет, гость чаще уходит к ним.',
    },
    {
        title: '«Не понимаю, что заказать и сколько это стоит»',
        text: 'На странице — пакеты с ценами в ₾ и понятным составом.',
    },
];

const earningsMechanics: CardItem[] = [
    {
        title: 'Больше гостей из поиска',
        text: 'Google Business Profile с видео получает больше внимания, чем карточка только с фото.',
    },
    {
        title: 'Меньше пустых мест в пиковые дни',
        text: 'Когда гость заранее видит атмосферу, решение о визите принимается увереннее.',
    },
    {
        title: 'Event-трафик и частные мероприятия',
        text: 'Видео-маршрут по пространству ускоряет решение организаторов о бронировании.',
    },
];

const losses: string[] = [
    'Гость искал место «с видом» или «с террасой», не увидел подтверждения и выбрал другое заведение.',
    'Организатор события попросил показать зал: без видео масштаб не читается и заявка уходит конкуренту.',
    'Сезон стартовал, а актуального контента по летней зоне нет — реклама не запускается вовремя.',
    'Google-карточка без видео уступает конкурентам по кликам даже при сильных отзывах.',
];

const deliverablesDefault: string[] = [
    'Смонтированное hero video (длина зависит от пакета)',
    'Минимум 1 вертикальный cut для Reels / Stories',
    'Набор обработанных стоп-кадров / фотографий',
    'Организованная выдача файлов по назначению (сайт, соцсети, Google)',
    'Форматы под сайт и Instagram (горизонталь + вертикаль)',
];

const shootingZones: string[] = [
    'Фасад и вывеска',
    'Вход и маршрут подхода',
    'Терраса, двор, courtyard',
    'Rooftop-зона',
    'Обзор квартала / городской контекст',
    'FPV-проход по интерьеру (если пространство позволяет)',
];

const optionalAddons: string[] = [
    'Дополнительные вертикальные нарезки',
    'Версия для Google Business Profile',
    'Текстовые оверлеи / CTA end card',
    'Вечерняя / golden hour съёмка',
    'Сопроводительные фото блюд / food close-ups',
    'Двуязычные титры (RU + EN)',
    'Дополнительный тур от 360°-камеры',
];

const roleScenarios: CardItem[] = [
    {
        title: 'Ресторан открылся или обновился',
        text: 'Первый визуальный комплект о новом пространстве: один визит, базовый kit.',
    },
    {
        title: 'Rooftop или терраса перед сезоном',
        text: 'Актуальный контент на апрель–май, когда гости ищут места «с видом».',
    },
    {
        title: 'Venue для мероприятий',
        text: 'Видео зала и outdoor-зон для переписки с организаторами частных событий.',
    },
    {
        title: 'Нестандартная локация',
        text: 'Скрытый двор, верхний этаж, сложный вход — дрон объясняет путь визуально.',
    },
    {
        title: 'Обновление Google Business Profile',
        text: 'Видео в карточке повышает видимость и выделяет заведение среди соседей.',
    },
    {
        title: 'Контент для рекламы и таргетинга',
        text: 'Вертикальные clips с сильным первым кадром — база для Instagram и TikTok.',
    },
];

const demoCards: CardItem[] = [
    {
        title: 'Демо A — Exterior reveal',
        text: 'Пролёт над фасадом и входом: от городского контекста к вывеске и двери. 20–25 сек, горизонталь.',
    },
    {
        title: 'Демо B — Rooftop atmosphere',
        text: 'Медленный облёт rooftop-зоны с видом на город. 15–20 сек, вертикаль для Reels.',
    },
    {
        title: 'Демо C — FPV venue walk',
        text: 'Плавный проход от входа через зал к бару (если пространство позволяет). 15–20 сек.',
    },
];

const evidenceCards: CardItem[] = [
    {
        title: 'Видео в Google Business Profile даёт больше внимания',
        text: 'Карточки с фото и видео чаще получают запросы маршрутов и переходы на сайт, чем карточки только с текстом.',
    },
    {
        title: 'Видео ускоряет первичное решение',
        text: 'Гость часто решает в первые 5–10 секунд: движение и атмосфера объясняют место быстрее текста.',
    },
    {
        title: 'Рынок Тбилиси ещё не насыщен',
        text: 'Большая часть заведений пока не использует дрон-контент системно, поэтому окно возможностей открыто.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что именно даёт дрон-съёмка ресторану?',
        answer:
            'Она показывает атмосферу, вход, планировку, террасу, rooftop и окружение заведения — то, что обычные фотографии часто объясняют хуже. Гость заранее понимает, куда он идёт.',
    },
    {
        question: 'Это только для больших или дорогих ресторанов?',
        answer:
            'Нет. Небольшое кафе с хорошей атмосферой или интересным двором может выглядеть убедительно в видео так же, как крупное заведение.',
    },
    {
        question: 'Чем дрон-съёмка отличается от обычного видео на камеру?',
        answer:
            'Дрон снимает с точек, недоступных для ручной камеры: сверху, в движении, с плавным облётом здания. FPV добавляет ощущение живого прохода через пространство.',
    },
    {
        question: 'Можно ли снимать внутри ресторана?',
        answer:
            'В ряде случаев — да. Для интерьеров используем FPV-камеру DJI Avata 2. Не каждое пространство подходит для полноценного fly-through, но формат обсуждаем заранее.',
    },
    {
        question: 'Нужно ли закрывать ресторан на время съёмки?',
        answer:
            'Обычно нет. Подбираем окно, которое минимально мешает работе: до открытия, в тихие часы или в согласованный слот.',
    },
    {
        question: 'Для чего использовать этот материал, кроме Instagram?',
        answer:
            'Для сайта, Google Business Profile, рекламных объявлений, переписки с клиентами и организаторами мероприятий, а также презентаций venue.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка ресторана в Тбилиси?',
        answer:
            'Стартовый пакет — от 450 ₾. Полная съёмка с несколькими deliverables и FPV-элементами — от 850 ₾. Премиум hospitality pack — от 1 450 ₾ до 2 200 ₾.',
    },
    {
        question: 'Что входит в финальную выдачу файлов?',
        answer:
            'Hero video, минимум один вертикальный cut, обработанные стоп-кадры и структурированные папки под сайт, Reels и Google.',
    },
    {
        question: 'Сколько времени занимает съёмка?',
        answer:
            'Съёмка ресторана занимает 1–3 часа на месте, монтаж и выдача — 3–7 рабочих дней.',
    },
    {
        question: 'Нужны ли разрешения на полёты в Тбилиси?',
        answer:
            'Да. Работаем в соответствии с правилами Грузинского агентства гражданской авиации (GCAA). Анализ зоны и разрешительная подготовка — на нас.',
    },
    {
        question: 'Что делать, если в день съёмки плохая погода?',
        answer:
            'Следим за прогнозом заранее. При сильном ветре или осадках переносим съёмку на ближайший подходящий день без доплат.',
    },
    {
        question: 'Можно ли заказать только фото или только видео?',
        answer:
            'Да. Базовый состав можно адаптировать под вашу задачу и площадки публикации.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да. Снимаем в Батуми, Кутаиси и других локациях Грузии по договорённости с учётом выезда.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Съёмка под hospitality-задачу',
        text: 'Фокус не на полёте, а на том, чтобы гость понял атмосферу и маршрут.',
    },
    {
        title: 'Связка exterior, location и interior',
        text: 'Собираем визуальный путь: квартал → вход → зал → terrace / rooftop.',
    },
    {
        title: 'Материалы под площадки',
        text: 'Выдаём набор сразу под сайт, Reels, Google Business Profile и рекламу.',
    },
    {
        title: 'Небольшая команда и быстрый контакт',
        text: 'Без лишних слоёв коммуникации: договорённости и правки проходят быстрее.',
    },
    {
        title: 'Локальный опыт Тбилиси',
        text: 'Понимаем дворы, скрытые входы, rooftop-концепции и узкие улицы старого города.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы рассказываете о заведении, целях и зонах съёмки. Мы предлагаем формат под задачу.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка и анализ',
        text: 'Изучаем локацию, проверяем полётную зону и согласовываем окно съёмки.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка',
        text: 'Работаем в согласованное время: экстерьер, нужные дубли, FPV-элементы, если уместно.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и цвет',
        text: 'Собираем hero video, вертикальные clips и обрабатываем кадры под целевые платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Выдача',
        text: 'Передаём структурированную папку с готовыми файлами и одним раундом правок при необходимости.',
    },
];

const pricingCards: DeliverablePackage[] = [
    {
        title: 'STARTER VENUE SHOOT',
        price: '450–650 ₾',
        audience: 'Небольшой ресторан, кафе, бар, новая точка или сезонное обновление',
        items: [
            '1 съёмочный визит до 1,5 часов',
            'Exterior drone shots: фасад, вход, терраса, двор',
            '1 highlight video 15–30 сек',
            '1 вертикальный cut для Reels / Stories',
            '8–12 обработанных фото / стоп-кадров',
            'Выдача файлов по папкам (сайт, соцсети)',
        ],
        timeline: '3–5 рабочих дней',
        exclusions: 'FPV с несколькими дублями, ночная съёмка, продакшн с моделью / food styling',
    },
    {
        title: 'SIGNATURE RESTAURANT STORY',
        price: '850–1 250 ₾',
        audience: 'Ресторан, rooftop, wine bar, гастро-проект, venue с атмосферой',
        items: [
            '1 съёмочный визит до 3 часов',
            'Exterior + interior capture (если пространство позволяет)',
            'Planned drone route + базовый FPV walkthrough',
            '1 hero video 30–60 сек',
            '3 вертикальных social cut',
            '15–25 обработанных стоп-кадров',
            'Cover / thumbnail selection + версия для Google Business Profile',
        ],
        timeline: '4–7 рабочих дней',
        exclusions: 'Полный день продакшна, кастинг, сложная аудиопродукция, несколько съёмочных дней',
        popular: true,
    },
    {
        title: 'PREMIUM HOSPITALITY CONTENT PACK',
        price: '1 450–2 200 ₾',
        audience: 'Флагманский ресторан, hotel restaurant, event-driven venue, multi-zone concept',
        items: [
            'Pre-shoot planning call',
            'Съёмка до 4–5 часов',
            'Exterior + interior + advanced route planning',
            'FPV walkthrough (где уместно)',
            '1 hero film 45–90 сек',
            '5–7 вертикальных cuts',
            '20–35 обработанных stills + website hero-friendly assets',
            'Google Business Profile clip + акцент на event-зоны',
        ],
        timeline: '5–8 рабочих дней',
        exclusions: 'Реклама под ключ, актёры / модели / стайлинг, тяжёлые VFX, мультидневный продакшн',
    },
];

const addonPricing: string[] = [
    'Дополнительный вертикальный cut: 80–120 ₾',
    'Вечерняя / golden hour съёмка: 100–180 ₾',
    'Food close-up companion footage: 120–250 ₾',
    'Двуязычные титры (RU + EN): 80–150 ₾',
    'Дополнительный тур от 360°-камеры: по запросу',
    'Сезонный refresh-пакет: по договорённости',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° виртуальный тур для ресторана',
        href: '/360-tour-services/360-tour-restaurants',
        text: 'Интерактивный walkthrough по залу как дополнение к aerial-контенту.',
    },
    {
        title: 'Аэросъёмка отелей и hospitality',
        href: '/drone-hotels-tourism',
        text: 'Если ресторан часть отеля или resort-объекта, снимаем комплекс в одном визите.',
    },
    {
        title: 'Reels и промо-видео для ресторанов',
        href: '/reels',
        text: 'Дрон показывает панораму, reels добавляет темп внутри заведения.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Кинематографичный проход через пространство с эффектом присутствия.',
    },
];

const nicheMistakes: string[] = [
    'Снимать только еду и не показывать пространство.',
    'Публиковать видео без сильного первого кадра-крюка.',
    'Снимать в пиковые часы с шумом и случайными людьми в кадре.',
    'Использовать один монтаж для всех форматов вместо адаптации.',
    'Не обновлять контент сезонно.',
];

const freeImprovements: string[] = [
    'Проверьте, есть ли у вас видео в Google Business Profile.',
    'Поставьте в первые фото Instagram и карточки вход, зал и террасу, а не только блюда.',
    'Добавьте короткий stories-тизер маршрута: улица → вход → зал.',
    'Если вход сложный, выложите видео-ориентир «как нас найти».',
    'Стимулируйте гостей публиковать Reels с тегом заведения.',
];

const shootChecklist: string[] = [
    'Определили, что показываем: фасад / терраса / rooftop / интерьер',
    'Выбрали окно с минимальным трафиком гостей',
    'Подготовили вывеску и входную зону',
    'Проверили, что терраса / летняя зона в рабочем состоянии',
    'Согласовали каналы использования: сайт / Instagram / Google / реклама',
    'Решили, нужен ли FPV внутри',
    'Согласовали время с командой заведения',
    'Назначили человека, который встречает съёмочную команду',
    'Подготовили удобный способ передачи файлов (Drive / WeTransfer)',
    'Понимаете, в какой пакет укладывается задача',
];

const seoAnswers: SeoAnswer[] = [
    {
        question: 'Сколько стоит аэросъёмка ресторана в Тбилиси в 2025–2026 году?',
        answer:
            'Стоимость обычно в диапазоне 450–2 200 ₾. Стартовый пакет с коротким clip и фото — 450–650 ₾. Пакет с несколькими deliverables и FPV-элементами — 850–1 250 ₾. Расширенный hospitality pack — 1 450–2 200 ₾. Дополнительные опции считаются отдельно.',
    },
    {
        question: 'Нужны ли разрешения для съёмки дроном над рестораном в Тбилиси?',
        answer:
            'Да. В Грузии полёты БПЛА регулируются GCAA. В городских зонах важно соблюдать ограничения воздушного пространства, особенно рядом с аэропортами и охраняемыми объектами. Мы берём на себя анализ зоны и необходимую подготовку.',
    },
    {
        question: 'Как дрон-съёмка помогает ресторану привлекать гостей?',
        answer:
            'Она отвечает на вопрос «как там вообще?» ещё до визита: показывает фасад, вход, террасу, rooftop и маршрут внутри. Для скрытых локаций Тбилиси это особенно важно, потому что снижает неопределённость у нового гостя.',
    },
    {
        question: 'Можно ли снимать FPV-дроном внутри ресторана?',
        answer:
            'В ряде случаев — да. DJI Avata 2 может работать в закрытых помещениях при заранее согласованном маршруте и достаточном пространстве. Не каждый интерьер подходит для полного fly-through, но аккуратный проход часто реализуем.',
    },
    {
        question: 'Какое оборудование используется для съёмки ресторанов?',
        answer:
            'Для внешней аэросъёмки используем DJI Air 3S (4K, стабилизация, широкий динамический диапазон), для FPV-элементов внутри — DJI Avata 2. Все материалы проходят цветокоррекцию перед выдачей.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Сколько стоит аэросъёмка ресторана в Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Стартовый пакет — от 450 ₾ (до 1,5 часов съёмки, один clip и фотографии). Средний пакет с несколькими deliverables — от 850 ₾. Расширенный hospitality pack — от 1 450 до 2 200 ₾.',
            },
        },
        {
            '@type': 'Question',
            name: 'Нужны ли разрешения для съёмки дроном над рестораном в Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Breus Media работает в соответствии с правилами Агентства гражданской авиации Грузии (GCAA). Разрешительную подготовку берём на себя — клиенту ничего дополнительно оформлять не нужно.',
            },
        },
        {
            '@type': 'Question',
            name: 'Можно ли снимать внутри ресторана?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'В ряде случаев — да. Для интерьеров используется FPV-дрон DJI Avata 2, способный работать в закрытых помещениях. Маршрут согласовывается заранее.',
            },
        },
        {
            '@type': 'Question',
            name: 'Нужно ли закрывать ресторан во время съёмки?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Обычно нет. Мы подбираем окно съёмки до открытия или в тихие часы, чтобы минимально мешать работе заведения.',
            },
        },
        {
            '@type': 'Question',
            name: 'Сколько времени занимает съёмка и монтаж?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Съёмка на месте занимает 1–3 часа. Монтаж и выдача готовых материалов — 3–7 рабочих дней в зависимости от пакета.',
            },
        },
        {
            '@type': 'Question',
            name: 'Что если в день съёмки будет плохая погода?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Мы следим за прогнозом заранее. При неподходящих условиях переносим съёмку на ближайший подходящий день без доплат.',
            },
        },
        {
            '@type': 'Question',
            name: 'Работаете ли вы в других городах Грузии помимо Тбилиси?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Снимаем в Батуми, Кутаиси и других локациях по договорённости, с учётом выезда.',
            },
        },
        {
            '@type': 'Question',
            name: 'Что именно получаю после съёмки?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hero video, вертикальные cuts для Reels и Stories, обработанные фотографии, организованную папку файлов по назначению (сайт, Instagram, Google Business Profile). Всё готово к публикации.',
            },
        },
        {
            '@type': 'Question',
            name: 'Можно ли заказать только фото или только видео?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Да. Стандартный пакет включает оба формата, но состав можно обсудить под конкретную задачу.',
            },
        },
        {
            '@type': 'Question',
            name: 'Как дрон помогает ресторану привлекать гостей?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Видео с дрона отвечает на вопрос гостя «как там вообще?» — до визита. Это ускоряет принятие решения, особенно для ресторанов со скрытым расположением, rooftop-зонами или необычными дворами.',
            },
        },
        {
            '@type': 'Question',
            name: 'Какое оборудование используется?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'DJI Air 3S для внешней аэросъёмки (4K) и DJI Avata 2 для FPV-элементов в интерьере. Все материалы проходят цветокоррекцию перед выдачей.',
            },
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка ресторанов и HoReCa в Тбилиси',
    description:
        'Дрон-съёмка и FPV-видео для ресторанов, кафе, баров и hospitality-объектов в Тбилиси. Показываем фасад, вход, террасу, rooftop и интерьер. Готовые материалы под сайт, Instagram, Google Business Profile и рекламу.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси, Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '450',
        highPrice: '2200',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breusmedia.com/drone-services/drone-restaurants',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Медиапродакшн в Тбилиси. Аэросъёмка, FPV-видео, 360° виртуальные туры, Reels и AI-визуализация для бизнеса.',
    url: 'https://breusmedia.com',
    telephone: '+995',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressRegion: 'Тбилиси',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

export const metadata: Metadata = {
    title: 'Аэросъёмка ресторана в Тбилиси — дрон + FPV | Breus Media',
    description:
        'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 450 ₾. Покажите атмосферу, вход, террасу и зал так, чтобы гость захотел прийти. Результат за 3–7 дней.',
    alternates: {
        canonical: 'https://breusmedia.com/drone-services/drone-restaurants',
    },
    openGraph: {
        title: 'Аэросъёмка ресторана в Тбилиси | Breus Media',
        description:
            'Аэросъёмка и FPV-съёмка ресторанов в Тбилиси от 450 ₾. Покажите атмосферу, вход, террасу и зал так, чтобы гость захотел прийти.',
        url: 'https://breusmedia.com/drone-services/drone-restaurants',
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
        images: [
            {
                url: 'https://breusmedia.com/og/drone-restaurants.jpg',
                width: 1200,
                height: 630,
                alt: 'Аэросъёмка ресторана в Тбилиси — Breus Media',
            },
        ],
    },
};

export default function DroneRestaurantsPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-restaurants-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for HoReCa
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка ресторана в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Дрон и FPV — чтобы гость увидел вашу атмосферу раньше, чем переступит порог.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Тбилисские рестораны всё чаще конкурируют визуальным образом: дворами, rooftop-зонами,
                                видами и маршрутом внутри. Когда это сложно передать словами и одной фотографией, дрон и
                                FPV-камера показывают всё за несколько секунд видео. Мы снимаем экстерьер, подачу места
                                и атмосферу так, как гость воспринимает это в реальности.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Готовые материалы подходят для сайта, Instagram, Google Business Profile и переписки с
                                клиентами.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить проект
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Стартовый пакет для ресторанов и кафе.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Форматы под сайт, Reels и Google</li>
                                    <li>Тбилиси и другие города Грузии</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что именно мы снимаем и зачем это ресторану</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка ресторана — это не просто кадр сверху. Мы показываем место в том порядке, в
                            котором его видит гость: квартал → улица → фасад → вход → интерьер → атмосфера.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон фиксирует внешний контекст: как выглядит заведение с высоты, какая у него терраса,
                            двор или rooftop, как оно вписано в городскую среду.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            FPV-камера добавляет движение внутри: проход через зал, связь зон, глубину интерьера.
                            Материал работает там, где статичное фото теряет силу: соцсети, сайт, объявления,
                            переписка с клиентами и Google-карточка.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому это нужно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Какую задачу это решает</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Дрон-съёмка ресторана решает одну задачу: помочь незнакомому человеку понять, стоит ли
                            прийти именно к вам.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Обычное фото показывает отдельный кадр. Видео с дрона и FPV показывает место в движении:
                            как добраться, что снаружи, каков масштаб и как выглядит внутри.
                        </p>
                    </div>

                    <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-white/78 md:grid-cols-2">
                        <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">Гость, который ни разу не был, понимает куда идёт.</li>
                        <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">Терраса, двор или rooftop перестают быть «тайным преимуществом».</li>
                        <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">Сезонный контент готов к публикации без долгих согласований.</li>
                        <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">Google Business Profile получает видео, которое усиливает карточку.</li>
                        <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 md:col-span-2">
                            Менеджер по event-мероприятиям может отправить ссылку вместо набора отдельных фотографий.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">С какими проблемами приходят к нам</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это влияет на выручку</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Дрон-съёмка не продаёт ужины напрямую, но сокращает дистанцию между «не знал» и «пришёл».
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {earningsMechanics.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы теряете без визуального контента</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Визуальное решение о ресторане принимается за первые 5–10 секунд. Если в этот момент у вас
                            только фото блюд, а у конкурента рядом — пролёт над rooftop, выбор часто уходит к нему.
                        </p>
                    </div>

                    <ul className="mt-8 space-y-3 text-sm leading-relaxed text-white/78">
                        {losses.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 rounded-[12px] border border-[#FFD23F]/30 bg-[#111111] px-5 py-4 text-sm leading-relaxed text-white/82">
                        Один съёмочный визит до открытия или в тихий день закрывает этот пробел на 6–12 месяцев
                        контентного цикла.
                    </p>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что именно вы получите</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">По умолчанию в любом пакете</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDefault.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Зоны съёмки</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootingZones.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Опциональные добавки</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {optionalAddons.map((item) => (
                                    <li key={item}>+ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете на руки</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            После съёмки вы получаете не raw-папку, а организованный пакет файлов, готовых к
                            использованию.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Структура выдачи</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>`/website/` — hero video и кадры для секций сайта</li>
                                <li>`/instagram-reels/` — вертикальные clips с динамичным стартом</li>
                                <li>`/google-business/` — короткий clip и exterior stills</li>
                                <li>`/archive/` — обработанные материалы для дальнейшего цикла</li>
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Технические параметры</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>Съёмка в 4K (DJI Air 3S)</li>
                                <li>Цветокоррекция и стабилизация включены</li>
                                <li>Форматы: MP4 (H.264/H.265), JPG / WebP по запросу</li>
                                <li>Передача через Google Drive или WeTransfer</li>
                            </ul>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Сроки: 3–7 рабочих дней после съёмки (зависит от пакета).
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой формат подходит именно вашему заведению? Расскажите про место — скажем,
                            что имеет смысл снимать.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Обсудить проект
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                Посмотреть цены
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кто и как использует этот контент</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {roleScenarios.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему в Тбилиси это особенно важно</h2>
                        <p className="mt-5 leading-relaxed text-white/74">
                            В Тбилиси многие рестораны спрятаны: во дворах, на этажах, в переулках старого города, за
                            неприметными дверями. Это атмосферно, но гостю бывает сложно понять, куда идти и что его
                            ждёт.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/74">
                            Дрон закрывает этот пробел: показывает квартал, вход и пространство сверху, делая заведение
                            понятным для нового человека.
                        </p>
                        <ul className="mt-6 space-y-2 text-sm leading-relaxed text-white/82">
                            <li>• Вид на Мтацминда, Нарикалу или реку — панорама считывается сразу.</li>
                            <li>• Внутренние дворы и балконы старых кварталов становятся видимыми для гостя.</li>
                            <li>• Rooftop-концепции в центре и на Авлабари показывают масштаб локации.</li>
                            <li>• Летние террасы на берегу Куры легче продвигать до начала сезона.</li>
                            <li>• Ресторан в подвале или на верхнем этаже получает ясный визуальный маршрут.</li>
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-white/74">
                            Работаем в Тбилиси, Батуми и других локациях Грузии по согласованию.
                        </p>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры и демо</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Реальные кейсы по ресторанной нише появятся после первых проектов. Пока показываем
                            демо-форматы, которые отражают логику съёмки и итоговую подачу.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {demoCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему это работает</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {evidenceCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Вопросы тех, кто заказывает впервые" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы о цене, сроках и процессе"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему мы</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмка ресторана занимает 1–3 часа — обычно до открытия или в тихие часы" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены в грузинских лари (₾), без скрытых доплат.</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-sm text-white/78">
                                    <span className="font-semibold text-white">Срок выдачи:</span> {card.timeline}
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-white/58">
                                    <span className="font-semibold text-white/75">Не входит:</span> {card.exclusions}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Опциональные добавки</p>
                        <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нужен расчёт под ваш конкретный объект? Напишите — скажем, что имеет смысл снимать и в
                            какой пакет это укладывается.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типичные ошибки в визуальном продвижении ресторана</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {nicheMistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
                            alt="Терраса ресторана в Тбилиси"
                            loading="lazy"
                            decoding="async"
                            className="h-44 w-full rounded-[12px] border border-[#2a2a2a] object-cover"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80"
                            alt="Интерьер ресторана"
                            loading="lazy"
                            decoding="async"
                            className="h-44 w-full rounded-[12px] border border-[#2a2a2a] object-cover"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
                            alt="Городской вид на ресторан"
                            loading="lazy"
                            decoding="async"
                            className="h-44 w-full rounded-[12px] border border-[#2a2a2a] object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что сделать прямо сейчас — бесплатно</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeImprovements.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист перед съёмкой</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Расширенные ответы для SEO и AI-поиска</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {seoAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Дополнительные материалы</h2>
                        <div className="mt-8 grid gap-4">
                            <Link
                                href="/360-tour-restaurants"
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                360° тур для ресторана
                            </Link>
                            <Link
                                href="/drone-hotels-tourism"
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                Аэросъёмка отелей
                            </Link>
                            <Link
                                href="/drone-fpv-cinema"
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                FPV-съёмка
                            </Link>
                            <Link
                                href="/drone-services"
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                Все услуги аэросъёмки
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если вы дочитали до этого места, значит вопрос с визуальным контентом для ресторана
                            актуален. Следующий шаг — расскажите о заведении, и мы предложим конкретный формат.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить проект</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Расскажите о заведении — скажем, какой формат подойдёт и в какой бюджет это
                                    укладывается.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Альтернативные контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            @breusmedia
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <DroneRestaurantsContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-solar
Lines: 1174
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { SolarContactForm } from './SolarContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    duration: string;
    delivery: string;
    audience: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-solar';
const PAGE_TITLE = 'Инспекция солнечных панелей дроном в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Дрон-инспекция солнечных панелей в Тбилиси и по всей Грузии. Видеофиксация состояния, выявление загрязнений и дефектов. От 250 ₾. Breus Media +995574619393';

const serviceTypes: CardItem[] = [
    {
        title: 'Жилая инспекция',
        text: 'Для частных домов и вилл с небольшими кровельными PV-системами. Быстрый осмотр, фото с отметками и базовый видеоотчёт.',
    },
    {
        title: 'Коммерческая инспекция',
        text: 'Для гостиниц, складов, офисных зданий и производственных площадок. Охватывает несколько кровельных секций и формирует понятную базу для технического обслуживания.',
    },
    {
        title: 'Инспекция солнечных парков',
        text: 'Для наземных PV-массивов. Маршрутный облёт, визуальная карта состояния и подготовка материалов для эксплуатационной документации.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Владелец дома с солнечными панелями',
        text: 'Хотите понять, не упало ли что-то на панели, всё ли в порядке после зимы или урагана, и при этом не лезть на крышу самому.',
    },
    {
        title: 'Управляющий гостиницей или апартаментами',
        text: 'Установка на крыше работает, но непонятно, когда её осматривали в последний раз. Дрон даёт полную визуальную картину за час без организации лесов.',
    },
    {
        title: 'Владелец коммерческой недвижимости или склада',
        text: 'Солнечные панели это инвестиция. Если видимые дефекты не фиксировать вовремя, потери выработки незаметно растут неделями.',
    },
    {
        title: 'Инвестор или девелопер',
        text: 'Принимаете объект у подрядчика после монтажа или покупаете объект с уже установленной системой. Дрон-документация даёт независимую картину до подписания.',
    },
    {
        title: 'Сервисная или монтажная компания',
        text: 'Нужна визуальная база перед выездом бригады. Дрон-инспекция сокращает время на месте и помогает планировать работы заранее.',
    },
    {
        title: 'Управляющая компания или оператор объектов',
        text: 'Несколько объектов и несколько кровель. Регулярная визуальная документация состояния PV-систем становится частью нормального цикла обслуживания.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'На крышу лишний раз не залезешь',
        text: 'Кровельный доступ требует лесов, страховки и времени. Осмотр откладывается, а мелкий дефект превращается в дорогую замену.',
    },
    {
        title: 'Панели работают, значит всё нормально',
        text: 'Загрязнение на уровне 10–15% снижает выработку незаметно. Потери становятся видны только в счёте за несколько месяцев.',
    },
    {
        title: 'Непонятно, что фотографировать и как описывать',
        text: 'Без визуальной документации сложно объяснить подрядчику, что и где почистить или проверить.',
    },
    {
        title: 'После монтажа ничего не зафиксировали',
        text: 'Нет базовой фотодокументации состояния на момент установки. Потом трудно отличить новый дефект от монтажного.',
    },
    {
        title: 'После шторма или града непонятно, что проверять',
        text: 'Нужна быстрая и полная картина видимых повреждений, чтобы оценить масштаб без пешего обхода каждой панели.',
    },
    {
        title: 'Арендатор или покупатель задаёт вопросы, а документов нет',
        text: 'Визуальный отчёт о состоянии PV-системы это часть технической документации объекта и аргумент на переговорах.',
    },
];

const earnsItems: string[] = [
    'Снижаете потери выработки: один загрязнённый сегмент тянет строку вниз, а своевременное обнаружение сохраняет генерацию.',
    'Принимаете решение об обслуживании с данными на руках, а не по ощущениям.',
    'Ставите подрядчику конкретную задачу и сокращаете время переговоров и риск повторного выезда.',
    'Строите техническую документацию объекта для продажи, аренды или банковского финансирования.',
];

const savesItems: string[] = [
    'Не тратите деньги на полный выезд сервисной бригады на всякий случай: сначала визуальный чек, потом точечные работы.',
    'Не допускаете, чтобы мелкий монтажный дефект превратился в замену нескольких панелей через год.',
    'Не принимаете объект вслепую: дрон-документация фиксирует состояние на момент сдачи.',
    'Не пропускаете страховой случай: видимые повреждения после природного события зафиксированы датой и местом.',
];

const shootDayItems: string[] = [
    'Выезд оператора с дроном на объект',
    'Предполётная проверка воздушного пространства и условий',
    'Маршрутный облёт массива панелей с нескольких высот',
    'Фотосъёмка поверхности панелей в высоком разрешении',
    'Видеозапись облёта для общего обзора состояния',
    'Отметка видимых аномалий в ходе съёмки при необходимости',
];

const finalResultItems: string[] = [
    'Пакет фотографий высокого разрешения (JPEG/RAW по договорённости)',
    'Обзорное видео состояния массива (MP4)',
    'Кадры с отмеченными зонами видимых проблем',
    'PDF-отчёт с визуальным резюме (в пакетах Standard и Full)',
    'Передача файлов через облачное хранилище в течение 1–3 рабочих дней',
    'Комментарий оператора по замеченным деталям (голосовой или текстовый)',
];

const useCases: CardItem[] = [
    {
        title: 'Плановый осмотр раз в сезон',
        text: 'Весной или осенью быстро проверить состояние панелей, зафиксировать загрязнение и запланировать чистку до пика выработки.',
    },
    {
        title: 'Приёмка после монтажа',
        text: 'Подрядчик сдал работу, а дрон фиксирует реальное состояние системы на старте независимо и с датой.',
    },
    {
        title: 'После шторма, града или сильного ветра',
        text: 'Быстрая визуальная оценка без подъёма на крышу и без длительного ожидания сервисной бригады.',
    },
    {
        title: 'Подготовка к продаже или аренде объекта',
        text: 'Покупатель или арендатор хочет знать состояние системы. Визуальный отчёт становится частью технического пакета.',
    },
    {
        title: 'Оценка эффективности обслуживания',
        text: 'После чистки или ремонта фиксируете, что именно сделано и сохраняете историю обслуживания объекта.',
    },
    {
        title: 'Контроль нескольких объектов',
        text: 'Один оператор, несколько адресов, единый формат отчётов и регулярная документация состояния PV-активов.',
    },
];

const examples: CardItem[] = [
    {
        title: 'Жилой объект: дом с кровельными панелями, Тбилиси',
        text: 'Владелец заметил снижение показаний инвертора. Дрон-осмотр выявил загрязнение от птиц и строительной пыли. Подрядчик по чистке получил точные кадры и выехал прицельно.',
    },
    {
        title: 'Коммерческий объект: склад с промышленными панелями, регион Грузии',
        text: 'Управляющая компания проводила плановую инспекцию. Дрон зафиксировал смещение двух модулей и следы ржавчины на рамах. Подрядчик получил точный адрес дефектов без полного выезда.',
    },
    {
        title: 'Приёмка после монтажа: мини-отель, Батуми',
        text: 'Перед финальным расчётом с монтажной компанией провели дрон-инспекцию. Зафиксированы дата и состояние всех панелей и монтажных узлов. Отчёт добавлен в технический архив объекта.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '80–90%',
        label: 'Экономия времени',
        text: 'При осмотре крупного массива по сравнению с ручным обходом с лесов.',
    },
    {
        value: '10–15%',
        label: 'Типичные потери выработки',
        text: 'От загрязнений, которые накапливаются без регулярного визуального контроля.',
    },
    {
        value: '1–2 часа',
        label: 'Среднее время облёта',
        text: 'Для кровельного массива площадью до 500 м².',
    },
    {
        value: '3 рабочих дня',
        label: 'Максимальный срок выдачи',
        text: 'Полного пакета фотоматериалов после съёмки.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что именно показывает дрон-инспекция солнечных панелей?',
        answer:
            'Дрон фиксирует видимое состояние поверхностей панелей и монтажной системы: загрязнения, следы птиц, трещины стекла, деламинацию, смещения модулей, ржавчину, затенение и мусор. Это не электрическая диагностика, а визуальная документация.',
    },
    {
        question: 'Это заменяет тепловизионную проверку?',
        answer:
            'Нет. Тепловизор выявляет электрические неисправности и горячие точки, которые не видны обычной камерой. Визуальная дрон-инспекция это первый шаг, чтобы понять внешнее состояние системы.',
    },
    {
        question: 'Зачем дрон, если можно посмотреть с земли?',
        answer:
            'С земли видно только часть рядов под углом. Дрон даёт вертикальный вид сверху и реальную поверхность каждой панели, включая верхние и центральные секции большого массива.',
    },
    {
        question: 'Можно ли летать в Тбилиси и других городах Грузии?',
        answer:
            'Коммерческие полёты регулируются GCAA. Перед каждым вылетом проверяем воздушное пространство и ограничения. Если в зоне есть ограничения, предупреждаем заранее и согласовываем условия.',
    },
    {
        question: 'Как погода влияет на съёмку?',
        answer:
            'Сильный ветер, дождь и очень яркое солнце в зените ухудшают качество результата. Оптимальные условия: переменная облачность и ветер до 8–10 м/с. Дату согласовываем с учётом прогноза.',
    },
    {
        question: 'Сколько времени занимает инспекция?',
        answer:
            'Небольшая жилая кровля обычно 30–60 минут на месте. Коммерческий объект или мини-парк от 1 до 3 часов. Точные сроки зависят от площади и объёма документации.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит инспекция солнечных панелей дроном в Грузии?',
        answer:
            'Базовая проверка небольшой установки от 250 ₾. Коммерческий объект с отчётом от 490 ₾. Промышленный парк или крупный массив от 890 ₾ и выше в зависимости от площади и детализации.',
    },
    {
        question: 'Что входит в итоговый пакет?',
        answer:
            'Базово это фотопакет высокого разрешения и обзорное видео. В расширенных пакетах добавляются PDF-отчёт с визуальным резюме, кадры с отмеченными зонами и комментарий оператора.',
    },
    {
        question: 'Нужны ли разрешения GCAA для этого вида съёмки?',
        answer:
            'Перед каждым вылетом проверяем воздушное пространство через официальные карты GCAA. В большинстве частных и коммерческих зон допразрешения не требуются, но для отдельных районов условия могут отличаться.',
    },
    {
        question: 'В каких форматах передаются файлы?',
        answer:
            'Фото в JPEG или RAW по запросу. Видео в MP4 до 4K. PDF-отчёт в расширенных пакетах. Передача через Google Drive или другое облако.',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Базируемся в Тбилиси и работаем по всей Грузии: Батуми, Кутаиси, Рустави и другие локации. Для выездов за пределы Тбилиси транспортные расходы рассчитываются отдельно.',
    },
    {
        question: 'Можно заказать регулярные инспекции на несколько объектов?',
        answer:
            'Да. Для управляющих компаний и операторов нескольких объектов обсуждаем периодичность, единый формат отчётности и стоимость в рамках абонемента.',
    },
    {
        question: 'Что если объект ещё строится и панели монтируются?',
        answer:
            'Инспекция на этапе строительства и после монтажа доступна как отдельный формат для приёмки работ подрядчика и фиксации состояния по этапам.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Специализация на визуальной документации объектов',
        text: 'Мы документируем реальное состояние активов: солнечные панели, фасады, кровли и стройплощадки.',
    },
    {
        title: 'Работаем на DJI Air 3S',
        text: 'Съёмка до 4K с возможностью фиксировать детали с безопасного расстояния без физического подъёма.',
    },
    {
        title: 'Понимаем задачу, а не просто летаем',
        text: 'Перед выездом уточняем, что именно нужно задокументировать, в каком формате и для кого будет использоваться результат.',
    },
    {
        title: 'Соблюдаем правила полётов',
        text: 'Проверяем зоны GCAA перед каждым вылетом и работаем в разрешённом воздушном пространстве.',
    },
    {
        title: 'Быстрая доставка материалов',
        text: 'Готовый пакет передаём в течение 1–3 рабочих дней. Экстренная обработка по договорённости.',
    },
    {
        title: 'Один контакт от звонка до передачи файлов',
        text: 'Оператор и продюсер это один человек на вашем проекте, без перекидывания задачи между отделами.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Уточнение задачи',
        text: 'Вы описываете объект: адрес, количество панелей или площадь, и что нужно зафиксировать. Мы сразу говорим, что реально и сколько это займёт.',
    },
    {
        step: 'Шаг 2',
        title: 'Проверка локации и даты',
        text: 'Проверяем зону GCAA, прогноз погоды и согласовываем время выезда. Обычно это 1–2 рабочих дня.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмка на объекте',
        text: 'Оператор проводит предполётную проверку и облетает массив. Обычно от 30 минут до 3 часов в зависимости от масштаба.',
    },
    {
        step: 'Шаг 4',
        title: 'Обработка материалов',
        text: 'Отбираем лучшие кадры, отмечаем проблемные зоны и подготавливаем PDF-отчёт в соответствующих пакетах.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём пакет через облачное хранилище и добавляем комментарий по замеченным деталям в текстовом или голосовом формате.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Basic Solar Check',
        price: 'от 250 ₾',
        duration: 'до 1 часа на объекте',
        delivery: '1–2 рабочих дня',
        audience: 'Для частного дома, виллы или небольшого бизнеса с одной кровельной секцией.',
        items: [
            'Визуальный облёт жилой или небольшой коммерческой кровли',
            'Фотопакет высокого разрешения (до 30–40 кадров)',
            'Обзорное видео состояния установки (до 3 минут)',
            'Передача через облачное хранилище',
        ],
        addons: ['Дополнительные ракурсы: +50 ₾', 'Ускоренная обработка за 24 часа: +80 ₾'],
    },
    {
        title: 'Commercial Inspection',
        price: 'от 490 ₾',
        duration: '1–2 часа на объекте',
        delivery: '2–3 рабочих дня',
        audience: 'Для гостиниц, складов, офисных зданий и объектов с несколькими PV-секциями.',
        items: [
            'Маршрутный облёт коммерческого объекта с несколькими секциями',
            'Расширенный фотопакет (до 80 кадров)',
            'Обзорное видео и дополнительные ракурсы по секциям',
            'Кадры с отмеченными зонами видимых дефектов или загрязнений',
            'PDF-отчёт с визуальным резюме состояния',
            'Комментарий оператора по выявленным деталям',
        ],
        addons: ['RAW-фото: +100 ₾', 'Дополнительный отчёт на английском: +90 ₾'],
        popular: true,
    },
    {
        title: 'Site Survey',
        price: 'от 890 ₾',
        duration: 'от 2 часов (зависит от размера парка)',
        delivery: '3–5 рабочих дней',
        audience: 'Для солнечных парков, крупных производственных площадок и управляющих компаний.',
        items: [
            'Маршрутный облёт крупного массива или наземного PV-парка',
            'Полный фотопакет с охватом по секциям и рядам',
            'Видео-документация с нескольких высот и ракурсов',
            'Кадры с отмеченными аномалиями по каждой зоне',
            'PDF-отчёт с визуальным резюме и секционной разбивкой',
            'Комментарии оператора по каждой зоне',
            'Архив материалов для подрядчика, страховой или инвестора',
        ],
        addons: [
            'Выезд за пределы Тбилиси: транспортные расходы по факту',
            'Повторный облёт после ремонта: -20% от пакета',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Инспекция кровли дроном',
        href: '/drone-services/drone-facade',
        text: 'Если панели на кровле и нужно проверить не только панели, но и покрытие, объединяем в один вылет.',
    },
    {
        title: 'Инспекция фасадов дроном',
        href: '/drone-services/drone-facade',
        text: 'Для коммерческих зданий, где PV-система часть более широкой задачи по документации состояния объекта.',
    },
    {
        title: 'Мониторинг строительства дроном',
        href: '/drone-services/drone-construction',
        text: 'Если система ещё монтируется и нужна фиксация хода установки или приёмка работ.',
    },
    {
        title: 'Аэросъёмка объектов недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Если после инспекции нужен маркетинговый материал по объекту для продажи или аренды.',
    },
];

const mistakes: string[] = [
    'Работает, значит нормально: установка продолжает генерировать даже при ощутимых потерях выработки.',
    'Инспекция только после поломки, а не до: мелкие дефекты дешевле устранять на ранней стадии.',
    'Нет базовой документации как было при монтаже, из-за чего невозможно отследить динамику.',
    'Передача объекта без визуальной фиксации состояния системы и риском споров в будущем.',
    'Привлечение сервисной бригады вслепую без предварительного визуального отчёта.',
    'Игнорирование сезонных факторов: пыль, листопад и осадки ускоряют загрязнение и потери.',
];

const freeTips: string[] = [
    'Сравните данные инвертора за похожие периоды этого и прошлого года. Разница более 10% при схожей погоде это повод для осмотра.',
    'Осмотрите панели с земли через бинокль или зум-камеру, чтобы заметить крупный мусор и явные загрязнения.',
    'Проверьте затенение от новых объектов: деревьев, пристроек, соседних строений.',
    'Уточните дату последнего сервисного осмотра. Если прошло больше года без документации, базовый визуальный чек уже нужен.',
    'Сфотографируйте паспортные данные инвертора и схему подключения, чтобы собрать рабочий архив системы.',
];

const checklist: string[] = [
    'Знаю адрес объекта и могу обеспечить доступ оператору',
    'Есть понимание количества панелей или площади установки',
    'Понимаю цель: плановый осмотр, проверка после события или приёмка',
    'Готов согласовать дату с учётом погодного окна и 2–3 вариантов по времени',
    'Определил нужный формат результата: фото, видео или PDF-отчёт',
    'Понимаю, что визуальная инспекция не заменяет тепловизионную и электрическую диагностику',
    'Если объект в зоне ограничений, готов обсудить это заранее',
    'Есть контактное лицо на объекте, которое встретит оператора',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Чем дрон-инспекция отличается от обычной проверки с крыши?',
        answer: [
            'Главное отличие это доступ и скорость. Ручной осмотр требует лесов, страховки и нескольких часов работы на кровле.',
            'Дрон фиксирует поверхность панелей сверху под рабочим углом за 30–90 минут в зависимости от объекта.',
            'После дрон-инспекции остаётся пакет фото с датой и координатами, а не только устные выводы.',
        ],
    },
    {
        question: 'Когда лучше проводить инспекцию солнечных панелей в Грузии?',
        answer: [
            'Оптимальные периоды: весна (апрель–май) и осень (сентябрь–октябрь). Весной удобно убрать зимние загрязнения до пика выработки, осенью зафиксировать состояние после сезона.',
            'Для Тбилиси особенно актуальна весенняя пыльная нагрузка. Для западной Грузии важна влажность и биологические отложения.',
            'Внеплановую инспекцию делают после ветра, града, снегопада или строительных работ рядом с объектом.',
        ],
    },
    {
        question: 'Может ли дрон-инспекция заменить тепловизионную проверку?',
        answer: [
            'Нет, это разные инструменты. Визуальный облёт показывает внешние проблемы: загрязнения, физические повреждения и монтажные дефекты.',
            'Тепловизор нужен для выявления невидимых глазом электрических неисправностей и горячих точек.',
            'Практически визуальная инспекция это первый шаг, после которого принимается решение о более глубокой диагностике.',
        ],
    },
    {
        question: 'Сколько можно потерять на выработке из-за незамеченных дефектов?',
        answer: [
            'Загрязнение на уровне 10% может дать сопоставимое снижение выработки строки, особенно в последовательных соединениях.',
            'Для системы 10 кВт потери могут составлять порядка 1 000–1 500 кВт·ч в год в зависимости от инсоляции и характера загрязнения.',
            'Это сотни лари в год, которые теряются без явного аварийного сигнала.',
        ],
    },
    {
        question: 'Как использовать материалы после инспекции?',
        answer: [
            'Фото и видео передаются через облако и используются как техническое задание подрядчику по чистке или ремонту.',
            'Материалы можно включать в техдокументацию объекта при продаже, аренде или передаче в управление.',
            'При природных событиях отчёт помогает в коммуникации со страховой, а в динамике показывает изменения между инспекциями.',
        ],
    },
];

const navigationLinks = [
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Мониторинг строительства', href: '/drone-services/drone-construction' },
    { label: 'Инспекция фасадов', href: '/drone-services/drone-facade' },
    { label: 'FPV-съёмка', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Инспекция солнечных панелей дроном в Тбилиси',
    description:
        'Визуальная дрон-инспекция солнечных панелей для частных, коммерческих и промышленных объектов в Грузии. Фотофиксация, обзорное видео, PDF-резюме.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: [
        {
            '@type': 'Place',
            name: 'Тбилиси, Грузия',
        },
        {
            '@type': 'Place',
            name: 'Грузия',
        },
    ],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '890',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Дрон-инспекция и визуальная документация объектов в Тбилиси и по всей Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneSolarPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-solar-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]"
                />
                <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent"
                />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Solar Inspection
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Осмотр солнечных панелей дроном для частных, коммерческих и промышленных объектов в
                                Грузии
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Увидите состояние каждой панели без подъёма на крышу. Результат: фотофиксация,
                                обзорное видео и понятные данные для ремонта или обслуживания.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Дрон облетает массив солнечных панелей и фиксирует видимое состояние: загрязнения,
                                затенение, повреждения стекла, отслоения и монтажные дефекты. Это документация
                                состояния актива без лесов, без остановки генерации и без лишних людей на крыше.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Узнать стоимость
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Тбилиси и вся Грузия. Частные и коммерческие объекты.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">30–180 мин</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 дня</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S, визуальная документация</li>
                                    <li>Фото, видео, PDF-резюме по пакетам</li>
                                    <li>Проверка зон GCAA перед вылетом</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое дрон-инспекция солнечных панелей</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это воздушная визуальная документация состояния фотовольтаических систем. Дрон облетает
                            массив с нескольких высот, фиксирует поверхности панелей и монтаж в высоком разрешении, а
                            вы получаете чёткую картину состояния установки.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Ключевое слово здесь это видимое состояние. Такая услуга хорошо выявляет загрязнения,
                            затенение, трещины стекла, деламинацию, смещение модулей, ржавчину на рамах и мусор на
                            панелях. Она не заменяет тепловизионную диагностику и электрические испытания.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Результат это задокументированное состояние актива, понятное вам, подрядчику по
                            обслуживанию и страховой компании.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта услуга</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что обычно мешает вовремя заметить проблему</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                    Боль {index + 1}
                                </p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold md:text-3xl">Почему это влияет на деньги: помогает получить</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                {earnsItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h2 className="text-2xl font-bold md:text-3xl">Почему это влияет на деньги: помогает не терять</h2>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/74">
                                {savesItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, в каком состоянии ваша установка? Пришлите адрес и примерное количество панелей
                            и мы скажем, что реально проверить и сколько это займёт.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать нам
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит и что вы получаете</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Когда это нужно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                    Пример {index + 1}
                                </p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Несколько цифр для контекста</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Если вы слышите об этом впервые" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Практические вопросы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Весь процесс от заявки до папки с файлами обычно занимает 3–5 рабочих дней." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/70">Длительность съёмки: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/70">Срок выдачи: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                        Доп. опции
                                    </p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой формат нужен? Пришлите адрес объекта и мы за 10 минут скажем, в какой
                            пакет это укладывается и стоит ли вообще летать.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что чаще всего идёт не так</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                    Ошибка {index + 1}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно проверить самостоятельно прямо сейчас</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li
                                key={item}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76"
                            >
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Готовность к дрон-инспекции: 8 пунктов</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li
                                key={item}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78"
                            >
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на частые вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Другие услуги аэросъёмки</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {navigationLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/78 transition-colors hover:border-[#FFD23F]/50"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить задачу по вашему объекту</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите адрес, количество панелей и цель проверки. Подскажем подходящий пакет,
                                    сроки и формат результата под вашу задачу.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <SolarContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-solar-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </main>
    );
}

```
---
---

## /drone-services/drone-sport
Lines: 1216
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { SportContactForm } from './SportContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type MistakeItem = {
    title: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type ExampleItem = {
    tag: string;
    title: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-sport';
const PAGE_TITLE = 'Аэросъёмка спорткомплекса в Тбилиси — дрон и FPV-видео';
const PAGE_DESCRIPTION =
    'Дрон и FPV-видео для фитнес-клубов, теннисных кортов и спортивных комплексов в Тбилиси. Съёмочный день от 490 ₾. Готовый ролик за 5–7 дней. Breus Media.';

const serviceTypes: CardItem[] = [
    {
        title: 'Аэросъёмка экстерьера',
        text: 'Облёт объекта с высоты: территория, парковка, фасад, окружение и вид на район. Подходит для сайта, объявлений и базового контент-пакета.',
    },
    {
        title: 'FPV-пролёт по залам',
        text: 'Динамичный непрерывный полёт внутри помещения: между тренажёрами, над бассейном, через корт. Создаёт ощущение движения и масштаба.',
    },
    {
        title: 'Промо-ролик объекта',
        text: 'Смонтированный ролик 60–90 секунд с музыкой и цветокоррекцией. Сочетает аэрокадры, внутренние пролёты и финал с логотипом.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Фитнес-клубы и тренажёрные залы',
        text: 'Для привлечения новых участников, запуска рекламы и обновления страниц в соцсетях. Особенно ценно при открытии нового клуба или после ремонта.',
    },
    {
        title: 'Теннисные корты и академии',
        text: 'Показать качество покрытия, освещение, количество кортов и инфраструктуру. Тбилисский рынок тенниса растёт, и клиенты сравнивают варианты онлайн.',
    },
    {
        title: 'Бассейны и велнес-центры',
        text: 'Передать чистоту воды, простор, атмосферу лаунж-зоны и уровень сервиса. Особенно эффективны съёмки открытых бассейнов с высоты.',
    },
    {
        title: 'Спортивные комплексы с несколькими зонами',
        text: 'Один ролик охватывает все зоны: зал, корты, бассейн, ресепшн. Клиент видит объём, а не отдельные комнаты.',
    },
    {
        title: 'Организаторы турниров и соревнований',
        text: 'Съёмка событий с воздуха: масштаб, участники, трибуны, ход игры. Готовый контент для спонсоров, партнёров и итогового репортажа.',
    },
    {
        title: 'Застройщики и инвесторы спортивной инфраструктуры',
        text: 'Аэросъёмка для презентации объекта на этапе строительства или сдачи: инвесторам, партнёрам и арендаторам.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фотографии «из угла зала» делают всё тесным',
        text: 'Даже большой современный зал на статичном фото выглядит маленьким и неопрятным. Потенциальный клиент уходит к конкуренту с более сильным визуалом.',
    },
    {
        title: 'Нет атмосферы — нет эмоции',
        text: 'Люди выбирают клуб не только по оборудованию, но и по ощущению. Если видео не передаёт энергию, человек не чувствует, хочет ли он здесь заниматься.',
    },
    {
        title: 'Одни и те же фото годами',
        text: 'Сайт обновили, ремонт сделали, новый зал открыли, а в соцсетях всё ещё фото с 2022 года. Это снижает доверие нового клиента.',
    },
    {
        title: 'Нечем отличиться в рекламе',
        text: 'Таргет фитнес-клубов в Тбилиси работает хуже со стандартным визуалом. Ролик с дрона останавливает скроллинг и удерживает внимание.',
    },
    {
        title: 'Сложно показать масштаб',
        text: 'Если у вас 5 кортов, 25-метровый бассейн и 800 кв.м тренажёрного зала, обычная камера не передаёт это в одном кадре. Дрон передаёт.',
    },
    {
        title: 'Контент делается редко и дорого',
        text: 'Когда визуал появляется раз в год, клуб не может регулярно обновлять страницы и запускать рекламные форматы.',
    },
];

const earnList: string[] = [
    'Видео увеличивает время просмотра страницы и профиля в соцсетях: потенциальный клиент дольше изучает объект и чаще оставляет заявку.',
    'Промо-ролик с FPV работает как постоянный менеджер по продажам: его смотрят и без участия вашего персонала.',
    'Аэрокадры поднимают воспринимаемый класс объекта в Instagram, Google и рекламе, что помогает обосновывать более высокий ценник.',
    'Один съёмочный день закрывает контент на 3–6 месяцев: ролик на сайт, серия Reels, фото для Google Business и вертикали для рекламы.',
];

const saveList: string[] = [
    'Вы не теряете клиентов из-за слабого онлайн-присутствия, когда конкурент визуально выглядит сильнее.',
    'Не сливаете бюджет на рекламу с плохим визуалом: качественное видео снижает стоимость привлечения клиента.',
    'Не тратите время на базовые объяснения: клиент после просмотра ролика приходит уже «прогретым».',
    'Не упускаете момент запуска или обновления: первые недели после открытия или ремонта можно использовать максимально.',
];

const shootDayItems: string[] = [
    'Брифинг и согласование маршрута съёмки до выезда',
    'Аэросъёмка экстерьера и территории (DJI Air 3S)',
    'FPV-пролёт внутри помещений, если включён в пакет (DJI Avata 2)',
    'Стабилизаторная или наземная досъёмка деталей (по необходимости)',
    'Резервные дубли ключевых кадров',
    'Проверка материала на месте — вы видите результат ещё на съёмке',
];

const finalResultItems: string[] = [
    'Смонтированный промо-ролик 60–90 секунд (для сайта и YouTube)',
    '2–3 вертикальные короткие версии 15–30 секунд (для Reels и Stories)',
    '10–15 аэрофото в формате 4K JPEG/WebP (для сайта, Google Business и соцсетей)',
    'Цветокоррекция и саунд-дизайн в финальных версиях',
    'Передача файлов через защищённую ссылку (Google Drive / WeTransfer)',
    'Исходники — по договорённости (включены в пакет Premier)',
];

const useCases: CardItem[] = [
    {
        title: 'Открытие нового клуба или зала',
        text: 'Видео запускается до открытия, создаёт ожидание и помогает заполнить запись в первые недели.',
    },
    {
        title: 'Обновление контента после ремонта',
        text: 'Сделали ремонт или расширили зону — новый ролик сразу показывает изменения без лишних объяснений.',
    },
    {
        title: 'Запуск таргетированной рекламы',
        text: 'Видео с дрона в Instagram/Facebook-кампаниях обычно даёт ниже стоимость просмотра и выше CTR, чем статичные фото.',
    },
    {
        title: 'Презентация инвесторам или арендаторам',
        text: 'Если вы ищете партнёров или привлекаете инвестиции, аэровидео становится стандартом деловой презентации.',
    },
    {
        title: 'Съёмка турнира или корпоративного события',
        text: 'Один съёмочный день закрывает контент для итогового отчёта, публикаций и архива.',
    },
    {
        title: 'Контент для Google Business и 2GIS',
        text: 'Видео и аэрофото в карточке объекта повышают количество кликов и доверие в локальном поиске.',
    },
];

const examples: ExampleItem[] = [
    {
        tag: 'Фитнес-клуб',
        title: 'Fullview — обзорный ролик зала',
        text: 'Комбинированный ролик: аэросъёмка здания в районе Сабуртало, FPV-пролёт через кардио-зону и зону свободных весов, финальный кадр с логотипом. Длительность 75 секунд. Смонтирован в горизонтальной и вертикальной версиях.',
    },
    {
        tag: 'Теннисный корт',
        title: 'Court Aerial — аэрообзор кортов',
        text: 'Серия из 4 аэрокадров комплекса с 6 кортами в районе Ваке: общий план с высоты, облёт по периметру, крупный план покрытия и освещения. Используется в Google Business Profile и как Hero-медиа на сайте академии.',
    },
    {
        tag: 'Бассейн и велнес',
        title: 'Drift — FPV-тур по велнес-зоне',
        text: 'FPV-пролёт: вход с улицы → ресепшн → бассейн 25 м → лаунж-зона → выход через панорамное окно. Непрерывный кадр без склеек. Публикуется как отдельный Reel.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '12x',
        label: 'Больше репостов',
        text: 'Видеоконтент генерирует больше репостов в соцсетях по сравнению со статичными фото (по данным HubSpot).',
    },
    {
        value: '40–60%',
        label: 'Рост времени просмотра',
        text: 'Если на странице объекта есть видео с дрона, среднее время просмотра обычно выше, а вероятность заявки растёт.',
    },
    {
        value: 'Большинство',
        label: 'Клубов в Тбилиси',
        text: 'До сих пор используют фото со смартфона или вообще не работают с видеоконтентом. Один ролик уже выделяет вас.',
    },
    {
        value: 'Air 3S + Avata 2',
        label: 'Оборудование Breus',
        text: 'Air 3S для аэросъёмки экстерьера, Avata 2 с защитными пропеллерами для безопасных FPV-пролётов внутри зон.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое FPV-съёмка и зачем она спортивному клубу?',
        answer:
            'FPV (First Person View) — это съёмка с дрона, который летает на высокой скорости и в узких пространствах. Для спортивного объекта это лучший способ показать залы, корты и бассейн изнутри в движении и передать ощущение масштаба.',
    },
    {
        question: 'Можно ли летать дроном внутри спортзала? Это безопасно?',
        answer:
            'Да. Для помещений мы используем DJI Avata 2 с защитными кожухами вокруг пропеллеров. Перед съёмкой согласуем маршрут, временно ограничиваем движение в секторе и фиксируем план выезда с администрацией.',
    },
    {
        question: 'Нужно ли закрывать клуб на время съёмки?',
        answer:
            'Необязательно. Наружную аэросъёмку проводим без ограничений для посетителей. Для FPV внутри обычно согласуется 1–2 часа в конкретной зоне утром или после закрытия.',
    },
    {
        question: 'Как погода влияет на съёмку в Тбилиси?',
        answer:
            'Для наружной аэросъёмки нужен ветер до 10–12 м/с и отсутствие осадков. Если погода неподходящая, мы переносим съёмку без доплаты. Внутренние FPV-сессии от погоды не зависят.',
    },
    {
        question: 'Что происходит со светом в тёмных залах?',
        answer:
            'DJI Air 3S имеет хорошую светочувствительность. Для тёмных зон мы планируем время съёмки на максимум естественного или доступного рабочего освещения. Дополнительный свет обычно не завозим.',
    },
    {
        question: 'Сколько занимает процесс от заявки до готового ролика?',
        answer:
            'Обычно 7–10 дней: 1–2 дня на бриф и согласование, 1 съёмочный день, 4–6 дней на монтаж и цветокоррекцию. Пакет Express — 5 рабочих дней от съёмки до финала.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка спортивного комплекса в Тбилиси?',
        answer:
            'Starter от 490 ₾, Standard от 890 ₾, Premier от 1 490 ₾. Итог зависит от площади объекта, количества зон и нужных форматов, поэтому финальную цену уточняем на брифе.',
    },
    {
        question: 'Что нужно для разрешения на полёты в Тбилиси?',
        answer:
            'Коммерческие полёты регулирует GCAA (Civil Aviation Agency of Georgia). Мы заранее проверяем статус зоны и, если объект в ограниченной зоне, оформляем всё до съёмочного дня.',
    },
    {
        question: 'В каких форматах передаются файлы?',
        answer:
            'Видео: MP4 (H.264/H.265), 4K или Full HD. Фото: JPEG и WebP в 4K. Передача через Google Drive или WeTransfer в течение 24 часов после финального согласования.',
    },
    {
        question: 'Работаете ли вы за пределами Тбилиси?',
        answer:
            'Да, работаем по всей Грузии: Батуми, Кутаиси, Сигнахи, Боржоми и горные курорты. Выезд рассчитывается отдельно.',
    },
    {
        question: 'Можно ли снимать мероприятие: турнир или открытие клуба?',
        answer:
            'Да, это отдельный сценарий Event Coverage: съёмка в день события, аэрокадры, наземная съёмка (при наличии) и монтаж репортажного ролика.',
    },
    {
        question: 'Что если результат нам не понравится?',
        answer:
            'План и референсы согласовываем заранее. После монтажа включена одна бесплатная итерация правок по темпу, порядку сцен и текстовым вставкам.',
    },
    {
        question: 'Вы работаете по договору и с юрлицами?',
        answer:
            'Да. Работаем по договору, выставляем счёт, подходим для юридических лиц в Грузии. Предоплата 50% при бронировании, остаток после сдачи материала.',
    },
];

const whyUsCards: CardItem[] = [
    {
        title: 'Два дрона для двух задач',
        text: 'DJI Air 3S для кинематографичной съёмки снаружи и DJI Avata 2 для безопасных FPV-пролётов внутри.',
    },
    {
        title: 'Понимание спортивной специфики',
        text: 'Спортобъекты снимают иначе, чем жилые комплексы: важны ракурсы, показывающие зоны, свет и чистоту пространства.',
    },
    {
        title: 'Контент, который можно сразу использовать',
        text: 'Готовые файлы под нужные форматы: горизонталь для YouTube, вертикаль для Reels, фото для сайта и Google Business.',
    },
    {
        title: 'Нет хаоса в процессе',
        text: 'Согласованный план, фиксированные даты и чёткое ТЗ. Все ключевые решения принимаются до выезда.',
    },
    {
        title: 'Локальный контекст',
        text: 'Работаем в Тбилиси, знаем районы, сезонность и погодные особенности, влияющие на съёмочный день.',
    },
    {
        title: 'Честные сроки',
        text: 'Называем реальные сроки сдачи и заранее предупреждаем, если что-то может повлиять на график.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф',
        text: 'Вы рассказываете об объекте, задачах и нужных форматах. Мы уточняем зоны съёмки, доступ и референсы.',
    },
    {
        step: 'Шаг 2',
        title: 'План и согласование',
        text: 'Составляем маршрут, список сцен и тайминг. Согласовываем с администрацией клуба доступ к зонам.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Приезжаем с оборудованием, снимаем по плану и проверяем ключевые кадры на месте. Для важных сцен делаем резервные дубли.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж',
        text: 'Собираем ролик, добавляем цветокоррекцию, музыку и текстовые вставки при необходимости. Передаём черновой вариант.',
    },
    {
        step: 'Шаг 5',
        title: 'Финал и передача',
        text: 'После согласования правок отдаём финальные файлы в нужных форматах. Ссылка на скачивание — в течение 24 часов после финала.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Starter',
        price: 'от 490 ₾',
        duration: '2–3 часа',
        delivery: '5 рабочих дней',
        items: [
            'Аэросъёмка экстерьера объекта (DJI Air 3S)',
            '8–10 аэрофото в 4K (JPEG/WebP)',
            'Короткий монтаж: ролик 30–45 секунд',
            'Одна вертикальная версия 15 секунд для Reels',
            'Цветокоррекция',
            'Передача файлов через ссылку',
        ],
        addons: ['FPV-съёмка внутри +250 ₾', 'Дополнительная монтажная версия +150 ₾'],
    },
    {
        title: 'Standard',
        price: 'от 890 ₾',
        duration: 'Полдня (4–5 часов)',
        delivery: '7 рабочих дней',
        items: [
            'Аэросъёмка экстерьера и территории',
            'FPV-пролёт по 1–2 внутренним зонам',
            'Промо-ролик 60–90 секунд с музыкой (горизонтальный)',
            '2 вертикальные версии 15–30 секунд для Reels/Stories',
            '12–15 аэрофото',
            'Цветокоррекция и саунд-дизайн',
        ],
        addons: ['Съёмка мероприятия в тот же день +350 ₾', 'Дополнительные зоны внутри +200 ₾ за зону'],
        popular: true,
    },
    {
        title: 'Premier',
        price: 'от 1 490 ₾',
        duration: 'Полный день (6–8 часов)',
        delivery: '7–10 рабочих дней',
        items: [
            'Полная аэросъёмка объекта: снаружи и несколько внутренних зон',
            'FPV-пролёт по всем согласованным зонам',
            'Промо-ролик 90–120 секунд',
            '3–4 коротких Reels/Stories-версии разных зон',
            '20+ аэрофото высокого разрешения',
            'Исходники (RAW/LOG) — полный архив',
        ],
        addons: ['Интервью или синхрон с тренером +200 ₾', 'Субтитры для соцсетей +100 ₾'],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка мероприятий',
        href: '/drone-services/drone-events',
        text: 'Дроновое покрытие турниров, открытий клубов и корпоративных спортивных событий.',
    },
    {
        title: 'FPV-съёмка',
        href: '/drone-fpv-cinema',
        text: 'Скоростные пролёты для эффекта присутствия как отдельный продукт или часть промо-ролика.',
    },
    {
        title: 'Аэросъёмка отелей и курортов',
        href: '/drone-hotels-tourism',
        text: 'Комплексный визуальный пакет для объектов hospitality: территория и инфраструктура.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Для комплексов в составе жилых или коммерческих проектов: объект, окружение и инфраструктура.',
    },
];

const nicheMistakes: MistakeItem[] = [
    {
        title: 'Снимают «для галочки», а не под задачу',
        text: 'Заказывают видео без понимания каналов использования. В итоге ролик не подходит по темпу и формату ни для Reels, ни для рекламы, ни для сайта.',
    },
    {
        title: 'Выбирают неподходящее время суток',
        text: 'Съёмка в пик посещаемости и плоском свете ухудшает картинку. Фасады лучше снимать утром или в золотой час, внутренние зоны — в спокойные часы.',
    },
    {
        title: 'Не готовят пространство к съёмке',
        text: 'Разбросанный инвентарь, полотенца и мусор в кадре убивают впечатление. Перед съёмкой нужно хотя бы 30 минут на подготовку зон.',
    },
    {
        title: 'Заказывают только наружную съёмку',
        text: 'Красивый экстерьер важен, но клиент покупает атмосферу внутри. Без внутренних зон ролик не закрывает главный вопрос: «А что внутри?»',
    },
    {
        title: 'Ждут «идеального момента»',
        text: 'Контент откладывают на месяцы: ремонт, ещё оборудование, потом «как-нибудь». Снимать нужно, когда объект уже выглядит достойно.',
    },
    {
        title: 'Пытаются использовать одну версию везде',
        text: 'Горизонтальный ролик и вертикальный формат работают по-разному. Форматы нужно закладывать на этапе монтажа.',
    },
];

const freeTips: string[] = [
    'Обновите фото в Google Business Profile: 5–8 свежих кадров уже заметно улучшают карточку в локальном поиске.',
    'Снимите простой walk-through на стабилизатор смартфона и публикуйте как Reel с подписями зон.',
    'Добавьте короткое видео (30 секунд) в Hero-блок сайта и проверьте загрузку на мобильных.',
    'Проверьте, как клуб выглядит в Instagram по геотегу, и стимулируйте гостей отмечать вас в удачные дни.',
    'Опишите каждую зону на сайте текстом: площадь, оборудование, часы доступа — это помогает и SEO, и конверсии.',
];

const shootChecklist: string[] = [
    'Все зоны внесены в план: экстерьер, нужные залы, бассейн, ресепшн',
    'Время съёмки согласовано с администрацией: FPV-зоны свободны минимум 2 часа',
    'Пространства убраны: инвентарь на местах, полотенца убраны, мусор вынесен',
    'Освещение в залах включено на полную мощность',
    'Логотип и вывески чистые и хорошо видны',
    'Назначен ответственный человек со стороны клуба на день съёмки',
    'Есть доступ ко всем зонам: ключи, коды, договорённости с охраной',
    'Согласованы форматы выдачи: горизонталь, вертикаль, размер и способ передачи',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Какой дрон лучше для съёмки внутри спортивного зала — обычный или FPV?',
        answer: [
            'Стандартный дрон вроде DJI Air 3S снимает стабильные кинематографичные кадры, но внутри у него больше ограничений по размерам и манёвренности.',
            'FPV-дрон DJI Avata 2 компактнее, имеет защиту пропеллеров и создан для полётов в закрытых пространствах: коридорах, между тренажёрами и над бассейном.',
            'Оптимальная связка для спортобъекта — Air 3S снаружи и Avata 2 внутри. Именно так мы строим продакшн в Breus Media.',
        ],
    },
    {
        question: 'Стоит ли снимать дроном, если клуб небольшой?',
        answer: [
            'Да. Дрон не «увеличивает» помещение искусственно, а показывает его с выгодных ракурсов и подчёркивает атмосферу.',
            'Для небольших клубов это особенно важно: они часто конкурируют с сетями не бюджетом, а впечатлением, сервисом и характером пространства.',
            'Хорошо снятый компактный зал может выглядеть как осознанный premium-формат, а не как компромисс.',
        ],
    },
    {
        question: 'Как часто нужно обновлять видеоконтент спортивному клубу?',
        answer: [
            'Базовый цикл — раз в 1–2 года, если объект почти не меняется.',
            'Вне графика ролик нужен после ремонта, запуска новой зоны или смены маркетинговой стратегии.',
            'Рекламные ролики обычно лучше обновлять ежегодно, чтобы они не «замыливались» у аудитории в таргете.',
        ],
    },
    {
        question: 'Как дрон-съёмка помогает привлекать корпоративных клиентов на аренду зала?',
        answer: [
            'HR-менеджер или руководитель выбирает площадку дистанционно и быстро оценивает вместимость, зонирование и уровень сервиса по визуалу.',
            'Аэровидео закрывает эти вопросы за 60–90 секунд и сокращает число согласований до личного визита.',
            'В коммерческом предложении ролик часто ускоряет принятие решения, потому что снимает базовую неопределённость.',
        ],
    },
    {
        question: 'Какие требования GCAA учитывать при аэросъёмке в Тбилиси?',
        answer: [
            'GCAA регулирует коммерческие полёты дронов в Грузии, включая требования к регистрации и согласованиям для отдельных зон.',
            'В Тбилиси есть ограничения рядом с аэропортом и рядом с некоторыми гособъектами, поэтому проверка зоны обязательна до съёмочного дня.',
            'Мы заранее проверяем статус локации и при необходимости получаем согласования до старта проекта.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: 'FPV-съёмка', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Мониторинг строительства', href: '/drone-services/drone-construction' },
    { label: 'Инспекция объектов', href: '/drone-services/drone-inspection' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        ...beginnerFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
        ...commercialFaqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка и FPV-видео для спортивных комплексов в Тбилиси',
    description:
        'Аэросъёмка экстерьера, FPV-пролёты по залам и промо-ролики для фитнес-клубов, теннисных кортов и бассейнов в Тбилиси и по Грузии.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси и Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '490',
        highPrice: '1490',
        offerCount: '3',
    },
    serviceType: 'Drone Photography and Videography',
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка и FPV-видео для спортивных объектов в Тбилиси и по всей Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneSportPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-sport-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone + FPV for Sports Venues
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Дрон-видео для спортивных комплексов и фитнес-клубов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Показываем масштаб, атмосферу и уровень вашего объекта так, как это невозможно
                                передать обычной камерой.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Когда человек выбирает клуб, он листает соцсети и смотрит видео. Если вашего зала там
                                нет или там скучные фото с телефона, вы проигрываете конкуренту с атмосферным роликом.
                                Мы снимаем аэровидео и FPV-пролёты для спортивных комплексов, фитнес-клубов,
                                теннисных кортов, бассейнов и велнес-центров.
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/62 md:text-base">
                                Итог — готовый контент для сайта, соцсетей и рекламы.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 490 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Съёмочный день для спортивных объектов.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–8 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">5–10 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Экстерьер + FPV внутри</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Что такое дрон-видео для спортивного объекта — и зачем это бизнесу
                        </h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это не просто красивые кадры, а маркетинговый инструмент, который отвечает на главный вопрос
                            клиента: «Хочу ли я проводить здесь время?» Дрон показывает масштаб зала, расположение
                            оборудования, качество покрытия, вид с высоты и прилегающую территорию.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            FPV-дрон проносится сквозь пространство и создаёт эффект присутствия. Для фитнес-клубов и
                            спортивных комплексов это виртуальный тур без технических сложностей.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для Тбилиси это особенно актуально: конкуренция между клубами растёт, а многие всё ещё
                            используют любительские фото. Один сильный ролик даёт заметное преимущество в локальном
                            поиске и соцсетях.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта съёмка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает клубам продвигаться с обычным визуалом</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что даёт клубу видео с дрона</h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h3 className="text-2xl font-bold md:text-3xl">Зарабатывает</h3>
                            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                                {earnList.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h3 className="text-2xl font-bold md:text-3xl">Не теряет</h3>
                            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/78">
                                {saveList.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Хотите знать, как будет выглядеть ваш объект? Расскажите о нём — подберём подходящий
                            формат и ответим на вопросы по цене и срокам.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить формат
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в работу и что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где и как это используется</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как выглядит результат — концептуальные примеры</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Факты о рынке и нашем подходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-3xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Ответы на базовые вопросы" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Деньги, сроки и детали работы"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему обращаются в Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Мы не снимаем «как получится» — каждый выезд начинается с согласованного плана и заканчивается готовым контентом в нужных форматах." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и цены</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в ₾ и уточняются после брифа.</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <div className="mt-2 text-sm text-white/70">
                                    <p>
                                        <span className="font-semibold text-white">Длительность съёмки:</span> {card.duration}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Срок доставки:</span> {card.delivery}
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-6 border-t border-white/10 pt-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Дополнительно</p>
                                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                                        {card.addons.map((addon) => (
                                            <li key={addon}>+ {addon}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не уверены, какой пакет подходит? Опишите объект и задачу — скажем, что нужно и что войдёт
                            в итоговую стоимость.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что чаще всего идёт не так при съёмке спортивных объектов</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheMistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пять вещей, которые можно улучшить прямо сейчас — без съёмки</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к съёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на популярные вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смотрите также</h2>
                        <div className="mt-8 grid gap-4">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Готовы показать свой объект так, чтобы клиент принял решение ещё до первого звонка?
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить съёмку
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Опишите объект и задачи: какие зоны снимаем, нужны ли FPV-пролёты, какие форматы
                                    публикации важны. Подберём оптимальный пакет и сроки.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Альтернативные контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            @breusmedia
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <SportContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-sport-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-territory
Lines: 1196
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { TerritoryContactForm } from './TerritoryContactForm';

type CardItem = {
    title: string;
    text: string;
};

type TaggedCardItem = {
    tag: string;
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    subtitle: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breusmedia.com/drone-services/drone-territory';
const PAGE_TITLE = 'Мониторинг территорий дроном в Тбилиси | Breus Media';
const PAGE_DESCRIPTION =
    'Регулярные аэрофото и отчёты о состоянии вашего объекта. Стройки, участки, склады — в Тбилиси и по всей Грузии. Разовый вылет от 450 ₾. Передача за 24–48 ч.';

const serviceTypes: CardItem[] = [
    {
        title: 'Разовый базовый облёт (Baseline Survey)',
        text: 'Одноразовый полёт для фиксации текущего состояния территории. Подходит для старта мониторинга, документирования объекта перед сделкой и первичного обзора участка.',
    },
    {
        title: 'Периодический мониторинг (Recurring Monitoring)',
        text: 'Регулярные облёты по графику: еженедельно, раз в две недели или раз в месяц. Каждый вылет датируется, материалы накапливаются в архив и становятся сопоставимыми.',
    },
    {
        title: 'Отчётный мониторинг (Reporting Package)',
        text: 'Облёт плюс структурированный отчёт: датированные снимки, сравнение «было / стало», PDF-сводка для внутреннего использования или для инвесторов и партнёров.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Девелоперы и застройщики',
        text: 'Нужно показывать прогресс инвесторам и банку, фиксировать выполнение этапов подрядчиком и иметь доказательную базу на случай споров.',
    },
    {
        title: 'Владельцы земельных участков',
        text: 'Вы не живёте рядом с объектом или приезжаете редко. Регулярный облёт показывает, что происходит на территории и как меняется периметр.',
    },
    {
        title: 'Управляющие логистическими и складскими дворами',
        text: 'На открытых площадках сложно держать визуальный контроль. Дрон за 15–20 минут даёт полную картину использования территории.',
    },
    {
        title: 'Иностранные инвесторы и удалённые владельцы',
        text: 'Вы ведёте проект в Грузии, находясь в другой стране. Периодические облёты и PDF-отчёты становятся вашими «глазами» на объекте.',
    },
    {
        title: 'Промышленные и производственные объекты',
        text: 'Заводы, карьеры, насыпные площадки и зоны хранения: быстрый мониторинг больших территорий без остановки работ и долгого обхода.',
    },
    {
        title: 'Архитекторы, проектировщики и геодезисты',
        text: 'Регулярные аэрофотоматериалы помогают сверять фактическое состояние объекта с проектной документацией и дополняют наземные замеры.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Не знаю, что реально происходит на площадке',
        text: 'Подрядчик отчитывается словами или отправляет пару фото с телефона. Принимать решения по таким данным рискованно.',
    },
    {
        title: 'Нет зафиксированной истории объекта',
        text: 'Когда возникает спор, доказать «было так» нечем. Без датированного архива всё держится на памяти и устных договорённостях.',
    },
    {
        title: 'Инвестор или партнёр требует отчёт',
        text: 'Разрозненные снимки из мессенджера не работают как документ. Нужен стандартизированный визуальный отчёт с датами.',
    },
    {
        title: 'Объект большой, обходить вручную долго и дорого',
        text: 'Территория в несколько гектаров требует часов обхода. Дрон закрывает задачу за один вылет и даёт обзор сверху.',
    },
    {
        title: 'Удалённый контроль невозможен без присутствия',
        text: 'Вы не можете постоянно приезжать на объект и вынуждены доверять чужим интерпретациям вместо фактов.',
    },
    {
        title: 'Нет единого визуального стандарта документации',
        text: 'Снимки с разных точек и высот несравнимы. Для нормального контроля нужен фиксированный маршрут и повторяемые позиции.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Доверие инвестора и партнёров растёт',
        text: 'Прозрачный визуальный прогресс упрощает финансирование и снижает число вопросов по ходу проекта.',
    },
    {
        title: 'Сделки проходят быстрее',
        text: 'Документированное состояние объекта перед продажей или арендой сокращает время на согласования.',
    },
    {
        title: 'Подрядчики точнее соблюдают этапы',
        text: 'Когда прогресс фиксируется регулярно, дисциплина выполнения работ и соблюдение сроков становятся выше.',
    },
    {
        title: 'Удалённое управление становится реальным',
        text: 'Вы принимаете решения на основе фактов и сопоставимых материалов, а не на основе устных отчётов.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Архив защищает в спорах',
        text: 'Датированные материалы с метаданными помогают отстаивать позицию в разборе с подрядчиками и контрагентами.',
    },
    {
        title: 'Нарушения выявляются раньше',
        text: 'Вы видите отклонения до того, как они превращаются в дорогостоящую проблему.',
    },
    {
        title: 'Снижается риск несанкционированного использования',
        text: 'Регулярный визуальный контроль периметра помогает быстрее замечать нежелательные изменения.',
    },
    {
        title: 'Меньше недоразумений с банком и инвестором',
        text: 'Стандартизированная отчётность снимает вопросы и снижает конфликтность в коммуникации.',
    },
];

const shootDayItems: string[] = [
    'Вылет дрона по согласованному маршруту над объектом',
    'Аэрофотосъёмка с фиксированных точек для сравнения между вылетами',
    'Обзорное аэровидео территории (панорамы и пролёты)',
    'Документирование ключевых зон: периметр, хранение, активные участки, спорные точки',
    'Исходные файлы с датой в метаданных и геотегом',
];

const finalResultItems: string[] = [
    'Датированные аэрофото в высоком разрешении (JPG/PNG)',
    'Обзорное видео территории (MP4, без обработки или с базовым монтажом)',
    'Организованная по датам папка с исходными файлами',
    'Сравнительный визуальный ряд «было / стало» при повторных вылетах',
    'PDF-отчёт с датированными снимками и комментариями (в пакете Reporting)',
    'Передача материалов в течение 24–48 часов после вылета',
];

const useCases: CardItem[] = [
    {
        title: 'Еженедельный прогресс стройки для инвестора',
        text: 'Девелопер отправляет датированные фото и сравнительное видео каждые две недели. Инвестор контролирует объект удалённо и быстрее принимает решения.',
    },
    {
        title: 'Контроль участка за городом без личных визитов',
        text: 'Ежемесячный облёт фиксирует границы, состояние территории и признаки посторонней активности. Владелец видит картину без поездок.',
    },
    {
        title: 'Документирование участка перед сделкой',
        text: 'Разовый baseline-облёт формирует архив состояния объекта на конкретную дату и снимает часть вопросов у покупателя.',
    },
    {
        title: 'Визуальный контроль логистического двора',
        text: 'Управляющий видит занятость зон хранения, порядок на площадке и состояние периметра без обхода гектарной территории.',
    },
    {
        title: 'Отчёт для банка по ходу строительства',
        text: 'Стандартизированные аэрофотоотчёты с датами и этапами заменяют хаотичные фото и упрощают подтверждение прогресса.',
    },
    {
        title: 'Мониторинг горной или труднодоступной локации',
        text: 'Дрон добирается до сложной зоны за минуты и фиксирует состояние объекта там, где наземная проверка занимает много времени.',
    },
];

const examples: TaggedCardItem[] = [
    {
        tag: 'Девелоперский проект / ЖК',
        title: 'Начальный этап и повтор через 4 недели',
        text: 'Базовый облёт фиксирует периметр участка, состояние грунта, подъезды и старт котлована. Повторный вылет с тех же точек показывает «было / стало». Материалы отправлены инвестору как PDF + архив фото.',
    },
    {
        tag: 'Логистический двор / Открытая складская площадка',
        title: 'Еженедельный мониторинг территории 2 га',
        text: 'Менеджер видит загрузку зон, нарушения разметки и состояние периметра. За месяц накапливается 4 датированные серии снимков для внутреннего контроля.',
    },
    {
        tag: 'Земельный участок удалённого владельца',
        title: 'Ежеквартальный маршрут с одними и теми же точками',
        text: 'Архив за год наглядно показывает динамику изменений территории. Базовое понимание состояния объекта больше не требует регулярных поездок.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '70%',
        label: 'Материалы для контроля, не рекламы',
        text: 'Такую долю клиентов интересует документирование и отчётность, а не маркетинговый ролик.',
    },
    {
        value: '15–20 минут',
        label: 'Покрытие 1–2 гектаров',
        text: 'За это время дрон закрывает площадь, на обход которой пешком обычно уходит несколько часов.',
    },
    {
        value: '×4 в месяц',
        label: 'Частота активной стройки',
        text: 'Еженедельный цикл мониторинга помогает не пропускать критические этапы работ.',
    },
    {
        value: '24–48 часов',
        label: 'Передача материалов',
        text: 'Обычно файлы и отчёты передаются в течение двух суток после вылета.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое мониторинг территорий дроном?',
        answer:
            'Это регулярные или разовые аэрофотосъёмки объекта с одних и тех же точек по фиксированному маршруту. Цель — создать датированный визуальный архив и видеть изменения во времени.',
    },
    {
        question: 'Это то же самое, что охрана объекта?',
        answer:
            'Нет. Мониторинг — это документирование, а не защита в реальном времени. Он не заменяет охрану и видеонаблюдение, а закрывает задачу контроля и отчётности.',
    },
    {
        question: 'Можно ли летать на дроне в Тбилиси?',
        answer:
            'Да, при соблюдении правил GCAA. В некоторых зонах рядом с аэропортом и в отдельных городских кварталах требуется предварительное согласование. Мы проверяем зону и берём этот процесс на себя.',
    },
    {
        question: 'Как часто нужно делать облёты?',
        answer:
            'Для активной стройки обычно раз в неделю или раз в две недели. Для спокойных участков — раз в месяц или раз в квартал. Частота подбирается под задачу.',
    },
    {
        question: 'Влияет ли погода на возможность вылета?',
        answer:
            'Да. Сильный ветер (примерно от 10–12 м/с), дождь и туман ограничивают вылет. При неблагоприятной погоде переносим съёмку на ближайшую доступную дату.',
    },
    {
        question: 'За сколько готовы материалы?',
        answer:
            'Обычно 24–48 часов после вылета. Если нужен PDF-отчёт, добавляется ещё около одного рабочего дня.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит мониторинг территорий дроном в Тбилиси?',
        answer:
            'Разовый baseline-облёт стоит от 450 ₾. Регулярный мониторинг — от 850 ₾/месяц. Отчётный формат с расширенным PDF — от 1 400 ₾/месяц. Точная цена зависит от площади, частоты и формата отчётности.',
    },
    {
        question: 'Что входит в стандартный пакет?',
        answer:
            'Вылет дрона, аэрофотоматериалы с фиксированных точек маршрута и датированная передача файлов в течение 24–48 часов. PDF-отчёты и серии «было / стало» входят в расширенные пакеты.',
    },
    {
        question: 'В каком формате передаются материалы?',
        answer:
            'Фото передаются в JPG высокого разрешения, видео — в MP4. Доступ выдаётся через защищённую облачную папку с датированной структурой файлов.',
    },
    {
        question: 'Нужны ли специальные разрешения GCAA для коммерческих полётов?',
        answer:
            'Коммерческие полёты регулируются GCAA. Мы работаем по действующим правилам: регистрация, ограничения по зонам и высоте, дополнительные согласования при необходимости.',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Нет, работаем по всей Грузии: Тбилиси, Батуми, Кахетия, Квемо Картли и другие регионы. Для выездов за пределы Тбилиси действует фиксированная транспортная надбавка.',
    },
    {
        question: 'Можно ли подписать договор на регулярный мониторинг?',
        answer:
            'Да. Для регулярных облётов оформляется договор с фиксированным маршрутом, периодичностью, форматом отчётности и сроками передачи материалов.',
    },
    {
        question: 'Можно ли заказать мониторинг один раз, без абонемента?',
        answer:
            'Да. Разовый baseline-облёт предоставляется как отдельная услуга без обязательства переходить на регулярный формат.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Мы строим систему контроля, а не «красивую съёмку»',
        text: 'Повторяемость маршрута, датированные серии и сопоставимость материалов — основа нашей методики мониторинга.',
    },
    {
        title: 'DJI Air 3S подходит для документации',
        text: 'Разрешение и стабильность съёмки позволяют видеть детали поверхности, периметра и изменений на объекте.',
    },
    {
        title: 'Работаем по правилам GCAA',
        text: 'Проверяем зоны, учитываем ограничения и при необходимости берём согласования на себя.',
    },
    {
        title: 'Передаём материалы в рабочем формате',
        text: 'Датированная структура, понятные имена файлов и облачный доступ для вас, инвестора, банка и партнёров.',
    },
    {
        title: 'Комфортно работаем с удалёнными владельцами',
        text: 'Бриф, согласование маршрута и передача результата могут проходить полностью дистанционно.',
    },
    {
        title: 'Честно обозначаем границы услуги',
        text: 'Мониторинг — это документирование и контроль, но не замена охраны или инженерного надзора.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Бриф и согласование',
        text: 'Вы описываете объект, задачу и периодичность. Мы согласуем маршрут, точки съёмки, формат результата и стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Разрешения и подготовка',
        text: 'Проверяем ограничения GCAA, при необходимости оформляем согласование и согласуем дату с учётом погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Вылет и съёмка',
        text: 'Работаем по фиксированному маршруту, с одинаковыми точками, углами и высотой для сопоставимости между вылетами.',
    },
    {
        step: 'Шаг 4',
        title: 'Обработка и передача',
        text: 'Отбираем материалы, организуем в датированную структуру и передаём через облако в течение 24–48 часов.',
    },
    {
        step: 'Шаг 5',
        title: 'Отчёт и архив',
        text: 'В расширенных пакетах добавляем PDF-сводку и сравнение с предыдущим вылетом. Архив остаётся доступным в любое время.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Baseline',
        subtitle: 'Разовый стартовый облёт',
        price: 'от 450 ₾',
        duration: '1 вылет (до 2 часов на объекте)',
        delivery: '24–48 часов',
        items: [
            'Один вылет по согласованному маршруту',
            'До 40 датированных аэрофото в высоком разрешении',
            'Обзорное видео территории (сырой монтаж)',
            'Передача через облачную папку',
            'Краткий бриф-лист точек съёмки для повторных вылетов',
        ],
        addons: [
            'Выезд за пределы Тбилиси: от 80 ₾',
            'Ортофото (плановая сшивка): +150 ₾',
            'Срочная передача до 12 часов: +100 ₾',
        ],
    },
    {
        title: 'Monitoring',
        subtitle: 'Регулярный контроль по графику',
        price: 'от 850 ₾/месяц',
        duration: '2 вылета в месяц',
        delivery: '24–48 часов после каждого вылета',
        items: [
            '2 вылета в месяц по фиксированному маршруту',
            'До 60 датированных аэрофото с каждого вылета',
            'Видео каждого вылета (базовый монтаж)',
            'Сравнительный визуальный ряд «вылет 1 / вылет 2»',
            'Облачный датированный архив',
            'Договор на обслуживание с фиксированными условиями',
        ],
        addons: [
            'Третий вылет в месяц: +300 ₾',
            'Выезд за пределы Тбилиси: от 80 ₾/вылет',
            'PDF-отчёт к каждому вылету: +150 ₾/вылет',
        ],
        popular: true,
    },
    {
        title: 'Reporting',
        subtitle: 'Еженедельный мониторинг с отчётами',
        price: 'от 1 400 ₾/месяц',
        duration: '4 вылета в месяц (еженедельно)',
        delivery: '24–48 часов после каждого вылета',
        items: [
            '4 вылета в месяц по стандартному маршруту',
            'До 80 датированных аэрофото с каждого вылета',
            'Видео с базовой цветокоррекцией',
            'PDF-отчёт после каждого вылета с зонами изменений',
            'Ежемесячная сводная PDF-хроника объекта',
            'Приоритетное согласование дат и погодных переносов',
        ],
        addons: [
            'Ортофото (плановая сшивка): +150 ₾/вылет',
            'Выезд за пределы Тбилиси: от 80 ₾/вылет',
            'Аннотированная карта объекта: +200 ₾',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Мониторинг строительства дроном',
        href: '/drone-services/drone-construction-monitoring',
        text: 'Регулярные облёты активной стройки с отчётами для инвестора и банка, фиксация этапов и сравнение по неделям.',
    },
    {
        title: 'Инспекция объектов дроном',
        href: '/drone-services/drone-inspection',
        text: 'Детальная аэросъёмка кровель, фасадов и конструкций для документации дефектов без лесов и подъёмников.',
    },
    {
        title: 'Аэросъёмка недвижимости',
        href: '/drone-services/drone-real-estate',
        text: 'Видео и фото объектов недвижимости с воздуха для продажи, аренды и презентации инвесторам.',
    },
    {
        title: '360° виртуальный тур',
        href: '/360-tours/360-real-estate',
        text: 'Интерактивная панорама объекта для удалённого просмотра, которая хорошо работает в связке с аэрофото.',
    },
];

const mistakes: CardItem[] = [
    {
        title: 'Снимают «когда вспомнили», а не по графику',
        text: 'Случайные вылеты без регулярности и повторяемости не дают базы для сравнения и управленческих решений.',
    },
    {
        title: 'Путают мониторинг с охраной',
        text: 'Мониторинг не реагирует на события в реальном времени и не заменяет службу безопасности.',
    },
    {
        title: 'Летают с разных точек каждый раз',
        text: 'Если маршрут и высота не фиксируются, материалы теряют сопоставимость и практическую ценность.',
    },
    {
        title: 'Не организуют архив',
        text: 'Файлы из мессенджеров без структуры и датировки невозможно использовать как рабочую историю объекта.',
    },
    {
        title: 'Заказывают мониторинг без цели',
        text: 'Без понятной задачи сложно выбрать частоту, маршрут и формат отчётности. Результат получается размытым.',
    },
    {
        title: 'Игнорируют требования GCAA',
        text: 'Работа без регистрации и проверки зон несёт риск штрафов и срыва съёмки, особенно рядом с ограниченными локациями.',
    },
];

const freeTips: string[] = [
    'Сделайте серию фото с одинаковых точек по периметру прямо сейчас: это уже база для будущих сравнений.',
    'Составьте список критичных зон: въезд, ворота, спорный периметр, активные участки, зоны хранения.',
    'Организуйте облачную папку для документации по датам, чтобы история объекта не терялась.',
    'Проверьте ограничения GCAA по адресу объекта до заказа вылета.',
    'Запросите у подрядчика датированные фото после каждого этапа как стандарт отчётности.',
];

const checklist: string[] = [
    'Вы чётко сформулировали цель мониторинга: для кого и для чего нужны материалы.',
    'Размер и форма территории известны: объект можно показать на карте или передать координаты.',
    'Определена желаемая периодичность вылетов: еженедельно, раз в 2 недели, раз в месяц.',
    'Понятно, кто получает материалы: только вы или также инвестор, банк, партнёры.',
    'Решён вопрос доступа на территорию в день вылета.',
    'Подготовлено облачное хранилище для получения и хранения материалов.',
    'Проверено, находится ли объект в ограниченной зоне GCAA.',
    'Есть понимание, что дрон-мониторинг — это документирование, а не охрана в реальном времени.',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Чем дрон-мониторинг территории отличается от обычной аэросъёмки?',
        answer:
            'Обычная аэросъёмка чаще решает маркетинговую задачу: красивые кадры для сайта и рекламы. Мониторинг территории работает как инструмент управления: здесь важны повторяемость маршрута, одинаковые точки и сопоставимость материалов. Вы смотрите не просто на картинку, а на изменения объекта между датами.',
    },
    {
        question: 'Какие объекты в Грузии особенно нуждаются в регулярном мониторинге?',
        answer:
            'В первую очередь активные стройплощадки, земельные участки под девелопмент, логистические дворы, объекты удалённых владельцев и труднодоступные локации. Во всех этих сценариях мониторинг компенсирует отсутствие постоянного присутствия на месте.',
    },
    {
        question: 'Как часто делать облёты при активном строительстве?',
        answer:
            'Для активной стройки обычно выбирают еженедельный или двухнедельный цикл. Такой ритм помогает не пропускать критичные этапы и вовремя замечать отклонения. При низкой активности достаточно одного вылета в месяц.',
    },
    {
        question: 'Что такое baseline-облёт и зачем он нужен?',
        answer:
            'Baseline-облёт фиксирует исходное состояние объекта и создаёт точку отсчёта для всех следующих сравнений. На этом этапе также согласуются точки съёмки и маршрут, которые затем повторяются в мониторинге.',
    },
    {
        question: 'Можно ли использовать материалы в спорах с подрядчиком?',
        answer:
            'Датированные материалы с метаданными не заменяют юридические документы, но существенно усиливают позицию в деловых спорах вместе с договором, актами и перепиской. Они помогают объективно показать состояние объекта на конкретную дату.',
    },
];

const navLinks: NavLink[] = [
    { label: 'Мониторинг строительства дроном', href: '/drone-services/drone-construction-monitoring' },
    { label: 'Инспекция объектов и фасадов дроном', href: '/drone-services/drone-inspection' },
    { label: 'Аэросъёмка недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: '360° тур для недвижимости', href: '/360-tours/360-real-estate' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Мониторинг территорий дроном в Тбилиси и по Грузии',
    description:
        'Регулярные облёты по фиксированному маршруту, датированные аэрофото и видео, сравнительные серии и PDF-отчёты для контроля территорий.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breusmedia.com',
        telephone: '+995574619393',
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
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '450',
        highPrice: '1400',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для бизнеса в Грузии.',
    url: 'https://breusmedia.com',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneTerritoryPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-territory-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Territory Monitoring
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Мониторинг территорий дроном для бизнеса в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Датированные аэрофотоматериалы и визуальные отчёты — чтобы вы видели, что происходит
                                на объекте, даже когда вас там нет.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Дрон облетает территорию по фиксированному маршруту и фиксирует состояние объекта:
                                строительный прогресс, изменения на участке, наполнение площадок и граничные зоны.
                                Каждый вылет — это визуальная запись с датой, которую можно сравнить с предыдущей.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить задачу
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 450 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Разовый baseline-облёт территории.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">15–20 мин</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">1–2 га</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">24–48 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Передача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Фиксированный маршрут и повторяемые точки</li>
                                    <li>Датированные серии «было / стало»</li>
                                    <li>Тбилиси и вся Грузия</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Визуальный контроль территории — не охрана и не кино</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Мониторинг территорий — это периодические облёты объекта дроном по заданному маршруту с
                            сохранением датированных фото- и видеоматериалов. Это не живая охрана и не рекламная
                            съёмка, а инструмент документации изменений.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Один снимок редко что-то доказывает. Серии снимков с одних и тех же точек раз в неделю или
                            раз в месяц создают историю объекта, полезную в отчётности, переговорах и спорных
                            ситуациях.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Когда вы не можете постоянно присутствовать на площадке, мониторинг даёт регулярные
                            «снимки реальности» в удобном формате для принятия решений удалённо.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужен мониторинг территорий дроном</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает владельцам объектов спать спокойно</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мониторинг даёт вашему бизнесу</h2>
                    </div>

                    <div className="mt-8">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD23F]">Зарабатывает</p>
                        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {earningsCards.map((item) => (
                                <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FFD23F]">Не теряет</p>
                        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {savingsCards.map((item) => (
                                <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Есть территория, которую нужно держать под контролем, но вы не можете быть там постоянно?
                            Расскажите нам об объекте — обсудим формат мониторинга.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить объект
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что именно вы получаете</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Реальные сценарии использования</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">{item.tag}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Несколько цифр, которые объясняют логику</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="Вы впервые слышите про мониторинг территорий — разберём базу" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="Вопросы по деньгам, формату и процессу"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему владельцы объектов выбирают нас</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Стандартный вылет на объект занимает 1–2 часа. Материалы готовы в течение 24–48 часов." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены в ₾, без скрытых платежей.</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-2 text-sm text-white/72">Длительность: {card.duration}</p>
                                <p className="mt-1 text-sm text-white/72">Срок: {card.delivery}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, какой пакет подходит? Опишите объект и задачу — предложим формат без лишних
                            опций и скрытых доплат.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Обсудить формат
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги для вашего объекта</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что чаще всего идёт не так при мониторинге территорий</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что улучшить уже сейчас, даже без покупки</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">8 пунктов готовности к мониторингу территории</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Подробные ответы на типичные вопросы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные страницы сайта</h2>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {navLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm leading-relaxed text-white/80 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <span className="mr-2 text-[#FFD23F]">{index + 1}.</span>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить мониторинг территории</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Опишите объект, частоту и формат отчёта. Предложим маршрут, график и точный
                                    расчёт под вашу задачу.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <TerritoryContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-territory-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-warehouses
Lines: 1174
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { WarehousesContactForm } from './WarehousesContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    audience: string;
    items: string[];
    addons: string[];
    timeline: string;
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-warehouses';
const PAGE_TITLE = 'Аэросъёмка склада и индустриальных объектов — Тбилиси';
const PAGE_DESCRIPTION =
    'Аэросъёмка складов, логистических комплексов и промышленных зон в Тбилиси. Презентационный ролик, ортофото, инспекция кровли. От 490 ₾. Разрешения GCAA включены.';

const audienceCards: CardItem[] = [
    {
        title: 'Владелец склада или логистического комплекса',
        text: 'Хотите сдать площадь в аренду или привлечь якорного арендатора — покажите объект так, чтобы человек понял его потенциал ещё до визита.',
    },
    {
        title: 'Девелопер или управляющая компания',
        text: 'Строите новый комплекс или управляете несколькими объектами — аэросъёмка фиксирует прогресс, состояние кровли и территории без выезда каждого ответственного.',
    },
    {
        title: 'Инвестор или собственник актива',
        text: 'Нужно представить объект партнёру или банку — видео с воздуха передаёт масштаб и контекст лучше, чем любые цифры на бумаге.',
    },
    {
        title: 'Логистическая компания',
        text: 'Демонстрируете инфраструктуру клиентам, партнёрам, тендерной комиссии — аэросъёмка превращает операционные мощности в убедительный визуальный аргумент.',
    },
    {
        title: 'Производство и завод',
        text: 'Показываете производственный цикл инвесторам или на выставке — FPV-пролёт по цеху или съёмка с воздуха дают образ, который остаётся в памяти.',
    },
    {
        title: 'Брокер коммерческой недвижимости',
        text: 'Работаете с промышленными объектами — видео с дрона сокращает количество «холодных» показов и ускоряет принятие решения.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Объект есть, а показать нечего',
        text: 'Фото с телефона не передают масштаб. Схемы из кадастра не продают. Арендаторы спрашивают «а видео есть?» — и получают «нет».',
    },
    {
        title: 'Территория большая, а охватить её сложно',
        text: '5 гектаров нельзя нормально снять с земли. Подъездные пути, доки, стоянки для фур, КПП, дренаж — всё это видно только сверху.',
    },
    {
        title: 'Инвесторы не понимают масштаб',
        text: 'На питче объект «не читается»: трудно понять размеры, логистику и окружение.',
    },
    {
        title: 'Кровля и фасад проверяются редко',
        text: 'Осмотр кровли часто означает леса, время и деньги. Поэтому проблемы находят уже после протечек или жалоб арендаторов.',
    },
    {
        title: 'Банк или страховая просит визуальную документацию',
        text: 'Регулярные фото-отчёты по объекту нужны для банка, страховщика и акционеров, но собирать их вручную неудобно и дорого.',
    },
    {
        title: 'Конкуренты уже показывают объекты с воздуха',
        text: 'Крупные игроки используют аэросъёмку как стандарт маркетинга и выигрывают переговоры уже на этапе первичного отбора.',
    },
];

const earningsCards: CardItem[] = [
    {
        title: 'Быстрее закрывает сделку по аренде',
        text: 'Арендатор смотрит видео, понимает объект удалённо и приезжает уже с намерением, а не «просто посмотреть».',
    },
    {
        title: 'Повышает ставку',
        text: 'Объект с аэросъёмкой воспринимается как более управляемый и ухоженный, что влияет на готовность платить выше.',
    },
    {
        title: 'Привлекает международных арендаторов',
        text: 'Операторы, работающие по западным стандартам, чаще включают в шорт-лист объекты с полноценным видеоматериалом.',
    },
    {
        title: 'Усиливает инвестиционную презентацию',
        text: 'Видео с воздуха передаёт масштаб и контекст лучше статичных слайдов и делает презентацию более убедительной.',
    },
];

const savingsCards: CardItem[] = [
    {
        title: 'Находит проблемы на кровле до протечки',
        text: 'Повреждения покрытия, засоры водостоков и проблемные примыкания видны раньше, чем становятся дорогим ремонтом.',
    },
    {
        title: 'Фиксирует состояние перед сдачей в аренду',
        text: 'Визуальная документация «на входе» защищает в спорах о том, что было повреждено арендатором, а что существовало до.',
    },
    {
        title: 'Снижает расходы на инспекцию',
        text: 'Регулярный облет обычно дешевле наземного обхода с подъёмниками или лесами, при этом даёт сопоставимую картину.',
    },
    {
        title: 'Снижает риск провала на переговорах',
        text: 'Без визуала объект часто проигрывает конкурентам не по качеству, а по понятности и упаковке.',
    },
];

const deliverablesVideo: string[] = [
    'Презентационный ролик 2–4 минуты (монтаж, титры, музыка) — для сайта, питча и переговоров',
    'Короткая версия 30–60 секунд — для соцсетей и рассылок',
    'Облётный мастер-кат — полный материал без сокращений',
    'FPV-пролёт по внутренним пространствам (по запросу или в пакете Extended)',
];

const deliverablesDocs: string[] = [
    'Фото объекта с воздуха — 20–40 финальных кадров в высоком разрешении',
    'Ортофотоплан территории — для планирования, согласований и презентаций',
    'Детальные фото кровли и фасада — для технического контроля или страховой',
    'Аннотированная схема территории с обозначением зон (опционально)',
];

const formatItems: string[] = [
    'Видео: MP4, H.264/H.265, разрешение 4K (3840×2160), 24/30 fps',
    'Фото: JPG высокое качество, исходники RAW по запросу',
    'Ортофото: JPG или GeoTIFF (с геопривязкой — по запросу)',
    'Архив передаётся через Google Drive или WeTransfer',
];

const timingItems: string[] = [
    'Фото-пакет: 2–3 рабочих дня после съёмки',
    'Монтаж ролика: 4–7 рабочих дней',
    'Срочный монтаж: до 48 часов (допуслуга)',
];

const useCases: CardItem[] = [
    {
        title: 'Листинг для аренды промышленной площади',
        text: 'Собственник показывает развязку, доки, парковку и периметр в одном ролике. Звонки от арендаторов приходят уже с пониманием объекта.',
    },
    {
        title: 'Инвестиционный меморандум',
        text: 'Девелопер добавляет съёмку участка и контекста окружения, чтобы инвестор видел, где расположен актив и почему проект имеет смысл.',
    },
    {
        title: 'Ежемесячный отчёт управляющей компании',
        text: 'Регулярная аэросъёмка становится визуальным приложением к отчёту: видно динамику по территории, кровле и инфраструктуре.',
    },
    {
        title: 'Маркетинг логистической компании',
        text: 'FPV-пролёт по складскому залу показывает высоту стеллажей, организацию пространства и операционный порядок.',
    },
    {
        title: 'Инспекция перед продажей объекта',
        text: 'Аэросъёмка фиксирует состояние кровли, фасада и территории до сделки и снижает риск последующих споров.',
    },
    {
        title: 'Тендер или заявка',
        text: 'Видео объекта с воздуха усиливает тендерный пакет и работает убедительнее, чем таблицы характеристик.',
    },
];

const examples: CardItem[] = [
    {
        title: 'Логистический комплекс, 8 000 м², район Лило, Тбилиси',
        text: 'Съёмка перед сдачей первой очереди в аренду: четыре стороны, два облётных круга, проезд вдоль доков и въезд через КПП. Финал: ролик 2:40 + версия 45 секунд + ортофото. Готовность пакета — 5 рабочих дней.',
    },
    {
        title: 'Производственный цех, металлообработка, пригород Тбилиси',
        text: 'FPV-пролёт DJI Avata 2 по главному залу + внешние кадры. Итоговый ролик 3:10 использовался на стенде промышленной выставки и на корпоративном сайте.',
    },
    {
        title: 'Складской комплекс, кровельная инспекция после зимы',
        text: 'Детальная съёмка примыканий, водостоков и парапетов двух корпусов. Фото-отчёт: 38 кадров с аннотациями. Обнаружено 3 проблемных участка для точечного ремонта.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '50–70%',
        label: 'Снижение стоимости инспекции',
        text: 'При замене лесов и подъёмников на дрон-мониторинг на ряде промышленных объектов в Европе.',
    },
    {
        value: 'До 4 ч vs 15 мин',
        label: 'Обход периметра',
        text: 'Склад 5+ гектаров пешком против облёта дроном с полным видеопокрытием.',
    },
    {
        value: 'Класс A',
        label: 'Растущий спрос',
        text: 'Международные арендаторы чаще принимают решение по цифровым материалам ещё до выезда на объект.',
    },
    {
        value: '1 съёмочный день',
        label: 'Пакет на год работы',
        text: 'Один выезд закрывает ролик, фото и ортофото для сайта, листинга, презентаций и переговоров.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка склада и зачем это нужно?',
        answer:
            'Это видео и фото объекта с дрона, которые показывают масштаб территории, подъездные пути, доки, кровлю и контекст расположения. Такой материал помогает быстрее сдавать площадь, понятнее презентовать актив инвестору и вести технический контроль без сложной наземной инспекции.',
    },
    {
        question: 'Дрон снимает только снаружи или может работать внутри?',
        answer:
            'И так, и так. Для экстерьера используется DJI Air 3S. Для внутренних пространств — FPV-дрон DJI Avata 2 с защитными кожухами, который может работать в закрытых помещениях без GPS.',
    },
    {
        question: 'Нужно ли останавливать работу склада на время съёмки?',
        answer:
            'Нет. Съёмка обычно проводится без остановки процессов. Для внутреннего FPV заранее согласуется короткий тайм-слот в конкретных зонах.',
    },
    {
        question: 'Что такое ортофотоплан и зачем он нужен?',
        answer:
            'Ортофото — это точный вид строго сверху, собранный из серии снимков. Подходит для планирования территории, презентаций, согласований и документации перед банком или арендатором.',
    },
    {
        question: 'В каком формате выдаются материалы?',
        answer:
            'Видео передаётся в MP4 4K, фото — в JPG высокого качества, ортофото — в JPG или GeoTIFF по запросу. Передача через Google Drive или WeTransfer.',
    },
    {
        question: 'Сколько занимает съёмка и монтаж?',
        answer:
            'Выезд обычно занимает 2–4 часа. Фото-пакет готовится за 2–3 рабочих дня, монтаж ролика — за 4–7 рабочих дней.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка склада в Тбилиси?',
        answer:
            'Standard: 490 ₾. Business: 890 ₾. Extended: 1 390 ₾. Точная стоимость зависит от площади объекта, набора задач и сроков.',
    },
    {
        question: 'Нужны ли разрешения на полёт над промышленным объектом в Тбилиси?',
        answer:
            'Зависит от зоны. В районах, близких к аэропорту, требуется согласование. Мы проверяем зону заранее и при необходимости оформляем разрешение через GCAA.',
    },
    {
        question: 'Что такое GCAA и почему это важно?',
        answer:
            'GCAA — Агентство гражданской авиации Грузии, регулирующее полёты дронов. Работа в рамках правил снижает юридические и операционные риски для владельца объекта.',
    },
    {
        question: 'Можно ли организовать регулярную съёмку раз в месяц или квартал?',
        answer:
            'Да. Для мониторинга объектов можно запланировать регулярные выезды. При договоре от 3 выездов стоимость одного выезда ниже разовой.',
    },
    {
        question: 'Что если в день съёмки плохая погода?',
        answer:
            'При сильном ветре, дожде или тумане съёмка переносится на ближайший подходящий день без дополнительной оплаты.',
    },
    {
        question: 'Можно ли снять несколько объектов за один день?',
        answer:
            'Если объекты находятся в Тбилиси или рядом, это обычно возможно. Логистика и тайминг согласуются заранее.',
    },
    {
        question: 'Кому принадлежат права на материалы после съёмки?',
        answer:
            'После оплаты права на финальные материалы переходят заказчику. Возможность использования в портфолио согласуется отдельно.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Понимание B2B-задач',
        text: 'Снимаем не «красивые пролёты», а материал под конкретную цель: листинг, питч, отчёт или тендер.',
    },
    {
        title: 'Работа в рамках законодательства Грузии',
        text: 'Проверяем зоны, оформляем разрешения GCAA и координируем полёты в ограниченных районах.',
    },
    {
        title: 'Два типа дронов под разные задачи',
        text: 'DJI Air 3S для внешней съёмки и DJI Avata 2 для внутренних FPV-пролётов в защищённой конфигурации.',
    },
    {
        title: 'Готовый материал, а не только исходники',
        text: 'Вы получаете смонтированный ролик, короткие версии и обработанные фото, готовые к публикации.',
    },
    {
        title: 'Чёткие сроки и структура сдачи',
        text: 'Фото через 2–3 дня, ролик через 4–7 дней, одна итерация правок включена.',
    },
    {
        title: 'Локальная экспертиза по Тбилиси',
        text: 'Понимаем контекст промышленных районов города и быстрее согласуем съёмку без лишних задержек.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Обсуждение задачи',
        text: 'Вы описываете объект и цель. Мы предлагаем оптимальный состав съёмки и ориентировочную стоимость.',
    },
    {
        step: 'Шаг 2',
        title: 'Проверка зоны и разрешения',
        text: 'Проверяем ограничения. Если нужно разрешение GCAA — оформляем заранее (обычно 1–3 рабочих дня).',
    },
    {
        step: 'Шаг 3',
        title: 'Выезд и съёмка',
        text: 'Работаем на объекте в согласованное время. Обычно 2–4 часа без остановки операционной деятельности.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Отбираем лучший материал, собираем ролик и обрабатываем фото по согласованному составу.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача файлов',
        text: 'Передаём финальный пакет через ссылку. Включена одна итерация правок по ролику.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Standard',
        price: '490 ₾',
        audience: 'Объект нужно задокументировать или быстро показать потенциальному арендатору',
        items: [
            'Выезд на объект (Тбилиси и ближайшие районы)',
            'Аэросъёмка экстерьера — 4K, 2–3 маршрута облёта',
            '15–20 финальных фото в высоком разрешении',
            'Необработанный видеоматериал (нарезка без монтажа)',
            'Передача через Google Drive, срок 2–3 рабочих дня',
        ],
        addons: ['Смонтированный ролик: +150 ₾', 'Разрешение GCAA (если зона ограничена): +90 ₾'],
        timeline: '2–3 рабочих дня',
    },
    {
        title: 'Business',
        price: '890 ₾',
        audience: 'Нужен готовый материал для листинга, сайта и презентации инвестору',
        items: [
            'Выезд на объект (Тбилиси и ближайшие районы)',
            'Аэросъёмка экстерьера + детальная съёмка кровли и фасада',
            '30–40 финальных фото в высоком разрешении',
            'Презентационный ролик 2–3 мин (монтаж, музыка, титры)',
            'Короткая версия 30–45 сек для соцсетей и рассылок',
            'Ортофото территории (вид сверху)',
            'Разрешение GCAA — включено',
        ],
        addons: [
            'FPV-пролёт внутри: +350 ₾',
            'Аннотированная схема территории: +100 ₾',
            'Срочный монтаж (48 часов): +200 ₾',
        ],
        timeline: '5–7 рабочих дней',
        popular: true,
    },
    {
        title: 'Extended',
        price: '1 390 ₾',
        audience: 'Полный визуальный пакет: наружная съёмка + внутренний FPV + документация',
        items: [
            'Полный объём пакета Business',
            'FPV-пролёт по внутренним пространствам (склад, цех, производственный зал)',
            'Финальный ролик 3–5 мин с интеграцией внешней и внутренней съёмки',
            'Детальный фото-отчёт по кровле',
            'Разрешение GCAA — включено',
        ],
        addons: [
            'Ежемесячный мониторинг (договор от 3 выездов): от 390 ₾/выезд',
            'RAW-исходники: +150 ₾',
            'Вертикальные форматы для Reels (9:16): +120 ₾',
        ],
        timeline: '7–10 рабочих дней',
    },
];

const relatedServices: CardItem[] = [
    {
        title: 'Мониторинг строительства',
        text: 'Регулярные облёты, фото-отчёты для банка и инвесторов, контроль соответствия плану.',
    },
    {
        title: 'Инспекция объектов и фасадов',
        text: 'Детальная съёмка кровли, фасада и примыканий для страховой и планирования ремонта.',
    },
    {
        title: 'Аэросъёмка коммерческой недвижимости',
        text: 'Съёмка офисных центров, торговых комплексов и коммерческих площадей для листинга и презентаций.',
    },
    {
        title: '360° виртуальный тур',
        text: 'Интерактивный формат, позволяющий удалённо «пройтись» по объекту снаружи и изнутри.',
    },
];

const relatedServiceLinks = [
    '/drone-services/construction-monitoring',
    '/drone-services/building-inspection',
    '/drone-services/real-estate',
    '/360-tours/real-estate',
];

const mistakes: string[] = [
    'Снимать объект только с земли и считать это полноценной презентацией.',
    'Думать, что аэросъёмка нужна только «красивым» объектам.',
    'Публиковать сырой материал без монтажной логики.',
    'Летать без разрешения в зонах рядом с аэропортом.',
    'Не делать кровельную инспекцию перед сдачей в аренду.',
    'Снимать один раз и не обновлять материалы по мере изменений объекта.',
];

const freeTips: string[] = [
    'Если нет дрона, найдите хотя бы верхнюю точку и снимите объект сверху на смартфон как временное решение.',
    'Опишите объект через логистические параметры: площадь, доки, высоты, расстояние до развязки и аэропорта.',
    'Добавьте карту с маркером объекта или скриншот спутникового вида, чтобы дать пространственный контекст.',
    'Попросите подрядчиков фиксировать состояние кровли и фасада при ближайшем обслуживании.',
    'Проверьте заранее, попадает ли объект в ограниченную авиационную зону и потребуется ли разрешение GCAA.',
];

const checklist: string[] = [
    'Определена цель материала: аренда, инвестор, отчёт или маркетинг',
    'Проверена авиационная зона и понятна необходимость разрешения GCAA',
    'Согласован доступ на территорию (охрана, КПП, ограничения по зонам)',
    'Определены ключевые точки съёмки: доки, въезды, кровля, внутренние пространства',
    'Территория приведена в порядок перед съёмочным днём',
    'Определено, нужна ли FPV-съёмка внутри и согласован тайм-слот',
    'Согласован формат финальных материалов',
    'Определена дата, к которой нужен готовый пакет',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Чем аэросъёмка склада отличается от обычной фотосъёмки?',
        answer: [
            'Наземная съёмка показывает фасад и отдельные точки. Этого часто недостаточно, чтобы понять объект как актив.',
            'Аэросъёмка показывает территорию в контексте: подъезды, доки, открытое хранение, окружение и транспортную доступность.',
            'Дополнительно дрон фиксирует кровлю и верхние части фасада, которые критичны для технического контроля.',
        ],
    },
    {
        question: 'Как аэросъёмка помогает привлекать международных арендаторов?',
        answer: [
            'Международные операторы сначала оценивают материалы удалённо и формируют шорт-лист до выезда.',
            'Если у объекта нет качественного видео с воздуха, он часто выбывает на раннем этапе отбора.',
            'Короткий ролик закрывает ключевые вопросы: доступ, доки, масштаб, состояние территории и инфраструктура.',
        ],
    },
    {
        question: 'Можно ли использовать аэросъёмку для технического контроля объекта?',
        answer: [
            'Да. Это один из самых практичных сценариев использования.',
            'Съёмка помогает отслеживать состояние кровли, фасада, водостоков, примыканий и покрытия территории.',
            'Квартальные облёты формируют историю состояния актива и упрощают работу управляющей компании.',
        ],
    },
    {
        question: 'Как получить разрешение на съёмку рядом с аэропортом Тбилиси?',
        answer: [
            'В ряде промышленных районов рядом с аэропортом действуют ограничения.',
            'Для коммерческого полёта подаётся заявка с координатами, датой и параметрами миссии в GCAA.',
            'Обычно согласование занимает 1–3 рабочих дня. Мы берём эту процедуру на себя.',
        ],
    },
    {
        question: 'Что такое регулярный мониторинг объекта и когда он нужен?',
        answer: [
            'Это серия облётов по одному маршруту через фиксированный интервал (месяц, квартал, полгода).',
            'Полезно для стройки, управления несколькими объектами и долгосрочной документации состояния актива.',
            'При договоре на несколько выездов стоимость одного визита обычно ниже разовой.',
        ],
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка складов и индустриальных объектов в Тбилиси',
    description:
        'Аэросъёмка складов, логистических комплексов и промышленных территорий в Тбилиси. Презентационный ролик, ортофото и визуальная документация для аренды, инвестиций и контроля.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: {
        '@type': 'Place',
        name: 'Тбилиси, Грузия',
    },
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '490',
        highPrice: '1390',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео, 360° туры и визуальные решения для бизнеса в Тбилиси.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Тбилиси, Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneWarehousesPage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-warehouses-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.24),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Warehouse Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка складов и индустриальных объектов в Тбилиси
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Визуализация, которую понимает арендатор, инвестор и партнёр — без лесов, без остановки
                                работы, за один день.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Склад площадью 5 000 м² сложно объяснить по телефону. Его нужно показать: подъезд,
                                количество доков, высоту, логику территории. Дрон делает это за несколько часов и
                                превращает объект в материал, который убеждает быстрее любого описания.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку объекта
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Посмотреть примеры
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 490 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Склад, логистика, индустриальные объекты.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–4 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">2–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Ортофото, инспекция кровли, ролики</li>
                                    <li>Разрешения GCAA включены по пакету</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка склада — простыми словами</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Это видео и фото объекта с воздуха: территория, фасад, кровля, подъездные пути и зоны
                            погрузки. Всё, что сложно полноценно снять с земли.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дрон поднимается на нужную высоту, облетает объект по маршруту и снимает в 4K. Материал
                            собирается в презентационный ролик или фото-пакет для сайта, инвестора, листинга и отчётов.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Для внутренних пространств используется FPV-дрон с защитными кожухами: пролёт между
                            стеллажами и цехами показывает масштаб изнутри. Съёмка не останавливает работу объекта.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому нужна эта съёмка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что должна сделать эта съёмка</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Главная задача — сделать объект понятным удалённо. Крупные арендаторы и инвесторы принимают
                            решение ещё до выезда. Если у объекта нет видео, которое показывает масштаб, инфраструктуру и
                            транспортный контекст, он часто выпадает из раннего отбора.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Дополнительная функция — регулярный контроль: кровля, периметр, парковочные зоны и
                            строительные работы видны быстрее и дешевле, чем при наземных обходах.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что мешает нормально продвигать объект</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка помогает зарабатывать</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {earningsCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как аэросъёмка помогает не терять деньги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {savingsCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что вы получаете на выходе</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Видеоматериалы</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesVideo.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Фото и документация</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDocs.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Формат результата и сроки</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 lg:col-span-2">
                            <h3 className="text-lg font-bold text-white">Форматы файлов</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                {formatItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Сроки</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                {timingItems.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                            <p className="mt-5 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm leading-relaxed text-white/78">
                                Передача материалов: ссылка на папку с финальными файлами. Исходники — по запросу.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Где это реально используется</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как это выглядит на практике</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему это работает: цифры рынка</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="FAQ для первого заказа" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по цене, разрешениям и процессу"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Съёмка занимает 2–4 часа, согласование GCAA в ограниченных зонах обычно 1–3 рабочих дня." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Стоимость съёмки</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Все цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/64">{card.audience}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-sm text-white/78">
                                    <span className="font-semibold text-white">Срок:</span> {card.timeline}
                                </p>
                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Доп. опции</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Нужен расчёт под конкретный объект и срок? Опишите площадь и цель, предложим оптимальный пакет.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service, index) => (
                            <Link
                                key={service.title}
                                href={relatedServiceLinks[index]}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Частые ошибки при продвижении промышленных объектов</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно сделать прямо сейчас, без покупки</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к аэросъёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Если задача с презентацией или контролем склада стоит на ближайшие недели, лучше подготовить
                            визуальный пакет заранее и входить в переговоры с материалом, а не с описанием.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить съёмку объекта
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#080808] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку объекта</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите площадь и задачу объекта. Предложим подходящий пакет, сроки и формат
                                    материалов под вашу цель.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <WarehousesContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-warehouses-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---

## /drone-services/drone-wine
Lines: 1266
```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { WineContactForm } from './WineContactForm';

type CardItem = {
    title: string;
    text: string;
};

type FaqItem = {
    question: string;
    answer: string;
};

type StepItem = {
    step: string;
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    subtitle: string;
    price: string;
    duration: string;
    delivery: string;
    items: string[];
    addons: string[];
    popular?: boolean;
};

type SocialProofItem = {
    value: string;
    label: string;
    text: string;
};

type MistakeItem = {
    title: string;
    text: string;
};

type ExpandedAnswer = {
    question: string;
    answer: string[];
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
    note?: string;
};

type NavLink = {
    label: string;
    href: string;
};

const CANONICAL_URL = 'https://breus.media/drone-services/drone-wine';
const PAGE_TITLE = 'Аэросъёмка виноградников в Грузии — Breus Media';
const PAGE_DESCRIPTION =
    'Аэросъёмка виноградников, виноделен и агротуров в Грузии. Имиджевое видео, мониторинг лоз, контент для экспорта. От 390 ₾. Тбилиси, Кахетия, вся Грузия.';

const serviceTypes: CardItem[] = [
    {
        title: 'Имиджевая видеосъёмка',
        text: 'Главный ролик 1,5–3 минуты для сайта, YouTube, презентации инвестору или дистрибьютору: панорамы, детали, Ртвели, пролёты над лозами, цветокоррекция и музыка.',
    },
    {
        title: 'Контент для туризма и соцсетей',
        text: 'Серия коротких вертикальных и горизонтальных роликов для Instagram, Facebook, TikTok и Google Maps. Форматы под Reels и Shorts для агротуризма и дегустаций.',
    },
    {
        title: 'Мониторинг и агросъёмка',
        text: 'Плановая съёмка и фотограмметрия для оценки состояния лоз, картирования территории и подготовки материалов для инвесторов или страховых отчётов. Мультиспектральная аналитика — по запросу.',
    },
];

const audienceCards: CardItem[] = [
    {
        title: 'Семейные винодельни',
        text: 'Производите вино с историей и характером, но визуал пока не отражает уровень продукта. Аэросъёмка создаёт образ, соответствующий качеству вина.',
    },
    {
        title: 'Агротуризм и wine-отели',
        text: 'Гостю нужно почувствовать место до приезда. Видео с дрона — самый быстрый способ передать атмосферу и увеличить бронирования.',
    },
    {
        title: 'Экспортёры и дистрибьюторы',
        text: 'Для международных переговоров нужна убедительная визуализация масштаба, инфраструктуры и терруара. Видео с воздуха решает это лучше текста.',
    },
    {
        title: 'Девелоперы и инвесторы в АПК',
        text: 'Планируете покупку или расширение? Аэросъёмка показывает границы, рельеф, инфраструктуру и окружение для принятия решений.',
    },
    {
        title: 'Туристические маршруты и wine-туры',
        text: 'Туроператоры получают готовый контент для каталогов, рекламы и соцсетей: Кахетия, Имерети, Рача-Лечхуми и другие регионы.',
    },
    {
        title: 'Крупные агрохолдинги',
        text: 'Регулярная сезонная съёмка для мониторинга больших территорий, архивирования динамики и картирования.',
    },
];

const painCards: CardItem[] = [
    {
        title: 'Фотографии с телефона',
        text: 'Хорошее вино и честный продукт теряют ценность в глазах клиента, если сайт и соцсети выглядят как домашний архив.',
    },
    {
        title: 'Невозможно передать масштаб',
        text: 'Гектары лоз на фоне Кавказа нельзя показать с земли. Без аэровидео турист и покупатель не понимают, что выбирают.',
    },
    {
        title: 'Слабая онлайн-видимость',
        text: 'Поисковая выдача и карты чаще показывают винодельни с видеоконтентом. Без него вы уступаете конкурентам по вниманию.',
    },
    {
        title: 'Трудности с экспортными переговорами',
        text: 'Дистрибьюторы хотят видеть производство и инфраструктуру. Без профессионального видео переговоры затягиваются или не стартуют.',
    },
    {
        title: 'Сезонность без отдачи',
        text: 'Ртвели проходит, но без съёмки не превращается в актив. Один день съёмки даёт контент на весь следующий год.',
    },
    {
        title: 'Нет отличия от соседей',
        text: 'В одном районе сотни виноделен. Сильный визуал делает ваше место узнаваемым и формирует отдельный образ бренда.',
    },
];

const earnCards: CardItem[] = [
    {
        title: 'Больше бронирований агротуров',
        text: 'Туристы выбирают глазами. Качественное видео поднимает конверсию из просмотра в бронь.',
    },
    {
        title: 'Выход на международный рынок',
        text: 'Имиджевый ролик открывает двери к зарубежным дистрибьюторам, блогерам и туристическим агентствам.',
    },
    {
        title: 'Рост среднего чека',
        text: 'Винодельня, которая выглядит премиально, воспринимается как продукт более высокого класса.',
    },
    {
        title: 'Вирусный охват',
        text: 'Кадры над виноградниками Кахетии органически распространяются: репосты, сохранения, отметки друзей.',
    },
];

const saveCards: CardItem[] = [
    {
        title: 'Не теряет туристов к конкурентам',
        text: 'Пока другие винодельни усиливают видеоприсутствие, вы сохраняете видимость в поиске и на картах.',
    },
    {
        title: 'Не теряет переговоры',
        text: 'Инвестор и дистрибьютор, увидевшие хозяйство с воздуха, приходят на встречу подготовленными.',
    },
    {
        title: 'Не теряет время на повторные объяснения',
        text: 'Готовый ролик работает вместо длинных описаний: его смотрят, пересылают и публикуют.',
    },
    {
        title: 'Не теряет деньги на переделку',
        text: 'Снимаем по шот-листу и задаче, а не по принципу «снимем и посмотрим потом».',
    },
];

const shootDayItems: string[] = [
    'Выезд оператора-пилота на объект',
    'Брифинг на месте и согласование приоритетных точек',
    'Плановая аэросъёмка на DJI Air 3S (4K, stabilized)',
    'FPV-пролёты на DJI Avata 2 (в пакетах, где включено)',
    'Съёмка деталей: грозди, бочки, квеври, процесс Ртвели',
    'Резервное время на дубли и корректировку маршрута',
];

const finalResultItems: string[] = [
    'Смонтированный имиджевый ролик 1,5–3 минуты (цветокоррекция, музыка, титры)',
    'Короткие версии для соцсетей 15–60 секунд (количество зависит от пакета)',
    'Фотоподборка с воздуха 20–60 фото (JPEG/RAW)',
    'Вертикальные версии 9:16 для Stories, Reels и TikTok',
    'Горизонтальные версии 16:9 для YouTube и сайта',
    'Передача через облако в течение 3–7 рабочих дней',
];

const useCases: CardItem[] = [
    {
        title: 'Имиджевый ролик для сайта и YouTube',
        text: 'Панорама виноградника, вид на винодельню, детали производства и атмосфера хозяйства в одном основном материале.',
    },
    {
        title: 'Контент для Instagram и TikTok',
        text: 'Серия коротких историй: закаты над лозами, сбор урожая, наполнение квеври, дегустации.',
    },
    {
        title: 'Презентация для дистрибьютора',
        text: 'Видео-визитка для экспортных переговоров, которая показывает масштаб, оснащение и терруар до личного визита.',
    },
    {
        title: 'Продвижение агротура или wine-тура',
        text: 'Контент для турплатформ, агентств и рекламных кампаний: что увидит гость и какая атмосфера его ждёт.',
    },
    {
        title: 'Событийная съёмка Ртвели',
        text: 'Съёмка сбора урожая с воздуха: люди, ряды лоз, традиционный процесс. Один из самых сильных вирусных форматов.',
    },
    {
        title: 'Инвестиционная документация',
        text: 'Фиксация границ участка, дорог, инфраструктуры и смежных земель для сделки, расширения или привлечения инвестора.',
    },
];

const examples: CardItem[] = [
    {
        title: 'Имиджевый ролик: семейная винодельня в Кахетии',
        text: 'Рассвет над рядами Саперави, подъём над маранью, пролёт вдоль лоз, кадры квеври и закат над долиной. Финал — 2-минутный ролик с кинематографической цветокоррекцией.',
    },
    {
        title: 'Ртвели: сбор урожая в горной Рача',
        text: 'FPV-пролёт над рабочими рядами, динамика процесса и вертикальные ролики по 20–30 секунд. За день — серия из 8 готовых публикаций.',
    },
    {
        title: 'Агротуризм: промо для турагентства Кахети',
        text: 'Три локации за один день: усадьба, смотровая площадка, дегустационный зал. Итог — ролик 90 секунд + 4 короткие версии под платформы.',
    },
];

const socialProof: SocialProofItem[] = [
    {
        value: '8 000 лет',
        label: 'История виноделия Грузии',
        text: 'Грузия считается исторической родиной вина, а метод квеври внесён в список ЮНЕСКО. Историю хозяйства важно показать визуально.',
    },
    {
        value: '70 км/декаду',
        label: 'Смещение ареалов из-за климата',
        text: 'Климат меняется, и окно уникальности локаций ограничено. Контент фиксирует терруар в конкретный момент времени.',
    },
    {
        value: 'В 3–5 раз',
        label: 'Больше вовлечённость видео',
        text: 'Публикации с видео чаще получают реакцию, чем текст и фото; для wine-контента этот разрыв обычно ещё выше.',
    },
    {
        value: '1 день',
        label: 'Контентный запас на 3 месяца+',
        text: 'При правильном плане один съёмочный день закрывает 10–15 публикаций, основной ролик и фотоподборку.',
    },
];

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое аэросъёмка виноградников и для чего она нужна?',
        answer:
            'Это съёмка винодельни, виноградника или агроусадьбы с помощью дрона. Она показывает масштаб территории, рельеф и расположение объектов. Для виноделен особенно важно передать дух места: терруар, архитектуру и атмосферу, которые помогают продавать туры, вино и экспортную историю бренда.',
    },
    {
        question: 'Можно ли летать на дроне в Кахетии и других регионах Грузии?',
        answer:
            'Да, в открытой сельской местности и на частных угодьях за пределами ограниченных зон коммерческая съёмка возможна. Мы работаем по правилам GCAA, проверяем зону заранее и при необходимости оформляем разрешения.',
    },
    {
        question: 'Влияет ли погода на съёмку?',
        answer:
            'Да, это ключевой фактор. Лучший свет обычно утром после рассвета и за час до заката. При сильном ветре, дожде или тумане съёмку переносим. Для Кахетии сильные визуальные сезоны: май–июль и сентябрь–октябрь (Ртвели).',
    },
    {
        question: 'Как долго снимается один объект?',
        answer:
            'Стандартно 4–6 часов на объекте. Этого хватает, чтобы снять территорию, здания, виноградник и детали процесса. Для больших хозяйств или нескольких локаций планируется расширенный формат.',
    },
    {
        question: 'Нужно ли готовить объект к съёмке?',
        answer:
            'Специальной подготовки не требуется. Достаточно убрать лишние временные предметы из ключевых точек кадра. Ракурсы, маршруты и время съёмки мы берём на себя.',
    },
    {
        question: 'В каком формате клиент получает материалы?',
        answer:
            'Вы получаете готовый ролик в MP4 (4K/Full HD), фото в JPEG и RAW по запросу, плюс версии 16:9 для сайта/YouTube и 9:16 для Stories/TikTok. Передача через облако.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит аэросъёмка виноградника в Грузии?',
        answer:
            'Базовый пакет — от 390 ₾. Стандартный съёмочный день с монтажом — от 890 ₾. Расширенный пакет с FPV и дополнительным контентом — от 1 490 ₾. Точная цена зависит от расстояния, задач и объёма постпродакшна.',
    },
    {
        question: 'Какие форматы итогового контента вы отдаёте?',
        answer:
            'Основной ролик 16:9 (1,5–3 мин), короткие ролики 9:16 (15–60 сек), фото JPEG/RAW. По запросу доступны raw footage, версии с субтитрами, замедленные фрагменты или вариант без музыки.',
    },
    {
        question: 'Как быстро будет готов материал?',
        answer:
            'Фотоподборка обычно готова за 2–3 рабочих дня, смонтированный ролик — за 5–7 рабочих дней. Срочный монтаж за 2–3 дня доступен как доп. опция.',
    },
    {
        question: 'Нужны ли разрешения GCAA для съёмки в Кахетии?',
        answer:
            'Для большинства объектов в открытой сельской зоне отдельное разрешение не требуется. Если объект в буферной или ограниченной зоне, оформляем согласование заранее (обычно 1–3 рабочих дня).',
    },
    {
        question: 'Вы работаете только в Тбилиси?',
        answer:
            'Нет, работаем по всей Грузии: Тбилиси, Кахетия, Картли, Имерети, Рача, Аджария и другие регионы. Выезды свыше 80 км считаются отдельно.',
    },
    {
        question: 'Можно ли снять Ртвели, если это сезонная услуга?',
        answer:
            'Да, Ртвели — один из самых востребованных форматов. Обычно сезон активен с конца августа по октябрь в зависимости от региона и сорта. Оптимально бронировать дату за 2–3 недели.',
    },
    {
        question: 'Можно ли заказать регулярную съёмку раз в месяц?',
        answer:
            'Да, для мониторинга лоз и регулярного контент-плана доступен абонементный формат с индивидуальным расчётом частоты, логистики и объёма материалов.',
    },
];

const whyBreusCards: CardItem[] = [
    {
        title: 'Работаем в Грузии и знаем контекст',
        text: 'Базируемся в Тбилиси, регулярно снимаем в регионах и понимаем локальную логистику, свет и сезонность.',
    },
    {
        title: 'Оборудование под задачу',
        text: 'DJI Air 3S для стабильной панорамы и детализации, DJI Avata 2 для FPV-пролётов сквозь ряды лоз и арки марани.',
    },
    {
        title: 'Съёмка с планированием',
        text: 'Перед выездом формируем шот-лист и тайминг света, чтобы финальный монтаж был цельным, а не случайным.',
    },
    {
        title: 'Готовый контент, а не просто исходники',
        text: 'Вы получаете смонтированные и обработанные материалы, готовые к публикации. Raw — по запросу.',
    },
    {
        title: 'Работа по задаче клиента',
        text: 'Контент для экспорта, соцсетей, туризма и сайта отличается. Подбираем под цель, а не по шаблону.',
    },
    {
        title: 'Соответствие правилам GCAA',
        text: 'Дроны зарегистрированы, пилоты сертифицированы, а для сложных зон заранее оформляются необходимые согласования.',
    },
];

const processSteps: StepItem[] = [
    {
        step: 'Шаг 1',
        title: 'Созвон и бриф',
        text: 'Формулируем цель, нужные форматы, дату и локацию. Согласовываем стоимость и пакет.',
    },
    {
        step: 'Шаг 2',
        title: 'Подготовка и планирование',
        text: 'Проверяем карту ограничений GCAA, собираем шот-лист и маршруты, смотрим прогноз погоды.',
    },
    {
        step: 'Шаг 3',
        title: 'Съёмочный день',
        text: 'Работаем по плану на локации, гибко реагируя на свет, погоду и новые сцены.',
    },
    {
        step: 'Шаг 4',
        title: 'Монтаж и обработка',
        text: 'Отбираем лучшие кадры, делаем цветокоррекцию, музыку, титры и адаптации под платформы.',
    },
    {
        step: 'Шаг 5',
        title: 'Передача и правки',
        text: 'Отдаём материалы через облако и вносим согласованные небольшие правки в финальную версию.',
    },
];

const pricingPackages: PricingPackage[] = [
    {
        title: 'Стартовый',
        subtitle: 'Быстрый старт для небольших хозяйств',
        price: 'от 390 ₾',
        duration: '2–3 часа на объекте',
        delivery: '3 рабочих дня',
        items: [
            'Выезд в пределах 80 км от Тбилиси',
            'Аэросъёмка территории и виноградника',
            '20 обработанных фото (JPEG)',
            '1 короткий ролик 16:9 до 60 секунд',
            'Цветокоррекция без нарративного монтажа',
        ],
        addons: ['Вертикальная версия 9:16 — +50 ₾', 'RAW-файлы — +80 ₾', 'Срочно (1–2 дня) — +150 ₾'],
    },
    {
        title: 'Стандартный',
        subtitle: 'Основной пакет под сайт, соцсети и презентации',
        price: 'от 890 ₾',
        duration: 'Полный день (5–6 часов)',
        delivery: '5–7 рабочих дней',
        items: [
            'Выезд в пределах 80 км от Тбилиси',
            'Полная аэросъёмка объекта на DJI Air 3S',
            '40 обработанных фото (JPEG + опционально RAW)',
            'Имиджевый ролик 16:9 на 1,5–2 минуты с музыкой',
            '2 коротких ролика 9:16 до 45 секунд',
            'Передача через облако',
        ],
        addons: [
            'FPV-пролёты DJI Avata 2 — +200 ₾',
            'Дополнительные Reels (3 шт.) — +150 ₾',
            'Дополнительная локация — +200 ₾',
            'Срочно (2–3 дня) — +200 ₾',
        ],
        popular: true,
    },
    {
        title: 'Премиум',
        subtitle: 'Максимальный пакет для экспорта и кампаний',
        price: 'от 1 490 ₾',
        duration: 'Полный день + второй день по договорённости',
        delivery: '7 рабочих дней',
        items: [
            'Выезд в пределах 120 км от Тбилиси',
            'DJI Air 3S + FPV DJI Avata 2',
            '60 обработанных фото (JPEG + RAW)',
            'Имиджевый ролик 16:9 на 2–3 минуты',
            '5 вертикальных роликов 9:16 для Reels/TikTok',
            'Дополнительная горизонтальная версия 16:9 (60–90 сек)',
            'До 2 локаций в одном проекте',
            'Передача через облако + резервный диск по запросу',
        ],
        addons: [
            'Третья и следующие локации — +200 ₾',
            'Интервью с виноделом (наземная съёмка) — +150 ₾',
            'Дополнительный день в Ртвели — индивидуально',
        ],
    },
];

const relatedServices: RelatedService[] = [
    {
        title: 'Аэросъёмка для туризма',
        text: 'Съёмка маршрутов, природных локаций и культурных объектов для туристических кампаний.',
        href: '#contact',
        note: 'Скоро',
    },
    {
        title: 'FPV-съёмка',
        text: 'Кинематографические пролёты сквозь ряды виноградника, арки и пространства марани.',
        href: '/drone-fpv-cinema',
    },
    {
        title: 'Аэросъёмка мероприятий',
        text: 'Ртвели, дегустации, фестивали и корпоративные события с воздуха.',
        href: '/drone-services/drone-events',
    },
    {
        title: '360° тур для туризма',
        text: 'Иммерсивный виртуальный тур по винодельне для сайта, карт и туристических платформ.',
        href: '/360-tour-service/360-tour-tourism',
    },
];

const mistakes: MistakeItem[] = [
    {
        title: 'Снимают только один раз и «на всё»',
        text: 'Виноградник выглядит по-разному по сезонам. Один неудачный выезд может дать контент, который не передаёт реальную красоту места.',
    },
    {
        title: 'Снимают в середине дня',
        text: 'Жёсткий зенитный свет делает картинку плоской. Лучшее время — первый час после рассвета и последний час перед закатом.',
    },
    {
        title: 'Заказывают только видео и забывают про фото',
        text: 'Фото нужны сайту, прессе и каталогам, а видео — соцсетям и презентациям. Оптимально снимать оба формата за один выезд.',
    },
    {
        title: 'Работают без шот-листа',
        text: 'Без плана получается много похожих кадров и мало важных ракурсов: вид на горы, марани, ряды лоз, центральные точки хозяйства.',
    },
    {
        title: 'Ожидают «быстрый монтаж за ночь»',
        text: 'Качественный имиджевый монтаж требует времени. Обещание «завтра утром» часто означает формальную сборку без глубины.',
    },
    {
        title: 'Не думают о дистрибуции',
        text: 'Контент должен сразу иметь план публикации: каналы, форматы, подписи. Иначе даже хорошее видео остаётся в папке.',
    },
];

const freeTips: string[] = [
    'Снимите короткий ролик на смартфон в золотой час: 5–7 утра или за час до заката.',
    'Добавьте хотя бы одно фото с воздуха на главную страницу сайта для более сильного первого впечатления.',
    'Опишите ваш терруар в 2–3 предложениях: высота, регион, горы на горизонте — это помогает и SEO, и доверию.',
    'Составьте список ключевых ракурсов заранее: аллея, вид на горы, старая стена, сцены Ртвели.',
    'Проверьте карточку Google Maps и добавьте минимум 5–10 актуальных фото через Google Business Profile.',
];

const checklist: string[] = [
    'Дата подтверждена за 5–7 дней и прогноз погоды проверен',
    'Зона съёмки проверена на ограничения GCAA',
    'Шот-лист согласован: ракурсы, приоритеты, порядок',
    'Из ключевых точек кадра убраны лишние временные элементы',
    'Определён золотой час: выезд до рассвета или за 2 часа до заката',
    'Согласовано, нужны ли люди в кадре (команда, гости, работники)',
    'Уточнены форматы финального материала и необходимость RAW',
    'Подтверждён способ передачи файлов и сроки выдачи',
];

const expandedAnswers: ExpandedAnswer[] = [
    {
        question: 'Как аэросъёмка помогает грузинским винодельням продавать вино на экспорт?',
        answer: [
            'Иностранные дистрибьюторы часто принимают первичное решение дистанционно, не приезжая на объект.',
            'Видео с дрона показывает масштаб хозяйства, инфраструктуру и терруар в формате, который нельзя передать текстом или отдельными фото.',
            'Ролик 2–3 минуты работает как предварительный визит и используется в рассылках, на выставках и в переговорах с импортёрами.',
        ],
    },
    {
        question: 'Какое лучшее время года для съёмки виноградников в Грузии?',
        answer: [
            'Май–июнь: молодые зелёные лозы и яркий контраст с рельефом.',
            'Июль–август: зрелые грозди, насыщенные цвета и детали продукта.',
            'Сентябрь–октябрь: Ртвели, золотая листва и максимальная кинематографичность. Оптимально планировать минимум два выезда в год.',
        ],
    },
    {
        question: 'Что такое FPV-съёмка и зачем она нужна винодельням?',
        answer: [
            'FPV — это управляемый вручную динамичный пролёт от первого лица через узкие пространства.',
            'Для виноделен это возможность пролететь между рядами лоз, под арками марани и через погреб, создавая эффект присутствия.',
            'Такой формат особенно хорошо работает в коротких соцсетевых роликах, где важно захватить внимание в первые секунды.',
        ],
    },
    {
        question: 'Подходит ли аэросъёмка для небольшой семейной винодельни?',
        answer: [
            'Да, и часто именно небольшие хозяйства получают самый заметный эффект от первого профессионального визуала.',
            'Для сильного ролика не нужны сотни гектаров: достаточно выразительного рельефа, архитектуры и атмосферы.',
            'Базовый пакет с фото и коротким роликом закрывает стартовую задачу и помогает быстро обновить сайт и соцсети.',
        ],
    },
    {
        question: 'Как Breus Media работает с удалёнными регионами Грузии?',
        answer: [
            'Для объектов в пределах 80 км от Тбилиси действует базовая логистика, дальше расчёт строится по расстоянию.',
            'В удалённых регионах возможен формат с ночёвкой, чтобы снять лучший утренний и вечерний свет.',
            'Логистику и тайминг планируем заранее, чтобы съёмочный день был максимально результативным.',
        ],
    },
];

const navigationLinks: NavLink[] = [
    { label: 'Аэросъёмка для недвижимости', href: '/drone-services/drone-real-estate' },
    { label: 'Аэросъёмка отелей и курортов', href: '/drone-hotels-tourism' },
    { label: 'FPV-съёмка', href: '/drone-fpv-cinema' },
    { label: 'Аэросъёмка мероприятий', href: '/drone-services/drone-events' },
    { label: '360° тур для туризма', href: '/360-tour-service/360-tour-tourism' },
    { label: 'Все услуги аэросъёмки', href: '/drone-services' },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...beginnerFaqItems, ...commercialFaqItems].map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Аэросъёмка виноградников и виноделен в Грузии',
    description:
        'Аэросъёмка виноградников, виноделен и агротуров в Грузии. Имиджевые ролики, контент для соцсетей, мониторинг территорий и материалы для экспортных переговоров.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        telephone: '+995574619393',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Тбилиси',
            addressCountry: 'GE',
        },
    },
    areaServed: [
        { '@type': 'Place', name: 'Тбилиси' },
        { '@type': 'Place', name: 'Кахетия' },
        { '@type': 'Place', name: 'Картли' },
        { '@type': 'Place', name: 'Имерети' },
        { '@type': 'Place', name: 'Рача' },
        { '@type': 'Place', name: 'Аджария' },
        { '@type': 'Place', name: 'Грузия' },
    ],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '390',
        highPrice: '1490',
        offerCount: '3',
    },
    url: CANONICAL_URL,
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Аэросъёмка, FPV-видео и 360° туры для бизнеса в Грузии.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Тбилиси',
        addressCountry: 'GE',
    },
    areaServed: 'Грузия',
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
};

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    alternates: {
        canonical: CANONICAL_URL,
    },
    openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: CANONICAL_URL,
        siteName: 'Breus Media',
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function DroneWinePage() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Контакты', href: '#contact' },
                ]}
            />

            <section
                id="drone-wine-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-24 pt-36 md:pb-28 md:pt-44"
            >
                <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2200&q=80')",
                    }}
                />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.25),transparent_45%),linear-gradient(180deg,rgba(8,8,8,0.3),rgba(8,8,8,0.94)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_360px]">
                        <div>
                            <p className="mb-5 inline-flex rounded-full border border-[#FFD23F]/35 bg-[#111111]/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">
                                Drone Wine Imaging
                            </p>

                            <h1 className="max-w-5xl text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Аэросъёмка виноградников и виноделен в Грузии
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
                                Имиджевое видео с дрона для вашей винодельни: передаём масштаб, атмосферу и терруар так,
                                чтобы клиент, турист или дистрибьютор захотел приехать ещё до первой дегустации.
                            </p>

                            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-lg">
                                Грузия — одна из древнейших винодельческих стран мира. Алазанская долина, Кахетия, Рача и
                                Имерети уникальны по-своему, но многие хозяйства до сих пор показывают себя плоско. Аэровидео
                                меняет это: масштаб лоз, пролёты над маранью во время Ртвели, архитектура и рельеф в одном
                                визуальном языке. Работаем по всей стране: Тбилиси, Телави, Сигнаги, Цинандали, Гори, Кутаиси.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Обсудить съёмку
                                </a>
                                <a
                                    href="#examples"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    Смотреть примеры работ
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Коротко</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">от 390 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">Винодельни, виноградники, агротуризм.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">4–6 ч</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Съёмка</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">3–7 дней</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Выдача</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>DJI Air 3S + DJI Avata 2</li>
                                    <li>Кахетия, Картли, Имерети, Рача, Аджария</li>
                                    <li>Имидж, Reels, экспорт, мониторинг</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что такое аэросъёмка для виноделен</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Аэросъёмка для виноделен и агробизнеса — это создание видео и фото с дрона, которое показывает
                            масштаб, характер и атмосферу хозяйства. Это не просто «красивые кадры сверху», а рабочий
                            инструмент маркетинга, туризма и доверия покупателей.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Основной съёмочный инструмент — DJI Air 3S: 48 МП, 4K/60fps и стабильный контролируемый пролёт.
                            Для узких траекторий между рядами лоз и внутри пространства марани используем FPV-дрон DJI Avata 2,
                            чтобы получить эффект кинематографического полёта от первого лица.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            Под каждую задачу формируем отдельный план: имиджевый ролик, материалы для соцсетей, экспортную
                            презентацию или мониторинг территории. На выходе вы получаете готовый смонтированный контент для
                            немедленного использования.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {serviceTypes.map((item) => (
                            <article key={item.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Кому подходит аэросъёмка виноградников</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что тормозит продажи вашего вина</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {painCards.map((card, index) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Боль {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h2 className="text-2xl font-bold md:text-3xl">Что это даёт: зарабатывает</h2>
                            <div className="mt-6 space-y-4">
                                {earnCards.map((item, index) => (
                                    <div key={item.title} className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Пункт {index + 1}</p>
                                        <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/72">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-[20px] border border-[#2a2a2a] bg-[#141414] p-7">
                            <h2 className="text-2xl font-bold md:text-3xl">Что это даёт: не теряет</h2>
                            <div className="mt-6 space-y-4">
                                {saveCards.map((item, index) => (
                                    <div key={item.title} className="rounded-[14px] border border-white/10 bg-white/[0.02] p-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Пункт {index + 1}</p>
                                        <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/72">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Работаем по всей Грузии: Кахетия, Картли, Имерети, Рача, Аджария. Один съёмочный день — и у
                            вас контентный запас на 12 месяцев вперёд.
                        </p>
                        <a
                            href="https://wa.me/995574619393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Написать в WhatsApp / Telegram
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что входит в съёмку</h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Съёмочный день</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootDayItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Финальный результат</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {finalResultItems.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="examples" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Для каких задач используют аэросъёмку</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {useCases.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Примеры работ (концептуальные)</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {examples.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Пример {index + 1}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Цифры, которые имеют значение</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {socialProof.map((item) => (
                            <article key={item.label} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-2xl font-bold text-[#FFD23F]">{item.value}</p>
                                <h3 className="mt-2 text-base font-bold text-white">{item.label}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={beginnerFaqItems} title="FAQ для первого заказа" variant="beginner" />

            <FaqSection
                items={commercialFaqItems}
                title="FAQ по цене, логистике и разрешениям"
                variant="commercial"
                bgColor="#0D0D0D"
            />

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Почему Breus Media</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyBreusCards.map((item) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessNote text="Стандартный выезд занимает 4–6 часов; готовый контент — в течение 5–7 рабочих дней после съёмки." />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Как проходит работа</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Пакеты и стоимость</h2>
                        <p className="mt-4 leading-relaxed text-white/70">Цены указаны в грузинских лари (₾).</p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-3">
                        {pricingPackages.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-2 text-sm text-white/72">{card.subtitle}</p>
                                <p className="mt-6 text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/55">{card.duration}</p>
                                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">Срок: {card.delivery}</p>

                                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>

                                <div className="mt-5 rounded-[12px] border border-white/10 bg-white/[0.02] p-4">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Дополнительно</p>
                                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/70">
                                        {card.addons.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Не знаете, какой пакет подойдёт именно вашему хозяйству? Расскажем, что реально нужно под вашу
                            задачу, и предложим вариант без переплаты.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Получить расчёт
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Смежные услуги</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => {
                            const card = (
                                <>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                        {service.note ? (
                                            <span className="rounded-full border border-[#FFD23F]/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFD23F]">
                                                {service.note}
                                            </span>
                                        ) : null}
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                    <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Подробнее →</p>
                                </>
                            );

                            if (service.href.startsWith('#')) {
                                return (
                                    <a
                                        key={service.title}
                                        href={service.href}
                                        className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                    >
                                        {card}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                                >
                                    {card}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Типичные ошибки при заказе аэросъёмки виноградников</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {mistakes.map((item, index) => (
                            <article key={item.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Ошибка {index + 1}</p>
                                <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Что можно сделать прямо сейчас</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeTips.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Чеклист готовности к съёмке</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {checklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Развёрнутые ответы</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {expandedAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/74">
                                    {item.answer.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Другие страницы, которые могут быть полезны</h2>
                    </div>

                    <div className="mt-8 grid gap-4">
                        {navigationLinks.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm text-white/82 transition-colors hover:border-[#FFD23F]/50"
                            >
                                {index + 1}. {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            Один хорошо спланированный выезд в сезон может стать основой всего вашего контент-плана на
                            месяцы вперёд. Если задача актуальна, давайте соберём оптимальный формат под вашу винодельню.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Обсудить проект
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Обсудить съёмку винодельни</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Напишите локацию, цель и желаемые даты. Подберём пакет, рассчитаем логистику и предложим
                                    понятный план съёмки под вашу задачу.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Контакты</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp / Telegram
                                        </a>
                                        <a
                                            href="tel:+995574619393"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            +995 574 619 393
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Тбилиси, Грузия</p>
                                </div>
                            </div>

                            <WineContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta heroId="drone-wine-hero" />
            <MobileBottomBar />
            <DroneFooterStitch />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        </main>
    );
}

```
---
---
