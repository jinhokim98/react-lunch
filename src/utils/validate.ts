import {categoryList, categoryListExtendsAll, sortByList} from '../constants/condition';
import {Category, ExtendsAllCategory, SortBy} from '../type/serviceType';

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
    if (!sortByList.includes(sortBy)) {
      throw new Error('정렬 유형에 맞지 않습니다.');
    }
    return sortBy as SortBy;
  },
} as const;
