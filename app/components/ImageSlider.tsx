'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface SlideImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  isRtl?: boolean;
  autoPlayInterval?: number; // in ms
}

export default function ImageSlider({
  images,
  isRtl = false,
  autoPlayInterval = 5000
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  // Start autoplay timer
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      timerRef.current = setInterval(nextSlide, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, nextSlide, autoPlayInterval, images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full overflow-hidden border border-primary/20 shadow-2xl group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={image.src}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                isActive
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 512px"
              />
              
              {/* Optional beautiful text overlay */}
              {(image.title || image.description) && (
                <div className={`absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end min-h-[120px] transition-all duration-700 delay-300 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${isRtl ? 'text-right items-end' : 'text-left items-start'}`}>
                  {image.title && (
                    <h4 className="font-headline-md text-body-lg text-primary uppercase font-bold tracking-wider mb-1">
                      {image.title}
                    </h4>
                  )}
                  {image.description && (
                    <p className="font-body-md text-on-surface-variant text-xs md:text-sm max-w-[85%]">
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={isRtl ? nextSlide : prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRtl ? 'right-4' : 'left-4'
            } z-30 w-10 h-10 rounded-full bg-surface-container-lowest/40 backdrop-blur-sm border border-primary/20 text-primary flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary/20 hover:scale-105 active:scale-95`}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined text-xl">
              {isRtl ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
          <button
            onClick={isRtl ? prevSlide : nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRtl ? 'left-4' : 'right-4'
            } z-30 w-10 h-10 rounded-full bg-surface-container-lowest/40 backdrop-blur-sm border border-primary/20 text-primary flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary/20 hover:scale-105 active:scale-95`}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined text-xl">
              {isRtl ? 'chevron_left' : 'chevron_right'}
            </span>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 bg-primary' : 'w-2 bg-on-surface-variant/40 hover:bg-primary/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
