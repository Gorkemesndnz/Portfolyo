// ============================================================================
// 🌍 DİL ÇEVİRİLERİ — Arayüz metinlerini buradan güncelleyebilirsin
// ============================================================================
// Not: Kişisel içerikler (biyografi, projeler, iletişim) data.ts dosyasındadır.
// Bu dosya sadece buton etiketleri, pencere başlıkları gibi UI metinlerini içerir.
// ============================================================================

export type LanguageCode = 'tr' | 'en';

export const translations = {
  tr: {
    // Pencere başlıkları
    aboutTitle: 'Hakkımda',
    projectsTitle: 'Projelerim',
    contactTitle: 'İletişim',
    cvTitle: 'Özgeçmişim',

    // Butonlar & etiketler
    start: 'Başlat',
    close: 'Kapat',
    view: 'Görüntüle',
    download: 'Bilgisayara İndir',

    // İçerik metinleri
    cvText: 'Özgeçmişimi bilgisayarınıza indirmek veya tarayıcıda görüntülemek için aşağıdaki butonları kullanabilirsiniz.',
    contactDetails: 'İletişim Bilgileri',

    // Dil seçim modalı
    sysPrefs: 'Sistem Ayarları',
    langPrompt: 'Lütfen dil seçiminizi yapın.',
    langTr: 'Türkçe (Turkish)',
    langEn: 'English (İngilizce)',
  },
  en: {
    // Window titles
    aboutTitle: 'About Me',
    projectsTitle: 'My Projects',
    contactTitle: 'Contact',
    cvTitle: 'My Resume',

    // Buttons & labels
    start: 'Start',
    close: 'Close',
    view: 'View',
    download: 'Download to PC',

    // Content texts
    cvText: 'You can use the buttons below to view my resume in the browser or download it to your computer.',
    contactDetails: 'Contact Details',

    // Language selection modal
    sysPrefs: 'System Preferences',
    langPrompt: 'Please select your language.',
    langTr: 'Türkçe (Turkish)',
    langEn: 'English (İngilizce)',
  },
};
