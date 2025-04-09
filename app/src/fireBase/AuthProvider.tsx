import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, useContext } from "react";
import { authFireBase } from "./index";
import { userIType } from "../fireBase/UsersProfileData/profile";
import { getUser } from "../fireBase/UsersProfileData/profile";

//@ts-expect-error ???
const AuthContext = React.createContext();

export function useAuth() {
  // создадим хук авторизации
  return useContext(AuthContext);
}

//@ts-expect-error ???
export function AuthProvider({ children }) {
  // создадим контекст авторизации
  const [currentUser, setCurrentUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [userData, setUserData] = useState<userIType | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFireBase, initializeUser);
    return unsubscribe;
  }, []);
  //@ts-expect-error ???
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      setUserData(await getUser(user.email));
    } else {
      //@ts-expect-error ???
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoadingAuth(false);
  }
  const value = {
    currentUser,
    userLoggedIn,
    loadingAuth,
    userData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
