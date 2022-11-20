import React, { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import { useStdout } from "ink";

import { ScreenSizeContext } from "./ScreenSizeContext";
type ScreenSizeProviderProps = PropsWithChildren<{}>;

export function ScreenSizeProvider({ children }: ScreenSizeProviderProps) {
  const { stdout } = useStdout();
  const [width, setWidth] = useState(() => stdout?.columns || 0);
  const [height, setHeight] = useState(() => stdout?.rows || 0);

  useEffect(() => {
    const handleTerminalResize = () => {
      if (!!stdout) setWidth(() => stdout.columns);
      if (!!stdout) setHeight(() => stdout.rows);
    };
    process.on("SIGWINCH", handleTerminalResize);
    return () => {
      process.on("SIGWINCH", handleTerminalResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ width, height }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
