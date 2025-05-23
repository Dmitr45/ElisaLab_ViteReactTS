//https://toxigon.com/create-social-media-app-with-firebase-and-react
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType, toggleMessageType } from "../../context/types";
import style from "../styles.module.scss";
import { doSignOut } from "../../fireBase/Auth/auth";
import { setUserAccount } from "../../fireBase/UsersProfileData/profile";
import { userIType } from "../../fireBase/UsersProfileData/types";
// userIType {
//  email?: string;
//   name?: string;
//   github?: string;
//   phone?: string;
//   telegram?: string;
//   groups?: string[];
//   note?: string;
// }

export function Profile() {
  const {
    themeActive,
    toggleMessage,
    currentUser,
    userData,
  }: {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    userData: userIType;
    currentUser: any;
  } = useAppContext();

  const values = userData;
  const { register, handleSubmit } = useForm<userIType>({
    defaultValues: {},
    values, // will get updated once values returns
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);
  //const [isSave, setIsSave] = useState<boolean>(false);

  const onSubmit: SubmitHandler<userIType> = async (data) => {
    if (!isEdit) {
      try {
        setIsEdit(true);
        await setUserAccount(currentUser.email, {
          ...data,
        });
        toggleMessage({
          type: "success",
          message: "Profile successfully changed " + currentUser.email,
        });
        setIsEdit(false);
      } catch (err) {
        console.log("Profile : " + currentUser.email + "  Error: " + err);
        toggleMessage({ type: "error", message: String(err) });
        setIsEdit(false);
      }
    }
  };

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>Account</div>
          <input
            type="text"
            disabled
            placeholder={currentUser.email}
            style={{ border: "none", textAlign: "center", width: "100%" }}
          />

          <br />
          <form className={style.flexForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: false, maxLength: 15 })}
              />
              <br />
              <input
                type=""
                placeholder="Your link http:/"
                {...register("link", { required: false, maxLength: 50 })}
              />
              <br />
              <input
                type="tel"
                placeholder="Phone: +79998887766"
                {...register("phone", { required: false, maxLength: 15 })}
              />
              <br />
              <input
                type="text"
                placeholder="Your @telegram"
                {...register("telegram", { required: false, maxLength: 15 })}
              />
              <br />
            </div>
            <div className={style.inputContainer}>
              <textarea
                placeholder="Your note text"
                {...register("note", { required: false, maxLength: 500 })}
              />
            </div>
            <button type="submit" style={{ width: "100%" }}>
              Update account
            </button>
          </form>

          <button onClick={doSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
