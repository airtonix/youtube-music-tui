import React from "react";
import type { PropsWithChildren } from "react";
import { useInput } from "ink";

type KeyPressRouterProps = PropsWithChildren<{}>;

export function KeyPressRouter({ children }: KeyPressRouterProps) {
  useInput(() => {});
  return <>{children}</>;
}
