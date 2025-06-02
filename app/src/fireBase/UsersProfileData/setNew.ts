import { setDoc, doc } from "firebase/firestore";
import { dataFireBase } from "../index";

export async function AddDocNewUser(UserEmail: string) {
  // Add a new document in collection "users"
  try {
    await setDoc(doc(dataFireBase, "users", UserEmail), {
      email: UserEmail,
      name: UserEmail.split("@")[0],
      groups: ["ElisaLab.com"],
      link: "",
      phone: "",
      telegram: "",
      note: "",
    });
    await setDoc(doc(dataFireBase, "methods", UserEmail), {
      maps: [],
    });
    await setDoc(doc(dataFireBase, "historySeriesMaps", UserEmail), {
      [String(1)]: [
        {
          idMethod: "example",
          isClosed: true,
          methodName: "You don't have a story yet, but this is an example.",
          stage: [],
          type: "none",
        },
      ],
    });
    await setDoc(doc(dataFireBase, "runSeriesMaps", UserEmail), {
      [String(0)]: [],
    });
    await setDoc(doc(dataFireBase, "lastSeries", UserEmail), {
      counter: 0,
    });

    console.log(
      `Созданы документы для пользователя ${UserEmail}: "users", "methods", runSeriesMaps`
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
