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
//   groups?: {
//     PletnevD?: string;
//     ElisaLab?: string;
//   };
//   text?: string;
// }

export function Profile() {
  //@ts-expect-error  ???
  const { currentUser } = useAuth();
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();
  const { register, handleSubmit } = useForm<userIType>();

  const [email, setEmail] = useState<string>("Your email");
  const [name, setName] = useState<string>("Your Name");
  const [github, setGithub] = useState<string>("Your link github");
  const [phone, setPhone] = useState<string>("Phone: +79998887766");
  const [telegram, setTelegram] = useState<string>("Your @telegram");
  const [groups, setGroups] = useState<object>({
    PletnevD: "none",
    ElisaLab: "none",
  });
  const [note, setNote] = useState<string>("Your text");

  useEffect(() => {
    setEmail(currentUser.email);
  }, []);

  return (
    <div className={themeActive.section}>
      <div className={style.page}>
        <div className={style.container}>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form>
            <p>Личный кабинет</p>
            <input
              type="text"
              value={email}
              placeholder={email}
              {...register("email", { required: true, maxLength: 15 })}
            />
            <br />
            <input
              type="text"
              placeholder={github}
              {...register("github", { required: true, maxLength: 15 })}
            />
            <br />
            <input
              type="tel"
              placeholder={phone}
              {...register("phone", { required: true, maxLength: 15 })}
            />
            <br />
            <input
              type="text"
              placeholder={telegram}
              {...register("telegram", { required: true, maxLength: 15 })}
            />
            <br />
          </form>
          <button onClick={doSignOut}>Save data</button>
          <button onClick={doSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
