import {useState} from 'react';
import {ExtendsAllCategory, SortBy, useRestaurantStore} from '../../store/restaurants';
import {Select} from '../Select';
import styles from './style.module.css';
import {typeCasting} from '../../utils/validate';
import {categoryList, sortByList} from '../../constants/condition';

export const FilterContainer = () => {
  const {changeCategory, changeSortBy} = useRestaurantStore();

  const [selectedCategory, setSelectedCategory] = useState<ExtendsAllCategory>('전체');
  const [selectedSortBy, setSelectedSortBy] = useState<SortBy>('이름순');

  const onCategoryChange = (input: string) => {
    const category = typeCasting.category(input);
    setSelectedCategory(category);
    changeCategory(category);
  };

  const onSortByChange = (input: string) => {
    const sortBy = typeCasting.sortBy(input);
    setSelectedSortBy(sortBy);
    changeSortBy(sortBy);
  };

  return (
    <section className={styles.restaurantFilterContainer}>
      <Select
        name="category"
        id="category-filter"
        className={styles.restaurantFilterContainerSelect}
        ariaLabel="음식점 카테고리 필터"
        onChange={onCategoryChange}
        value={selectedCategory}
      >
        {categoryList.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Select
        name="sortBy"
        id="sortBy"
        className={styles.restaurantFilterContainerSelect}
        ariaLabel="음식점 정렬 필터"
        onChange={onSortByChange}
        value={selectedSortBy}
      >
        {sortByList.map(sortBy => (
          <option key={sortBy} value={sortBy}>
            {sortBy}
          </option>
        ))}
      </Select>
    </section>
  );
};
