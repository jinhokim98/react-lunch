import {useRestaurantStore} from '../../store/restaurants';
import {Modal} from '../Modal';
import styles from './style.module.css';

export const RestaurantInfoModal = () => {
  const {selectedRestaurant, selectRestaurant} = useRestaurantStore();

  const onClose = () => {
    selectRestaurant(null);
  };

  return (
    <Modal name="info" title={selectedRestaurant?.name ?? '음식점 정보'} onClose={onClose}>
      <div className={styles.restaurantInfo}>
        <p className="restaurant-info__description text-body">{selectedRestaurant?.description}</p>
      </div>
    </Modal>
  );
};
