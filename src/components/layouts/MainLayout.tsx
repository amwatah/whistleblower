import { MantineProvider, Switch } from "@mantine/core";
import Head from "next/head";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode, useState } from "react";
import React from "react";
import MainMenu from "../sections/MainMenu";

interface MainLayoutProps {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  const [activetheme, setActivetheme] = useState<"light" | "dark">("dark");
  return (
    <div>
      <Head>
        <title>Whistle-Kenya</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: activetheme,
          colors: {
            brand: [
              "#F5FFF7",
              "#94FCA0",
              "#44FC5A",
              "#01FF1F",
              "#03BD19",
              "#048C14",
              "#056710",
              "#054C0D",
              "#04380A",
              "#042A08",
            ],
          },
          primaryColor: "brand",
          primaryShade: 3,
        }}
      >
        <ModalsProvider>
          <NotificationsProvider>
            <MainMenu />
            <Switch
              className=" fixed top-0 right-0 m-2"
              onChange={() => {
                activetheme === "dark"
                  ? setActivetheme("light")
                  : setActivetheme("dark");
              }}
            />

            <div className=" container mx-auto">{children}</div>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </div>
  );
}

export default MainLayout;
