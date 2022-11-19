import { useContext } from "https://esm.sh/react@17.0.2";

import { OverlayContext } from "./OverlayContext.ts";

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context)
    throw new Error(
      "useOverlay must only be used within children of <OverlayProvider>"
    );
  return context;
}
