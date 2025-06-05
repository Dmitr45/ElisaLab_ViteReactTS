export type TypeToggleMethodSelected = { (method: IMethod): void };

export interface IMethod {
  id: string;
  name: string;
  type: string;
  stages: boolean[];
  nameStages: string[];
  temperatures: number[];
  times: number[];
  shaking: number[];
}
