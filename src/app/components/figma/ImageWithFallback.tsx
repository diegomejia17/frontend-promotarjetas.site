import React, { useState } from 'react'

const PLACEHOLDER_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setDidError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  const { src, alt, style, className, ...rest } = props

  return (
    <div className={`relative overflow-hidden bg-gray-50 flex items-center justify-center ${className ?? ''}`} style={style}>
      {/* Target Image */}
      {!didError && (
        <img
          src={src}
          alt={alt}
          {...rest}
          onError={handleError}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      {/* Placeholder / Error State */}
      {(isLoading || didError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
          <img 
            src={PLACEHOLDER_IMG_SRC} 
            alt="Placeholder" 
            className="w-12 h-12 opacity-20 animate-pulse"
          />
        </div>
      )}
    </div>
  )
}
