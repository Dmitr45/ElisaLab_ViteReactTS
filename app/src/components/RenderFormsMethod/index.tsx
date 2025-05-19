import { useEffect, useState } from "react";
import { IMethod, IStage } from "../../fireBase/MethodsData/types";
import styles from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import { RxRocket } from "react-icons/rx";

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
          <div className={styles.methodTitle}>{name}</div>
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
          <div className={styles.methodTitle}>
            <input
              key={name}
              style={{ height: 30, width: 100 + "%" }}
              value={name}
              readOnly
            ></input>
          </div>
          <br />({type})
          <br />
          {stage.map((stage, index) => {
            return (
              <div className={styles.stage}>
                <div className={styles.stageTitle}>
                  Stage{index + 1}: <br /> <b>{stage.nameStage}</b>
                </div>
                <div className={styles.stageTemperature}>
                  <input
                    key={index + "1000"}
                    style={{
                      height: 30,
                      width: 100 + "%",
                      textAlign: "center",
                    }}
                    value={stage.temperature}
                    readOnly
                  ></input>
                  <br />
                  Temperature, °C
                </div>
                <div className={styles.stageTime}>
                  <input
                    key={index + "2000"}
                    style={{
                      height: 30,
                      width: 100 + "%",
                      textAlign: "center",
                    }}
                    value={stage.time}
                    readOnly
                  ></input>
                  <br />
                  Time, min
                </div>
              </div>
            );
          })}
          <br />
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <button style={{ width: 100 + "%" }}>Save new method</button>
            </div>
            <div className={styles.button}>
              <button
                className={styles.buttonStart}
                style={{ width: 100 + "%" }}
                onClick={() => {
                  togglePageActive(6);
                }}
              >
                Start method <RxRocket />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
