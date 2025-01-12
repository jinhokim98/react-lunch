import {useGetRestaurants} from '../../hooks/useGetRestaurants';
import {RestaurantList} from '../RestaurantList';

export const FavoriteRestaurants = () => {
  const {restaurants} = useGetRestaurants();
  const favoriteList = restaurants?.filter(restaurant => restaurant.favorite);

  return (
    <section className="favorite restaurants">
      <RestaurantList restaurantList={favoriteList ?? []} />
    </section>
  );
};
