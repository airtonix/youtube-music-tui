import { createContext } from "https://esm.sh/react@17.0.2";
import { createOverlayState } from "./OverlayStateFactory.ts";
import { OverlayContextShape } from "./types.ts";

const overlays = ["login"] as const;
export const OverlayContext = createContext<
  OverlayContextShape<typeof overlays[number]>
>(createOverlayState(...overlays));
