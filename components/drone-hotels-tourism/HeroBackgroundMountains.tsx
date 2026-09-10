export default function HeroBackgroundMountains() {
    return (
        <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
        >
            <defs>
                <radialGradient id="sky-glow" cx="20%" cy="15%" r="55%">
                    <stop offset="0%" stopColor="#FFD23F" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#080808" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="sky-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#161616" />
                    <stop offset="60%" stopColor="#0f0f0f" />
                    <stop offset="100%" stopColor="#080808" />
                </linearGradient>
            </defs>

            <rect width="1920" height="1080" fill="#080808" />
            <rect width="1920" height="1080" fill="url(#sky-fade)" />
            <rect width="1920" height="1080" fill="url(#sky-glow)" />

            <line x1="0" y1="548" x2="1920" y2="548" stroke="#FFD23F" strokeOpacity="0.4" strokeWidth="1" />

            <path
                d="M0,568 L92,512 L178,536 L266,474 L350,514 L442,446 L534,498 L626,424 L724,486 L816,410 L908,472 L1002,396 L1096,464 L1188,386 L1286,452 L1378,392 L1476,458 L1572,404 L1672,468 L1768,418 L1862,482 L1920,454 L1920,1080 L0,1080 Z"
                fill="#2a2a2a"
            />
            <path
                d="M0,658 L118,592 L224,628 L336,554 L446,614 L560,536 L674,604 L788,518 L902,592 L1018,526 L1134,604 L1248,540 L1368,618 L1482,556 L1598,628 L1714,570 L1836,642 L1920,612 L1920,1080 L0,1080 Z"
                fill="#1f1f1f"
            />
            <path
                d="M0,780 L138,698 L272,744 L408,664 L540,728 L674,638 L810,714 L944,654 L1082,724 L1218,666 L1354,742 L1490,680 L1626,754 L1762,700 L1888,764 L1920,758 L1920,1080 L0,1080 Z"
                fill="#151515"
            />

            <circle cx="336" cy="559" r="2.4" fill="#FFD23F" opacity="0.78" />
            <circle cx="674" cy="609" r="2.3" fill="#FFD23F" opacity="0.64" />
            <circle cx="1018" cy="531" r="2.3" fill="#FFD23F" opacity="0.88" />
            <circle cx="1482" cy="561" r="2.5" fill="#FFD23F" opacity="0.69" />
            <circle cx="540" cy="733" r="2.6" fill="#FFD23F" opacity="0.9" />
            <circle cx="1218" cy="671" r="2.4" fill="#FFD23F" opacity="0.73" />
            <circle cx="1762" cy="705" r="2.7" fill="#FFD23F" opacity="0.82" />
        </svg>
    );
}
