'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './locales';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className="flex-1 bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className={`relative w-full max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center py-32 ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
          
          <ScrollReveal direction={isRtl ? 'right' : 'left'} className="space-y-8 flex flex-col items-start w-full">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-label-sm uppercase tracking-widest text-xs rounded-none ${isRtl ? 'flex-row-reverse self-end' : 'self-start'}`}>
              <span className="material-symbols-outlined text-sm">verified</span>
              {t.heroBadge}
            </div>
            
            <h1 className={`font-headline-xl text-headline-xl text-on-surface leading-tight w-full ${isRtl ? 'text-right' : 'text-left'}`}>
              <span className="gold-gradient-text">{t.heroGold}</span>
              <br />
              {t.heroWhite}
            </h1>
            
            <p className={`font-body-lg text-on-surface-variant max-w-lg text-body-lg w-full ${isRtl ? 'text-right' : 'text-left'}`}>
              {t.heroDesc}
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-4 w-full ${isRtl ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
              <a 
                href="https://wa.me/905373277186" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-primary text-on-primary px-10 py-4 font-headline-md uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 font-bold ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {t.heroQuote}
                <span className={`material-symbols-outlined ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
              </a>
              <Link 
                href="#services" 
                className="border border-primary text-primary px-10 py-4 font-headline-md uppercase tracking-wider hover:bg-primary/5 transition-all font-bold"
              >
                {t.heroServices}
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction={isRtl ? 'left' : 'right'} className="w-full">
            <div className="relative group w-full aspect-[4/3] lg:aspect-square max-w-[512px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
              <div className="relative z-10 w-full h-full border border-primary/20 shadow-2xl overflow-hidden group">
                <Image 
                  src="/images/hero_truck_sunset.png" 
                  alt="Şahin Nakliye Modern Truck Sunset" 
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 512px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-primary/40 font-label-sm uppercase tracking-tighter text-[10px]">
            {t.heroScroll}
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative border-t border-primary/5" id="services">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <ScrollReveal direction="up" className="flex flex-col items-center mb-20 text-center space-y-4">
            <h2 className="font-headline-xl text-headline-xl gold-gradient-text uppercase">{t.servTitle}</h2>
            <div className="w-24 h-1 bg-primary" />
            <p className="font-body-lg text-on-surface-variant max-w-2xl text-body-lg">
              {t.servDesc}
            </p>
          </ScrollReveal>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter ${isRtl ? 'direction-rtl' : ''}`}>
            {/* Service 1: Partial Load */}
            <ScrollReveal direction="left" delay={100} className="flex flex-col">
              <div className="group bg-surface-container-high border border-primary/10 transition-all duration-500 hover:border-primary/40 overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-black">
                  <Image 
                    src="/images/partial_load.png" 
                    alt={t.serv1Title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div className={`p-8 flex-grow flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4 uppercase">{t.serv1Title}</h3>
                    <p className="font-body-md text-on-surface-variant mb-6 text-body-md">
                      {t.serv1Desc}
                    </p>
                  </div>
                  <Link 
                    href="/fleet" 
                    className={`inline-flex items-center gap-2 text-primary font-label-sm uppercase hover:gap-4 transition-all text-xs font-bold ${isRtl ? 'flex-row-reverse self-start' : 'self-start'}`}
                  >
                    {t.details} 
                    <span className={`material-symbols-outlined text-sm ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2: Furniture Transport */}
            <ScrollReveal direction="up" delay={200} className="flex flex-col">
              <div className="group bg-surface-container-high border border-primary/10 transition-all duration-500 hover:border-primary/40 overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden bg-black">
                  <Image 
                    src="/images/furniture_transport.png" 
                    alt={t.serv2Title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div className={`p-8 flex-grow flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4 uppercase">{t.serv2Title}</h3>
                    <p className="font-body-md text-on-surface-variant mb-6 text-body-md">
                      {t.serv2Desc}
                    </p>
                  </div>
                  <Link 
                    href="/fleet" 
                    className={`inline-flex items-center gap-2 text-primary font-label-sm uppercase hover:gap-4 transition-all text-xs font-bold ${isRtl ? 'flex-row-reverse self-start' : 'self-start'}`}
                  >
                    {t.details} 
                    <span className={`material-symbols-outlined text-sm ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3: Ev & Ofis Taşıma */}
            <ScrollReveal direction="right" delay={300} className="flex flex-col">
              <div className="group bg-surface-container-high border border-primary/10 transition-all duration-500 hover:border-primary/40 overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative bg-surface-container-highest flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  <span className="material-symbols-outlined text-8xl text-primary/30 transition-transform duration-500 group-hover:scale-110">apartment</span>
                </div>
                <div className={`p-8 flex-grow flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-4 uppercase">{t.serv3Title}</h3>
                    <p className="font-body-md text-on-surface-variant mb-6 text-body-md">
                      {t.serv3Desc}
                    </p>
                  </div>
                  <Link 
                    href="/fleet" 
                    className={`inline-flex items-center gap-2 text-primary font-label-sm uppercase hover:gap-4 transition-all text-xs font-bold ${isRtl ? 'flex-row-reverse self-start' : 'self-start'}`}
                  >
                    {t.details} 
                    <span className={`material-symbols-outlined text-sm ${isRtl ? 'rotate-180' : ''}`}>chevron_right</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-surface-container-lowest relative" id="about">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <ScrollReveal direction={isRtl ? 'right' : 'left'} className="w-full">
            <div className="relative w-full aspect-square max-w-[480px] mx-auto">
              <div className="w-full h-full bg-surface-container-highest border border-primary/10 relative overflow-hidden">
                <Image 
                  src="/images/logistics_specialist.png" 
                  alt="Şahin Nakliye Professional Logistics Specialist" 
                  fill
                  className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className={`absolute bottom-8 ${isRtl ? 'right-8 left-8' : 'left-8 right-8'} p-6 bg-primary/95 text-on-primary flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className="text-headline-xl font-headline-xl leading-none">{t.aboutExpValue}</div>
                  <div className="font-body-md uppercase tracking-widest font-bold text-xs mt-1">{t.aboutExpTitle}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction={isRtl ? 'left' : 'right'} className={`space-y-8 ${isRtl ? 'text-right flex flex-col items-end' : 'text-left'}`}>
            <h2 className="font-headline-xl text-headline-xl gold-gradient-text uppercase">{t.aboutTitle}</h2>
            <p className="font-body-lg text-on-surface leading-relaxed text-body-lg">
              {t.aboutDesc}
            </p>
            
            <div className="space-y-6 w-full">
              <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">done_all</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg text-primary uppercase font-bold">{t.aboutCard1Title}</h4>
                  <p className="font-body-md text-on-surface-variant text-body-md mt-1">{t.aboutCard1Desc}</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">done_all</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-body-lg text-primary uppercase font-bold">{t.aboutCard2Title}</h4>
                  <p className="font-body-md text-on-surface-variant text-body-md mt-1">{t.aboutCard2Desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
