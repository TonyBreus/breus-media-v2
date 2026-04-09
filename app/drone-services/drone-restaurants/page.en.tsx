import type { Metadata } from 'next';
import Link from 'next/link';
import { SmartHeader } from '@/components/gazeta/SmartHeader';
import { DroneFooterStitch } from '@/components/drone/DroneFooterStitch';
import { FaqSection } from '@/components/shared/FaqSection';
import { ProcessNote } from '@/components/shared/ProcessNote';
import { DronePageProgress } from '@/components/drone-restaurants/DronePageProgress';
import { DroneStickyCta } from '@/components/drone-restaurants/DroneStickyCta';
import { MobileBottomBar } from '@/components/drone-restaurants/MobileBottomBar';
import { ScrollArrow } from '@/components/drone-restaurants/ScrollArrow';
import { DroneRestaurantsContactForm } from '@/components/drone-restaurants/DroneRestaurantsContactForm';
import { HeroSlideshow } from '@/components/drone-restaurants/HeroSlideshow';
import { FormatExamplesSlideshow } from '@/components/drone-restaurants/FormatExamplesSlideshow';
import formatExampleOne from '@/services-images/drone-restaurants/final/4.png';
import formatExampleTwo from '@/services-images/drone-restaurants/final/2.png';
import formatExampleThree from '@/services-images/drone-restaurants/final/3.png';

type FaqItem = {
    question: string;
    answer: string;
};

type CardItem = {
    title: string;
    text: string;
};

type RoleCard = {
    title: string;
    text: string;
};

type PricingPackage = {
    title: string;
    price: string;
    subtitle: string;
    items: string[];
    note?: string;
    popular?: boolean;
};

type ProcessStep = {
    step: string;
    title: string;
    text: string;
};

type RelatedService = {
    title: string;
    href: string;
    text: string;
};

type NicheCard = {
    title: string;
    pain: string;
    solution: string;
    deliverables: string;
};

type SeoAnswer = {
    question: string;
    answer: string;
};

const audienceCards: RoleCard[] = [
    {
        title: 'Restaurant or cafe owner',
        text: 'Need fresh visuals after launch, renovation, or a concept update.',
    },
    {
        title: 'Venue manager',
        text: 'Need website and Google Maps content that shows the place clearly and fast.',
    },
    {
        title: 'Restaurant marketer',
        text: 'Need Reels, Stories, photos, and ad-ready clips from one shoot.',
    },
    {
        title: 'Rooftop bar or event venue owner',
        text: 'Want to sell the view and atmosphere, not just the menu.',
    },
    {
        title: 'Restaurant with a hidden entrance',
        text: 'Want guests to understand where to go before they arrive.',
    },
    {
        title: 'Venue getting ready for season or relaunch',
        text: 'Need a fast content kit with a clear result and clear timing.',
    },
];

const problemCards: CardItem[] = [
    {
        title: '“The place feels strong in real life, but photos flatten it”',
        text: 'A drone shows scale, layout, and mood. It reveals what one still photo cannot.',
    },
    {
        title: '“People watch Instagram, but bookings do not move”',
        text: 'Motion helps guests understand the venue in seconds: entrance, hall, terrace, flow.',
    },
    {
        title: '“We reopened, renovated, or launched, but still use old visuals”',
        text: 'In one visit we can film the main website video, social cutdowns, and updated photos.',
    },
    {
        title: '“Competitors look stronger on Google, even if our venue is better”',
        text: 'Add video to Google Maps and your listing stands out faster among nearby venues.',
    },
    {
        title: '“We have a terrace and a view, but guests discover it too late”',
        text: 'Drone footage shows what interior photos cannot: rooftop, courtyard, district, and approach.',
    },
    {
        title: '“We host events, but have nothing strong to send to planners”',
        text: 'One good video can replace a long chain of photos in a sales conversation.',
    },
];

const deliverablesDefault: string[] = [
    'Flight permit (GCAA) — we handle it',
    '4K video files',
    'Delivery via Google Drive or WeTransfer',
    'Travel within Tbilisi included',
];

const shootingZones: string[] = [
    'Facade and signage',
    'Entrance and guest approach',
    'Terrace, courtyard, outdoor area',
    'Rooftop zone',
    'Neighborhood overview / city context',
    'FPV flight through the space: interior details in motion',
];

const optionalAddons: string[] = [
    'Edited main film and short cutdowns',
    'Color-corrected photos',
    'Files split by purpose: website, social, Google Maps',
    'Horizontal, vertical, or both formats',
];

const formatExampleCards = [
    { image: formatExampleOne, alt: 'Restaurant aerial filming example in Tbilisi - format 1' },
    { image: formatExampleTwo, alt: 'Restaurant aerial filming example in Tbilisi - format 2' },
    { image: formatExampleThree, alt: 'Restaurant aerial filming example in Tbilisi - format 3' },
];

const formatExampleSlides = [formatExampleOne, formatExampleTwo, formatExampleThree];

const whyUsCards: CardItem[] = [
    {
        title: 'We shoot to make guests want to visit',
        text: 'We do not chase a pretty flyover for its own sake. We build a clear reason to come.',
    },
    {
        title: 'We frame the venue like a guest journey',
        text: 'Street, entrance, hall, terrace, rooftop. One video shows how the place opens up.',
    },
    {
        title: 'Outputs built for platforms',
        text: 'We prepare footage for website pages, Reels, Google Business Profile, and ads.',
    },
    {
        title: 'Small team, faster decisions',
        text: 'Less communication overhead means faster approvals, cleaner feedback, and quicker delivery.',
    },
    {
        title: 'Real local context in Tbilisi',
        text: 'We know hidden courtyards, rooftop concepts, narrow streets, and tricky entrances.',
    },
];

