export interface IRunMethodsState {
  methodName: string;
  nameStages: string[];
  stages: boolean[]; // true - stage is done
  times: number[];
  temperatures: number[]; // °C
  start: number[]; // sec
  series: number;
  type: string; // "roasting" | "curing" | "drying"
}
