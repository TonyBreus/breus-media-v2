import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export function DroneFooterStitchEn() {
    const footerLinks = [
        { label: 'Aerial Filming', href: '/drone-service/en' },
        { label: '360° Tours', href: '/360-tours-service/en' },
        { label: 'Reels and Video', href: '/reels-service/en' },
        { label: 'AI Visualization', href: '/ai-visualization-service/en' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="border-t border-[#2a2a2a] bg-[#060606] py-8 md:py-16">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 text-center md:grid-cols-4 md:gap-12 md:text-left">
                <div className="col-span-1 flex flex-col items-center md:col-span-2 md:items-start">
                    <div className="mb-4 flex items-center text-xl font-bold tracking-tighter text-white">
                        <span className="mr-2 text-[#D4A017]">✈</span> BREUS MEDIA
                    </div>
                    <p className="mb-5 max-w-sm text-sm leading-relaxed text-gray-500 md:mb-8">
                        Professional aerial filming and visual production for business in Georgia. Tbilisi, Batumi,
                        Kutaisi.
                    </p>
                    <div className="flex space-x-6">
                        {[
                            { label: 'Instagram', href: 'https://www.instagram.com/breusmedia', icon: Instagram },
                            { label: 'Telegram', href: 'https://t.me/breusmedia', icon: Send },
                            { label: 'Facebook', href: 'https://www.facebook.com/breusmedia', icon: Facebook },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/breusmedia', icon: Linkedin },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 transition-all hover:border-[#D4A017] hover:text-[#D4A017]"
                            >
                                <social.icon className="h-4 w-4" strokeWidth={1.9} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white md:mb-6">Menu</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        {footerLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="transition-colors hover:text-white">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white md:mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>Tbilisi, Georgia</li>
                        <li className="font-bold text-white">+995 574 619 393</li>
                        <li className="transition-colors hover:text-white">hello@breus.media</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-8 border-t border-[#2a2a2a] px-6 pt-6 text-center text-[10px] uppercase tracking-[0.3em] text-gray-600 md:mt-16 md:pt-8">
                © 2026 BREUS MEDIA PRODUCTION. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}
