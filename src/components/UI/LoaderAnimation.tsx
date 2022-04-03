import React from "react";
import { Box, Skeleton, Grid } from "@chakra-ui/react";

const LoaderAnimation = () => {
  const keyDummy = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ];
  return (
    <Box>
      {keyDummy.map((data, index) => {
        return (
          <Grid
            padding="0rem"
            marginBottom="0.3rem"
            textAlign="center"
            templateColumns="repeat(4, 1fr)"
            gap={1}
            key={index * data + 10000}
          >
            <Skeleton speed={0.9} width="100%" height="30px" />
            <Skeleton speed={0.9} width="100%" height="30px" />
            <Skeleton speed={0.9} width="100%" height="30px" />
            <Skeleton speed={0.9} width="100%" height="30px" />
          </Grid>
        );
      })}
    </Box>
  );
};

export default LoaderAnimation;
