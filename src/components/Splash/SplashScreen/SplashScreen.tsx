import React, { useCallback } from "react";
import type { ComponentProps } from "react";
import Gradient from "ink-gradient";
import { useInput } from "ink";

import { useRouter } from "../../../services/Router/useRouter";
import { FullScreen } from "../../App/FullScreen/FullScreen";
import { Ascii } from "../../App/Ascii/Ascii";
import { useAuth } from "../../../services/Auth/useAuth";
import { useOverlay } from "../../App/Overlay/useOverlay";

type Colors = NonNullable<ComponentProps<typeof Gradient>["name"]>;

export function SplashScreen() {
  const { goto } = useRouter();
  const { open } = useOverlay();
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
