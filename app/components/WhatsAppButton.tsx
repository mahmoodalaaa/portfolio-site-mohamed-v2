'use client';

import React from 'react';
import { useLanguage } from '../locales';

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  
  const tooltipText = {
    tr: 'WhatsApp Destek',
    en: 'WhatsApp Support',
    ar: 'الدعم الفني عبر واتساب'
  }[language];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <a 
        className="flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90 group relative" 
        href="https://wa.me/905373277186" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
      >
        {/* SVG WhatsApp Icon since material symbols might not have it natively */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.987A9.965 9.965 0 0 0 12.012 2Zm5.834 14.167c-.243.684-1.2 1.25-1.646 1.302-.447.051-.892.25-2.887-.534-2.552-1.004-4.184-3.578-4.312-3.748-.127-.17-1.042-1.385-1.042-2.644 0-1.26.658-1.879.891-2.128.234-.249.51-.311.68-.311h.488c.149 0 .34.021.488.382.16.382.532 1.302.574 1.386.043.085.075.18.01.31-.064.13-.106.213-.213.34-.106.128-.223.287-.319.383-.106.106-.218.223-.09.436.128.213.564.925 1.213 1.502.835.744 1.536.973 1.749 1.079.213.106.34.085.468-.064.128-.149.553-.638.702-.85.149-.213.298-.18.51-.106.213.074 1.339.632 1.567.748.228.117.382.17.436.266.053.096.053.553-.19.1.12.001 0 0 0 0Z"/>
        </svg>
        <span className={`absolute ${isRtl ? 'left-full ml-4' : 'right-full mr-4'} bg-[#25D366] text-white px-3 py-1 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded`}>
          {tooltipText}
        </span>
      </a>
    </div>
  );
}
