import { Box, Button } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Button
        variant="outlined"
        startIcon={<LightMode />}
        onClick={() => toggleColorMode("light")}
        color={mode === "light" ? "primary" : "inherit"}
        disabled={mode === "light"}
        fullWidth
        sx={{
          borderRadius: "4px 0 0 4px",
        }}
      >
        Light
      </Button>

      <Button
        variant="outlined"
        startIcon={<DarkMode />}
        onClick={() => toggleColorMode("dark")}
        color={mode === "dark" ? "primary" : "inherit"}
        disabled={mode === "dark"}
        fullWidth
        sx={{
          borderRadius: "0 4px 4px 0",
        }}
      >
        Dark
      </Button>
    </Box>
  );
};

export default NightModeToggle;
