import {MODAL_NAME} from '../../constants/modal';
import {useModalStore} from '../../store/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {type Restaurant as RestaurantType} from '../../type/serviceType';
import {RestaurantImage} from '../RestaurantImage';
import styles from './style.module.css';

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
      <RestaurantImage category={category} />
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} text-subtitle`}>{name}</h3>
        <h4 className={`${styles.restaurantName} text-body`}>{`캠퍼스부터 ${distance}분 내`}</h4>
        <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
      </div>
    </li>
  );
};
