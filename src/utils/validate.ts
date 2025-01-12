import {categoryList, categoryListExtendsAll} from '../constants/condition';
import {Category, ExtendsAllCategory, SortBy} from '../store/restaurants';

export const typeCasting = {
  category: (category: string) => {
    if (!categoryList.includes(category)) {
      throw new Error('카테고리 유형에 맞지 않습니다.');
    }
    return category as Category;
  },
  categoryExtendsAll: (category: string) => {
    if (!categoryListExtendsAll.includes(category)) {
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
