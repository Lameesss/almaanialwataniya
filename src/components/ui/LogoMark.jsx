// The Al-Maani Al-Wataniya emblem — stylised "M" pillars inside a circle,
// reconstructed from the brand logo. No background — uses `currentColor`
// so the parent controls color and size.
export default function LogoMark({ className = '', title = 'Al-Maani Al-Wataniya' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular background */}
      <circle cx="100" cy="100" r="100" />
      {/* Top horizontal bar */}
      <rect x="40" y="38" width="120" height="18" rx="2" fill="white" />
      {/* Left pillar */}
      <rect x="48" y="56" width="18" height="100" rx="1" fill="white" />
      {/* Right pillar */}
      <rect x="134" y="56" width="18" height="100" rx="1" fill="white" />
      {/* Center arch — two tall pillars with a pointed gap */}
      <rect x="78" y="56" width="16" height="100" rx="1" fill="white" />
      <rect x="106" y="56" width="16" height="100" rx="1" fill="white" />
      {/* Arch bridge between center pillars */}
      <path d="M78 56 L100 38 L122 56 Z" fill="white" />
      {/* Bottom bar connecting pillars */}
      <rect x="40" y="156" width="120" height="10" rx="1" fill="white" />
    </svg>
  );
}
