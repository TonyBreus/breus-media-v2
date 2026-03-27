# Breus Media — 360° Туры — 26 марта 2026
Страницы: /360-tours-service, /360-tour-real-estate, /360-tour-auto, /360-tour-business, /360-tour-clinics, /360-tour-commercial-real-estate, /360-tour-hotels, /360-tour-restaurants, /360-tour-tourism

## /360-tours-service
Lines: 12
```tsx
import type { Metadata } from 'next';
import { L2DirectionRenderer } from '@/components/l2-direction/L2DirectionRenderer';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';
import { buildDirectionMetadata } from '@/lib/seo/directionSeo';

const config = l2DirectionConfigs.tours360Service;

export const metadata: Metadata = buildDirectionMetadata(config.page);

export default function Tours360ServicePage() {
    return <L2DirectionRenderer schemaKey="360-tours-service" config={config} />;
}

```
---
---

## /360-tour-real-estate
Lines: 517
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-real-estate/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-real-estate/TourStickyCta';

// 360 Tour Components
import { TourWhatIs } from '@/components/360-tour-real-estate/TourWhatIs';
import { TourExperience } from '@/components/360-tour-real-estate/TourExperience';
import { TourSocialProof } from '@/components/360-tour-real-estate/TourSocialProof';
import { TourPain } from '@/components/360-tour-real-estate/TourPain';
import { TourBenefits } from '@/components/360-tour-real-estate/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-real-estate/TourDeliverables';
import { TourProcess } from '@/components/360-tour-real-estate/TourProcess';
import { TourPricing } from '@/components/360-tour-real-estate/TourPricing';
import { TourWhyUs } from '@/components/360-tour-real-estate/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-real-estate/TourRelatedServices';
import { TourContact } from '@/components/360-tour-real-estate/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур?',
        answer: 'Это интерактивный онлайн-просмотр, где человек сам осматривает объект и переходит между точками обзора.',
    },
    {
        question: 'Это видео или интерактивный просмотр?',
        answer: 'Это интерактивный формат. В отличие от видео, клиент сам выбирает ракурс, последовательность и темп просмотра.',
    },
    {
        question: 'Нужны ли VR-очки?',
        answer: 'Нет, обычно не нужны. Тур открывается в обычном браузере.',
    },
    {
        question: 'Можно ли смотреть с телефона?',
        answer: 'Да, тур открывается с телефона, планшета и компьютера.',
    },
    {
        question: 'Где можно разместить такой тур?',
        answer: 'По ссылке, на сайте, в карточке объекта, в презентации и в переписке с клиентом.',
    },
    {
        question: 'Чем это отличается от 360-фото на SS.ge?',
        answer: '360-фото на SS.ge — это одна статичная панорама комнаты. Виртуальный тур — это маршрут по всему объекту: несколько точек съёмки, переходы между комнатами, ощущение присутствия. Клиент буквально "ходит" по квартире, а не смотрит одну картинку.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для квартиры в Тбилиси?',
        answer: 'Стоимость начинается от 800 ₾ за объект. Финальная цена зависит от площади и количества точек съёмки. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Сколько занимает съёмка и сборка тура?',
        answer: 'Съёмка на объекте занимает 40–60 минут. Готовый тур передаём через 3–5 рабочих дней после съёмки.',
    },
    {
        question: 'Как тур встраивается на сайт?',
        answer: 'Передаём прямую ссылку и код для встраивания, чтобы тур можно было быстро добавить на сайт или лендинг.',
    },
    {
        question: 'Влияет ли 360° тур на скорость сайта?',
        answer: 'Формат встраивания подбирается так, чтобы не перегружать страницу без необходимости.',
    },
    {
        question: 'Можно ли обновлять тур после изменений в объекте?',
        answer: 'Да, можно переснять нужные зоны, обновить тур и заменить материалы на актуальные.',
    },
    {
        question: 'Работаете ли вы в Тбилиси и по Грузии?',
        answer: 'Да, работаем в Тбилиси и в других городах Грузии. География, логистика и бюджет обсуждаются заранее на этапе расчёта.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету. Никаких дополнительных действий не требуется.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в стоимость пакета. Никаких скрытых подписок и ежемесячных платежей.',
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
    name: '360° Виртуальный тур для недвижимости',
    description:
        'Интерактивный 360° тур для квартир, ЖК и шоурумов в Тбилиси. Покупатель осматривает объект дистанционно до визита.',
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
        price: '800',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '800',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для недвижимости в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для квартир и ЖК в Тбилиси. Покупатель осматривает объект дистанционно. От 800 ₾ за объект. Съёмка и передача за 3–5 рабочих дней.',
};

