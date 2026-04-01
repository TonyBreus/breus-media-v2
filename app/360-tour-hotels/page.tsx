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
        answer:
            'Передаём тур в готовом формате и согласуем удобный вариант размещения под ваш сайт или канал продаж. При необходимости подключаем временное размещение и хранение на согласованный срок как support-опцию.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer:
            'Это зависит от выбранного формата размещения. Базовый пакет закрывает съёмку, сборку и передачу материалов, а длительное хранение, поддержка и обновления обсуждаются отдельно.',
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
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: '360° Виртуальный тур для отелей в Тбилиси | Breus Media',
    description: 'Интерактивный 360° тур для отелей и гостиниц в Тбилиси. Гость осматривает номер и территорию до бронирования. От 1 200 ₾ за объект. Съёмка за 3–5 рабочих дней.',
    alternates: {
        canonical: 'https://breus.media/360-tour-hotels',
    },
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
