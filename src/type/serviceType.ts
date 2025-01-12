import {MODAL_NAME} from '../constants/modal';
import {Category} from '../store/restaurants';

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  distance: number;
  category: Category;
};

export type ModalName = keyof typeof MODAL_NAME;