export default function TourRealEstatePage() {
    const faqSchemaJson = JSON.stringify(faqSchema);

    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <section id="tour-hero" className="relative pt-40 md:pt-44 pb-24 bg-[#080808] border-b border-[#2a2a2a]">
                    <div className="container mx-auto px-6">
                        <span className="text-[#D4A017] font-bold tracking-[0.22em] text-[11px] uppercase block mb-4">
                            Визуальный продакшн · Тбилиси
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-6">
                            360° тур для недвижимости
                        </h1>
                        <p className="text-base md:text-xl text-white/75 max-w-3xl leading-relaxed">
                            Покупатель может полностью осмотреть объект дистанционно и понять планировку до визита. Это
                            помогает в Тбилиси и по Грузии быстрее отсеивать нецелевые показы и переводить в офлайн
                            только заинтересованных клиентов.
                        </p>
                        <p className="text-sm text-white/50 max-w-2xl leading-relaxed mt-4">
                            Особенно востребовано для инвесторов из России, Европы и ОАЭ — тур заменяет первый физический
                            визит при дистанционном выборе недвижимости в Тбилиси.
                        </p>
                        <p className="text-xs text-white/50 max-w-2xl leading-relaxed mt-3">
                            Работаем в Тбилиси: Сабуртало, Ваке, Диди Дигоми, Мтацминда, Исани. Другие города Грузии —
                            по договорённости.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-10">
                            <a
                                href="#examples"
                                className="bg-[#D4A017] text-black px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                            >
                                Смотреть демо
                            </a>
                            <a
                                href="#contact"
                                className="border border-white/25 text-white px-7 py-3 rounded-[12px] font-bold uppercase tracking-wider text-xs hover:border-[#D4A017] transition-colors"
                            >
                                Обсудить проект
                            </a>
                        </div>
                    </div>
                    <a
                        href="#tour-what-is"
                        aria-label="Прокрутить к следующему разделу"
                        className="absolute left-1/2 -translate-x-1/2 bottom-6 text-white/55 hover:text-white/85 transition-colors animate-bounce"
                    >
                        <span className="text-xl">↓</span>
                    </a>
                </section>
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур будет работать именно под ваш объект в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience + Use Cases Section">
                <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-10">
                            <h2 className="text-3xl font-bold mb-4">Кому подходит и где применяется</h2>
                            <p className="text-white/70 leading-relaxed">
                                Один и тот же формат решает разные задачи: от первичного показа квартир до более B2B
                                презентаций коммерческих объектов в Тбилиси.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-4 text-white">Кому подходит</h3>
                                <ul className="space-y-3 text-sm text-white/75 leading-relaxed">
                                    <li>• Агентствам и брокерам для более точного первичного отбора клиентов</li>
                                    <li>• Девелоперам и отделам продаж для цифровой презентации жилых и коммерческих объектов</li>
                                    <li>• Собственникам и B2B-командам для удалённого показа арендаторам и инвесторам</li>
                                </ul>
                            </article>

                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold mb-4 text-white">Где применяется в Тбилиси</h3>
                                <div className="grid grid-cols-2 gap-2.5 text-sm">
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">Квартиры</div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">Дома</div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">
                                        Коммерческие помещения
                                    </div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">Шоурумы</div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">
                                        Удалённые покупатели
                                    </div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">Экспаты</div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">Инвесторы</div>
                                    <div className="rounded border border-white/10 bg-white/[0.03] p-3 text-white/80">
                                        Рынок недвижимости Грузии
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <section className="py-24 bg-[#080808] border-b border-[#2a2a2a]">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold mb-10">Примеры 360-туров</h2>
                            <p className="text-sm text-white/65 mb-6 max-w-3xl">
                                Пример интерактивного тура (демо): так выглядит 360° формат, где клиент сам управляет
                                обзором и переходами между точками.
                            </p>
                            <div className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-4 md:p-6">
                                <div className="min-h-[420px] md:min-h-[520px] rounded-[12px] border border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-center">
                                    <p className="text-white/55 text-center px-6 leading-relaxed">
                                        Пример визуализации - как выглядит 360° тур.
                                        <br />
                                        Реальные кейсы появятся после первых съёмок в Тбилиси.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <section className="py-24 bg-[#0D0D0D] border-b border-[#2a2a2a]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mb-10">
                            <h2 className="text-3xl font-bold mb-4">Доказательная база по формату 360°</h2>
                            <p className="text-white/70 leading-relaxed">Ниже — проверяемые факты и сравнения без преувеличений.</p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-5">
                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-white">Что говорит статистика</h3>
                                <div className="h-48 rounded-[10px] border border-dashed border-white/25 bg-[#101010] p-4">
                                    <div className="h-full flex flex-col justify-end gap-2">
                                        <div className="h-12 bg-[#FFD23F]/70 rounded" />
                                        <div className="h-8 bg-[#FFD23F]/45 rounded" />
                                        <div className="h-6 bg-white/20 rounded" />
                                    </div>
                                </div>
                                <p className="text-xs text-white/70 mt-3">
                                    "Объекты с 360° туром получают на 40% больше запросов" (Matterport Real Estate
                                    Report, 2024)
                                </p>
                                <p className="text-xs text-white/70 mt-2">
                                    "60% покупателей принимают решение о просмотре вживую на основе визуального
                                    контента" (NAR Home Buyer Report, 2024)
                                </p>
                            </article>

                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#111111] p-6">
                                <h3 className="text-lg font-bold mb-3 text-white">С туром и без — разница</h3>
                                <div className="rounded-[10px] border border-white/10 overflow-hidden text-sm">
                                    <div className="grid grid-cols-3 bg-white/5 text-white/80 font-semibold">
                                        <div className="p-2.5 border-r border-white/10">Сценарий</div>
                                        <div className="p-2.5 border-r border-white/10">Без тура</div>
                                        <div className="p-2.5">С туром</div>
                                    </div>
                                    <div className="grid grid-cols-3 text-white/70">
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Удалённый показ</div>
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Сложнее оценить</div>
                                        <div className="p-2.5 border-t border-white/10">Понятный первый этап</div>
                                    </div>
                                    <div className="grid grid-cols-3 text-white/70">
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Пустые показы</div>
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Случаются часто</div>
                                        <div className="p-2.5 border-t border-white/10">Отсеиваются заранее</div>
                                    </div>
                                    <div className="grid grid-cols-3 text-white/70">
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Иностранный клиент</div>
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Нужен физический визит</div>
                                        <div className="p-2.5 border-t border-white/10">Смотрит объект онлайн</div>
                                    </div>
                                    <div className="grid grid-cols-3 text-white/70">
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Принятие решения</div>
                                        <div className="p-2.5 border-r border-white/10 border-t border-white/10">Затягивается</div>
                                        <div className="p-2.5 border-t border-white/10">Ускоряется</div>
                                    </div>
                                </div>
                                <p className="text-xs text-white/70 mt-3">
                                    "Дистанционные покупатели и инвесторы не могут прилетать на каждый показ - тур
                                    заменяет первый визит"
                                </p>
                            </article>

                            <article className="rounded-[12px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold mb-3 text-white">Источники</h3>
                                <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                                    <li>• Matterport Real Estate Report, 2024</li>
                                    <li>• NAR Home Buyer Report, 2024</li>
                                    <li>• Практика удалённых показов для покупателей и инвесторов</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection
                    items={beginnerFaqItems}
                    title="FAQ для тех, кто впервые слышит о формате"
                    variant="beginner"
                />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка на объекте занимает 40–60 минут — без остановки вашего бизнеса" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <>
                    <section className="pt-10 bg-[#0D0D0D]">
                        <div className="container mx-auto px-6">
                            <div className="rounded-[12px] border border-[#D4A017]/30 bg-[#111111] p-6 mb-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <span className="text-[#D4A017] text-xs font-bold uppercase tracking-wider block mb-2">
                                            Пакет для риелтора
                                        </span>
                                        <h3 className="text-white font-bold text-lg mb-1">Разовый объект — от 400 ₾</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Квартира до 60 м² · Ссылка + iframe для объявления · Срок 2 рабочих дня
                                        </p>
                                    </div>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center justify-center border border-[#D4A017]/50 text-[#D4A017] px-6 py-3 rounded-[10px] font-bold uppercase tracking-wider text-xs hover:bg-[#D4A017] hover:text-black transition-colors whitespace-nowrap"
                                    >
                                        Заказать
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="-mt-10">
                        <MidCta
                            text="Нужен точный расчёт под ваш объект и формат размещения?"
                            buttonLabel="Получить расчёт"
                            showPricingNote={true}
                        />
                    </div>
                </>
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchemaJson }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

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

## /360-tour-auto
Lines: 301
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-auto/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-auto/TourStickyCta';

import { TourHero } from '@/components/360-tour-auto/TourHero';
import { TourWhatIs } from '@/components/360-tour-auto/TourWhatIs';
import { TourExperience } from '@/components/360-tour-auto/TourExperience';
import { TourSocialProof } from '@/components/360-tour-auto/TourSocialProof';
import { TourPain } from '@/components/360-tour-auto/TourPain';
import { TourBenefits } from '@/components/360-tour-auto/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-auto/TourDeliverables';
import { TourAudience } from '@/components/360-tour-auto/TourAudience';
import { TourUseCases } from '@/components/360-tour-auto/TourUseCases';
import { TourProcess } from '@/components/360-tour-auto/TourProcess';
import { TourPortfolio } from '@/components/360-tour-auto/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-auto/TourEvidence';
import { TourPricing } from '@/components/360-tour-auto/TourPricing';
import { TourWhyUs } from '@/components/360-tour-auto/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-auto/TourRelatedServices';
import { TourContact } from '@/components/360-tour-auto/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для автосалона?',
        answer: 'Это интерактивный онлайн-просмотр шоурума и автомобилей: покупатель сам осматривает салон, выбирает машину и изучает детали — до поездки в дилерский центр.',
    },
    {
        question: 'Можно ли снять интерьер автомобиля?',
        answer: 'Да. Тур собирается как по шоуруму в целом, так и по отдельным автомобилям — снаружи и внутри салона.',
    },
    {
        question: 'Чем тур лучше фотографий и видео авто?',
        answer: 'Фото показывает один ракурс, видео идёт по сценарию. В туре покупатель сам выбирает что смотреть: обходит машину, заглядывает в салон, изучает детали в своём темпе.',
    },
    {
        question: 'Можно ли встроить тур на сайт дилера?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в карточку автомобиля, отправить в мессенджере покупателю.',
    },
    {
        question: 'Нужно ли останавливать работу салона для съёмки?',
        answer: 'Нет. Снимаем до открытия или в спокойные часы. Съёмка занимает 2–3 часа и не мешает работе дилерского центра.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для автосалона в Тбилиси?',
        answer: 'Стоимость начинается от 1 000 ₾. Цена зависит от размера шоурума и количества автомобилей в туре. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает продавать автомобили дистанционно?',
        answer: 'Покупатель из другого города или страны может полностью осмотреть автомобиль онлайн — снаружи и внутри. Это снижает количество визитов "просто посмотреть" и ускоряет принятие решения.',
    },
    {
        question: 'Можно ли обновить тур при смене модельного ряда?',
        answer: 'Да. Переснимаем нужные автомобили и обновляем тур. При постоянном сотрудничестве — по согласованной цене.',
    },
    {
        question: 'Подходит ли тур для премиум-сегмента и детейлинга?',
        answer: 'Да. Для премиум-автомобилей и детейлинг-центров тур особенно эффективен — покупатель видит качество работы и уровень сервиса ещё до визита.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Работаете ли вы в Тбилиси?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для автосалонов',
    description:
        'Интерактивный 360° тур для автосалонов и шоурумов в Тбилиси. Покупатель осматривает автомобиль дистанционно до визита.',
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
        price: '1000',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1000',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для автосалонов в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для автосалонов и шоурумов в Тбилиси. Покупатель осматривает салон и автомобиль дистанционно. От 1 000 ₾. Съёмка 2–3 часа.',
};

export default function TourAutoPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур поможет вашему автосалону продавать больше дистанционно в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для тех, кто слышит впервые" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка автосалона занимает 2–3 часа — без остановки работы дилерского центра" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta text="Нужен точный расчёт под ваш шоурум?" buttonLabel="Получить расчёт" showPricingNote={true} />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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

## /360-tour-business
Lines: 301
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-business/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-business/TourStickyCta';

import { TourHero } from '@/components/360-tour-business/TourHero';
import { TourWhatIs } from '@/components/360-tour-business/TourWhatIs';
import { TourExperience } from '@/components/360-tour-business/TourExperience';
import { TourSocialProof } from '@/components/360-tour-business/TourSocialProof';
import { TourPain } from '@/components/360-tour-business/TourPain';
import { TourBenefits } from '@/components/360-tour-business/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-business/TourDeliverables';
import { TourAudience } from '@/components/360-tour-business/TourAudience';
import { TourUseCases } from '@/components/360-tour-business/TourUseCases';
import { TourProcess } from '@/components/360-tour-business/TourProcess';
import { TourPortfolio } from '@/components/360-tour-business/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-business/TourEvidence';
import { TourPricing } from '@/components/360-tour-business/TourPricing';
import { TourWhyUs } from '@/components/360-tour-business/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-business/TourRelatedServices';
import { TourContact } from '@/components/360-tour-business/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для офиса?',
        answer: 'Это интерактивный онлайн-просмотр рабочего пространства: арендатор или кандидат на работу сам осматривает офис, переходит между зонами и оценивает инфраструктуру — до физического визита.',
    },
    {
        question: 'Чем тур лучше фотографий офиса?',
        answer: 'Фото показывает один ракурс. Тур даёт полное понимание планировки, масштаба пространства и всех зон — переговорные, open space, кухня, зоны отдыха.',
    },
    {
        question: 'Можно ли встроить тур на сайт компании?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в вакансии, в презентацию для арендаторов и отправить в переписке.',
    },
    {
        question: 'Можно ли снять несколько этажей и зон?',
        answer: 'Да. Переговорные комнаты, open space, reception, кухня, зоны отдыха — всё включается в один интерактивный маршрут с переходами.',
    },
    {
        question: 'Нужно ли останавливать работу офиса для съёмки?',
        answer: 'Нет. Снимаем до начала рабочего дня или в выходные. Съёмка занимает 1–3 часа и не мешает работе сотрудников.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для офиса в Тбилиси?',
        answer: 'Стоимость начинается от 900 ₾. Цена зависит от размера пространства и количества зон. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает сдать офис или коворкинг быстрее?',
        answer: 'Потенциальный арендатор может полностью осмотреть пространство онлайн — особенно важно для иностранных компаний, которые ищут офис в Тбилиси дистанционно. Тур снижает количество пустых визитов.',
    },
    {
        question: 'Подходит ли тур для HR-брендинга?',
        answer: 'Да. Показать офис кандидатам ещё до собеседования — это сильный аргумент при найме. Тур можно добавить прямо в описание вакансии.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Можно ли обновить тур после ремонта или переезда?',
        answer: 'Да. Переснимаем пространство и обновляем тур. При постоянном сотрудничестве — по согласованной цене.',
    },
    {
        question: 'Работаете ли вы в Тбилиси?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для офисов и бизнеса',
    description:
        'Интерактивный 360° тур для офисов и коворкингов в Тбилиси. Арендатор осматривает пространство дистанционно до визита.',
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
        price: '900',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '900',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для офисов и бизнеса в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для офисов, коворкингов и бизнес-пространств в Тбилиси. Арендатор или сотрудник осматривает пространство дистанционно. От 900 ₾.',
};

