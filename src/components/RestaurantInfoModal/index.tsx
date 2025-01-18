import {MODAL_NAME} from '../../constants/modal';
import {useDeleteRestaurant} from '../../hooks/useDeleteRestaurant';
import {useGetRestaurant} from '../../hooks/useGetRestaurant';
import {usePatchRestaurants} from '../../hooks/usePatchRestaurant';
import {useRestaurantStore} from '../../store/restaurants';
import {FavoriteButton} from '../FavoriteButton';
import {Modal} from '../Modal';
import {RestaurantImage} from '../RestaurantImage';
import styles from './style.module.css';

export const RestaurantInfoModal = () => {
  const {selectedRestaurantId, selectRestaurantId} = useRestaurantStore();
  const {restaurant} = useGetRestaurant(selectedRestaurantId);

  const {deleteRestaurant} = useDeleteRestaurant();
  const {patchRestaurant} = usePatchRestaurants();

  if (!restaurant) {
    return null;
  }

  const onFavoriteButtonClick = () => {
    patchRestaurant({...restaurant, favorite: !restaurant.favorite});
  };

  return (
    <Modal
      name={MODAL_NAME.info}
      primaryButton={{buttonName: '닫기', onClick: () => selectRestaurantId(null)}}
      secondaryButton={{buttonName: '삭제하기', onClick: () => deleteRestaurant(restaurant.id)}}
    >
      <div className={styles.restaurantInfo}>
        <FavoriteButton isFavorite={restaurant.favorite} onClick={onFavoriteButtonClick} />
        <RestaurantImage category={restaurant.category} />
        <h2 className="text-subtitle">{restaurant.name}</h2>
        <h3 className={`${styles.restaurantDistance} text-body`}>{`캠퍼스부터 ${restaurant.distance}분 내`}</h3>
        <p className={`${styles.restaurantDescription} text-body`}>{restaurant.description}</p>
        <a href={restaurant.link} target="__blank__" className={`${styles.restaurantLink} text-body`}>
          {restaurant.link}
        </a>
      </div>
    </Modal>
  );
};
