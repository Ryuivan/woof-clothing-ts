import { Box, Drawer, IconButton, Tooltip } from "@mui/material";
import HeaderMenuDrawerList from "./HeaderMenuDrawerList";
import { Menu } from "@mui/icons-material";
import { PageType } from "./Header";

type MobileMenuProps = {
  toggleMenuDrawer: (newOpen: boolean) => void;
  openMenu: boolean;
  pages: PageType[];
};

const HeaderMobileMenu = ({
  toggleMenuDrawer,
  openMenu,
  pages,
}: MobileMenuProps) => {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <Tooltip title="Open side menu">
        <IconButton onClick={() => toggleMenuDrawer(true)} sx={{ p: 0 }}>
          <Menu />
        </IconButton>
      </Tooltip>

      <Drawer
        open={openMenu}
        onClose={() => toggleMenuDrawer(false)}
        anchor="left"
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <HeaderMenuDrawerList toggleDrawer={toggleMenuDrawer} pages={pages} />
      </Drawer>
    </Box>
  );
};

export default HeaderMobileMenu;