export default function TourBusinessPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур поможет вашему офису или коворкингу привлекать арендаторов в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для тех, кто слышит впервые" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка офиса занимает 1–3 часа — до начала рабочего дня или в выходные" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta text="Нужен точный расчёт под ваше пространство?" buttonLabel="Получить расчёт" showPricingNote={true} />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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

## /360-tour-clinics
Lines: 312
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-clinics/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-clinics/TourStickyCta';

import { TourHero } from '@/components/360-tour-clinics/TourHero';
import { TourWhatIs } from '@/components/360-tour-clinics/TourWhatIs';
import { TourExperience } from '@/components/360-tour-clinics/TourExperience';
import { TourSocialProof } from '@/components/360-tour-clinics/TourSocialProof';
import { TourPain } from '@/components/360-tour-clinics/TourPain';
import { TourBenefits } from '@/components/360-tour-clinics/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-clinics/TourDeliverables';
import { TourAudience } from '@/components/360-tour-clinics/TourAudience';
import { TourUseCases } from '@/components/360-tour-clinics/TourUseCases';
import { TourProcess } from '@/components/360-tour-clinics/TourProcess';
import { TourPortfolio } from '@/components/360-tour-clinics/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-clinics/TourEvidence';
import { TourPricing } from '@/components/360-tour-clinics/TourPricing';
import { TourWhyUs } from '@/components/360-tour-clinics/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-clinics/TourRelatedServices';
import { TourContact } from '@/components/360-tour-clinics/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для клиники?',
        answer: 'Это интерактивный онлайн-просмотр клиники: пациент сам осматривает приёмную, кабинеты и оборудование — до того как записался на приём.',
    },
    {
        question: 'Как тур помогает снизить тревожность пациента?',
        answer: 'Страх перед клиникой часто связан с неизвестностью. Когда человек уже "побывал" внутри онлайн и видел оборудование и чистоту — он приходит спокойнее и увереннее.',
    },
    {
        question: 'Можно ли встроить тур на сайт клиники?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в Google Maps, разместить в мессенджерах и отправить пациенту до визита.',
    },
    {
        question: 'Можно ли снять несколько кабинетов и зон?',
        answer: 'Да. Приёмная, кабинеты, зона ожидания, операционная — всё можно включить в один интерактивный маршрут с переходами между зонами.',
    },
    {
        question: 'Нужно ли останавливать работу клиники для съёмки?',
        answer: 'Нет. Снимаем до открытия или в свободные часы между приёмами. Съёмка занимает 1–3 часа и не мешает работе персонала.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере. Никаких дополнительных устройств.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для клиники в Тбилиси?',
        answer: 'Стоимость начинается от 900 ₾ за объект. Цена зависит от размера клиники и количества зон. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает привлечь иностранных пациентов?',
        answer: 'Пациенты из других стран выбирают клинику дистанционно — по сайту, отзывам и визуальному контенту. Тур даёт им полное понимание уровня клиники без приезда.',
    },
    {
        question: 'Подходит ли тур для стоматологии?',
        answer: 'Да. Стоматология — один из лучших сценариев. Пациент видит современное оборудование, чистоту и атмосферу до записи. Это напрямую снижает страх перед визитом.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Можно ли обновить тур после ремонта или смены оборудования?',
        answer: 'Да. Переснимаем нужные зоны и обновляем тур. При договоре на несколько объектов — со скидкой.',
    },
    {
        question: 'Работаете ли вы в Тбилиси?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для клиник',
    description: 'Интерактивный 360° тур для клиник и стоматологий в Тбилиси. Пациент видит оборудование и интерьер до записи.',
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
        price: '900',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '900',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для клиник в Тбилиси | Breus Media',
    description: 'Интерактивный 360° тур для клиник и стоматологий в Тбилиси. Пациент видит оборудование и интерьер до записи. От 900 ₾. Съёмка 1–3 часа без остановки работы.',
};

