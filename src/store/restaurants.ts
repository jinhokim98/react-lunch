import {create} from 'zustand';
import {Restaurant} from '../type/serviceType';
import {restaurants} from '../constants/data';

type State = {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
};

type Action = {
  loadRestaurants: (restaurants: State['restaurants']) => void;
  filterByCategory: (category: string) => void;
};

export const useRestaurantStore = create<State & Action>(set => ({
  restaurants: restaurants,
  filteredRestaurants: restaurants,
  loadRestaurants: restaurants => set(() => ({restaurants, filteredRestaurants: restaurants})),
  filterByCategory: category =>
    set(state => ({
      filteredRestaurants: state.restaurants.filter(restaurant => {
        if (category === '전체') return true;
        return restaurant.category === category;
      }),
    })),
}));
