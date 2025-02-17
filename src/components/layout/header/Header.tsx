import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSettings from "./HeaderSettings";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import { useThemeContext } from "../../../context/ThemeProvider";

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
    name: "Cart",
    href: "/cart",
  },
];

const Header = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { theme } = useThemeContext();

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
        boxShadow:
          theme.palette.mode === "light"
            ? "rgba(111, 111, 111, 0.3) 0px 0.1px 15px"
            : "rgba(255, 255, 255, 0.3) 0px 0.1px 15px",
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
          <Stack width="100%" direction="row" alignItems="center">
            <Stack
              flex={1}
              direction="row"
              justifyContent="flex-start"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <HeaderMobileMenu
                toggleMenuDrawer={toggleMenuDrawer}
                openMenu={openMenu}
                pages={pages}
              />
            </Stack>

            <Stack
              flex={1}
              direction="row"
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
            >
              <HeaderLogo />
            </Stack>

            <Stack
              flex={1}
              direction="row"
              justifyContent="center"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <HeaderDesktopMenu pages={pages} />
            </Stack>

            <Stack flex={1} direction="row" justifyContent="flex-end">
              <HeaderSettings
                toggleSettingsDrawer={toggleSettingsDrawer}
                openSettings={openSettings}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
