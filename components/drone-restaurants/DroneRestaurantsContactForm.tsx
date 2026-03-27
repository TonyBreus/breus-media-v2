'use client';

export function DroneRestaurantsContactForm() {
    return (
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Имя</label>
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                        Телефон или мессенджер
                    </label>
                    <input
                        type="text"
                        placeholder="+995 ... или @username"
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
            </div>

            <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Название заведения и краткое описание
                </label>
                <textarea
                    rows={4}
                    placeholder="Ресторан в центре, есть rooftop..."
                    className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                />
            </div>

            <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Желаемые сроки (опционально)</label>
                <input
                    type="text"
                    placeholder="Например: до конца месяца"
                    className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                />
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
            >
                Отправить заявку
            </button>
        </form>
    );
}
