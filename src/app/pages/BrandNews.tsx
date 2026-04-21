import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import award2019 from "@/assets/images/award20192.png";
import teaching1 from "@/assets/images/teaching1.png";
import siganatureTC from "@/assets/images/signaturetableandchair.png";
import TC20201 from "@/assets/images/TC20201.png";
import Fair2023 from "@/assets/images/Fair2023.png";
import Fair2022 from "@/assets/images/Fair2022.png";

export function BrandNews() {
  const news = [
    {
      id: 1,
      title: "2019국제기능올림픽선수협회 금메달 수상",
      date: "2019.08.06",
      category: "소식",
      excerpt: "2019 국제기능올림픽선수협회에서 주관한 기능 경기 대회에서 목공 부문 금메달을 수상하였습니다.",
      image: award2019,
    },
    {
      id: 2,
      title: "메이크업 박스 및 스툴 만들기 수업 진행 ",
      date: "2019.10.12",
      category: "소식",
      excerpt: "킨텍스 '2019 K-뷰티박람회'에서 4일간 일반인을 대상으로 가구 DIY 체험 수업을 진행하였습니다",
      image: teaching1,
    },
    {
      id: 3,
      title: "2019 공예트렌트 페어 브랜드관 참가",
      date: "2019.12.13",
      category: "전시",
      excerpt:
        "삼성동 코엑스(COEX)에서 열린 '2019 공예트렌드페어'에 참가하여 포커스온우드만의 가구와 목공예 제품을 선보였습니다.",
      image: siganatureTC,
    },
    {
      id: 4,
      title: "경기가구창작스튜디오 작품 출품 ",
      date: "2020.07.30",
      category: "소식",
      excerpt:
        "경기가구창작스튜디오 전시를 위해 제작한 우드 스피커와 4인용 테이블 세트를 출품하였습니다. 나무 본연의 색상 조화를 살린 디자인이 특징입니다.",
      image: TC20201,
    },
    {
      id: 5,
      title: "언론이 주목한 포커스온우드: '2022 공예트렌드페어'",
      date: "2022.12.08",
      category: "전시",
      excerpt:
        "한스경제 보도를 통해 포커스온우드만의 독창적인 가구 제작 철학이 소개되었습니다. 코엑스에서 열린 '2022 공예트렌드페어'에 참가하여 나무 본연의 결을 살린 수준 높은 공예 작품들을 선보였습니다.",
      image: Fair2022,
    },
    {
      id: 6,
      title: "한국국제가구 및 인테리어산업대전(KOFURN) 참가",
      date: "2023.08.23",
      category: "전시",
      excerpt:
        "월넛 조각들을 정교하게 이어 붙여 나무 본연의 색과 결을 기하학적 패턴으로 구현했습니다. 목수의 세밀한 손길로 완성된 포커스온우드의 시그니처 작품입니다.",
      image: Fair2023,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl text-[#1C352D] mb-4">브랜드 이야기</h1>
          <p className="text-xl text-[#1C352D]">포커스온우드의 소식과 이야기를 전합니다</p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">{item.category}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl mb-2 group-hover:text-gray-600 transition-colors">{item.title}</h3>
              <p className="text-gray-600">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
