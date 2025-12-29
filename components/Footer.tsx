import React, { useState } from 'react';
import { Logo } from './Logo';
import { X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <footer className="bg-white border-t border-stone-100 pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              {/* Increased Size: h-24 */}
              <Logo className="h-24 w-auto mb-6 origin-left" />
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
                아이들의 꿈과 행복이 자라나는 따뜻한 보금자리,<br/>
                디아트 어린이집입니다.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-stone-900 mb-4">둘러보기</h4>
                <ul className="space-y-2 text-sm text-stone-500">
                  <li><a href="#philosophy" className="hover:text-primary">교육철학</a></li>
                  <li><a href="#program" className="hover:text-primary">프로그램</a></li>
                  <li><a href="#facility" className="hover:text-primary">시설안내</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-4">행정정보</h4>
                <ul className="space-y-2 text-sm text-stone-500">
                  <li>
                    <button 
                      onClick={() => setShowPrivacyModal(true)} 
                      className="hover:text-primary text-left"
                    >
                      개인정보처리방침
                    </button>
                  </li>
                  <li><a href="#" className="hover:text-primary">이용약관</a></li>
                  <li><a href="#" className="hover:text-primary">CCTV 설치운영</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-4">
            <p>© 2026 The Art Daycare. All rights reserved.</p>
            <p>Design by ninooy</p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowPrivacyModal(false)}
          ></div>
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative shadow-2xl animate-fade-in-up">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-stone-900">개인정보 수집 및 이용 동의 (표준안)</h3>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-stone-500" />
                </button>
              </div>
              
              <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-2">1. 개인정보의 수집 및 이용 목적</h4>
                  <p>어린이집은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                  <ul className="list-disc list-inside mt-2 ml-1 text-stone-500">
                    <li>원아 모집 상담 및 안내: 입소 대기 상담, 단지 내 안내 사항 전달, 모집 관련 문자/전화 연락</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-2">2. 수집하는 개인정보 항목</h4>
                  <ul className="list-disc list-inside ml-1">
                    <li><span className="font-semibold text-primary">필수항목:</span> 보호자 성함, 자녀 연령(또는 생년월일), 연락처</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-2">3. 개인정보의 보유 및 이용 기간</h4>
                  <p className="mb-2">원칙적으로 원아 모집 및 상담 절차가 종료된 후 <span className="font-semibold">6개월 이내에 파기</span>합니다.</p>
                  <p>단, 정보 주체의 삭제 요청이 있거나 입소가 확정되어 별도의 학사 관리 절차로 이행될 경우 해당 시점까지 보관합니다.</p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-2">4. 동의 거부 권리 및 불이익 안내</h4>
                  <p>귀하는 개인정보 수집 및 이용에 동의를 거부할 권리가 있습니다. 단, 동의를 거부하실 경우 원아 모집 상담 신청 및 안내 서비스 이용이 제한될 수 있습니다.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors"
                >
                  확인했습니다
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};