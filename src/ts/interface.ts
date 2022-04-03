export interface TableDataProps {
  place: String;
  state: String;
  cases: number;
  deaths: number;
  bg?: string;
}

export interface filterStateProps {
  search: string;
  country: string;
  region: string;
  date: string;
}

export interface TableDataSource {
  county: string;
  cases: number;
  deaths: number;
  fips: number;
  state: string;
  date: string;
}

export interface ContextInterface {
  data?: TableDataSource[];
  states?: string[];
  webFilter?: boolean;
  filterData?: (payload: string) => void;
  changeState?: (payload: string) => void;
  searchPlace?: (payload: string) => void;
  setWebFilter?: (payload: boolean) => void;
}
