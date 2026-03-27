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
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: '360° Виртуальный тур для недвижимости в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для квартир и ЖК в Тбилиси. Покупатель осматривает объект дистанционно. От 800 ₾ за объект. Съёмка и передача за 3–5 рабочих дней.',
    alternates: {
        canonical: 'https://breus.media/360-tour-real-estate',
    },
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
