import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import NightModeToggle from "../components/theme/NightModeToggle";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <Box>
      {children}
      <NightModeToggle />
    </Box>
  );
};

export default MainLayout;
