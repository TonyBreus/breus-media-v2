'use client';

export function TourContact() {
    return (
        <section className="py-20 bg-[#080808]" id="contact">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto rounded-2xl border border-[#D4A017]/35 bg-gradient-to-br from-[#141414] via-[#111111] to-[#0d0d0d] p-6 md:p-8">
                    <h2 className="text-3xl font-bold mb-3 text-white">Обсудим ваше заведение</h2>
                    <p className="text-white/70 mb-8 max-w-2xl leading-relaxed">
                        Расскажите про ресторан - рассчитаем стоимость и ответим в течение нескольких часов. Без давления и
                        обязательств.
                    </p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Имя</label>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                    Телефон или Telegram
                                </label>
                                <input
                                    type="text"
                                    placeholder="+995 ... или @username"
                                    className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">
                                    Тип заведения
                                </label>
                                <select className="w-full bg-[#101010] border border-white/20 rounded-[10px] px-3 py-2.5 text-white focus:border-[#D4A017] outline-none transition-colors">
                                    <option>ресторан</option>
                                    <option>кафе</option>
                                    <option>бар</option>
                                    <option>банкетный зал</option>
                                    <option>другое</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Город</label>
                                <select className="w-full bg-[#101010] border border-white/20 rounded-[10px] px-3 py-2.5 text-white focus:border-[#D4A017] outline-none transition-colors">
                                    <option>Тбилиси</option>
                                    <option>другой</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[11px] uppercase tracking-[0.18em] text-white/55 mb-2">Коротко о задаче</label>
                            <textarea
                                rows={3}
                                placeholder="Какие зоны нужно снять, сроки и где планируете размещать тур"
                                className="w-full bg-transparent border-b border-white/25 pb-2.5 text-white placeholder:text-white/35 focus:border-[#D4A017] outline-none transition-colors resize-none"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                type="submit"
                                className="flex-1 bg-[#D4A017] text-black py-3.5 px-6 rounded-xl font-bold uppercase tracking-[0.12em] text-xs md:text-sm hover:brightness-105 transition-colors"
                            >
                                Отправить заявку
                            </button>
                            <a
                                href="https://wa.me/995555000000"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 border border-white/20 text-white py-3.5 px-6 rounded-xl font-semibold uppercase tracking-[0.12em] text-xs md:text-sm hover:bg-white/5 transition-colors text-center"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
