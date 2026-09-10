'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { DebugWrapper } from '@/components/debug/DebugWrapper';

type ServiceOption = {
    id: string;
    labelRu: string;
    labelEn: string;
};

type DroneContactStitchProps = {
    preselectedServices?: string[];
    initialMessage?: string;
    lang?: 'ru' | 'en';
    heading?: string;
    description?: string;
    serviceOptions?: string[];
    messagePlaceholder?: string;
    whatsappHref?: string;
    className?: string;
};

const serviceOptions: ServiceOption[] = [
    { id: 'drone', labelRu: 'Аэросъёмка', labelEn: 'Aerial Filming' },
    { id: 'reels', labelRu: 'Reels', labelEn: 'Reels' },
    { id: 'tours-360', labelRu: '360°-туры', labelEn: '360° Tours' },
    { id: 'ai-content', labelRu: 'AI-контент', labelEn: 'AI Content' },
    { id: 'real-estate', labelRu: 'Недвижимость', labelEn: 'Real Estate' },
    { id: 'hotels', labelRu: 'Отели', labelEn: 'Hotels' },
    { id: 'restaurants', labelRu: 'Рестораны', labelEn: 'Restaurants' },
    { id: 'tourism', labelRu: 'Туризм', labelEn: 'Tourism' },
    { id: 'clinics', labelRu: 'Клиники', labelEn: 'Clinics' },
    { id: 'auto', labelRu: 'Автобизнес', labelEn: 'Auto Business' },
];

const copyByLang = {
    ru: {
        heading: 'ОБСУДИМ ВАШУ ЗАДАЧУ',
        description: 'Оставьте контакт и пару слов о задаче — предложим формат и вернёмся с расчётом.',
        submitted: {
            title: 'Заявка отправлена!',
            text: 'Свяжемся в течение рабочего часа в Telegram или WhatsApp.',
        },
        nameLabel: 'Ваше имя',
        namePlaceholder: 'Иван Иванов',
        methodLabel: 'Способ связи *',
        methods: ['Telegram', 'WhatsApp', 'Звонок'] as const,
        servicesLabel: 'Интересующие услуги',
        socialsLabel: 'ВАШИ СОЦСЕТИ ИЛИ САЙТ',
        socialsPlaceholder: '@аккаунт, ссылка или название объекта.',
        messageLabel: 'Коротко о задаче',
        messagePlaceholder: 'Например: обзор ЖК с воздуха и короткий ролик для рекламы.',
        submit: 'Отправить заявку',
        whatsapp: 'Написать в WhatsApp',
        whatsappText: 'Здравствуйте%2C+хочу+обсудить+аэросъёмку+дроном+в+Тбилиси.',
        consent: 'Нажимая кнопку, вы соглашаетесь на обработку контактных данных.',
    },
    en: {
        heading: 'DISCUSS YOUR BRIEF',
        description: 'Leave a contact and a few words about the task — we’ll suggest a format and come back with a quote.',
        submitted: {
            title: 'Request sent!',
            text: 'We’ll be in touch within a working hour on Telegram or WhatsApp.',
        },
        nameLabel: 'Your name',
        namePlaceholder: 'John Smith',
        methodLabel: 'Contact method *',
        methods: ['Telegram', 'WhatsApp', 'Call'] as const,
        servicesLabel: 'Services of interest',
        socialsLabel: 'YOUR SOCIAL OR WEBSITE',
        socialsPlaceholder: '@handle, link or property name.',
        messageLabel: 'Short brief',
        messagePlaceholder: 'For example: aerial overview of a development and a short ad cut.',
        submit: 'Submit Project for Estimate',
        whatsapp: 'or message on WhatsApp',
        whatsappText: 'Hello%2C+I%27d+like+to+discuss+a+shoot.+Please+share+details.',
        consent: 'By submitting, you agree to the processing of your contact details.',
    },
};

const normalizeServiceValue = (value: string) => value.trim().toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ');

