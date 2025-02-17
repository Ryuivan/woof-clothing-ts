import { Bounce, toast } from "react-toastify";
import { PaletteMode } from "@mui/material";

export const makeSuccessToast = (message: string, themeMode: PaletteMode) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: themeMode,
    transition: Bounce,
  });
};

export const makeErrorToast = (message: string, themeMode: PaletteMode) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: themeMode,
    transition: Bounce,
  });
}