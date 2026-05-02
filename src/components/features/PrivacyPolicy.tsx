import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-200">
      <h2 className="text-3xl font-bold text-orange-500">개인정보 처리방침</h2>
      <div className="space-y-4 text-lg leading-relaxed">
        <section className="bg-orange-950/20 p-6 rounded-lg border border-orange-500/30">
          <h3 className="text-xl font-semibold text-orange-400 mb-2">저장되지 않는 기록 (No Storage Policy)</h3>
          <p>
            ShakeOff는 사용자의 프라이버시를 최우선으로 생각합니다. 당신이 작성하는 모든 고백과 기억은 
            <span className="text-white font-bold underline decoration-orange-500"> 기술적으로 절대 저장되지 않습니다.</span>
          </p>
        </section>

        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li><span className="text-white">서버 저장 없음</span>: 사용자의 입력값은 그 어떤 서버로도 전송되거나 저장되지 않습니다.</li>
          <li><span className="text-white">로컬 저장 없음</span>: 브라우저의 로컬 스토리지나 쿠키 등 기기 내 저장소에도 기록을 남기지 않습니다.</li>
          <li><span className="text-white">휘발성 데이터</span>: 데이터는 브라우저의 메모리상에만 일시적으로 존재하며, 소각 완료 후 '하나 더' 버튼을 누르거나 페이지를 새로고침하면 영구적으로 소멸됩니다.</li>
          <li><span className="text-white">추적 금지</span>: 사용자를 식별하거나 추적하기 위한 어떠한 도구도 사용하지 않습니다.</li>
        </ul>

        <p className="text-sm text-neutral-500 mt-8">
          우리는 당신의 기록을 수집할 기술도, 이유도 없습니다. 오직 당신의 마음이 가벼워지는 것만이 우리의 유일한 목적입니다.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
