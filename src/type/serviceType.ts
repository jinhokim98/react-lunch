import {MODAL_NAME} from '../constants/modal';

export type SortBy = '이름순' | '거리순';
export type Category = '한식' | '일식' | '중식' | '양식' | '아시안' | '기타';
export type ExtendsAllCategory = Category | '전체';

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  distance: number;
  category: Category;
  link?: string;
  favorite: boolean;
};

export type ModalName = keyof typeof MODAL_NAME;
