import {useEffect} from 'react';
import {useRestaurantStore} from '../store/restaurants';
import {useQuery} from '@tanstack/react-query';
import {getRestaurants} from '../api/restaurants';
import {QUERY_KEYS} from '../constants/queryKey';

export const LoadRestaurants = ({children}: React.PropsWithChildren) => {
  const {loadRestaurants} = useRestaurantStore();
  const {data, isSuccess} = useQuery({
    queryKey: [QUERY_KEYS.getRestaurants],
    queryFn: getRestaurants,
  });

  useEffect(
    function fetchRestaurants() {
      if (data && isSuccess) loadRestaurants(data);
    },
    [loadRestaurants, data, isSuccess],
  );

  return children;
};
