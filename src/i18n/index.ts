import { en } from './en';
import { zh } from './zh';

export const languages = {
  en: 'English',
  zh: '中文',
};

export const translations = {
  en,
  zh,
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language) {
  return translations[lang] || translations['en'];
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored && stored in translations) {
      return stored as Language;
    }
    const browserLang = navigator.language.split('-')[0];
    if (browserLang in translations) {
      return browserLang as Language;
    }
  }
  return 'en';
}
