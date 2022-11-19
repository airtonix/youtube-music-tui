import React from "react";
import type {
  ContextType,
  FunctionComponent,
} from "https://esm.sh/react@17.0.2";

import { useOverlay } from "./useOverlay.ts";

import { OverlayContext } from "./OverlayContext.ts";

type ValidOverlayId = keyof NonNullable<
  ContextType<typeof OverlayContext>
>["overlays"];
type OverlayProps = {
  id: ValidOverlayId;
  component: FunctionComponent<unknown>;
};
export function Overlay({ id, component: Component }: OverlayProps) {
  const { overlays } = useOverlay();
  if (!overlays[id]) return null;
  if (!Component) return null;
  return <Component />;
}
