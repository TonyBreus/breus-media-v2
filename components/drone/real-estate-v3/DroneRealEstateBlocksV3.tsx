import Image from 'next/image';
import Link from 'next/link';

// All data taken directly from the original drone-real-estate page.tsx
// No invented prices or claims.

export const WA = (msg: string) =>
    `https://wa.me/995501103183?text=${encodeURIComponent(msg)}`;

// ─── STATS (from original, kept with source attribution) ─────────────────────
const statsCards = [
    {
        stat: '+68%',
        label: 'К скорости продажи объекта',
        description: 'Объекты с видеоконтентом продаются быстрее, чем листинги только со статическими фото.',
        source: 'MLS / NAR',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics',
    },
    {
        stat: '+94%',
        label: 'Просмотров карточки объекта',
        description: 'Карточки с аэросъёмкой и видео района привлекают почти вдвое больше просмотров.',
        source: 'MLS Statistics Report',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics/research-reports',
    },
    {
        stat: '83%',
        label: 'Продавцов выбирают агентов с дроном',
        description: '83% продавцов предпочитают агентов с дроном.',
        source: 'National Association of Realtors',
        sourceUrl: 'https://www.nar.realtor/research-and-statistics/research-reports/real-estate-in-a-digital-age',
    },
];

export function DroneRealEstateStatsV3() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#080808] py-8 md:py-14">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Почему видео продаёт недвижимость</h2>
                <p className="mt-1 text-xs text-white/40">Данные рынка недвижимости США (MLS / NAR)</p>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {statsCards.map((s) => (
                        <article key={s.stat} className="rounded-[14px] border border-[#2a2a2a] bg-[#111] p-5">
                            <p className="text-4xl font-black text-[#D4A017]">{s.stat}</p>
                            <p className="mt-1 text-base font-bold text-white">{s.label}</p>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
                            <a
                                href={s.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-[11px] text-white/40 underline hover:text-white/60"
                            >
                                Источник: {s.source}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
const portfolioShots = [
    { src: '/media/drone-service/real-estate-1.png', alt: 'Аэросъёмка жилого комплекса в Тбилиси', tag: 'ЖК · Тбилиси' },
    { src: '/media/drone-service/construction-monitoring-1.png', alt: 'Мониторинг стройплощадки дроном', tag: 'Стройплощадка' },
    { src: '/media/drone-service/drone-facade-2.png', alt: 'Съёмка фасада здания с дрона', tag: 'Фасад · 4K' },
    { src: '/media/drone-service/object-inspection-1.png', alt: 'Инспекция объекта дроном', tag: 'Инспекция' },
    { src: '/media/drone-service/territory-monitoring-2.png', alt: 'Мониторинг территории объекта', tag: 'Территория' },
    { src: '/media/gazeta/360-real-estate-1.png', alt: '360° тур по недвижимости', tag: '360° тур' },
];

export function DroneRealEstatePortfolioV3() {
    return (
        <section id="portfolio" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-14">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Наши съёмки объектов</h2>
                <p className="mt-1 text-sm text-white/60">Кадры с реальных объектов в Грузии. Листайте →</p>
            </div>
            <div className="mt-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-6 px-6 pb-3 [scrollbar-width:none] md:container md:mx-auto md:grid md:grid-cols-3 md:overflow-visible md:px-6">
                {portfolioShots.map((s) => (
                    <figure key={s.src} className="relative aspect-[4/5] w-[72vw] shrink-0 snap-start overflow-hidden rounded-[16px] bg-[#111] sm:w-[46vw] md:w-auto">
                        <Image src={s.src} alt={s.alt} fill sizes="(max-width: 768px) 72vw, 33vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017]">{s.tag}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

// ─── PRICING (3 packages, merged from original 4) ─────────────────────────────
const packages = [
    {
        title: 'Полёт снаружи',
        price: '250 ₾',
        subtitle: 'Аэросъёмка дроном с высоты',
        items: [
            'Все оригинальные 4K видеофайлы (20–30 мин материала)',
            '10+ фотографий высокого разрешения',
            'Около 1,5 часов на объекте',
            'Передача файлов от 24 часов',
        ],
        note: 'Если работаете с монтажом сами.',
        popular: false,
        addons: ['+ Reels 30–60 сек: +150 ₾', '+ 360° панорама: +80 ₾'],
    },
    {
        title: 'Снаружи + внутри',
        price: '500 ₾',
        subtitle: 'Аэро с высоты + FPV-пролёт по помещениям',
        items: [
            'Аэросъёмка фасада, территории, подъездов',
            'FPV-пролёт дроном по лобби, этажу или квартире',
            '15+ фотографий высокого разрешения',
            'Около 2,5 часов на объекте',
            'Передача файлов от 24 часов',
        ],
        note: 'Один выезд — полный комплект для продажи.',
        popular: true,
        addons: ['+ Монтаж основного ролика до 3 мин: +150 ₾', '+ Вертикальные Reels: +150 ₾'],
    },
    {
        title: 'С готовым результатом',
        price: 'от 900 ₾',
        subtitle: 'Аэро + FPV + монтаж + обработка фото',
        items: [
            'Полный 4K-комплект исходников',
            'До 3 минут смонтированного видео',
            'Вертикальные Reels, Stories и TikTok',
            '20+ обработанных фотографий',
            'Видео под карточку Google Maps',
        ],
        note: 'Файлы разложены по папкам под каждый канал.',
        popular: false,
        addons: ['360° панорама с воздуха включена'],
    },
];

export function DroneRealEstatePricingV3() {
    return (
        <section id="pricing" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Пакеты съёмки</h2>
                <p className="mt-2 text-sm text-white/60">Точную цену назовём после брифа — зависит от объекта и задачи.</p>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {packages.map((p) => (
                        <article
                            key={p.title}
                            className={`relative flex flex-col rounded-[16px] p-5 md:p-6 ${
                                p.popular
                                    ? 'border-2 border-[#D4A017] bg-[#141208]'
                                    : 'border border-[#2a2a2a] bg-[#141414]'
                            }`}
                        >
                            {p.popular && (
                                <span className="absolute -top-3 left-5 rounded-full bg-[#D4A017] px-2.5 py-0.5 text-[11px] font-bold uppercase text-black">
                                    Популярный
                                </span>
                            )}
                            <h3 className="text-lg font-bold text-white md:text-xl">{p.title}</h3>
                            <p className="text-2xl font-black text-[#D4A017]">{p.price}</p>
                            <p className="text-xs text-white/60">{p.subtitle}</p>
                            <ul className="mt-4 flex-1 space-y-2">
                                {p.items.map((it) => (
                                    <li key={it} className="flex items-start gap-2 text-sm text-white/85">
                                        <span className="mt-0.5 shrink-0 text-[#D4A017]">✓</span>
                                        {it}
                                    </li>
                                ))}
                            </ul>
                            {p.addons.length > 0 && (
                                <div className="mt-4 rounded-[10px] bg-black/30 p-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">Опции</p>
                                    {p.addons.map((a) => (
                                        <p key={a} className="mt-1 text-xs text-white/65">{a}</p>
                                    ))}
                                </div>
                            )}
                            {p.note && <p className="mt-3 text-xs italic text-white/50">{p.note}</p>}
                            <a
                                href={WA(`Здравствуйте! Интересует пакет «${p.title}» (${p.price}) — аэросъёмка недвижимости.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Заказать пакет ${p.title}`}
                                className={`mt-5 flex min-h-[44px] items-center justify-center rounded-[10px] text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                                    p.popular
                                        ? 'bg-[#D4A017] text-black hover:bg-white'
                                        : 'border border-white/20 text-white hover:border-[#D4A017]'
                                }`}
                            >
                                Заказать
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── DELIVERABLES ─────────────────────────────────────────────────────────────
const deliverables = [
    {
        title: 'Аэрослой (съёмка снаружи)',
        items: [
            'Видео в 4K — фасад, территория, подъезды, ближайшее окружение',
            '10+ фотографий с воздуха в высоком разрешении',
            'Панорама района с привязкой к локации (по запросу)',
        ],
    },
    {
        title: 'FPV-пролёт (съёмка внутри)',
        items: [
            'Пролёт компактным дроном через этаж, лобби или общие зоны',
            'Зритель видит пространство в движении',
            'Видео в 4K, готовое к использованию',
        ],
    },
    {
        title: 'Полный комплект материала',
        items: [
            'Монтаж основного ролика до 3 минут',
            'Нарезка под Reels, Stories, TikTok',
            '20+ обработанных фотографий',
            'Горизонтальные и вертикальные форматы для сайта, MyHome.ge, Instagram, Google Maps',
        ],
    },
];

const techParams = [
    { label: 'Дроны', value: 'DJI Air 3S — съёмка снаружи, DJI Avata 2 — FPV внутри' },
    { label: 'Разрешение', value: '4K UHD (3840×2160), до 60 fps' },
    { label: 'Фото', value: 'JPEG + RAW в высоком разрешении' },
    { label: 'Форматы', value: 'MP4 H.265 (16:9) + вертикаль 9:16 для Reels' },
    { label: 'Передача', value: 'Google Drive или WeTransfer, папки по каналам' },
];

export function DroneRealEstateDeliverablesV3() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-14">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Что вы получаете после съёмки</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {deliverables.map((d) => (
                        <div key={d.title} className="rounded-[14px] border border-[#2a2a2a] bg-[#111] p-5">
                            <h3 className="text-base font-bold text-white">{d.title}</h3>
                            <ul className="mt-3 space-y-2">
                                {d.items.map((it) => (
                                    <li key={it} className="flex items-start gap-2 text-sm text-white/75">
                                        <span className="mt-0.5 shrink-0 text-[#D4A017]">·</span>
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-5 rounded-[14px] border border-[#2a2a2a] bg-[#111] p-5">
                    <h3 className="text-base font-bold text-white">Технические параметры</h3>
                    <dl className="mt-3 grid gap-y-2 sm:grid-cols-2 md:grid-cols-3">
                        {techParams.map((t) => (
                            <div key={t.label}>
                                <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">{t.label}</dt>
                                <dd className="text-sm text-white/80">{t.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
const processSteps = [
    { step: '01', title: 'Обсуждение объекта', text: 'Рассказываете про объект и куда пойдёт материал. Предлагаем формат и пакет. Расчёт в течение дня.' },
    { step: '02', title: 'Подготовка', text: 'Согласуем маршрут, дату и время. Для центра Тбилиси заранее проверяем зоны полётов.' },
    { step: '03', title: 'Съёмка', text: 'Снаружи и внутри по согласованному маршруту. 1,5–4 часа на объекте. Работу жильцов не останавливаем.' },
    { step: '04', title: 'Монтаж и передача', text: 'Монтируем ролик, обрабатываем фото, раскладываем файлы по папкам под каждый канал. Один раунд правок включён.' },
];

export function DroneRealEstateProcessV3() {
    return (
        <section id="process" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Как проходит работа</h2>
                <ol className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {processSteps.map((s) => (
                        <li key={s.step} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5">
                            <span className="text-xs font-bold text-[#D4A017]">{s.step}</span>
                            <h3 className="mt-2 text-base font-bold text-white">{s.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqItems = [
    { q: 'Сколько длится съёмка?', a: 'Базовый пакет — около 1,5 часов. Полная съёмка снаружи + внутри — 2–4 часа. Работу жильцов и офиса продаж не останавливаем.' },
    { q: 'Можно снимать в центре Тбилиси — Мтацминда, Сололаки, Ваке?', a: 'В большинстве зон — да. Исторические кварталы и зоны возле правительственных объектов требуют согласования. Мы проверяем лимиты до выезда.' },
    { q: 'Что получаю после съёмки?', a: 'В базовых пакетах — исходные 4K-видео и обработанные фото. В пакете «С готовым результатом» — смонтированный ролик до 3 мин, Reels, Stories, TikTok, 20+ фото, видео под Google Maps.' },
    { q: 'Подходит ли для дистанционной продажи инвестору?', a: 'Да. Аэровидео показывает район и подходы, FPV — интерьер в движении. Инвестор принимает решение по материалам без первого приезда.' },
    { q: 'Включён ли монтаж в базовый пакет?', a: 'В «Полёт снаружи» и «Снаружи + внутри» монтаж не входит — получаете исходники. Монтаж доступен как опция (+150 ₾) или входит в «С готовым результатом».' },
    { q: 'Снимаете строящиеся ЖК на разных этапах?', a: 'Да. Для застройщиков делаем регулярный мониторинг стройки с повторяющимися точками съёмки. Для разового заказа — покажем текущий статус и масштаб.' },
    { q: 'Работаете за пределами Тбилиси?', a: 'Да — Кахетия, Мцхета, Казбеги, Гудаури, Батуми и другие регионы Грузии. Для удалённых локаций расчёт индивидуальный.' },
];

export function DroneRealEstateFAQV3() {
    return (
        <section id="faq" className="scroll-mt-20 border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-4xl">Вопросы и ответы</h2>
                <dl className="mt-8 space-y-4">
                    {faqItems.map((f) => (
                        <div key={f.q} className="rounded-[14px] border border-[#2a2a2a] bg-[#111] p-5">
                            <dt className="text-base font-bold text-white">{f.q}</dt>
                            <dd className="mt-2 text-sm leading-relaxed text-white/75">{f.a}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

// ─── RELATED SERVICES ─────────────────────────────────────────────────────────
const relatedServices = [
    { title: '360° виртуальный тур для недвижимости', href: '/360-tour-real-estate', text: 'Интерактивный тур по квартире или ЖК — покупатель ходит по объекту сам, на сайте или в объявлении.' },
    { title: 'Reels и видео для риелтора', href: '/reels-promo/reels-realtor', text: 'Короткое вертикальное видео объекта для Instagram и TikTok — быстрая нарезка из аэроматериала.' },
];

export function DroneRealEstateRelatedV3() {
    return (
        <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10 md:py-14">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold md:text-3xl">Другие форматы под недвижимость</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">Аэросъёмку можно дополнить другими форматами — для сайта, соцсетей и дистанционных продаж.</p>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                    {relatedServices.map((s) => (
                        <Link key={s.href} href={s.href} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#D4A017]/50">
                            <h3 className="text-lg font-bold text-white">{s.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">{s.text}</p>
                            <p className="mt-4 text-sm font-semibold text-[#D4A017]">Подробнее →</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
