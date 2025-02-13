import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { PageType } from "./Header";
import { Link } from "react-router";

type HeaderMenuDrawerListProps = {
  toggleDrawer: (newOpen: boolean) => void;
  pages: PageType[];
};

const HeaderMenuDrawerList = ({
  toggleDrawer,
  pages,
}: HeaderMenuDrawerListProps) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100vw",
          sm: "350px",
        },
        height: "100vh",
        backgroundColor: "background.paper",
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <ListItem
          sx={{
            paddingY: "16px",
          }}
        >
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <IconButton onClick={() => toggleDrawer(false)}>
                <Close />
              </IconButton>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Menu
              </Typography>
            </Box>
          </Stack>
        </ListItem>

        <Divider />

        {pages.map(({ name, href }: PageType) => (
          <Link to={href}>
            <ListItem
              key={name}
              sx={{
                marginTop: "28px",
                width: "100%",
                display: "block",
              }}
            >
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  fontWeight: "600",
                  color: "text.primary",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default HeaderMenuDrawerList;
