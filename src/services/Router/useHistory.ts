import { useReducer, useCallback } from "react";

interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}
interface ActionSet<T> {
  type: "SET";
  newPresent: T;
}
interface ActionClear<T> {
  type: "CLEAR";
}
interface ActionUndo<T> {
  type: "UNDO";
}
interface ActionRedo<T> {
  type: "REDO";
}

type Action<T> = ActionSet<T> | ActionClear<T> | ActionUndo<T> | ActionRedo<T>;

// Our reducer function to handle state changes based on action

function useHistoryReducer<T>(initialPresent: T) {
  const initial: HistoryState<T> = {
    // Array of previous state values updated each time we push a new state
    past: [],
    // Will contain "future" state values if we undo (so we can redo)
    future: [],
    // Current state value
    present: initialPresent,
  };

  return useReducer((state: HistoryState<T>, action: Action<T>) => {
    const { past, present, future } = state;

    switch (action.type) {
      case "UNDO": {
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      }
      case "REDO": {
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      }
      case "SET": {
        const { newPresent } = action;
        if (newPresent === present) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
      }
      case "CLEAR": {
        return {
          ...initial,
          present: initialPresent,
        };
      }
    }
  }, initial);
}

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
