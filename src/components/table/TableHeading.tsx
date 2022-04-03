import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";

const TableHeading: React.FC = () => {
  return (
    <Box width="100%">
      <Grid
        padding="0rem"
        marginBottom="rem"
        textAlign="center"
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px #E3E9F0 solid"
      >
        <Heading
          fontSize="1.1rem"
          padding="0.3rem 0.1rem"
          borderRight="1px #E3E9F0 solid"
        >
          State
        </Heading>
        <Heading
          fontSize="1.1rem"
          padding="0.3rem 0.1rem"
          borderRight="1px #E3E9F0 solid"
        >
          Place
        </Heading>
        <Heading
          fontSize="1.1rem"
          padding="0.3rem 0.1rem"
          borderRight="1px #E3E9F0 solid"
        >
          Cases
        </Heading>
        <Heading fontSize="1.1rem" padding="0.3rem 0.1rem">
          Deaths
        </Heading>
      </Grid>
    </Box>
  );
};

export default TableHeading;
