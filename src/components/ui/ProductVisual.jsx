import { useState } from 'react';
import { ImageOff } from 'lucide-react';

// Renders a product photo on a clean light panel with `object-contain`
// (product shots are on white). Falls back to a placeholder if the image
// is missing.
export default function ProductVisual({
  src,
  alt = '',
  className = '',
  imgClassName = '',
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-white ${className}`}>
      {/* subtle tint behind product */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.4]" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary-50 blur-2xl" />

      {!errored && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className={`relative h-full w-full object-contain p-5 ${imgClassName}`}
        />
      ) : (
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-100 text-ink-muted">
          <ImageOff className="h-10 w-10" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
