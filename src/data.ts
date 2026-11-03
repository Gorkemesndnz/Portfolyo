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
  /** Mobil uygulama olup olmadığı */
  isMobileApp?: boolean;
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
      {
        name: 'Portföy Sitesi',
        slug: 'portfolio',
        description: 'Windows XP Konseptli — React & TypeScript',
        longDescription: 'React ve TypeScript kullanılarak geliştirilmiş, retro Windows XP temasını modern web teknolojileriyle birleştiren interaktif bir kişisel portföy web sitesidir. Kullanıcılara tanıdık bir masaüstü deneyimi sunmak amacıyla pencerelerin sürüklenebilmesi (Draggable), büyütülüp küçültülmesi, dil seçeneği (Türkçe & İngilizce), başlat menüsü ve özelleştirilmiş pencereler gibi özellikler barındırır.',
        techStack: ['React', 'TypeScript', 'Vite', 'CSS3', 'xp.css', 'react-draggable'],
        images: ['/projects/portfolio/1.png', '/projects/portfolio/2.png']
      },
      { name: 'EV Rota Optimizasyonu', slug: 'ev-route-optimizer', description: '.NET & React — Elektrikli araç rota planlama' },
      { name: 'Kansızlık Tanısında Anemi', slug: 'anemia-diagnosis', description: 'Python' },
    ],
    selfBuilt: [
      {
        name: 'UAB Sınav Sonuç Sistemi',
        slug: 'uab',
        description: 'Java 25, Spring Boot 3 & React — T.C. Ulaştırma ve Altyapı Bakanlığı Sınav & Sonuç Platformu',
        longDescription: 'T.C. Ulaştırma ve Altyapı Bakanlığı için geliştirilmiş güvenli Sınav Sonuç Yönetim ve Görüntüleme Sistemi. Yönetici ve aday olmak üzere iki farklı rol sunar; yöneticiler sınav tanımlama, sonuç kaydetme, düzenleme, silme ve Excel ile toplu içe aktarma işlemlerini gerçekleştirebilirken, adaylar TC kimlik ve şifreleriyle kendi sınav sonuçlarını görüntüleyebilmektedir. KVKK ve veri güvenliği standartları doğrultusunda TC kimlik numaraları veritabanında AES-256 ile şifreli ve HMAC tabanlı kör dizinleme (blind index) ile aranabilir olarak saklanır. Sistem; JWT tabanlı oturum yönetimi, Flyway veritabanı versiyonlama, işlem denetim kayıtları (audit logging) ve API hız sınırlama mekanizmaları barındırır.',
        techStack: ['Java 25', 'Spring Boot 3', 'PostgreSQL 16', 'Flyway Migrations', 'React', 'Vite', 'Docker & Docker Compose', 'Spring Security', 'JWT Auth', 'AES-256 & HMAC', 'Mantine UI', 'Apache POI'],
        images: [
          '/projects/uab/1.png',
          '/projects/uab/2.png',
          '/projects/uab/3.png',
          '/projects/uab/4.png'
        ]
      },
      {
        name: 'Büyük Adım Eğitim Kurumu',
        slug: 'buyuk-adim',
        description: 'Next.js 16, React 19 & Sanity CMS — Özel Eğitim & Rehabilitasyon Kurumsal Web Sitesi',
        longDescription: 'Büyük Adım Özel Eğitim ve Rehabilitasyon Merkezi için geliştirilmiş modern, kurumsal, yüksek performanslı ve SEO/erişilebilirlik (A11y) standartlarına tam uyumlu web platformudur. İçerik yönetimi için headless Sanity Studio entegre edilmiştir. Dinamik hizmet sayfaları, uzman kadro rehberi, fotoğraf ve video galerisi, blog/rehber makaleleri ve Cloudflare Turnstile ile korunan güvenli iletişim formu içermektedir.',
        techStack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Sanity Studio CMS', 'Framer Motion', 'Zod', 'Cloudflare Turnstile', 'Web3Forms', 'Vitest & Playwright'],
        images: [
          '/projects/buyukadim/1.png',
          '/projects/buyukadim/2.png',
          '/projects/buyukadim/3.png',
          '/projects/buyukadim/4.png',
          '/projects/buyukadim/5.png'
        ],
        liveUrl: 'https://buyukadimrehabilitasyon.com',
        repoUrl: 'https://github.com/Gorkemesndnz/BuyukAdimEgitimKurumuKurumsalWebSitesi'
      },
      {
        name: 'AuraFinance',
        slug: 'aurafinance',
        description: 'Java, Spring Boot — Yapay Zeka Destekli Portföy Yönetim Platformu',
        longDescription: 'Ortaklaşa geliştirilmiş bir grup projesidir (takım çalışması). Farklı borsalardaki finansal varlıkları (kripto, hisse senedi, döviz, altın vb.) tek bir merkezde toplayarak gerçek zamanlı portföy yönetimi sunar. Google Gemini 2.5-Flash entegrasyonu sayesinde veri gizliliği standartlarına uygun biçimde akıllı finansal analizler ve yatırım önerileri üretir. Performans optimizasyonu için Redis önbellekleme mimarisi ve C3P0 bağlantı havuzu barındırır. Web katmanı güvenilirliği ise Spring Test (MockMvc), Mockito ve JUnit 5 ile test edilmiştir.',
        techStack: ['Java 18', 'Spring Boot', 'MySQL', 'Hibernate (JPA)', 'Redis Caching', 'Gemini AI API', 'Spring Security', 'C3P0', 'JUnit 5 & Mockito'],
        images: ['/projects/aurafinance/1.png', '/projects/aurafinance/2.png', '/projects/aurafinance/3.png', '/projects/aurafinance/4.png', '/projects/aurafinance/5.png']
      },
      {
        name: 'Neurocine',
        slug: 'neurocine',
        description: 'Java, XML — Gemini Entegrasyonlu Film/Dizi Öneri Mobil Uygulaması',
        longDescription: 'Material Design 3 bileşenlerine sadık kalınarak Java ve XML ile geliştirilmiş modern bir Android mobil uygulamasıdır. Gemini entegrasyonu sayesinde kullanıcılara kişiselleştirilmiş film ve dizi önerileri sunar. Kullanıcı kimlik doğrulama işlemleri için Firebase Authentication, veri yönetimi ve depolama için ise Cloud Firestore kullanılmıştır.',
        techStack: ['Android Studio', 'Java', 'XML Layouts', 'Material Design 3', 'Gemini API', 'Firebase Auth', 'Cloud Firestore'],
        images: ['/projects/neurocine/1.png', '/projects/neurocine/2.png'],
        isMobileApp: true
      },
    ],
  },
  //english
  en: {
    vibeCoding: [
      {
        name: 'Portfolio Website',
        slug: 'portfolio',
        description: 'Windows XP Concept — React & TypeScript',
        longDescription: 'An interactive personal portfolio website developed using React and TypeScript, combining a retro Windows XP theme with modern web technologies. Provides a familiar desktop experience for users, featuring draggable and resizable windows, localization (Turkish & English), a start menu, and custom themed windows.',
        techStack: ['React', 'TypeScript', 'Vite', 'CSS3', 'xp.css', 'react-draggable'],
        images: ['/projects/portfolio/1.png', '/projects/portfolio/2.png']
      },
      { name: 'EV Route Optimizer', slug: 'ev-route-optimizer', description: '.NET & React & Python — Electric vehicle route planning' },
      { name: 'Anemia Diagnosis', slug: 'anemia-diagnosis', description: 'Python' },
    ],
    selfBuilt: [
      {
        name: 'UAB Exam Result System',
        slug: 'uab',
        description: 'Java 25, Spring Boot 3 & React — Ministry of Transport & Infrastructure Exam Platform',
        longDescription: 'A secure Exam Result Management and Display System developed for the Republic of Turkey Ministry of Transport and Infrastructure. Provides distinct roles for administrators and candidates: administrators manage exams, results, bulk Excel imports, and monitor audit trails, while candidates securely view personal exam records. Built adhering to high data privacy and security standards, national ID numbers (TCKN) are encrypted in PostgreSQL using AES-256 alongside HMAC blind indexing for fast searchable lookups. Features JWT authentication, Flyway schema migrations, and API rate limiting.',
        techStack: ['Java 25', 'Spring Boot 3', 'PostgreSQL 16', 'Flyway Migrations', 'React', 'Vite', 'Docker & Docker Compose', 'Spring Security', 'JWT Auth', 'AES-256 & HMAC', 'Mantine UI', 'Apache POI'],
        images: [
          '/projects/uab/1.png',
          '/projects/uab/2.png',
          '/projects/uab/3.png',
          '/projects/uab/4.png'
        ]
      },
      {
        name: 'Büyük Adım Education Center',
        slug: 'buyuk-adim',
        description: 'Next.js 16, React 19 & Sanity CMS — Special Education & Rehabilitation Corporate Portal',
        longDescription: 'A modern, high-performance, accessible, and SEO-optimized corporate web platform developed for Büyük Adım Special Education and Rehabilitation Center. Integrates headless Sanity Studio for dynamic content management. Features dynamic education & rehabilitation service pages, specialist team directory, interactive media gallery, blog/resource articles, and a secured contact form protected with Cloudflare Turnstile.',
        techStack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Sanity Studio CMS', 'Framer Motion', 'Zod', 'Cloudflare Turnstile', 'Web3Forms', 'Vitest & Playwright'],
        images: [
          '/projects/buyukadim/1.png',
          '/projects/buyukadim/2.png',
          '/projects/buyukadim/3.png',
          '/projects/buyukadim/4.png',
          '/projects/buyukadim/5.png'
        ],
        liveUrl: 'https://buyukadimrehabilitasyon.com',
        repoUrl: 'https://github.com/Gorkemesndnz/BuyukAdimEgitimKurumuKurumsalWebSitesi'
      },
      {
        name: 'AuraFinance',
        slug: 'aurafinance',
        description: 'Java, Spring Boot — AI-Powered Portfolio Management Platform',
        longDescription: 'A collaborative group project (teamwork) developed using advanced Java technologies. It aggregates financial assets from various markets (crypto, stocks, fiat currencies, gold) into a single dashboard for real-time portfolio management. Integrates Google Gemini 2.5-Flash to generate privacy-focused financial insights and investment recommendations. Features performance optimizations including Redis caching and C3P0 connection pooling. The web layer reliability is validated using Spring Test (MockMvc), Mockito, and JUnit 5.',
        techStack: ['Java 18', 'Spring Boot', 'MySQL', 'Hibernate (JPA)', 'Redis Caching', 'Gemini AI API', 'Spring Security', 'C3P0', 'JUnit 5 & Mockito'],
        images: ['/projects/aurafinance/1.png', '/projects/aurafinance/2.png', '/projects/aurafinance/3.png', '/projects/aurafinance/4.png', '/projects/aurafinance/5.png']
      },
      {
        name: 'Neurocine',
        slug: 'neurocine',
        description: 'Java, XML — Gemini Integrated Movie/Show Recommendation Mobile App',
        longDescription: 'A modern Android mobile application developed with Java and XML, adhering to Material Design 3 guidelines. It offers personalized movie and TV show recommendations through Gemini AI integration. Uses Firebase Authentication for user authentication and Cloud Firestore for database services.',
        techStack: ['Android Studio', 'Java', 'XML Layouts', 'Material Design 3', 'Gemini API', 'Firebase Auth', 'Cloud Firestore'],
        images: ['/projects/neurocine/1.png', '/projects/neurocine/2.png'],
        isMobileApp: true
      },
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
