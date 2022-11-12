import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import { default as spinners } from "cli-spinners";
import type { SpinnerName } from "cli-spinners";
import { Spinner } from "./Spinner.tsx";

const SpinnerNames = Object.keys(spinners) as SpinnerName[];

export function SpinnerPreview() {
  const [name, setName] = useState<SpinnerName>("dots2");

  useInput((input, key) => {
    const currentIndex = SpinnerNames.indexOf(name);
    setName(() => {
      let next = key.upArrow
        ? currentIndex - 1
        : key.downArrow
        ? currentIndex + 1
        : currentIndex;

      if (next < 0) next = SpinnerNames.length - 1;
      if (next >= SpinnerNames.length - 1) next = 0;

      return SpinnerNames[next];
    });
  });

  return (
    <Box>
      <Text>{name}</Text>
      <Spinner type={name} />
    </Box>
  );
}
