import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import TableData from "./TableData";
import TableFIlter from "./TableFilter";
import TableHeading from "./TableHeading";
import { DataContext } from "../../contextAPI/DataContext";
import LoaderAnimation from "../UI/LoaderAnimation";
import FilterOverlay from "../UI/FilterOverlay";

const TableRoot = () => {
  const stateData = useContext(DataContext);
  const { data, webFilter } = stateData;

  return (
    <Box>
      <TableFIlter />
      <Box border="1px solid lightgray">
        <TableHeading />
        {data !== undefined && data!.length > 0 ? (
          data!.map((data, index: number) => {
            const randomNum = Math.floor(Math.random()) + 34 * 100000;
            return (
              <TableData
                place={data.county}
                state={data.state}
                cases={data.cases}
                deaths={data.deaths}
                key={index + randomNum + data.fips * data.cases}
                bg={`${(index + 1) % 2 === 0 && "gray"}`}
              />
            );
          })
        ) : data !== undefined && data?.length === 0 ? (
          <LoaderAnimation />
        ) : (
          data === undefined && (
            <Box textAlign="center" color="red.500">
              {" "}
              No Data Available
            </Box>
          )
        )}
      </Box>
      <br />
      <br />
      {webFilter && <FilterOverlay />}
    </Box>
  );
};

export default TableRoot;
