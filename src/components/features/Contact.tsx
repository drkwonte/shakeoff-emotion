import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-6 text-neutral-200">
      <h2 className="text-3xl font-bold text-orange-500">문의하기</h2>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          ShakeOff 서비스에 대한 제안이나 기술적인 문의가 있으시면 아래 이메일로 연락주세요.
        </p>
        
        <div className="flex items-center space-x-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
          <Mail className="text-orange-500 w-6 h-6" />
          <a href="mailto:drkwonte@gmail.com" className="text-xl text-neutral-100 hover:text-orange-400 transition-colors">
            drkwonte@gmail.com
          </a>
        </div>

        <p className="text-sm text-neutral-500 mt-4">
          보내주신 의견은 서비스 품질 개선을 위해 소중하게 사용됩니다.
        </p>
      </div>
    </div>
  );
};

export default Contact;
