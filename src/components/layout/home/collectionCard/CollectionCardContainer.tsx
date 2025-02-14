import { Stack } from "@mui/material";
import CollectionSingleCard from "./CollectionSingleCard";
import CropTopCard from "../../../../assets/card/crop-top-card.webp";
import SignatureCard from "../../../../assets/card/signature-card.webp";
import SweaterCard from "../../../../assets/card/sweater-card.webp";

type CollectionCardDataType = {
  image: string;
  name: string;
};

const collectionCardData: CollectionCardDataType[] = [
  {
    image: CropTopCard,
    name: "Crop Top",
  },
  {
    image: SignatureCard,
    name: "Signature",
  },
  {
    image: SweaterCard,
    name: "Sweater",
  },
];

const CollectionCardContainer = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      sx={{
        padding: 0,
      }}
    >
      {collectionCardData.map(
        ({ image, name }: CollectionCardDataType, index) => (
          <CollectionSingleCard key={index} image={image} name={name} />
        )
      )}
    </Stack>
  );
};

export default CollectionCardContainer;
