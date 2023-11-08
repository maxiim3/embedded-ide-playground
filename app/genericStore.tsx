type GenericStore<T> = {
   value: T;
   setValue: (value: T) => void;
   reset: () => void;
};
