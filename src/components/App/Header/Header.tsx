import React from "react";
import { Box, Text } from "ink";
import { useAuth } from "../../../services/Auth/useAuth";

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <Box justifyContent="space-between" flexGrow={1}>
      <Text color="red">youtube-music</Text>
      <Text>{(!!isAuthenticated && "authenticated") || "anon"}</Text>
    </Box>
  );
}
