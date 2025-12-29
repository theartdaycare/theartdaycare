import React, { useState } from 'react';
import { MapPin, Phone, Clock, Loader2, CheckCircle, Calendar, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // FORM STATE
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    age: '연령을 선택해주세요',
    visitDate: '',
    memo: ''
  });

  // NOTE: Paste your Google Apps Script Web App URL here
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKLEGQKMXPusHqloqsojQeZ08ogRzjrpVh6qNkBQnXdnqYTtwz-wPldutr_tuZ-MQVvQ/exec"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo mode simulation if no URL provided
    if (!GOOGLE_SCRIPT_URL) {
      console.log("Form Data Submitted:", formData);
      setLoading(true);
      // Simulate network delay
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ 
          parentName: '', 
          phone: '', 
          age: '연령을 선택해주세요',
          visitDate: '',
          memo: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
      return;
    }

    setLoading(true);

    try {
      // Use FormData to send structure compatible with Google Apps Script
      const data = new FormData();
      data.append('parentName', formData.parentName);
      data.append('phone', formData.phone);
      data.append('age', formData.age);
      data.append('visitDate', formData.visitDate);
      data.append('memo', formData.memo);
      data.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Important: Google Apps Script opaque response
      });

      setSuccess(true);
      setFormData({ 
        parentName: '', 
        phone: '', 
        age: '연령을 선택해주세요',
        visitDate: '',
        memo: ''
      });
      
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (error) {
      console.error("Error submitting form", error);
      alert("오류가 발생했습니다. 전화로 문의해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto bg-[#F5F5F0] rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-2xl">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Contact Info & Text */}
          <div className="space-y-10 flex flex-col justify-center">
            <div>
              <div className="inline-block px-3 py-1 bg-stone-200/50 rounded-full text-xs font-bold text-stone-500 mb-4">CONTACT US</div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                입학 상담 문의
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                소중한 우리 아이의 첫 시작,<br/>
                디아트 어린이집이 함께하겠습니다.<br/>
                <span className="text-sm text-stone-400 mt-2 block">* 방문 상담은 사전 예약제로 운영됩니다.</span>
              </p>
            </div>

            <div className="space-y-6 bg-white/50 p-6 rounded-3xl border border-stone-100/50 backdrop-blur-sm">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">전화 문의</div>
                  <div className="text-xl font-bold text-stone-800 tracking-tight">031-8029-6450</div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">오시는 길</div>
                  <div className="text-stone-800 font-medium">경기도 평택시 통복길 5 2층 어린이집 (통복동, 평택역경남아너스빌디아트)</div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">운영 시간</div>
                  <div className="text-stone-800 font-medium">월 - 금: 07:30 - 19:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
            {success ? (
              <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">상담 신청 완료!</h3>
                <p className="text-stone-500 leading-relaxed">
                  담당 선생님이 확인 후<br/>빠른 시일 내에 연락드리겠습니다.
                </p>
                <button onClick={() => setSuccess(false)} className="mt-8 px-6 py-2 rounded-full bg-stone-100 text-stone-600 text-sm font-semibold hover:bg-stone-200 transition-colors">
                  추가 신청하기
                </button>
              </div>
            ) : null}

            <h3 className="text-xl font-bold mb-8 text-stone-800 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full"></span>
              간편 상담 신청
            </h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-stone-400 uppercase mb-2">보호자 성함</label>
                  <input 
                    type="text" 
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all placeholder:text-stone-300" 
                    placeholder="김사랑" 
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-xs font-bold text-stone-400 uppercase mb-2">자녀 연령</label>
                  <select 
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all text-stone-600 appearance-none cursor-pointer"
                  >
                    <option disabled>선택</option>
                    <option>만 0세</option>
                    <option>만 1세</option>
                    <option>만 2세</option>
                    <option>만 3세 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase mb-2">연락처</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all placeholder:text-stone-300" 
                  placeholder="010-0000-0000" 
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1">
                  희망 방문일 <span className="text-[10px] font-normal text-stone-300">(선택)</span>
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all text-stone-600 placeholder:text-stone-300 min-h-[48px]" 
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase mb-2 flex items-center gap-1">
                  메모 / 궁금한 점 <span className="text-[10px] font-normal text-stone-300">(선택)</span>
                </label>
                <div className="relative">
                  <textarea 
                    name="memo"
                    value={formData.memo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all resize-none placeholder:text-stone-300"
                    placeholder="아이의 특이사항이나 궁금하신 점을 남겨주세요."
                  />
                  <MessageSquare className="absolute right-4 top-4 text-stone-400 pointer-events-none opacity-50" size={18} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-stone-900 text-white font-bold rounded-xl mt-4 hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
              >
                {loading ? <><Loader2 className="animate-spin" size={20} /> 전송 중...</> : '상담 신청하기'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};