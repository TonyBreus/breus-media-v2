'use client';

import { useEffect } from 'react';

export default function LangSetter({ lang }: { lang: 'ru' | 'en' | 'ka' }) {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
            try {
                localStorage.setItem('breus_lang', lang);
                document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; SameSite=Lax`;
            } catch (e) {
                // Ignore private storage restrictions
            }
        }
    }, [lang]);

    return null;
}
