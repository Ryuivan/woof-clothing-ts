import { Settings } from "@mui/icons-material";
import { Box, Tooltip, IconButton, Drawer } from "@mui/material";
import HeaderSettingsDrawerList from "./HeaderSettingsDrawerList";

type HeaderSettingsProps = {
  toggleSettingsDrawer: (newOpen: boolean) => void;
  openSettings: boolean;
};

const HeaderSettings = ({
  toggleSettingsDrawer,
  openSettings,
}: HeaderSettingsProps) => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={() => toggleSettingsDrawer(true)} sx={{ p: 0 }}>
          <Settings />
        </IconButton>
      </Tooltip>

      <Drawer
        open={openSettings}
        onClose={() => toggleSettingsDrawer(false)}
        anchor="right"
      >
        <HeaderSettingsDrawerList toggleDrawer={toggleSettingsDrawer} />
      </Drawer>
    </Box>
  );
};

export default HeaderSettings;
