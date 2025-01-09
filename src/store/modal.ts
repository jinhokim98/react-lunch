import {create} from 'zustand';
import {ModalName} from '../type/serviceType';

type State = {
  modals: Record<ModalName, boolean>;
};

type Action = {
  openModal: (name: ModalName) => void;
  closeModal: (name: ModalName) => void;
};

export const useModalStore = create<State & Action>(set => ({
  modals: {
    info: false,
    add: false,
  },

  openModal: name =>
    set(state => ({
      modals: {...state.modals, [name]: true},
    })),

  closeModal: name =>
    set(state => ({
      modals: {...state.modals, [name]: false},
    })),
}));
