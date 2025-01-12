import {useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/queryKey';
import {patchRestaurant} from '../api/restaurants';

export const usePatchRestaurants = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationKey: [QUERY_KEYS.postRestaurant],
    mutationFn: patchRestaurant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurants],
      });
    },
  });

  return {
    patchRestaurant: mutate,
    ...rest,
  };
};
