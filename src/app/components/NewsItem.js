// src/app/components/NewsItem.js
import Image from 'next/image';
import Link from 'next/link';

export default function NewsItem({ id, title, imageUrl, alt, summary, category, link }) {
  // const handleNewsClick = (event) => {
  //   // يمكن إلغاء تفعيل هذا إذا كانت الروابط حقيقية وتؤدي لصفحات
  //   // event.preventDefault();
  //   alert(`لقد نقرت على: ${title}`);
  // };

  return (
    <article className="news-item" id={`news-item-${id}`}> {/* إضافة id فريد للعنصر */}
      <h2>
        <Link href={link || "#"}>
          {title}
        </Link>
      </h2>
      {imageUrl && (
        <div style={{ position: 'relative', width: '100%', height: '200px' }}> {/* حاوية لـ next/image fill */}
          <Image
            src={imageUrl}
            alt={alt || title}
            fill // سيجعل الصورة تملأ الحاوية (التي يجب أن تكون relative ولها أبعاد)
            style={{ objectFit: 'cover', borderRadius: '3px' }} // للحفاظ على object-fit وتطبيق border-radius
            className="news-image placeholder-img" // class من CSS الأصلي
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // مثال لـ sizes
          />
        </div>
      )}
      <p>{summary}</p>
      <span className="news-category">{category}</span>
    </article>
  );
}