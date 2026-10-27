'use client';

import { useRef, useState } from 'react';
import { DISCORD_URL } from './Header';

const DISCORD_ID = 'gotiger_#7478';

export default function Contact() {
  const [toast, setToast] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = (message: string) => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2500);
  };

  const copyId = () => {
    navigator.clipboard
      .writeText(DISCORD_ID)
      .then(() => show('디스코드 아이디를 복사했어요'))
      .catch(() => show(`복사하지 못했어요. 아이디: ${DISCORD_ID}`));
  };

  return (
    <>
      <div className='grass' aria-hidden='true' />
      <section id='contact' className='contact'>
        <div className='wrap'>
          <div>
            <h2>다음 방송 콘텐츠, 같이 준비해볼까요?</h2>
            <p>기획이 아직 정리되지 않았어도 괜찮아요. 디스코드에서 편하게 물어보세요.</p>
          </div>
          <div className='contact-actions'>
            <a className='btn btn-main' href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
              디스코드 서버 참여하기
            </a>
            <button className='btn copy' type='button' onClick={copyId}>
              {DISCORD_ID}
              <small>COPY</small>
            </button>
            <a className='mail' href='mailto:dev.gotiger@gmail.com'>
              이메일 · dev.gotiger@gmail.com
            </a>
          </div>
        </div>
      </section>
      <div className={`toast${toast ? ' show' : ''}`} role='status' aria-live='polite'>
        {toast}
      </div>
    </>
  );
}
