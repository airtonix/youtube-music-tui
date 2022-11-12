import React from "react";
import type { ReactNode, PropsWithChildren } from "react";

import { useScreenSize } from "../../../services/Screen/useScreenSize.ts";
import { Box } from "ink";

type LayoutProps = PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
}>;

export function Layout({ header, children, footer }: LayoutProps) {
  const { width, height } = useScreenSize();

  return (
    <Box
      flexDirection="column"
      height={height}
      width={width - 2}
      paddingY={1}
      marginX={1}
      flexShrink={0}
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
    >
      <Box flexDirection="row" width="100%">
        {header}
      </Box>
      <Box flexDirection="column" flexGrow={1} width="100%">
        {children}
      </Box>
      <Box flexDirection="row" width="100%">
        {footer}
      </Box>
    </Box>
  );
}
