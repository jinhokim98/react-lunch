import {useRestaurantStore} from '../../store/restaurants';
import {FilterContainer} from '../FilterContainer';
import {RestaurantList} from '../RestaurantList';

export const AllRestaurants = () => {
  const {filteredRestaurants} = useRestaurantStore();

  return (
    <section className="all restaurants">
      <FilterContainer />
      <RestaurantList restaurantList={filteredRestaurants} />
    </section>
  );
};
