import { Timestamp } from "firebase/firestore";

export interface IStageRouteMap {
  id: string;
  nameStage: string;
  temperature: number;
  time: number;
  start: Timestamp;
  end: Timestamp;
  pause: number;
  isFinished: boolean;
}

export interface IRouteMap {
  series: number;
  idMethod: string;
  methodName: string;
  type: string;
  stage: IStageRouteMap[];
}
