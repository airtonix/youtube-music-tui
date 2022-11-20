import React from "react";

import { Layout } from "./components/App/Layout";
import { AuthProvider } from "./services/Auth";
import { ScreenSizeProvider } from "./services/Screen";
import { Router, Route, KeyPressRouter } from "./services/Router";
import { Header } from "./components/App/Header/Header";
import { Footer } from "./components/App/Footer/Footer";
import { Overlay, OverlayProvider } from "./components/App/Overlay";

import { SplashScreen } from "./components/Splash/SplashScreen/SplashScreen";
import { PlaylistScreen } from "./components/Player/PlaylistScreen/PlaylistScreen";
import { LoginScreen } from "./components/Auth/LoginScreen";

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
