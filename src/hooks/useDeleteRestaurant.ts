import {useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/queryKey';
import {deleteRestaurant} from '../api/restaurants';

export const useDeleteRestaurant = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationKey: [QUERY_KEYS.deleteRestaurant],
    mutationFn: deleteRestaurant,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurants],
      });
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.getRestaurant, data.id],
      });
    },
  });

  return {
    deleteRestaurant: mutate,
    ...rest,
  };
};
