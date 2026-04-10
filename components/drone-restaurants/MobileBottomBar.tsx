type MobileBottomBarProps = {
    primaryLabel?: string;
};

export function MobileBottomBar({ primaryLabel = 'Обсудить проект' }: MobileBottomBarProps) {
    return (
        <div className="fixed inset-x-0 bottom-0 z-[1070] border-t border-[#FFD23F]/20 bg-[#0f0f0f]/96 p-3 backdrop-blur lg:hidden">
            <div className="mx-auto flex max-w-[760px] items-center gap-2">
                <a
                    href="#contact"
                    className="inline-flex flex-1 items-center justify-center rounded-[12px] bg-[#D4A017] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black"
                >
                    {primaryLabel}
                </a>
                <a
                    href="https://wa.me/995574619393"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#FFD23F]/45 text-lg text-[#FFD23F]"
                >
                    W
                </a>
                <a
                    href="https://t.me/breusmedia"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#FFD23F]/45 text-lg text-[#FFD23F]"
                >
                    T
                </a>
            </div>
        </div>
    );
}
