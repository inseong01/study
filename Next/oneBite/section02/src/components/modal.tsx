'use client';

import { ElementRef, MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import style from '@/components/modal.module.css';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const route = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
      // show: 기본창 + 모달창 -> 페이지 길어짐
      // showModal: 모달창으로 보여줌
    }
  }, []);

  const onclickClose = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as any).nodeName === 'DIALOG') {
      // currentTarget, 오류 발생 사라지지만 어딜 클릭해도 모달창 사라짐
      route.back();
    }
  };
  const onEscClose = () => {
    route.back();
  };
  return createPortal(
    <div>
      <dialog className={style.modal} ref={dialogRef} onClick={onclickClose} onClose={onEscClose}>
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
}
