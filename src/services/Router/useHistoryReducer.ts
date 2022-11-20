import { useReducer } from "react";
import type { HistoryState, Action } from "./types";

// Our reducer function to handle state changes based on action
export function useHistoryReducer<T>(initialPresent: T) {
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
