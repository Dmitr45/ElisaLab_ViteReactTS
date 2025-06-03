import { JSX, useEffect, useState } from "react";
import { IRouteMap } from "../../fireBase/HistoryData/types";
import styles from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";

type propsHistory = {
  historyArr: IRouteMap[];
};

export function RenderHistory({ historyArr }: propsHistory): JSX.Element {
  const {
    themeActive,
  }: //togglePageActive,
  // toggleMessage,
  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  const [Arr, setArr] = useState<IRouteMap[]>([]);
  useEffect(() => {
    setArr(historyArr);
    //console.log("RenderHistory_Arr: " + Arr[0].series);
  }, [historyArr, Arr]);

  const RenderH = (): JSX.Element => {
    return (
      <div className={styles.tableHistory}>
        {Arr.map((elem, index) => (
          <div
            key={elem.nameStages[index]}
            className={
              styles.tableHistoryElem + " " + themeActive.borderWishHover
            }
          >
            <h2>{elem.methodName}</h2>
            <p>id Method: {elem.idMethod}</p>
            <p>type work: {elem.type}</p>
            {elem.stages.map((eSt, index) => (
              <>
                {console.log("eSt: " + eSt)}
                <p>
                  Stage №{index + 1}: <b>{elem.nameStages[index]}</b>
                </p>
                <p>Temperature: {elem.temperatures[index]}°C</p>
                <p>Time: {elem.times[index]} min</p>
                <p>Start work: {elem.start[index] ? elem.start[index] : ""}</p>
              </>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return <RenderH />;
}
