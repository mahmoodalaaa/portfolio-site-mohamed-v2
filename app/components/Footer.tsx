'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../locales';

export default function Footer() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <footer id="contact" className="bg-surface-container-lowest border-t border-primary/10 pt-20 pb-12 relative z-10">
      <div className={`max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter mb-20 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
        <div className={`md:col-span-2 space-y-6 flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-20 overflow-hidden bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <Image 
                src="/images/logo.png" 
                alt="Şahin Nakliye Logo" 
                width={72} 
                height={72} 
                className="object-contain"
              />
            </div>
            <span className="text-headline-md font-headline-xl text-primary uppercase tracking-widest">
              ŞAHİN NAKLİYE
            </span>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            {t.footerDesc}
          </p>
          <div className="space-y-4 pt-4">
            <div className={`flex items-start gap-3 text-on-surface ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="material-symbols-outlined text-primary pt-1">call</span>
              <div className={`flex flex-col ${isRtl ? 'items-end' : 'items-start'}`}>
                <a className="hover:text-primary transition-colors font-mono" href="tel:05373277186">
                  {t.footerPhone}
                </a>
                <a className="hover:text-primary transition-colors font-mono" href="tel:05315412975">
                  {t.footerPhone2}
                </a>
              </div>
            </div>
            <div className={`flex items-center gap-3 text-on-surface ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>{t.footerAddress}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-headline-md text-body-lg text-primary uppercase">{t.footerLinks}</h4>
          <ul className="space-y-4 font-body-md">
            <li><Link className="text-on-surface-variant hover:text-primary transition-all" href="/">{t.navHome}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all" href="/#services">{t.navServices}</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary transition-all" href="/fleet">{t.navFleet}</Link></li>
          </ul>
        </div>
      </div>

      <div className={`max-w-container-max mx-auto px-margin-desktop pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
        <p className="font-label-sm text-on-surface-variant">{t.footerRights}</p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
