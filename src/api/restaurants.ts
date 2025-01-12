import {Restaurant} from '../type/serviceType';

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch('http://localhost:3000/restaurants');

  if (!response.ok) {
    throw new Error('불러오던 중 에러가 발생했습니다.');
  }

  const data = await response.json();
  return data as Restaurant[];
};

export const getRestaurant = async (id: string): Promise<Restaurant> => {
  const response = await fetch(`http://localhost:3000/restaurants/${id}`);

  if (!response.ok) {
    throw new Error('불러오던 중 에러가 발생했습니다.');
  }

  const data = await response.json();
  return data as Restaurant;
};

export const postRestaurant = async (restaurant: Restaurant): Promise<void> => {
  const response = await fetch('http://localhost:3000/restaurants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });

  if (!response.ok) {
    throw new Error('에러가 발생했습니다.');
  }
};

export const patchRestaurant = async (restaurant: Restaurant): Promise<{id: string}> => {
  const response = await fetch(`http://localhost:3000/restaurants/${restaurant.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });

  if (!response.ok) {
    throw new Error('에러가 발생했습니다.');
  }

  return {id: restaurant.id};
};

export const deleteRestaurant = async (id: string): Promise<{id: string}> => {
  const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러가 발생했습니다.');
  }

  return {id};
};
