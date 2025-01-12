import {MODAL_NAME} from '../constants/modal';

export type Restaurant = {
  id: string;
  name: string;
  description: string;
  distance: number;
  category: string;
};

export type ModalName = keyof typeof MODAL_NAME;
