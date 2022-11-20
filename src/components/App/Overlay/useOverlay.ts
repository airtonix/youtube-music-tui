import { useContext } from "react";

import { OverlayContext } from "./OverlayContext";

export function useOverlay() {
  const context = useContext(OverlayContext);
  if (!context)
    throw new Error(
      "useOverlay must only be used within children of <OverlayProvider>"
    );
  return context;
}
