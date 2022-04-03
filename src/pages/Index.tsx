import React, { useContext } from "react";
import TableRoot from "../components/table/TableRoot";
import { Container, Image, useMediaQuery, Box } from "@chakra-ui/react";
import logo from "../assets/img/logo.png";
import filterIcon from "../assets/img/filterIcon.png";
import { DataContext } from "../contextAPI/DataContext";

const Index: React.FC = () => {
  const [isSmall] = useMediaQuery("(max-width: 600px)");
  const webOvalay = useContext(DataContext);
  const { setWebFilter, webFilter } = webOvalay;

  return (
    <Container
      padding={`${isSmall ? "2rem 0.5rem" : "2rem 0.5rem 5rem"}`}
      maxW="container.lg"
      position="relative"
    >
      <Image
        paddingLeft="0.5rem"
        src={logo}
        width={`${isSmall ? "40vw" : "18vw"}`}
        alt="Banner Image"
      />
      <TableRoot />
      {!webFilter && (
        <Box
          onClick={() => {
            setWebFilter!(true);
          }}
          position="fixed"
          right="5vw"
          bottom="5vw"
          className="btn"
          display={isSmall ? "none" : "block"}
        >
          <Image src={filterIcon} alt="filter chart" width="4rem" />
        </Box>
      )}
    </Container>
  );
};

export default Index;
