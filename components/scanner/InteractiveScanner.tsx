"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Globe, MapPin, Video, CheckCircle2, XCircle, ArrowRight, Search, Activity, Image as ImageIcon } from "lucide-react";

type Step = 1 | 1.5 | 2 | 3;
type Niche = "hotel" | "restaurant" | "real_estate" | "clinic" | "other";

const nicheLabels: Record<Niche, string> = {
    hotel: "Отель / Гостиница",
    restaurant: "Ресторан / Кафе",
    real_estate: "Недвижимость / Застройщик",
    clinic: "Клиника / Салон",
    other: "Другое",
};

interface ScanResult {
    url: string;
    title: string;
    description: string;
    media: {
        images: number;
        videos: number;
    };
    performance: {
        htmlSizeKb: number;
        loadSpeedEstimate: string;
    };
    fallback?: boolean;
}

export function InteractiveScanner() {
    const [step, setStep] = useState<Step>(1);
    const [url, setUrl] = useState("");
    const [niche, setNiche] = useState<Niche | null>(null);
    const [customNiche, setCustomNiche] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [scanData, setScanData] = useState<ScanResult | null>(null);

    // Question answers
    const [has360, setHas360] = useState<boolean | null>(null);
    const [hasVideo, setHasVideo] = useState<boolean | null>(null);

    const handleStartScan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url || !niche || (niche === 'other' && !customNiche)) return;
        
        setStep(1.5);
        
        try {
            const res = await fetch(`/api/analyze?url=${encodeURIComponent(url)}`);
            const data = await res.json();
            
            if (data.error && !data.fallback) {
                // If it really failed, we can still show a fallback locally
                throw new Error("Fetch failed");
            }
            
            setScanData(data.fallback ? getFallbackData(url) : data);
        } catch (e) {
            setScanData(getFallbackData(url));
        }

        setTimeout(() => {
            setStep(2);
        }, 800); // Give user a moment to see the loading screen
    };

    const getFallbackData = (targetUrl: string): ScanResult => ({
        url: targetUrl,
        title: "Не удалось получить заголовок (сайт защищен)",
        description: "Мы не смогли автоматически считать описание сайта, но это не помешает аудиту визуала.",
        media: { images: 0, videos: 0 },
        performance: { htmlSizeKb: 0, loadSpeedEstimate: "Неизвестно" },
        fallback: true
    });

    const handleFinish = () => {
        if (has360 === null || hasVideo === null) return;
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setStep(3);
        }, 1200); // Fake calculation delay
    };

    const calculateScore = () => {
        let score = 20; // Base score
        
        // Performance heuristic based on real data (if we have it)
        if (scanData && !scanData.fallback) {
            if (scanData.performance.htmlSizeKb < 200) score += 15;
            else if (scanData.performance.htmlSizeKb < 500) score += 10;
        } else {
            score += 10; // Neutral if fallback
        }

        // Media heuristic
        if (scanData && !scanData.fallback) {
            if (scanData.media.images > 10) score += 10;
            if (scanData.media.videos > 0) score += 5;
        }

        if (has360) score += 30;
        if (hasVideo) score += 20;

        return Math.min(score, 100);
    };

    const score = calculateScore();
    const finalNiche = niche === 'other' ? customNiche : (niche ? nicheLabels[niche] : "");

    const getWhatsAppUrl = () => {
        const text = `Здравствуйте! Я прошел аудит на сайте. Мой результат: ${score}/100. Хочу получить 90-секундный Loom-разбор точек роста. Сайт: ${url}, Ниша: ${finalNiche}`;
        return `https://wa.me/995501103183?text=${encodeURIComponent(text)}`; 
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden relative min-h-[400px]">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-zinc-800 w-full">
                <div 
                    className="h-full bg-[#D4AF37] transition-all duration-500 ease-in-out"
                    style={{ width: `${(step === 1.5 ? 1.5 : step) / 3 * 100}%` }}
                />
            </div>

            {isScanning && (
                <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin mb-4" />
                    <p className="text-zinc-300 font-medium animate-pulse">Формирование отчета...</p>
                </div>
            )}

            {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-white">Интерактивный B2B-Сканер</h2>
                        <p className="text-zinc-400">Впишите свой сайт, и мы проанализируем его визуальный потенциал за 30 секунд</p>
                    </div>

                    <form onSubmit={handleStartScan} className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-zinc-300">Ссылка на сайт или Instagram / Google Maps</label>
                            <input 
                                type="text"
                                required
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://..."
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-zinc-300">Ваша ниша</label>
                            <div className="grid grid-cols-2 gap-3">
                                {(Object.entries(nicheLabels) as [Niche, string][]).map(([key, label]) => (
                                    <button
                                        key={key}
                                        type="button"
                                        onClick={() => setNiche(key)}
                                        className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all text-center ${
                                            niche === key 
                                                ? "bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]" 
                                                : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            
                            {niche === 'other' && (
                                <div className="mt-3 animate-in fade-in slide-in-from-top-2">
                                    <input 
                                        type="text"
                                        required
                                        value={customNiche}
                                        onChange={(e) => setCustomNiche(e.target.value)}
                                        placeholder="Напишите вашу нишу..."
                                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                    />
                                </div>
                            )}
                        </div>

                        <button 
                            type="submit"
                            disabled={!url || !niche || (niche === 'other' && !customNiche)}
                            className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Начать анализ <Search className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}

            {step === 1.5 && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center animate-in fade-in">
                    <div className="w-16 h-16 relative mb-6">
                        <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-full border-t-transparent animate-spin"></div>
                        <Activity className="absolute inset-0 m-auto text-[#D4AF37] w-6 h-6 animate-pulse" />
                    </div>
                    <div className="h-8 overflow-hidden relative w-64 text-center">
                        <div className="absolute top-0 w-full animate-[slideUp_3s_ease-in-out_infinite]">
                            <p className="text-zinc-300 font-medium h-8 flex items-center justify-center">Подключение к сайту...</p>
                            <p className="text-zinc-300 font-medium h-8 flex items-center justify-center">Сбор метаданных...</p>
                            <p className="text-zinc-300 font-medium h-8 flex items-center justify-center">Анализ медиа-контента...</p>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{__html: `
                        @keyframes slideUp {
                            0%, 25% { transform: translateY(0); }
                            33%, 58% { transform: translateY(-32px); }
                            66%, 91% { transform: translateY(-64px); }
                            100% { transform: translateY(0); }
                        }
                    `}} />
                </div>
            )}

            {step === 2 && scanData && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-white">Анализ завершен</h2>
                        <p className="text-[#D4AF37]">Ниша: {finalNiche}</p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                            <Globe className="w-24 h-24" />
                        </div>
                        <div>
                            <h3 className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Распознанный заголовок</h3>
                            <p className="text-white font-medium line-clamp-2">{scanData.title}</p>
                        </div>
                        {!scanData.fallback && (
                            <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-4">
                                <div>
                                    <h3 className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Медиа на странице</h3>
                                    <div className="flex items-center gap-3 text-sm text-zinc-300">
                                        <span className="flex items-center gap-1"><ImageIcon className="w-3.5 h-3.5 text-blue-400" /> {scanData.media.images}</span>
                                        <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5 text-purple-400" /> {scanData.media.videos}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Скорость (HTML)</h3>
                                    <p className="text-sm text-zinc-300">{scanData.performance.loadSpeedEstimate}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <p className="text-center text-sm text-zinc-400">Для точности отчета ответьте на 2 вопроса:</p>
                        
                        {/* Question 1 */}
                        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                            <h3 className="font-medium text-white text-sm mb-3 text-center">Есть ли у вас на Google Картах 360° виртуальный тур?</h3>
                            <div className="flex gap-3">
                                <button onClick={() => setHas360(true)} className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${has360 === true ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}>Да</button>
                                <button onClick={() => setHas360(false)} className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${has360 === false ? 'bg-red-500/10 border-red-500 text-red-400' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}>Нет / Не знаю</button>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                            <h3 className="font-medium text-white text-sm mb-3 text-center">Публикуете ли вы регулярно профессиональные видео (Reels, промо)?</h3>
                            <div className="flex gap-3">
                                <button onClick={() => setHasVideo(true)} className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${hasVideo === true ? 'bg-green-500/10 border-green-500 text-green-400' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}>Да</button>
                                <button onClick={() => setHasVideo(false)} className={`flex-1 py-2.5 rounded-lg border text-sm font-medium transition-all ${hasVideo === false ? 'bg-red-500/10 border-red-500 text-red-400' : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}>Нет / Не знаю</button>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={handleFinish}
                        disabled={has360 === null || hasVideo === null}
                        className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Показать результат <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-zinc-800 bg-zinc-900 mb-2 relative">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                <circle 
                                    className="text-zinc-800 stroke-current" 
                                    strokeWidth="6" 
                                    cx="50" cy="50" r="46" fill="transparent"
                                ></circle>
                                <circle 
                                    className={`${score > 70 ? 'text-green-500' : score > 40 ? 'text-amber-500' : 'text-red-500'} stroke-current transition-all duration-1000 ease-out`} 
                                    strokeWidth="6" 
                                    strokeLinecap="round" 
                                    cx="50" cy="50" r="46" fill="transparent" 
                                    strokeDasharray="289" 
                                    strokeDashoffset={289 - (289 * score) / 100}
                                    transform="rotate(-90 50 50)"
                                ></circle>
                            </svg>
                            <span className="text-3xl font-bold text-white">{score}</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Готовность визуала: {score} / 100</h2>
                            <p className="text-zinc-400 mt-2">
                                {score > 70 ? 'Хорошая база, но есть точки роста.' : 'Бизнес недополучает клиентов из-за слабой упаковки.'}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 bg-zinc-900/50 p-4 sm:p-6 rounded-2xl border border-zinc-800">
                        {/* Area 1: Website & Speed */}
                        <div className="flex items-start gap-3">
                            {score > 60 ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`font-semibold ${score > 60 ? 'text-green-400' : 'text-amber-400'}`}>
                                    Контент на сайте
                                </h4>
                                <ul className="text-sm text-zinc-400 mt-1 space-y-1 list-disc list-inside">
                                    {!scanData?.fallback ? (
                                        <>
                                            {scanData!.media.images < 10 && <li>Слишком мало визуального контента на странице</li>}
                                            {scanData!.media.videos === 0 && <li>Нет видео-обзоров (теряете вовлечение)</li>}
                                            {scanData!.performance.htmlSizeKb > 500 && <li>Высокий риск медленной загрузки с мобильных</li>}
                                            {scanData!.media.images >= 10 && scanData!.media.videos > 0 && <li>Отличное наличие фото и видео материалов</li>}
                                        </>
                                    ) : (
                                        <>
                                            <li>Проверьте, использует ли сайт современные форматы (WebP/MP4)</li>
                                            <li>Убедитесь, что первый экран содержит видеофон или качественное фото</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="h-px bg-zinc-800 w-full"></div>

                        {/* Area 2: Maps */}
                        <div className="flex items-start gap-3">
                            {has360 ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`font-semibold ${has360 ? 'text-green-400' : 'text-red-400'}`}>
                                    Google Maps
                                </h4>
                                {!has360 && (
                                    <ul className="text-sm text-zinc-400 mt-1 space-y-1 list-disc list-inside">
                                        <li>Отсутствует 360° виртуальный тур</li>
                                        <li>Клиент не может "зайти" внутрь до визита</li>
                                        <li>Решение: Съёмка 360° панорам и интеграция в карты</li>
                                    </ul>
                                )}
                                {has360 && <p className="text-sm text-zinc-400 mt-1">Отлично! 360° тур повышает доверие на картах в 2 раза.</p>}
                            </div>
                        </div>

                        <div className="h-px bg-zinc-800 w-full"></div>

                        {/* Area 3: Video */}
                        <div className="flex items-start gap-3">
                            {hasVideo ? (
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            ) : (
                                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`font-semibold ${hasVideo ? 'text-green-400' : 'text-red-400'}`}>
                                    Видеомаркетинг
                                </h4>
                                {!hasVideo && (
                                    <ul className="text-sm text-zinc-400 mt-1 space-y-1 list-disc list-inside">
                                        <li>Нет регулярных Reels и динамичных пролётов</li>
                                        <li>Низкое удержание внимания в соцсетях</li>
                                        <li>Решение: Пакет Reels или FPV-съёмка</li>
                                    </ul>
                                )}
                                {hasVideo && <p className="text-sm text-zinc-400 mt-1">Видео-маркетинг настроен, продолжайте публиковать Reels.</p>}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <Link 
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium py-4 px-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] text-center leading-tight"
                        >
                            <span className="relative flex h-3 w-3 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            Получить 90-сек разбор точек роста в WhatsApp
                        </Link>
                        
                        <Link 
                            href="/gazeta#contact"
                            className="w-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-center"
                        >
                            Оставить заявку на сайте
                            <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

