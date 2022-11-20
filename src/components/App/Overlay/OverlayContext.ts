import { createContext } from "react";
import { OverlayContextShape } from "./types";
import { createOverlayState } from "./OverlayStateFactory";

const overlays = ["login"] as const;
export const OverlayContext = createContext<
  OverlayContextShape<typeof overlays[number]>
>(createOverlayState(...overlays));
