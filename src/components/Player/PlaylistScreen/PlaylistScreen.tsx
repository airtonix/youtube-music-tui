import React from "react";
import { Box, Text } from "ink";

import { useEffect } from "react";

import { useAuth } from "../../../services/Auth/useAuth";
import { useRouter } from "../../../services/Router/useRouter";

import { PlaylistContainer } from "./PlaylistContainer";

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
