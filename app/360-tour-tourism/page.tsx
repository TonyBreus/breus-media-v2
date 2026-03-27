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
    alternates: {
        canonical: 'https://breusmedia.com/360-tour-tourism',
    },
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
