import {useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/queryKey';
import {deleteRestaurant} from '../api/restaurants';

export const useDeleteRestaurant = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationKey: [QUERY_KEYS.deleteRestaurant],
    mutationFn: deleteRestaurant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurants],
      });
    },
  });

  return {
    deleteRestaurant: mutate,
    ...rest,
  };
};
