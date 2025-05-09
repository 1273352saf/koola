// src/app/page.js
// 'use client'; // لا نحتاج 'use client' هنا إذا كانت كل المكونات الفرعية تتعامل مع حالتها الخاصة

// import { useEffect } from 'react'; // إذا أردت console.log
import NewsTicker from './components/NewsTicker';
import TopSection from './components/TopSection';
import NewsItem from './components/NewsItem';
import Sidebar from './components/Sidebar';

// استيراد البيانات من ملف lib
import { otherNewsData } from '@/lib/newsData';

export default function HomePage() {
  // useEffect(() => {
  //   console.log("موقع أخبار الكوله اليوم (Next.js) جاهز ويعمل!");
  // }, []);

  return (
    <> {/* استخدام Fragment لتجنب div إضافي غير ضروري */}
      <NewsTicker />
      <div className="main-content container">
        <main>
          <TopSection />
          {otherNewsData.map(news => (
            <NewsItem
              key={news.id}
              id={news.id} // تمرير id
              title={news.title}
              imageUrl={news.imageUrl}
              alt={news.alt}
              summary={news.summary}
              category={news.category}
              link={news.link}
            />
          ))}
        </main>
        {/* Sidebar سيأخذ بياناته من newsData.js مباشرة الآن */}
        <Sidebar />
      </div>
    </>
  );
}