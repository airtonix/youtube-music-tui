import React, { useCallback } from "react";
import type { ComponentProps } from "https://esm.sh/react@17.0.2";
import Gradient from "ink-gradient";
import { useInput } from "ink";

import { useRouter } from "../../../services/Router/useRouter.ts";
import { FullScreen } from "../../App/FullScreen/FullScreen.tsx";
import { Ascii } from "../../App/Ascii/Ascii.tsx";
import { useAuth } from "../../../services/Auth/useAuth.ts";

type Colors = NonNullable<ComponentProps<typeof Gradient>["name"]>;

export function SplashScreen() {
  const { goto } = useRouter();
  const { isAuthenticated } = useAuth();

  useInput((_, key) => {
    if (key.return || key.escape) {
      goto("/playlist");
    }
  });

  const handleTabChange = useCallback(() => {}, []);

  return (
    <FullScreen
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Gradient name="retro">
        <Ascii
          font="Slant"
          horizontalLayout="default"
          verticalLayout="default"
          text="YuTui"
        />
      </Gradient>
    </FullScreen>
  );
}
