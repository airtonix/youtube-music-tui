import React from "react";
import type { PropsWithChildren } from "react";

import { OverlayContext } from "./OverlayContext";
import { createOverlayState } from "./OverlayStateFactory";

export function OverlayProvider({ children }: PropsWithChildren<{}>) {
  const overlayState = createOverlayState();
  return (
    <OverlayContext.Provider value={overlayState}>
      {children}
    </OverlayContext.Provider>
  );
}
