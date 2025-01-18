import {create} from 'zustand';
import {ExtendsAllCategory, Restaurant, SortBy} from '../type/serviceType';

type State = {
  restaurants: Restaurant[];
  category: ExtendsAllCategory;
  sortBy: SortBy;
  filteredRestaurants: Restaurant[];
  selectedRestaurantId: string | null;
};

type Action = {
  loadRestaurants: (restaurants: State['restaurants']) => void;
  changeCategory: (category: State['category']) => void;
  changeSortBy: (sortBy: State['sortBy']) => void;
  selectRestaurantId: (restaurant: State['selectedRestaurantId']) => void;
  addRestaurant: (newRestaurant: Restaurant) => void;
};

const filterByCategory = (restaurants: Restaurant[], category: string) => {
  return restaurants.filter(restaurant => {
    if (category === '전체') return true;
    return restaurant.category === category;
  });
};

const sortRestaurantList = (restaurants: Restaurant[], sortBy: SortBy) => {
  return restaurants.sort((a, b) => {
    if (sortBy === '이름순') return a.name.localeCompare(b.name);
    if (sortBy === '거리순') return a.distance - b.distance;
    return 0;
  });
};

const initialState: State = {
  restaurants: [],
  category: '전체',
  sortBy: '이름순',
  filteredRestaurants: [],
  selectedRestaurantId: null,
};

export const useRestaurantStore = create<State & Action>((set, get) => {
  return {
    ...initialState,

    loadRestaurants: restaurants =>
      set(() => ({restaurants, filteredRestaurants: filterByCategory(restaurants, get().category)})),

    changeCategory: category =>
      set(() => ({
        category,
        filteredRestaurants: sortRestaurantList(filterByCategory(get().restaurants, category), get().sortBy),
      })),

    changeSortBy: sortBy =>
      set(() => ({
        sortBy,
        filteredRestaurants: sortRestaurantList(get().filteredRestaurants, sortBy),
      })),

    selectRestaurantId: selectedRestaurantId => set(() => ({selectedRestaurantId})),

    // 비동기 상태관리를 tanstack query에 위임하여 아래 메서드는 사용하지 않습니다.
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
