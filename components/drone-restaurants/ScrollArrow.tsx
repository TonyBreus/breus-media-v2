import { ChevronDown } from 'lucide-react';

export function ScrollArrow({
    targetId = 'target-audience',
    ariaLabel = 'Прокрутить вниз',
    className = '',
}: {
    targetId?: string;
    ariaLabel?: string;
    className?: string;
}) {
    return (
        <a
            href={`#${targetId.replace(/^#/, '')}`}
            aria-label={ariaLabel}
            className={`text-[#FFD23F] transition-opacity hover:opacity-80 inline-flex items-center justify-center cursor-pointer ${className}`}
        >
            <ChevronDown className="h-6 w-6 animate-bounce text-[#FFD23F]" />
        </a>
    );
}
