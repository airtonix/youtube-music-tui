import { useContext } from "react";
import type { ContextType } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export function useScreenSize(): ContextType<typeof ScreenSizeContext> {
  const context = useContext(ScreenSizeContext);
  if (!context)
    throw new Error(
      "useScreenSize must only be used within children of <ScreenSizeProvider/>"
    );
  return context;
}
