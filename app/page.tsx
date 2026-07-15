'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './locales';
import ScrollReveal from './components/ScrollReveal';
import ImageSlider from './components/ImageSlider';

export default function Home() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  const sliderImages = [
    {
      src: '/images/hero_truck_sunset.png',
      alt: t.fleetLongHaulTitle || 'Şehirlerarası Ticari Filo'
    },
    {
      src: '/images/2.png',
      alt: t.fleetLongHaulTitle || 'Şehirlerarası Ticari Filo'
    },
    {
      src: '/images/3.png',
      alt: t.fleetUrbanTitle || 'Kentsel Çevik Birimler'
    },
    {
      src: '/images/4.png',
      alt: t.serv3Title || 'Ev & Ofis Taşıma'
    }
  ];

  return (
    <div className="flex-1 bg-background text-on-surface">
      {/* Hero Section with Slider & Connection Card */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-24 mt-28">
        <ScrollReveal direction="up">
          <div className="relative w-full h-[550px] md:h-[650px] overflow-hidden border border-primary/20 shadow-2xl gold-glow bg-surface-container flex flex-col justify-end">
            
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0 select-none">
              <ImageSlider images={sliderImages} isRtl={isRtl} autoPlayInterval={6000} />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/35 z-10 pointer-events-none" />

            {/* Static Content overlay */}
            <div className="relative z-20 p-6 md:p-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pointer-events-none">
              
              {/* Text Info */}
              <div className={`lg:col-span-7 space-y-4 pointer-events-auto ${isRtl ? 'lg:text-right text-right' : 'text-left'}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-label-sm uppercase tracking-widest text-[10px] ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-xs">verified</span>
                  {t.heroBadge}
                </div>

                <h1 className="font-headline-xl text-headline-xl text-white uppercase leading-tight drop-shadow-lg">
                  <span className="gold-gradient-text">{t.heroGold}</span>
                  <br />
                  {t.heroWhite}
                </h1>
                
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl drop-shadow">
                  {t.heroDesc}
                </p>

                <div className={`flex flex-wrap gap-4 pt-2 ${isRtl ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
                  <a
                    href="https://wa.me/905373277186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-primary text-on-primary px-8 py-3.5 font-headline-md text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center gap-2.5 font-bold ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    {t.heroQuote}
                    <span className={`material-symbols-outlined text-sm ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
                  </a>
                  <Link
                    href="#services"
                    className="border border-primary text-primary px-8 py-3.5 font-headline-md text-sm uppercase tracking-wider hover:bg-primary/5 transition-all font-bold"
                  >
                    {t.heroServices}
                  </Link>
                </div>
              </div>

              {/* Manager Connection Card */}
              <div className={`lg:col-span-5 w-full flex justify-center pointer-events-auto ${isRtl ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <div className="w-full max-w-[380px] bg-surface-container-lowest/85 backdrop-blur-md border border-primary/20 p-6 md:p-8 shadow-2xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="material-symbols-outlined text-primary text-3xl">contact_phone</span>
                      <div className={isRtl ? 'text-right' : 'text-left'}>
                        <h4 className="font-headline-md text-sm text-white uppercase tracking-wider font-bold">
                          {t.fleetContactTitle}
                        </h4>
                        <span className="font-label-sm text-[10px] text-primary uppercase font-bold">
                          {t.fleetManagerLabel}
                        </span>
                      </div>
                    </div>
                    
                    <p className={`font-body-md text-xs text-on-surface-variant leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                      {t.fleetContactDesc}
                    </p>

                    {/* Manager 1 Info */}
                    <div className="border-t border-primary/10 pt-4 space-y-3">
                      <div className={`flex justify-between items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                          <span className="font-headline-md text-xs text-white font-bold">Mustafa Şahin</span>
                          <span className="font-mono text-xs text-on-surface-variant">0537 327 71 86</span>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href="tel:05373277186" 
                            className="w-8 h-8 rounded-full border border-primary/20 hover:border-primary text-primary flex items-center justify-center transition-all bg-primary/5 hover:bg-primary/10"
                            title={t.fleetCallNow}
                          >
                            <span className="material-symbols-outlined text-sm">call</span>
                          </a>
                          <a 
                            href="https://wa.me/905373277186" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-green-500/20 hover:border-green-500 text-green-500 flex items-center justify-center transition-all bg-green-500/5 hover:bg-green-500/10"
                            title={t.fleetWhatsApp}
                          >
                            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.987A9.965 9.965 0 0 0 12.012 2Zm5.834 14.167c-.243.684-1.2 1.25-1.646 1.302-.447.051-.892.25-2.887-.534-2.552-1.004-4.184-3.578-4.312-3.748-.127-.17-1.042-1.385-1.042-2.644 0-1.26.658-1.879.891-2.128.234-.249.51-.311.68-.311h.488c.149 0 .34.021.488.382.16.382.532 1.302.574 1.386.043.085.075.18.01.31-.064.13-.106.213-.213.34-.106.128-.223.287-.319.383-.106.106-.218.223-.09.436.128.213.564.925 1.213 1.502.835.744 1.536.973 1.749 1.079.213.106.34.085.468-.064.128-.149.553-.638.702-.85.149-.213.298-.18.51-.106.213.074 1.339.632 1.567.748.228.117.382.17.436.266.053.096.053.553-.19.1.12.001 0 0 0 0Z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Manager 2 Info */}
                    <div className="border-t border-primary/5 pt-3 space-y-3">
                      <div className={`flex justify-between items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                          <span className="font-headline-md text-xs text-white font-bold">Muhammet Şahin</span>
                          <span className="font-mono text-xs text-on-surface-variant">0531 541 29 75</span>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href="tel:05315412975" 
                            className="w-8 h-8 rounded-full border border-primary/20 hover:border-primary text-primary flex items-center justify-center transition-all bg-primary/5 hover:bg-primary/10"
                            title={t.fleetCallNow}
                          >
                            <span className="material-symbols-outlined text-sm">call</span>
                          </a>
                          <a 
                            href="https://wa.me/905315412975" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full border border-green-500/20 hover:border-green-500 text-green-500 flex items-center justify-center transition-all bg-green-500/5 hover:bg-green-500/10"
                            title={t.fleetWhatsApp}
                          >
                            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.945 9.945 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.987A9.965 9.965 0 0 0 12.012 2Zm5.834 14.167c-.243.684-1.2 1.25-1.646 1.302-.447.051-.892.25-2.887-.534-2.552-1.004-4.184-3.578-4.312-3.748-.127-.17-1.042-1.385-1.042-2.644 0-1.26.658-1.879.891-2.128.234-.249.51-.311.68-.311h.488c.149 0 .34.021.488.382.16.382.532 1.302.574 1.386.043.085.075.18.01.31-.064.13-.106.213-.213.34-.106.128-.223.287-.319.383-.106.106-.218.223-.09.436.128.213.564.925 1.213 1.502.835.744 1.536.973 1.749 1.079.213.106.34.085.468-.064.128-.149.553-.638.702-.85.149-.213.298-.18.51-.106.213.074 1.339.632 1.567.748.228.117.382.17.436.266.053.096.053.553-.19.1.12.001 0 0 0 0Z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
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
