import styles from './style.module.css';

type RestaurantInfoProps = {
  description: string;
};

export const RestaurantInfo = ({description}: RestaurantInfoProps) => {
  return (
    <div className={styles.restaurantInfo}>
      <p className="restaurant-info__description text-body">{description}</p>
    </div>
  );
};
