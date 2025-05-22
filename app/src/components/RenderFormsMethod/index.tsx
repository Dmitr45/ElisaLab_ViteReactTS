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

  const [timerArr, setTimerArr] = useState<number[]>([]); // Массив таймеров [time],[time], [time]
  const [newTimerArr, toggleTimerArr] = useState<number[]>(timerArr);
  const [temperatureArr, setTemperatureArr] = useState<number[]>([]); // Массив таймеров [time],[time], [time]
  const [newTemperatureArr, toggleTemperatureArr] =
    useState<number[]>(temperatureArr);
  const [isEnabledArr, setIsEnabledArr] = useState<boolean[]>([]); // Массив таймеров [time],[time], [time]
  const [newIsEnabledArr, toggleIsEnabledArr] =
    useState<boolean[]>(isEnabledArr);
  useEffect(() => {
    setTimerArr(newTimerArr);
    setTemperatureArr(newTemperatureArr);
    setIsEnabledArr(newIsEnabledArr);
  }, [newTimerArr, newTemperatureArr, newIsEnabledArr]);

  const [type, setType] = useState<string>("");
  const [stage, setStag] = useState<IStage[]>([]);

  useEffect(() => {
    if (method !== undefined) {
      setId(method.id);
      setName(method.name);
      setType(method.type);
      setStag(method.stage);
      setTimerArr(
        // Соберем все time в один массив
        method.stage.map((stage) => {
          return stage.time;
        })
      );
      setTemperatureArr(
        // Соберем все temperature в один массив
        method.stage.map((stage) => {
          return stage.temperature;
        })
      );
      setIsEnabledArr(
        // Соберем все isEnabled в один массив
        method.stage.map((stage) => {
          return stage.isEnabled;
        })
      );
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
                    value={temperatureArr[index]}
                    onChange={(event) => {
                      const arr = temperatureArr.map(
                        (elem: number, i: number) => {
                          if (i === index) {
                            return Number(event.target.value);
                          } else {
                            return Number(elem);
                          }
                        }
                      );
                      toggleTemperatureArr(arr);
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
                    value={timerArr[index]}
                    onChange={(event) => {
                      const arr = timerArr.map((elem: number, i: number) => {
                        if (i === index) {
                          return Number(event.target.value);
                        } else {
                          return Number(elem);
                        }
                      });
                      toggleTimerArr(arr);
                    }}
                  ></input>
                  <br />
                  Time, min
                </div>
                <div className={styles.isEnabled}>
                  <input
                    type="checkbox"
                    key={index + "3000"}
                    checked={isEnabledArr[index]}
                    onChange={(event) => {
                      const arr = isEnabledArr.map(
                        (elem: boolean, i: number) => {
                          if (i === index) {
                            return Boolean(event.target.checked);
                          } else {
                            return Boolean(elem);
                          }
                        }
                      );
                      toggleIsEnabledArr(arr);
                    }}
                  ></input>
                  <br />
                  Is enabled
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
