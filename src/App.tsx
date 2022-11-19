import React from "react";

import { Layout } from "./components/App/Layout/index.ts";
import { AuthProvider } from "./services/Auth/index.ts";
import { ScreenSizeProvider } from "./services/Screen/index.ts";
import { Router, Route, KeyPressRouter } from "./services/Router/index.ts";
import { Header } from "./components/App/Header/Header.tsx";
import { Footer } from "./components/App/Footer/Footer.tsx";
import { Overlay, OverlayProvider } from "./components/App/Overlay/index.ts";

import { SplashScreen } from "./components/Splash/SplashScreen/SplashScreen.tsx";
import { PlaylistScreen } from "./components/Player/PlaylistScreen/PlaylistScreen.tsx";
import { LoginScreen } from "./components/Auth/LoginScreen/index.ts";

export function App() {
  return (
    <Router>
      <OverlayProvider>
        <KeyPressRouter>
          <ScreenSizeProvider>
            <AuthProvider>
              <Layout header={<Header />} footer={<Footer />}>
                <Overlay id="login" component={LoginScreen} />
                <Route path="/" component={SplashScreen} />
                <Route path="/playlist" component={PlaylistScreen} />
                <Route path="/playlist/:id" component={PlaylistScreen} />
              </Layout>
            </AuthProvider>
          </ScreenSizeProvider>
        </KeyPressRouter>
      </OverlayProvider>
    </Router>
  );
}
