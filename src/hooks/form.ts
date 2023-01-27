import { useState } from 'react';

export const useConfigNameValidate = (changeCallback: Function, names: string[]) => {
  const [isDupName, setIsDupName] = useState(false);
  const [isEmptyName, setIsEmptyName] = useState(false);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isDup = names.indexOf(value) > -1;
    if (!value) {
      setIsEmptyName(true);
      return;
    } else {
      setIsEmptyName(false);
    }
    if (isDup) {
      setIsDupName(true);
    } else {
      setIsDupName(false);
      changeCallback({ name: value });
    }
  };
  return { handleChangeName, isDupName, isEmptyName };
};