export default function TourClinicsPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур поможет вашей клинике в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection
                    items={beginnerFaqItems}
                    title="FAQ для тех, кто слышит впервые"
                    variant="beginner"
                />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка клиники занимает 1–3 часа — без остановки работы персонала" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под вашу клинику?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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

## /360-tour-commercial-real-estate
Lines: 129
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-commercial-real-estate/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-commercial-real-estate/TourStickyCta';

// 360 Tour Components
import { TourHero } from '@/components/360-tour-commercial-real-estate/TourHero';
import { TourWhatIs } from '@/components/360-tour-commercial-real-estate/TourWhatIs';
import { TourExperience } from '@/components/360-tour-commercial-real-estate/TourExperience';
import { TourSocialProof } from '@/components/360-tour-commercial-real-estate/TourSocialProof';
import { TourPain } from '@/components/360-tour-commercial-real-estate/TourPain';
import { TourBenefits } from '@/components/360-tour-commercial-real-estate/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-commercial-real-estate/TourDeliverables';
import { TourAudience } from '@/components/360-tour-commercial-real-estate/TourAudience';
import { TourUseCases } from '@/components/360-tour-commercial-real-estate/TourUseCases';
import { TourProcess } from '@/components/360-tour-commercial-real-estate/TourProcess';
import { TourPortfolio } from '@/components/360-tour-commercial-real-estate/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-commercial-real-estate/TourEvidence';
import { TourBeginnerFAQ } from '@/components/360-tour-commercial-real-estate/TourBeginnerFAQ';
import { TourPricing } from '@/components/360-tour-commercial-real-estate/TourPricing';
import { TourFAQ } from '@/components/360-tour-commercial-real-estate/TourFAQ';
import { TourWhyUs } from '@/components/360-tour-commercial-real-estate/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-commercial-real-estate/TourRelatedServices';
import { TourContact } from '@/components/360-tour-commercial-real-estate/TourContact';

