import { PaletteMode } from "@mui/material";
import { useThemeContext } from "../../context/ThemeProvider";
import LogoLight from "../../assets/logo/logo-light.png";
import LogoDark from "../../assets/logo/logo-dark.png";

type LogoProps = {
  width: string;
  height: string;
};

const Logo = ({ width, height }: LogoProps) => {
  const { theme } = useThemeContext();
  const mode: PaletteMode = theme.palette.mode;

  return (
    <img
      src={mode === "light" ? LogoLight : LogoDark}
      alt="Woof logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
