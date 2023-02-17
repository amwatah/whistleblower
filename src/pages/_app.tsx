import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default api.withTRPC(App);
