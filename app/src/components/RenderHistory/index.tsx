import { JSX, useEffect, useState } from "react";
import { IRouteMap } from "../../fireBase/RouteMaps/types";

type propsHistory = {
  historyArr: IRouteMap[];
};

export function RenderHistory({ historyArr }: propsHistory): JSX.Element {
  const [Arr, setArr] = useState<IRouteMap[]>([]);
  useEffect(() => {
    setArr(historyArr);
    //console.log("RenderHistory_Arr: " + Arr[0].series);
  }, [historyArr, Arr]);

  const RenderH = (): JSX.Element => {
    return (
      <>
        {Arr.map((elem) => (
          <div>
            <h2>{elem.series}</h2>
            <br />
            {elem.idMethod}
            <br />
            {elem.methodName}
            <br />
            {elem.type}
            <br />
          </div>
        ))}
      </>
    );
  };

  return <RenderH />;
}
