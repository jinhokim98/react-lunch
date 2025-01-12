import {ExtendsAllCategory, SortBy} from '../store/restaurants';

export const typeCasting = {
  category: (category: string) => {
    const categories: string[] = ['전체', '한식', '일식', '중식', '양식', '아시안', '기타'];
    if (!categories.includes(category)) {
      throw new Error('카테고리 유형에 맞지 않습니다.');
    }
    return category as ExtendsAllCategory;
  },
  sortBy: (sortBy: string) => {
    const sortByList: string[] = ['이름순', '거리순'];
    if (!sortByList.includes(sortBy)) {
      throw new Error('정렬 유형에 맞지 않습니다.');
    }
    return sortBy as SortBy;
  },
} as const;
