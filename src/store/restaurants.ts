import {create} from 'zustand';
import {Restaurant} from '../type/serviceType';

type State = {
  restaurants: Restaurant[];
  category: string;
  filteredRestaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
};

type Action = {
  loadRestaurants: (restaurants: State['restaurants']) => void;
  changeCategory: (category: State['category']) => void;
  selectRestaurant: (restaurant: State['selectedRestaurant']) => void;
  addRestaurant: (newRestaurant: Restaurant) => void;
};

const filterByCategory = (restaurants: Restaurant[], category: string) => {
  return restaurants.filter(restaurant => {
    if (category === '전체') return true;
    return restaurant.category === category;
  });
};

export const useRestaurantStore = create<State & Action>((set, get) => {
  return {
    restaurants: [],
    category: '전체',
    filteredRestaurants: [],
    selectedRestaurant: null,

    loadRestaurants: restaurants =>
      set(() => ({restaurants, filteredRestaurants: filterByCategory(restaurants, get().category)})),

    changeCategory: category =>
      set(() => ({category, filteredRestaurants: filterByCategory(get().restaurants, category)})),

    selectRestaurant: selectedRestaurant => set(() => ({selectedRestaurant})),

    addRestaurant: newRestaurant =>
      set(state => {
        const updatedRestaurants = [...state.restaurants, newRestaurant];
        const filteredRestaurants = filterByCategory(updatedRestaurants, get().category);

        return {
          restaurants: updatedRestaurants,
          filteredRestaurants,
        };
      }),
  };
});
