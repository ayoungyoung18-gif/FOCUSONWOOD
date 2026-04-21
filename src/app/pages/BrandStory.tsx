import { motion } from "motion/react";
import { TreePine, Award, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import furnitureMaking from "@/assets/images/furnituremaking.png";

export function BrandStory() {
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
      icon: Heart,
      title: "현장에서 설계되는 맞춤",
      description: "제작자가 현장을 직접 확인하고, 가구의 수평과 배치를 공간에 맞춰 완벽하게 세팅합니다.",
    },
    {
      icon: Users,
      title: "고객과의 소통",
      description: "고객의 삶과 공간을 이해하고 함께 만들어갑니다",
    },
  ];

  return (
    <div>
      {/* Hero */}
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light tracking-tight">소중한 일상을 채우는 깊이</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            시간이 흐를수록 나무의 가치가 깊어지는 가구를 만듭니다.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-[#4A4540]">포커스온우드의 철학</h2>
          </motion.div>

          <div className="text-center mb-20 italic text-[#4A4540]/80 font-light leading-loose text-lg">
            <p>공간에는 각자의 이야기가 있습니다.</p>
            <p>시간이 지나도 변하지 않는 디자인이 머무는 공간,</p>
            <p>그 안에서 우리의 일상은 더욱 즐거워집니다.</p>
          </div>

          <div className="space-y-16 text-base md:text-lg text-gray-700 leading-relaxed text-center break-keep">
            <div className="space-y-6">
              <p>포커스온우드는 목수가 직접 나무를 고르고 그 결을 살려 공간의 흐름을 빚어냅니다.</p>
              <p>보이지 않는 곳까지 정교하게 연결하고, 마지막 순간까지 섬세하게 다듬습니다.</p>
              <p>이러한 과정은 단순한 제작을 넘어 일상의 풍경을 만드는 일입니다.</p>
            </div>

            <div className="space-y-6">
              <p>목수가 현장에서 직접 완성도를 높여, 가구가 공간에 자연스럽게 스며들도록 합니다.</p>
              <p>사용자의 생활 습관과 동선을 고려한 배치는,</p>
              <p>쓸수록 깊은 만족감과 편안함을 선사합니다.</p>
            </div>

            <div className="space-y-6 pt-8">
              <p>손에 닿는 모든 면이 자연스러운 가구,</p>
              <p className="font-medium text-[#4A4540] text-xl">
                당신의 소중한 일상이 더욱 풍요로워지는 경험을 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">포커스온우드의 가치</h2>
            {/* <p className="text-xl text-gray-600">포커스온우드가 추구하는 핵심 가치입니다</p> */}
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

      {/* Vision */}
      <section className="py-20 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-8 font-normal text-[#4A4540]">포커스온우드의 비전</h2>
            <p className="text-lg text-gray-700 leading-relaxed break-keep">
              포커스온우드는 단순히 가구를 만드는 것을 넘어, <strong>나무가 가진 본연의 온기와 생명력</strong>을 당신의
              삶에 전하고자 합니다. 우리가 정성껏 깎고 다듬은 나무가 누군가의 소중한 일상에서 함께 호흡하며,{" "}
              <strong>시간이 흐를수록 깊어지는 나무의 가치</strong>를 경험하시길 바랍니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
