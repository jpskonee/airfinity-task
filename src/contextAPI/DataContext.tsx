import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ContextInterface, TableDataSource } from "../ts/interface";

const DataContext = createContext<ContextInterface>({});

const ContextProvider: FC<ReactNode> = ({ children }) => {
  const [data, setData] = useState<TableDataSource[] | undefined>([]);
  const [states, setStates] = useState<string[]>([]);
  const [webFilter, setWeb] = useState<boolean>(false);

  const setWebFilter = (payload: boolean) => {
    setWeb(payload);
  };

  //filtering live data handler
  const filterData = (payload: string) => {
    switch (payload) {
      case "ALPHA":
        const alphaSorted = data!.sort((a, b) => {
          if (a.county < b.county) {
            return -1;
          }
          if (a.county > b.county) {
            return 1;
          }
          return 0;
        });
        setData(alphaSorted.slice(0, alphaSorted.length));
        return;
      case "HIGHDEATH":
        const hdSorted = data!.sort((a, b) => {
          return b.deaths - a.deaths;
        });
        setData(hdSorted.slice(0, hdSorted.length));
        return;
      case "LOWDEATH":
        const ldSorted = data!.sort((a, b) => {
          return a.deaths - b.deaths;
        });
        setData(ldSorted.slice(0, ldSorted.length));
        break;
      case "HIGHCASE":
        const hsSorted = data!.sort((a, b) => {
          return b.cases - a.cases;
        });
        setData(hsSorted.slice(0, hsSorted.length));
        break;
      case "LOWCASE":
        const lcSorted = data!.sort((a, b) => {
          return a.cases - b.cases;
        });
        setData(lcSorted.slice(0, lcSorted.length));
        break;
      default:
        setData(data!.sort().slice(0, data!.length));
        return data;
    }
  };

  //changing state handler
  const changeState = async (payload: string) => {
    localStorage.removeItem("stateData");
    const res = localStorage.getItem("totalData");
    let data = [];
    if (res === null) {
      console.log("change call");
      const response = await fetch(
        "https://disease.sh/v3/covid-19/nyt/counties?lastdays=1"
      );
      data = await response.json();
    } else {
      data = JSON.parse(res);
    }
    if (payload === "all") {
      return setData(data);
    }
    const regionFilteredData = data.filter(
      (d: TableDataSource) => d.state === payload
    );
    localStorage.setItem("stateData", JSON.stringify(regionFilteredData));
    setData(regionFilteredData);
  };

  //search county handler
  const searchPlace = async (payload: string) => {
    const res = localStorage.getItem("totalData");
    let data = [];
    if (res === null) {
      console.log("change call");
      const response = await fetch(
        "https://disease.sh/v3/covid-19/nyt/counties?lastdays=1"
      );
      data = await response.json();
    } else {
      data = JSON.parse(res);
    }

    if (payload.length > 2) {
      const searchedData = data.filter((d: TableDataSource) =>
        d.county.toLowerCase().includes(payload.toLowerCase())
      );
      searchedData.length === 0 ? setData(undefined) : setData(searchedData);
    } else {
      setData(data);
    }
  };

  //gettting starting data
  const getStartingData = async () => {
    localStorage.removeItem("totalData");
    const response = await fetch(
      "https://disease.sh/v3/covid-19/nyt/counties?lastdays=1"
    );
    const data = await response.json();

    //storing in localStorage
    localStorage.setItem("totalData", JSON.stringify(data));

    //getting all available states
    const statesArr: string[] = [];
    let count = 0;
    data.map((d: TableDataSource) => {
      if (!statesArr.includes(d.state)) {
        count = count + 1;
        statesArr.push(d.state);
      }
      return true;
    });
    setStates(statesArr);
    setData(data);
    return;
  };

  useEffect(() => {
    getStartingData();
    return;
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        states,
        webFilter,
        filterData,
        changeState,
        searchPlace,
        setWebFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { ContextProvider, DataContext };
