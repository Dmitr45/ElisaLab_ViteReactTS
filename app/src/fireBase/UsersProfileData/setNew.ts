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
      coun: { lastSeries: 0 },
      maps: [
        {
          idMethod: "example",
          isClosed: true,
          methodName: "You don't have a story yet, but this is an example.",
          series: 0,
          stage: [],
          type: "none",
        },
      ],
    });
    await setDoc(doc(dataFireBase, "runSeriesMaps", UserEmail), {
      maps: [],
    });

    console.log(
      `Созданы документы для пользователя ${UserEmail}: "users", "methods", runSeriesMaps`
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
