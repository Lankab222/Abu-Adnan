export const siteConfig = {
  name: 'دهانات وديكورات الرياض',
  description: 'مؤسسة طيف الاعمار للاصباغ والديكورات وجميع اعمال الترميمات. اصباغ ديكورات ابوظبي بني ياس، افضل كادر فني متخصص، أسعار مناسبة، دقة وجودة في التنفيذ في جميع أعمالكم.',
  logo: {
    src: '/logo.svg',   // مسار الشعار في الوضع الفاتح
    srcDark: '/logo.svg', // مسار الشعار في الوضع الداكن
    alt: 'دهانات وديكورات الرياض', 
    strategy: 'invert' as 'invert' | 'switch' | 'static',
  },
  ogImage: '/og-image1.jpg', // الصورة التي تظهر عند مشاركة الرابط في الواتساب أو السوشيال ميديا
  primaryColor: '#00008B', 
  search: {
    enabled: true,
  },
  announcement: {
    enabled: false,   // اجعلها true إذا أردت إظهار شريط الإعلانات العلوي
    id: 'announcement_v1', 
    link: '/services', // رابط الإعلان
  },
  blog: {
    postsPerPage: 6, // عدد المقالات في كل صفحة
  },
  contact: {
    email: {
      support: 'support@example.com',
      sales: 'sales@example.com',
    },
    phone: {
      main: '+967730266665',
      label: 'اتصل بنا',
    },
    address: {
      city: 'الرياض',
      full: 'المملكة العربية السعودية',
    }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: {
        id: import.meta.env.GA_ID || '',
        enabled: import.meta.env.GA_ENABLED === 'true',
      },
      rybbit: {
        id: import.meta.env.RYBBIT_ID || '',
        src: import.meta.env.RYBBIT_SRC || 'https://rybbit.example.com/api/script.js',
        enabled: import.meta.env.RYBBIT_ENABLED === 'true',
      },
      umami: {
        id: import.meta.env.UMAMI_ID || '',
        src: import.meta.env.UMAMI_SRC || 'https://analytics.umami.is/script.js',
        enabled: import.meta.env.UMAMI_ENABLED === 'true',
      },
    },
  }
};

// تم تعريب القائمة العلوية بالكامل
export const NAV_LINKS = [
  { 
    href: '/', 
    label: 'الرئيسية',
    children: [
        { href: '/', label: 'الرئيسية', description: 'ما الذي يجعلنا الأفضل', icon: 'Zap' },
    ]
  },
  { 
    href: '/blog', 
    label: 'خدماتنا',
    children: [
      { href: '/blog', label: 'خدماتنا', description: 'أحدث المقالات والنصائح', icon: 'Newspaper' },
      { href: '/design', label: 'معرض الأعمال', description: 'تصفح أحدث مشاريعنا', icon: 'LayoutGrid' },
    ]
  },
  { 
    href: '/about', 
    label: 'حولنا',
    children: [
        { href: '/about', label: 'من نحن', description: 'قصتنا ورؤيتنا', icon: 'Building2' },
        { href: '/contact', label: 'اتصل بنا', description: 'نحن هنا لخدمتك', icon: 'Mail' },
    ]
  },
];

// روابط الأزرار والسوشيال ميديا (يمكنك وضع روابط العميل الحقيقية هنا)
export const ACTION_LINKS = {
  primary: { label: 'اتصل بنا', href: 'tel:+967730266665' },
  social: { 
    twitter: '#', // ضع رابط تويتر هنا
    linkedin: '#', // ضع رابط لينكد إن هنا
    github: '#',
    youtube: '#',
    facebook: '#' // ضع رابط فيسبوك هنا
  }
};

// تم تعريب روابط الفوتر وتجريدها من اللغات
export const FOOTER_LINKS = {
  product: {
    title: 'روابط سريعة',
    links: [
      { href: '/', label: 'الرئيسية' },
      { href: '/about', label: 'من نحن' },
      { href: '/blog', label: 'خدماتنا' },
      { href: '/contact', label: 'اتصل بنا' },
    ],
  },
  legal: {
    title: 'قانوني',
    links: [
      { href: '/privacy', label: 'سياسة الخصوصية' },
      { href: '/terms', label: 'الشروط والأحكام' }
    ],
  },
};