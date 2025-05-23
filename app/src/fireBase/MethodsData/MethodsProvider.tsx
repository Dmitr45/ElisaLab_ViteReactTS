import React, { useState, useContext, useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider";
import { getStandardMethods, getUserMethods } from "./methods";
import { IMethod } from "./types";
import {
  rebootUsersMethodsType,
  toggleRebootUsersMethodsType,
} from "../../context/types";

//@ts-expect-error ???
const MethodsContext = React.createContext();

export function useMethods() {
  // создадим хук работы с методами
  return useContext(MethodsContext);
}

//@ts-expect-error ???
export function MethodsProvider({ children }) {
  const {
    currentUser,
    userLoggedIn,
    rebootUsersMethods,
    toggleRebootUsersMethods,
  }: {
    currentUser: any;
    userLoggedIn: any;
    rebootUsersMethods: rebootUsersMethodsType;
    toggleRebootUsersMethods: toggleRebootUsersMethodsType;
  } = useAppContext();

  // создадим контекст методов
  const [standardMethods, setStandardMethods] = useState<IMethod[]>([]);
  const [userMethods, setUserMethods] = useState<IMethod[]>([]);

  const methodsST = async (): Promise<IMethod[]> => {
    const methods = (await getStandardMethods()) as IMethod[];
    setStandardMethods(methods);
    return methods;
  };

  const methodsUS = async (email: string): Promise<IMethod[]> => {
    const methodsU = (await getUserMethods(email)) as IMethod[];
    setUserMethods(methodsU);
    return methodsU;
  };

  useEffect(() => {
    //console.log("userLoggedIn: " + userLoggedIn);
    methodsST();
    if (userLoggedIn === true) {
      methodsUS(currentUser.email);
      //console.log("user current: " + currentUser.email);
      toggleRebootUsersMethods(false);
    }
  }, [userLoggedIn, currentUser, rebootUsersMethods]);

  const value = {
    standardMethods,
    userMethods,
  };
  return (
    <MethodsContext.Provider value={value}>{children}</MethodsContext.Provider>
  );
}
