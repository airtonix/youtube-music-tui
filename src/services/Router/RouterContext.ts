import { ContextType } from "react";
import { createRouterContext } from "./createRouterContext";

export const RouterContext = createRouterContext([
  { path: "/" },
  { path: "/login" },
  { path: "/playlist" },
  { path: "/playlist/:id" },
  { path: "/suggest" },
  { path: "/suggest/genre/:genre" },
  { path: "/suggest/artist/:name" },
  { path: "/suggest/album/:name" },
  { path: "/search" },
  { path: "/artist/:name" },
  { path: "/artist/:name/album/:name" },
  { path: "/artist/:name/album/:name/track/:track" },
  { path: "/settings" },
] as const);
export type RoutePath = Parameters<
  ContextType<typeof RouterContext>["goto"]
>[0];
