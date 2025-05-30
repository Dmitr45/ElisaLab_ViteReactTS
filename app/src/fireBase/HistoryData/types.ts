import { Timestamp } from "firebase/firestore";

export interface IStageRouteMap {
  id: string;
  nameStage: string;
  temperature: number;
  time: number;
  start?: Timestamp;
  end?: Timestamp;
  pause?: number;
  isEnabled: boolean;
  isFinished?: boolean;
}

export interface IRouteMap {
  series: number;
  idMethod: string;
  isClosed: boolean;
  methodName: string;
  type: string;
  stage: IStageRouteMap[];
}