const resolvePreselectedServiceLabel = (rawValue: string, visibleServiceOptions: string[], lang: 'ru' | 'en') => {
    const normalizedValue = normalizeServiceValue(rawValue);
    const directVisibleMatch = visibleServiceOptions.find((label) => normalizeServiceValue(label) === normalizedValue);

    if (directVisibleMatch) {
        return directVisibleMatch;
    }

    const matchedDefaultOption = serviceOptions.find((option) => {
        return (
            option.id === normalizedValue ||
            normalizeServiceValue(option.labelRu) === normalizedValue ||
            normalizeServiceValue(option.labelEn) === normalizedValue
        );
    });

    if (!matchedDefaultOption) {
        return null;
    }

    const defaultLabel = lang === 'en' ? matchedDefaultOption.labelEn : matchedDefaultOption.labelRu;
    const normalizedDefaultLabel = normalizeServiceValue(defaultLabel);

    return (
        visibleServiceOptions.find((label) => {
            const normalizedLabel = normalizeServiceValue(label);
            return normalizedLabel === normalizedDefaultLabel || normalizedLabel.includes(normalizedDefaultLabel);
        }) ?? null
    );
};

export function DroneContactStitch({
    preselectedServices,
    initialMessage,
    lang = 'ru',
    heading,
    description,
    serviceOptions: serviceOptionsOverride,
    messagePlaceholder,
    whatsappHref = 'https://wa.me/995501103183',
    className,
}: DroneContactStitchProps) {
    const copy = copyByLang[lang];
    const headingText = heading ?? copy.heading;
    const accentPhrase = lang === 'en' ? 'YOUR BRIEF' : 'ВАШУ ЗАДАЧУ';
    const headingParts = headingText.split(accentPhrase);
    const hasAccent = headingParts.length > 1;
    const methodsTuple = copy.methods;
    type MethodT = (typeof methodsTuple)[number];
    const [method, setMethod] = useState<MethodT>(methodsTuple[0]);
    const callMethod = methodsTuple[2];
    const waMethod = methodsTuple[1];
    const visibleServiceOptions = serviceOptionsOverride?.length
        ? serviceOptionsOverride
        : serviceOptions.map((service) => (lang === 'en' ? service.labelEn : service.labelRu));
    const [services, setServices] = useState<string[]>(() => {
        if (!preselectedServices?.length) {
            return [];
        }

        const selected = new Set<string>();
        preselectedServices.forEach((rawValue) => {
            const label = resolvePreselectedServiceLabel(rawValue, visibleServiceOptions, lang);
            if (label) {
                selected.add(label);
            }
        });

        return Array.from(selected);
    });
    const [message, setMessage] = useState(initialMessage ?? '');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleSelectService = (e: Event) => {
            const customEvent = e as CustomEvent<{ serviceTitle?: string }>;
            const serviceTitle = customEvent.detail?.serviceTitle;
            if (!serviceTitle) return;

            const prefix = lang === 'en' ? 'Hello! I would like to discuss: ' : 'Здравствуйте! Хочу обсудить услугу: ';
            setMessage(`${prefix}${serviceTitle}`);

            const matchedTag = resolvePreselectedServiceLabel(serviceTitle, visibleServiceOptions, lang);
            if (matchedTag) {
                setServices((prev) => (prev.includes(matchedTag) ? prev : [...prev, matchedTag]));
            }
        };

        const globalStorageKey = 'breus_contact_prefill_service';
        const storedGlobalService = sessionStorage.getItem(globalStorageKey);
        if (storedGlobalService) {
            const prefix = lang === 'en' ? 'Hello! I would like to discuss: ' : 'Здравствуйте! Хочу обсудить услугу: ';
            setMessage(`${prefix}${storedGlobalService}`);
            const matchedTag = resolvePreselectedServiceLabel(storedGlobalService, visibleServiceOptions, lang);
            if (matchedTag) {
                setServices((prev) => (prev.includes(matchedTag) ? prev : [...prev, matchedTag]));
            }
            sessionStorage.removeItem(globalStorageKey);
        }

        const storageKey = 'drone-hotels-tourism-prefill-message';
        const pathname = window.location.pathname;
        const onHotelsTourismPage =
            pathname === '/drone-hotels-tourism' || pathname === '/drone-hotels-tourism/en';

        if (onHotelsTourismPage) {
            const prefill = sessionStorage.getItem(storageKey);
            if (prefill) {
                setMessage(prefill);
                sessionStorage.removeItem(storageKey);
            }
        }

        window.addEventListener('breus-select-service', handleSelectService);
        return () => window.removeEventListener('breus-select-service', handleSelectService);
    }, [lang, visibleServiceOptions]);

    const toggleService = (service: string) => {
        setServices((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]));
    };

    const contactPlaceholder =
        method === callMethod ? '+995 ...' : method === waMethod ? '+995 ...' : '@username';

    return (
        <DebugWrapper id={10900} label="Drone Contact Section">
            <section className={`bg-[#080808] scroll-mt-[116px] py-5 md:scroll-mt-24 md:py-20 ${className || ''}`} id="contact">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-[#D4A017]/30 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-3.5 md:rounded-2xl md:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.14),transparent_55%)] pointer-events-none" />
                        <DebugWrapper id={10901} label="Contact Header">
                            <h2 className="mb-1.5 text-[20px] font-bold tracking-tight text-white md:text-3xl">
                                {hasAccent ? (
                                    <>
                                        {headingParts[0]}
                                        <span className="text-[#D4A017]">{accentPhrase}</span>
                                        {headingParts.slice(1).join(accentPhrase)}
                                    </>
                                ) : (
                                    headingText
                                )}
                            </h2>
                        </DebugWrapper>
                        <DebugWrapper id={10902} label="Contact Description">
                            <p className="mb-3 max-w-2xl text-[11px] leading-snug text-white/70 md:mb-6 md:text-[15px]">
                                {description ?? copy.description}
                            </p>
                        </DebugWrapper>

                        <form
                            id="contact-form"
                            className="relative z-10 space-y-2.5 md:space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setSubmitted(true);
                            }}
                        >
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                                    <div className="text-4xl">✅</div>
                                    <h3 className="text-white font-bold text-lg">{copy.submitted.title}</h3>
                                    <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                                        {copy.submitted.text}
                                    </p>
                                </div>
                            ) : (
                                <>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
                                <div className="hidden md:block">
                                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                        {copy.nameLabel}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={copy.namePlaceholder}
                                        className="w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:pb-2.5"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                        {copy.methodLabel}
                                    </label>
                                    <div className="flex gap-2 md:gap-3">
                                        {methodsTuple.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setMethod(option)}
                                                className={`border-b-2 pb-1 text-xs transition-colors md:pb-1.5 md:text-sm ${
                                                    method === option
                                                        ? 'border-[#D4A017] text-white'
                                                        : 'border-transparent text-white/45 hover:text-white/80'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder={contactPlaceholder}
                                        className="mt-2.5 w-full border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:mt-3 md:pb-2.5"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2.5 md:text-[11px]">
                                    {copy.servicesLabel}
                                </label>
                                <div className="flex flex-wrap gap-1.5 md:flex-nowrap md:gap-1.5">
                                    {visibleServiceOptions.map((label) => {
                                        const isActive = services.includes(label);
                                        return (
                                            <button
                                                key={label}
                                                type="button"
                                                onClick={() => toggleService(label)}
                                                className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] transition-colors md:px-2.5 md:py-1 md:text-[13px] ${
                                                    isActive
                                                        ? 'bg-[#D4A017] border-[#D4A017] text-black font-semibold'
                                                        : 'border-white/20 text-white/70 hover:border-white/45 hover:text-white'
                                                }`}
                                            >
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-white/55 md:mb-2 md:text-[11px]">
                                    {copy.messageLabel}
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={2}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={messagePlaceholder ?? copy.messagePlaceholder}
                                    className="h-12 w-full resize-none border-b border-white/25 bg-transparent pb-2 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#D4A017] md:h-auto md:pb-2.5"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <DebugWrapper id={10910} label="Contact Primary CTA">
                                    <button
                                        type="submit"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D4A017] px-5 py-3.5 text-xs md:text-sm font-bold uppercase tracking-[0.12em] text-black transition-all hover:bg-white"
                                    >
                                        <Send className="w-4 h-4" />
                                        {copy.submit}
                                    </button>
                                </DebugWrapper>
                                <DebugWrapper id={10911} label="Contact WhatsApp CTA">
                                    <a
                                        href={`${whatsappHref}${whatsappHref.includes('?') ? '&' : '?'}text=${copy.whatsappText}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-xs md:text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#20bd5a] shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
                                    >
                                        <MessageCircle className="w-4 h-4 text-white" />
                                        {copy.whatsapp}
                                    </a>
                                </DebugWrapper>
                            </div>

                            <p className="hidden md:block text-[10px] leading-tight text-white/45 md:text-[11px]">
                                {copy.consent}
                            </p>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </DebugWrapper>
    );
}
