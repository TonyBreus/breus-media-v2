export const DroneFlightConditionsNote = () => {
    return (
        <section className="bg-[#0D0D0D] py-10">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
                    <h3 className="mb-3 text-sm font-semibold tracking-wide text-white/90 md:text-base">
                        Условия полёта
                    </h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-white/65 md:text-[15px]">
                        {`Каждый вылет зависит от погодных условий, ветра, ограничений локации и требований безопасности.
Если полёт невозможен из-за дождя, сильного ветра или ограничений зоны,
мы заранее согласуем перенос даты или предложим наземную альтернативу съёмки.`}
                    </p>
                </div>
            </div>
        </section>
    );
};
