'use client';

import React, { useState, useEffect } from 'react';
import { Language, LanguageContext, locales } from '../locales';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    // Check local storage or browser language
    const savedLang = localStorage.getItem('sahin_lang') as Language;
    if (savedLang && (savedLang === 'tr' || savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    } else {
      // Default to Turkish since it's the brand country
      setLanguage('tr');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('sahin_lang', lang);
  };

  useEffect(() => {
    // Dynamically update document properties for accessibility and text directions
    document.documentElement.lang = language;
    document.documentElement.dir = locales[language].dir;
    if (language === 'ar') {
      document.documentElement.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
    } else {
      document.documentElement.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: locales[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      <div dir={locales[language].dir} className="flex flex-col min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
