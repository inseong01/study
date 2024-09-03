import Head from 'next/head';

export default function Header({
  subTitle,
  description,
  img,
}: {
  subTitle?: string;
  description?: string;
  img?: string;
}) {
  const des = description || '한입북스에 등록된 도서들을 만나보세요';
  const title = subTitle ? `한입북스 - ${subTitle}` : '한입북스';
  const image = img || '/thumnail.png';

  return (
    <Head>
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={des} />
      <title>{title}</title>
    </Head>
  );
}
