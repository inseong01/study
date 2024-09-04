import { useRouter } from 'next/router';
import style from './[id].module.css';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchIdBook from '@/lib/fetch-idBook';
import Header from '@/components/header';

export const getStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }], // 미리 html 파일 생성
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchIdBook(Number(id));

  return {
    props: {
      book,
    },
  };
};

export default function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return '로딩중입니다.';
  if (!book) return '해당자료가 없습니다.';

  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Header subTitle={title} description={description} img={coverImgUrl} />
      <div className={style.container}>
        <div className={style.cover_img} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
          <img src={coverImgUrl} alt="" />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
