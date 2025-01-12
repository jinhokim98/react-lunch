import {useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/queryKey';
import {patchRestaurant} from '../api/restaurants';

export const usePatchRestaurants = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationKey: [QUERY_KEYS.postRestaurant],
    mutationFn: patchRestaurant,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurants],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurant, data.id],
      });
    },
  });

  return {
    patchRestaurant: mutate,
    ...rest,
  };
};
