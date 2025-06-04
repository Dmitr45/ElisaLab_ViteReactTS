import { useEffect, useState } from "react";
import { IMethod } from "../../fireBase/MethodsData/types";
import styles from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
  toggleRebootUsersMethodsType,
} from "../../context/types";
import { setUpdateState } from "../../fireBase/runMethodsState/updateMaps";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import { RxRocket } from "react-icons/rx";
import { VscSaveAs } from "react-icons/vsc";
import { TbMessageQuestion } from "react-icons/tb";
import { RiFolderUserLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";
import { setUserMethod } from "../../fireBase/MethodsData/methods";
import { setNewLastSeries } from "../../fireBase/LastSeries/setNewLastSeries";
import { setNewHistory } from "../../fireBase/HistoryData/setNewHistory";
import { IRouteMap } from "../../fireBase/HistoryData/types";
import { LastSeriesModerator } from "../../fireBase/LastSeries";

type PropsMethod = {
  method: IMethod;
};

export function RenderFormsMethod({ method }: PropsMethod) {
  const {
    //themeActive,
    lastSeries,
    togglePageActive,
    userLoggedIn,
    currentUser,
    toggleMessage,
    toggleRebootUsersMethods,
  }: {
    themeActive: themeActiveType;
    lastSeries: number;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
    userLoggedIn: boolean;
    currentUser: any;
    toggleRebootUsersMethods: toggleRebootUsersMethodsType;
  } = useAppContext();

  //====New Method===================================================================
  const [EDITEDmethod, setEDITEDmethod] = useState<IMethod>({
    id: "",
    name: "",
    type: "",
    stages: [true, true, true, true],
    nameStages: ["", "", "", ""],
    temperatures: [0, 0, 0, 0],
    times: [0, 0, 0, 0],
  });
  // Options of the method=========================================================================
  // export interface IMethod {
  //   id: string;
  //   name: string;
  //   type: string;
  //   stages: boolean[];
  //   nameStages: string[];
  //   temperature: number[];
  //   time: number[];
  // }

  const [id, setId] = useState<string>("none");
  const [name, setName] = useState<string>(
    "The method is not selected. Please select the standard or your method."
  );
  const [newName, toggleName] = useState(name);
  useEffect(() => {
    setName(newName);
  }, [newName]);

  const [type, setType] = useState<string>("");
  const [stages, setStages] = useState<boolean[]>([]); // Массив stages [true],[true], [true]
  const [newStages, toggleStages] = useState<boolean[]>(stages);
  useEffect(() => {
    setStages(newStages);
  }, [newStages]);

  const [nameStages, setNameStages] = useState<string[]>([]); // Массив nameStages [nameStage],[nameStage], [nameStage]

  const [temperatures, setTemperatures] = useState<number[]>([]); // Массив temperature [temperature],[temperature], [temperature]
  const [newTemperatures, toggleTemperatures] =
    useState<number[]>(temperatures);
  useEffect(() => {
    setTemperatures(newTemperatures);
  }, [newTemperatures]);

  const [times, setTimes] = useState<number[]>([]); // Массив time [time],[time], [time]
  const [newTimes, toggleTimes] = useState<number[]>(times);
  useEffect(() => {
    setTimes(newTimes);
  }, [newTimes]);

  // Получаем метод из props
  useEffect(() => {
    if (method !== undefined) {
      setId(method.id);
      setName(method.name);
      setType(method.type);
      setStages(method.stages);
      setNameStages(method.nameStages);
      setTemperatures(method.temperatures);
      setTimes(method.times);
    }
  }, [method]);

  //===Отслеживаем изменения======================================================================================

  useEffect(() => {
    const idNew = String(Date.now());
    setEDITEDmethod({
      id: idNew,
      name: name,
      type: type,
      stages: stages,
      nameStages: nameStages,
      temperatures: temperatures,
      times: times,
    });
  }, [temperatures, times, stages, name]);

  //  ====Function start method================================================================
  async function startMethod(
    series: number = lastSeries,
    email: string = currentUser.email,
    times: number[] = EDITEDmethod.times,
    stages: boolean[] = EDITEDmethod.stages,
    nameStages: string[] = EDITEDmethod.nameStages,
    temperatures: number[] = EDITEDmethod.temperatures
  ) {
    // Функция для запуска метода
    const newSeries = series + 1;

    const newHistory: IRouteMap = {
      series: newSeries,
      idMethod: id,
      isClosed: false,
      methodName: EDITEDmethod.name,
      type: EDITEDmethod.type,
      stages: stages,
      nameStages: nameStages,
      temperatures: temperatures,
      times: times,
      start: [Date.now(), 0, 0, 0],
    };

    const stateRun: IRunMethodsState = {
      series: newSeries,
      methodName: EDITEDmethod.name,
      type: EDITEDmethod.type,
      stages: stages,
      nameStages: nameStages,
      temperatures: temperatures,
      times: times,
      start: [Date.now(), Date.now(), Date.now(), Date.now()],
    };
    try {
      console.log("Click: Запуск метода: " + Date.now());
      await setNewLastSeries(newSeries, email);
      await setNewHistory(newSeries, newHistory, email);
      await setUpdateState(newSeries, stateRun, email);
      togglePageActive(15); // Переходим на страницу работы
      toggleMessage({
        type: "success",
        message: "Method started successfully!",
      });
    } catch (error) {
      toggleMessage({
        type: "error",
        message: "Error starting method: " + error,
      });
    }
  }
  //=========================================================================================
  // Сохраняем метод в EDITEDmethod
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
          {method.stages.map((stage, index) => {
            console.log(stage ? "" : " ");
            return (
              <div key={index} className={styles.stage}>
                <div className={styles.stageTitle}>
                  Stage{index + 1}: <br /> <b>{nameStages[index]}</b>
                </div>
                <div className={styles.isEnabled}>
                  <input
                    type="checkbox"
                    key={index + "3000"}
                    checked={stages[index]}
                    onChange={(event) => {
                      const arr = stages.map((elem: boolean, i: number) => {
                        if (i === index) {
                          return Boolean(event.target.checked);
                        } else {
                          return Boolean(elem);
                        }
                      });
                      toggleStages(arr);
                    }}
                  ></input>
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
                    value={times[index]}
                    onChange={(event) => {
                      const arr = times.map((elem: number, i: number) => {
                        if (i === index) {
                          return Number(event.target.value);
                        } else {
                          return Number(elem);
                        }
                      });
                      toggleTimes(arr);
                    }}
                  ></input>
                  <br />
                  Time, min
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
                    value={temperatures[index]}
                    onChange={(event) => {
                      const arr = temperatures.map(
                        (elem: number, i: number) => {
                          if (i === index) {
                            return Number(event.target.value);
                          } else {
                            return Number(elem);
                          }
                        }
                      );
                      toggleTemperatures(arr);
                    }}
                  ></input>
                  <br />
                  Temperature, °C
                </div>
              </div>
            );
          })}
          <br />
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              {userLoggedIn ? (
                <button
                  style={{ width: 100 + "%" }}
                  onClick={() => {
                    setUserMethod(currentUser.email, EDITEDmethod).then(
                      (result) => {
                        toggleMessage(result);
                        toggleRebootUsersMethods(true);
                      }
                    );
                  }}
                >
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
                  if (id.length > 3) {
                    console.log("Click: Удалить метод: " + id);
                  } else {
                    console.log(
                      "Click errore: Стандартный метод нельзя удалить: " + id
                    );
                  }
                }}
              >
                Delete method&nbsp;
                <MdOutlineDeleteForever />
              </button>
            </div>
            <div className={styles.button}>
              <button
                className={styles.buttonStart}
                style={{ width: 100 + "%" }}
                onClick={() => {
                  startMethod();
                }}
              >
                Start work <RxRocket />
                -№
                <LastSeriesModerator />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
