'use client';

import { createContext, useState } from 'react';

type ContextType = {
  loading: boolean;
  setLoading: (val: boolean) => void;

  isError: boolean;
  setIsError: (val: boolean) => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const StateContext = createContext({} as ContextType);

export const StateProvider = ({ children }: StateProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
