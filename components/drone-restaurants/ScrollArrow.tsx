export function ScrollArrow() {
    return (
        <a
            href="#what-is"
            aria-label="Прокрутить вниз"
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[#FFD23F] transition-opacity hover:opacity-80"
        >
            <span className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-[#FFD23F]/45 bg-black/30">
                ↓
            </span>
        </a>
    );
}
