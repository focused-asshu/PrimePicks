import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    if (img.complete) setLoaded(true);
  }, []);
  return (
    <div className={className} style={{ position: 'relative', ...style }}>
      {!loaded && <div className="absolute inset-0 skeleton" style={{ borderRadius: 12 }} />}
      <img
        ref={ref}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`img-fade ${loaded ? 'loaded' : ''}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
      />
    </div>
  );
}
