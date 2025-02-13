import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSettings from "./HeaderSettings";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopMenu from "./HeaderDesktopMenu";

export type PageType = {
  name: string;
  href: string;
};

const pages: PageType[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Categories",
    href: "/",
  },
];

const Header = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleSettingsDrawer = (newOpenValue: boolean) => {
    setOpenSettings(newOpenValue);
  };

  const toggleMenuDrawer = (newOpenValue: boolean) => {
    setOpenMenu(newOpenValue);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "background.navbar",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            paddingY: "12px",
            paddingX: {
              xs: "16px",
              sm: "24px",
              md: "32px",
              xl: "0",
            },
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <HeaderMobileMenu
              toggleMenuDrawer={toggleMenuDrawer}
              openMenu={openMenu}
              pages={pages}
            />

            <HeaderLogo />

            <HeaderDesktopMenu pages={pages} />

            <HeaderSettings
              toggleSettingsDrawer={toggleSettingsDrawer}
              openSettings={openSettings}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
