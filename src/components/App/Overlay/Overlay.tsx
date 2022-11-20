import React from "react";
import type { ContextType, FunctionComponent } from "react";

import { useOverlay } from "./useOverlay";

import { OverlayContext } from "./OverlayContext";

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
