import {useState} from 'react';
import {useRestaurantStore} from '../../store/restaurants';
import {Select} from '../Select';
import styles from './style.module.css';

export const FilterContainer = () => {
  const {filterByCategory} = useRestaurantStore();

  const [selectedCategory, setSelectedCategory] = useState('전체');

  const onChange = (category: string) => {
    setSelectedCategory(category);
    filterByCategory(category);
  };

  return (
    <section className={styles.restaurantFilterContainer}>
      <Select
        name="category"
        id="category-filter"
        className={styles.restaurantFilterContainerSelect}
        ariaLabel="음식점 카테고리 필터"
        onChange={onChange}
        value={selectedCategory}
      >
        <option value="전체">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="아시안">아시안</option>
        <option value="기타">기타</option>
      </Select>
    </section>
  );
};
