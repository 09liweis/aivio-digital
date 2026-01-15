export interface MenuItem {
  key: 'home' | 'googleAdsAudit' | 'googleAdsManagement' | 'caseStudy' | 'aboutUs' | 'blog' | 'contactUs';
  href: string;
}

export function getMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'home', href: currentLang === 'en' ? '/' : '/zh' },
    { key: 'googleAdsAudit', href: currentLang === 'en' ? '/google-ads-audit' : '/zh/google-ads-audit' },
    { key: 'googleAdsManagement', href: currentLang === 'en' ? '/google-ads-management' : '/zh/google-ads-management' },
    { key: 'caseStudy', href: currentLang === 'en' ? '/case-study' : '/zh/case-study' },
    { key: 'aboutUs', href: currentLang === 'en' ? '/about-us' : '/zh/about-us' },
    { key: 'contactUs', href: currentLang === 'en' ? '/contact' : '/zh/contact' },
  ];
}

export function getHeaderMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'googleAdsAudit', href: currentLang === 'en' ? '/google-ads-audit' : '/zh/google-ads-audit' },
    { key: 'googleAdsManagement', href: currentLang === 'en' ? '/google-ads-management' : '/zh/google-ads-management' },
    { key: 'caseStudy', href: currentLang === 'en' ? '/case-study' : '/zh/case-study' },
    { key: 'aboutUs', href: currentLang === 'en' ? '/about-us' : '/zh/about-us' },
    { key: 'blog', href: currentLang === 'en' ? '/blog' : '/zh/blog' },
  ];
}
