import { useEffect, useState } from "react";
import { IMethod, IStage } from "../../fireBase/MethodsData/types";
import style from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";

type PropsMethod = {
  method: IMethod;
};

export function RenderFormsMethod({ method }: PropsMethod) {
  const {
    //themeActive,
    togglePageActive,
  }: // toggleMessage,
  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  const [id, setId] = useState<string>("none");
  const [name, setName] = useState<string>(
    "The method is not selected. Please select the standard or your method."
  );
  const [type, setType] = useState<string>("");
  const [stage, setStag] = useState<IStage[]>([]);

  useEffect(() => {
    if (method !== undefined) {
      setId(method.id);
      setName(method.name);
      setType(method.type);
      setStag(method.stage);
      //console.log("id, name, type, stage", id, name, type, stage);
    }
  }, [method]);

  return (
    <div>
      {" "}
      {id === "none" ? (
        <div>
          <div className={style.methodTitle}>{name}</div>
          <button
            onClick={() => {
              togglePageActive(11);
            }}
          >
            Select method
          </button>
        </div>
      ) : (
        <div>
          <div className={style.methodTitle}>
            <input
              style={{ height: 30, width: 100 + "%" }}
              value={name}
            ></input>
          </div>
          <br />({type})
          <br />
          {stage.map((stage, index) => {
            return (
              <p>
                Stage{index + 1}: <b>{stage.nameStage}</b> || Temperature:{" "}
                <input
                  style={{ height: 30, width: 120 }}
                  value={stage.temperature}
                ></input>
                {" С "}
                || Time:{" "}
                <input
                  style={{ height: 30, width: 90 }}
                  value={stage.time}
                ></input>
                {" min "}
              </p>
            );
          })}
          <br />
          <button>Save new method</button>
          <span>\ /</span>
          <button
            onClick={() => {
              togglePageActive(6);
            }}
          >
            Start method
          </button>
        </div>
      )}
    </div>
  );
}
