// src/lib/newsData.js

// ملاحظة: تأكد من أن أسماء ملفات الصور هنا تطابق تمامًا أسماء الملفات في مجلد /public
// واستخدم الأحرف الصغيرة لأسماء الملفات.
export const allNewsData = [
    { id: "s1", type: "slider", headline: "عاجل: تطورات جديدة في الساحة السياسية الإقليمية تؤثر على الأسواق", image: "/slider_image_1.png", alt: "صورة مجردة تعبر عن السياسة الإقليمية", category: "سياسة", link: "/news/political-developments" },
    { id: "s2", type: "slider", headline: "مؤشرات الاقتصاد العالمي تظهر تباطؤًا طفيفًا هذا الربع", image: "/slider_image_2.png", alt: "رسم بياني يوضح مؤشرات اقتصادية", category: "اقتصاد", link: "/news/global-economy-slowdown" },
    { id: "s3", type: "slider", headline: "فوز مثير لفريق كرة القدم الوطني في المباراة الودية الأخيرة", image: "/slider_image_3.png", alt: "لاعبو كرة قدم يحتفلون بالفوز", category: "رياضة", link: "/news/national-team-wins" },
    { id: "s4", type: "slider", headline: "إطلاق أحدث هاتف ذكي بتقنيات مبتكرة وكاميرا فائقة الدقة", image: "/placeholder_tech.png", alt: "صورة لهاتف ذكي حديث", category: "تكنولوجيا", link: "/news/new-smartphone-launch" },
    { id: "s5", type: "slider", headline: "تحذيرات من موجة طقس حارة تضرب المنطقة خلال الأيام القادمة", image: "/placeholder_weather.png", alt: "صورة شمس ساطعة تعبر عن الطقس الحار", category: "طقس", link: "/news/heatwave-warning" }
  ];
  
  export const otherNewsData = [
    {
      id: "n2",
      title: "عنوان الخبر الثاني الطويل نسبيا لاختبار التنسيق",
      imageUrl: "/screenshot_1.png", // تم تغيير الاسم إلى screenshot_1.png
      alt: "صورة الخبر الثاني",
      summary: "هذا نص تجريبي لملخص الخبر الثاني وهو أطول قليلاً من الملخص السابق...",
      category: "اقتصاد",
      link: "/news/long-headline-test"
    },
    {
      id: "n3",
      title: "عنوان الخبر الثالث",
      summary: "ملخص قصير للخبر الثالث هنا.",
      category: "رياضة",
      link: "/news/third-news-item"
      // لا يوجد imageUrl لهذا الخبر في HTML الأصلي
    },
    {
      id: "n4",
      title: "عنوان خبر رابع للتجربة",
      imageUrl: "/placeholder_tech.png",
      alt: "صورة الخبر الرابع",
      summary: "تفاصيل موجزة عن الخبر الرابع تظهر هنا.",
      category: "تكنولوجيا",
      link: "/news/fourth-test-news"
    }
  ];
  
  export const latestNewsSidebarData = [
      { id: "ln1", title: "خبر عاجل 1", link: "/news/breaking-1" },
      { id: "ln2", title: "خبر عاجل 2", link: "/news/breaking-2" },
      { id: "ln3", title: "خبر عاجل 3", link: "/news/breaking-3" },
  ];
  
  // البيانات المدمجة للشريط الإخباري والسلايدر
  export const tickerAndSliderData = allNewsData; // تستخدم نفس البيانات