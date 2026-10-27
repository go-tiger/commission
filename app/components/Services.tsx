import { base } from '../lib/portfolio';

export default function Services() {
  return (
    <>
      <div className='grass' aria-hidden='true' />
      <section id='services' className='sec'>
        <div className='wrap'>
          <div className='sec-head'>
            <span className='eyebrow'>SERVICES</span>
            <h2>무엇을 만들어 드릴까요?</h2>
            <p>두 가지를 따로 맡기셔도 되고, 서버와 런처를 묶어서 한 번에 의뢰하셔도 됩니다.</p>
          </div>
          <div className='services'>
            <article className='svc'>
              <div className='svc-media'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${base}/launcher/35.png`} alt='커스텀 런처 작업 예시' />
              </div>
              <div className='svc-body'>
                <span className='eyebrow'>CUSTOM LAUNCHER</span>
                <h3>커스텀 런처</h3>
                <p>
                  서버 전용 런처로 접속 과정을 줄입니다. 모드와 리소스팩 설치·업데이트를 런처가 처리하고, 서버 분위기에 맞춘 화면을 만듭니다.
                </p>
                <ul className='checks'>
                  <li>모드·리소스팩 자동 설치</li>
                  <li>업데이트 자동 반영</li>
                  <li>Microsoft 계정 로그인</li>
                  <li>서버 맞춤 디자인</li>
                  <li>공지 표시</li>
                  <li>원클릭 서버 접속</li>
                </ul>
                <a href='#portfolio'>런처 작업물 보기 →</a>
              </div>
            </article>
            <article className='svc'>
              <div className='svc-media'>
                <div className='term' aria-hidden='true'>
                  <div className='c'>$ server status</div>
                  <div>[OK] 콘텐츠 플러그인 로드</div>
                  <div>[OK] 제작 서버 동기화</div>
                  <div>[OK] 참가자 화이트리스트 118명</div>
                  <div className='w'>[OK] 방송 준비 완료 _</div>
                </div>
              </div>
              <div className='svc-body'>
                <span className='eyebrow'>GAME SERVER</span>
                <h3>콘텐츠 서버 구축·운영</h3>
                <p>합방, 대회, 야생 시즌 서버를 구축하고 방송 기간 동안 운영합니다. 필요하면 사전 제작용 서버도 함께 엽니다.</p>
                <ul className='checks'>
                  <li>서버 구축·세팅</li>
                  <li>콘텐츠 플러그인 개발</li>
                  <li>제작 서버 제공</li>
                  <li>방송 기간 운영 지원</li>
                  <li>대규모 인원 최적화</li>
                  <li>마크 외 게임 서버</li>
                </ul>
                <a href='#portfolio'>서버 작업물 보기 →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
