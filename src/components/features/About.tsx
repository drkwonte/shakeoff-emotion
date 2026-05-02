import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-200">
      <h2 className="text-3xl font-bold text-orange-500">ShakeOff에 대하여</h2>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          살다 보면 누구나 마음 속에 담아두기 힘든 기억, 억울한 감정, 혹은 스스로를 괴롭히는 생각들이 생기기 마련입니다. 
          이런 감정들은 억누르기보다 밖으로 쏟아내고 완전히 없애버릴 때 비로소 치유가 시작됩니다.
        </p>
        <p>
          <span className="text-orange-400 font-semibold">ShakeOff</span>는 당신의 마음을 무겁게 하는 것들을 쏟아낼 수 있는 '디지털 감정 소각장'입니다. 
          누구에게도 말하지 못한 이야기들을 이곳에 적고, 불길 속에 던져버리세요.
        </p>
        <p className="italic text-neutral-400">
          "타버린 재는 바람에 날려 보내고, 당신의 마음은 한결 가벼워지길 바랍니다."
        </p>
      </div>
    </div>
  );
};

export default About;
