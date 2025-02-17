import { Pagination, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ProductPaginationProps = {
  totalPages: number;
  currentPage: number;  
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const ProductPagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: ProductPaginationProps) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ marginTop: "32px" }}>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => setCurrentPage(value)}
        defaultPage={1}
      />
    </Stack>
  );
};

export default ProductPagination;
