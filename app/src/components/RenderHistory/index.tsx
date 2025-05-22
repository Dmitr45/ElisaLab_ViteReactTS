import { JSX, useEffect, useState } from "react";
import { IRouteMap } from "../../fireBase/RouteMaps/types";
import styles from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import { TimestampToLine } from "../../logics/timestampToDate";

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
            key={index}
            className={
              styles.tableHistoryElem + " " + themeActive.borderWishHover
            }
          >
            <h2>{elem.methodName}</h2>
            <p>id Method: {elem.idMethod}</p>
            <p>type work: {elem.type}</p>
            {elem.stage.map((eSt, index) => (
              <>
                <p>
                  Stage №{index + 1}: <b>{eSt.nameStage}</b>
                </p>
                <p>Temperature: {eSt.temperature}°C</p>
                <p>Time: {eSt.time} min</p>
                <p>Pause: {eSt.pause} min</p>
                <p>Start work: {eSt.start ? TimestampToLine(eSt.start) : ""}</p>
                <p>Finish work: {eSt.end ? TimestampToLine(eSt.end) : ""}</p>
              </>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return <RenderH />;
}
