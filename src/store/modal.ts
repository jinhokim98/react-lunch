import {create} from 'zustand';

type State = {
  modals: Record<string, boolean>;
};

type Action = {
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
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
