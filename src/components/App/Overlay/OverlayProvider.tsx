import React from "react";
import type { PropsWithChildren } from "https://esm.sh/react@17.0.2";

import { OverlayContext } from "./OverlayContext.ts";
import { createOverlayState } from "./OverlayStateFactory.ts";

export function OverlayProvider({ children }: PropsWithChildren<{}>) {
  const overlayState = createOverlayState();
  return (
    <OverlayContext.Provider value={overlayState}>
      {children}
    </OverlayContext.Provider>
  );
}
