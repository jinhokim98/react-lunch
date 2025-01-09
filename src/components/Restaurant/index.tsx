import {MODAL_NAME} from '../../constants/modal';
import {useModalStore} from '../../store/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {type Restaurant as RestaurantType} from '../../type/serviceType';
import styles from './style.module.css';

const IMAGE_BY_CATEGORY: Record<string, string> = {
  한식: '/category-korean.png',
  중식: '/category-chinese.png',
  일식: '/category-japanese.png',
  양식: '/category-western.png',
  아시안: '/category-asian.png',
  기타: '/category-etc.png',
};

export const Restaurant = (restaurant: RestaurantType) => {
  const {id, name, description, category} = restaurant;
  const {selectRestaurant} = useRestaurantStore();
  const {openModal} = useModalStore();

  const onClick = () => {
    selectRestaurant(restaurant);
    openModal(MODAL_NAME.info);
  };

  return (
    <li className={styles.restaurant} id={id} onClick={onClick}>
      <div className={styles.restaurantCategory}>
        <img src={IMAGE_BY_CATEGORY[category]} alt={category} className={styles.categoryIcon} />
      </div>
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} text-subtitle`}>{name}</h3>
        <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
      </div>
    </li>
  );
};
