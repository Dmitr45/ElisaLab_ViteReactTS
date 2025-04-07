import { getDatabase, ref, onValue } from "firebase/database";
import { dataFireBase } from "../index";

export interface user {
  name?: string;
  github?: string;
  phone?: number;
  telegram?: string;
  groups?: {
    PletnevD?: string;
    ElisaLab?: string;
  };
}

export async function UsersDATA() {
  const Users = ref(dataFireBase, "users");

  onValue(Users, (users) => {
    const data = users.val();
    console.log("Data users: " + data);
  });
}