const processSteps: ProcessStep[] = [
    {
        step: 'Step 1',
        title: 'Brief',
        text: 'We define what to show, where the footage will be used, and what timing matters.',
    },
    {
        step: 'Step 2',
        title: 'Site check',
        text: 'We review the location, light, access, and flight safety before the shoot starts.',
    },
    {
        step: 'Step 3',
        title: 'Shoot day',
        text: 'We film the exterior, key repeat takes, and the FPV route inside when the space allows it.',
    },
    {
        step: 'Step 4',
        title: 'Edit and polish',
        text: 'We cut the main film, prepare short social edits, and process the photos.',
    },
    {
        step: 'Step 5',
        title: 'File delivery',
        text: 'We send a clean folder structure with ready-to-use files sorted by purpose.',
    },
];

const pricingCards: PricingPackage[] = [
    {
        title: 'Aerial Shot',
        price: '250 ₾',
        subtitle: 'Aerial drone coverage from above',
        items: [
            '4K video + high-resolution photos, ready to use',
            '10+ photos from different angles',
            'About 1.5 hours on site — from setup to final take',
            'File delivery from 24 hours',
        ],
        note: 'Best if you handle the visuals yourself — you get ready files and use them wherever you need.',
    },
    {
        title: 'FPV Fly-Through',
        price: '350 ₾',
        subtitle: 'FPV drone pass through the venue',
        items: [
            '4K video, ready to use',
            'Multiple takes to find the best route',
            'About 1.5 hours on site — from setup to final take',
            'File delivery from 24 hours',
        ],
        note: 'FPV moves through the space. Before the shoot we lock the route and details so the result lands well.',
    },
    {
        title: 'Full Shoot',
        price: '500 ₾',
        subtitle: 'Aerial coverage + interior fly-through — dining room, veranda, terrace — in one visit',
        items: [
            'Aerial video and FPV fly-through in 4K',
            '10+ high-resolution photos from different angles',
            'About 2.5 hours on site — from setup to final take',
            'File delivery from 24 hours',
        ],
        note: 'One visit covers the facade from above and the route through your space.',
        popular: true,
    },
    {
        title: 'Full Package',
        price: 'from 900 ₾',
        subtitle: 'Aerial coverage + indoor drone pass + editing and photos',
        items: [
            'Planned shooting route',
            'Up to 3 minutes of edited footage split into clips for website, Reels, Stories, and TikTok',
            '20+ edited photos',
            'Video for your Google Maps listing',
            'Delivery from 48 hours (editing included)',
        ],
    },
];

const addonPricing: string[] = [
    'Reels edit up to 30 sec (music + subtitles): +150 ₾',
    'Website edit 30–60 sec: +150 ₾',
    '360° aerial panorama: +80 ₾',
];

const relatedServices: RelatedService[] = [
    {
        title: '360° virtual tour for restaurants',
        href: '/360-tour-restaurants',
        text: 'An interactive walk-through of the space. Guests control the view themselves. It pairs well with drone video.',
    },
    {
        title: 'Aerial filming for hotels',
        href: '/drone-hotels-tourism',
        text: 'If your restaurant is part of a hotel or resort, we can cover the full property in one visit.',
    },
    {
        title: 'Reels and short videos for restaurants',
        href: '/reels-promo/reels-restaurant',
        text: 'Drone shows the venue from above. Reels show the live energy inside.',
    },
    {
        title: 'FPV filming',
        href: '/drone-fpv-cinema',
        text: 'A cinematic camera move through space. The viewer feels like they are walking through the venue.',
    },
];

const nicheMistakes: string[] = [
    'Show only the food and ignore the space itself.',
    'Open the video weakly, so the viewer scrolls away in the first second.',
    'Film during peak hours when noise and random guests dominate the frame.',
    'Use one edit for both website and Instagram instead of adapting the format.',
    'Keep outdated visuals after a season change, renovation, or new menu.',
];

const freeImprovements: string[] = [
    'Check whether your Google Maps listing already has video.',
    'Put the entrance, main hall, and terrace among your first Instagram visuals, not only dishes.',
    'Post a short Stories teaser: street -> entrance -> hall.',
    'If the entrance is tricky, publish a “how to find us” clip.',
    'Encourage guests to post Reels and tag your venue.',
];

const shootChecklist: string[] = [
    'Define what to show: facade / terrace / rooftop / interior',
    'Pick a time with fewer guests',
    'Prepare the signage and entrance zone',
    'Make sure the terrace or summer area is ready',
    'Decide where the assets will go: website, Instagram, Google Maps, ads',
    'Decide whether you need an interior FPV pass',
    'Align timing with the venue team',
    'Assign one person to meet the crew',
    'Choose a delivery method (Google Drive / WeTransfer)',
    'Know which package fits the task',
];

