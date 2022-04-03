import React, { useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import TableFIlter from "../table/TableFilter";
import { DataContext } from "../../contextAPI/DataContext";
import closeIcon from "../../assets/img/Closed Icon.svg";

const FilterOverlay = () => {
  const webOvalay = useContext(DataContext);
  const { setWebFilter } = webOvalay;

  return (
    <Box
      width="100%"
      padding="0.5.5rem"
      position="fixed"
      height="100vh"
      left="0"
      top="0"
      className="glass-bg"
    >
      <Box
        bg="gray.100"
        width="80%"
        margin="4vw auto 0"
        borderRadius="10px"
        padding="1rem 4rem 0.5rem"
        border="1px groove gray"
        position="relative"
      >
        <Box
          onClick={() => {
            setWebFilter!(false);
          }}
          className="btn"
          position="absolute"
          top="0"
          right="0"
        >
          <Image width="5rem" src={closeIcon} alt="CLose Icon" />
        </Box>
        <TableFIlter />
      </Box>
    </Box>
  );
};

export default FilterOverlay;
