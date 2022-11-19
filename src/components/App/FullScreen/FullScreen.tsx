import React from "react";
import type { PropsWithChildren } from "react";
import { Box, Text } from "ink";
import type { BoxProps } from "ink";
import { useScreenSize } from "../../../services/Screen/index.ts";

type FullScreenProps = PropsWithChildren<BoxProps>;

export function FullScreen({ children, ...props }: FullScreenProps) {
  const { width, height } = useScreenSize();

  return (
    <Box width={width} height={height} {...props}>
      {children}
    </Box>
  );
}
