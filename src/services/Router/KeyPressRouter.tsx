import React from "react";
import type { PropsWithChildren } from "https://esm.sh/react@17.0.2";
import { useInput } from "ink";

type KeyPressRouterProps = PropsWithChildren<{}>;

export function KeyPressRouter({ children }: KeyPressRouterProps) {
  useInput(() => {});
  return <>{children}</>;
}
