// ============================================================================
// 📝 KİŞİSEL VERİLER - TÜM İÇERİĞİNİ BURADAN GÜNCELLEYEBİLİRSİN
// ============================================================================
// Bu dosyayı düzenleyerek sitedeki tüm bilgilerini güncelleyebilirsin.
// Hiçbir bileşen dosyasına dokunmana gerek yok!
// ============================================================================

// ---------------------------------------------------------------------------
// 👤 HAKKIMDA
// ---------------------------------------------------------------------------
export const about = {
  /** Profil fotoğrafı (public klasörüne koy) */
  profileImage: '/profile.jpeg',

  /** İsim */
  name: 'Görkem Esendeniz',

  /** Ünvan / Başlık (TR / EN) */
  title: {
    tr: 'Bilgisayar Mühendisliği Öğrencisi',
    en: 'Computer Engineering Student',
  },

  /** Hakkımda biyografi metinleri (TR / EN) */
  bio: {
    tr: [
      'Merhaba! Ben Görkem. Bilgisayar mühendisliği eğitimim boyunca C#, C++, HTML, CSS, JavaScript ve Java gibi dillerde kapsamlı dersler aldım. Özellikle veri yapıları ve algoritmalar konusunda kendimi sürekli geliştirmeye çalışıyorum.',
      'Kariyer hedefim olarak Java ekosisteminde uzmanlaşmayı ve bu alanda projeler üretmeyi hedefliyorum. Bunun yanı sıra, çağımızın gerekliliği olan yapay zeka destekli geliştirme süreçlerini ve vibe coding yaklaşımını da benimsedim — projelerimde AI araçlarını aktif ve verimli bir şekilde kullanıyorum.',
      'Teknolojiyi sadece öğrenmekle kalmayıp, onu yaratıcı ve akılda kalıcı projelere dönüştürmeyi seviyorum. Bu Windows XP temalı portföy de bunun küçük bir örneği!',
    ],
    en: [
      'Hi there! I\'m Görkem. Throughout my computer engineering education, I\'ve taken comprehensive courses in C#, C++, HTML, CSS, JavaScript, and Java. I\'m particularly focused on continuously improving my skills in data structures and algorithms.',
      'My career goal is to specialize in the Java ecosystem and build robust projects in this field. Additionally, I\'ve fully embraced AI-assisted development workflows and the vibe coding approach — I actively and efficiently leverage AI tools throughout my projects.',
      'I don\'t just learn technology; I love turning it into creative, memorable projects. This Windows XP themed portfolio is just a small example of that!',
    ],
  },
};

// ---------------------------------------------------------------------------
// 📁 PROJELERİM
// ---------------------------------------------------------------------------
export interface Project {
  /** Proje adı */
  name: string;
  /** Kısa açıklama / kullanılan teknolojiler */
  description: string;
  /** Benzersiz slug — detay penceresi açmak için kullanılır */
  slug: string;
  /** Opsiyonel: Proje linki */
  url?: string;
  /** Detaylı proje açıklaması */
  longDescription?: string;
  /** Proje görselleri (public klasörüne konulacak, ör: '/projects/slug/1.png') */
  images?: string[];
  /** Kullanılan teknolojiler listesi */
  techStack?: string[];
  /** Canlı demo linki */
  liveUrl?: string;
  /** GitHub repo linki */
  repoUrl?: string;
}

export interface ProjectCategories {
  vibeCoding: Project[];
  selfBuilt: Project[];
}

/** Kategori başlıkları */
export const projectCategoryLabels = {
  tr: { vibeCoding: '🤖 AI Destekli Projeler (Vibe Coding)', selfBuilt: '🛠️ Sıfırdan Geliştirdiğim Projeler' },
  en: { vibeCoding: '🤖 AI-Assisted Projects (Vibe Coding)', selfBuilt: '🛠️ Built From Scratch' },
};

export const projects: { tr: ProjectCategories; en: ProjectCategories } = {
  tr: {
    vibeCoding: [
      { name: 'Portföy Sitesi', slug: 'portfolio', description: 'Windows XP Konseptli — React & TypeScript' },
      { name: 'EV Rota Optimizasyonu', slug: 'ev-route-optimizer', description: '.NET & React — Elektrikli araç rota planlama' },
    ],
    selfBuilt: [
      { name: 'Hisse Senedi Analizi', slug: 'stock-analysis', description: 'Java, Spring Boot' },
      { name: 'Neurocine', slug: 'neurocine', description: 'Java, XML' },
    ],
  },
  //english
  en: {
    vibeCoding: [
      { name: 'Portfolio Website', slug: 'portfolio', description: 'Windows XP Concept — React & TypeScript' },
      { name: 'EV Route Optimizer', slug: 'ev-route-optimizer', description: '.NET & React & Python — Electric vehicle route planning' },
    ],
    selfBuilt: [
      { name: 'Stock Market Analysis', slug: 'stock-analysis', description: 'Java, Spring Boot' },
      { name: 'Neurocine', slug: 'neurocine', description: 'Java, XML' },
    ],
  },
};

// ---------------------------------------------------------------------------
// 📞 İLETİŞİM
// ---------------------------------------------------------------------------
export interface ContactField {
  /** Etiket (ör: "E-posta:", "GitHub:") */
  label: string;
  /** Değer (ör: "ornek@email.com") */
  value: string;
  /** Opsiyonel: tıklanabilir link */
  url?: string;
}

export const contact: { tr: ContactField[]; en: ContactField[] } = {
  tr: [
    { label: 'E-posta:', value: 'gorkem.esendeniz@icloud.com', url: 'mailto:gorkem.esendeniz@icloud.com' },
    { label: 'GitHub:', value: 'https://github.com/Gorkemesndnz', url: 'https://github.com/Gorkemesndnz' },
    { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/görkem-esendeniz/', url: 'https://www.linkedin.com/in/g%C3%B6rkem-esendeniz/' },
  ],
  en: [
    { label: 'Email:', value: 'gorkem.esendeniz@icloud.com', url: 'mailto:gorkem.esendeniz@icloud.com' },
    { label: 'GitHub:', value: 'https://github.com/Gorkemesndnz', url: 'https://github.com/Gorkemesndnz' },
    { label: 'LinkedIn:', value: 'https://www.linkedin.com/in/görkem-esendeniz/', url: 'https://www.linkedin.com/in/g%C3%B6rkem-esendeniz/' },
  ],
};

// ---------------------------------------------------------------------------
// 📄 ÖZGEÇMİŞ (CV)
// ---------------------------------------------------------------------------
export const cv = {
  /** İsim (CV başlığında görünür) */
  fullName: 'Görkem Esendeniz',
  /** CV dosyası yolu (public klasöründe olmalı) */
  filePath: '/cv.pdf',
  /** İndirilen dosyanın adı */
  downloadFileName: 'Gorkem_Esendeniz_CV.pdf',
};
