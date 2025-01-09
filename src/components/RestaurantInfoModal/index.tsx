import {useModalStore} from '../../store/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {Modal} from '../Modal';
import styles from './style.module.css';

export const RestaurantInfoModal = () => {
  const {modals, closeModal} = useModalStore();
  const {selectedRestaurant, selectRestaurant} = useRestaurantStore();

  const name = 'info';

  const onClose = () => {
    selectRestaurant(null);
    closeModal(name);
  };

  return (
    <Modal name={name} title="음식점 정보" isOpen={modals[name]} closeModal={onClose}>
      <div className={styles.restaurantInfo}>
        <p className="restaurant-info__description text-body">{selectedRestaurant?.description}</p>
      </div>
    </Modal>
  );
};
