import { getAuth, onAuthStateChanged } from "firebase/auth";
import { userUidI } from "../context/types";
import { FireBase } from "../fireBase";
import { useAppContext } from "../context/ContextProvider";

export function authState(user: string): userUidI {
  const auth = getAuth();
  let uid = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      uid = user.uid;
      // ...
    } else {
      // User is signed out
      uid = "";
    }
  });
  return { uid: uid };
}
