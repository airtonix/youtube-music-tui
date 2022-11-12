import React from "react";
import { Box, Text } from "ink";
import { useScreenSize } from "../../../services/Screen/index.ts";

export function Debug() {
  const { width, height } = useScreenSize();

  return (
    <Box borderStyle="double" width="100%" height={4}>
      <Text>
        terminal size: {width} / {height}
      </Text>
    </Box>
  );
}
