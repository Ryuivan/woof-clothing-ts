import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router";
import { PageType } from "./Header";

type HeaderDesktopMenuProps = {
  pages: PageType[];
};

const HeaderDesktopMenu = ({ pages }: HeaderDesktopMenuProps) => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Stack
        sx={{
          flex: {
            xs: 0,
            md: 1,
          },
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {pages.map((page: PageType, index: number) => (
          <Link to={page.href} key={index}>
            <Button
              sx={{
                color: "text.primary",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              {page.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default HeaderDesktopMenu;
