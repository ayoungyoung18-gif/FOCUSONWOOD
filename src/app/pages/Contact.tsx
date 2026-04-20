import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "consultation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "consultation",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "주소",
      content: "경기도 포천시 자작로 93-5 호롱불마을 최공방",
    },
    {
      icon: Phone,
      title: "전화",
      content: "02-1234-5678",
    },
    {
      icon: Mail,
      title: "이메일",
      content: "info@namugyeol.kr",
    },
    {
      icon: Clock,
      title: "운영시간",
      content: "월-금 13:00-18:00\n 주말 및 공휴일 휴무",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl mb-6">문의하기</h1>
            <p className="text-xl text-gray-600">궁금하신 점이 있으시면 언제든지 연락해 주세요.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl mb-6">문의 양식</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm mb-2">
                    문의 유형 *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  >
                    <option value="consultation">맞춤 제작 상담</option>
                    <option value="estimate">견적 문의</option>
                    <option value="visit">공방 방문 예약</option>
                    <option value="general">일반 문의</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-3 rounded-lg transition-colors ${
                    submitted ? "bg-green-600 text-white" : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>문의가 접수되었습니다</span>
                    </>
                  ) : (
                    <>
                      <span>문의하기</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl mb-6">연락처 정보</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">오시는 길</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">지도 영역</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  선단ic에서 5분거리 대진대학교 후문 방향
                  <br />
                  주차 가능 (건물 앞 1층)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">공방 방문 안내</h2>
          </div>
          <div className="bg-white p-8 rounded-lg space-y-4 text-gray-700">
            <p>• 경기도 포천 호롱불마을 최공방은 전시 공간이 아닌 가구를 제작하는 작업실입니다.</p>
            <p>• 현재는 제작 위주의 공간으로 운영되고 있으며 전시 공간도 함께 준비 중입니다.</p>
            <p>• 방문은 예약 후 가능합니다. (예약 필수)</p>
            <p className="text-sm text-gray-500">* 혹시 찾기 어려우실 경우 편하게 연락 주시면 안내해드립니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
