import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from '@/components/LoadingSkeleton.module.css';

export default function LoadingSkeleton() {
  return (
    <div className={style.container}>
      <Skeleton width={80} height={103} />
      <div>
        <div className={style.titleWrap}>
          <Skeleton width={300} height={20} />
          <Skeleton width={453} height={20} />
        </div>
        <br />
        <Skeleton width={120} height={20} />
      </div>
    </div>
  );
}
