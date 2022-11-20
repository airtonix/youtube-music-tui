import { useCallback } from "react";
import { useHistoryReducer } from "./useHistoryReducer";

export function useHistory<T>(present: T) {
  const [state, dispatch] = useHistoryReducer(present);

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;
  // Setup our callback functions
  // We memoize with useCallback to prevent unnecessary re-renders
  const undo = useCallback((): void => {
    if (canUndo) {
      dispatch({ type: "UNDO" });
    }
  }, [canUndo, dispatch]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: "REDO" });
    }
  }, [canRedo, dispatch]);

  const set = useCallback(
    (newPresent: T) => dispatch({ type: "SET", newPresent }),
    [dispatch]
  );

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [dispatch]);

  return {
    state: state.present as T,
    history: state.past as T[],
    set,
    undo,
    redo,
    clear,
    canUndo,
    canRedo,
  };
}
