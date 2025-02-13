import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import NightModeToggle from "../../theme/NightModeToggle";
import { ReactElement } from "react";
import { Close } from "@mui/icons-material";

type HeaderSettingsDrawerListProps = {
  toggleDrawer: (newOpen: boolean) => void;
};

type DrawerListItemType = {
  name: string;
  element: ReactElement;
};

const drawerListItems: DrawerListItemType[] = [
  {
    name: "Mode",
    element: <NightModeToggle />,
  },
];

const HeaderSettingsDrawerList = ({
  toggleDrawer,
}: HeaderSettingsDrawerListProps) => {
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
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                Settings
              </Typography>
            </Box>

            <Box>
              <IconButton onClick={() => toggleDrawer(false)}>
                <Close />
              </IconButton>
            </Box>
          </Stack>
        </ListItem>

        <Divider />

        {drawerListItems.map(({ name, element }: DrawerListItemType, index) => (
          <ListItem
            key={index}
            sx={{
              paddingTop: "16px",
            }}
          >
            <Stack direction="column" width="100%" spacing={1}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </Typography>
              {element}
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HeaderSettingsDrawerList;