export const metadata: Metadata = {
    title: '360° тур для коммерческой недвижимости | Breus Media',
    description:
        'Интерактивные 360° туры для коммерческих объектов: офисы, торговые помещения и бизнес-пространства для удалённого предварительного просмотра.',
};

export default function TourCommercialRealEstatePage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <TourBeginnerFAQ />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <TourFAQ />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>
        </main>
    );
}

```
---
---

## /360-tour-hotels
Lines: 314
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-hotels/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-hotels/TourStickyCta';

// 360 Tour Components
import { TourHero } from '@/components/360-tour-hotels/TourHero';
import { TourWhatIs } from '@/components/360-tour-hotels/TourWhatIs';
import { TourExperience } from '@/components/360-tour-hotels/TourExperience';
import { TourSocialProof } from '@/components/360-tour-hotels/TourSocialProof';
import { TourPain } from '@/components/360-tour-hotels/TourPain';
import { TourBenefits } from '@/components/360-tour-hotels/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-hotels/TourDeliverables';
import { TourAudience } from '@/components/360-tour-hotels/TourAudience';
import { TourUseCases } from '@/components/360-tour-hotels/TourUseCases';
import { TourProcess } from '@/components/360-tour-hotels/TourProcess';
import { TourPortfolio } from '@/components/360-tour-hotels/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-hotels/TourEvidence';
import { TourPricing } from '@/components/360-tour-hotels/TourPricing';
import { TourWhyUs } from '@/components/360-tour-hotels/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-hotels/TourRelatedServices';
import { TourContact } from '@/components/360-tour-hotels/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для отеля?',
        answer: 'Это интерактивный онлайн-просмотр отеля, где гость сам выбирает ракурс, переходит между номерами и зонами — до того как забронировал.',
    },
    {
        question: 'Чем тур лучше фотографий отеля?',
        answer: 'Фотографии показывают то, что выбрал фотограф. Тур позволяет гостю самому осмотреть номер, ванную, вид из окна и общие зоны в удобном темпе.',
    },
    {
        question: 'Можно ли встроить тур в сайт отеля или Booking?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в карточку на Booking, в Google Maps и в рассылки.',
    },
    {
        question: 'Можно ли снять территорию, бассейн и ресторан?',
        answer: 'Да. Тур можно собрать из любого количества точек: номера, лобби, ресторан, территория, бассейн — всё в одном интерактивном маршруте.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере. Никаких дополнительных устройств.',
    },
    {
        question: 'Сколько времени занимает съёмка отеля?',
        answer: 'Зависит от размера объекта. Стандартный отель до 20 номеров — 2–4 часа на месте. Крупные объекты обсуждаются индивидуально.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для отеля в Тбилиси?',
        answer: 'Стоимость начинается от 1 200 ₾ за объект. Финальная цена зависит от количества точек съёмки и зон. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает увеличить прямые бронирования?',
        answer: 'Гость, который уже "погулял" по номеру онлайн, бронирует увереннее и реже отменяет. Тур снижает зависимость от агрегаторов — клиент возвращается на сайт отеля.',
    },
    {
        question: 'Подходит ли тур для Airbnb и апартаментов?',
        answer: 'Да. Для Airbnb и апарт-отелей тур особенно эффективен — гость видит реальную планировку и принимает решение без лишних вопросов.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Можно ли обновлять тур после ремонта номеров?',
        answer: 'Да. Переснимаем нужные зоны и обновляем тур. При наличии договора на несколько объектов — со скидкой.',
    },
    {
        question: 'Работаете ли вы в Тбилиси и по Грузии?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для отелей',
    description: 'Интерактивный 360° тур для отелей и гостиниц в Тбилиси. Гость осматривает номер и территорию до бронирования.',
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
        price: '1200',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1200',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для отелей в Тбилиси | Breus Media',
    description: 'Интерактивный 360° тур для отелей и гостиниц в Тбилиси. Гость осматривает номер и территорию до бронирования. От 1 200 ₾ за объект. Съёмка за 3–5 рабочих дней.',
};

export default function TourHotelsPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур будет работать для вашего отеля в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection
                    items={beginnerFaqItems}
                    title="FAQ для тех, кто впервые слышит о формате"
                    variant="beginner"
                />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                    bgColor="#0D0D0D"
                />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка стандартного отеля занимает 2–4 часа — без остановки работы объекта" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваш объект?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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

## /360-tour-restaurants
Lines: 312
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-restaurants/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-restaurants/TourStickyCta';

import { TourHero } from '@/components/360-tour-restaurants/TourHero';
import { TourWhatIs } from '@/components/360-tour-restaurants/TourWhatIs';
import { TourExperience } from '@/components/360-tour-restaurants/TourExperience';
import { TourSocialProof } from '@/components/360-tour-restaurants/TourSocialProof';
import { TourPain } from '@/components/360-tour-restaurants/TourPain';
import { TourBenefits } from '@/components/360-tour-restaurants/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-restaurants/TourDeliverables';
import { TourAudience } from '@/components/360-tour-restaurants/TourAudience';
import { TourUseCases } from '@/components/360-tour-restaurants/TourUseCases';
import { TourProcess } from '@/components/360-tour-restaurants/TourProcess';
import { TourPortfolio } from '@/components/360-tour-restaurants/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-restaurants/TourEvidence';
import { TourPricing } from '@/components/360-tour-restaurants/TourPricing';
import { TourWhyUs } from '@/components/360-tour-restaurants/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-restaurants/TourRelatedServices';
import { TourContact } from '@/components/360-tour-restaurants/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для ресторана?',
        answer: 'Это интерактивный онлайн-просмотр заведения: гость сам осматривает зал, выбирает столик, смотрит на интерьер и атмосферу — до того как пришёл.',
    },
    {
        question: 'Чем тур лучше фотографий заведения?',
        answer: 'Фото показывает один ракурс, выбранный фотографом. Тур позволяет гостю самому пройтись по залу, посмотреть на расстановку столов, оценить пространство и атмосферу.',
    },
    {
        question: 'Можно ли встроить тур в Instagram или сайт?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в Google Maps, разместить в Instagram-bio и отправить в переписке.',
    },
    {
        question: 'Можно ли снять банкетный зал отдельно?',
        answer: 'Да. Банкетный зал, летняя терраса, барная зона и основной зал можно включить как отдельные точки в одном туре.',
    },
    {
        question: 'Нужно ли останавливать работу ресторана для съёмки?',
        answer: 'Нет. Снимаем до открытия или в закрытые часы. Съёмка занимает 1–2 часа и не мешает работе заведения.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для ресторана в Тбилиси?',
        answer: 'Стоимость начинается от 900 ₾ за объект. Цена зависит от размера заведения и количества зон. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает привлечь больше гостей?',
        answer: 'Гость, который уже "побывал" в заведении онлайн, приходит с конкретным ожиданием и реже уходит к конкурентам. Особенно работает для туристов и тех, кто выбирает место для банкета.',
    },
    {
        question: 'Подходит ли тур для бронирования банкетных залов?',
        answer: 'Да. Это один из главных сценариев — организаторы корпоративов и свадеб часто выбирают зал дистанционно. Тур даёт им полное понимание пространства без визита.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Можно ли обновить тур после ремонта или смены интерьера?',
        answer: 'Да. Переснимаем нужные зоны и обновляем тур. При наличии договора на несколько объектов — со скидкой.',
    },
    {
        question: 'Работаете ли вы в Тбилиси?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для ресторанов',
    description: 'Интерактивный 360° тур для ресторанов и кафе в Тбилиси. Гость осматривает зал и атмосферу до визита.',
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
        price: '900',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '900',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для ресторанов в Тбилиси | Breus Media',
    description: 'Интерактивный 360° тур для ресторанов и кафе в Тбилиси. Гость выбирает зал и атмосферу до визита. От 900 ₾ за объект. Съёмка за 1–2 часа без остановки заведения.',
};

export default function TourRestaurantsPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур поможет именно вашему заведению в Тбилиси?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection
                    items={beginnerFaqItems}
                    title="FAQ для тех, кто слышит впервые"
                    variant="beginner"
                />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection
                    items={commercialFaqItems}
                    title="Коммерческий FAQ"
                    variant="commercial"
                    id="faq"
                />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка ресторана занимает 1–2 часа — без остановки работы заведения" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta
                    text="Нужен точный расчёт под ваше заведение?"
                    buttonLabel="Получить расчёт"
                    showPricingNote={true}
                />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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

## /360-tour-tourism
Lines: 300
```tsx
import type { Metadata } from 'next';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DebugWrapper } from '@/components/debug/DebugWrapper';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { TourPageProgress } from '@/components/360-tour-tourism/TourPageProgress';
import { TourStickyCta } from '@/components/360-tour-tourism/TourStickyCta';

