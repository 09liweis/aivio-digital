export interface MenuItem {
  key: 'home' | 'googleAdsAudit' | 'googleAdsManagement' | 'caseStudy' | 'aboutUs' | 'blog' | 'contactUs';
  href: string;
}

export function getMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'home', href: `/${currentLang}` },
    { key: 'googleAdsAudit', href: `/${currentLang}/google-ads-audit` },
    { key: 'googleAdsManagement', href: `/${currentLang}/google-ads-management` },
    { key: 'caseStudy', href: `/${currentLang}/case-study` },
    { key: 'aboutUs', href: `/${currentLang}/about-us` },
    { key: 'contactUs', href: `/${currentLang}/contact` },
  ];
}

export function getHeaderMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'googleAdsAudit', href: `/${currentLang}/google-ads-audit` },
    { key: 'googleAdsManagement', href: `/${currentLang}/google-ads-management` },
    { key: 'caseStudy', href: `/${currentLang}/case-study` },
    { key: 'aboutUs', href: `/${currentLang}/about-us` },
    { key: 'blog', href: `/${currentLang}/blog` },
  ];
}
