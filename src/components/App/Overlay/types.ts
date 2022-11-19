export type OverlayId<T extends string> = T;
export type OverlayMap<T extends string> = Record<OverlayId<T>, boolean>;
export type OverlayContextShape<T extends string> = {
  overlays: OverlayMap<T>;
  toggle: (name: OverlayId<T>) => void;
  open: (name: OverlayId<T>) => void;
  close: (name: OverlayId<T>) => void;
};
