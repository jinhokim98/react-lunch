import {create} from 'zustand';
import {Restaurant} from '../type/serviceType';

export type SortBy = '이름순' | '거리순';
export type Category = '한식' | '일식' | '중식' | '양식' | '아시안' | '기타';
export type ExtendsAllCategory = Category | '전체';

type State = {
  restaurants: Restaurant[];
  category: ExtendsAllCategory;
  sortBy: SortBy;
  filteredRestaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
};

type Action = {
  loadRestaurants: (restaurants: State['restaurants']) => void;
  changeCategory: (category: State['category']) => void;
  changeSortBy: (sortBy: State['sortBy']) => void;
  selectRestaurant: (restaurant: State['selectedRestaurant']) => void;
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

export const useRestaurantStore = create<State & Action>((set, get) => {
  return {
    restaurants: [],
    category: '전체',
    sortBy: '이름순',
    filteredRestaurants: [],
    selectedRestaurant: null,

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

    selectRestaurant: selectedRestaurant => set(() => ({selectedRestaurant})),

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
