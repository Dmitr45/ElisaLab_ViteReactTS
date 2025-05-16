export type TypeToggleMethodSelected = { (method: IMethod): void };
export type IStage = {
  id: string;
  nameStage: string;
  temperature: number;
  time: number;
};
export interface IMethod {
  id: string;
  name: string;
  stage: IStage[];
  type: string;
}
