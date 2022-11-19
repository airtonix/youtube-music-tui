import React from "react";
import { Box, Text } from "ink";
import { LoginForm } from "./LoginForm.tsx";

export function LoginScreen() {
  return (
    <Box flexGrow={1} justifyContent="center">
      <Box borderStyle="double" width="45%" flexDirection="column">
        <LoginForm onSubmit={() => {}} />
      </Box>
    </Box>
  );
}
