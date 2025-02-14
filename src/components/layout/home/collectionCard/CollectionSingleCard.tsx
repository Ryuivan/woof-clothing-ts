import { Card, Button, Box } from "@mui/material";
import { useState } from "react";

type CollectionSingleCardProps = {
  image: string;
  name: string;
};

const CollectionSingleCard = ({ image, name }: CollectionSingleCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{
        flex: 1,
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={name}
          height="100%"
          width="100%"
          style={{
            display: "block",
            objectFit: "cover",
            transition: "0.15s ease-in-out",
            filter: hover ? "blur(3px)" : "none",
            backdropFilter: hover ? "rgba(0, 0, 0, 0.5)" : "none",
          }}
        />

        {hover && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "text.primary",
                backgroundColor: "background.default",
              }}
            >
              Shop Now
            </Button>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default CollectionSingleCard;