import { TourHero } from '@/components/360-tour-tourism/TourHero';
import { TourWhatIs } from '@/components/360-tour-tourism/TourWhatIs';
import { TourExperience } from '@/components/360-tour-tourism/TourExperience';
import { TourSocialProof } from '@/components/360-tour-tourism/TourSocialProof';
import { TourPain } from '@/components/360-tour-tourism/TourPain';
import { TourBenefits } from '@/components/360-tour-tourism/TourBenefits';
import { TourDeliverables } from '@/components/360-tour-tourism/TourDeliverables';
import { TourAudience } from '@/components/360-tour-tourism/TourAudience';
import { TourUseCases } from '@/components/360-tour-tourism/TourUseCases';
import { TourProcess } from '@/components/360-tour-tourism/TourProcess';
import { TourPortfolio } from '@/components/360-tour-tourism/TourPortfolio';
import { TourEvidence } from '@/components/360-tour-tourism/TourEvidence';
import { TourPricing } from '@/components/360-tour-tourism/TourPricing';
import { TourWhyUs } from '@/components/360-tour-tourism/TourWhyUs';
import { TourRelatedServices } from '@/components/360-tour-tourism/TourRelatedServices';
import { TourContact } from '@/components/360-tour-tourism/TourContact';
import { FaqSection } from '@/components/shared/FaqSection';
import { MidCta } from '@/components/shared/MidCta';
import { ProcessNote } from '@/components/shared/ProcessNote';

