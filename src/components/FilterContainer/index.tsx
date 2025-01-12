import {useState} from 'react';
import {useRestaurantStore} from '../../store/restaurants';
import {Select} from '../Select';
import styles from './style.module.css';
import {typeCasting} from '../../utils/validate';
import {categoryListExtendsAll, sortByList} from '../../constants/condition';
import {ExtendsAllCategory, SortBy} from '../../type/serviceType';

export const FilterContainer = () => {
  const {changeCategory, changeSortBy} = useRestaurantStore();

  const [selectedCategory, setSelectedCategory] = useState<ExtendsAllCategory>('전체');
  const [selectedSortBy, setSelectedSortBy] = useState<SortBy>('이름순');

  const onCategoryChange = (input: string) => {
    const category = typeCasting.categoryExtendsAll(input);
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
        {categoryListExtendsAll.map(category => (
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
