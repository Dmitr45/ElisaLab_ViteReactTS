import React, { useState, useContext, useEffect } from "react";
import { getStandardMethods, IMethod } from "./methods";

//@ts-expect-error ???
const MethodsContext = React.createContext();

export function useMethods() {
  // создадим хук работы с методами
  return useContext(MethodsContext);
}

//@ts-expect-error ???
export function MethodsProvider({ children }) {
  // создадим контекст методов
  const [standardMethods, setStandardMethods] = useState<IMethod[]>([]);

  const methodsST = async (): Promise<IMethod[]> => {
    const methods = (await getStandardMethods()) as IMethod[];
    setStandardMethods(methods);
    return methods;
  };

  useEffect(() => {
    methodsST();
  }, []);

  const value = {
    standardMethods,
    setStandardMethods,
  };
  return (
    <MethodsContext.Provider value={value}>{children}</MethodsContext.Provider>
  );
}
