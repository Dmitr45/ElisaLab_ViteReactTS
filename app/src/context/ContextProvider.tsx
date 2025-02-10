import { createContext, useContext } from 'react';
import { useCreateAppContext } from './Context';

const Context = createContext(null);

//@ts-expect-error ошибка
export const AppContextProvider = ({ children, ...props }) => {
  const context = useCreateAppContext(props);
  //@ts-expect-error   ошибка
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useAppContext() {
  const context = useContext(Context);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}
