import {MODAL_NAME} from '../../constants/modal';
import {useRestaurantStore} from '../../store/restaurants';
import {Modal} from '../Modal';
import {RestaurantImage} from '../RestaurantImage';
import styles from './style.module.css';

export const RestaurantInfoModal = () => {
  const {selectedRestaurant, selectRestaurant} = useRestaurantStore();

  if (!selectedRestaurant) {
    return null;
  }

  return (
    <Modal
      name={MODAL_NAME.info}
      title={selectedRestaurant.name}
      buttonName="닫기"
      button={{onClick: () => selectRestaurant(null)}}
    >
      <div className={styles.restaurantInfo}>
        <RestaurantImage category={selectedRestaurant.category} />
        <h2 className="text-subtitle">{selectedRestaurant.name}</h2>
        <h3 className={`${styles.restaurantDistance} text-body`}>{`캠퍼스부터 ${selectedRestaurant.distance}분 내`}</h3>
        <p className={`${styles.restaurantDescription} text-body`}>{selectedRestaurant.description}</p>
        <a href={selectedRestaurant.link} target="__blank__" className={`${styles.restaurantLink} text-body`}>
          {selectedRestaurant.link}
        </a>
      </div>
    </Modal>
  );
};
