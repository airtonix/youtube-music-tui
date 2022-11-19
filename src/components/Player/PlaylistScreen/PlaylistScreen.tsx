import React from "react";
import { Box, Text } from "ink";

import { useEffect } from "react";

import { useAuth } from "../../../services/Auth/useAuth.ts";
import { useRouter } from "../../../services/Router/useRouter.ts";

import { PlaylistContainer } from "./PlaylistContainer.tsx";

export function PlaylistScreen() {
  const { isAuthenticated } = useAuth();
  const { goto } = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      goto("/login");
    }
  }, [isAuthenticated]);

  return <PlaylistContainer />;
}
