import type { OverlayContextShape, OverlayMap } from "./types";

export function createOverlayState<T extends string>(...overlayNames: T[]) {
  const overlays: OverlayContextShape<T> = {
    overlays: overlayNames.reduce<OverlayMap<T>>(
      (result, name) => ({
        ...result,
        [name]: false,
      }),
      {} as OverlayMap<T>
    ),
    toggle(name: T) {
      this.overlays[name] = !this.overlays[name];
    },
    open(name: T) {
      this.overlays[name] = true;
    },
    close(name: T) {
      this.overlays[name] = false;
    },
  };
  return overlays;
}
