import type { L2DirectionConfig } from '@/components/l2-direction/types';
import { l2DirectionConfigs } from '@/constants/l2DirectionConfigs';

const hotelsBase = l2DirectionConfigs.hotelsService;
const hotelsServices = hotelsBase.data.services;
const hotelsHeroCards = hotelsBase.data.heroCards ?? [];
const realEstateBase = l2DirectionConfigs.realEstateService;
const realEstateServices = realEstateBase.data.services;
const realEstateHeroCards = realEstateBase.data.heroCards ?? [];
const tours360Base = l2DirectionConfigs.tours360Service;
const tours360Services = tours360Base.data.services;
const tours360HeroCards = tours360Base.data.heroCards ?? [];
const reelsBase = l2DirectionConfigs.reelsService;
const reelsServices = reelsBase.data.services;
const reelsHeroCards = reelsBase.data.heroCards ?? [];
const aiVisualizationBase = l2DirectionConfigs.aiVisualizationService;
const aiVisualizationServices = aiVisualizationBase.data.services;
const aiVisualizationHeroCards = aiVisualizationBase.data.heroCards ?? [];
const restaurantsBase = l2DirectionConfigs.restaurantsService;
const restaurantsServices = restaurantsBase.data.services;
const restaurantsHeroCards = restaurantsBase.data.heroCards ?? [];
const tourismBase = l2DirectionConfigs.tourismService;
const tourismServices = tourismBase.data.services;
const tourismHeroCards = tourismBase.data.heroCards ?? [];
const clinicsBase = l2DirectionConfigs.clinicsService;
const clinicsServices = clinicsBase.data.services;
const clinicsHeroCards = clinicsBase.data.heroCards ?? [];
const autoBase = l2DirectionConfigs.autoService;
const autoServices = autoBase.data.services;
const autoHeroCards = autoBase.data.heroCards ?? [];

