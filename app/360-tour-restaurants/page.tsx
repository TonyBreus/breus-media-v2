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
    alternates: {
        canonical: 'https://breusmedia.com/360-tour-restaurants',
    },
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
