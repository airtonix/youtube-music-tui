import React from "react";
import { Box, Text } from "ink";

export function Footer() {
  return (
    <Box justifyContent="flex-start">
      <Text color="blue">&copy; {new Date().toDateString()}</Text>
    </Box>
  );
}