type FaqItem = {
    question: string;
    answer: string;
};

const beginnerFaqItems: FaqItem[] = [
    {
        question: 'Что такое 360° тур для туристической локации?',
        answer: 'Это интерактивный онлайн-просмотр места: турист сам осматривает локацию, переходит между точками и получает реальное ощущение от места — до того как купил тур или билет.',
    },
    {
        question: 'Чем тур лучше фотографий и видео о локации?',
        answer: 'Фото и видео показывают то, что выбрал автор. Тур позволяет туристу самому исследовать пространство — выбирать ракурс, задерживаться на деталях и понимать масштаб.',
    },
    {
        question: 'Можно ли встроить тур на сайт туроператора?',
        answer: 'Да. Передаём прямую ссылку и iframe-код. Тур можно встроить на сайт, в карточку тура, разместить в соцсетях и отправить потенциальным туристам.',
    },
    {
        question: 'Можно ли снять несколько объектов в одном туре?',
        answer: 'Да. Несколько зон, комнат или точек локации объединяются в один интерактивный маршрут с переходами между ними.',
    },
    {
        question: 'Нужно ли закрывать локацию для съёмки?',
        answer: 'Нет. Снимаем в удобное время — до открытия, в тихие часы или после закрытия. Съёмка занимает 2–4 часа и не мешает посетителям.',
    },
    {
        question: 'Нужны ли VR-очки для просмотра?',
        answer: 'Нет. Тур открывается в обычном браузере на телефоне, планшете или компьютере.',
    },
];

