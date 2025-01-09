import {MODAL_NAME} from '../../constants/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {Modal} from '../Modal';
import styles from './style.module.css';

export const RestaurantInfoModal = () => {
  const {selectedRestaurant, selectRestaurant} = useRestaurantStore();

  return (
    <Modal
      name={MODAL_NAME.info}
      title={selectedRestaurant?.name ?? '음식점 정보'}
      buttonName="닫기"
      button={{onClick: () => selectRestaurant(null)}}
    >
      <div className={styles.restaurantInfo}>
        <p className="restaurant-info__description text-body">{selectedRestaurant?.description}</p>
      </div>
    </Modal>
  );
};
