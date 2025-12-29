import { Palette, TreeDeciduous, Music, Brain, ShieldCheck, HeartHandshake } from 'lucide-react';
import { NavItem, Feature, ClassInfo } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '교육철학', href: '#philosophy' },
  { label: '프로그램', href: '#program' },
  { label: '시설안내', href: '#facility' },
  { label: '입학상담', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    title: "창의 예술 교육",
    description: "미술, 음악, 퍼포먼스를 통해 아이들의 무한한 상상력을 표현합니다.",
    icon: Palette,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "자연 친화 활동",
    description: "숲 체험과 텃밭 가꾸기를 통해 자연과 교감하며 생명의 소중함을 배웁니다.",
    icon: TreeDeciduous,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "감성 음악 활동",
    description: "다양한 악기와 리듬을 경험하며 정서적 안정과 예술적 감각을 키웁니다.",
    icon: Music,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "창의 융합 놀이",
    description: "교구 활동과 과학 놀이를 통해 논리적 사고력과 문제 해결력을 기릅니다.",
    icon: Brain,
    color: "bg-purple-100 text-purple-600"
  },
];

export const CLASSES: ClassInfo[] = [
  { age: "만 0세", name: "새싹반", desc: "안정적인 애착 형성과 감각 발달" },
  { age: "만 1세", name: "잎새반", desc: "자율성 증진과 기본 생활 습관" },
  { age: "만 2세", name: "나무반", desc: "언어 표현력과 또래 관계 형성" },
  { age: "만 3-5세", name: "열매반", desc: "누리과정 기반의 통합적 사고" },
];