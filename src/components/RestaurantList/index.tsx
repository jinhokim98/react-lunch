import {useRestaurantStore} from '../../store/restaurants';
import {Restaurant} from '../Restaurant';
import styles from './style.module.css';

export const RestaurantList = () => {
  const {filteredRestaurants} = useRestaurantStore();

  return (
    <section className={styles.restaurantListContainer}>
      <ul className="restaurant-list">
        {filteredRestaurants.map(restaurants => (
          <Restaurant key={restaurants.id} {...restaurants} />
        ))}
      </ul>
    </section>
  );
};
