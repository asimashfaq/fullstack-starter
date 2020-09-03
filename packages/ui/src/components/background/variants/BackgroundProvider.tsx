import React, { useContext, useState } from 'react';

interface BackgroundHook {
  setOffset: (offset: string) => void;
  offset: string;
}

const BackgroundContext = React.createContext<BackgroundHook>({
  setOffset: () => {},
  offset: '0',
});

export const BackgroundProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<string>('0');

  return (
    <BackgroundContext.Provider
      value={{
        setOffset: setState,
        offset: state,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
