import styles from './style.module.css';

import {IMAGE_SRC} from '../../constants/imageSrc';
import {Category} from '../../type/serviceType';

const IMAGE_BY_CATEGORY: Record<Category, string> = {
  한식: IMAGE_SRC.categoryKorean,
  중식: IMAGE_SRC.categoryChinese,
  일식: IMAGE_SRC.categoryJapanese,
  양식: IMAGE_SRC.categoryWestern,
  아시안: IMAGE_SRC.categoryAsian,
  기타: IMAGE_SRC.categoryEtc,
};

type RestaurantImageProps = {
  category: Category;
};

export const RestaurantImage = ({category}: RestaurantImageProps) => {
  return (
    <div className={styles.restaurantCategory}>
      <img src={IMAGE_BY_CATEGORY[category]} alt={category} className={styles.categoryIcon} />
    </div>
  );
};
