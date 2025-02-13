import { Box } from "@mui/material";
import { Link } from "react-router";
import Logo from "../../logo/Logo";

const HeaderLogo = () => {
  return (
    <Box
      sx={{
        height: "50px",
      }}
    >
      <Link to="/">
        <Logo width="auto" height="90%" />
      </Link>
    </Box>
  );
};

export default HeaderLogo;