export const hotelsServiceEnConfig = {
    page: {
        ...hotelsBase.page,
        path: '/hotels-service/en',
        hero: {
            ...hotelsBase.page.hero,
            eyebrow: 'HOSPITALITY CONTENT',
            h1: 'Hotel Content in Tbilisi and Georgia',
            intro:
                'Video, drone filming, 360° tours, Reels and AI-assisted descriptions for hotels, apartments, guest houses and hospitality businesses.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View services',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Hospitality formats',
            badges: ['Hotels', 'Apartments', 'Guest houses', 'Booking', 'Airbnb', 'Hospitality'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...hotelsBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Aerial footage for the facade, territory, views, location and surroundings.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive property viewing before booking, arrival or a sales call.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels',
                description: 'Short vertical videos for social media and ad creatives.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization and AI copy',
                description: 'AI-assisted visuals, descriptions and content preparation for hospitality.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurants',
                description: 'Content for hotel restaurants, breakfast, bars, terraces and room service.',
            },
            {
                href: '/tourism-service/en',
                title: 'Tourism',
                description: 'Content for travel locations, routes, excursions and experiences.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate',
                description: 'Visual packaging for properties, rentals and sales presentations.',
            },
        ],
        seo: {
            ...hotelsBase.page.seo,
            title: 'Hotel Content in Tbilisi and Georgia | Breus Media',
            description:
                'Video, drone filming, 360° tours, Reels and AI-assisted descriptions for hotels, apartments and hospitality businesses in Tbilisi and Georgia.',
            schemaServiceName: 'Hotel Content in Tbilisi and Georgia',
            schemaServiceType: 'Hospitality content production and AI localization',
        },
    },
    data: {
        ...hotelsBase.data,
        heroDisplayTitle: 'Hotel Content in Tbilisi and Georgia',
        heroSubtitle:
            'Video, drone filming, 360° tours, Reels and AI-assisted descriptions for hotels, apartments, guest houses and hospitality businesses.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'Guests choose with their eyes before sending a message, calling or making a reservation. They want to see the room, the view, breakfast, common areas, territory and overall atmosphere to know whether the property fits their trip.',
            'We help package hotel visuals across actual distribution channels: from short Reels to 360° tours and complete content packs for websites, Booking, Airbnb, social media, ads and messengers.',
            'Every format is matched to a clear business task: show rooms, build trust, explain location, update listing cards, launch a seasonal campaign or give the sales team better sales assets.',
        ],
        heroCards: [
            {
                slug: 'hotel-video-tour',
                title: 'Hotel video tour',
                image: hotelsHeroCards[0]?.image ?? hotelsServices[0].image,
                tags: 'room · lobby · territory',
                shortText: 'Shows the room, shared zones, guest route, views and the feel of the property.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'hotel-drone-filming',
                title: 'Hotel drone filming',
                image: hotelsHeroCards[1]?.image ?? hotelsServices[1].image,
                tags: 'drone · view · location',
                shortText: 'Shows the location, facade, territory, view, pool, yard and surroundings from above.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'hotel-360-tour',
                title: '360° tour',
                image: hotelsHeroCards[2]?.image ?? hotelsServices[2].image,
                tags: 'tour · room · before arrival',
                shortText: 'Guests can walk through rooms and hotel areas from their phone before booking.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'hotel-reels',
                title: 'Reels for hotels',
                image: hotelsHeroCards[3]?.image ?? hotelsServices[3].image,
                tags: 'Reels · atmosphere · booking',
                shortText: 'Short vertical videos for Instagram, TikTok, Shorts and ad creatives.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'ai-hotel-descriptions',
                title: 'AI descriptions',
                image: hotelsHeroCards[4]?.image ?? hotelsServices[5].image,
                tags: 'RU · EN · KA',
                shortText: 'Room, service, territory and offer descriptions in RU / EN / KA with editorial polish.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'seasonal-hotel-content',
                title: 'Seasonal content',
                image: hotelsHeroCards[5]?.image ?? hotelsServices[6].image,
                tags: 'season · offer · launch',
                shortText: 'Content for a season, campaign, room launch, offer, refresh or ad push.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Hotels',
            'apartments',
            'guest houses',
            'video tours',
            'drone filming',
            '360° tours',
            'Reels',
            'AI descriptions',
            'Booking',
            'Airbnb',
            'hotel website',
            'breakfast',
            'rooms',
            'views',
            'territory',
            'Tbilisi',
            'Georgia',
        ],
        tickerItems: [
            'Hotels',
            'apartments',
            'guest houses',
            'video tours',
            'drone filming',
            '360° tours',
            'Reels',
            'AI descriptions',
            'Booking',
            'Airbnb',
            'hotel website',
            'breakfast',
            'rooms',
            'views',
            'territory',
            'Tbilisi',
            'Georgia',
        ],
        servicesHeading: 'Hotel content formats',
        servicesSubtitle:
            'Different tasks need different assets: for the website, Booking, social media, ads, messengers, seasonal campaigns and guest trust before booking.',
        services: [
            {
                ...hotelsServices[0],
                slug: 'hotel-video-tour',
                title: 'Hotel video tour',
                category: 'Website · Booking · messengers',
                description:
                    'A guided video through the room, lobby, breakfast, territory and key areas. The guest understands the property before booking.',
                price: 'video tour · route · atmosphere',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...hotelsServices[1],
                slug: 'hotel-drone-filming',
                title: 'Hotel and territory drone filming',
                category: 'Drone · view · location',
                description:
                    'Drone footage shows the location, view, facade, yard, pool, entrance, surroundings and scale of the property.',
                price: 'drone · facade · surroundings',
                primaryHref: '/drone-hotels-tourism/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...hotelsServices[2],
                slug: 'hotel-360-tour',
                title: '360° tour for hotels',
                category: 'Tour · room · before arrival',
                description:
                    'Interactive viewing of rooms, common areas and territory. Useful for websites, offers and messenger conversations.',
                price: '360° · interactive · link',
                primaryHref: '/360-tour-hotels/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...hotelsServices[3],
                slug: 'hotel-reels-shorts',
                title: 'Reels and Shorts for hotels',
                category: 'Instagram · TikTok · Shorts',
                description:
                    'Vertical videos: room, breakfast, view, details, team, seasonal offer and the feeling of staying there.',
                price: 'Reels · atmosphere · social',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...hotelsServices[4],
                slug: 'hotel-listing-pack',
                title: 'Photo and listing pack',
                category: 'Booking · Airbnb · website',
                description:
                    'A practical asset set for room listings, the website, Booking, Airbnb, social media and guest messages.',
                price: 'photos · covers · listing',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...hotelsServices[5],
                slug: 'ai-descriptions-localization',
                title: 'AI descriptions and localization',
                category: 'RU · EN · KA',
                description:
                    'Descriptions of rooms, services, rules, location and advantages in Russian, English and Georgian.',
                price: 'AI · copy · languages',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...hotelsServices[6],
                slug: 'seasonal-hotel-content-pack',
                title: 'Seasonal content pack',
                category: 'Season · offer · launch',
                description:
                    'Assets for summer, winter, holidays, new room launches, special offers or advertising campaigns.',
                price: 'season · offer · campaign',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...hotelsServices[7],
                slug: 'hotel-restaurant-content',
                title: 'Content for a hotel restaurant',
                category: 'Breakfast · bar · room service',
                description:
                    'Food, breakfast, bar, terrace, room service and restaurant atmosphere as part of the hotel offer.',
                price: 'restaurant · breakfast · service',
                secondaryCtaLabel: 'Discuss brief',
            },
        ],
        statsHeading: 'Hotels in numbers',
        statsTagline:
            'These signals show market context. They are not a booking guarantee for any specific property.',
        statsCards: [
            {
                ...hotelsBase.data.statsCards![0],
                label: 'more booking inquiries for hotels with a higher number of photos',
                description:
                    'A reason to refresh room galleries, common areas, territory and listing media.',
            },
            {
                ...hotelsBase.data.statsCards![1],
                label: 'of consumers want to see more video from brands',
                description:
                    'Video, Reels and short tours help show atmosphere, details and the stay scenario.',
            },
            {
                ...hotelsBase.data.statsCards![2],
                label: 'of travelers consider influencer recommendations when booking',
                description:
                    'Social content and vertical video are now part of early trip and property choice.',
            },
            {
                ...hotelsBase.data.statsCards![3],
                label: 'of buyers prefer information in their own language',
                description:
                    'RU / EN / KA descriptions help speak to local, relocation and international guests.',
            },
        ],
        midCta: {
            heading: 'Not sure what your hotel needs first?',
            text:
                'Tell us what kind of property you have: hotel, apartment, guest house, hotel restaurant or travel location. We will suggest where to start: video, drone, 360°, Reels, AI descriptions or a full content pack.',
            buttonText: 'Choose a format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Not just room photos - a package around the guest experience',
            paragraphs: [
                'A hotel sells more than a room. Guests choose a feeling: the view, breakfast, cleanliness, location, route, quietness, interior, service and clear conditions.',
                'That is why hotel content should not only look good. It should answer practical questions before booking: where the property is, what the room looks like, which areas are available, what is included and who the place is right for.',
                'We prepare content for real channels: websites, Booking, Airbnb, Instagram, TikTok, YouTube Shorts, ads, messengers and sales presentations.',
            ],
        },
        painSolutions: {
            heading: 'What hotel content helps solve',
            subtitle:
                'Good content helps guests understand the property faster, reduce doubts and choose a room with fewer extra messages.',
            items: [
                {
                    pain: 'The guest does not know which room to choose',
                    solution:
                        'Video, photos and 360° tours show the layout, view, light, size and room details before booking.',
                },
                {
                    pain: 'Photos do not carry the atmosphere',
                    solution:
                        'Reels and video tours show movement, light, breakfast, people, details and the feeling of staying there.',
                },
                {
                    pain: 'The location feels unclear',
                    solution:
                        'Drone filming explains the district, access, view, surroundings and how the property relates to the city or nature.',
                },
                {
                    pain: 'Guests ask the same questions again and again',
                    solution:
                        'Structured descriptions, FAQ copy and short videos answer common questions about rooms, rules and services in advance.',
                },
                {
                    pain: 'Listings look inconsistent across platforms',
                    solution:
                        'A listing pack brings photos, covers, descriptions and visual style into one clear system.',
                },
                {
                    pain: 'You need content for a season or launch',
                    solution:
                        'A seasonal pack gives you assets for offers, a new room, holidays, ads or a page refresh.',
                },
            ],
        },
        earnLose: {
            heading: 'What the hotel gains',
            earnTitle: 'More clarity for the guest',
            earnItems: [
                'Explains the value of the room, view, territory and service faster.',
                'Gives you assets for the website, Booking, social media, ads and messengers.',
                'Lets guests see the property before arrival without long back-and-forth messages.',
            ],
            loseTitle: 'Fewer unnecessary doubts',
            loseItems: [
                'Fewer mismatched expectations because the guest sees the real space and conditions earlier.',
                'Fewer repeated questions about the room, view, territory and services.',
                'Less scattered content shot on different days with different styles.',
            ],
        },
        deliverables: {
            heading: 'What can be included',
            intro: 'The final set depends on the selected format, property and publishing channels.',
            items: [
                'photos of rooms, common areas, facade and territory',
                'hotel video tour',
                'aerial photos and drone video',
                '360° tour or interactive viewing link',
                'Reels / Shorts / TikTok videos',
                'room, service and territory descriptions in RU / EN / KA',
                'covers and assets for Booking / Airbnb / website',
                'files in a structured cloud folder',
                'recommendations on where each format should be used',
            ],
        },
        whyUs: {
            heading: 'Why hotels work with us',
            subtitle:
                'We think beyond a beautiful shot. We look at how a guest chooses: through photos, video, descriptions, location, atmosphere and clear conditions.',
            items: [
                {
                    title: 'We choose formats around the property',
                    text: 'A small apartment, boutique hotel and larger complex need different assets. We do not sell the same package to everyone.',
                },
                {
                    title: 'We understand hospitality channels',
                    text: 'Websites, Booking, Airbnb, Instagram, TikTok, Shorts and messengers need different formats, covers and copy.',
                },
                {
                    title: 'We show the guest journey',
                    text: 'We film more than walls and a bed: entrance, room, view, breakfast, common areas, details and atmosphere.',
                },
                {
                    title: 'We connect video, drone, 360° and copy',
                    text: 'One package can cover several jobs: trust, location, atmosphere, explanation and sales support.',
                },
                {
                    title: 'We consider languages and local context',
                    text: 'For many guests, RU / EN / KA descriptions, clear rules, location details and practical information influence the decision.',
                },
                {
                    title: 'We work in Tbilisi and across Georgia',
                    text: 'We film city hotels, apartments, guest houses, countryside properties, hotel restaurants and travel locations.',
                },
            ],
        },
        pricingHeading: 'Hotel content packages',
        pricingTagline:
            'The final quote depends on the property, number of rooms and zones, selected formats, languages, season, locations and preparation volume.',
        pricingPlans: [
            {
                ...hotelsBase.data.pricingPlans[0],
                title: 'Hotel Listing Pack',
                price: 'from 350 GEL',
                subtitle: 'A starter package for a room, apartment or small property',
                features: ['room and key-zone photos', 'short video or cover assets', 'website or platform descriptions', 'file delivery'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...hotelsBase.data.pricingPlans[1],
                title: 'Hotel Video Pack',
                price: 'from 500 GEL',
                subtitle: 'For the website, social media, messengers and ads',
                features: ['property video tour', 'Reels / Shorts if needed', 'subtitles or short captions', 'assets for several channels'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...hotelsBase.data.pricingPlans[2],
                title: 'Hotel 360 & Drone Pack',
                price: 'from 650 GEL',
                subtitle: 'For hotels where space, view, territory and location matter',
                features: ['360° tour if needed', 'drone filming of facade, territory and surroundings', 'assets for the website and guest messages', 'file delivery'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...hotelsBase.data.pricingPlans[3],
                title: 'Hospitality Content Pack',
                price: 'from 1200 GEL',
                subtitle: 'A full package for a launch, season or hotel refresh',
                features: ['video, photos, Reels, drone or 360° depending on the task', 'descriptions in RU / EN / KA', 'assets for the website, Booking, social media and ads', 'structured file delivery'],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'What can be added to a package',
            items: [
                'additional rooms, zones, restaurant, terrace or territory',
                'drone filming, 360° tour, Reels or seasonal content versions',
                'description and subtitle localization in RU / EN / KA',
                'separate covers and versions for Booking, Airbnb, the website and ads',
            ],
            note:
                'The final quote depends on the number of zones, formats, languages, season, logistics and property preparation.',
        },
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We clarify the property type, audience, publishing channels, season, tasks and formats: website, Booking, social media, ads or messengers.',
            },
            {
                number: '02',
                title: 'Format selection',
                description:
                    'We decide what is needed now: photos, video, drone, 360° tour, Reels, AI descriptions or a full content pack.',
            },
            {
                number: '03',
                title: 'Property preparation',
                description:
                    'We agree on rooms, zones, timing, light, people in frame, breakfast, facade, territory and details that must be shown.',
            },
            {
                number: '04',
                title: 'Production',
                description:
                    'We film the property and prepare assets for the selected formats. If needed, we add drone, 360° or AI-assisted copy.',
            },
            {
                number: '05',
                title: 'Packaging and delivery',
                description:
                    'We prepare files, descriptions, subtitles and channel-ready formats, then deliver everything in a clear structure.',
            },
        ],
        conditionsNote: {
            title: 'What to prepare before the shoot',
            text:
                'Before production, we lock the zones, publishing channels and working schedule so the content feels consistent and does not interrupt guests.',
            items: [
                'agree on the rooms, common areas, breakfast, restaurant, facade and territory that must be included',
                'prepare the space: remove unnecessary items, check light, textiles, service details and access to key zones',
                'define publishing channels in advance: website, Booking, Airbnb, social media, ads or messengers',
            ],
            details:
                'If the hotel is operating during the shoot, we plan timing and movement so we do not interrupt service or show people without consent.',
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'Which services are useful for a hotel?',
                answer:
                    'Hotels usually need a mix of formats: photos and listing assets for platforms, a video tour for the guest route, drone footage for territory and location, a 360° tour for remote viewing, Reels for social media and AI-assisted descriptions for the website, Booking and Airbnb.',
            },
            {
                question: 'What should we choose: video, photos, drone or a 360° tour?',
                answer:
                    'Photos cover the basic gallery, video shows atmosphere and the guest route, drone explains location and scale, and a 360° tour lets guests study rooms and zones on their own. The right choice depends on the property, channels and task.',
            },
            {
                question: 'Is a 360° tour useful for a hotel?',
                answer:
                    'Yes. A 360° tour is especially useful for rooms, lobbies, restaurants, conference zones and territory when guests need to understand the space from a phone or laptop before arrival.',
            },
            {
                question: 'What should be prepared before production?',
                answer:
                    'We need to agree on the zones, prepare rooms and common spaces, remove unnecessary items, check light, breakfast or service details, and decide which rooms and views are most important to show.',
            },
            {
                question: 'Can you shoot rooms, breakfast and common areas in one visit?',
                answer:
                    'Yes, if the property and schedule allow it. During the brief, we prepare a zone list so the shoot follows a clear route and does not interrupt guests.',
            },
            {
                question: 'Do you create Reels for hotels?',
                answer:
                    'Yes. We film vertical videos about rooms, breakfast, views, details, team, seasonal offers, hotel restaurants and the atmosphere of staying there.',
            },
            {
                question: 'Can you write room descriptions in English and Georgian?',
                answer:
                    'Yes. We prepare descriptions of rooms, services, rules, location and advantages in RU / EN / KA with editorial polish for the audience and channel.',
            },
            {
                question: 'Can we use the materials on Booking and Airbnb?',
                answer:
                    'Yes. Materials can be prepared for the website, Booking, Airbnb, social media, ads, messengers and sales offers. We agree on formats before production.',
            },
            {
                question: 'Does this work for apartments and guest houses?',
                answer:
                    'Yes. For apartments and guest houses, a compact package is often enough: photos, a short video tour, descriptions and a few vertical videos. We can add 360° or drone if needed.',
            },
            {
                question: 'Can you film a hotel restaurant?',
                answer:
                    'Yes. We can film breakfast, dishes, bar, terrace, room service, interior and restaurant atmosphere as part of the hotel package or as a separate format.',
            },
            {
                question: 'Do you make seasonal content packs?',
                answer:
                    'Yes. We prepare assets for a season, special offer, new room launch, holiday package, listing refresh or ad campaign.',
            },
            {
                question: 'How much does hotel content cost?',
                answer:
                    'The final cost depends on the property type, number of rooms and zones, selected formats, languages, locations, season and preparation volume. That is why the packages are shown as custom quotes.',
            },
            {
                question: 'Do you deliver files for self-publishing?',
                answer:
                    'Yes. We deliver files in a clear structure: photos, videos, vertical versions, copy, subtitles, covers and links to interactive materials if they are part of the package.',
            },
            {
                question: 'Do you work across Georgia?',
                answer:
                    'Yes. The main area is Tbilisi, and we also travel across Georgia depending on the property, schedule and scope.',
            },
        ],
        contact: {
            title: 'Need hotel content?',
            description:
                'Tell us what kind of property you have: hotel, apartment, guest house, hotel restaurant or travel location. We will suggest where to start.',
            taskPlaceholder:
                'For example: we need a room video tour, drone footage of the territory, a 360° tour or a content pack for Booking and social media.',
            serviceOptions: [
                'Hotels',
                'Video tour',
                'Drone filming',
                '360° tour',
                'Reels',
                'AI descriptions',
                'Listing pack',
                'Seasonal content',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['hotels'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const realEstateServiceEnConfig = {
    page: {
        ...realEstateBase.page,
        path: '/real-estate-service/en',
        hero: {
            ...realEstateBase.page.hero,
            eyebrow: 'REAL ESTATE CONTENT HUB',
            h1: 'Real Estate Visual Content in Tbilisi and Georgia',
            intro:
                'Photography, video, drone filming, 360° tours, Reels and AI visualization for property sales, rentals, presales, remote buyers and investor presentations.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View services',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Real estate formats',
            badges: ['Realtors', 'Agencies', 'Developers', 'Investors', 'MyHome.ge', 'SS.ge'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...realEstateBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Drone photos and video for properties, districts, land plots, developments and construction sites.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive property tours for remote viewing before an in-person visit.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels',
                description: 'Short vertical videos for properties, agencies and personal realtor brands.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization',
                description: 'AI staging, virtual furnishing and visualization for unfinished or empty spaces.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotels',
                description: 'Visual content for hotel rooms, apartments and hospitality properties.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurants',
                description: 'Content for spaces, menus, atmosphere and local marketing.',
            },
            {
                href: '/tourism-service/en',
                title: 'Tourism',
                description: 'Video, drone and short-form formats for routes and travel offers.',
            },
        ],
        seo: {
            ...realEstateBase.page.seo,
            title: 'Real Estate Visual Content in Tbilisi | Breus Media',
            description:
                'Photography, video, drone filming, 360° tours, Reels and AI visualization for real estate in Tbilisi and Georgia. Property content for sales, rentals and presales.',
            schemaServiceName: 'Real Estate Visual Content',
            schemaServiceType: 'Real estate visual content and marketing',
        },
    },
    data: {
        ...realEstateBase.data,
        heroDisplayTitle: 'Real estate\nvisual content\nin Tbilisi\nand Georgia',
        heroDesktopDisplayTitle: 'Real estate visual content\nin Tbilisi and Georgia',
        heroSubtitle:
            'Photography, video, drone filming, 360° tours, Reels and AI visualization for property sales, rentals, presales, remote buyers and investor presentations.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'Real estate is not sold by price alone. A buyer needs to understand the layout, district, scale, condition and lifestyle scenario before the first call or showing.',
            'We help choose the right format for the task: sometimes a strong listing pack is enough, sometimes the property needs a 360° tour, drone footage, Reels, AI staging or a full development promo.',
            'We work with realtors, agencies, developers and owners in Tbilisi and across Georgia. Location, language and publishing channel are considered before production starts.',
        ],
        heroCards: [
            {
                slug: 'real-estate-drone-filming',
                title: 'Real estate drone filming',
                image: realEstateHeroCards[0]?.image ?? realEstateServices[0].image,
                tags: 'drone · district · scale',
                shortText: 'Shows the property, district, yard, access, views and scale from above.',
                primaryCta: { label: 'Explore service', href: '/drone-services/drone-real-estate/en' },
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'real-estate-360-tour',
                title: '360° tour',
                image: realEstateHeroCards[1]?.image ?? realEstateServices[1].image,
                tags: 'tour · layout · remote viewing',
                shortText: 'A buyer can walk through the property from a phone before visiting and understand the layout better.',
                primaryCta: { label: 'Explore service', href: '/360-tour-real-estate/en' },
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'reels-for-realtors',
                title: 'Reels for realtors',
                image: realEstateHeroCards[2]?.image ?? realEstateServices[2].image,
                tags: 'Reels · agent · leads',
                shortText: 'Short vertical videos for properties, agencies and the personal brand of a real estate expert.',
                primaryCta: { label: 'Explore service', href: '/reels-promo/reels-realtor/en' },
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'ai-staging',
                title: 'AI staging',
                image: realEstateHeroCards[3]?.image ?? realEstateServices[3].image,
                tags: 'AI · staging · interior',
                shortText: 'Virtual furnishing and visualization of the potential of an empty apartment or future property.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'development-promo',
                title: 'Development promo',
                image: realEstateHeroCards[4]?.image ?? realEstateServices[5].image,
                tags: 'development · presale · presentation',
                shortText: 'Video and visual packaging for a residential complex, website, sales department and investors.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'construction-monitoring',
                title: 'Construction monitoring',
                image: realEstateHeroCards[5]?.image ?? realEstateServices[7].image,
                tags: 'construction · report · investor',
                shortText: 'Regular construction flyovers for reports, investors and project marketing.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Real estate',
            'drone filming',
            '360° tours',
            'Reels',
            'AI staging',
            'Listing Pack',
            'development promo',
            'video tour',
            'construction monitoring',
            'MyHome.ge',
            'SS.ge',
            'investors',
            'rentals',
            'presale',
            'Tbilisi',
            'Georgia',
        ],
        tickerItems: [
            'Real estate',
            'drone filming',
            '360° tours',
            'Reels',
            'AI staging',
            'Listing Pack',
            'development promo',
            'video tour',
            'construction monitoring',
            'MyHome.ge',
            'SS.ge',
            'investors',
            'rentals',
            'presale',
            'Tbilisi',
            'Georgia',
        ],
        servicesHeading: 'Eight formats for real estate properties',
        servicesSubtitle:
            'Not one universal product, but a set of formats for different jobs: listing, presale, remote viewing, personal brand, advertising and reporting.',
        services: [
            {
                ...realEstateServices[0],
                slug: 'real-estate-drone-filming',
                title: 'Real estate drone filming',
                category: 'Drone · district · scale',
                description:
                    'Drone photos and video of the property, facade, yard, district, access and views. Useful for houses, land plots, developments and properties where scale matters.',
                price: 'drone · district · scale',
                primaryHref: '/drone-services/drone-real-estate/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[1],
                slug: 'real-estate-360-tour',
                title: '360° tour for real estate',
                category: 'Tour · layout · remote viewing',
                description:
                    'An interactive walkthrough of an apartment, house or commercial space. A remote buyer can study the layout before a visit.',
                price: 'tour · layout · remote viewing',
                primaryHref: '/360-tour-real-estate/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[2],
                slug: 'reels-for-realtors',
                title: 'Reels for realtors and agencies',
                category: 'Instagram · TikTok · Shorts',
                description:
                    'Vertical videos for Instagram, TikTok and Shorts: properties, advice, districts, personal brand and inbound leads.',
                price: 'Reels · agent · social',
                primaryHref: '/reels-promo/reels-realtor/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[3],
                slug: 'ai-visualization-staging',
                title: 'AI visualization and AI staging',
                category: 'AI · staging · interior',
                description:
                    'Virtual furnishing, future interior and exterior visualization, and showing the potential of an empty space.',
                price: 'AI · staging · interior',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[4],
                slug: 'listing-pack',
                title: 'Listing Pack',
                category: 'Listing · cover · copy',
                description:
                    'A starter package for a property listing: photos, short video, cover, copy and assets for listing platforms.',
                price: 'listing · platform · first contact',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[5],
                slug: 'development-promo',
                title: 'Development promo',
                category: 'Development · presale · presentation',
                description:
                    'Presentation video for a development: architecture, yard, infrastructure, views, district and project atmosphere.',
                price: 'development · presale · investors',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[6],
                slug: 'property-video-tour',
                title: 'Property video tour',
                category: 'Walkthrough · route · viewing',
                description:
                    'A clear walkthrough of an apartment, house or commercial space with a logical viewing route.',
                price: 'video tour · layout · messenger',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...realEstateServices[7],
                slug: 'construction-monitoring',
                title: 'Construction monitoring',
                category: 'Construction · report · investor',
                description:
                    'Regular construction flyovers from fixed points for visual reports, marketing and investors.',
                price: 'construction · progress · report',
                secondaryCtaLabel: 'Discuss project',
            },
        ],
        statsHeading: 'Real estate in numbers',
        statsTagline:
            'These figures show market context. They are not a performance guarantee for any specific property.',
        statsCards: [
            {
                ...realEstateBase.data.statsCards![0],
                label: 'of realtors use drone photos and video',
                description:
                    'Aerial filming has become one of the visible tools in real estate visual marketing.',
            },
            {
                ...realEstateBase.data.statsCards![1],
                label: 'more likely to sell when homes use aerial imagery',
                description:
                    'MLS data cited by NAR is often used as an argument for drone content in listings.',
            },
            {
                ...realEstateBase.data.statsCards![2],
                label: 'of agents say staging reduces time on market',
                description:
                    'Context for AI staging and visual preparation of empty properties.',
            },
            {
                ...realEstateBase.data.statsCards![3],
                label: 'of buyers prefer information in their own language',
                description:
                    'Context for RU / EN / KA listing descriptions and materials for international audiences.',
            },
        ],
        midCta: {
            heading: 'Not sure which format the property needs?',
            text:
                'Tell us what you are selling or renting: apartment, house, land plot, development, commercial space or construction site. We will suggest a format for the channel, audience and budget.',
            buttonText: 'Choose a format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Not just property shooting - packaging for the channel and audience',
            paragraphs: [
                'The same property needs to be shown differently. For MyHome.ge, the cover and listing clarity matter. For an international buyer, a video tour and 360° tour matter. For a new development, drone footage, AI visualization and a presentation video can matter more.',
                'We do not sell the same format to every property. Sometimes a Listing Pack is enough. Sometimes the property needs drone filming, Reels and a 360° tour. Sometimes it is better to start with AI staging and copy.',
                'The goal is to help choose the right format for the property, channel and audience: owner, realtor, agency, developer, investor or tenant.',
            ],
        },
        painSolutions: {
            heading: 'What visual content solves in real estate',
            subtitle:
                'Good packaging does not sell the property by itself, but it helps explain value faster, filter unqualified interest and show the object with fewer words.',
            items: [
                {
                    pain: 'The property gets lost among similar listings',
                    solution:
                        'Listing Pack, a strong cover, photos, video and copy help the listing feel clearer in platform results.',
                },
                {
                    pain: 'The buyer cannot understand the layout from photos',
                    solution:
                        'A 360° tour or video tour shows room connections, route and the feeling of the space before a physical showing.',
                },
                {
                    pain: 'A remote buyer cannot arrive quickly',
                    solution:
                        'Video tour, 360° and materials in the right language help someone make the first decision from another city or country.',
                },
                {
                    pain: 'The project is not finished, but sales need to start',
                    solution:
                        'Drone footage, AI visualization and a presentation video help show the future property, district and project potential.',
                },
                {
                    pain: 'An empty apartment looks cold',
                    solution:
                        'AI staging shows how the space can look with furniture, light and a clear lifestyle scenario.',
                },
                {
                    pain: 'The realtor depends only on listing platforms',
                    solution:
                        'Reels and personal brand content create attention beyond paid placement on platforms.',
                },
                {
                    pain: 'The developer needs sales department materials',
                    solution:
                        'Development promo, drone footage, AI visualization and cutdowns create a sales toolkit for meetings, presentations, website and ads.',
                },
                {
                    pain: 'The agent repeats the same explanations',
                    solution:
                        'One link to a video tour, 360° tour or presentation answers basic questions before a call or showing.',
                },
            ],
        },
        earnLose: {
            heading: 'What the property gains',
            earnTitle: 'More opportunities',
            earnItems: [
                'Shows the property potential earlier, even if it is still under construction or needs renovation.',
                'Opens the property to remote buyers and investors.',
                'Creates assets for ads, presentations, social media and listing platforms.',
            ],
            loseTitle: 'Fewer losses',
            loseItems: [
                'Fewer unqualified showings because some people self-filter before visiting.',
                'Less time explaining the layout, district and property condition.',
                'Less pressure to discount because the property is poorly packaged.',
            ],
        },
        deliverables: {
            heading: 'What can be included',
            intro: 'The final set depends on the selected format and property task.',
            items: [
                'interior, facade and surroundings photos',
                'aerial photos and drone video',
                'horizontal video for the website and presentation',
                'vertical videos for Reels / Shorts / TikTok',
                '360° tour or interactive viewing link',
                'AI staging / Before-After',
                'listing copy in RU / EN / KA',
                'subtitles and text overlays',
                'files in a structured cloud folder',
                'recommendations on where each format should be used',
            ],
        },
        whyUs: {
            heading: 'Why real estate teams work with us',
            subtitle:
                'We think beyond a beautiful shot. We look at where the material will work: listing platform, ads, presentation, messenger or sales department.',
            items: [
                {
                    title: 'We choose the format around the property',
                    text: 'Not every property needs a full package. Sometimes photos and copy are enough. Sometimes drone, 360° and Reels are needed.',
                },
                {
                    title: 'We understand local channels',
                    text: 'We consider MyHome.ge, SS.ge, social media, messengers, presentations and different types of buyers in Georgia.',
                },
                {
                    title: 'We connect several formats',
                    text: 'We can combine photos, drone, 360°, Reels, AI staging and copy into one clear package.',
                },
                {
                    title: 'We work for remote buyers',
                    text: 'Materials are prepared so the property can be shown before a visit and without long explanations.',
                },
                {
                    title: 'We prepare sales assets, not just an archive',
                    text: 'Files, copy and formats are structured for real channels: listing platform, website, ads, presentation, WhatsApp and Telegram.',
                },
                {
                    title: 'We work in Tbilisi and across Georgia',
                    text: 'We film city properties, countryside houses, land plots, developments, commercial spaces and construction sites.',
                },
            ],
        },
        pricingHeading: 'Real estate packages',
        pricingTagline:
            'The final quote depends on the property, area, location, formats and task: listing, advertising, presale, report or personal brand. It also depends on languages, drone, 360°, Reels, AI visualization and shooting frequency.',
        pricingPlans: [
            {
                ...realEstateBase.data.pricingPlans[0],
                title: 'Listing Pack',
                price: 'from 250 GEL',
                subtitle: 'A starter package for a listing and first contact',
                features: ['property photos', 'short video or cover asset', 'listing copy', 'assets prepared for listing platforms', 'file delivery'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...realEstateBase.data.pricingPlans[1],
                title: 'Remote Buyer Pack',
                price: 'from 450 GEL',
                subtitle: 'For a remote buyer, tenant or investor',
                features: ['video tour', '360° tour if needed', 'subtitles or written guidance', 'materials for messenger sharing', 'file delivery'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...realEstateBase.data.pricingPlans[2],
                title: 'Developer Pack',
                price: 'from 850 GEL',
                subtitle: 'For developments, presale, investors and sales teams',
                features: ['drone filming of the property and district', 'promo video', 'AI visualization if needed', 'social media cutdowns', 'presentation materials'],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...realEstateBase.data.pricingPlans[3],
                title: 'Monitoring Pack',
                price: 'from 350 GEL',
                subtitle: 'For visual construction control and regular reports',
                features: ['regular flyovers', 'photos and video from fixed points', 'report materials', 'visual project progress'],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'What can be added to a package',
            items: [
                'additional properties, rooms, facade, yard, district or commercial zones',
                'drone filming, 360° tour, Reels series, AI staging or regular monitoring',
                'descriptions, subtitles and material versions in RU / EN / KA',
                'adaptations for MyHome.ge, SS.ge, website, presentation, ads and messengers',
            ],
            note:
                'The final quote depends on property type, area, access, formats, languages, shooting frequency and visualization needs.',
        },
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We clarify the property, task, publishing channel, audience and format: sale, rental, presale, report or personal brand.',
            },
            {
                number: '02',
                title: 'Format selection',
                description:
                    'We choose what is needed now: photos, video, drone, 360° tour, Reels, AI staging, development promo or monitoring.',
            },
            {
                number: '03',
                title: 'Property preparation',
                description:
                    'We agree on access, location, timing, preparation checklist, people in frame, key zones and viewing scenario.',
            },
            {
                number: '04',
                title: 'Production',
                description:
                    'We film the property, prepare visuals, create AI visualization or build a 360° tour depending on the selected package.',
            },
            {
                number: '05',
                title: 'Packaging and delivery',
                description:
                    'We prepare files, copy, subtitles and channel-ready formats, then deliver materials in a clear structure.',
            },
        ],
        conditionsNote: {
            title: 'What to prepare before production',
            text:
                'For real estate, we separate real materials, visualization and publishing channels in advance so the property presentation stays clear and honest.',
            items: [
                'prepare the property: order, light, open curtains, access to key zones, facade, yard or view',
                'agree on listing facts: area, district, terms, features, limitations and publication language',
                'decide in advance what materials are needed: listing, website, investor presentation, Reels, 360° tour or construction monitoring',
            ],
            details:
                'If AI staging or visualization is used, it is important to separate the actual property state from the concept and avoid misleading the buyer.',
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'Which services are useful for selling an apartment?',
                answer:
                    'Most properties start with a Listing Pack: photos, cover, short video and listing copy. For remote buyers, we add a video tour or 360° tour. For an empty property, AI staging can help show potential.',
            },
            {
                question: 'What should we choose: photos, video, drone or a 360° tour?',
                answer:
                    'It depends on the property and channel. Photos and copy cover the basic listing, a video tour shows the route, a 360° tour helps remote viewing, and drone footage is useful when the district, yard, views, land plot or development scale matter.',
            },
            {
                question: 'Does this work for remote buyers?',
                answer:
                    'Yes. For remote buyers, video tours, 360° tours, clear photos, subtitles and descriptions in the right language help them make the first decision before visiting.',
            },
            {
                question: 'What should be prepared before a property shoot?',
                answer:
                    'We need property access, visual order, open curtains, lights on, agreed zones and basic listing information: area, district, features, sale or rental terms.',
            },
            {
                question: 'Do you write listing copy?',
                answer:
                    'Yes. We can prepare listing copy for a platform, website, presentation or messenger message. Technical property details are agreed before publication.',
            },
            {
                question: 'Can materials be prepared in Russian, English and Georgian?',
                answer:
                    'Yes. We prepare descriptions, subtitles and short captions in RU / EN / KA. This is useful for international buyers, investors and properties shown remotely.',
            },
            {
                question: 'Is AI staging useful for an empty apartment?',
                answer:
                    'Yes. AI staging helps show a possible lifestyle scenario in an empty space: furniture, light, zoning and mood. In publication, visualization should not be presented as real furnishing.',
            },
            {
                question: 'Can you film a development under construction?',
                answer:
                    'Yes. For developments under construction, teams usually use drone footage, promo video, AI visualization, social cutdowns and sales department materials.',
            },
            {
                question: 'Do you offer regular construction monitoring?',
                answer:
                    'Yes. Construction monitoring means regular photos and video from fixed points for visual project progress, reports, investors and marketing. It is a visual report, not an engineering conclusion.',
            },
            {
                question: 'Can we order only Reels for a realtor?',
                answer:
                    'Yes. You can order only vertical videos for a property, agency or personal realtor brand. For a dedicated format, the detailed service page is /reels-real-estate.',
            },
            {
                question: 'Do you work with agencies and developers?',
                answer:
                    'Yes. We work with realtors, agencies, developers, sales departments, investors and owners. The format is selected around the task, property and publishing channel.',
            },
            {
                question: 'How much does property packaging cost?',
                answer:
                    'The final cost depends on property type, area, location, number of formats, languages, drone, 360° tour, Reels, AI visualization and shooting frequency. That is why the packages are shown as custom quotes.',
            },
            {
                question: 'Do you deliver files for self-publishing?',
                answer:
                    'Yes. We deliver ready files in a clear structure: photos, videos, vertical versions, copy, subtitles and links to interactive materials if they are part of the package.',
            },
            {
                question: 'Do you work across Georgia?',
                answer:
                    'Yes. The main area is Tbilisi, and we also travel across Georgia depending on the property, schedule and scope.',
            },
        ],
        contact: {
            title: 'Need to package a real estate property?',
            description:
                'Tell us what you have: apartment, house, land plot, development, commercial space or construction site. We will suggest which format to start with.',
            taskPlaceholder:
                'For example: an apartment for sale needs a listing and video tour; or a presale development needs drone footage, AI staging and a promo video.',
            serviceOptions: [
                'Real estate',
                'Drone',
                '360°',
                'Reels',
                'AI',
                'Listing',
                'Development promo',
                'Construction',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['real-estate'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const tours360ServiceEnConfig = {
    page: {
        ...tours360Base.page,
        path: '/360-tours-service/en',
        hero: {
            ...tours360Base.page.hero,
            eyebrow: '360° TOURS SERVICE',
            h1: '360° Virtual Tours for Business in Tbilisi and Georgia',
            intro:
                'Interactive 360° tours for hotels, restaurants, clinics, showrooms, offices and real estate. Let clients explore the space before a visit, booking or sales call.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'Pricing',
            secondaryCtaHref: '#pricing',
        },
        trust: {
            heading: '360° tours for spaces',
            badges: ['Real estate', 'Hotels', 'Restaurants', 'Clinics', 'Showrooms', 'Offices'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...tours360Base.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/360-tour-real-estate/en',
                title: '360° tour for real estate',
                description: 'Apartments, houses and developments where remote buyers need to understand layout before a visit.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate content',
                description: 'Visual content packages for property listings, sales, rentals and remote buyers.',
            },
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Aerial footage of the property, territory and surroundings that works well with a 360° tour.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels and short videos',
                description: 'Short vertical videos that support a tour and help move viewers toward an inquiry.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotel content',
                description: 'Video, drone, 360° and content packs for hotels, apartments and hospitality businesses.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurant content',
                description: 'Visual content for restaurants, dining spaces and atmosphere.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization',
                description: 'AI staging and virtual staging for properties.',
            },
        ],
        seo: {
            ...tours360Base.page.seo,
            title: '360° Virtual Tours in Tbilisi and Georgia | Breus Media',
            description:
                'Interactive 360° virtual tours in Tbilisi and Georgia for hotels, restaurants, clinics, showrooms, offices and real estate. From 200 GEL.',
            schemaServiceName: '360° Virtual Tours',
            schemaServiceType: '360-degree virtual tours',
        },
    },
    data: {
        ...tours360Base.data,
        heroDisplayTitle: '360° virtual tours\nfor business\nin Georgia',
        heroDisplayAccentLine: 'in Georgia',
        heroSubtitle:
            'A 360° tour is an interactive viewing link. A client can move through rooms, zones or a route before a visit.',
        heroSupportingLine: '',
        heroCards: [
            {
                slug: 'real-estate',
                title: 'Real estate',
                image: tours360HeroCards[0]?.image ?? tours360Services[0].image,
                tags: 'apartments · houses · commercial spaces',
                shortText:
                    'Apartments, houses, rental units and commercial spaces. A buyer or tenant can study layout, area and condition before a visit.',
                primaryCta: { label: 'Explore service', href: '/360-tour-real-estate/en' },
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'hotels-apartments',
                title: 'Hotels and apartments',
                image: tours360HeroCards[1]?.image ?? tours360Services[1].image,
                tags: 'rooms · common areas · territory',
                shortText:
                    'Guests can see rooms, common areas and infrastructure before booking. Useful for websites, listings and messenger replies.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'restaurants-cafes',
                title: 'Restaurants and cafes',
                image: tours360HeroCards[2]?.image ?? tours360Services[2].image,
                tags: 'hall · seating · terrace',
                shortText:
                    'Guests can understand the dining room, seating and terrace before a reservation, banquet or private event.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'clinics-medical',
                title: 'Clinics and medical centers',
                image: tours360HeroCards[3]?.image ?? tours360Services[3].image,
                tags: 'reception · rooms · common areas',
                shortText:
                    'Patients can see the reception, treatment rooms and shared zones before the first appointment.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'showrooms-auto',
                title: 'Auto showrooms and retail',
                image: tours360HeroCards[4]?.image ?? tours360Services[4].image,
                tags: 'display · showroom · space',
                shortText:
                    'Clients can explore the showroom, product display and space before arrival. Useful for dealers, furniture, fashion and tech showrooms.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'offices-coworking',
                title: 'Offices and coworking spaces',
                image: tours360HeroCards[5]?.image ?? tours360Services[5].image,
                tags: 'meeting rooms · work zones · layout',
                shortText:
                    'A tenant can understand layout, workplaces and meeting rooms remotely. The tour works as an interactive layer for a commercial offer.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
        ],
        heroLeadParagraphs: [
            'The format is useful for real estate, hotels, restaurants, clinics, showrooms and offices.',
            'A tour opens in the browser, works by link and helps show a real space before a call, viewing or booking.',
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#pricing',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            '360° tours',
            'real estate',
            'hotels',
            'restaurants',
            'clinics',
            'showrooms',
            'offices',
            'interactive link',
            'remote viewing',
            'website embed',
            'Google Maps',
            'Tbilisi',
            'Georgia',
        ],
        tickerItems: [
            '360° tours',
            'real estate',
            'hotels',
            'restaurants',
            'clinics',
            'showrooms',
            'offices',
            'interactive link',
            'remote viewing',
            'website embed',
            'Google Maps',
            'Tbilisi',
            'Georgia',
        ],
        whatIsTour: {
            heading: 'What is a 360° tour',
            paragraphs: [
                'A 360° tour is an online viewing experience where the visitor chooses the path: enters rooms, zones or specific camera points.',
                'Unlike video, a tour does not force a pre-set story. The viewer stops, looks around, checks details and returns to key areas independently.',
                'The tour opens by link, runs smoothly in the browser, and can be embedded into a website or sent in a messenger conversation.',
            ],
        },
        statsHeading: '360° tours in numbers',
        statsCards: [
            {
                value: 'Before a visit',
                label: 'A property can be explored before a call, viewing or reservation.',
                description: 'A property can be explored before a call, viewing or reservation.',
                sourceLabel: 'Customer path',
            },
            {
                value: '1 link',
                label: 'The tour is easy to send in a messenger, email or commercial offer.',
                description: 'The tour is easy to send in a messenger, email or commercial offer.',
                sourceLabel: 'Delivery format',
            },
            {
                value: 'On the website',
                label: 'Interactive viewing can be embedded into a property or service page.',
                description: 'Interactive viewing can be embedded into a property or service page.',
                sourceLabel: 'Website embed',
            },
            {
                value: 'From a phone',
                label: 'The tour opens in a browser without installing an app.',
                description: 'The tour opens in a browser without installing an app.',
                sourceLabel: 'Mobile access',
            },
        ],
        servicesHeading: 'Who a 360° tour is for',
        servicesSubtitle:
            'Six directions where a 360° tour solves a clear business task: explain the space before a visit, call or booking.',
        services: [
            {
                ...tours360Services[0],
                slug: 'real-estate',
                title: 'Real estate',
                category: 'Apartments · Houses · Commercial spaces',
                description:
                    'Apartments, houses, rental units and commercial spaces. A buyer or tenant can understand layout, area and condition before a visit.',
                price: 'layout · area · condition',
                primaryHref: '/360-tour-real-estate/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...tours360Services[1],
                slug: 'hotels-apartments',
                title: 'Hotels and apartments',
                category: 'Rooms · Common areas · Infrastructure',
                description:
                    'Guests can see the room, common zones and infrastructure in advance. The tour works on the website, in booking listings and in messenger replies.',
                price: 'website · booking · messengers',
                primaryHref: '/360-tour-hotels/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tours360Services[2],
                slug: 'restaurants-cafes',
                title: 'Restaurants and cafes',
                category: 'Dining room · Seating · Terrace',
                description:
                    'Guests can understand the dining room, seating and terrace before a reservation. Useful when choosing a zone for a banquet, birthday or private event.',
                price: 'reservation · banquet · seating',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...tours360Services[3],
                slug: 'clinics-medical',
                title: 'Clinics and medical centers',
                category: 'Reception · Treatment rooms · Common areas',
                description:
                    'Patients can get familiar with the clinic before the appointment: reception, treatment rooms and common areas.',
                price: 'trust · first visit · navigation',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...tours360Services[4],
                slug: 'showrooms-auto',
                title: 'Auto showrooms and retail showrooms',
                category: 'Display · Showroom · Demonstration',
                description:
                    'Clients can inspect the showroom and product display before arrival. Useful for dealers, furniture stores, fashion showrooms and tech retail.',
                price: 'before visit · display · space',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...tours360Services[5],
                slug: 'offices-coworking',
                title: 'Offices, coworking and business spaces',
                category: 'Layout · Workplaces · Meeting rooms',
                description:
                    'A tenant can assess layout, workplaces and meeting rooms remotely. The tour works as an interactive plan inside a commercial offer.',
                price: 'commercial offer · remote viewing',
                secondaryCtaLabel: 'Discuss brief',
            },
        ],
        painSolutions: {
            heading: 'What a 360° tour helps solve',
            subtitle:
                'The tour makes the space clearer before a client spends time on a call, visit, booking or detailed discussion.',
            items: [
                {
                    pain: 'The client cannot understand the space from photos',
                    solution:
                        'The tour shows the layout and how zones connect. The person moves through the route themselves, so the room logic becomes clearer.',
                },
                {
                    pain: 'Too many unqualified visits',
                    solution:
                        'Some people self-filter before the call because they can see that the space does not fit. Physical visits become more prepared.',
                },
                {
                    pain: 'A remote client asks for more photos and angles',
                    solution:
                        'You can answer with one tour link. The conversation can move to terms instead of extra requests for another angle.',
                },
                {
                    pain: 'The website does not show scale and atmosphere',
                    solution:
                        'The tour can be embedded on the object page. Visitors see the real space, not only cover photos.',
                },
                {
                    pain: 'It is hard to explain the route and zones in chat',
                    solution:
                        'Instead of a long description and many photos, you send one link. The client opens the points they need.',
                },
                {
                    pain: 'The object is complex',
                    solution:
                        'A multi-floor or multi-zone space becomes easier to understand through connected points, labels and a logical route.',
                },
            ],
        },
        midCta: {
            text:
                'Do not see your exact format? Tell us about the space and we will suggest the right package and estimate the scope.',
            buttonText: 'Discuss the project',
            buttonHref: '#contact',
        },
        pricingHeading: '360° tour packages',
        pricingTagline:
            'Final cost depends on the space, number of points, route logic, labels, website embedding and delivery format.',
        pricingPlans: [
            {
                ...tours360Base.data.pricingPlans[0],
                title: 'Start',
                price: 'from 200 GEL',
                subtitle: 'For one apartment, studio or short-term rental unit',
                features: [
                    'up to 6 shooting points: 2-3 rooms, kitchen, bathroom and hallway',
                    'tour link and iframe embed code',
                    'panorama for a Google Maps listing',
                    'delivery from 48 hours',
                ],
                note: 'A good way to test the format on one object and see how a tour works in practice.',
                buttonText: 'Discuss This Tier →',
            },
            {
                ...tours360Base.data.pricingPlans[1],
                title: 'Standard',
                price: 'from 450 GEL',
                subtitle: 'For a larger apartment, house, commercial space or typical development layout',
                features: [
                    'up to 15 shooting points: all rooms, window views, entrance and yard',
                    'tour link and iframe embed code',
                    'hotspots with room names and area notes',
                    'panorama for Google Maps',
                    'delivery from 72 hours',
                ],
                note: 'The most common choice for agencies, investment sales and residential developers.',
                buttonText: 'Discuss This Tier →',
                featured: true,
                popular: true,
                tag: 'Popular',
            },
            {
                ...tours360Base.data.pricingPlans[2],
                title: 'Full Property',
                price: 'from 900 GEL',
                subtitle: 'For a multi-level house, villa, development, office complex or large commercial object',
                features: [
                    '20+ points: floors, layouts, common areas, yard and surrounding territory',
                    'tour link, iframe embed and several routes by floor or unit type',
                    'hotspots with descriptions and a booking or inquiry button',
                    'panorama for Google Maps',
                    'delivery from 5 business days',
                ],
                note: 'Suitable for developers, premium houses, commercial properties and B2B presentations.',
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'Optional add-ons',
            items: [
                'tour update after renovation, furniture changes or a new development stage: from 150 GEL',
                'hotspot with a "book a viewing" or inquiry button: +80 GEL',
                'room descriptions in RU / EN / KA: +100 GEL',
            ],
            note:
                'Add-ons are selected after we understand where the tour will be used and how much detail the viewer needs.',
        },
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We discuss the space, task and where the tour will be used: website, property listing, messenger, presentation or commercial offer.',
            },
            {
                number: '02',
                title: 'Point plan and route',
                description:
                    'We agree on the zones and transition logic. If the space is operating or people live there, we choose a convenient shooting window.',
            },
            {
                number: '03',
                title: 'On-site shooting',
                description:
                    'We shoot in one visit whenever possible. We work carefully and do not interrupt the life of the space more than needed.',
            },
            {
                number: '04',
                title: 'Tour assembly',
                description:
                    'We assemble panoramas into one route with transitions and labels, then adapt the viewing experience for mobile.',
            },
            {
                number: '05',
                title: 'Delivery and publishing',
                description:
                    'We deliver the link and website embed code. If needed, we help publish the tour where it should live.',
            },
        ],
        conditionsNote: {
            title: 'What to prepare before a 360° tour shoot',
            text:
                'A 360° tour shows the space in more detail than regular photos, so route, order and viewing limits should be agreed in advance.',
            items: [
                'agree on zones, shooting points, route transitions, labels and areas that should not be shown',
                'prepare the space: order, light, open passageways and no unnecessary items or people without consent',
                'decide where the tour will be used: website, object listing, presentation, messenger or commercial offer',
            ],
            details:
                'Everything left inside the viewing zone will be visible to the user, so preparation matters more than in a standard photo shoot.',
        },
        whyUs: {
            heading: 'Why teams work with us',
            items: [
                {
                    title: 'We build the tour around the task',
                    text: 'Before shooting, we understand where the tour will live and why it is needed. A hotel website tour and an office presentation tour need different routes and density.',
                },
                {
                    title: 'We think about the channel',
                    text: 'A website page, property listing, presentation and messenger conversation each need a slightly different tour structure.',
                },
                {
                    title: 'The route is clear for the viewer',
                    text: 'Transitions, labels and route logic are organized so the person does not get lost in the space.',
                },
                {
                    title: 'We check mobile viewing',
                    text: 'Most people open links from a phone, so transitions and labels must work on a small screen.',
                },
                {
                    title: 'We connect 360° with other content',
                    text: 'A tour can work together with drone filming, Reels and AI visualization for hotels, developments, showrooms and tourist locations.',
                },
                {
                    title: 'We work in Tbilisi and across Georgia',
                    text: 'We shoot in Tbilisi and travel across Georgia depending on the object. The team works in Russian, English and Georgian.',
                },
            ],
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'What is a 360° tour?',
                answer:
                    'A 360° tour is an interactive online viewing experience. A person moves between shooting points, chooses where to look and studies the space at their own pace.',
            },
            {
                question: 'How is a 360° tour different from regular video?',
                answer:
                    'In a video, the route is chosen by the operator. In a 360° tour, the user chooses the route, stops, looks around and returns to zones they care about.',
            },
            {
                question: 'How much does a 360° tour cost?',
                answer:
                    'Base packages start from 200 GEL for Start, 450 GEL for Standard and 900 GEL for Full Property. The final quote depends on area, number of points and assembly complexity.',
            },
            {
                question: 'Where can a 360° tour be used?',
                answer:
                    'The tour can be sent by link in a messenger, email or commercial offer. It can also be embedded on a website with standard embed code.',
            },
            {
                question: 'Can people view the tour from a phone?',
                answer:
                    'Yes. The tour opens in a browser on phones, tablets and computers without installing an app.',
            },
            {
                question: 'What should be prepared before shooting?',
                answer:
                    'We need to agree on the zones, prepare the space visually and choose a time when the object looks clean and convenient for shooting.',
            },
            {
                question: 'How many points does my space need?',
                answer:
                    'The number of points depends on area, route logic and how much detail the viewer needs. We agree on this after a short brief.',
            },
            {
                question: 'Can the tour be embedded on a website?',
                answer:
                    'Yes. We deliver a link and embed code so the tour can be placed on a property page, service page or separate landing page.',
            },
            {
                question: 'Can the tour be updated after renovation or interior changes?',
                answer:
                    'Yes. If the space changes, we can reshoot selected zones and update the route without rebuilding everything from zero.',
            },
            {
                question: 'Can you add labels, buttons or extra transitions?',
                answer:
                    'Yes. Zone labels, action buttons and additional transitions can be added depending on the task or package.',
            },
            {
                question: 'How do we choose the right package?',
                answer:
                    'We look at the size of the space, number of zones and where the tour will be used: website, messenger, commercial offer or listing.',
            },
            {
                question: 'Is a 360° tour useful for hotels, restaurants, clinics or showrooms?',
                answer:
                    'Yes. It is especially useful when the physical space influences the decision: hotels, apartments, restaurants, clinics, showrooms, offices and real estate.',
            },
            {
                question: 'How is the finished tour delivered?',
                answer:
                    'After assembly, we send a tour link and embed code. You can use it in the channels agreed during the brief.',
            },
            {
                question: 'Is hosting and publishing included?',
                answer:
                    'Hosting and publishing conditions are agreed for the specific task. We clarify in advance where the tour should live and how it should be delivered.',
            },
        ],
        contact: {
            title: 'Need a 360° tour for your space?',
            description:
                'Tell us what kind of space you have and where the tour should be used. We will suggest the number of points, route logic and package.',
            taskPlaceholder:
                'For example: we need a tour for an apartment, hotel or restaurant so clients can explore the space before a visit.',
            serviceOptions: [
                '360° tour',
                'Real estate',
                'Hotels',
                'Restaurant',
                'Clinic',
                'Auto showroom',
                'Office',
                'Other space',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['360° tour'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const reelsServiceEnConfig = {
    page: {
        ...reelsBase.page,
        path: '/reels-service/en',
        hero: {
            ...reelsBase.page.hero,
            eyebrow: 'REELS & SHORTS SERVICE',
            h1: 'Reels and Shorts for Business in Tbilisi and Georgia',
            intro:
                'Vertical short videos for hotels, restaurants, clinics, real estate, showrooms, tourism and local businesses in Tbilisi and across Georgia.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'Pricing',
            secondaryCtaHref: '#pricing',
        },
        trust: {
            heading: 'Short-form video formats',
            badges: ['Instagram', 'TikTok', 'Shorts', 'Hotels', 'Restaurants', 'Real estate'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...reelsBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Aerial footage for Reels, websites, promos and stronger location storytelling.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive viewing of a space before a visit, booking or sales call.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization',
                description: 'AI-assisted visuals for properties, products, menus, ads and creative tests.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate content',
                description: 'Visual content for properties, developments, agencies and remote buyers.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotel content',
                description: 'Content for rooms, atmosphere, territory, Booking, websites and direct inquiries.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurant content',
                description: 'Video and visuals for food, atmosphere, menus, halls and seasonal offers.',
            },
            {
                href: '/tourism-service/en',
                title: 'Tourism content',
                description: 'Content for routes, locations, excursions and travel experiences across Georgia.',
            },
            {
                href: '/clinics-service/en',
                title: 'Clinic content',
                description: 'Video and visual content for trust, specialists, clinic space and patient questions.',
            },
            {
                href: '/auto-service/en',
                title: 'Auto content',
                description: 'Short videos and content for cars, showrooms, detailing and vehicle presentation.',
            },
            {
                href: '/reels-promo/reels-realtor/en',
                title: 'Reels for realtors',
                description: 'Dedicated short-video packages for agents and property listings.',
            },
        ],
        seo: {
            ...reelsBase.page.seo,
            title: 'Reels and Shorts for Business in Tbilisi | Breus Media',
            description:
                'Reels and short-form video production for businesses in Tbilisi and Georgia: Instagram Reels, TikTok and YouTube Shorts from one shoot day.',
            schemaServiceName: 'Reels and Shorts for Business',
            schemaServiceType: 'Short-form vertical video production',
        },
    },
    data: {
        ...reelsBase.data,
        heroDisplayTitle: 'Reels for business\nin Tbilisi\nshort videos\nfor social media',
        heroMobileCompact: true,
        heroSubtitle:
            'Vertical short videos for hotels, restaurants, clinics, real estate, showrooms, tourism and local businesses in Tbilisi and across Georgia.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'Reels are not random videos filmed in a rush. A useful short video has a first hook, structure, rhythm, subtitles and a clear next step.',
            'We handle the idea, filming, editing, subtitles, captions, file delivery and, in the management package, scheduled publishing.',
            'The format is useful when a business needs regular content without daily panic: a clear set of videos instead of asking what to post tomorrow.',
        ],
        heroCards: [
            {
                slug: 'real-estate',
                title: 'Real estate',
                image: reelsHeroCards[0]?.image ?? reelsServices[0].image,
                tags: 'properties · developments · agents',
                shortText: 'A short vertical walkthrough of an apartment, house or development for Reels, TikTok and Shorts.',
                primaryCta: { label: 'Explore service', href: '/reels-promo/reels-realtor/en' },
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'hotels-apartments',
                title: 'Hotels and apartments',
                image: reelsHeroCards[1]?.image ?? reelsServices[1].image,
                tags: 'rooms · breakfast · bookings',
                shortText: 'Rooms, views, breakfast, terrace and the feeling of the property in a short vertical format.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'restaurants-cafes',
                title: 'Restaurants and cafes',
                image: reelsHeroCards[2]?.image ?? reelsServices[2].image,
                tags: 'food · atmosphere · menu',
                shortText: 'Food, plating, dining room atmosphere, terrace, team and seasonal offers.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'clinics-beauty',
                title: 'Clinics and beauty',
                image: reelsHeroCards[3]?.image ?? reelsServices[3].image,
                tags: 'trust · expert · booking',
                shortText: 'Answers, process, clinic space and trust before the first appointment.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'auto-business',
                title: 'Auto business',
                image: reelsHeroCards[4]?.image ?? reelsServices[4].image,
                tags: 'cars · showroom · product',
                shortText: 'Vehicle reviews, arrivals, detailing, before/after videos and showroom presentation.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'tourism-locations',
                title: 'Tourism and locations',
                image: reelsHeroCards[5]?.image ?? reelsServices[5].image,
                tags: 'routes · tours · Georgia',
                shortText: 'Route, views, trip moments and the feeling of a travel experience in a short format.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#pricing',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Reels',
            'Shorts',
            'TikTok',
            'Instagram',
            'vertical video',
            'restaurants',
            'hotels',
            'real estate',
            'clinics',
            'auto',
            'tourism',
            'local business',
            'subtitles',
            'captions',
            'Tbilisi',
            'Georgia',
        ],
        tickerItems: [
            'Reels',
            'Shorts',
            'TikTok',
            'Instagram',
            'vertical video',
            'restaurants',
            'hotels',
            'real estate',
            'clinics',
            'auto',
            'tourism',
            'local business',
            'subtitles',
            'captions',
            'Tbilisi',
            'Georgia',
        ],
        whatIsTour: {
            heading: 'What Reels are in simple terms',
            paragraphs: [
                'Reels are short vertical videos for mobile feeds. Instagram Reels, TikTok and YouTube Shorts use this format: 9:16 video, a strong first frame, subtitles and a fast rhythm.',
                'The main difference from a promo video is regularity. A promo video is usually an image asset. Reels work as a stream of short touchpoints: product, process, expert, atmosphere and answers to questions.',
                'For businesses, Reels are practical because one shoot day can create several videos around different topics. This helps social media feel planned instead of last-minute.',
                'Finished videos can be used on Instagram, TikTok, YouTube Shorts, the website, ads and messenger conversations.',
            ],
        },
        statsHeading: 'Reels in numbers',
        statsTagline:
            'These figures show market context for the format. They are not a performance guarantee for any specific business.',
        statsCards: [
            {
                ...reelsBase.data.statsCards![0],
                value: '200B+',
                label: 'Reels plays per day',
                description: 'Instagram and Facebook together create a massive volume of short-video consumption.',
                sourceLabel: 'Meta reporting',
            },
            {
                ...reelsBase.data.statsCards![1],
                label: 'of Instagram time is spent on Reels',
                description: 'Short videos have become a central attention format inside Instagram.',
                sourceLabel: 'Meta Q1 2024 / Statusphere',
            },
            {
                ...reelsBase.data.statsCards![2],
                label: 'more reach for Reels compared with carousels',
                description: 'Brand account analysis shows higher reach for Reels than for some classic post formats.',
            },
            {
                ...reelsBase.data.statsCards![3],
                label: 'of views can come from non-followers',
                description: 'Reels can help content travel outside the current audience.',
                sourceLabel: 'Meta / ShortsIntel',
            },
        ],
        servicesHeading: 'Who Reels are useful for',
        servicesSubtitle:
            'Short vertical videos work when a business needs to quickly show a space, product, person, process or atmosphere.',
        services: [
            {
                ...reelsServices[0],
                slug: 'real-estate',
                title: 'Reels for properties and developments',
                category: 'Real estate',
                description:
                    'A short walkthrough of an apartment, house, commercial space or development. Useful for agents, agencies and developers.',
                price: 'properties · developments · agents',
                primaryHref: '/reels-promo/reels-realtor/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[1],
                slug: 'hotels-apartments',
                title: 'Reels for hotels',
                category: 'Hotels and apartments',
                description:
                    'Room, lobby, breakfast, spa, terrace view and the feeling of staying at the property before booking.',
                price: 'rooms · breakfast · bookings',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[2],
                slug: 'restaurants-cafes',
                title: 'Reels for restaurants',
                category: 'Restaurants and cafes',
                description:
                    'Dishes, plating, interior, team, evening seating, terrace and seasonal offers.',
                price: 'food · atmosphere · menu',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[3],
                slug: 'clinics-beauty',
                title: 'Reels for clinics and beauty',
                category: 'Clinics and beauty',
                description:
                    'Specialist, space, process, answers to common questions and trust before booking.',
                price: 'trust · expert · appointment',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[4],
                slug: 'auto-showrooms',
                title: 'Reels for auto and showrooms',
                category: 'Auto dealerships and showrooms',
                description:
                    'New arrivals, details, model reviews, before/after, detailing and product presentation.',
                price: 'cars · showroom · product',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[5],
                slug: 'tourism-locations',
                title: 'Reels for tours and activities',
                category: 'Tourism and locations',
                description:
                    'Route, views, guide, transport, food and moments that make the trip feel real.',
                price: 'tours · routes · Georgia',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[6],
                slug: 'expert-personal-brand',
                title: 'Reels for experts',
                category: 'Expert personal brand',
                description:
                    'Talking head plus B-roll: an expert explains, shows a process and answers frequent questions.',
                price: 'expert · trust · questions',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...reelsServices[7],
                slug: 'local-business',
                title: 'Reels for local business',
                category: 'Local business',
                description:
                    'Coworking spaces, fitness, shops, salons, studios and local places that need a more alive presentation.',
                price: 'place · team · atmosphere',
                secondaryCtaLabel: 'Discuss brief',
            },
        ],
        midCta: {
            heading: 'Not sure how many videos you need?',
            text:
                'Tell us your niche, platforms and task. We will suggest the right format: one video, a three-video package or regular publishing support.',
            buttonText: 'Discuss the brief',
            buttonHref: '#contact',
        },
        painSolutions: {
            heading: 'What Reels help solve',
            subtitle:
                'Short videos help a business show movement, people, details and atmosphere with less effort from the internal team.',
            items: [
                {
                    pain: 'Social media feels inactive',
                    solution:
                        'One shoot day creates a reserve of videos. The business does not need to urgently invent what to film every day.',
                },
                {
                    pain: 'Photos do not carry the atmosphere',
                    solution:
                        'Short video shows movement, sound, people, space and details that are hard to feel from one photo.',
                },
                {
                    pain: 'Ad creatives burn out quickly',
                    solution:
                        'Reels can become a base for new ad hypotheses: different hooks, first frames, objects and scenarios.',
                },
                {
                    pain: 'The owner films everything alone on a phone',
                    solution:
                        'We take over production: idea, filming, editing, subtitles, captions and file delivery.',
                },
                {
                    pain: 'The client does not understand the product before a visit',
                    solution:
                        'A video shows the service, space, dish, car, room or property in a real scenario.',
                },
                {
                    pain: 'The business feels faceless',
                    solution:
                        'Reels with the owner, team or expert help build trust instead of only showing the product.',
                },
            ],
        },
        pricingAddOns: {
            heading: 'What affects Reels format and cost',
            items: [
                'number of videos, stories, locations and shoot days',
                'participation of the owner, team, expert, guests or models in frame',
                'subtitles, captions, covers, ad versions and adaptations for different platforms',
                'whether you need only file delivery or regular publishing support',
                'whether additional formats are needed: drone, 360° tour, AI visuals or photos',
            ],
            note:
                'Reels do not guarantee views, sales or inquiries. Results depend on the niche, offer, publishing rhythm and audience work after publication.',
        },
        deliverables: {
            heading: 'What is included',
            intro: 'The exact work set depends on the selected package and task.',
            items: [
                'idea or story preparation for the niche and platforms',
                'on-location filming for vertical format',
                'video editing, subtitles and social-ready packaging',
                'caption or post text',
                'finished files delivered in a clear structure',
                'in the management package: scheduled publishing and content support',
            ],
        },
        whyUs: {
            heading: 'Why businesses shoot Reels with us',
            items: [
                {
                    title: 'We think in series',
                    text: 'We plan more than one video: product, process, atmosphere, expert, answers and repeatable themes.',
                },
                {
                    title: 'We shoot for the mobile feed',
                    text: 'Frame, movement, text and first seconds are built for vertical video instead of simply cropping a horizontal clip.',
                },
                {
                    title: 'We handle preparation',
                    text: 'We help with the idea, story, shots, subtitles and captions so the business is not left alone with content.',
                },
                {
                    title: 'We work in Tbilisi and across Georgia',
                    text: 'We film at properties, restaurants, hotels, clinics, showrooms and locations depending on the task.',
                },
                {
                    title: 'We connect Reels with other services',
                    text: 'When useful, we add drone filming, 360° tours or AI visuals so the content works as one system.',
                },
                {
                    title: 'We deliver ready-to-use material',
                    text: 'Videos, subtitles, captions and files are delivered in a clear structure. In the management package, publishing is included.',
                },
            ],
        },
        pricingHeading: 'Reels packages',
        pricingTagline:
            'You can start with one video, build a small package or hand over regular publishing to us.',
        pricingPlans: [
            {
                ...reelsBase.data.pricingPlans[0],
                title: 'One Video',
                price: 'from 200 GEL',
                subtitle: 'When you need to test the format or film one clear topic',
                features: [
                    'on-location visit',
                    'idea or story preparation',
                    'filming',
                    'vertical video editing',
                    'subtitles',
                    'caption or post text',
                    'file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...reelsBase.data.pricingPlans[1],
                title: '3-Video Package',
                price: 'from 450 GEL',
                subtitle: 'A mini-series for one service, property, place or ad hypothesis. From 150 GEL per video.',
                features: [
                    '3 finished videos',
                    'idea and story preparation',
                    'filming',
                    'up to 2 visits if needed',
                    'editing',
                    'subtitles',
                    'captions or post texts',
                    'file delivery',
                ],
                buttonText: 'Discuss This Tier →',
                featured: true,
                popular: true,
                tag: 'Mini pack',
            },
            {
                ...reelsBase.data.pricingPlans[2],
                title: 'Reels Management',
                price: 'from 1000 GEL',
                subtitle: 'Regular content and publishing without daily pressure on the team',
                features: [
                    '6+ finished videos',
                    'up to 3 visits',
                    'idea and story preparation',
                    'filming',
                    'editing',
                    'subtitles',
                    'captions or post texts',
                    'scheduled publishing',
                    'content support',
                    'file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We discuss the niche, goal, platforms, audience and topics. Then we decide whether you need one video, a package or management.',
            },
            {
                number: '02',
                title: 'Ideas and story',
                description:
                    'We prepare the story: what happens in the first seconds, which shots are needed, where text appears and what the call to action should be.',
            },
            {
                number: '03',
                title: 'Filming',
                description:
                    'We come to the location and film directly for vertical format. For packages, we collect several stories in one or several visits.',
            },
            {
                number: '04',
                title: 'Editing and subtitles',
                description:
                    'We assemble videos for the mobile feed: rhythm, first frame, subtitles, captions and final social packaging.',
            },
            {
                number: '05',
                title: 'Delivery or publishing',
                description:
                    'We deliver files in the cloud. In the management package, we publish videos at the agreed time and support the content flow.',
            },
        ],
        conditionsNote: {
            title: 'What to prepare before a Reels shoot',
            text:
                'For short videos, we agree on topics, first seconds and publishing format in advance so the shoot day produces a clear series instead of scattered clips.',
            items: [
                'agree on topics, offers, publishing platforms, people in frame and brand limitations',
                'prepare the location, product, dishes, property, team uniform or details that need to appear in the first seconds',
                'decide in advance whether subtitles, captions, publishing, ad versions or file delivery only are needed',
            ],
            details:
                'Reels do not guarantee views, sales or inquiries. Results depend on publishing, offer, frequency, audience and follow-up work with the content.',
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'What is included in one Reel?',
                answer:
                    'One video includes idea or story preparation, on-location filming, vertical video editing, subtitles, a caption or post text and delivery of the finished file.',
            },
            {
                question: 'How much does one video cost?',
                answer:
                    'One video starts from 200 GEL. Final cost depends on location, number of scenes, people in frame and shooting complexity.',
            },
            {
                question: 'Why is the three-video package cheaper per video?',
                answer:
                    'The package is cheaper per video because part of preparation, travel and filming is shared. One or several visits can create material for a mini-series.',
            },
            {
                question: 'What is included in Reels management?',
                answer:
                    'Management includes 6+ finished videos, idea preparation, filming, editing, subtitles, captions, scheduled publishing, content support and file delivery.',
            },
            {
                question: 'Do you publish the videos yourself?',
                answer:
                    'Yes, but only in the management package. In regular packages, we deliver finished videos, subtitles, captions and files for the client or team to publish.',
            },
            {
                question: 'Can we order filming without management?',
                answer:
                    'Yes. You can order one video or a three-video package without regular publishing. In that case, we deliver ready materials for your social media.',
            },
            {
                question: 'Do we need to prepare scripts ourselves?',
                answer:
                    'No. We help with ideas, video structure, first seconds, shots and text. If you already have topics, we use them as the base.',
            },
            {
                question: 'Can you film employees or the owner?',
                answer:
                    'Yes. Reels with the owner, team or expert often help explain the service and build trust. We agree in advance who appears in frame and why.',
            },
            {
                question: 'Does Reels work for restaurants, hotels, real estate or clinics?',
                answer:
                    'Yes. The format is useful wherever a space, atmosphere, process, product or person influences the decision: restaurants, hotels, real estate, clinics, beauty, auto and tourism.',
            },
            {
                question: 'Do you add subtitles?',
                answer:
                    'Yes. Subtitles are included because many people watch short videos without sound. Text helps hold attention and explain the idea faster.',
            },
            {
                question: 'Can the videos be used in ads?',
                answer:
                    'Yes. Finished videos can be used on Instagram, TikTok, YouTube Shorts, the website, messengers and as a base for ad hypotheses.',
            },
            {
                question: 'Do you provide source files?',
                answer:
                    'Finished files are always delivered. Source files are discussed separately depending on the task, material volume and future use.',
            },
            {
                question: 'Can we film several locations?',
                answer:
                    'Yes. Several locations can be included in a package or separate quote. Cost depends on distance, number of scenes and number of visits.',
            },
            {
                question: 'Do you work across Georgia?',
                answer:
                    'Yes. The main work area is Tbilisi, and we also travel across Georgia depending on the project.',
            },
        ],
        contact: {
            title: 'Need Reels for your business?',
            description:
                'Tell us your niche, location and task. We will suggest whether you need one video, a three-video package or regular management.',
            taskPlaceholder:
                'For example: we need Reels for a restaurant, hotel, real estate property, clinic or local business.',
            serviceOptions: [
                'Reels',
                'Real estate',
                'Hotels and apartments',
                'Restaurants and cafes',
                'Clinics and beauty',
                'Auto business',
                'Tourism',
                'Local business',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['reels'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const aiVisualizationServiceEnConfig = {
    page: {
        ...aiVisualizationBase.page,
        path: '/ai-visualization-service/en',
        hero: {
            ...aiVisualizationBase.page.hero,
            eyebrow: 'AI VISUALIZATION SERVICE',
            h1: 'AI Visualization for Business in Tbilisi and Georgia',
            intro:
                'Hybrid AI production for visuals and copy: AI speeds up the draft, while a designer and editor control the final result.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'Pricing',
            secondaryCtaHref: '#pricing',
        },
        trust: {
            heading: 'AI formats for business',
            badges: ['AI staging', 'Menus', 'Products', 'Auto', 'Hotels', 'RU / EN / KA'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...aiVisualizationBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Real footage of a property, territory and surroundings for websites, ads and presentations.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive viewing of an existing space before a visit, booking or sales call.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels and Shorts',
                description: 'Short vertical videos for social media, ads and fast content testing.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate content',
                description: 'Content for properties, developments, agencies, remote buyers and presales.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotel content',
                description: 'Visual and text packaging for hotels, apartments, rooms and guest communication.',
            },
            {
                href: '/restaurants-service',
                title: 'Restaurant content',
                description: 'Content for dishes, menus, interiors, delivery and seasonal offers.',
            },
            {
                href: '/tourism-service',
                title: 'Tourism content',
                description: 'Content for routes, travel locations and tourism offers across Georgia.',
            },
        ],
        seo: {
            ...aiVisualizationBase.page.seo,
            title: 'AI Visualization for Business in Tbilisi | Breus Media',
            description:
                'AI visualization, AI staging, product visuals and AI-assisted copy for businesses in Tbilisi and Georgia. AI speeds up the draft, humans control the result.',
            schemaServiceName: 'AI Visualization for Business',
            schemaServiceType: 'AI visualization and content service',
        },
    },
    data: {
        ...aiVisualizationBase.data,
        heroDisplayTitle: 'AI visualization\nfor business\nin Tbilisi',
        heroDesktopDisplayTitle: 'AI visualization\nfor business in Tbilisi',
        heroMobileCompact: true,
        heroSubtitle:
            'Hybrid AI production for real estate, hotels, restaurants, e-commerce, auto, tourism and local brands. AI speeds up drafts, while a designer and editor control the final image, copy and packaging.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'AI visualization is not just pressing a button and receiving a usable image. We use AI as a fast draft tool, then refine the final result manually: composition, proportions, colors, text, logos and meaning.',
            'The client receives not just generated files, but materials prepared for a website, listing, menu, ad, presentation or social media.',
            'If the task is better solved with real filming, drone footage or a 360° tour, we say so. The goal is to choose the right format, not to sell AI for the sake of AI.',
        ],
        heroCards: [
            {
                slug: 'real-estate',
                title: 'Real estate',
                image: aiVisualizationHeroCards[0]?.image ?? aiVisualizationServices[0].image,
                tags: 'properties · staging · presale',
                shortText:
                    'AI staging, interior and exterior visualization, and showing a future property before renovation or construction is finished.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
            {
                slug: 'interiors-spaces',
                title: 'Interiors and spaces',
                image: aiVisualizationHeroCards[1]?.image ?? aiVisualizationServices[2].image,
                tags: 'interior · concept · renovation',
                shortText:
                    'Renovation concepts, zone redesign, hotels, restaurants, offices and commercial spaces.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
            {
                slug: 'products-ecommerce',
                title: 'Products and e-commerce',
                image: aiVisualizationHeroCards[2]?.image ?? aiVisualizationServices[3].image,
                tags: 'products · marketplace · ads',
                shortText:
                    'Product visuals, lifestyle scenes, ad versions and visual assets for product cards.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
            {
                slug: 'restaurants-menu',
                title: 'Restaurants and menus',
                image: aiVisualizationHeroCards[3]?.image ?? aiVisualizationServices[5].image,
                tags: 'menu · delivery · cards',
                shortText:
                    'One visual style for dishes, menu cards, delivery packaging and promo banners.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
            {
                slug: 'auto-business',
                title: 'Auto business',
                image: aiVisualizationHeroCards[4]?.image ?? aiVisualizationServices[4].image,
                tags: 'auto · background · catalog',
                shortText:
                    'Background replacement and visual packaging for cars, MyAuto listings, dealer websites and social media.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
            {
                slug: 'hotels-tourism',
                title: 'Hotels and tourism',
                image: aiVisualizationHeroCards[5]?.image ?? aiVisualizationServices[7].image,
                tags: 'hotels · tourism · copy',
                shortText:
                    'Room, route, offer and service descriptions plus visual packaging for guests in RU / EN / KA.',
                secondaryCta: { label: 'Discuss AI format', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#pricing',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'AI visualization',
            'AI staging',
            'interiors',
            'real estate',
            'product visuals',
            'menus',
            'auto',
            'hotels',
            'tourism',
            'ad creatives',
            'RU',
            'EN',
            'KA',
            'Tbilisi',
            'Georgia',
            'human-controlled output',
        ],
        tickerItems: [
            'AI visualization',
            'AI staging',
            'interiors',
            'real estate',
            'product visuals',
            'menus',
            'auto',
            'hotels',
            'tourism',
            'ad creatives',
            'RU',
            'EN',
            'KA',
            'Tbilisi',
            'Georgia',
            'human-controlled output',
        ],
        servicesHeading: 'What AI visualization is useful for',
        servicesSubtitle:
            'AI helps show something faster when it has not been built, filmed, styled or fully developed yet.',
        services: [
            {
                ...aiVisualizationServices[0],
                slug: 'ai-real-estate-visualization',
                title: 'AI visualization for real estate',
                category: 'Real estate',
                description:
                    'A drawing, plan or reference set can become a visual concept for a future property, presentation, presale or ad.',
                price: 'properties · presale · ads',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[1],
                slug: 'ai-staging-virtual-furnishing',
                title: 'AI staging and virtual furnishing',
                category: 'Listings',
                description:
                    'An empty room receives furniture, light, decor and a clearer visual scenario for a listing or presentation.',
                price: 'staging · furniture · before/after',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[2],
                slug: 'ai-interior-visualization',
                title: 'AI interior visualization',
                category: 'Spaces',
                description:
                    'Renovation concepts and redesign ideas for hotels, restaurants, offices, apartments and commercial interiors.',
                price: 'interior · concept · renovation',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[3],
                slug: 'ai-product-visuals',
                title: 'AI product visuals',
                category: 'E-commerce',
                description:
                    'One product can be shown in different scenes, seasons and ad formats without a full studio reshoot.',
                price: 'products · scenes · ads',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[4],
                slug: 'ai-auto-visuals',
                title: 'AI visuals for auto business',
                category: 'Auto',
                description:
                    'Car photos can be brought to a cleaner background and consistent visual style for websites, MyAuto and ads.',
                price: 'auto · background · catalog',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[5],
                slug: 'ai-menu-delivery-cards',
                title: 'AI menu and delivery cards',
                category: 'Restaurants',
                description:
                    'Dishes, menu cards, banners and delivery packaging in one visual standard.',
                price: 'menu · delivery · cards',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[6],
                slug: 'ai-brand-ad-visuals',
                title: 'AI visuals for brands and ads',
                category: 'Marketing',
                description:
                    'Creative sets for campaigns, A/B tests, social media, landing pages and ad formats.',
                price: 'creatives · tests · ads',
                secondaryCtaLabel: 'Discuss AI format',
            },
            {
                ...aiVisualizationServices[7],
                slug: 'ai-hotel-tourism-copy',
                title: 'AI descriptions for hotels and tourism',
                category: 'RU / EN / KA',
                description:
                    'Descriptions of rooms, routes, services and offers in RU / EN / KA with editorial polish.',
                price: 'hotels · tourism · copy',
                secondaryCtaLabel: 'Discuss AI format',
            },
        ],
        statsHeading: 'AI visualization in numbers',
        statsTagline:
            'These figures show market context. They are not a performance guarantee for any specific business.',
        statsCards: [
            {
                ...aiVisualizationBase.data.statsCards![0],
                label: 'of agents say staging reduces time on market',
                description: 'Context for AI staging and virtual furnishing of empty properties.',
            },
            {
                ...aiVisualizationBase.data.statsCards![1],
                label: 'of buyer agents say staging helps people imagine themselves in the home',
                description: 'A reason to show the potential of empty apartments and houses more clearly.',
            },
            {
                ...aiVisualizationBase.data.statsCards![2],
                label: 'of shoppers prefer product information in their own language',
                description: 'Context for multilingual descriptions in RU / EN / KA.',
            },
            {
                ...aiVisualizationBase.data.statsCards![3],
                label: 'will not buy from a website without their language',
                description:
                    'Why localization matters for hotels, tourism, real estate and e-commerce.',
            },
        ],
        midCta: {
            heading: 'Tell us the task - we will say where AI helps and where filming is better',
            text:
                'Sometimes it is cheaper and more honest to film a real frame with a camera or drone, then refine it with AI. We choose the format around the task, channel and budget.',
            buttonText: 'Choose an AI format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'What we mean by AI visualization',
            paragraphs: [
                'AI visualization is not uncontrolled auto-generation. AI helps quickly create a draft: an interior, background, product scene, text or advertising variant.',
                'Then a person steps in: a designer checks proportions, color, style, details and artifacts; an editor checks copy, tone and meaning.',
                'We treat it as hybrid production: AI speeds up the draft, the team controls quality and commercial usability.',
            ],
        },
        painSolutions: {
            heading: 'What AI visualization helps solve',
            subtitle:
                'AI helps prepare visuals and copy faster when the object, studio, finished interior or large shoot budget is not available yet.',
            items: [
                {
                    pain: 'The object is not built yet, but sales need to start',
                    solution:
                        'AI visualization helps show an exterior, entrance, yard or basic interior from drawings and references.',
                },
                {
                    pain: 'An empty apartment does not show potential',
                    solution:
                        'AI staging adds furniture, light and decor so a buyer can understand scale and a possible lifestyle scenario.',
                },
                {
                    pain: 'Menu and dish cards look inconsistent',
                    solution:
                        'AI can help bring visuals into one style: background, light and presentation for websites or delivery platforms.',
                },
                {
                    pain: 'A car was photographed in a parking lot and gets lost in listings',
                    solution:
                        'AI visuals can replace the background, clean up presentation and prepare images for MyAuto, dealer websites or social media.',
                },
                {
                    pain: 'A hotel or tour needs copy in several languages',
                    solution:
                        'AI speeds up RU / EN / KA drafts, while an editor refines meaning, tone and local context.',
                },
                {
                    pain: 'Marketing needs many creative options for tests',
                    solution:
                        'One idea can become several visual directions for ads, landing pages, social media and presentations.',
                },
            ],
        },
        earnLose: {
            heading: 'What the business gains',
            earnTitle: 'More possibilities',
            earnItems: [
                'Shows the potential of an object earlier, while it is still being built or renovated.',
                'Creates more options for ad A/B tests.',
                'Helps speak to customers in the right language: RU / EN / KA.',
            ],
            loseTitle: 'Fewer unnecessary costs',
            loseItems: [
                'Less dependence on studio production, props and long logistics.',
                'Less time before launching a listing, menu or ad campaign.',
                'Less risk of investing in renovation, packaging or a concept before testing the visual direction.',
            ],
        },
        deliverables: {
            heading: 'What can be included',
            items: [
                'high-resolution images',
                'scene, background, style and lighting variants',
                'Before / After versions when relevant',
                'resizes for 1:1, 4:5, 9:16 and 16:9',
                'product cards, menu cards and banners',
                'copy and descriptions in RU / EN / KA when included in the task',
                'final files in a cloud folder',
                'a short note on where each format should be used',
                'commercial license for the delivered result',
            ],
        },
        whyUs: {
            heading: 'Why businesses do AI visualization with us',
            subtitle:
                'We do not sell generations. We prepare material that can be used in sales, ads, listings and presentations.',
            items: [
                {
                    title: 'A human controls the result',
                    text: 'AI speeds up the draft, but final proportions, colors, details and text are checked manually.',
                },
                {
                    title: 'We choose the format around the task',
                    text: 'Sometimes the right answer is AI staging, sometimes filming, drone footage or a 360° tour. We do not force everything into AI.',
                },
                {
                    title: 'We think in channels',
                    text: 'A website, aggregator, menu, ad, presentation and social post need different formats and file sizes.',
                },
                {
                    title: 'We understand local context',
                    text: 'We consider Tbilisi, Georgia, MyAuto, Wolt, Bolt, Booking, real estate and multilingual audiences.',
                },
                {
                    title: 'We connect visuals and copy',
                    text: 'We can prepare not only the image, but also descriptions, captions, FAQ, offer text and RU / EN / KA localization.',
                },
                {
                    title: 'We deliver a clear structure',
                    text: 'Files are delivered in an organized folder: finals, formats, variants, copy and usage notes.',
                },
            ],
        },
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We clarify the task, audience, publishing channel, format, style, language and restrictions.',
            },
            {
                number: '02',
                title: 'Source materials',
                description:
                    'We collect photos, drawings, plans, references, brand materials, copy and examples of the target result.',
            },
            {
                number: '03',
                title: 'AI generation',
                description:
                    'We create several scene, style, angle or text variants, then remove anything that looks synthetic or does not fit the task.',
            },
            {
                number: '04',
                title: 'Manual refinement',
                description:
                    'We check proportions, color, reflections, logos, text, spelling and alignment with the brief.',
            },
            {
                number: '05',
                title: 'Delivery',
                description:
                    'We deliver final files, format adaptations and the commercial license for the service result.',
            },
        ],
        pricingHeading: 'AI visualization packages',
        pricingTagline:
            'Cost depends on source materials, scene complexity, manual refinement, languages and final formats.',
        pricingPlans: [
            {
                ...aiVisualizationBase.data.pricingPlans[0],
                title: 'AI Start',
                price: 'from 300 GEL',
                subtitle: 'For one property, dish, product or small image series',
                features: [
                    'AI staging or basic processing of 5-10 images',
                    '2-3 style directions',
                    'resizes for listings and social media',
                    'manual result check',
                    'final file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...aiVisualizationBase.data.pricingPlans[1],
                title: 'AI Standard',
                price: 'from 600 GEL',
                subtitle: 'For a menu, mini catalog, real estate object or product series',
                features: [
                    'batch processing of up to 20 items',
                    'background replacement and basic styling',
                    'preparation for aggregators, websites or ads',
                    'one agreed revision round',
                    'final folder with files',
                ],
                buttonText: 'Discuss This Tier →',
                featured: true,
            },
            {
                ...aiVisualizationBase.data.pricingPlans[2],
                title: 'AI Campaign',
                price: 'from 1500 GEL',
                subtitle: 'For an ad campaign, presale, brand launch or object relaunch',
                features: [
                    'expanded creative generation',
                    'concept renders for spaces or exteriors',
                    'adaptations for several formats',
                    'several agreed revision rounds',
                    'final file structure for publishing',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...aiVisualizationBase.data.pricingPlans[3],
                title: 'AI Localization & Copy',
                price: 'from 200 GEL',
                subtitle: 'Copy, descriptions, FAQ and RU / EN / KA localization',
                features: [
                    'AI-assisted copywriting',
                    'editorial polish',
                    'localization into 2-3 languages',
                    'descriptions for rooms, routes, products and properties',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'How final cost is calculated',
            items: [
                'number of source files and final formats',
                'scene, background, lighting and manual refinement complexity',
                'availability of brand materials, references and existing copy',
                'number of languages and editorial work volume',
            ],
            note:
                'The final quote depends on source files, scene complexity, brand materials, languages and the amount of manual refinement.',
        },
        conditionsNote: {
            title: 'What to prepare before AI work',
            text:
                'Before AI production, it is important to separate facts from visual hypotheses and provide materials that help verify the final result.',
            items: [
                'send source files, references, brand restrictions, required sizes and publishing channels',
                'mark where the result must be realistic and where conceptual visualization is acceptable',
                'agree on facts, names, ingredients, product or property parameters before final editorial review',
            ],
            details:
                'AI can make mistakes in details, text, geometry and texture, so final materials are checked manually and should not replace real characteristics of an object or product.',
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'What is AI visualization?',
                answer:
                    'It is a hybrid process where AI helps create a visual or text draft quickly, and a human checks composition, proportions, details, meaning and publishing readiness.',
            },
            {
                question: 'How is AI staging different from regular interior visualization?',
                answer:
                    'AI staging works with a photo of an existing space and adds furniture, light and decor. Interior visualization is usually built from a plan, references or a future concept.',
            },
            {
                question: 'Can AI visuals be used in ads?',
                answer:
                    'Yes, if the material fits the task, platform policy and does not mislead the viewer. We check final files and recommend a visualization label when needed.',
            },
            {
                question: 'What do you need from the client to start?',
                answer:
                    'We need source photos, plans, drawings, references, task description, publishing channel, languages and brand restrictions. If there is not enough material, we explain what can be done honestly.',
            },
            {
                question: 'Can you create a visual from a drawing or floor plan?',
                answer:
                    'Yes. For presentations, presales and concepts, we can use a drawing, plan, references and description. For precise engineering decisions, dedicated 3D visualization is better.',
            },
            {
                question: 'Can you work with ordinary phone photos?',
                answer:
                    'Often yes. We can improve background, light, style and versions for a website, menu, listing or social media. If the photo is too dark or distorts the object, reshooting is better.',
            },
            {
                question: 'Do you write copy in Russian, English and Georgian?',
                answer:
                    'Yes. AI speeds up the draft, but an editor refines meaning, tone and local context so the copy does not feel like machine translation.',
            },
            {
                question: 'Can materials be used in a menu, listing or website?',
                answer:
                    'Yes. We prepare formats for websites, aggregators, menus, product cards, presentations, ads and social media when that is part of the task.',
            },
            {
                question: 'Does AI replace a photographer?',
                answer:
                    'Not always. For real spaces, people, reportage and textures, filming is often better. AI is useful for staging, variants, backgrounds, concepts, post-processing and copy.',
            },
            {
                question: 'How much does AI visualization cost?',
                answer:
                    'Packages start from 300 GEL. The final quote depends on source materials, scene complexity, formats, languages and manual refinement volume.',
            },
            {
                question: 'Do you provide source files?',
                answer:
                    'We deliver final files, adaptations and a publishing structure. Working source files are discussed separately before the start.',
            },
            {
                question: 'Can revisions be made?',
                answer:
                    'Yes. The number of revision rounds is fixed in the selected package or quote. Revisions are agreed by task so the direction does not change endlessly.',
            },
            {
                question: 'Is this useful for real estate, restaurants, auto and hotels?',
                answer:
                    'Yes. Common scenarios include AI staging, interior visualization, menu cards, product scenes, car photos, room descriptions and tourism offers.',
            },
            {
                question: 'What limitations does AI visualization have?',
                answer:
                    'AI can make mistakes in small text, reflections, geometry and real-object details. That is why the final result is checked by a person, and some tasks are better solved by filming.',
            },
        ],
        contact: {
            title: 'Need AI visualization for your business?',
            description:
                'Tell us what needs to be shown: property, interior, product, menu, car, hotel, tour or ad idea. We will say where AI helps and where real filming is better.',
            taskPlaceholder:
                'For example: AI staging for an apartment, menu cards, car visuals for MyAuto or hotel descriptions in RU / EN / KA.',
            serviceOptions: [
                'AI visualization',
                'AI staging',
                'Real estate',
                'Interiors',
                'Products',
                'Menu and delivery',
                'Auto',
                'Hotels and tourism',
                'Ads',
                'Copy RU / EN / KA',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['AI visualization'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const restaurantsServiceEnConfig = {
    page: {
        ...restaurantsBase.page,
        path: '/restaurants-service/en',
        hero: {
            ...restaurantsBase.page.hero,
            eyebrow: 'GASTRO CONTENT',
            h1: 'Content for Restaurants and Cafes in Tbilisi',
            intro:
                'Photo, video, Reels, drone filming, 360° tours and AI menu packaging for restaurants, cafes, bars, delivery and gastro projects in Tbilisi and Georgia.',
            primaryCtaLabel: 'Discuss project',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View services',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Formats for restaurants',
            badges: ['Restaurants', 'Cafes', 'Bars', 'Delivery', 'Terraces', 'Gastro projects'],
            location: 'Tbilisi and Georgia',
        },
        googleTrust: {
            ...restaurantsBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Drone footage for terraces, facades, views, courtyards and location context.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive viewing of the dining room, terrace or event space before a visit.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels and Shorts',
                description: 'Short vertical videos for social media, ads and regular restaurant content.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization',
                description: 'AI menu cards, delivery visuals, banners and ad creative packaging.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotels',
                description: 'Content for hotels and hotel restaurants, breakfast, bars and room service.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate',
                description: 'Content for spaces, commercial locations and property presentation.',
            },
        ],
        seo: {
            ...restaurantsBase.page.seo,
            title: 'Restaurant Content in Tbilisi | Breus Media',
            description:
                'Photo, video, Reels, drone filming, 360° tours and AI menu visuals for restaurants, cafes and gastro projects in Tbilisi and Georgia.',
            schemaServiceName: 'Restaurant Content in Tbilisi',
            schemaServiceType: 'Restaurant content production service',
        },
    },
    data: {
        ...restaurantsBase.data,
        heroSubtitle:
            'Photo, video, Reels, drone filming, 360° tours and AI menu packaging for restaurants, cafes, bars, delivery and gastro projects in Tbilisi and Georgia.',
        heroSupportingLine: '',
        heroMobileCompact: true,
        heroLeadParagraphs: [
            'Guests choose a restaurant with their eyes: dishes, atmosphere, dining room, terrace, plating, reviews and the first impression on Google Maps, Instagram, Wolt or the website.',
            'We help package restaurant content for real channels: Reels, menus, delivery, Google Maps, websites, ad creatives, messengers and presentations.',
            'The format is selected around the task: show the kitchen, refresh the menu, launch a new dish, package a hotel restaurant, film the interior or prepare content for a month.',
        ],
        heroCards: [
            {
                slug: 'food-menu-shoot',
                title: 'Food and menu shoot',
                image: restaurantsHeroCards[0]?.image ?? restaurantsServices[0].image,
                tags: 'menu · delivery · dishes',
                shortText: 'Photo and video of dishes, drinks, sets, seasonal menus and delivery positions.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'restaurant-reels',
                title: 'Reels for restaurants',
                image: restaurantsHeroCards[1]?.image ?? restaurantsServices[1].image,
                tags: 'Reels · Instagram · TikTok',
                shortText:
                    'Short vertical videos: plating, kitchen, team, atmosphere, terrace and evening service.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'interior-atmosphere',
                title: 'Interior and atmosphere',
                image: restaurantsHeroCards[2]?.image ?? restaurantsServices[2].image,
                tags: 'hall · bar · terrace',
                shortText: 'Dining room, bar, terrace, light, details, seating and the feeling of the place before a visit.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'restaurant-360-tour',
                title: '360° tour',
                image: restaurantsHeroCards[3]?.image ?? restaurantsServices[3].image,
                tags: 'tour · hall · banquet',
                shortText: 'Guests can walk through the dining room, terrace or event area from a phone before booking.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'location-drone-filming',
                title: 'Location drone filming',
                image: restaurantsHeroCards[4]?.image ?? restaurantsServices[4].image,
                tags: 'drone · view · location',
                shortText: 'Drone footage shows the terrace, rooftop, courtyard, view, facade and restaurant location.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
            {
                slug: 'ai-menu-delivery',
                title: 'AI menu and delivery cards',
                image: restaurantsHeroCards[5]?.image ?? restaurantsServices[5].image,
                tags: 'AI · menu · Wolt',
                shortText: 'AI visuals, menu cards, banners and item packaging for websites, Wolt and social media.',
                secondaryCta: { label: 'Discuss brief', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Restaurants',
            'cafes',
            'bars',
            'gastro projects',
            'food shooting',
            'menus',
            'Reels',
            '360° tours',
            'drone filming',
            'AI cards',
            'Wolt',
            'delivery',
            'Google Maps',
            'Instagram',
            'terrace',
            'breakfast',
            'dinner',
            'Tbilisi',
            'Georgia',
        ],
        tickerItems: [
            'Restaurants',
            'cafes',
            'bars',
            'gastro projects',
            'food shooting',
            'menus',
            'Reels',
            '360° tours',
            'drone filming',
            'AI cards',
            'Wolt',
            'delivery',
            'Google Maps',
            'Instagram',
            'terrace',
            'breakfast',
            'dinner',
            'Tbilisi',
            'Georgia',
        ],
        servicesHeading: 'Restaurant content formats',
        servicesSubtitle:
            'Different tasks need different assets: menu, delivery, Google Maps, Instagram, website, ads, banquets and guest trust before a visit.',
        services: [
            {
                ...restaurantsServices[0],
                slug: 'food-menu-shoot',
                title: 'Food and menu shoot',
                category: 'Menu · Delivery · Dishes',
                description:
                    'Photos, video, sets, close-ups, menu items and delivery positions for social media, website and aggregator cards.',
                price: 'dishes · drinks · sets',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[1],
                slug: 'restaurant-reels',
                title: 'Reels and Shorts for restaurants',
                category: 'Instagram · TikTok · Shorts',
                description:
                    'Short vertical videos: plating, kitchen process, atmosphere, bar, morning breakfast, terrace and evening service.',
                price: 'Reels · dynamic · atmosphere',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[2],
                slug: 'interior-atmosphere',
                title: 'Interior, bar and atmosphere',
                category: 'Space · Evening · Details',
                description:
                    'Atmospheric photos and video of the dining room, bar, lighting, seating, decor and the overall mood of the restaurant.',
                price: 'space · light · mood',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[3],
                slug: 'restaurant-360-tour',
                title: '360° tour for restaurants',
                category: 'Tour · Hall · Banquet',
                description:
                    'Interactive viewing of the dining room, terrace, banquet area or hotel restaurant. Useful for websites and messengers.',
                price: 'tour · hall · banquet',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[4],
                slug: 'restaurant-drone-filming',
                title: 'Restaurant drone filming',
                category: 'Drone · View · Location',
                description:
                    'Drone footage shows the location, terrace, rooftop, courtyard, facade, view and surroundings of the restaurant.',
                price: 'drone · view · location',
                primaryHref: '/drone-services/drone-restaurants/en',
                primaryCtaLabel: 'Explore service',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...restaurantsServices[5],
                slug: 'ai-menu-delivery-cards',
                title: 'AI menu and delivery cards',
                category: 'AI · Menu · Wolt',
                description:
                    'AI visuals, unified dish-card style, banners, delivery packaging and item descriptions.',
                price: 'AI · menu · Wolt',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[6],
                slug: 'google-maps-content',
                title: 'Content for Google Maps',
                category: 'Google Maps · Facade · Listing',
                description:
                    'Covers, space photos, dishes, facade and short assets that make the restaurant listing clearer.',
                price: 'Google Maps · facade · listing',
                secondaryCtaLabel: 'Discuss brief',
            },
            {
                ...restaurantsServices[7],
                slug: 'monthly-content-pack',
                title: 'Monthly content pack',
                category: 'Month · Publishing · Tests',
                description:
                    'A series of photos, Reels, short videos, copy and covers for regular publishing and ad hypotheses.',
                price: 'month · publishing · tests',
                secondaryCtaLabel: 'Discuss brief',
            },
        ],
        statsHeading: 'Restaurants in numbers',
        statsTagline:
            'These figures show market context. They are not a booking, inquiry or sales guarantee for any specific restaurant.',
        statsCards: [
            {
                ...restaurantsBase.data.statsCards![0],
                value: 'Up to 44%',
                label: 'in DoorDash data for menus with photos',
                description:
                    'Context for dish photography and menu cards: photos help a dish become clear before ordering.',
                sourceLabel: 'DoorDash menu photography',
            },
            {
                ...restaurantsBase.data.statsCards![1],
                label: 'Google a restaurant before visiting',
                description:
                    'TouchBistro also notes that guests check menus and websites in advance. This supports fresh Google Maps, website and visual content.',
            },
            {
                ...restaurantsBase.data.statsCards![2],
                label: 'prefer information in their own language',
                description:
                    'RU / EN / KA descriptions help local, relocation and tourist audiences understand the offer.',
            },
            {
                ...restaurantsBase.data.statsCards![3],
                label: 'want to see more video from brands',
                description:
                    'Video, Reels and short reviews help show dishes, atmosphere, team and space.',
            },
        ],
        midCta: {
            heading: 'Not sure what your restaurant needs first?',
            text:
                'Tell us your format: restaurant, cafe, bar, terrace, delivery, hotel restaurant or new launch. We will suggest where to start: dishes, Reels, interior, 360°, drone, AI menu or content pack.',
            buttonText: 'Choose a format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Not just food shooting - visual packaging for the restaurant',
            paragraphs: [
                'A restaurant is not chosen by the menu alone. Guests look at dishes, dining room, light, plating, terrace, bar, atmosphere, reviews and how the place appears on Instagram, Google Maps, Wolt or the website.',
                'That is why restaurant content should not only show a beautiful dish. It should explain the experience: where the guest comes, what they order, what the place feels like, who it is right for and why it is worth choosing.',
                'We prepare materials for real channels: menus, delivery, Google Maps, Instagram, TikTok, YouTube Shorts, website, ads, messengers and commercial offers.',
            ],
        },
        painSolutions: {
            heading: 'What restaurant content helps solve',
            subtitle:
                'Good content helps guests understand the cuisine, atmosphere, restaurant format and reason to visit faster.',
            items: [
                {
                    pain: 'Dishes look weaker online than in real life',
                    solution:
                        'Photo, video and Reels show texture, plating, steam, sauce, drinks and details that menu text cannot carry.',
                },
                {
                    pain: 'Guests cannot feel the atmosphere',
                    solution:
                        'Interior, light, music, terrace, bar and movement in the dining room help people understand the restaurant before a visit.',
                },
                {
                    pain: 'Delivery items look inconsistent',
                    solution:
                        'Unified cards, AI visuals and clear descriptions help bring menus and delivery into one visual system.',
                },
                {
                    pain: 'Social media is handled chaotically',
                    solution:
                        'A content pack gives you Reels, photos, covers and topics for regular posting instead of last-minute filming.',
                },
                {
                    pain: 'The Google Maps listing does not sell the place',
                    solution:
                        'Fresh photos of the facade, hall, dishes, menu and atmosphere help guests understand where they are going.',
                },
                {
                    pain: 'You need to promote a seasonal menu or launch',
                    solution:
                        'Dish shooting, Reels, banners and copy are prepared around a specific campaign: new menu, breakfast, terrace, dinner or special offer.',
                },
            ],
        },
        earnLose: {
            heading: 'What the restaurant gains',
            earnTitle: 'More clarity for guests',
            earnItems: [
                'Explains cuisine, atmosphere and the reason to visit faster.',
                'Creates assets for Instagram, Wolt, Google Maps, the website and ads.',
                'Lets you regularly show dishes, team, dining room, terrace and seasonal offers.',
            ],
            loseTitle: 'Less content chaos',
            loseItems: [
                'Fewer random photos in different styles.',
                'Fewer repeated questions about menu, format, seating and atmosphere.',
                'Less dependence on accidental phone photos in poor light.',
            ],
        },
        deliverables: {
            heading: 'What can be included',
            intro: 'The package depends on the task, channels and menu volume.',
            items: [
                'photos of dishes, drinks, interior, facade and details',
                'short videos and Reels / Shorts / TikTok clips',
                'restaurant video tour',
                'aerial photos and drone video when location matters',
                '360° tour or interactive viewing link',
                'AI menu cards and delivery packaging',
                'dish, menu and offer descriptions in RU / EN / KA',
                'covers and assets for Google Maps / Wolt / website',
                'files in a cloud folder',
                'recommendations on where each format should be used',
            ],
        },
        whyUs: {
            heading: 'Why restaurants work with us',
            subtitle:
                'We think beyond a beautiful shot. We look at how a guest chooses: dishes, atmosphere, menu, location, reviews and first impression.',
            items: [
                {
                    title: 'We choose formats around the task',
                    text: 'A new menu, terrace, breakfast, delivery and hotel restaurant need different materials. We do not sell the same package to everyone.',
                },
                {
                    title: 'We understand restaurant channels',
                    text: 'Instagram, Wolt, Google Maps, website, TikTok, Shorts and messengers need different formats, covers and copy.',
                },
                {
                    title: 'We show the guest experience',
                    text: 'We film more than dishes: facade, entrance, dining room, seating, plating, team, bar, details and atmosphere.',
                },
                {
                    title: 'We connect video, photo, Reels, 360° and AI',
                    text: 'One package can cover several jobs: menu, trust, location, atmosphere and regular content.',
                },
                {
                    title: 'We consider languages and local context',
                    text: 'For many guests, RU / EN / KA descriptions, clear dish names, location and practical details influence the decision.',
                },
                {
                    title: 'We work in Tbilisi and across Georgia',
                    text: 'We film restaurants, cafes, bars, terraces, gastro projects, hotel restaurants and tourism locations.',
                },
            ],
        },
        pricingHeading: 'Restaurant packages',
        pricingTagline:
            'The final quote depends on dishes, zones, formats, languages, location, team participation and preparation volume.',
        pricingPlans: [
            {
                ...restaurantsBase.data.pricingPlans[0],
                title: 'Menu Pack',
                price: 'custom quote',
                subtitle: 'Basic packaging for dishes, drinks or a seasonal menu',
                features: [
                    'dish and drink photos',
                    'short videos or cover assets',
                    'descriptions for menu or delivery',
                    'file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...restaurantsBase.data.pricingPlans[1],
                title: 'Reels & Social Pack',
                price: 'custom quote',
                subtitle: 'For Instagram, TikTok, Shorts and regular publishing',
                features: [
                    'Reels / Shorts',
                    'shooting plating, team and atmosphere',
                    'subtitles or short captions',
                    'assets for several channels',
                ],
                buttonText: 'Discuss This Tier →',
                featured: true,
            },
            {
                ...restaurantsBase.data.pricingPlans[2],
                title: 'Restaurant Space Pack',
                price: 'custom quote',
                subtitle: 'For the dining room, terrace, banquet area, facade and location',
                features: [
                    'interior photo and video',
                    '360° tour if needed',
                    'drone filming if location matters',
                    'assets for the website and messengers',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                ...restaurantsBase.data.pricingPlans[3],
                title: 'Monthly Content Pack',
                price: 'custom quote',
                subtitle: 'A full package for a month of publishing, launch or seasonal campaign',
                features: [
                    'photos, Reels, video, AI cards or copy depending on the task',
                    'assets for Instagram, Wolt, Google Maps, website and ads',
                    'structured file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'What affects the final quote',
            items: [
                'number of dishes, drinks, zones, seating scenarios and formats',
                'Reels, 360° tour, drone filming, AI cards or delivery versions',
                'team, kitchen, terrace, evening atmosphere or event shooting',
                'menu descriptions, RU / EN / KA localization and adaptation for Wolt, website or Google Maps',
            ],
            note:
                'The final price depends on the menu, number of zones, required formats, languages, location and restaurant preparation.',
        },
        processHeading: 'How the work goes',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We clarify the restaurant format, audience, publishing channels, menu, season, tasks and required materials.',
            },
            {
                number: '02',
                title: 'Format selection',
                description:
                    'We decide what is needed now: dishes, Reels, interior, drone, 360° tour, AI cards or a full content pack.',
            },
            {
                number: '03',
                title: 'Shoot preparation',
                description:
                    'We agree on dishes, plating, dining room, light, terrace, team, guests in frame and details that matter.',
            },
            {
                number: '04',
                title: 'Production',
                description:
                    'We film dishes, space, process, team and atmosphere. If needed, we add drone, 360° or AI visuals.',
            },
            {
                number: '05',
                title: 'Packaging and delivery',
                description:
                    'We prepare files, descriptions, subtitles and channel-ready formats, then deliver materials in a clear structure.',
            },
        ],
        conditionsNote: {
            title: 'What to prepare before the shoot',
            text:
                'Before a restaurant shoot, dishes, zones and publishing channels should be gathered into one clear plan so time is not lost on location.',
            items: [
                'agree on dishes, drinks, dining room, terrace, facade, team and formats that must be included',
                'prepare plates, serving, light, clean surfaces and the order in which dishes will be presented',
                'define publishing channels in advance: menu, Wolt, Google Maps, Instagram, website, ads or messengers',
            ],
            details:
                'For food shooting, dish composition, names and menu limits should be confirmed by the restaurant before final delivery.',
        },
        faqHeading: 'FAQ',
        faqItems: [
            {
                question: 'Which services are useful for a restaurant?',
                answer:
                    'Restaurants usually need a mix of dish shooting, Reels, interior content, 360° tour, location drone filming, AI menu cards, delivery packaging and a monthly content pack. The exact set depends on the task and channels.',
            },
            {
                question: 'What should we shoot first: dishes, interior or Reels?',
                answer:
                    'If menu or delivery visuals are weak, start with dishes. If guests cannot understand the atmosphere, film the interior and dining room. If social media needs regular touchpoints, start with Reels or a monthly content pack.',
            },
            {
                question: 'Do you shoot dishes for menus and delivery?',
                answer:
                    'Yes. We shoot dishes, drinks, sets, seasonal items and delivery menus with a consistent visual style, required crops and publishing channels in mind.',
            },
            {
                question: 'Can you shoot Reels for a restaurant?',
                answer:
                    'Yes. We film vertical videos about plating, kitchen, team, terrace, evening service, new dishes and seasonal offers.',
            },
            {
                question: 'Is a 360° tour useful for a restaurant?',
                answer:
                    'Yes, when it is important to show the dining room, terrace, banquet area or hotel restaurant. The tour opens by link and helps guests understand the space in advance.',
            },
            {
                question: 'Does every restaurant need drone filming?',
                answer:
                    'No. Drone filming is useful when terrace, rooftop, courtyard, view, facade, location or surroundings matter.',
            },
            {
                question: 'Do you make AI menu cards?',
                answer:
                    'Yes. We can prepare AI visuals, dish cards, banners, delivery covers and item descriptions. Final ingredients and dish names are checked with the client.',
            },
            {
                question: 'Can materials be prepared for Wolt and Google Maps?',
                answer:
                    'Yes. We prepare dish photos, covers, facade, dining room, menu, short assets and files that can be adapted for Wolt, Google Maps, the website and social media.',
            },
            {
                question: 'Do you write dish descriptions in Russian, English and Georgian?',
                answer:
                    'Yes. We can prepare RU / EN / KA descriptions for menus, websites, delivery and ad materials. Ingredients, allergens and dish details should be confirmed by the restaurant.',
            },
            {
                question: 'Can you shoot a hotel restaurant?',
                answer:
                    'Yes. For hotel restaurants, we usually connect dishes, interior, breakfast, bar, terrace, room service and assets that support the hotel page.',
            },
            {
                question: 'What should be prepared before the shoot?',
                answer:
                    'We need the dish and zone list, priority channels, plating scenario, clean tableware, access to the dining room or terrace, team agreement and a clear output list.',
            },
            {
                question: 'How much does restaurant content cost?',
                answer:
                    'The quote depends on dishes, zones, formats, languages, locations, drone, 360° tour, AI packaging and preparation volume.',
            },
            {
                question: 'Do you deliver files for self-publishing?',
                answer:
                    'Yes. We deliver materials in a cloud folder and can recommend where each format should be used: Instagram, Wolt, Google Maps, website, ads or messengers.',
            },
            {
                question: 'Do you work across Georgia?',
                answer:
                    'Yes. We work in Tbilisi and across Georgia. Travel logistics and shooting format are discussed around the restaurant task.',
            },
        ],
        contact: {
            title: 'Need content for your restaurant?',
            description:
                'Tell us your format: restaurant, cafe, bar, terrace, delivery, hotel restaurant or new launch. We will suggest where to start.',
            taskPlaceholder:
                'For example: we need to refresh the menu, shoot Reels, show the terrace and prepare materials for Wolt and Google Maps.',
            serviceOptions: [
                'Restaurants',
                'Food shoot',
                'Reels',
                'Interior',
                '360° tour',
                'Drone filming',
                'AI cards',
                'Delivery pack',
                'Monthly content pack',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['restaurants'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const tourismServiceEnConfig = {
    page: {
        ...tourismBase.page,
        path: '/tourism-service/en',
        hero: {
            ...tourismBase.page.hero,
            eyebrow: 'TRAVEL CONTENT',
            h1: 'Tourism and Route Content in Georgia',
            intro:
                'Video, aerial filming, Reels, 360° tours and AI-assisted offer packaging for tours, routes, glampings, activities and travel projects in Georgia.',
            primaryCtaLabel: 'Book a Shoot',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View Packages',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Formats for tourism',
            badges: ['Tours', 'Routes', 'Glampings', 'Locations', 'Reels', 'AI Packaging'],
            location: 'Georgia',
        },
        googleTrust: {
            ...tourismBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Drone footage for routes, locations, mountains, bases and travel properties.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive property viewing of locations, glampings and hospitality spaces before arrival.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels',
                description: 'Short vertical videos for Instagram, TikTok and YouTube Shorts.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI visualization',
                description: 'AI packaging, descriptions, cards and multilingual materials for tour offers.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotels',
                description: 'Content for accommodation, rooms, grounds and guest hospitality experience.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurants',
                description: 'Content for gastro spots, wine tastings and culinary travel stops.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate',
                description: 'Visual packaging of properties, spaces and commercial locations.',
            },
        ],
        seo: {
            ...tourismBase.page.seo,
            title: 'Tourism Content in Georgia | Breus Media',
            description:
                'Video, aerial filming, Reels, 360° tours and AI offer packaging for tours, routes, glampings and travel projects in Georgia.',
            schemaServiceName: 'Tourism Content in Georgia',
            schemaServiceType: 'Tourism content production and visual packaging',
        },
    },
    data: {
        ...tourismBase.data,
        heroDisplayTitle: 'Tourism and\nRoute Content\nin Georgia',
        heroDesktopDisplayTitle: 'Tourism and Route Content\nin Georgia',
        heroMobileCompact: true,
        heroSubtitle:
            'Video, aerial filming, Reels, 360° tours and AI-assisted offer packaging for tours, routes, glampings, activities and travel projects in Georgia.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'A tour is sold before the trip begins. Travelers want to feel the route in advance: the road, scenic views, atmosphere, comfort level, guide, vehicle, food, stopover points and the final impression.',
            'We help build visual packaging for travel products across websites, Viator, GetYourGuide, Instagram, TikTok, YouTube Shorts, advertising and messengers.',
            'The format is matched to your goal: showcase a route, clarify the itinerary, package a glamping site, film landscapes from above, produce Reels or prepare multilingual descriptions.',
        ],
        heroCards: [
            {
                slug: 'video-tura-marshruta',
                title: 'Tour or route video',
                image: tourismHeroCards[0]?.image ?? tourismServices[0].image,
                tags: 'route · guide · experience',
                shortText: 'A short film about the route: road, views, guide, stops, emotions and final impression.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'aerosemka-lokacii',
                title: 'Location aerial filming',
                image: tourismHeroCards[1]?.image ?? tourismServices[1].image,
                tags: 'drone · views · location',
                shortText: 'Drone showcases scale, road, mountains, valleys, scenic viewpoints, base or travel site.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'reels-dlya-turproekta',
                title: 'Reels for travel projects',
                image: tourismHeroCards[2]?.image ?? tourismServices[2].image,
                tags: 'Reels · Instagram · TikTok',
                shortText: 'Vertical videos for Instagram, TikTok and Shorts: route, emotions, viewpoints, guide and atmosphere.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'kontent-dlya-glempinga',
                title: 'Glamping content',
                image: tourismHeroCards[3]?.image ?? tourismServices[3].image,
                tags: 'glamping · base · retreat',
                shortText: 'Cabins, views, territory, access road, evening atmosphere, details and guest experience.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'ai-upakovka-predlozheniy',
                title: 'AI offer packaging',
                image: tourismHeroCards[4]?.image ?? tourismServices[4].image,
                tags: 'AI · copy · RU/EN/KA',
                shortText: 'Tour structure, cards, texts, FAQ and descriptions in RU / EN / KA.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: '360-tury-lokaciy',
                title: '360° location tours',
                image: tourismHeroCards[5]?.image ?? tourismServices[5].image,
                tags: '360° · location · pre-visit',
                shortText: 'Interactive walkthrough of base, glamping, retreat, hall, route or point of interest.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Tourism',
            'routes',
            'excursions',
            'locations',
            'glampings',
            'tours',
            'aerial filming',
            'Reels',
            '360° tours',
            'AI packaging',
            'Viator',
            'GetYourGuide',
            'Instagram',
            'website',
            'guides',
            'mountains',
            'wine tours',
            'activities',
            'Georgia',
        ],
        tickerItems: [
            'Tourism',
            'routes',
            'excursions',
            'locations',
            'glampings',
            'tours',
            'aerial filming',
            'Reels',
            '360° tours',
            'AI packaging',
            'Viator',
            'GetYourGuide',
            'Instagram',
            'website',
            'guides',
            'mountains',
            'wine tours',
            'activities',
            'Georgia',
        ],
        servicesHeading: 'Content formats for tourism',
        servicesSubtitle:
            'Different travel products require tailored assets: for websites, Viator, GetYourGuide, Instagram, ads, messengers and partner pitches.',
        services: [
            {
                ...tourismServices[0],
                title: 'Tour or route video',
                category: 'route · guide · experience',
                description:
                    'Scripted film about the itinerary: road, guide, viewpoints, stops, food, transport, people and final impressions.',
                price: 'from 450 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[1],
                title: 'Location aerial filming',
                category: 'drone · views · location',
                description:
                    'Drone showcases scale, road, mountains, valleys, scenic viewpoints, base, territory or travel property.',
                price: 'from 300 ₾',
                primaryHref: '/drone-hotels-tourism/en',
                primaryCtaLabel: 'Explore service',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[2],
                title: 'Reels & Shorts for tourism',
                category: 'Reels · Instagram · TikTok',
                description:
                    'Dynamic vertical videos: route highlights, emotions, guide, stop points, road vistas and travel moments.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[3],
                title: 'Glamping or base content',
                category: 'glamping · retreat · stay',
                description:
                    'Cabins, panoramic views, territory, access road, evening atmosphere, lodging details and leisure experience.',
                price: 'from 500 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[4],
                title: 'Excursion promo video',
                category: 'program · highlights · emotions',
                description:
                    'Concise program showcase: who the tour suits, what is included, key sights and itinerary pace.',
                price: 'from 400 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[5],
                title: 'AI travel offer packaging',
                category: 'AI · copy · RU/EN/KA',
                description:
                    'Tour cards, descriptions, FAQ, offer structure and localized copywriting in RU / EN / KA.',
                price: 'from 300 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[6],
                title: '360° location tours',
                category: '360° · location · pre-visit',
                description:
                    'Interactive walkthrough of base, glamping, tourism facility, hall, route or point of interest.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...tourismServices[7],
                title: 'Seasonal content pack',
                category: 'season · launch · campaign',
                description:
                    'Complete package of photos, Reels, video, text copy and covers for season launch or ad campaigns.',
                price: 'from 550 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
        ],
        statsHeading: 'Tourism in numbers',
        statsTagline:
            'Market benchmarks show general context, not guaranteed bookings or sales volume for a specific itinerary.',
        statsCards: [
            {
                value: 'Before booking',
                label: 'guests explore routes in advance',
                description:
                    'Video, Reels, photos and clear program details build trust before online payment or inquiry.',
                sourceLabel: 'market context',
            },
            {
                value: '1 route',
                label: 'can power website, Reels and ads',
                description:
                    'A single shoot produces long-form video, vertical cuts, photo assets, covers and ad text.',
                sourceLabel: 'content reuse',
            },
            {
                value: 'RU / EN / KA',
                label: 'multilingual guest descriptions',
                description:
                    'Localized descriptions engage local residents, expats and international tourists.',
                sourceLabel: 'localization context',
            },
            {
                value: '4 channels',
                label: 'Website, Viator, GetYourGuide, Instagram',
                description:
                    'One content pack is adapted across all primary touchpoints where travelers discover tours.',
                sourceLabel: 'content reuse',
            },
        ],
        midCta: {
            heading: 'Not sure what your travel project needs first?',
            text:
                'Tell us what you offer: guided tour, excursion, glamping, wine trip, outdoor activity, retreat or scenic location. We will recommend the optimal starting format: video, drone, Reels, 360°, AI copy or content pack.',
            buttonText: 'Discuss format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Not just scenic shots, but complete route packaging',
            paragraphs: [
                'Travelers do not buy a point on a map — they buy anticipation: the road, views, comfort, safety, guide personality, food, route tempo and memories.',
                'Tourism media production must not merely show that Georgia is beautiful, but explain the experience: where guests go, what they see, who the tour suits and what memories they will take home.',
                'We produce assets tailored for real platforms: websites, Viator, GetYourGuide, Instagram, TikTok, YouTube Shorts, advertising and travel partner pitches.',
            ],
        },
        painSolutions: {
            heading: 'Challenges solved by tourism content',
            subtitle:
                'High-quality visual production helps travelers instantly grasp the route, comfort level and reasons to choose your offer.',
            items: [
                {
                    pain: 'Hard to visualize an itinerary from plain text',
                    solution:
                        'Video and Reels show the road, stops, vistas, guide, food, participants and overall atmosphere.',
                },
                {
                    pain: 'Standard photos fail to explain the program',
                    solution:
                        'A structured content pack clarifies what is included, who it suits, stop points and pace.',
                },
                {
                    pain: 'Location looks like "just another scenic spot"',
                    solution:
                        'Drone footage, video walk-through and clear copy show scale, access route, surroundings and details.',
                },
                {
                    pain: 'Travelers repeatedly ask the same basic questions',
                    solution:
                        'FAQs, route cards, descriptions and short videos answer questions about road conditions, timing and prep.',
                },
                {
                    pain: 'Social media posting is irregular and chaotic',
                    solution:
                        'A backlog of Reels, photos, covers and captions provides materials for consistent posting and ad testing.',
                },
                {
                    pain: 'Need fresh assets for season launch or campaign',
                    solution:
                        'Filming, Reels, drone aerials and copy are packaged specifically for a new season or promotional push.',
                },
            ],
        },
        earnLose: {
            heading: 'Benefits for your travel project',
            earnTitle: 'Greater clarity for travelers',
            earnItems: [
                'Faster communication of the route, tour format and experience.',
                'Dedicated assets for website, Viator, GetYourGuide, Instagram and advertising.',
                'Ability to showcase the journey before booking instead of relying only on text.',
            ],
            loseTitle: 'Less operational friction',
            loseItems: [
                'Fewer repetitive questions about route difficulty, transport and preparation.',
                'Fewer unstructured photos without clear narrative flow.',
                'Lower risk of mismatched traveler expectations.',
            ],
        },
        deliverables: {
            heading: 'What is included in the production',
            items: [
                'Tour or route showcase video',
                'Drone aerial photos and 4K footage',
                'Vertical Reels / Shorts / TikTok cuts',
                'Photos of route, locations, details and team',
                '360° virtual tour or interactive link',
                'Route descriptions, tour cards and FAQ in RU / EN / KA',
                'Cover images and assets for Viator / GetYourGuide / website',
                'Organized files delivered via cloud storage',
                'Usage recommendations for each channel',
            ],
        },
        whyUs: {
            heading: 'Why travel projects choose Breus Media',
            subtitle:
                'We focus on how travelers make decisions: route clarity, expectations, trust, visual appeal, descriptions and transparent terms.',
            items: [
                {
                    title: 'We present the route as a lived experience',
                    text:
                        'We film not just pretty viewpoints, but the entire journey: road, guide, vistas, stops, food, people and emotions.',
                },
                {
                    title: 'Formats tailored to the specific product',
                    text:
                        'Excursions, glampings, wine tours, mountain retreats and active sports require distinct visual pacing.',
                },
                {
                    title: 'Understanding tourism distribution channels',
                    text:
                        'Websites, Viator, GetYourGuide, Instagram, TikTok, Shorts and messengers demand tailored aspect ratios and copy.',
                },
                {
                    title: 'Combining video, drone, Reels, 360° and AI copy',
                    text:
                        'One comprehensive package where each asset solves its goal: trust, overview, atmosphere and regular engagement.',
                },
                {
                    title: 'Multilingual and local market expertise',
                    text:
                        'Descriptions in RU / EN / KA, clear conditions, route logistics and preparation details for diverse travelers.',
                },
                {
                    title: 'Operating across Tbilisi and all Georgia',
                    text:
                        'We film urban routes, natural parks, wine valleys, glamping sites, retreats and travel expeditions.',
                },
            ],
        },
        pricingHeading: 'Tourism packages',
        pricingTagline:
            'Rates depend on route distance, locations, shoot duration, chosen formats, languages, season and preparation scope.',
        pricingPlans: [
            {
                title: 'Tour Promo Pack',
                price: 'from 300 ₾',
                subtitle: 'Essential packaging for a tour, excursion or single activity',
                features: [
                    'Short promotional video or Reels',
                    'Key viewpoint and route photos',
                    'Offer description copy',
                    'Organized file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Route Content Pack',
                price: 'from 450 ₾',
                subtitle: 'For routes, journeys, wine tours, guides and travel products',
                features: [
                    'Full route showcase video',
                    'Series of vertical Reels / Shorts',
                    'High-resolution photos & covers',
                    'Descriptions and FAQ copy',
                    'Assets formatted for website & social media',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Location & Drone Pack',
                price: 'from 400 ₾',
                subtitle: 'For scenic spots, glampings, retreat bases and tourist sites',
                features: [
                    'Aerial drone filming of the territory',
                    'Ground photos and videos of cabins/facilities',
                    '360° virtual tour if required',
                    'Assets ready for website and booking channels',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Season Content Pack',
                price: 'from 550 ₾',
                subtitle: 'Comprehensive package for seasonal launch or ad campaign',
                features: [
                    'Video, Reels, photos, drone and 360° assets',
                    'Localized descriptions in RU / EN / KA',
                    'Assets for website, Viator, GetYourGuide & ads',
                    'Structured cloud archive delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'Optional add-ons for travel packages',
            items: [
                'Additional route stops, remote locations, on-camera guide or actors',
                'Drone aerials, 360° virtual tour, extended Reels series or seasonal cuts',
                'Tour descriptions, FAQ, itinerary cards and translation into RU / EN / KA',
                'Custom versions for website, Viator, GetYourGuide, Instagram & paid ads',
            ],
            note:
                'Final price is confirmed based on route complexity, locations, travel logistics, formats and languages.',
        },
        processHeading: 'How we work',
        processSteps: [
            {
                number: '01',
                title: 'Brief',
                description:
                    'We clarify your travel product, target audience, itinerary, distribution channels, season and required assets.',
            },
            {
                number: '02',
                title: 'Format selection',
                description:
                    'We determine what is needed now: route video, Reels, drone, 360° tour, AI descriptions or full content pack.',
            },
            {
                number: '03',
                title: 'Itinerary planning',
                description:
                    'We agree on viewpoints, timing, road logistics, guide, transport, key vistas and important details to highlight.',
            },
            {
                number: '04',
                title: 'Filming / production',
                description:
                    'We capture the route, locations, people, movement and atmosphere. Add drone, 360° or AI copy as needed.',
            },
            {
                number: '05',
                title: 'Packaging and delivery',
                description:
                    'We edit files, add subtitles, format covers and organize assets in a clean cloud archive ready for publication.',
            },
        ],
        conditionsNote: {
            title: 'Preparation before filming',
            text:
                'For tourism projects, we organize the itinerary, access permissions and facts in advance so visual assets match the real tour experience.',
            items: [
                'Confirm itinerary, stopover points, transport, guide, location access and filming permissions',
                'Identify key emotions, scenic vistas, service amenities and practical conditions to show before booking',
                'Prepare factual details for copy: itinerary, duration, inclusions, languages, seasonality and guidelines',
            ],
            details:
                'For remote routes, timing and backup points should be planned in advance as weather and road conditions can affect shooting plans.',
        },
        faqHeading: 'Frequently asked questions',
        faqItems: [
            {
                question: 'What content formats suit a travel project best?',
                answer:
                    'Most frequently: route videos, aerial drone filming, Reels, 360° tours, photos, AI descriptions, tour cards, FAQ and seasonal content packs. The exact mix depends on your distribution channels and guest questions.',
            },
            {
                question: 'Which is better: route video, drone or Reels?',
                answer:
                    'Route videos best communicate the itinerary flow and mood, drone aerials show scale and landscape context, and Reels provide regular touchpoints on social media. Often they complement each other.',
            },
            {
                question: 'Do you create content for Viator and GetYourGuide?',
                answer:
                    'Yes. We prepare photos, videos, covers, descriptions, FAQs and offer structures optimized for websites, Viator, GetYourGuide, Instagram and advertising.',
            },
            {
                question: 'Can a tour route be filmed in a single day?',
                answer:
                    'Often yes, if the route is compact, stop points are pre-agreed and logistics are clear. For multi-day or remote expeditions, scope is agreed individually.',
            },
            {
                question: 'Is drone filming suitable for tourism?',
                answer:
                    'Yes, especially to show scale, mountain passes, valleys, retreat territory and scenic viewpoints. Drone footage complements ground shooting with an expansive sense of place.',
            },
            {
                question: 'Do you produce Reels for tours and activities?',
                answer:
                    'Yes. Reels can highlight the journey, guide personality, road views, food stops, emotions and short answers to common traveler questions.',
            },
            {
                question: 'Is a 360° tour useful for glamping or retreats?',
                answer:
                    'Yes, when guests want to understand the space beforehand: cabin interiors, property grounds, panorama views, dining areas and facilities.',
            },
            {
                question: 'Do you write tour descriptions in English, Russian and Georgian?',
                answer:
                    'Yes. We can prepare structured tour descriptions, FAQs and cards in RU / EN / KA with editorial verification of facts and conditions.',
            },
            {
                question: 'Can we include the guide and guests on camera?',
                answer:
                    'Yes. Guides and participants bring life and authentic trust to the video. We align in advance on who is appearing and obtain necessary consent.',
            },
            {
                question: 'What should be prepared before filming a route?',
                answer:
                    'The detailed itinerary, list of key viewpoints, audience profile, transport, guide contact, location access and any specific guidelines.',
            },
            {
                question: 'Can we order a seasonal content pack?',
                answer:
                    'Yes. A content pack can be tailored for a season launch, new tour introduction, ad campaign or annual visual update.',
            },
            {
                question: 'How much does tourism content production cost?',
                answer:
                    'Pricing is based on route distance, locations, duration, chosen formats, languages and logistics. Packages start from 300 ₾.',
            },
        ],
        contact: {
            title: 'Need content for your travel project?',
            description:
                'Tell us what you offer: guided tour, excursion, glamping, wine trip, activity, retreat or scenic location. We will suggest where to start.',
            taskPlaceholder:
                'For example: we want to shoot a route video, create 5 Reels for Instagram, capture drone views and prepare Viator descriptions.',
            serviceOptions: [
                'Tourism',
                'Route video',
                'Drone filming',
                'Reels',
                'Glamping content',
                '360° tour',
                'AI descriptions',
                'Seasonal pack',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['tourism'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const clinicsServiceEnConfig = {
    page: {
        ...clinicsBase.page,
        path: '/clinics-service/en',
        hero: {
            ...clinicsBase.page.hero,
            eyebrow: 'MEDICAL CONTENT',
            h1: 'Content for Clinics and Medical Centers in Tbilisi',
            intro:
                'Video, Reels, photography, 360° tours and AI descriptions for clinics, dentistry, aesthetic centers, beauty and wellness practices: based in Tbilisi, available across Batumi and all Georgia.',
            primaryCtaLabel: 'Book a Shoot',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View Packages',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Formats for medical & beauty',
            badges: ['Clinics', 'Dentistry', 'Beauty', 'Wellness', 'Google Maps', 'Reels'],
            location: 'Based in Tbilisi, operating across Georgia',
        },
        googleTrust: {
            ...clinicsBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Drone formats for clinic buildings, surroundings and external navigation.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive virtual tours for websites, Google Maps and messengers.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels for business',
                description: 'Vertical videos for Instagram, TikTok and YouTube Shorts.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI descriptions',
                description: 'Structure, FAQ and careful multilingual localization for medical services.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotels',
                description: 'Visual packaging of spaces and hospitality service.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurants',
                description: 'Content for dining rooms, kitchen, team and social media.',
            },
            {
                href: '/tourism-service/en',
                title: 'Tourism',
                description: 'Content for routes, locations and guest experiences.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate',
                description: 'Photo, video, 360° tours and AI staging for properties.',
            },
        ],
        seo: {
            ...clinicsBase.page.seo,
            title: 'Clinic Content in Tbilisi | Breus Media',
            description:
                'Video, Reels, photography, 360° tours and AI descriptions for clinics, dentistry, aesthetic and wellness practices in Tbilisi and Georgia.',
            schemaServiceName: 'Clinic Content in Tbilisi',
            schemaServiceType: 'Clinic content production and AI descriptions',
        },
    },
    data: {
        ...clinicsBase.data,
        heroDisplayTitle: 'Content for Clinics\nand Medical Centers\nin Tbilisi',
        heroDesktopDisplayTitle: 'Content for Clinics and Medical Centers\nin Tbilisi',
        heroMobileCompact: true,
        heroSubtitle:
            'Video, Reels, photography, 360° tours and AI descriptions for clinics, dentistry, aesthetic centers, beauty and wellness practices: based in Tbilisi, available across Batumi and all Georgia.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'Patients choose a clinic not merely from a list of services. It is essential for them to understand the space, team, navigation, bedside manner and first visit expectations beforehand.',
            'We help package clinic visual media for websites, Google Maps, Instagram, TikTok, YouTube Shorts, advertising, messengers and patient guides.',
            'The format is matched to your objective: showcase reception and consultation rooms, explain a procedure, film doctor profiles, produce Reels, create a 360° tour or refresh website assets.',
        ],
        heroCards: [
            {
                slug: 'video-kliniki',
                title: 'Clinic showcase video',
                image: clinicsHeroCards[0]?.image ?? clinicsServices[0].image,
                tags: 'clinic · space · team',
                shortText: 'Showcases reception, treatment rooms, team, patient pathway and first visit atmosphere.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'reels-dlya-vracha',
                title: 'Doctor & expert Reels',
                image: clinicsHeroCards[1]?.image ?? clinicsServices[1].image,
                tags: 'Reels · doctor · expert',
                shortText: 'Short vertical videos: patient Q&As, procedure explanations, doctor introduction and trust.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'tur-360-kliniki',
                title: '360° clinic tour',
                image: clinicsHeroCards[2]?.image ?? clinicsServices[2].image,
                tags: '360° · room · pre-visit',
                shortText: 'Patients can explore reception, corridors, consultation rooms and internal clinic navigation.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'foto-prostranstva',
                title: 'Space photography',
                image: clinicsHeroCards[3]?.image ?? clinicsServices[3].image,
                tags: 'photo · Google Maps · web',
                shortText: 'Reception, sterile rooms, waiting lounge, equipment, details and team for website and Google Maps.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'kontent-dlya-uslug',
                title: 'Procedure explanations',
                image: clinicsHeroCards[4]?.image ?? clinicsServices[4].image,
                tags: 'services · clarity · FAQ',
                shortText: 'Accurate, empathetic videos and text copy explaining procedures without medical hype.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'ai-opisaniya-faq',
                title: 'AI descriptions & FAQ',
                image: clinicsHeroCards[5]?.image ?? clinicsServices[5].image,
                tags: 'AI · RU/EN/KA · copy',
                shortText: 'Service structure, FAQs and texts in RU / EN / KA with editorial polish and careful wording.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Clinics',
            'dentistry',
            'medical centers',
            'beauty',
            'wellness',
            'cosmetology',
            'Reels',
            '360° tours',
            'clinic photos',
            'doctor video',
            'Google Maps',
            'clinic website',
            'Instagram',
            'TikTok',
            'FAQ',
            'AI descriptions',
            'RU',
            'EN',
            'KA',
            'Tbilisi',
            'Georgia',
        ],
        servicesHeading: 'Content formats for clinics',
        servicesSubtitle:
            'Different healthcare practices require tailored media: for websites, Google Maps, Instagram, ad campaigns, messengers and patient reassurance before their visit.',
        services: [
            {
                ...clinicsServices[0],
                title: 'Clinic showcase video',
                category: 'clinic · space · team',
                description:
                    'Shows the reception, consulting rooms, team, patient pathway and calm atmosphere of the first visit.',
                price: 'from 450 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...clinicsServices[1],
                title: 'Doctor & expert Reels',
                category: 'Reels · doctor · expert',
                description:
                    'Short vertical videos: answering common questions, explaining procedures and introducing doctors.',
                price: 'from 400 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...clinicsServices[2],
                title: '360° clinic tour',
                category: '360° · room · pre-visit',
                description:
                    'Interactive walkthrough of reception, corridors, consultation rooms and clinic layout before visiting.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...clinicsServices[3],
                title: 'Space photography',
                category: 'photo · Google Maps · web',
                description:
                    'Reception, treatment rooms, waiting area, modern equipment, details and team portraits for website and Google Maps.',
                price: 'from 300 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...clinicsServices[4],
                title: 'Procedure explanations',
                category: 'services · clarity · FAQ',
                description:
                    'Careful, reassuring videos and texts explaining treatments without pressure or medical exaggeration.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...clinicsServices[5],
                title: 'AI descriptions and FAQ',
                category: 'AI · RU/EN/KA · copy',
                description:
                    'Service structure, FAQs and texts in RU / EN / KA with editorial verification and compliant phrasing.',
                price: 'from 250 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
        ],
        statsHeading: 'Clinics in numbers',
        statsTagline:
            'Market benchmarks show general context, not guaranteed appointment counts or medical outcomes for a specific clinic.',
        statsCards: [
            {
                value: 'Before visit',
                label: 'patients research clinics online',
                description:
                    'Website, Google Maps, photos, videos and social media shape patient trust before booking an appointment.',
                sourceLabel: 'market context',
            },
            {
                value: '1 link',
                label: 'for website, messenger and consults',
                description:
                    'A video or 360° tour link gives patients immediate visual clarity without long explanations.',
                sourceLabel: 'content reuse',
            },
            {
                value: 'RU / EN / KA',
                label: 'multilingual patient communication',
                description:
                    'Accurate multilingual copy supports local patients, expats and medical tourism visitors.',
                sourceLabel: 'localization context',
            },
            {
                value: 'Google Maps',
                label: 'key local discovery channel',
                description:
                    'High-quality interior photos and 360° tours increase visibility in local map searches.',
                sourceLabel: 'local SEO',
            },
        ],
        midCta: {
            heading: 'Not sure what your clinic needs first?',
            text:
                'Tell us your specialty: dental clinic, aesthetic medicine, wellness, dermatology, multi-profile medical center or private doctor. We will suggest the best starting point: photo, video, Reels, 360° tour or Google Maps package.',
            buttonText: 'Discuss format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Building calm patient trust before the first appointment',
            paragraphs: [
                'Medical decisions are rooted in trust. Patients want to know where they will arrive, who will treat them, how clean and modern the facility is and what to expect during their visit.',
                'Content for clinics must communicate calm professionalism, transparency and cleanliness without hype, aggressive marketing or exaggerated medical promises.',
                'We produce materials tailored for practical patient channels: Google Maps, official website, Instagram, messengers and patient onboarding guides.',
            ],
        },
        painSolutions: {
            heading: 'Challenges solved by clinic content',
            subtitle:
                'Professional media production reduces patient anxiety, showcases equipment quality and elevates clinic reputation.',
            items: [
                {
                    pain: 'Patients feel anxiety before their first appointment',
                    solution:
                        'Videos of reception, doctors and consultation rooms create familiarity and reduce stress before the visit.',
                },
                {
                    pain: 'Google Maps profile lacks quality photos',
                    solution:
                        'A dedicated photoshoot of interior, equipment, exterior and team elevates the clinic Google profile.',
                },
                {
                    pain: 'Patients ask repetitive procedure questions',
                    solution:
                        'Short doctor Reels and FAQ cards explain procedure steps, duration and preparation in advance.',
                },
                {
                    pain: 'Modern equipment is not visibly highlighted',
                    solution:
                        'Clean, high-resolution photography and video focus on sterile conditions, technology and patient comfort.',
                },
                {
                    pain: 'Need multilingual content for international patients',
                    solution:
                        'Structured descriptions and subtitles in RU, EN and KA facilitate clear communication with expat and international clients.',
                },
                {
                    pain: 'Social media feels generic and disconnected',
                    solution:
                        'A regular series of expert doctor Reels and clinic stories builds an authentic, trusted medical brand.',
                },
            ],
        },
        earnLose: {
            heading: 'Benefits for medical and beauty practices',
            earnTitle: 'Greater clarity for patients',
            earnItems: [
                'Faster communication of clinic space, standards and doctor expertise.',
                'Dedicated visual assets for website, Google Maps, Instagram and messengers.',
                'Ability to demonstrate clinic standards and equipment before the consultation.',
            ],
            loseTitle: 'Reduced patient uncertainty',
            loseItems: [
                'Fewer repetitive questions about clinic navigation and procedure basics.',
                'Lower anxiety for first-time visitors.',
                'Reduced reliance on low-quality smartphone snapshots.',
            ],
        },
        deliverables: {
            heading: 'What is included in the production',
            items: [
                'Clinic overview and atmosphere video',
                'Doctor Q&A and procedure Reels / Shorts',
                '360° interactive virtual tour of rooms and reception',
                'High-resolution interior, equipment and team photography',
                'Service descriptions, FAQ and multilingual copy in RU / EN / KA',
                'Google Maps and website optimized asset packages',
                'Organized cloud storage delivery',
                'Distribution guidelines for staff and marketing',
            ],
        },
        whyUs: {
            heading: 'Why healthcare practices choose Breus Media',
            subtitle:
                'We focus on patient decision factors: clarity, calm tone, clinic environment, doctor expertise, team warmth and reassuring first impressions.',
            items: [
                {
                    title: 'Respectful tone without misleading claims',
                    text:
                        'We never make exaggerated medical promises. Content explains space, services and procedures responsibly and clearly.',
                },
                {
                    title: 'Tailored to each medical specialty',
                    text:
                        'Dentistry, aesthetic clinics, wellness centers, diagnostics and private practices require distinct visual pacing.',
                },
                {
                    title: 'Understanding healthcare channels',
                    text:
                        'Websites, Google Maps, Instagram, TikTok, Shorts and messengers demand tailored aspect ratios and compliant messaging.',
                },
                {
                    title: 'Showcasing the entire patient pathway',
                    text:
                        'We film the entrance, reception, waiting lounge, navigation, consultation room, equipment and team interaction.',
                },
                {
                    title: 'Combining video, photo, Reels, 360° and AI copy',
                    text:
                        'A unified package where each format serves its purpose: navigation, trust, procedure explanation and regular posting.',
                },
                {
                    title: 'Operating across Tbilisi and Georgia',
                    text:
                        'We film clinics, dental centers, aesthetic studios, wellness facilities and medical consultation offices.',
                },
            ],
        },
        pricingHeading: 'Clinic packages',
        pricingTagline:
            'Cost depends on the number of treatment rooms, doctors, service directions, formats, languages and preparation scope.',
        pricingPlans: [
            {
                title: 'Clinic Starter Pack',
                price: 'from 350 ₾',
                subtitle: 'Essential packaging for a clinic, treatment room or single specialty',
                features: [
                    'Photography of reception and key rooms',
                    'Short overview video or cover assets',
                    'Service description copy',
                    'Organized file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Doctor & Reels Pack',
                price: 'from 450 ₾',
                subtitle: 'For doctors, specialists and regular expert video content',
                features: [
                    'Series of vertical Reels / Shorts',
                    'Filming doctor, equipment and procedure highlights',
                    'Subtitles and graphic title overlays',
                    'Assets ready for social media posting',
                ],
                buttonText: 'Discuss This Tier →',
                featured: true,
            },
            {
                title: 'Clinic Space Pack',
                price: 'from 400 ₾',
                subtitle: 'For clinics prioritizing space presentation and navigation',
                features: [
                    'Photos and video of reception, rooms & waiting areas',
                    '360° interactive virtual tour',
                    'Optimized assets for website & Google Maps',
                    'Organized file delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Monthly Clinic Content Pack',
                price: 'from 800 ₾',
                subtitle: 'Comprehensive monthly package for consistent clinic visibility',
                features: [
                    'Monthly photos, Reels, procedure videos & FAQs',
                    'Materials for Instagram, Google Maps, website & ads',
                    'Structured cloud archive delivery',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'Key pricing factors',
            items: [
                'Number of treatment rooms, doctors, procedures and formats',
                'Languages: RU / EN / KA and extent of editorial copywriting',
                'Locations, necessity of 360° virtual tour and shoot preparation scope',
            ],
            note:
                'Final quote is confirmed based on room count, team size, formats, languages, 360° tour requirements and logistics.',
        },
        conditionsNote: {
            title: 'Preparation before filming',
            text:
                'Before shooting in a medical facility, we align on patient privacy, permitted areas and compliant messaging.',
            items: [
                'Confirm rooms, reception, entrance, doctors, team, equipment and zones approved for public display',
                'Ensure strict patient privacy: clear shooting windows, designated pathways and no patients in frame without explicit consent',
                'Prepare procedure list, frequent questions, language versions and wording guidelines prior to recording',
            ],
            details:
                'In medical and beauty projects, we avoid exaggerated guarantees: content highlights the environment, care standards and trust.',
        },
        faqHeading: 'Frequently asked questions',
        faqItems: [
            {
                question: 'What content formats are best for a clinic?',
                answer:
                    'Most commonly: space photography, clinic overview video, doctor Q&A Reels, 360° virtual tour, Google Maps package, procedure descriptions and website FAQ.',
            },
            {
                question: 'What should we film first: doctor, space or procedures?',
                answer:
                    'If the goal is Google Maps and website trust, start with space photography and a 360° tour. If the goal is social media inquiries and patient acquisition, start with doctor Q&A Reels.',
            },
            {
                question: 'How do you handle patient privacy during shoots?',
                answer:
                    'Shooting is scheduled during non-operational hours or dedicated time slots without patients present. Any staff appearing on camera sign standard model consent.',
            },
            {
                question: 'Do you create 360° tours for Google Maps?',
                answer:
                    'Yes. We can produce 360° virtual tours for embedding on your website and publishing to your Google Business Profile.',
            },
            {
                question: 'Do you prepare descriptions in English, Russian and Georgian?',
                answer:
                    'Yes. We provide structured service descriptions, FAQs and video subtitles in RU / EN / KA with medical editorial accuracy.',
            },
            {
                question: 'How much does clinic content production cost?',
                answer:
                    'Pricing is based on treatment room count, team size, formats, 360° tour needs and languages. Packages start from 350 ₾.',
            },
        ],
        contact: {
            title: 'Need content for your clinic?',
            description:
                'Tell us your specialty: dentistry, aesthetic center, beauty studio, wellness practice or medical clinic. We will suggest where to start.',
            taskPlaceholder:
                'For example: we want to update Google Maps photos, film 4 Reels with our chief doctor, and create a 360° tour of our treatment rooms.',
            serviceOptions: [
                'Clinics',
                'Dentistry',
                'Doctor Reels',
                'Clinic video',
                '360° tour',
                'Space photography',
                'Google Maps pack',
                'Monthly content',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['clinics'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const autoServiceEnConfig = {
    page: {
        ...autoBase.page,
        path: '/auto-service/en',
        hero: {
            ...autoBase.page.hero,
            eyebrow: 'AUTOMOTIVE CONTENT',
            h1: 'Automotive Media Production in Tbilisi',
            intro:
                'Brand films, car reviews, aerial filming and Reels for dealerships, detailing studios and auto services in Tbilisi. Content for MyAuto, websites and social media.',
            primaryCtaLabel: 'Book a Shoot',
            primaryCtaHref: '#contact',
            secondaryCtaLabel: 'View Packages',
            secondaryCtaHref: '#services',
        },
        trust: {
            heading: 'Automotive formats',
            badges: ['Dealerships', 'Detailing', 'Auto Services', 'Car Reviews', 'Reels', 'MyAuto'],
            location: 'Based in Tbilisi, with regular shoots in Batumi and across Georgia',
        },
        googleTrust: {
            ...autoBase.page.googleTrust,
            heading: 'Google Reputation',
            reviewsText: '50+ reviews',
            mapHint: 'Ratings and reviews come from the Breus Media Google profile.',
        },
        relatedLinks: [
            {
                href: '/drone-service/en',
                title: 'Drone filming',
                description: 'Dynamic aerial shots for dealership lots, racetracks, road drives and outdoor car reviews.',
            },
            {
                href: '/360-tours-service/en',
                title: '360° tours',
                description: 'Interactive 360° viewing of showrooms, auto detailing studios and vehicle interiors.',
            },
            {
                href: '/reels-service/en',
                title: 'Reels for business',
                description: 'Short vertical videos for Instagram, TikTok, YouTube Shorts and auto ads.',
            },
            {
                href: '/ai-visualization-service/en',
                title: 'AI auto listings',
                description: 'AI descriptions, feature checklists and multilingual copy for MyAuto and websites.',
            },
            {
                href: '/real-estate-service/en',
                title: 'Real estate',
                description: 'Content for automotive commercial properties, service centers and showroom spaces.',
            },
            {
                href: '/hotels-service/en',
                title: 'Hotels',
                description: 'Visual packaging of hospitality properties, parking facilities and guest transfers.',
            },
            {
                href: '/restaurants-service/en',
                title: 'Restaurants',
                description: 'Content for drive-ins, gastro locations and automotive event catering.',
            },
        ],
        seo: {
            ...autoBase.page.seo,
            title: 'Automotive Video Production in Tbilisi | Breus Media',
            description:
                'Commercial video, car reviews, aerial filming and Reels for dealerships, detailing and auto services in Tbilisi and Georgia.',
            schemaServiceName: 'Automotive Media Production in Tbilisi',
            schemaServiceType: 'Automotive media production service',
        },
    },
    data: {
        ...autoBase.data,
        heroDisplayTitle: 'Automotive Media\nProduction\nin Tbilisi',
        heroDesktopDisplayTitle: 'Automotive Media Production\nin Tbilisi',
        heroMobileCompact: true,
        heroSubtitle:
            'Brand films, car reviews, aerial filming and Reels for dealerships, detailing studios and auto services in Tbilisi. Content for MyAuto, websites and social media.',
        heroSupportingLine: '',
        heroLeadParagraphs: [
            'Car buyers and service clients judge quality through visuals: exterior reflections, interior cleanliness, exhaust sound, dynamic road shots and dealership reputation on MyAuto, Instagram and Google Maps.',
            'We help package automotive content across primary channels: YouTube reviews, Instagram Reels, TikTok, MyAuto listings, official websites and advertising campaigns.',
            'The format is tailored to your business: film a specific car for sale, showcase a detailing process, create a brand commercial, shoot dynamic drone tracking or prepare monthly social media content.',
        ],
        heroCards: [
            {
                slug: 'car-model-review',
                title: 'Car model review',
                image: autoHeroCards[0]?.image ?? autoServices[0].image,
                tags: 'review · 4K video · sales',
                shortText: 'Complete video review: exterior, interior details, engine bay, road dynamics and options.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'detailing-service-promo',
                title: 'Detailing & service video',
                image: autoHeroCards[1]?.image ?? autoServices[1].image,
                tags: 'detailing · process · quality',
                shortText: 'Process video: polishing, ceramic coating, PPF wrap, dry cleaning and showroom delivery.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'dealership-brand-film',
                title: 'Dealership brand film',
                image: autoHeroCards[2]?.image ?? autoServices[2].image,
                tags: 'dealership · showroom · brand',
                shortText: 'Commercial showcasing the showroom, vehicle fleet, service center, team and customer experience.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'auto-reels',
                title: 'Reels for auto business',
                image: autoHeroCards[3]?.image ?? autoServices[3].image,
                tags: 'Reels · Instagram · TikTok',
                shortText: 'Dynamic vertical videos: car arrivals, sound bites, before/after detailing and stock updates.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: '360-interior-tour',
                title: '360° interior & showroom',
                image: autoHeroCards[4]?.image ?? autoServices[4].image,
                tags: '360° · showroom · interior',
                shortText: 'Interactive 360° view of the showroom, workshop or luxury vehicle cabin.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
            {
                slug: 'ai-auto-listings',
                title: 'AI auto listings & copy',
                image: autoHeroCards[5]?.image ?? autoServices[5].image,
                tags: 'AI · MyAuto · specs',
                shortText: 'Structured car descriptions, spec sheets, FAQ and multilingual text for MyAuto and websites.',
                secondaryCta: { label: 'Discuss project', href: '#contact' },
            },
        ],
        heroPrimaryCtaLabel: 'Discuss Project',
        heroPrimaryCtaHref: '#contact',
        heroSecondaryCtaLabel: 'View Pricing & Tiers →',
        heroSecondaryCtaHref: '#services',
        sectionLinks: [
            { label: 'Services', href: '#services' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Process', href: '#process' },
            { label: 'FAQ', href: '#faq' },
        ],
        marqueeItems: [
            'Auto business',
            'dealerships',
            'detailing',
            'auto service',
            'car reviews',
            'Reels',
            'drone tracking',
            '360° interiors',
            'MyAuto',
            'website',
            'Instagram',
            'TikTok',
            'YouTube',
            'Tbilisi',
            'Georgia',
        ],
        servicesHeading: 'Content formats for automotive business',
        servicesSubtitle:
            'Tailored visual production for car dealerships, detailing studios, auto repair facilities and individual vehicle sales.',
        services: [
            {
                ...autoServices[0],
                title: 'Car model review',
                category: 'review · 4K video · sales',
                description:
                    'Detailed review covering exterior lines, interior options, driving dynamics and sales highlights.',
                price: 'from 450 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...autoServices[1],
                title: 'Detailing & service video',
                category: 'detailing · process · quality',
                description:
                    'High-contrast process video: ceramic coating, PPF wrapping, dry cleaning and final gloss.',
                price: 'from 400 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...autoServices[2],
                title: 'Dealership brand film',
                category: 'dealership · showroom · brand',
                description:
                    'Image commercial presenting the showroom, current inventory, workshop standards and team.',
                price: 'from 600 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...autoServices[3],
                title: 'Reels for auto business',
                category: 'Reels · Instagram · TikTok',
                description:
                    'High-energy vertical videos: new arrivals, exhaust sounds, detailing transformations and test drives.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...autoServices[4],
                title: '360° interior & showroom',
                category: '360° · showroom · interior',
                description:
                    'Interactive walkthrough of the showroom or full 360° panorama of a premium car cabin.',
                price: 'from 350 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
            {
                ...autoServices[5],
                title: 'AI auto listings & copy',
                category: 'AI · MyAuto · specs',
                description:
                    'Optimized vehicle descriptions, option checklists and multilingual listing copy in RU / EN / KA.',
                price: 'from 250 ₾',
                secondaryHref: '#contact',
                secondaryCtaLabel: 'Discuss project',
            },
        ],
        statsHeading: 'Automotive media in numbers',
        statsTagline:
            'Market benchmarks illustrate buyer behavior patterns, not guaranteed vehicle sales speed or volume.',
        statsCards: [
            {
                value: 'Video listings',
                label: 'receive higher buyer inquiry rates',
                description:
                    'Listings with high-quality video and walk-throughs build higher buyer trust on MyAuto and social media.',
                sourceLabel: 'market benchmark',
            },
            {
                value: '1 shoot',
                label: 'powers listing, Reels, ads and web',
                description:
                    'A single filming session provides YouTube review footage, vertical Reels, photos and ad creatives.',
                sourceLabel: 'content reuse',
            },
            {
                value: 'RU / EN / KA',
                label: 'multilingual buyer outreach',
                description:
                    'Multilingual descriptions and subtitles engage local buyers, expats and international car export clients.',
                sourceLabel: 'localization',
            },
            {
                value: 'MyAuto & Social',
                label: 'synchronized digital presence',
                description:
                    'Consistent high-grade visual style elevates dealership brand perception across all platforms.',
                sourceLabel: 'branding impact',
            },
        ],
        midCta: {
            heading: 'Need high-impact content for your automotive business?',
            text:
                'Tell us your focus: car dealership, detailing studio, auto repair center, tuning shop or specific car sale. We will recommend the ideal format: review video, Reels series, brand commercial or listing package.',
            buttonText: 'Discuss format',
            buttonHref: '#contact',
        },
        whatIsTour: {
            heading: 'Showcasing automotive craftsmanship and driving emotion',
            paragraphs: [
                'Car buyers and detailing customers seek perfection: the flawless reflection of paintwork, immaculate leather stitching, engine sound and the prestige of the brand.',
                'Automotive video production requires specialized camera work, controlled lighting reflections, dynamic driving tracking and precision sound design.',
                'We produce commercial-grade automotive content optimized for MyAuto listings, YouTube reviews, Instagram Reels, TikTok and digital advertising.',
            ],
        },
        painSolutions: {
            heading: 'Challenges solved by automotive media production',
            subtitle:
                'High-end visual presentation separates premium auto businesses from generic classified listings.',
            items: [
                {
                    pain: 'Cars sit on listings despite competitive pricing',
                    solution:
                        'Dynamic video reviews and crisp photography make the car stand out and highlight key optional equipment.',
                },
                {
                    pain: 'Detailing results look flat on regular phone cameras',
                    solution:
                        'Professional macro lighting and 4K close-ups capture ceramic gloss, deep reflections and flawless finishing.',
                },
                {
                    pain: 'Showroom and service capacity is under-promoted',
                    solution:
                        'An image brand film with drone tracking and interior cinematography highlights the full scale of your facility.',
                },
                {
                    pain: 'Social media lack dynamic, high-engagement content',
                    solution:
                        'A series of punchy Reels with engine audio, exhaust clips and rapid edits drives consistent audience reach.',
                },
                {
                    pain: 'Foreign and expat buyers need English information',
                    solution:
                        'English subtitles and structured multilingual spec sheets open inquiries from international clients.',
                },
                {
                    pain: 'Listing descriptions are dry and unstructured',
                    solution:
                        'AI-assisted copy highlights vehicle pedigree, packages, service history and key selling points clearly.',
                },
            ],
        },
        earnLose: {
            heading: 'Benefits for automotive companies',
            earnTitle: 'Greater buyer conviction',
            earnItems: [
                'Faster communication of vehicle condition, options and detailing craftsmanship.',
                'Dedicated assets for MyAuto, official website, Instagram, YouTube and ad campaigns.',
                'Elevated brand reputation compared to competitor dealerships.',
            ],
            loseTitle: 'Reduced sales friction',
            loseItems: [
                'Fewer basic inquiries regarding vehicle spec, condition and features.',
                'Less time spent on repetitive remote vehicle walk-arounds.',
                'Lower risk of lowball offers caused by poor listing presentation.',
            ],
        },
        deliverables: {
            heading: 'What is included in the production',
            items: [
                '4K vehicle video review or brand commercial',
                'Dynamic drone aerial tracking and overhead angles',
                'Vertical Reels / Shorts / TikTok cuts with sound design',
                'High-resolution exterior, interior and detail photos',
                '360° virtual tour of showroom or vehicle interior',
                'Structured listing descriptions and option lists in RU / EN / KA',
                'Organized cloud folder delivery',
                'Publishing recommendations for MyAuto, Instagram and YouTube',
            ],
        },
        whyUs: {
            heading: 'Why auto businesses choose Breus Media',
            subtitle:
                'We understand automotive cinematography: reflection control, speed tracking, exhaust acoustics, interior macro details and buyer psychology.',
            items: [
                {
                    title: 'Automotive cinematography expertise',
                    text:
                        'We utilize specialized lenses, polarizers, motorized gimbals and drone tracking for smooth, high-speed car footage.',
                },
                {
                    title: 'Tailored to each automotive sector',
                    text:
                        'Dealership inventory, luxury detailing, tuning workshops and repair centers each require tailored visual pacing.',
                },
                {
                    title: 'Sound design that conveys mechanical power',
                    text:
                        'High-fidelity recording of engine cold starts, exhaust notes, door thuds and detailing mechanics.',
                },
                {
                    title: 'Full multi-platform asset delivery',
                    text:
                        'Wide 16:9 for YouTube/website, vertical 9:16 for Reels/TikTok, square/high-res for classified listings.',
                },
                {
                    title: 'Multilingual listing support',
                    text:
                        'Descriptions and subtitles in RU / EN / KA to connect with both local Georgian and foreign car buyers.',
                },
                {
                    title: 'Operating across Tbilisi, Rustavi and Batumi',
                    text:
                        'We film at dealerships, detailing studios, racetracks, scenic mountain roads and urban routes across Georgia.',
                },
            ],
        },
        pricingHeading: 'Automotive packages',
        pricingTagline:
            'Rates depend on car model count, shoot location, driving tracking requirements, formats and delivery turnaround.',
        pricingPlans: [
            {
                title: 'Single Car Review Pack',
                price: 'from 450 ₾',
                subtitle: 'Complete video review and photo set for one vehicle sale',
                features: [
                    '4K walk-around and interior video review',
                    'High-resolution exterior & interior photo set',
                    'Short vertical Reels for Instagram & MyAuto',
                    'Structured listing description copy',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Detailing & Service Promo',
                price: 'from 400 ₾',
                subtitle: 'Process and transformation video for studios and workshops',
                features: [
                    'Macro process video (coating, wrapping, polishing)',
                    'Dramatic before/after transformation cuts',
                    '2 vertical Reels with audio design',
                    'High-res final delivery photos',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Dealership Content Pack',
                price: 'from 800 ₾',
                subtitle: 'Showroom image film, multiple car cuts and brand assets',
                features: [
                    'Showroom & lot overview with drone aerials',
                    'Reviews / teasers for 3–5 inventory cars',
                    'Brand commercial video with voiceover',
                    'Materials for website, social media & ads',
                ],
                buttonText: 'Discuss This Tier →',
            },
            {
                title: 'Monthly Auto Social Media',
                price: 'from 1,000 ₾',
                subtitle: 'Regular monthly production for dealerships and detailing studios',
                features: [
                    'Bi-weekly filming sessions in Tbilisi',
                    '8–12 vertical Reels / Shorts per month',
                    'Fresh inventory photo sets and stories',
                    'Ongoing content calendar and ad creatives',
                ],
                buttonText: 'Discuss This Tier →',
            },
        ],
        pricingAddOns: {
            heading: 'Optional add-ons for auto packages',
            items: [
                'Dynamic car-to-car rolling shots or closed track filming',
                'FPV drone high-speed fly-through of showroom or vehicle',
                '360° interactive interior tour for website integration',
                'Multilingual subtitles and translation into English & Georgian',
            ],
            note:
                'Final price is confirmed based on vehicle count, location, drone requirements and shoot logistics.',
        },
        processHeading: 'How we work',
        processSteps: [
            {
                number: '01',
                title: 'Brief & shot list',
                description:
                    'We clarify your automotive product, target channels, specific vehicle features, location and timeline.',
            },
            {
                number: '02',
                title: 'Vehicle preparation',
                description:
                    'The car is washed, detailed and positioned for optimal lighting, reflections and clean angles.',
            },
            {
                number: '03',
                title: 'Cinematography session',
                description:
                    'We capture exterior details, interior macro shots, exhaust sound and driving dynamics with drone and gimbal.',
            },
            {
                number: '04',
                title: 'Post-production & color grade',
                description:
                    'We edit with precise speed ramps, color grade paint reflections, add sound design and embed subtitles.',
            },
            {
                number: '05',
                title: 'Packaging & delivery',
                description:
                    'We deliver final files formatted for YouTube, MyAuto, Instagram Reels and website banners.',
            },
        ],
        conditionsNote: {
            title: 'Preparation before filming',
            text:
                'To achieve commercial-grade results, vehicle cleanliness and location readiness are essential.',
            items: [
                'Ensure the vehicle is thoroughly washed, tires dressed and interior detailing completed prior to shoot time',
                'Select a clear location without distracting background clutter, power lines or unwanted reflections',
                'Verify vehicle documentation and fuel levels if dynamic road or tracking shots are scheduled',
            ],
            details:
                'For detailing videos, filming during active work allows capturing genuine process texture and genuine craft.',
        },
        faqHeading: 'Frequently asked questions',
        faqItems: [
            {
                question: 'What automotive formats do you produce?',
                answer:
                    'We produce complete car model reviews, detailing process videos, dealership image films, vertical Reels/TikTok cuts, drone aerial tracking, 360° interior tours and MyAuto listing packages.',
            },
            {
                question: 'How long does filming one car take?',
                answer:
                    'A standard review and photo set typically takes 2 to 3 hours on location. Complex dynamic tracking or multi-location shoots take 4 to 6 hours.',
            },
            {
                question: 'Do you shoot dynamic driving and drone footage?',
                answer:
                    'Yes. We use stabilized gimbals for rolling tracking shots and certified drone pilots for scenic overhead and chase angles.',
            },
            {
                question: 'Can you film monthly content for a dealership or detailing studio?',
                answer:
                    'Yes. We offer recurring monthly packages with scheduled shoot days to keep your Instagram, TikTok and MyAuto channels consistently active.',
            },
            {
                question: 'Do you provide subtitles in English and Russian?',
                answer:
                    'Yes. We provide stylized on-screen subtitles and translated listing descriptions in RU, EN and KA.',
            },
            {
                question: 'How much does automotive video production cost?',
                answer:
                    'Single car review packages start from 450 ₾. Detailing promos start from 400 ₾, and monthly packages start from 1,000 ₾.',
            },
        ],
        contact: {
            title: 'Need automotive media production?',
            description:
                'Tell us your focus: dealership, detailing studio, auto repair, tuning shop or single car sale. We will recommend the ideal format.',
            taskPlaceholder:
                'For example: we have 3 new cars for sale and want 4K reviews, vertical Reels for Instagram and photos for MyAuto.',
            serviceOptions: [
                'Car review',
                'Detailing promo',
                'Dealership film',
                'Reels',
                'Drone tracking',
                '360° interior',
                'Monthly pack',
            ],
            whatsappHref: 'https://wa.me/995501103183',
            preselectedServices: ['auto'],
        },
        useDroneContact: true,
    },
} satisfies L2DirectionConfig;

export const l2DirectionConfigsEn = {
    hotelsService: hotelsServiceEnConfig,
    realEstateService: realEstateServiceEnConfig,
    tours360Service: tours360ServiceEnConfig,
    reelsService: reelsServiceEnConfig,
    aiVisualizationService: aiVisualizationServiceEnConfig,
    restaurantsService: restaurantsServiceEnConfig,
    tourismService: tourismServiceEnConfig,
    clinicsService: clinicsServiceEnConfig,
    autoService: autoServiceEnConfig,
};