const faqItems: FaqItem[] = [
    {
        question: 'What does drone filming actually do for a restaurant?',
        answer:
            'It shows atmosphere, entrance, layout, terrace, rooftop, and surroundings faster than standard photos. Guests understand where they are going before they book.',
    },
    {
        question: 'Is this only for large or expensive restaurants?',
        answer:
            'No. A small cafe with a strong mood, courtyard, or terrace can look just as convincing on video as a bigger venue.',
    },
    {
        question: 'How is drone filming different from regular camera video?',
        answer:
            'A drone gives you angles a handheld camera cannot reach: height, smooth exterior motion, and spatial context. FPV adds movement through the interior.',
    },
    {
        question: 'Can you film inside the restaurant?',
        answer:
            'Yes. We use DJI Avata 2 for interior FPV. Before the shoot we assess the space and confirm the route so the result feels precise.',
    },
    {
        question: 'Do we need to close the restaurant during filming?',
        answer:
            'Usually no. We schedule before opening, during quiet hours, or in a time slot that does not interrupt service.',
    },
    {
        question: 'Where else can we use the assets?',
        answer:
            'On your website, in Google Business Profile, in ads, in chats with clients or event planners, and in venue presentations.',
    },
    {
        question: 'How much does restaurant drone filming cost in Tbilisi?',
        answer:
            'Aerial filming from above — 250 ₾. Interior FPV fly-through — 350 ₾. Full Shoot in one visit — 500 ₾. These packages include 4K photo and video. Full Package with editing and social-ready clips — from 900 ₾. You can also add Reels editing (+150 ₾), a website edit (+150 ₾), or a 360° panorama (+80 ₾).',
    },
    {
        question: 'What files do we get at the end?',
        answer:
            'A main film, short vertical and horizontal clips, and color-corrected photos — all sorted into folders for website, social, and Google.',
    },
    {
        question: 'How long does the shoot take?',
        answer:
            'Most restaurant shoots take 1–3 hours on site. Editing and delivery usually take 3–7 business days.',
    },
    {
        question: 'Do you need permits for flights in Tbilisi?',
        answer:
            'Yes. We work under Georgian Civil Aviation Agency (GCAA) rules. Airspace checks and permit prep stay on us.',
    },
    {
        question: 'What if the weather turns bad on the shoot day?',
        answer:
            'We monitor the forecast in advance. If wind or rain makes the shoot unsafe, we move it to the nearest suitable day at no extra cost.',
    },
    {
        question: 'Can we order only photo or only video?',
        answer:
            'Yes. We can adapt the package to the format and channels you actually need.',
    },
    {
        question: 'Do you work outside Tbilisi?',
        answer:
            'Yes. We also shoot in Batumi, Kutaisi, and other parts of Georgia by agreement.',
    },
    {
        question: 'Which Tbilisi districts do you cover?',
        answer:
            'All of them: Old Tbilisi, Mtatsminda, Vera, Saburtalo, Vake, Avlabari, Chugureti, Marjanishvili, and beyond. We also shoot in Batumi, Kutaisi, and Kakheti.',
    },
];

const seoAnswers: SeoAnswer[] = [
    {
        question: 'How much does drone filming for a restaurant in Tbilisi cost?',
        answer:
            'Aerial filming from above — 250 ₾. Interior FPV fly-through — 350 ₾. Full Shoot in one visit — 500 ₾. In these packages you get 4K photo and video ready to use. Full Package with editing, social clips, and photos starts from 900 ₾ (delivery from 48 hours, editing included). You can also add Reels editing (+150 ₾), a website edit (+150 ₾), or a 360° panorama (+80 ₾).',
    },
    {
        question: 'Do you need permits to film a restaurant with a drone in Tbilisi?',
        answer:
            'Yes. In Georgia, drone flights are regulated by GCAA. Urban airspace can have restrictions. We handle the zone check and approvals, so your team does not need to deal with the paperwork.',
    },
    {
        question: 'How does drone filming help a restaurant attract guests?',
        answer:
            'It answers the guest’s first question before the visit: what does this place feel like? The footage shows facade, entrance, terrace, and the hall in motion. For hidden venues or unusual locations in Tbilisi, that makes a real difference.',
    },
    {
        question: 'Can you fly a drone inside a restaurant?',
        answer:
            'Yes. For interiors we use a compact FPV setup that moves through the venue. Before the shoot we inspect ceiling height, layout, and safety, then confirm the route.',
    },
    {
        question: 'What does the restaurant get after the shoot?',
        answer:
            'A main website film, short clips for Instagram / TikTok / Stories, edited photos, and video for the Google Maps listing. Everything is organized by purpose. The exact mix depends on the package.',
    },
    {
        question: 'How long does the shoot take and when will the files be ready?',
        answer:
            'The shoot takes 1 to 3 hours depending on the task. 4K files without editing — from 24 hours. Edited videos with full post-production — 3 to 7 business days.',
    },
    {
        question: 'Is drone filming a good fit for a seasonal launch or restaurant opening?',
        answer:
            'Yes, it is one of the most common scenarios. Before a new season or after a renovation we can capture a full set in one visit: aerial video, FPV fly-through, photos, and social-ready clips. The finished files go live the moment you launch — ready for ads, website, and Google Maps.',
    },
    {
        question: 'Do you only film restaurants, or also cafes and bars?',
        answer:
            'We film any hospitality venue: restaurants, cafes, bars, wine bars, rooftop spaces, and event locations. We adapt the shooting format to the size and character of the space — from a small courtyard cafe to a multi-hall restaurant.',
    },
];

const shortQA: { q: string; a: string }[] = [
    {
        q: 'How much does drone filming cost for a restaurant in Tbilisi?',
        a: 'From 250 ₾ for aerial coverage. Full exterior and interior shoot — 500 ₾. With editing and social-ready clips — from 900 ₾.',
    },
    {
        q: 'What is included in restaurant drone filming?',
        a: 'Aerial video and photos in 4K, FPV fly-through of the interior, and color-corrected stills. The full package adds edited clips for social media and Google Maps.',
    },
    {
        q: 'Can you fly a drone inside a restaurant?',
        a: 'Yes. We use a compact FPV drone, DJI Avata 2. The route is planned before the shoot.',
    },
    {
        q: 'How long does a restaurant shoot take?',
        a: 'About 1.5 to 2.5 hours on site. 4K files without editing — from 24 hours. Edited videos — 3 to 7 business days.',
    },
    {
        q: 'Do you need a permit to fly a drone in Tbilisi?',
        a: 'Yes, flights are regulated by GCAA. We handle all approvals.',
    },
    {
        q: 'Why does a restaurant need drone video?',
        a: 'It shows guests the space before they visit: facade, entrance, terrace, hall. The footage works on the website, social media, and Google Maps listing.',
    },
    {
        q: 'Do you only shoot in Tbilisi?',
        a: 'No. We also cover Batumi, Kutaisi, Kakheti, and other parts of Georgia.',
    },
];

