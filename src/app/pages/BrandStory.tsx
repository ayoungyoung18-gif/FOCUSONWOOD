import { motion } from "motion/react";
import { TreePine, Award, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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
      title: "제작에서 공간까지 이어지는 완성도",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzYzMDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="나무결 공방"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4">브랜드 철학</h1>
          <p className="text-xl text-gray-200">자연의 아름다움을 담은 가구를 만듭니다</p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-6">포커스온우드의 시작</h2>
          </motion.div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              2006년, 나무를 사랑하는 한 장인의 작은 작업실에서 시작된 나무결 공방은 20년이 넘는 시간 동안 한결같이
              자연의 아름다움을 담은 가구를 만들어왔습니다.
            </p>
            <p>
              우리는 각각의 나무가 지닌 고유한 결과 색감을 살리면서, 현대적인 디자인과 전통적인 기법을 조화롭게
              결합합니다. 빠르게 만들어내는 것보다 천천히, 정성스럽게 완성하는 것을 중요하게 생각합니다.
            </p>
            <p>
              나무결 공방이 만드는 가구는 단순한 제품이 아닙니다. 오랜 시간 함께할 가족 같은 존재이며, 공간에 따뜻함을
              더하는 예술 작품입니다. 우리는 이러한 철학을 바탕으로 모든 가구에 진심을 담아 제작합니다.
            </p>
          </div>
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

      {/* Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl mb-6">우리의 비전</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              포커스온우드는 단순히 가구를 판매하는 것이 아니라, 사람들의 삶에 자연의 따뜻함과 아름다움을 전하고자
              합니다. 우리가 만드는 모든 제품이 누군가의 소중한 일상에 함께하며, 오랜 시간이 지나도 그 가치를 잃지
              않기를 바랍니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
