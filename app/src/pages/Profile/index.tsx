//https://toxigon.com/create-social-media-app-with-firebase-and-react
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";
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
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();
  const { register, handleSubmit } = useForm<userIType>();

  const [name, setName] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");
  const [groups, setGroups] = useState<string[]>([
    "PletnevD.com",
    "ElisaLab.ru",
  ]);
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    setName(userData !== null ? String(userData.name) : "");
    setGithub(userData !== null ? String(userData.github) : "");
    setPhone(userData !== null ? String(userData.phone) : "");
    setTelegram(userData !== null ? String(userData.telegram) : "");
    setNote(userData !== null ? String(userData.note) : "");
  }, []);

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
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form className={style.flexForm}>
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                {...register("name", { required: true, maxLength: 15 })}
              />
              <br />
              <input
                type="text"
                placeholder="Your link github"
                value={github}
                {...register("github", { required: true, maxLength: 15 })}
              />
              <br />
              <input
                type="tel"
                placeholder="Phone: +79998887766"
                value={phone}
                {...register("phone", { required: true, maxLength: 15 })}
              />
              <br />
              <input
                type="text"
                placeholder="Your @telegram"
                value={telegram}
                {...register("telegram", { required: true, maxLength: 15 })}
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
                value={note}
                {...register("note", { required: true, maxLength: 500 })}
              />
            </div>
          </form>

          <button onClick={doSignOut}>Save data</button>
          <button onClick={doSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
