import { useState, type ImgHTMLAttributes } from 'react'
import { imageFallback } from '@/data/images'
import { cn } from '@/lib/utils'

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

export function SafeImage({
  fallbackSrc = imageFallback,
  onError,
  className,
  alt = '',
  ...props
}: SafeImageProps) {
  const [src, setSrc] = useState(props.src)

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={cn(className)}
      onError={(event) => {
        if (src !== fallbackSrc) {
          setSrc(fallbackSrc)
        }
        onError?.(event)
      }}
    />
  )
}