const commercialFaqItems: FaqItem[] = [
    {
        question: 'Сколько стоит 360° тур для туристической локации в Тбилиси?',
        answer: 'Стоимость начинается от 900 ₾. Цена зависит от размера локации и количества точек съёмки. Точный расчёт — после короткого брифинга.',
    },
    {
        question: 'Как тур помогает привлечь больше туристов?',
        answer: 'Турист, который уже "побывал" на локации онлайн, принимает решение увереннее и реже отменяет. Особенно эффективно для иностранных туристов, которые планируют поездку в Грузию заранее.',
    },
    {
        question: 'Подходит ли тур для свадебных локаций и event-площадок?',
        answer: 'Да. Это один из лучших сценариев — организаторы и пары часто выбирают площадку дистанционно. Тур даёт полное понимание пространства без визита.',
    },
    {
        question: 'Где хранится тур после съёмки?',
        answer: 'На наших серверах. Вы получаете ссылку которая работает без дополнительных платежей в течение срока по вашему пакету.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer: 'Нет. Стоимость хостинга включена в пакет. Никаких скрытых подписок и ежемесячных платежей.',
    },
    {
        question: 'Можно ли обновить тур при изменении локации?',
        answer: 'Да. Переснимаем нужные зоны и обновляем тур. При постоянном сотрудничестве — по согласованной цене.',
    },
    {
        question: 'Работаете ли вы в Тбилиси и по Грузии?',
        answer: 'Да, работаем в Тбилиси. Другие города Грузии — по договорённости. География и логистика обсуждаются на этапе расчёта.',
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
    name: '360° Виртуальный тур для туристических локаций',
    description: 'Интерактивный 360° тур для туристических объектов и локаций в Тбилиси. Турист осматривает место до поездки.',
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
        price: '900',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '900',
            priceCurrency: 'GEL',
            unitText: 'за объект',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Визуальный продакшн и AI. 360° туры, дрон-съёмка, промо-видео для бизнеса в Тбилиси.',
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
    title: '360° Виртуальный тур для туристических локаций в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для туристических объектов, музеев и локаций в Тбилиси и Грузии. Турист осматривает место до поездки. От 900 ₾. Съёмка без остановки работы.',
};

export default function TourTourismPage() {
    return (
        <main className="bg-[#080808] text-white min-h-screen clean-debug-overlays">
            <TourPageProgress />
            <SmartHeader
                transparent={true}
                isLanding={false}
                sectionLinks={[
                    { label: 'Примеры', href: '#examples' },
                    { label: 'Цены', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                ]}
            />

            <DebugWrapper id={360100} label="Hero Section">
                <TourHero />
            </DebugWrapper>

            <DebugWrapper id={360120} label="What Is Section">
                <TourWhatIs />
            </DebugWrapper>

            <DebugWrapper id={360140} label="Experience Section">
                <TourExperience />
            </DebugWrapper>

            <DebugWrapper id={360200} label="Social Proof Section">
                <TourSocialProof />
            </DebugWrapper>

            <DebugWrapper id={360250} label="Pain Section">
                <TourPain />
            </DebugWrapper>

            <DebugWrapper id={360300} label="Solution Section">
                <TourBenefits />
            </DebugWrapper>

            <DebugWrapper id={360305} label="Mid CTA Section 1">
                <MidCta
                    text="Хотите понять, как 360° тур поможет вашей локации привлечь больше туристов из-за рубежа?"
                    buttonLabel="Обсудить проект"
                />
            </DebugWrapper>

            <DebugWrapper id={360350} label="Deliverables Section">
                <TourDeliverables />
            </DebugWrapper>

            <DebugWrapper id={360360} label="Target Audience Section">
                <TourAudience />
            </DebugWrapper>

            <DebugWrapper id={360380} label="Use Cases Section">
                <TourUseCases />
            </DebugWrapper>

            <div id="examples">
                <DebugWrapper id={360500} label="Tour Examples Section">
                    <TourPortfolio />
                </DebugWrapper>
            </div>

            <DebugWrapper id={360520} label="Evidence Section">
                <TourEvidence />
            </DebugWrapper>

            <DebugWrapper id={360540} label="Beginner FAQ Section">
                <FaqSection items={beginnerFaqItems} title="FAQ для тех, кто слышит впервые" variant="beginner" />
            </DebugWrapper>

            <DebugWrapper id={360700} label="Commercial FAQ Section">
                <FaqSection items={commercialFaqItems} title="Коммерческий FAQ" variant="commercial" id="faq" />
            </DebugWrapper>

            <DebugWrapper id={360560} label="Why Us Section">
                <TourWhyUs />
            </DebugWrapper>

            <DebugWrapper id={360399} label="Process Note">
                <ProcessNote text="Съёмка локации занимает 2–4 часа — в удобное время без закрытия для посетителей" />
            </DebugWrapper>

            <DebugWrapper id={360400} label="Process Section">
                <TourProcess />
            </DebugWrapper>

            <DebugWrapper id={360600} label="Pricing Section">
                <TourPricing />
            </DebugWrapper>

            <DebugWrapper id={360605} label="Mid CTA Section 2">
                <MidCta text="Нужен точный расчёт под вашу локацию?" buttonLabel="Получить расчёт" showPricingNote={true} />
            </DebugWrapper>

            <DebugWrapper id={360620} label="Related Services Section">
                <TourRelatedServices />
            </DebugWrapper>

            <DebugWrapper id={360800} label="Contact Section">
                <TourContact />
            </DebugWrapper>

            <TourStickyCta />

            <DebugWrapper id={360900} label="Footer Section">
                <DroneFooterStitch />
            </DebugWrapper>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

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
