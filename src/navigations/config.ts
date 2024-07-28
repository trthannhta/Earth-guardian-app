import { EDataType } from "../db/slide-data";

export type RootStackParams = {
  SplashScreen:undefined;
  TabNavigation: undefined;
  QuizzResult: undefined;
  QuizzScreen: undefined;
  PracticeDetail: undefined;
  Detail: {
    id:string;
    type: EDataType
  };
  DetailActivity: {
    id:string;
  };
};

export type BottomTabsParams = {
  Home: undefined;
  Quizz: undefined;
  Practice: undefined;
  Puzzle: undefined;
};


export type BottomRootParams = BottomTabsParams & RootStackParams