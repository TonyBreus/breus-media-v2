import ServiceCard from "./ServiceCard";
import { Plane, View, MapPin, Film, Car, Calendar } from "lucide-react";

export default function Services() {
    const services = [
        {
            id: "svc-drone",
            title: "Дрон-съемка + FPV",
            duration: "1–3 дня",
            desc: "Масштаб, динамика и доверие для объектов недвижимости, заводов и локаций.",
            icon: <Plane className="w-6 h-6" />
        },
        {
            id: "svc-360",
            title: "360° Виртуальные туры",
            duration: "2–4 дня",
            desc: "Эффект присутствия 24/7. Клиент «побывал» у вас еще до звонка.",
            icon: <View className="w-6 h-6" />
        },
        {
            id: "svc-gmaps",
            title: "Google Maps Visual Upgrade",
            duration: "1–3 дня",
            desc: "Обновляем витрину на картах: фото/видео/обложки — чтобы выбирали вас.",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            id: "svc-reels",
            title: "Reels / TikTok Pack",
            duration: "3–5 дней",
            desc: "Пакет роликов, которые останавливают скролл (HoReCa / Beauty / Retail).",
            icon: <Film className="w-6 h-6" />
        },
        {
            id: "svc-auto",
            title: "Авто-Презентация",
            duration: "1–2 дня",
            desc: "Детейлинг, обзор, динамика — продаём авто через экран смартфона.",
            icon: <Car className="w-6 h-6" />
        },
        {
            id: "svc-event",
            title: "Express Event Highlights",
            duration: "24–48 часов",
            desc: "Короткий ролик для отчёта и промо события — быстро, чисто, стильно.",
            icon: <Calendar className="w-6 h-6" />
        }
    ];

    return (
        <section id="services" className="py-24 bg-dark-bg relative z-10">
            <div className="container px-4 mx-auto">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Готовые решения с<br /> быстрой отдачей
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Выберите услугу — обычно запуск занимает 1–4 дня.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc) => (
                        <ServiceCard
                            key={svc.id}
                            id={svc.id}
                            title={svc.title}
                            duration={svc.duration}
                            description={svc.desc}
                            icon={svc.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
