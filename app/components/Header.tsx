'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage, Language } from '../locales';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageNames: Record<Language, string> = {
    tr: 'TR',
    en: 'EN',
    ar: 'AR'
  };

  const navLinks = [
    { href: '/', label: t.navHome },
    { href: '/fleet', label: t.navFleet },
    { href: '/products', label: t.navEquipment }
  ];

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const isRtl = language === 'ar';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-primary/10 transition-all duration-300 ${
        isScrolled 
          ? 'h-16 bg-surface-container-lowest/95 backdrop-blur-md shadow-lg' 
          : 'h-20 bg-surface-container-lowest/80 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className={`flex justify-between items-center px-margin-desktop h-full w-full max-w-container-max mx-auto ${isRtl ? 'flex-row-reverse' : ''}`}>
        <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14 overflow-hidden bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
              <Image 
                src="/images/logo.png" 
                alt="Şahin Nakliye Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            <span className="text-headline-md font-headline-xl text-primary uppercase tracking-widest hidden md:block">
              ŞAHİN NAKLİYE
            </span>
          </Link>
        </div>

        <nav className={`hidden md:flex items-center gap-8 font-body-md text-body-md ${isRtl ? 'flex-row-reverse' : ''}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {/* Desktop Language Selector */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all duration-300 ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <span className="material-symbols-outlined text-xl">public</span>
              <span className="font-label-sm">{languageNames[language]}</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>

            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setDropdownOpen(false)}
                />
                <div className={`absolute ${isRtl ? 'left-0' : 'right-0'} mt-2 w-32 bg-surface-container-high/95 backdrop-blur-md shadow-2xl border border-primary/20 rounded z-50 overflow-hidden`}>
                  {(['tr', 'en', 'ar'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLangSelect(lang)}
                      className={`w-full block px-4 py-2 hover:bg-primary/10 text-on-surface text-sm transition-colors text-left ${isRtl ? 'text-right' : 'text-left'} ${
                        language === lang ? 'text-primary font-bold' : ''
                      }`}
                    >
                      {lang === 'tr' ? 'Türkçe (TR)' : lang === 'en' ? 'English (EN)' : 'العربية (AR)'}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden fixed left-0 right-0 bg-surface-container-lowest/98 backdrop-blur-lg border-b border-primary/10 shadow-2xl z-40 transition-all duration-300 ${
            isScrolled ? 'top-16' : 'top-20'
          }`}
        >
          <nav className={`flex flex-col p-6 gap-6 font-body-md text-body-md ${isRtl ? 'text-right' : 'text-left'}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 border-b border-primary/5 transition-colors ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Inline Language Selector inside Mobile Menu */}
            <div className={`flex flex-wrap gap-3 pt-4 border-t border-primary/10 ${isRtl ? 'justify-end' : 'justify-start'}`}>
              {(['tr', 'en', 'ar'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 text-xs border rounded transition-colors ${
                    language === lang 
                      ? 'border-primary bg-primary/10 text-primary font-bold' 
                      : 'border-primary/20 text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {lang === 'tr' ? 'TR' : lang === 'en' ? 'EN' : 'AR'}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
