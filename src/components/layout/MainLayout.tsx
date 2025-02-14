import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "text.primary",
        
      }}
      disableGutters
    >
      {children}
    </Container>
  );
};

export default MainLayout;
