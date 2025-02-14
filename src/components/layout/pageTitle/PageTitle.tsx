import { Box, Typography } from "@mui/material";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingY: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
