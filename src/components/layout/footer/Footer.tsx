import { Box, Divider, Stack, Typography } from "@mui/material";
import Logo from "../../logo/Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "100px",
        width: "100%",
        paddingY: "32px",
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "32px" }}
      >
        <Logo width="250px" height="auto" />
      </Stack>

      <Divider variant="middle" />

      <Box
        sx={{
          marginTop: "32px",
          textAlign: "center",
        }}
      >
        <Typography color="text.primary" fontWeight={500}>
          &copy; {new Date().getFullYear()} Ryu Ivan Wijaya - All rights
          reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
