import { Container } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        color: "text.primary",
        minHeight: "80vh",
        paddingX: {
          xs: "16px",
          sm: "32px",
          xl: 0,
        },
      }}
    >
      {children}
    </Container>
  );
};

export default MainLayout;
