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
import { VscSaveAs } from "react-icons/vsc";
import { TbMessageQuestion } from "react-icons/tb";
import { RiFolderUserLine } from "react-icons/ri";

type PropsMethod = {
  method: IMethod;
};

export function RenderFormsMethod({ method }: PropsMethod) {
  const {
    //themeActive,
    togglePageActive,
    userLoggedIn,
  }: // toggleMessage,
  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
    userLoggedIn: boolean;
  } = useAppContext();

  const [id, setId] = useState<string>("none");
  const [name, setName] = useState<string>(
    "The method is not selected. Please select the standard or your method."
  );
  const [newName, toggleName] = useState(name);
  useEffect(() => {
    setName(newName);
  }, [newName]);

  const [timersArr, setTimersArr] = useState<[number, number][]>([]); // Массив таймеров [[temperature, time],[temperature, time],[temperature, time]]
  const [newTimerArr, toggleTimerArr] = useState<[number, number][]>(timersArr);
  useEffect(() => {
    setTimersArr(newTimerArr);
  }, [newTimerArr]);

  const [type, setType] = useState<string>("");
  const [stage, setStag] = useState<IStage[]>([]);

  useEffect(() => {
    if (method !== undefined) {
      setId(method.id);
      setName(method.name);
      setType(method.type);
      setStag(method.stage);
      setTimersArr(
        // Соберем все [time, temperature] в один массив
        method.stage.map((stage) => {
          return [stage.temperature, stage.time];
        })
      );
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
            Select method <TbMessageQuestion />
          </button>
        </div>
      ) : (
        <div>
          <div className={styles.methodTitle}>
            <input
              key={"NAME"}
              style={{ height: 30, width: 100 + "%" }}
              value={name}
              onChange={(event) => {
                toggleName(event.target.value);
              }}
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
                    type="number"
                    key={index + "1000"}
                    style={{
                      height: 30,
                      width: 100 + "%",
                      textAlign: "center",
                    }}
                    value={timersArr[index][0]}
                    onChange={(event) => {
                      const arr = timersArr;
                      arr[index][1] = Number(event.target.value);
                      toggleTimerArr(arr);
                    }}
                  ></input>
                  <br />
                  Temperature, °C
                </div>
                <div className={styles.stageTime}>
                  <input
                    type="number"
                    key={index + "2000"}
                    style={{
                      height: 30,
                      width: 100 + "%",
                      textAlign: "center",
                    }}
                    value={timersArr[index][1]}
                    onChange={(event) => {
                      const arr = timersArr;
                      arr[index][1] = Number(event.target.value);
                      toggleTimerArr(arr);
                    }}
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
              {userLoggedIn ? (
                <button style={{ width: 100 + "%" }}>
                  Save new method&nbsp;
                  <VscSaveAs />
                </button>
              ) : (
                <button
                  style={{ width: 100 + "%" }}
                  onClick={() => {
                    togglePageActive(1);
                  }}
                >
                  Log in for save&nbsp;
                  <RiFolderUserLine />
                </button>
              )}
            </div>
            <div className={styles.button}>
              <button
                className={styles.buttonStart}
                style={{ width: 100 + "%" }}
                onClick={() => {
                  togglePageActive(6);
                }}
              >
                Start method&nbsp;
                <RxRocket />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
