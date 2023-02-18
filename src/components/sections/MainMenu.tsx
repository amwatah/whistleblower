import { Burger, Menu, Paper } from "@mantine/core";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import microsoftXboxControllerMenu from "@iconify/icons-mdi/microsoft-xbox-controller-menu";
import homeIcon from "@iconify/icons-mdi/home";
import whistleIcon from "@iconify/icons-mdi/whistle";
import accountCircle from "@iconify/icons-mdi/account-circle";
import newspaperVariantMultiple from "@iconify/icons-mdi/newspaper-variant-multiple";
import financeIcon from "@iconify/icons-mdi/finance";
import { useRouter } from "next/router";
import {
  CREATEPAGE,
  HOMEPAGE,
  PROFILEPAGE,
  STATSPAGE,
} from "../../utils/routepaths";

const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <Paper
      sx={{
        zIndex: 10000000,
      }}
      className=" fixed top-0 left-0 m-1"
    >
      <Menu zIndex={200000}>
        <Menu.Target>
          <Burger
            opened={menuOpen}
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
          >
            <Icon icon={microsoftXboxControllerMenu} />
          </Burger>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Select a destination</Menu.Label>
          <Menu.Item
            icon={<Icon icon={homeIcon} />}
            onClick={() => void router.push(HOMEPAGE)}
          >
            HOME
          </Menu.Item>
          <Menu.Item
            icon={<Icon icon={whistleIcon} />}
            onClick={() => void router.push(CREATEPAGE)}
          >
            REPORT
          </Menu.Item>
          <Menu.Item
            icon={<Icon icon={financeIcon} />}
            onClick={() => void router.push(STATSPAGE)}
          >
            STATS
          </Menu.Item>
          <Menu.Item
            icon={<Icon icon={newspaperVariantMultiple} />}
            onClick={() => void router.push(STATSPAGE)}
          >
            NEWS
          </Menu.Item>

          <Menu.Item
            icon={<Icon icon={accountCircle} />}
            onClick={() => void router.push(PROFILEPAGE)}
          >
            PROFILE
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Paper>
  );
};

export default MainMenu;
