import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import NightModeToggle from "../theme/NightModeToggle";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "white",
      }}
    >
      {children}
      <NightModeToggle />
    </Container>
  );
};

export default MainLayout;
