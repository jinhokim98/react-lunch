import {useQuery} from '@tanstack/react-query';
import {getRestaurants} from '../api/restaurants';
import {QUERY_KEYS} from '../constants/queryKey';

export const useGetRestaurants = () => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEYS.getRestaurants],
    queryFn: getRestaurants,
  });

  return {restaurants: data, ...rest};
};
