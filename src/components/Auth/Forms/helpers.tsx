export const createInputOnChangeHandler =
  (setter: (value: string) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };
