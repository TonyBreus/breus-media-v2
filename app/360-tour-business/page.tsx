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
        answer:
            'Передаём тур в готовом формате и согласуем удобный вариант размещения под ваш сайт или канал продаж. При необходимости подключаем временное размещение и хранение на согласованный срок как support-опцию.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer:
            'Это зависит от выбранного формата размещения. Базовый пакет закрывает съёмку, сборку и передачу материалов, а длительное хранение, поддержка и обновления обсуждаются отдельно.',
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
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: '360° Виртуальный тур для офисов и бизнеса в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для офисов, коворкингов и бизнес-пространств в Тбилиси. Арендатор или сотрудник осматривает пространство дистанционно. От 900 ₾.',
    alternates: {
        canonical: 'https://breus.media/360-tour-business',
    },
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