const nicheCards: NicheCard[] = [
    {
        title: 'Fine dining restaurant',
        pain: 'The venue feels impressive in person, but the photos look flat.',
        solution: 'Drone and FPV show scale, atmosphere, and interior detail in one sequence.',
        deliverables: 'Main film + Reels + website photo set.',
    },
    {
        title: 'Rooftop bar or terrace with a view',
        pain: 'Your key advantage is the panorama, but ground-level content misses it.',
        solution: 'Aerial shots place the terrace in the wider city view and make the location legible.',
        deliverables: 'Overview video + vertical clips + aerial photos.',
    },
    {
        title: 'Cafe or bar with an unusual entrance',
        pain: 'Guests struggle to find the entrance and lose confidence on the way.',
        solution: 'A short route video takes them from street to door in seconds.',
        deliverables: 'Navigation clip + Stories version.',
    },
    {
        title: 'Wine bar or restaurant in Kakheti',
        pain: 'Tourists choose with their eyes, but photos do not show the vineyards or the valley.',
        solution: 'Aerial footage sells the setting, not just the menu.',
        deliverables: 'Cinematic brand film + social series.',
    },
    {
        title: 'Restaurant inside a hotel or resort',
        pain: 'You need content for both the restaurant and the property, but the budget is shared.',
        solution: 'We can cover the restaurant, grounds, and key hotel zones in one visit.',
        deliverables: 'One shoot, two content sets.',
    },
    {
        title: 'Event venue for weddings or corporate bookings',
        pain: 'Clients ask to “see the hall,” but photos do not show the scale.',
        solution: 'A full walk-through of the hall, terrace, entrance, and parking makes the pitch easier.',
        deliverables: 'Presentation video + photo set for sales conversations.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does restaurant drone filming cost in Tbilisi?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Aerial filming from above — 250 ₾. Interior FPV fly-through — 350 ₾. Full Shoot in one visit — 500 ₾. 4K photo and video are included. Full Package with editing for social starts from 900 ₾. You can also add Reels editing (+150 ₾), a website edit (+150 ₾), or a 360° panorama (+80 ₾).',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you need permits to film a restaurant with a drone in Tbilisi?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Breus Media works under Georgian Civil Aviation Agency (GCAA) rules. We handle the permit preparation, so the client does not need to manage extra paperwork.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you film inside a restaurant?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. For interiors we use DJI Avata 2. Before the shoot we assess the space and confirm the route so the result feels precise.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do we need to close the restaurant during filming?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Usually no. We choose a slot before opening or during quiet hours to minimize disruption to service.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long do the shoot and edit take?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The shoot on site usually takes 1 to 3 hours. Editing and delivery of finished assets normally take 3 to 7 business days depending on the package.',
            },
        },
        {
            '@type': 'Question',
            name: 'What if the weather is bad on the shoot day?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We monitor the forecast early. If conditions are unsafe, we move the shoot to the nearest suitable day at no extra charge.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you work in other Georgian cities apart from Tbilisi?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We also shoot in Batumi, Kutaisi, and other locations by agreement, with travel taken into account.',
            },
        },
        {
            '@type': 'Question',
            name: 'What exactly do I get after the shoot?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A main film, short vertical and horizontal videos, and color-corrected photos. Files are sorted by purpose: website, social, Google Business Profile. Everything is ready to publish.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can we order only photos or only video?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The standard package includes both, but we can adapt the scope to a specific task.',
            },
        },
        {
            '@type': 'Question',
            name: 'How does drone filming help a restaurant attract guests?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Drone video answers the guest’s question “what is this place actually like?” before the visit. That speeds up decision-making, especially for venues with hidden entrances, rooftop areas, or unusual courtyards.',
            },
        },
        {
            '@type': 'Question',
            name: 'What equipment do you use?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We use DJI Air 3S for exterior aerial filming in 4K and DJI Avata 2 for FPV elements inside the venue. Final files are color-corrected before delivery.',
            },
        },
        {
            '@type': 'Question',
            name: 'Which Tbilisi districts do you cover for restaurant filming?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'All of Tbilisi: Old Tbilisi, Mtatsminda, Vera, Saburtalo, Vake, Avlabari, Chugureti, Marjanishvili, and beyond. We also shoot in Batumi, Kutaisi, and Kakheti.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is drone filming a good fit for a seasonal launch or restaurant opening?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. In one visit we capture aerial video, FPV fly-through, photos, and social-ready clips. The files are ready to use the moment you launch — for ads, website, and Google Maps.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you only film restaurants, or also cafes and bars?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We film any hospitality venue: restaurants, cafes, bars, wine bars, rooftop spaces, and event locations. We adapt the format to the size and character of the space.',
            },
        },
    ],
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Restaurant Drone Filming and FPV in Tbilisi',
    description:
        'Drone filming and FPV video for restaurants, cafes, bars, and hospitality venues in Tbilisi. We show the facade, entrance, terrace, rooftop, and interior. Final assets work for website pages, Instagram, Google Business Profile, and ads.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Breus Media',
        url: 'https://breus.media',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tbilisi',
            addressCountry: 'GE',
        },
    },
    areaServed: [
        {
            '@type': 'City',
            name: 'Tbilisi',
            containedInPlace: { '@type': 'Country', name: 'Georgia' },
        },
        {
            '@type': 'City',
            name: 'Batumi',
            containedInPlace: { '@type': 'Country', name: 'Georgia' },
        },
        {
            '@type': 'City',
            name: 'Kutaisi',
            containedInPlace: { '@type': 'Country', name: 'Georgia' },
        },
    ],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GEL',
        lowPrice: '250',
        highPrice: '2200',
        offerCount: '4',
    },
    serviceType: 'Drone Photography and Videography',
    url: 'https://breus.media/drone-services/drone-restaurants',
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Breus Media',
    description: 'Media production studio in Tbilisi. Drone filming, FPV video, 360° virtual tours, Reels, and AI visuals for business.',
    url: 'https://breus.media',
    telephone: '+995574619393',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tbilisi',
        addressRegion: 'Tbilisi',
        addressCountry: 'GE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.6938',
        longitude: '44.8015',
    },
    priceRange: '₾₾',
    currenciesAccepted: 'GEL',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: ['https://www.instagram.com/breusmedia'],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://breus.media',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Drone Services',
            item: 'https://breus.media/drone-services',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Restaurant Drone Filming',
            item: 'https://breus.media/drone-services/drone-restaurants/en',
        },
    ],
};

