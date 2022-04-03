import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { TableDataProps } from "../../ts/interface";

const TableData: React.FC<TableDataProps> = ({
  place,
  cases,
  deaths,
  bg,
  state,
}) => {
  return (
    <Box width="100%">
      <Grid
        padding="0rem"
        marginBottom="rem"
        textAlign="center"
        templateColumns="repeat(4, 1fr)"
        borderBottom="1px #E3E9F0 solid"
        bg={bg ? `${bg}.100` : ""}
      >
        <Text padding="0.25rem 0.1rem" borderRight="1px #E3E9F0 solid">
          {state}
        </Text>
        <Text padding="0.25rem 0.1rem" borderRight="1px #E3E9F0 solid">
          {place}
        </Text>
        <Text padding="0.25rem 0.1rem" borderRight="1px #E3E9F0 solid">
          {cases}
        </Text>
        <Text padding="0.25rem 0.1rem">{deaths}</Text>
      </Grid>
    </Box>
  );
};

export default TableData;
