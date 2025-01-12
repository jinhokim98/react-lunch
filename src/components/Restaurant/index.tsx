import {IMAGE_SRC} from '../../constants/imageSrc';
import {MODAL_NAME} from '../../constants/modal';
import {useModalStore} from '../../store/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {type Restaurant as RestaurantType} from '../../type/serviceType';
import styles from './style.module.css';

const IMAGE_BY_CATEGORY: Record<string, string> = {
  한식: IMAGE_SRC.categoryKorean,
  중식: IMAGE_SRC.categoryChinese,
  일식: IMAGE_SRC.categoryJapanese,
  양식: IMAGE_SRC.categoryWestern,
  아시안: IMAGE_SRC.categoryAsian,
  기타: IMAGE_SRC.categoryEtc,
};

export const Restaurant = (restaurant: RestaurantType) => {
  const {id, name, description, category, distance} = restaurant;
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
        <h4 className={`${styles.restaurantName} text-body`}>{`캠퍼스부터 ${distance}분 내`}</h4>
        <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
      </div>
    </li>
  );
};
