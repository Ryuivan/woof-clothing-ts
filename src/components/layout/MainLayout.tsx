import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        color: "text.primary",
        paddingX: {
          xs: "16px",
          sm: "32px",
          xl: 0
        },
      }}
      disableGutters
    >
      {children}
    </Container>
  );
};

export default MainLayout;
