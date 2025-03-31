export type NameObjType = {
  // Тип для названия приложения
  name: string;
  span: string;
  slogan: string;
};

export interface userUidI {
  uid: string;
}

export type pagesType = (() => React.ReactElement)[];
export type darkThemeContextType = boolean;
export type toggleDarkThemeContextType = { (bool: boolean): string };
export type themeActiveType = { readonly [key: string]: string };
export type togglePageActiveType = { (page: number): string };
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
export type apiURLType = string;