export const metadata: Metadata = {
    title: 'Restaurant Drone Filming in Tbilisi — drone + FPV | Breus Media',
    description:
        'Drone filming and FPV for restaurants, cafes, and bars in Tbilisi from 250 ₾. Exterior coverage, interior fly-through, and full ready-to-use content for website, Reels, and Google Maps.',
    alternates: {
        canonical: 'https://breus.media/drone-services/drone-restaurants/en',
        languages: {
            ru: 'https://breus.media/drone-services/drone-restaurants',
            en: 'https://breus.media/drone-services/drone-restaurants/en',
        },
    },
    openGraph: {
        title: 'Restaurant Drone Filming in Tbilisi | Breus Media',
        description:
            'Drone filming and FPV for restaurants, cafes, and bars in Tbilisi from 250 ₾. Exterior, interior, and full-package content for website, Reels, and Google Maps.',
        url: 'https://breus.media/drone-services/drone-restaurants/en',
        siteName: 'Breus Media',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://breus.media/og/drone-restaurants.jpg',
                width: 1200,
                height: 630,
                alt: 'Restaurant drone filming in Tbilisi - Breus Media',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Restaurant Drone Filming in Tbilisi | Breus Media',
        description: 'Drone filming and FPV for restaurants, cafes, and bars in Tbilisi from 250 ₾. Exterior, interior, and full-package content for website, Reels, and Google Maps.',
        images: ['https://breus.media/og/drone-restaurants.jpg'],
    },
};

