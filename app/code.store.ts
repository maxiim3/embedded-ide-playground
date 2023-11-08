import {create} from 'zustand';

export type StoreProps = GenericStore<string>;
export const useCodeStore = create<GenericStore<string>>(set => ({
   value: '',
   setValue: value => set({value}),
   reset: () => set({value: ''}),
}));
