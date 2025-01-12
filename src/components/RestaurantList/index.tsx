import {type Restaurant as RestaurantType} from '../../type/serviceType';
import {Restaurant} from '../Restaurant';
import styles from './style.module.css';

type RestaurantListProps = {
  restaurantList: RestaurantType[];
};

export const RestaurantList = ({restaurantList}: RestaurantListProps) => {
  return (
    <section className={styles.restaurantListContainer}>
      <ul className="restaurant-list">
        {restaurantList.map(restaurants => (
          <Restaurant key={restaurants.id} {...restaurants} />
        ))}
      </ul>
    </section>
  );
};
