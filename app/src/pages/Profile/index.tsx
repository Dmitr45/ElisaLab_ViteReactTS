//https://toxigon.com/create-social-media-app-with-firebase-and-react
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType, toggleMessageType } from "../../context/types";
import style from "../styles.module.scss";
import { useAuth } from "../../fireBase/AuthProvider";
import { doSignOut } from "../../fireBase/auth";
import { userIType } from "../../fireBase/UsersProfileData/profile";

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
  //@ts-expect-error  ???
  const { currentUser, userData }: { userData: userIType; currentUser: any } =
    useAuth();
  const {
    themeActive,
    toggleMessage,
  }: {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
  } = useAppContext();

  const values = userData;
  const { register, handleSubmit } = useForm<userIType>({
    defaultValues: {},
    values, // will get updated once values returns
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isSave, setIsSave] = useState<boolean>(false);

  const onSubmit: SubmitHandler<userIType> = async (data) => {
    if (!isEdit) {
      try {
        setIsEdit(true);
        // await doSignInWithEmailAndPassword(data.login, data.password);
        toggleMessage({
          type: "success",
          message: "Profile successfully changed ",
        });
      } catch (err) {
        console.log("Profile : " + err);
        toggleMessage({ type: "error", message: String(err) });
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
                type="text"
                placeholder="Your link github"
                {...register("github", { required: false, maxLength: 15 })}
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
              {/* Вам доступна авторизация на сайтах:
              {groups.map((site: string) => {
                return <span> {" https://" + site + "     "} </span>;
              })} */}
            </div>
            <div className={style.inputContainer}>
              <textarea
                placeholder="Your note text"
                {...register("note", { required: false, maxLength: 500 })}
              />
            </div>
            <button type="submit" style={{ width: "100%" }}>
              Edit
            </button>
          </form>

          <button onClick={doSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
