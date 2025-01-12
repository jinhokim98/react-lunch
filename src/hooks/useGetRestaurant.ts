import {useQuery} from '@tanstack/react-query';
import {getRestaurant} from '../api/restaurants';
import {QUERY_KEYS} from '../constants/queryKey';

export const useGetRestaurant = (id: string | null) => {
  const {data} = useQuery({
    queryKey: [QUERY_KEYS.getRestaurant, id],
    queryFn: () => getRestaurant(id ?? ''),
    enabled: !!id,
  });

  return {restaurant: data};
};