export default function DroneRestaurantsPageEn() {
    return (
        <main className="min-h-screen bg-[#080808] pb-20 text-white lg:pb-0">
            <DronePageProgress />

            <SmartHeader
                transparent={true}
                isLanding={false}
                ctaHref="#contact"
                initialLang="EN"
                languageLinks={{
                    RU: '/drone-services/drone-restaurants',
                    EN: '/drone-services/drone-restaurants/en',
                }}
                sectionLinks={[
                    { label: 'Process', href: '#process' },
                    { label: 'Pricing', href: '#pricing' },
                    { label: 'FAQ', href: '#faq' },
                    { label: 'Contact', href: '#contact' },
                ]}
            />

            <section
                id="drone-restaurants-hero"
                className="relative isolate overflow-hidden border-b border-[#2a2a2a] bg-[#080808] pb-14 pt-40 md:pb-16 md:pt-48"
            >
                <HeroSlideshow />
                <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,63,0.26),transparent_42%),linear-gradient(180deg,rgba(8,8,8,0.35),rgba(8,8,8,0.95)_70%,#080808)]" />
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD23F]/60 to-transparent" />

                <div className="container relative mx-auto px-6">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                        <div>
                            <h1 className="max-w-none text-4xl font-bold leading-[0.94] md:text-6xl lg:text-7xl">
                                Restaurant Drone Filming in Tbilisi
                            </h1>

                            <p className="mt-4 max-w-none text-[17px] leading-[1.4] text-white/85 md:text-[21px]">
                                In Tbilisi, restaurants compete on more than food. Courtyards, rooftop terraces, city
                                views, and the path guests take through the venue all shape the product.
                            </p>

                            <div className="mt-4 max-w-none text-[15px] leading-[1.34] text-white/74 md:text-[17px] lg:columns-2 lg:gap-8">
                                <p className="mb-3 break-inside-avoid">
                                    Photos and handheld video are everywhere — but they only show what fits inside the
                                    frame. A drone changes the game.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    Aerial photos and video reveal scale: rooftop seating, green courtyards, and the
                                    venue inside its district. Guests understand where they are going before they book.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    FPV goes further. It slips through an archway, moves above tables, approaches a
                                    plated dish, and rises into the city view in one continuous motion. In seconds,
                                    people feel the space, light, mood, and details.
                                </p>

                                <p className="mb-3 break-inside-avoid">
                                    We shoot, edit, and deliver everything ready for Instagram, TikTok, Facebook,
                                    Google Maps, Google Business Profile, and your website.
                                </p>

                                <p className="mb-0 break-inside-avoid text-white/84">
                                    One shoot day can give you a visual base that keeps working for a year or longer.
                                </p>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                                >
                                    Discuss Project
                                </a>
                                <a
                                    href="#pricing"
                                    className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#FFD23F]"
                                >
                                    View Pricing
                                </a>
                            </div>
                        </div>

                        <aside className="rounded-[20px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">At a glance</p>
                            <div className="mt-5 space-y-4">
                                <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-2xl font-bold text-white">from 250 ₾</p>
                                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                                        Show your restaurant before the first visit
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">1–3 h</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Shoot</p>
                                    </div>
                                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                                        <p className="text-lg font-bold text-white">from 24 h</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Delivery</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm leading-relaxed text-white/72">
                                    <li>Exterior, interior, and atmosphere in 4K</li>
                                    <li>We shoot and edit — you just publish</li>
                                    <li>One visit can keep working for the venue for years</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <ScrollArrow />
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">How it looks</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Examples of aerial filming for restaurants and cafes in Tbilisi, outside and inside.
                        </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-[20px] border border-[#2a2a2a] bg-[#141414]">
                        <FormatExamplesSlideshow
                            slidesOverride={formatExampleSlides}
                            altTexts={[
                                'Restaurant drone filming example in Tbilisi - slide 1',
                                'Restaurant drone filming example in Tbilisi - slide 2',
                                'Restaurant drone filming example in Tbilisi - slide 3',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section id="problems" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">What do people usually say before filming?</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {problemCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-base font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="what-is" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">What we film — and what it solves</h2>
                        <p className="mt-5 leading-relaxed text-white/72">
                            Restaurant aerial filming is not just a top-down shot. We show the venue in the same order
                            a guest discovers it: neighborhood, street, facade, entrance, interior, atmosphere.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            A drone gives the outside context: scale, terrace, courtyard, rooftop, and location in the
                            city. FPV adds motion inside: flow through the dining room, links between zones, and depth.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/72">
                            This does not replace all marketing. It answers the first question fast: what is this place
                            actually like? The faster people understand, the easier they decide to visit.
                        </p>
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                First-time guests understand where they are going before they arrive.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Terrace, courtyard, or rooftop stops being a hidden advantage.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Seasonal content is ready to publish without long approval cycles.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78">
                                Your Google Maps listing gets video, so guests see the venue before they even call.
                            </li>
                            <li className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-4 py-4 text-sm leading-relaxed text-white/78 md:col-span-2">
                                Event managers can send one link instead of a pile of separate photos.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="deliverables" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">What you get</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            After the shoot, you get more than raw files. You get a usable kit, organized by purpose and
                            ready for each platform.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/58">
                            If you need more than aerial coverage, we can extend the shoot into a fuller content pack for
                            the venue.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Included in every package</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {deliverablesDefault.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Shooting zones</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {shootingZones.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Included in the Full Package</h3>
                            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/72">
                                {optionalAddons.map((item) => (
                                    <li key={item}>+ {item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
                        <div>
                            <h3 className="text-xl font-bold text-white">How the files are organized</h3>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {[
                                    { name: 'Website', desc: 'Main film and photos for website pages' },
                                    { name: 'Social', desc: 'Vertical videos for Reels, Stories, TikTok' },
                                    { name: 'Google Maps', desc: 'Short video and photos for the venue listing' },
                                    { name: 'Archive', desc: 'All source files for future use' },
                                ].map((folder) => (
                                    <div key={folder.name} className="rounded-[14px] border border-[#2a2a2a] bg-[#0D0D0D] p-5">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            {folder.name}
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/70">{folder.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <article className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                            <h3 className="text-lg font-bold text-white">Technical specs</h3>
                            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                                <li>4K capture</li>
                                <li>Two modes: exterior aerial coverage + interior fly-through</li>
                                <li>Color correction and stabilization included in the edited package</li>
                                <li>Formats: MP4, JPG / WebP on request</li>
                                <li>Delivery via Google Drive or WeTransfer</li>
                            </ul>
                            <p className="mt-4 text-xs leading-relaxed text-white/45">
                                Gear: DJI Air 3S, DJI Avata 2 FPV, Insta360 X5
                            </p>
                            <p className="mt-4 rounded-[12px] border border-[#FFD23F]/25 bg-[#111111] px-4 py-3 text-sm text-white/80">
                                Timing: from 24 hours for shoots without editing, up to 7 business days for the Full Package.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-3xl">Format examples</h2>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {formatExampleCards.map((item, index) => (
                            <div key={index} className="overflow-hidden rounded-[16px] border border-[#2a2a2a] bg-[#141414]">
                                <div className="relative aspect-video">
                                    <img src={item.image.src} alt={item.alt} className="h-full w-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PACKAGE COMPARISON TABLE ───────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#080808] py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-3xl">Package comparison</h2>
                    </div>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full min-w-[640px] text-sm text-white/80">
                            <thead>
                                <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-[0.16em] text-white/50">
                                    <th className="py-4 pr-4">Feature</th>
                                    <th className="py-4 px-4">Aerial Shot</th>
                                    <th className="py-4 px-4">FPV Fly-Through</th>
                                    <th className="py-4 px-4 text-[#FFD23F]">Full Shoot</th>
                                    <th className="py-4 pl-4">Full Package</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2a2a2a]">
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Price</td>
                                    <td className="py-3 px-4">250 ₾</td>
                                    <td className="py-3 px-4">350 ₾</td>
                                    <td className="py-3 px-4 font-semibold text-[#FFD23F]">500 ₾</td>
                                    <td className="py-3 pl-4">from 900 ₾</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Aerial 4K video</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Interior FPV pass</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 px-4">✓</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Photos</td>
                                    <td className="py-3 px-4">10+</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">10+</td>
                                    <td className="py-3 pl-4">20+</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Editing</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Social-ready clips</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Google Maps video</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 px-4">—</td>
                                    <td className="py-3 pl-4">✓</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">Time on site</td>
                                    <td className="py-3 px-4">~1.5 h</td>
                                    <td className="py-3 px-4">~1.5 h</td>
                                    <td className="py-3 px-4">~2.5 h</td>
                                    <td className="py-3 pl-4">varies</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium text-white">File delivery</td>
                                    <td className="py-3 px-4">from 24 h</td>
                                    <td className="py-3 px-4">from 24 h</td>
                                    <td className="py-3 px-4">from 24 h</td>
                                    <td className="py-3 pl-4">from 48 h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── PACKAGE HELPER ─────────────────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-14">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl">
                        <h3 className="text-xl font-bold md:text-2xl">How to choose</h3>
                        <div className="mt-6 space-y-3 text-sm leading-relaxed text-white/76">
                            <p>
                                → Only need aerial footage, your team handles the rest —{' '}
                                <strong className="text-white">Aerial Shot, 250 ₾</strong>
                            </p>
                            <p>
                                → Want to show the interior in one smooth pass —{' '}
                                <strong className="text-white">FPV Fly-Through, 350 ₾</strong>
                            </p>
                            <p>
                                → Need both exterior and interior in one visit —{' '}
                                <strong className="text-white">Full Shoot, 500 ₾</strong>
                            </p>
                            <p>
                                → Want edited clips, photos, and Google Maps video —{' '}
                                <strong className="text-white">Full Package, from 900 ₾</strong>
                            </p>
                            <p className="pt-2 text-white/55">Not sure? Message us — we will suggest a format in 5 minutes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Not sure which format fits your venue? Tell us about the place and we will say what is worth shooting.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                            >
                                Discuss Project
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F]"
                            >
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <ProcessNote text="A mid-size restaurant shoot usually takes 1.5–3 hours. We schedule around service so guests and staff stay comfortable." />

            <section id="process" className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">How the work goes</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {processSteps.map((step) => (
                            <article key={step.step} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">{step.step}</p>
                                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Packages and pricing</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Prices are fixed in Georgian lari (₾). No hidden extras. Pick the package that matches your goal — from a base shoot to a full production cycle.
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/55">
                            All photo and video is delivered in 4K, ready to use. Any package can be extended with edits for social, website, and Google Maps, plus music, subtitles, and 360° panoramas.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 xl:grid-cols-4">
                        {pricingCards.map((card) => (
                            <article
                                key={card.title}
                                className={`flex flex-col rounded-[20px] border p-6 ${
                                    card.popular
                                        ? 'border-[#FFD23F]/55 bg-[linear-gradient(180deg,rgba(255,210,63,0.1),rgba(20,20,20,1)_28%)]'
                                        : 'border-[#2a2a2a] bg-[#141414]'
                                }`}
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    <p className="mt-2 text-sm text-white/64">{card.subtitle}</p>
                                </div>
                                <div className="mt-6 flex items-center gap-3">
                                    <p className="text-3xl font-bold text-[#FFD23F]">{card.price}</p>
                                    {card.popular ? (
                                        <span className="rounded-full border border-[#FFD23F]/45 bg-[#FFD23F]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">
                                            Best Value
                                        </span>
                                    ) : null}
                                </div>
                                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/72">
                                    {card.items.map((item) => (
                                        <li key={item}>✓ {item}</li>
                                    ))}
                                </ul>
                                {card.note && <p className="mt-5 text-sm leading-relaxed text-white/58">{card.note}</p>}
                                <a
                                    href="#contact"
                                    className="mt-6 inline-flex items-center justify-center rounded-[10px] border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD23F] hover:text-[#FFD23F]"
                                >
                                    Discuss This Package →
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[16px] border border-[#FFD23F]/30 bg-[#121212] p-6">
                        <h3 className="text-xl font-bold text-white">Add-ons for your shoot</h3>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            {addonPricing.map((item) => (
                                <li key={item} className="rounded-[12px] border border-[#2a2a2a] bg-[#0D0D0D] p-4 text-sm leading-relaxed text-white/72">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-5 rounded-[14px] border border-[#FFD23F]/35 bg-[#131313] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                        <p className="max-w-2xl leading-relaxed text-white/80">
                            Not sure which package fits? Send a few details about the venue and we will tell you what makes sense and what fits the budget.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-[10px] bg-[#D4A017] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
                        >
                            Send Your Brief
                        </a>
                    </div>
                </div>
            </section>

            <FaqSection id="faq" items={faqItems} title="Frequently Asked Questions" />

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Venue types and use cases</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            Each type of venue needs a different shot list and a different business goal.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {nicheCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Task:</span> {card.pain}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Solution:</span> {card.solution}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">
                                    <span className="font-semibold text-white">Deliverables:</span> {card.deliverables}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">How we approach the shoot</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {whyUsCards.map((card) => (
                            <article key={card.title} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Who this is for</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {audienceCards.map((card) => (
                            <article key={card.title} className="rounded-[18px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl rounded-[20px] border border-[#FFD23F]/28 bg-[#111111] p-8">
                        <h2 className="text-3xl font-bold md:text-4xl">Why this matters especially in Tbilisi</h2>
                        <p className="mt-5 leading-relaxed text-white/74">
                            Many Tbilisi restaurants are tucked away: in courtyards, on upper floors, inside old-town lanes, or behind modest doors. That feels atmospheric, but new guests often struggle to read the place quickly.
                        </p>
                        <p className="mt-4 leading-relaxed text-white/74">
                            Drone footage closes that gap. It shows the district, the entrance, and the venue from above, so the space feels clear before the visit.
                        </p>
                        <ul className="mt-6 space-y-2 text-sm leading-relaxed text-white/82">
                            <li>• Views toward Mtatsminda, Narikala, or the river read instantly on aerial footage.</li>
                            <li>• Inner courtyards and balconies in older districts become visible to new guests.</li>
                            <li>• Rooftop concepts in the center and Avlabari gain scale and context.</li>
                            <li>• Riverside terraces are easier to market before the season starts.</li>
                            <li>• Basement restaurants and upper-floor venues get a clear visual route.</li>
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-white/74">
                            We work in Tbilisi, Batumi, and other parts of Georgia by agreement.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SHORT ANSWERS FOR AI SEARCH ────────────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold md:text-3xl">Quick answers</h2>
                    </div>
                    <div className="mt-8 max-w-3xl space-y-5">
                        {shortQA.map((item) => (
                            <div key={item.q}>
                                <p className="font-bold text-white">{item.q}</p>
                                <p className="mt-1 text-sm leading-relaxed text-white/72">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Common visual marketing mistakes for restaurants</h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {nicheMistakes.map((item, index) => (
                            <article key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-5">
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD23F]">Mistake {index + 1}</p>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHERE WE SHOOT — TBILISI DISTRICTS ─────────────────────────────── */}
            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Where we shoot in Tbilisi</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            We cover the entire city. We know the light, architecture, flight restrictions, and best angles in every district.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {[
                            'Old Tbilisi',
                            'Mtatsminda',
                            'Vera',
                            'Saburtalo',
                            'Vake',
                            'Didi Digomi',
                            'Avlabari',
                            'Chugureti',
                            'Marjanishvili',
                            'Orbeliani',
                            'Lisi',
                            'Greater Tbilisi',
                        ].map((district) => (
                            <div key={district} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] px-5 py-4 text-sm text-white/76">
                                {district}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">What you can do right now — for free</h2>
                    </div>

                    <ul className="mt-10 grid gap-5 md:grid-cols-2">
                        {freeImprovements.map((item, index) => (
                            <li key={item} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 text-sm leading-relaxed text-white/76">
                                <span className="mr-2 font-bold text-[#FFD23F]">{index + 1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Pre-shoot checklist</h2>
                    </div>

                    <ul className="mt-10 grid gap-4 md:grid-cols-2">
                        {shootChecklist.map((item) => (
                            <li key={item} className="rounded-[14px] border border-[#2a2a2a] bg-[#141414] p-5 text-sm leading-relaxed text-white/78">
                                □ {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#080808] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Detailed answers to common questions</h2>
                    </div>

                    <div className="mt-10 space-y-5">
                        {seoAnswers.map((item) => (
                            <article key={item.question} className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6">
                                <h3 className="text-lg font-bold text-white">{item.question}</h3>
                                <p className="mt-4 text-sm leading-relaxed text-white/74">{item.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold md:text-4xl">Related services</h2>
                        <p className="mt-4 leading-relaxed text-white/70">
                            If you need more than aerial filming, we can build this shoot into a fuller content package for the venue.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="rounded-[16px] border border-[#2a2a2a] bg-[#141414] p-6 transition-colors hover:border-[#FFD23F]/50"
                            >
                                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/72">{service.text}</p>
                                <p className="mt-4 text-sm font-semibold text-[#FFD23F]">Learn more →</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-[#2a2a2a] bg-[#0D0D0D] py-16">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-white/78">
                            If you made it this far, visual content for the restaurant is clearly on the table. The next step is simple: tell us about the venue and we will suggest a format that fits.
                        </p>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-[#D4A017] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
                        >
                            Discuss Project
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-[#0D0D0D] py-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-5xl rounded-[24px] border border-[#FFD23F]/25 bg-gradient-to-br from-[#151515] via-[#111111] to-[#0c0c0c] p-6 md:p-8 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <div>
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Discuss Your Project</h2>
                                <p className="mt-4 max-w-xl leading-relaxed text-white/72">
                                    Tell us about the venue and we will say what format fits and what budget it needs.
                                </p>

                                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FFD23F]">Message us directly</p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <a
                                            href="https://wa.me/995574619393"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            WhatsApp
                                        </a>
                                        <a
                                            href="https://t.me/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-[#FFD23F]/40 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#FFD23F]"
                                        >
                                            Telegram
                                        </a>
                                        <a
                                            href="https://www.instagram.com/breusmedia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/82 transition-colors hover:border-white/35"
                                        >
                                            @breusmedia
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm leading-relaxed text-white/55">Tbilisi, Georgia</p>
                                </div>
                            </div>

                            <DroneRestaurantsContactForm
                                nameLabel="Name"
                                namePlaceholder="Your name"
                                contactLabel="Phone or messenger"
                                contactPlaceholder="+995 ... or @username"
                                businessLabel="Venue name and short brief"
                                businessPlaceholder="Restaurant in the center, rooftop terrace..."
                                deadlineLabel="Preferred timing (optional)"
                                deadlinePlaceholder="For example: by the end of the month"
                                submitLabel="Send Request"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <DroneStickyCta label="Discuss Project" />
            <MobileBottomBar primaryLabel="Discuss Project" />
            <DroneFooterStitch
                missionText="Professional aerial filming and visual production for business in Georgia. Tbilisi, Batumi, Kutaisi."
                menuTitle="Menu"
                contactLinkLabel="Contact"
                contactTitle="Contact"
            />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </main>
    );
}
