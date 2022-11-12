import React, { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import { useStdout } from "ink";

import { ScreenSizeContext } from "./ScreenSizeContext.ts";
type ScreenSizeProviderProps = PropsWithChildren<{}>;

export function ScreenSizeProvider({ children }: ScreenSizeProviderProps) {
  const { stdout } = useStdout();
  const [width, setWidth] = useState(() => stdout.columns);
  const [height, setHeight] = useState(() => stdout.rows);

  useEffect(() => {
    const handleTerminalResize = () => {
      const { columns, rows } = Deno.consoleSize();
      setWidth(() => columns);
      setHeight(() => rows);
    };
    Deno.addSignalListener("SIGWINCH", handleTerminalResize);
    return () => {
      Deno.removeSignalListener("SIGWINCH", handleTerminalResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ width, height }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
