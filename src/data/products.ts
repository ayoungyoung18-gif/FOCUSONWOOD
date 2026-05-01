// src/data/products.ts
import imgBodegi from "../assets/images/accbodegi2.jpg";
import imgBodegi1 from "../assets/images/accbodegi1.jpg";
import imgBodegi3 from "../assets/images/accbodegi3.jpg";
import imgBodegi4 from "../assets/images/accbodegi4.jpg";
import imgBodegi5 from "../assets/images/accbodegi5.jpg";

import imgLaptop4 from "../assets/images/acclaptopstand4.jpg";
import imgDisplayStand from "../assets/images/accDisplaystand1.jpg";
import imgTableClock from "../assets/images/accTableclock2.jpg";
import imgTrivet from "../assets/images/accTrivet1.jpg";
import imgPenholder1 from "../assets/images/accPenholder1.jpg";
import imgPenholderW from "../assets/images/accPenholderw.jpg";
import imgPenholderB from "../assets/images/accPenholderB1.jpg";
import imgWatchHolder from "../assets/images/accWatchholder2.jpg";
import imgClosetRack from "../assets/images/closetrack.jpg";
import imgSideTable from "../assets/images/designsidetable.png";
import imgWineCabinet from "../assets/images/signaturewine cabinet.png";

export const categories = [
  { id: "all", label: "전체" },
  { id: "kitchen", label: "주방용품" },
  { id: "desk", label: "데스크 소품" },
  { id: "decor", label: "인테리어" },
];

export const products = [
  {
    id: 1,
    name: "보드기 (나무 로봇 키링)",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 50000,
    material: "월넛/오크/메이플",
    size: "40 x 25 x 20 (mm)",
    images: [imgBodegi, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "정교한 목공 기술로 탄생한 포커스온우드의 마스코트입니다. 일상 속에서 나만의 귀여운 로봇 친구를 만나보세요.",
  },
  {
    id: 2,
    name: "노트북 거치대",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 35000,
    material: "월넛",
    size: "300 x 200 x 50 (mm)",
    images: [imgLaptop4, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "건강한 자세를 생각한 최적의 각도, 월넛 원목의 묵직함이 더해진 노트북 거치대입니다.\n\n흔들림 없는 안정감과 나무 고유의 따뜻한 감촉이 업무의 질을 높여줍니다. ",
  },
  {
    id: 3,
    name: "탁상시계",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 75000,
    material: "월넛",
    size: "120 x 120 x 40 (mm)",
    images: [imgTableClock, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description: "시간의 흐름을 나무의 결로 느낄 수 있는 미니멀한 디자인의 탁상시계입니다.",
  },
  {
    id: 4,
    name: "곰돌이 소품 트레이",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 13000,
    material: "월넛",
    size: "80 x 80 x 20 (mm)",
    images: [imgDisplayStand, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "귀여운 곰돌이 형상 뒤에 숨겨진 정교한 목공 디테일을 확인해보세요. 자주 잃어버리는 차 키나 액세서리를 위한 따뜻한 안식처가 되어줍니다.",
  },
  {
    id: 5,
    name: "냄비받침",
    categoryId: "kitchen",
    categoryLabel: "주방용품",
    price: 26000,
    material: "월넛",
    size: "180 x 180 x 15 (mm)",
    images: [imgTrivet, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description: "주방에 따뜻한 온기를 더해주는 견고한 월넛 포크 앤 나이프 냄비받침입니다.",
  },
  {
    id: 6,
    name: "2구 펜트레이",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 17000,
    material: "월넛",
    size: "45 x 45 x 45 (mm)",
    images: [imgPenholder1, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5], // 상세 이미지가 없을 경우 기본 이미지 활용
    description:
      "정교하게 깎아낸 두 개의 홈에 연필이나 만년필을 안정감 있게 거치할 수 있는 트레이입니다. 묵직한 월넛의 무게감과 부드러운 곡선 마감이 책상 위 어지러운 생각들을 차분히 정리해줍니다.",
  },
  {
    id: 7,
    name: "명함꽂이 펜홀더",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 30000,
    material: "월넛/오크",
    size: "120 x 40 x 30 (mm)",
    images: [imgPenholderW, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description: "명함과 펜을 동시에 거치할 수 있는 실용적인 데스크 오브제입니다.",
  },
  {
    id: 8,
    name: "원형 펜홀더 ",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 15000,
    material: "월넛/오크",
    size: "40 x 40 x 60 (mm)",
    images: [imgPenholderB, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "부드러운 원형 디자인으로 데스크 위 공간을 효율적으로 활용할 수 있는 펜홀더입니다.\n\n월넛 원목의 따뜻한 질감이 업무 공간에 안정감을 더해줍니다. 간결한 실루엣 덕분에 펜뿐만 아니라 화장품 붓꽂이로도 활용하기 좋으며, 어떤 소품과 함께 두어도 자연스럽게 어우러지는 일상의 도구입니다.",
  },
  {
    id: 9,
    name: "손목시계 거치대",
    categoryId: "desk",
    categoryLabel: "데스크 소품",
    price: 25000,
    material: "월넛",
    size: "60 x 60 x 90 (mm)",
    images: [imgWatchHolder, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "소중한 시계를 스크래치 없이 안전하게 거치할 수 있습니다. 시계 본연의 디자인을 돋보이게 해주는 전시용 스탠드입니다.",
  },
  {
    id: 10,
    name: "원목 옷걸이 (Closet Rack)",
    categoryId: "decor",
    categoryLabel: "인테리어",
    price: 220000,
    material: "월넛",
    size: "450 x 20 x 200 (mm)",
    images: [imgClosetRack, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "코트와 재킷의 어깨 라인을 완벽하게 유지해주는 프리미엄 월넛 옷걸이입니다. 옷장의 품격을 한 단계 높여줍니다.",
  },
  {
    id: 11,
    name: "낮은 2단 서랍장",
    categoryId: "decor",
    categoryLabel: "인테리어",
    price: 500000,
    material: "월넛",
    size: "600 x 400 x 450 (mm)",
    images: [imgSideTable, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "침대 옆이나 거실 소파 옆에 두기 좋은 컴팩트한 사이즈의 서랍장입니다. 원목의 결이 끊김 없이 이어지도록 제작되었습니다.",
  },
  {
    id: 12,
    name: "시그니처 와인장",
    categoryId: "decor",
    categoryLabel: "인테리어",
    price: 1320000,
    material: "월넛",
    size: "800 x 350 x 1200 (mm)",
    images: [imgWineCabinet, imgBodegi1, imgBodegi3, imgBodegi4, imgBodegi5],
    description:
      "포커스온우드의 장인 정신이 집약된 시그니처 와인 수납장입니다. 와인병과 글라스를 가장 아름답고 안전하게 보관합니다.",
  },
];
