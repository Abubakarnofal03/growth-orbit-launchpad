import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 128px) 100vw, 128px",
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "hidden"
        )}
      />
      
      {hasError && (
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;