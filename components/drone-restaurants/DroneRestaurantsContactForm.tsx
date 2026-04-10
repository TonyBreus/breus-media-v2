'use client';

type DroneRestaurantsContactFormProps = {
    nameLabel?: string;
    namePlaceholder?: string;
    contactLabel?: string;
    contactPlaceholder?: string;
    businessLabel?: string;
    businessPlaceholder?: string;
    deadlineLabel?: string;
    deadlinePlaceholder?: string;
    submitLabel?: string;
};

export function DroneRestaurantsContactForm({
    nameLabel = 'Имя',
    namePlaceholder = 'Ваше имя',
    contactLabel = 'Телефон или мессенджер',
    contactPlaceholder = '+995 ... или @username',
    businessLabel = 'Название заведения и краткое описание',
    businessPlaceholder = 'Ресторан в центре, есть rooftop...',
    deadlineLabel = 'Желаемые сроки (опционально)',
    deadlinePlaceholder = 'Например: до конца месяца',
    submitLabel = 'Отправить заявку',
}: DroneRestaurantsContactFormProps) {
    return (
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{nameLabel}</label>
                    <input
                        type="text"
                        placeholder={namePlaceholder}
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
                <div>
                    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                        {contactLabel}
                    </label>
                    <input
                        type="text"
                        placeholder={contactPlaceholder}
                        className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                    />
                </div>
            </div>

            <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {businessLabel}
                </label>
                <textarea
                    rows={4}
                    placeholder={businessPlaceholder}
                    className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                />
            </div>

            <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{deadlineLabel}</label>
                <input
                    type="text"
                    placeholder={deadlinePlaceholder}
                    className="w-full rounded-[14px] border border-white/12 bg-white/[0.03] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#FFD23F]/55"
                />
            </div>

            <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[14px] bg-[#FFD23F] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
            >
                {submitLabel}
            </button>
        </form>
    );
}
