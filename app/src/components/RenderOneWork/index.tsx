import { useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import useInterval from "use-interval";

export function RenderOneWork({ ObjWork }: { ObjWork: IRunMethodsState }) {
  const [timer, setTimer] = useState<number>();

  useInterval(() => {
    setTimer((ObjWork.start - Date.now() / 1000) / 3600);
  }, 1000);

  return (
    <>
      "Series№ "{ObjWork.series}
      "Stage : "{ObjWork.numberStage + 1}
      "Start : "{timer}
    </>
  );
}
