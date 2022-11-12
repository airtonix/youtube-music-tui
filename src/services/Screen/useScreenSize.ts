import { useContext } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext.ts";

export function useScreenSize(): typeof ScreenSizeContext {
  const context = useContext(ScreenSizeContext);
  if (!context)
    throw new Error(
      "useScreenSize must only be used within children of <ScreenSizeProvider/>"
    );
  return context;
}
