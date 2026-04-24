import { motion } from "motion/react";
import { Award, Users, TreePine, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Award,
      title: "완성도의 기준",
      description: "타협하지 않는 디테일, 그것이 우리가 정의하는 진정한 완성도입니다.",
    },
    {
      icon: TreePine,
      title: "흐름을 읽는 감각",
      description: "변화하는 디자인을 이해하고 공간에 맞게 풀어냅니다",
    },
    {
      icon: Users,
      title: "공간에 맞춘 정교한 마무리",
      description: "제작자가 현장을 직접 확인하고, 가구의 수평과 배치를 공간에 맞춰 완벽하게 세팅합니다.",
    },
    {
      icon: Users,
      title: "고객과의 소통",
      description: "삶과 공간을 이해하며 함께 완성해갑니다",
    },
  ];

  const timeline = [
    { year: "2019", event: "가구기능경기대회 금상 수상" },
    { year: "2020", event: "포커스온우드 설립" },
    { year: "2023", event: "맞춤 가구 전문 브랜드로 전환" },
    { year: "2024", event: "서울 성수동 쇼룸 오픈" },
    { year: "2026", event: "온라인 플랫폼 런칭" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1683115099414-c83156978045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwd29ya3Nob3AlMjBjcmFmdHNtYW58ZW58MXx8fHwxNzc2MzAwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="포커스온우드"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4">공방 소개</h1>
          <p className="text-xl text-gray-200">시간이 흐를수록 나무의 가치가 깊어지는 가구를 만듭니다.</p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl mb-6">포커스온우드의 이야기</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>포커스온우드는 목수가 직접 나무를 고르고 그 결을 살려 공간의 흐름을 빚어냅니다.</p>
              <p>보이지 않는 곳까지 정교하게 연결하고, 마지막 순간까지 섬세하게 다듬습니다.</p>
              <p>이러한 과정은 단순한 제작을 넘어 일상의 풍경을 만드는 일입니다.</p>
              <p>
                각각의 나무가 지닌 고유한 결과 색감을 살리면서, 현대적인 디자인과 전통적인 기법을 조화롭게 결합합니다.
                빠르게 만들어내는 것보다 천천히, 정성스럽게 완성하는 것을 중요하게 생각합니다.
              </p>
              <p>
                우리가 만드는 가구는 단순한 제품이 아닙니다. 오랜 시간 함께할 가족 같은 존재이며, 공간에 따뜻함을 더하는
                예술 작품입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">우리의 가치</h2>
            <p className="text-xl text-gray-600">포커스온우드가 추구하는 핵심 가치입니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">연혁</h2>
            <p className="text-xl text-gray-600">포커스온우드의 발자취를 소개합니다</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-24 text-2xl text-gray-900">{item.year}</div>
                <div className="flex-grow pt-1">
                  <div className="h-px bg-gray-300 mt-4 mb-4" />
                  <p className="text-lg text-gray-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Info */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">공방 방문 안내</h2>
          <p className="text-xl text-gray-300 mb-8">
            현재는 제작 위주의 공간으로 운영되고 있으며 전시 공간도 함께 준비 중입니다.
            <br />
            사전 예약 후 방문해 주시면 더욱 자세한 상담이 가능합니다.
          </p>
          <div className="space-y-2 text-lg">
            <p>경기도 포천시 자작로 93-5 </p>
            <p>운영시간: 월-금 10:00-19:00, 토 10:00-17:00</p>
            <p>문의: 02-1234-5678</p>
          </div>
        </div>
      </section>
    </div>
  );
}
