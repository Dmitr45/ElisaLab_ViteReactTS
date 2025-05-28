export type NameObjType = {
  // Тип для названия приложения
  name: string;
  span: string;
  slogan: string;
};

export interface userUidI {
  uid: string;
}

export interface MessageIType {
  type: "success" | "error" | "warning" | "none";
  message: string;
}

export type pagesType = React.ReactElement[];
export type darkThemeContextType = boolean;
export type toggleDarkThemeContextType = { (bool: boolean): string };
export type themeActiveType = { readonly [key: string]: string };
export type togglePageActiveType = { (page: number): string };
export type toggleMessageType = { (obj: MessageIType): MessageIType };
export type NameAppType = NameObjType;
export type pageActiveType = number;
export type tokenAuth = string;
export type toggleControllerTokenAuth = { (token: string): string };
export type deltaSimpleTimeType = number;
export type toggleDeltaSimpleTimeType = number;
export type timeSimpleRenderType = number;
export type toggTimeSimpleRenredType = { (min: number): number };
export type localStorageRefreshType = number;
export type toggLocalStorageRefreshType = { (msec: number): number };
export type rebootUsersMethodsType = { bool: boolean };
export type toggleRebootUsersMethodsType = { (bool: boolean): boolean };
export type lestSeriesType = number;
export type toggleLastSeriesType = { (coun: number): number };
