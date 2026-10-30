import type { Localized } from "@/lib/i18n";

export interface ProjectLink {
  kind: "live" | "github";
  href: string;
}

export interface Project {
  slug: string;
  title: Localized;
  category: Localized;
  description: Localized;
  highlight: Localized;
  image: { src: string; alt: Localized; width: number; height: number };
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "sentinelscope",
    title: { en: "SentinelScope", tr: "SentinelScope" },
    category: { en: "Security", tr: "Güvenlik" },
    description: {
      en: "A real-time security intelligence platform that analyses a domain or IP address and turns its security signals into a single, explainable risk score.",
      tr: "Bir domain ya da IP adresini analiz edip güvenlik sinyallerini tek ve açıklanabilir bir risk skoruna çeviren gerçek zamanlı güvenlik istihbaratı platformu.",
    },
    highlight: {
      en: "Scoring reports “unavailable” instead of assuming “safe” when data is missing.",
      tr: "Veri eksik olduğunda “güvenli” varsaymak yerine “bilinmiyor” der.",
    },
    image: {
      src: "/images/sentinelscope.webp",
      alt: {
        en: "SentinelScope dashboard showing a domain risk report",
        tr: "Bir domain risk raporunu gösteren SentinelScope paneli",
      },
      width: 800,
      height: 450,
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Docker"],
    links: [
      { kind: "live", href: "https://sentinelscope-nu.vercel.app/" },
      { kind: "github", href: "https://github.com/mehmet-yuksell/sentinelscope-security" },
    ],
  },
  {
    slug: "bist30",
    title: { en: "BIST 30 Technical Analysis", tr: "BIST 30 Teknik Analiz Paneli" },
    category: { en: "Data", tr: "Veri" },
    description: {
      en: "A Streamlit dashboard for BIST 30 stocks with indicators written from scratch and a look-ahead-free backtesting engine.",
      tr: "BIST 30 hisseleri için sıfırdan yazılmış göstergeler ve ileriye bakış hatası olmayan bir backtest motoru içeren Streamlit paneli.",
    },
    highlight: {
      en: "Every indicator is implemented by hand — no TA library.",
      tr: "Tüm göstergeler hazır kütüphane olmadan elle yazıldı.",
    },
    image: {
      src: "/images/bist30.webp",
      alt: {
        en: "BIST 30 technical analysis dashboard with price chart and indicators",
        tr: "Fiyat grafiği ve göstergelerle BIST 30 teknik analiz paneli",
      },
      width: 800,
      height: 450,
    },
    tags: ["Python", "Streamlit", "pandas", "NumPy", "pytest"],
    links: [
      { kind: "live", href: "https://bist30-opsputfhf9b9i6kkjnyefc.streamlit.app/" },
      { kind: "github", href: "https://github.com/mehmet-yuksell/Bist30" },
    ],
  },
  {
    slug: "mombykind",
    title: { en: "Mombykind Vaccine Agenda", tr: "Mombykind Aşı Ajandası" },
    category: { en: "Health Tech", tr: "Sağlık Teknolojisi" },
    description: {
      en: "A standalone, role-based vaccine tracker that follows the child immunisation schedule using LOINC / SNOMED-CT standards.",
      tr: "Çocuk aşı takvimini LOINC / SNOMED-CT standartlarıyla takip eden, rol tabanlı bağımsız bir aşı takip modülü.",
    },
    highlight: {
      en: "Designed to run on its own, independent of the larger platform.",
      tr: "Büyük sisteme bağımlı olmadan tek başına çalışacak şekilde tasarlandı.",
    },
    image: {
      src: "/images/mombykind.webp",
      alt: {
        en: "Mombykind vaccine agenda mobile app screens",
        tr: "Mombykind aşı ajandası mobil uygulama ekranları",
      },
      width: 800,
      height: 450,
    },
    tags: ["NestJS", "PostgreSQL", "Flutter", "Docker", "Swagger"],
    links: [
      { kind: "github", href: "https://github.com/mehmet-yuksell/mombykind-vaccine-tracker" },
    ],
  },
  {
    slug: "cozy-sort",
    title: { en: "Cozy Sort", tr: "Cozy Sort" },
    category: { en: "Game", tr: "Oyun" },
    description: {
      en: "A relaxing sort-puzzle mobile game: tidy up rooms across procedurally generated levels, each one verified as solvable.",
      tr: "Rahatlatıcı bir sıralama bulmacası: her biri çözülebilir olduğu doğrulanmış prosedürel seviyelerde odaları düzenle.",
    },
    highlight: {
      en: "A built-in solver guarantees players never hit an impossible level.",
      tr: "Dahili çözücü, oyuncunun asla çözümsüz bir seviyeye düşmemesini sağlar.",
    },
    image: {
      src: "/images/cozy-sort.webp",
      alt: {
        en: "Cozy Sort gameplay showing a room puzzle",
        tr: "Bir oda bulmacasını gösteren Cozy Sort oyun ekranı",
      },
      width: 800,
      height: 450,
    },
    tags: ["TypeScript", "Phaser", "Vite", "Capacitor"],
    links: [
      { kind: "live", href: "https://cozysort.vercel.app/" },
      { kind: "github", href: "https://github.com/mehmet-yuksell/ilk_oyun" },
    ],
  },
];
