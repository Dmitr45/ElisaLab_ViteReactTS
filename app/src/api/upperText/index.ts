import { postDATA } from "../index";

type resultObj = {
  upperText: string;
};

export async function upperText(str: string) {
  let TEXT: string = "";
  (await postDATA("upperText", {
    text: str,
  }).then((obj) => {
    TEXT = obj.upperText;
  })) as resultObj;
  console.log(TEXT);
  return "String(TEXT)";
}
