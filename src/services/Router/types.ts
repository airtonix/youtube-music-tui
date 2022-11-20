export interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}
interface ActionSet<T> {
  type: "SET";
  newPresent: T;
}
interface ActionClear<T> {
  type: "CLEAR";
}
interface ActionUndo<T> {
  type: "UNDO";
}
interface ActionRedo<T> {
  type: "REDO";
}

export type Action<T> =
  | ActionSet<T>
  | ActionClear<T>
  | ActionUndo<T>
  | ActionRedo<T>;

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
