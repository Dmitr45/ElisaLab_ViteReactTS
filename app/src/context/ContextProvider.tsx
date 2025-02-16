import {createContext, useContext} from 'react';
import {useCreateAppContext} from "./Context.ts";

const Context = createContext(null);

// @ts-expect-error any type props
export const AppContextProvider = ({ children, ...props }) => {
    const context = useCreateAppContext(props);
    //@ts-expect-error no null
    return <Context.Provider value={context}>{children}</Context.Provider>;
  };


  export function useAppContext() {
    const context = useContext(Context);
    if (!context) throw new Error('Use app context within provider!');
    return context;
  }