import {MODAL_NAME} from '../../constants/modal';
import {usePatchRestaurants} from '../../hooks/usePatchRestaurant';
import {useModalStore} from '../../store/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {type Restaurant as RestaurantType} from '../../type/serviceType';
import {FavoriteButton} from '../FavoriteButton';
import {RestaurantImage} from '../RestaurantImage';
import styles from './style.module.css';

export const Restaurant = (restaurant: RestaurantType) => {
  const {id, name, description, category, distance, favorite} = restaurant;
  const {selectRestaurant} = useRestaurantStore();
  const {patchRestaurant} = usePatchRestaurants();
  const {openModal} = useModalStore();

  const onClick = () => {
    selectRestaurant(restaurant);
    openModal(MODAL_NAME.info);
  };

  const onFavoriteButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    patchRestaurant({...restaurant, favorite: !favorite});
  };

  return (
    <li className={styles.restaurant} id={id} onClick={onClick}>
      <FavoriteButton isFavorite={favorite} onClick={onFavoriteButtonClick} />
      <RestaurantImage category={category} />
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} text-subtitle`}>{name}</h3>
        <h4 className={`${styles.restaurantName} text-body`}>{`캠퍼스부터 ${distance}분 내`}</h4>
        <p className={`${styles.restaurantDescription} text-body`}>{description}</p>
      </div>
    </li>
  );
};
