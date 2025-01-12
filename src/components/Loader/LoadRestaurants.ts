import {useEffect} from 'react';
import {useRestaurantStore} from '../../store/restaurants';
import {useGetRestaurants} from '../../hooks/useGetRestaurants';

export const LoadRestaurants = ({children}: React.PropsWithChildren) => {
  const {loadRestaurants} = useRestaurantStore();
  const {restaurants, isSuccess} = useGetRestaurants();

  useEffect(
    function fetchRestaurants() {
      if (restaurants && isSuccess) loadRestaurants(restaurants);
    },
    [loadRestaurants, restaurants, isSuccess],
  );

  return children;
};
