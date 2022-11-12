import React, { useEffect, useState } from "react";
import { Text } from "ink";

import { Layout } from "./components/App/Layout/index.ts";
import { AuthProvider } from "./services/Auth/index.ts";
import { ScreenSizeProvider } from "./services/Screen/index.ts";
import { KeyPressRouter } from "./services/Router/KeyPressRouter.tsx";
import { Header } from "./components/App/Header/Header.tsx";
import { Footer } from "./components/App/Footer/Footer.tsx";
import { Debug } from "./components/App/Debug/Debug.tsx";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    setIsLoading(false);
  }, [isLoading]);

  return (
    <ScreenSizeProvider>
      <AuthProvider>
        <KeyPressRouter>
          <Layout header={<Header />} footer={<Footer />}>
            <Text>children</Text>
            <Debug />
          </Layout>
        </KeyPressRouter>
      </AuthProvider>
    </ScreenSizeProvider>
  );
}
