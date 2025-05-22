import { authFireBase } from "../index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import { AddDocNewUser } from "../UsersProfileData/setNew";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  await AddDocNewUser(email);
  return createUserWithEmailAndPassword(authFireBase, email, password);
};

export const doSignInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(authFireBase, email, password);
};

export const doSignInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(authFireBase, provider);
  //result.user
  return result;
};

export const doSignOut = () => {
  return authFireBase.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(authFireBase, email);
};

export const doPasswordChange = (password: string) => {
  //@ts-expect-error ???
  return updatePassword(authFireBase.currentUser, password);
};
