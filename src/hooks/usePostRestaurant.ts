import {useMutation, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../constants/queryKey';
import {postRestaurant} from '../api/restaurants';

export const usePostRestaurants = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationKey: [QUERY_KEYS.postRestaurant],
    mutationFn: postRestaurant,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getRestaurants],
      });
    },
  });

  return {
    postRestaurant: mutate,
    ...rest,
  };
};
