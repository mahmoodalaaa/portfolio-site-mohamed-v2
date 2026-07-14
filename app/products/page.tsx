'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../locales';
import ScrollReveal from '../components/ScrollReveal';

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <div className="flex-1 bg-background text-on-background font-body-md honeycomb-bg min-h-screen pt-28">
      <main className="max-w-container-max mx-auto px-margin-desktop py-20 space-y-32">
        
        {/* Header Section */}
        <section className="relative text-center space-y-6">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]">cable</span>
          </div>
          <ScrollReveal direction="up" className="space-y-6">
            <h1 className="font-headline-xl text-headline-xl gold-gradient-text uppercase">
              {t.prodTitle}
            </h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg text-body-lg">
              {t.prodDesc}
            </p>
            <div className="faded-separator mt-8" />
          </ScrollReveal>
        </section>

        {/* Packing Equipment Section */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">package_2</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary">
              {t.prodEquipTitle}
            </h2>
          </ScrollReveal>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter ${isRtl ? 'direction-rtl' : ''}`}>
            {/* Box 1: Professional Packaging */}
            <ScrollReveal direction="left" delay={100} className="flex flex-col h-full">
              <div className="bg-surface-container-high card-accent-border p-8 space-y-6 group transition-all hover:bg-surface-container-highest flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="aspect-square w-full relative overflow-hidden bg-black">
                    <Image 
                      src="/images/logistics_specialist.png" 
                      alt={t.prodPack1Title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                  <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-headline-md text-headline-md text-primary uppercase">{t.prodPack1Title}</h3>
                    <p className="text-on-surface-variant text-sm">{t.prodPack1Desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Box 2: Palletized Systems */}
            <ScrollReveal direction="up" delay={200} className="flex flex-col h-full">
              <div className="bg-surface-container-high card-accent-border p-8 space-y-6 group transition-all hover:bg-surface-container-highest flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="aspect-square w-full relative overflow-hidden bg-black">
                    <Image 
                      src="/images/partial_load.png" 
                      alt={t.prodPack2Title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                  <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-headline-md text-headline-md text-primary uppercase">{t.prodPack2Title}</h3>
                    <p className="text-on-surface-variant text-sm">{t.prodPack2Desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Box 3: Industrial Stretch */}
            <ScrollReveal direction="right" delay={300} className="flex flex-col h-full">
              <div className="bg-surface-container-high card-accent-border p-8 space-y-6 group transition-all hover:bg-surface-container-highest flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="aspect-square w-full relative overflow-hidden bg-black">
                    <Image 
                      src="/images/image.png" 
                      alt={t.prodPack3Title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>
                  <div className={`space-y-2 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-headline-md text-headline-md text-primary uppercase">{t.prodPack3Title}</h3>
                    <p className="text-on-surface-variant text-sm">{t.prodPack3Desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Special Products Section */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">chair</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary">
              {t.prodSpecialTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Box 1: Furniture Moving Sets */}
            <ScrollReveal direction={isRtl ? 'right' : 'left'} className="h-full">
              <div className={`flex flex-col md:flex-row bg-surface-container-high card-accent-border overflow-hidden h-full ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative min-h-[240px]">
                  <Image 
                    src="/images/furniture_transport.png" 
                    alt={t.prodMoveSetsTitle} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center space-y-4">
                  <h3 className="font-headline-md text-headline-md text-primary uppercase">{t.prodMoveSetsTitle}</h3>
                  <p className="text-on-surface-variant text-sm">{t.prodMoveSetsDesc}</p>
                  <ul className={`space-y-2 text-label-sm font-label-sm text-primary/80 uppercase tracking-wider text-xs flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                    <li className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="material-symbols-outlined text-sm">check_circle</span> 
                      <span>{t.prodMoveSetsBullet1}</span>
                    </li>
                    <li className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="material-symbols-outlined text-sm">check_circle</span> 
                      <span>{t.prodMoveSetsBullet2}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Box 2: Montage Tools */}
            <ScrollReveal direction={isRtl ? 'left' : 'right'} className="h-full">
              <div className={`flex flex-col md:flex-row bg-surface-container-high card-accent-border overflow-hidden h-full ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative min-h-[240px]">
                  <Image 
                    src="/images/image.png" 
                    alt={t.prodMontageTitle} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center space-y-4">
                  <h3 className="font-headline-md text-headline-md text-primary uppercase">{t.prodMontageTitle}</h3>
                  <p className="text-on-surface-variant text-sm">{t.prodMontageDesc}</p>
                  <ul className={`space-y-2 text-label-sm font-label-sm text-primary/80 uppercase tracking-wider text-xs flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                    <li className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="material-symbols-outlined text-sm">check_circle</span> 
                      <span>{t.prodMontageBullet1}</span>
                    </li>
                    <li className={`flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="material-symbols-outlined text-sm">check_circle</span> 
                      <span>{t.prodMontageBullet2}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Fleet Specifications Section */}
        <section className="space-y-12">
          <ScrollReveal direction="up" className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary">
              {t.prodFeaturesTitle}
            </h2>
          </ScrollReveal>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter ${isRtl ? 'direction-rtl' : ''}`}>
            <ScrollReveal direction="up" className="bg-surface-container-low border border-outline-variant/20 p-10 relative overflow-hidden group">
              <div className={`absolute -top-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none ${isRtl ? '-left-8' : '-right-8'}`}>
                <span className="material-symbols-outlined text-[120px]">aspect_ratio</span>
              </div>
              <div className={`relative z-10 flex flex-col ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}>
                <h4 className="font-label-sm text-label-sm text-primary uppercase mb-2 text-xs font-bold">
                  {t.prodCapacityTitle}
                </h4>
                <h3 className="font-headline-md text-headline-md mb-4 uppercase">
                  {t.prodCapacitySub}
                </h3>
                <p className="text-on-surface-variant text-sm">
                  {t.prodCapacityDesc}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
