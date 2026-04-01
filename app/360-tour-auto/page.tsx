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
        answer:
            'Передаём тур в готовом формате и согласуем удобный вариант размещения под ваш сайт или канал продаж. При необходимости подключаем временное размещение и хранение на согласованный срок как support-опцию.',
    },
    {
        question: 'Нужно ли платить ежемесячно за хостинг?',
        answer:
            'Это зависит от выбранного формата размещения. Базовый пакет закрывает съёмку, сборку и передачу материалов, а длительное хранение, поддержка и обновления обсуждаются отдельно.',
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
    url: 'https://breus.media',
    priceRange: '₾₾',
};

export const metadata: Metadata = {
    title: '360° Виртуальный тур для автосалонов в Тбилиси | Breus Media',
    description:
        'Интерактивный 360° тур для автосалонов и шоурумов в Тбилиси. Покупатель осматривает салон и автомобиль дистанционно. От 1 000 ₾. Съёмка 2–3 часа.',
    alternates: {
        canonical: 'https://breus.media/360-tour-auto',
    },
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
