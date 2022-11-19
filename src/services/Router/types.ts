export type RouteParamPrimtive =
  | string
  | number
  | boolean
  | RouteParamPrimtive[];
export type RouteParams = Record<string, RouteParamPrimtive>;

export interface Route {
  path: string;
  params?: RouteParams;
}

export type RouteMap = Array<Route>;
