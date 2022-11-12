import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Text } from "ink";
import { default as spinners } from "cli-spinners";
import type { SpinnerName } from "cli-spinners";

type SpinnerProps = {
  /**
   * Type of a spinner.
   * See [cli-spinners](https://github.com/sindresorhus/cli-spinners) for available spinners.
   *
   * @default dots
   */
  type?: SpinnerName;
};

/**
 * Spinner.
 */
export function Spinner({ type = "dots" }: SpinnerProps) {
  const [frame, setFrame] = useState(() => 0);

  const spinner = spinners[type];

  const spinnerFrame = spinner.frames[frame];

  useEffect(() => {
    if (!spinner) return;
    setFrame(0);

    const timer = setInterval(() => {
      setFrame((previousFrame: number) => {
        if (!spinnerFrame) return 0;
        const isLastFrame = previousFrame === spinner.frames.length - 1;
        return isLastFrame ? 0 : previousFrame + 1;
      });
    }, spinner.interval);

    return () => {
      clearInterval(timer);
    };
  }, [spinner, type]);

  return <Text>{spinnerFrame}</Text>;
}
