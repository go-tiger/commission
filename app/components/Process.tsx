const steps = [
  { title: '상담', description: '디스코드 서버에서 티켓을 열고 콘텐츠 기획, 방송 일정, 예상 인원을 알려주세요.' },
  { title: '견적·일정 확정', description: '작업 범위와 견적, 테스트 일정을 정리해서 확정합니다.' },
  { title: '제작·테스트', description: '진행 상황을 공유하고, 방송 전에 테스트 서버로 함께 점검합니다.' },
  { title: '방송·운영', description: '방송 기간 동안 서버 상태를 지켜보고 문제가 생기면 바로 대응합니다.' },
];

export default function Process() {
  return (
    <section id='process' className='sec dark'>
      <div className='wrap'>
        <div className='sec-head'>
          <span className='eyebrow'>PROCESS</span>
          <h2>이렇게 진행돼요</h2>
        </div>
        <ol className='steps'>
          {steps.map(s => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
