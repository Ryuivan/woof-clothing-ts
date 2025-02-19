import { Box, Divider } from "@mui/material";
import CollectionCardContainer from "../../components/layout/home/collectionCard/CollectionCardContainer";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import SignatureCardContainer from "../../components/layout/home/SignatureCollectionrCard/SignatureCollectionCardContainer";

const Home = () => {
  return (
    <Box>
      <PageTitle title="Our Collections" />
      <CollectionCardContainer />
      <Divider
        sx={{
          marginY: "32px",
        }}
      />
      <PageTitle title="New Arrivals" />
      <SignatureCardContainer />
    </Box>
  );
};

export default Home;
