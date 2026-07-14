'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../locales';
import ScrollReveal from '../components/ScrollReveal';

export default function FleetPage() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className="flex-1 bg-background text-on-surface honeycomb-pattern pt-28">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-24 text-center mt-12">
        <ScrollReveal direction="up">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase">
            {t.fleetTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t.fleetDesc}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8" />
        </ScrollReveal>
      </section>

      {/* Fleet Grid (Bento Style) */}
      <section className="max-w-container-max mx-auto px-margin-desktop mb-32">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-gutter ${isRtl ? 'direction-rtl' : ''}`}>
          
          {/* Main Feature: Long-Haul */}
          <ScrollReveal direction={isRtl ? 'right' : 'left'} className="md:col-span-8 h-full">
            <div className="group relative overflow-hidden bg-surface-container border-t-2 border-primary gold-glow transition-all duration-500 min-h-[400px] md:min-h-[500px] h-full">
              <Image 
                src="/images/truck_warehouse.png" 
                alt={t.fleetLongHaulTitle} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className={`absolute bottom-0 left-0 right-0 p-8 flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                <span className="inline-block bg-primary text-on-primary px-4 py-1.5 font-label-sm text-[10px] mb-4 uppercase font-bold">
                  {t.fleetHeavyDuty}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-white uppercase">
                  {t.fleetLongHaulTitle}
                </h3>
                <p className="text-on-surface-variant max-w-md mt-2 text-sm">
                  {t.fleetLongHaulDesc}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary Item: Urban Agile */}
          <ScrollReveal direction={isRtl ? 'left' : 'right'} className="md:col-span-4 h-full">
            <div className="group relative overflow-hidden bg-surface-container border-t-2 border-primary gold-glow transition-all duration-500 min-h-[400px] md:min-h-[500px] h-full">
              <Image 
                src="/images/delivery_van_night.png" 
                alt={t.fleetUrbanTitle} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className={`absolute bottom-0 left-0 right-0 p-8 flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                <span className="inline-block border border-primary text-primary px-4 py-1.5 font-label-sm text-[10px] mb-4 uppercase font-bold">
                  {t.fleetCityLogistics}
                </span>
                <h3 className="font-headline-md text-headline-md text-white uppercase">
                  {t.fleetUrbanTitle}
                </h3>
                <p className="text-on-surface-variant mt-2 text-sm">
                  {t.fleetUrbanDesc}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Tertiary Item: Specialized Handling */}
          <ScrollReveal direction={isRtl ? 'right' : 'left'} className="md:col-span-4 h-full">
            <div className="group relative overflow-hidden bg-surface-container border-t-2 border-primary gold-glow transition-all duration-500 min-h-[300px] h-full">
              <Image 
                src="/images/image.png" 
                alt={t.fleetSpecialTitle} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors pointer-events-none" />
              <div className={`absolute bottom-0 left-0 right-0 p-6 bg-surface/90 backdrop-blur-sm border-t border-primary/10 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h4 className="font-headline-md text-headline-md text-primary uppercase">{t.fleetSpecialTitle}</h4>
                <p className="text-on-surface-variant font-body-md mt-1 text-sm">{t.fleetSpecialDesc}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Quaternary Item: Group Shot / Reliability */}
          <ScrollReveal direction={isRtl ? 'left' : 'right'} className="md:col-span-8 h-full">
            <div className="group relative overflow-hidden bg-surface-container border-t-2 border-primary gold-glow transition-all duration-500 min-h-[300px] h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-bright to-surface-dim">
              <div className="absolute inset-0 opacity-20 pointer-events-none honeycomb-pattern" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <div className="bg-primary/10 backdrop-blur-md px-6 py-3 border border-primary/30">
                  <span className="text-primary font-bold tracking-widest text-lg font-headline-md">
                    {t.fleetReliability}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Specialized Services: Mobilya Montaj */}
      <section className="bg-surface-container-low py-32 border-y border-primary/10">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className={`grid md:grid-cols-2 gap-24 items-center ${isRtl ? 'direction-rtl' : ''}`}>
            
            <ScrollReveal direction={isRtl ? 'right' : 'left'} className={`space-y-6 ${isRtl ? 'order-1 md:order-2 text-right' : 'order-1 text-left'}`}>
              <h2 className="font-headline-xl text-headline-xl text-primary uppercase leading-none">
                {t.fleetAssemblyTitle}
              </h2>
              <h3 className="font-headline-md text-headline-md text-white mb-4 italic">
                {t.fleetAssemblySubtitle}
              </h3>
              <p className="text-on-surface-variant text-body-lg mb-8 text-body-lg leading-relaxed">
                {t.fleetAssemblyDesc}
              </p>
              <ul className={`space-y-4 flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                <li className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-primary">build</span>
                  <span className="font-label-sm tracking-widest text-on-surface text-xs font-bold">{t.fleetAssemblyBtn1}</span>
                </li>
                <li className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="font-label-sm tracking-widest text-on-surface text-xs font-bold">{t.fleetAssemblyBtn2}</span>
                </li>
                <li className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="material-symbols-outlined text-primary">speed</span>
                  <span className="font-label-sm tracking-widest text-on-surface text-xs font-bold">{t.fleetAssemblyBtn3}</span>
                </li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal direction={isRtl ? 'left' : 'right'} className={`relative w-full aspect-square max-w-[480px] mx-auto ${isRtl ? 'order-2 md:order-1' : 'order-2'}`}>
              <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-primary/30 pointer-events-none" />
              <div className="w-full h-full relative border border-primary/20 shadow-2xl overflow-hidden">
                <Image 
                  src="/images/furniture_transport.png" 
                  alt="Furniture Montage Care" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className={`absolute -bottom-4 ${isRtl ? '-left-4' : '-right-4'} p-6 gradient-gold text-on-primary shadow-xl font-bold font-headline-md`}>
                <span>{t.fleetAssemblyExpert}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Commercial Logistics Section */}
      <section className="py-32">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className={`grid md:grid-cols-2 gap-24 items-center ${isRtl ? 'direction-rtl' : ''}`}>
            
            <ScrollReveal direction={isRtl ? 'right' : 'left'} className={`relative w-full aspect-video max-w-[560px] mx-auto ${isRtl ? 'order-2' : 'order-2 md:order-1'}`}>
              <div className="w-full h-full relative border-l-4 border-primary shadow-2xl overflow-hidden min-h-[300px]">
                <Image 
                  src="/images/truck_warehouse.png" 
                  alt="B2B Logistics" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction={isRtl ? 'left' : 'right'} className={`space-y-6 ${isRtl ? 'order-1 text-right flex flex-col items-end' : 'order-1 md:order-2 text-left'}`}>
              <h2 className="font-headline-xl text-headline-xl text-primary uppercase leading-none">
                {t.fleetB2BTitle}
              </h2>
              <h3 className="font-headline-md text-headline-md text-white mb-4 italic">
                {t.fleetB2BSubtitle}
              </h3>
              <p className="text-on-surface-variant text-body-lg mb-8 text-body-lg leading-relaxed">
                {t.fleetB2BDesc}
              </p>
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="p-6 bg-surface-container-high border-t border-primary/20 hover:border-primary transition-colors text-center">
                  <span className="font-headline-md text-primary block mb-2 text-xl font-bold">{t.fleetSupport}</span>
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">24/7 SUPPORT</span>
                </div>
                <div className="p-6 bg-surface-container-high border-t border-primary/20 hover:border-primary transition-colors text-center">
                  <span className="font-headline-md text-primary block mb-2 text-xl font-bold">{t.fleetSecure}</span>
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">GUARANTEED</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
