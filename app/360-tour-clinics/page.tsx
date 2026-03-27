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
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: '360° Виртуальный тур для клиник в Тбилиси | Breus Media',
    description: 'Интерактивный 360° тур для клиник и стоматологий в Тбилиси. Пациент видит оборудование и интерьер до записи. От 900 ₾. Съёмка 1–3 часа без остановки работы.',
    alternates: {
        canonical: 'https://breus.media/360-tour-clinics',
    },
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
