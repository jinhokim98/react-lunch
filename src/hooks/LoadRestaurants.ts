import {useEffect} from 'react';
import {useRestaurantStore} from '../store/restaurants';
import {restaurants} from '../constants/data';

export const LoadRestaurants = ({children}: React.PropsWithChildren) => {
  const {loadRestaurants} = useRestaurantStore();

  useEffect(
    function fetchRestaurants() {
      loadRestaurants(restaurants);
    },
    [loadRestaurants],
  );

  return children;
};
