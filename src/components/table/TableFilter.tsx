import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import openIcon from "../../assets/img/Menu Icon.svg";
import closeIcon from "../../assets/img/Closed Icon.svg";
import { DataContext } from "../../contextAPI/DataContext";

const TableFIlter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWeb = useMediaQuery("(min-width: 600px)");
  const totalState = useContext(DataContext);
  const { filterData, changeState, searchPlace, states } = totalState;

  const [userTyped, setUserTyped] = useState<string>("");

  const searchHandler = (e: any) => {
    const userInput = e.target.value.trim();
    setUserTyped(userInput);
    searchPlace!(userInput);
  };

  const filterHandler = (e: any) => {
    const userInput = e.target.value;
    filterData!(userInput);
  };

  const stateHandler = (e: any) => {
    const userSelected = e.target.value;
    changeState!(userSelected);
  };

  return (
    <Box paddingBottom="2rem">
      {!isWeb[0] && (
        <Box position="absolute" right="1vw" top="1vw">
          <Box onClick={onOpen}>
            <Image width="6rem" src={openIcon} />
          </Box>
        </Box>
      )}
      {isWeb[0] ? (
        <HStack
          display="flex"
          justifyContent="space-between"
          textAlign="center"
          width="100%"
          spacing="20px"
          padding="2rem 1rem 0.5rem"
        >
          <Box position="relative">
            <FormLabel textAlign="left" htmlFor="place">
              Search
            </FormLabel>
            <Input
              onChange={searchHandler}
              id="place"
              placeholder="Search a place"
              autoFocus
              value={userTyped}
              // disabled={stateData.length < 1 ? true : false}
            />
            <Box
              position="absolute"
              left="2vw"
              color="red.400"
              transition="0.2s all ease"
              visibility={
                userTyped.length < 3 && userTyped.length !== 0
                  ? "visible"
                  : "hidden"
              }
            >
              <Box>Enter at least 3 letters</Box>
            </Box>
          </Box>
          <Box>
            <FormLabel textAlign="center" htmlFor="region">
              State/Region
            </FormLabel>
            <Select onChange={stateHandler} id="region">
              {states!.length > 1 && <option value="all">Show All</option>}
              {states!.length > 0 ? (
                states!.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })
              ) : (
                <option value="segun"> No State loaded</option>
              )}
            </Select>
          </Box>
          <Box>
            <FormLabel textAlign="right" htmlFor="filter">
              Sort
            </FormLabel>
            <Select onChange={filterHandler} id="filter">
              <option value="ALPHA">Alphabetical</option>
              <option value="HIGHDEATH">Highest Death</option>
              <option value="LOWDEATH">Lowest Death</option>
              <option value="HIGHCASE">Highest Cases</option>
              <option value="LOWCASE">Lowest Cases</option>
            </Select>
          </Box>
        </HStack>
      ) : (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <Box display="flex" justifyContent="flex-end" textAlign="center">
              <Box onClick={onClose}>
                <Image width="6rem" src={closeIcon} />
              </Box>
            </Box>

            <DrawerBody>
              <Stack spacing="24px">
                <Box position="relative">
                  <FormLabel htmlFor="place">Search</FormLabel>
                  <Input
                    onChange={searchHandler}
                    id="place"
                    placeholder="Search a place"
                    autoFocus
                    value={userTyped}
                    // disabled={stateData.length < 1 ? true : false}
                  />
                  <Box
                    position="absolute"
                    left="2vw"
                    color="red.400"
                    transition="0.2s all ease"
                    visibility={
                      userTyped.length < 3 && userTyped.length !== 0
                        ? "visible"
                        : "hidden"
                    }
                  >
                    <Box>Enter at least 3 letters</Box>
                  </Box>
                </Box>
                <Box>
                  <FormLabel htmlFor="region">State/Region</FormLabel>
                  <Select onChange={stateHandler} id="region">
                    {states!.length > 1 && (
                      <option value="all">Show All</option>
                    )}
                    {states!.length > 0 ? (
                      states!.map((state) => {
                        return (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        );
                      })
                    ) : (
                      <option value="segun"> No State loaded</option>
                    )}
                  </Select>
                </Box>
                <Box>
                  <FormLabel htmlFor="filter">Sort</FormLabel>
                  <Select onChange={filterHandler} id="filter">
                    <option value="ALPHA">Alphabetical</option>
                    <option value="HIGHDEATH">Highest Death</option>
                    <option value="LOWDEATH">Lowest Death</option>
                    <option value="HIGHCASE">Highest Cases</option>
                    <option value="LOWCASE">Lowest Cases</option>
                  </Select>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button onClick={onClose} colorScheme="green">
                Done
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

export default TableFIlter;
