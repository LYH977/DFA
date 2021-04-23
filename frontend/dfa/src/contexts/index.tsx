import React, { useContext, useState, useReducer } from "react";
import { SET_INPUT, SET_PATTERN, TOGGLE_PATTERN_ISCHECKED } from "../components/Constant";

export const PatternContext = React.createContext<any>(null);
export const InputContext = React.createContext<any>(null);
//--------------------------------------------------------------------------------------------------

export interface InputContent {
  name: string;
  isAccepted: boolean;
  pattern: string | null;
}

interface iAction {
  type: string;
  payload: InputContent[];
}

interface iContext {
  state: InputContent[];
  dispatch: React.Dispatch<iAction>;
}
const inputReducer = (state: InputContent[], action: iAction) => {
  switch (action.type) {
    case SET_INPUT:
      return action.payload;
    default:
      return state;
  }
};
//--------------------------------------------------------------------------------------------------
export type PatternObj = {
  [key: string]: PatternContent;
};

interface PatternContent {
  occurence: number;
  isChecked: boolean;
}
interface pAction {
  type: string;
  payload: PatternObj | string;
}

interface pContext {
  state: PatternObj;
  dispatch: React.Dispatch<pAction>;
}

const patternReducer = (state: PatternObj, action: pAction) => {
  switch (action.type) {
    case SET_PATTERN:
      return action.payload as PatternObj;
    case TOGGLE_PATTERN_ISCHECKED:
      return {
        ...state,
        [action.payload as string]: {
          ...state[action.payload as string],
          isChecked: !state[action.payload as string].isChecked,
        },
      };
    default:
      return state;
  }
};
//--------------------------------------------------------------------------------------------------

export const ContextProvider: React.FC = ({ children }) => {
  const text =
    "The story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outery revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TitanThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TiThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TiThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves aro845, the wall is      breached by two new types of Titans, named the Colossus TThe story revolves around a boy named Eren Yeager, who lives in the town of Shiganshina, located on the edge of  Wall Maria, the outermost of three circular walls protecting humanity from Titans. In the year 845, the wall is      breached by two new types of Titans, named the Colossus Titan and the Armored Titan. During the incident, Eren   mother is eaten byitan and the Armored Titan. During the incident, Eren   mother is eaten bytan and the Armored Titan. During the incident, Eren   mother is eaten bytan and the Armored Titan. During the incident, Eren   mother is eaten by and the Armored Titan. During the incident, Eren   mother is eaten by";
  const testpattern: PatternObj = {
    eren: { occurence: 1, isChecked: false },
    mikasa: { occurence: 1, isChecked: false },
    armin: { occurence: 1, isChecked: false },
  };
  const [pattern, dispatchPattern] = useReducer(patternReducer, testpattern);
  const [input, dispatchInput] = useReducer(inputReducer, [
    {
      name: "and",
      isAccepted: true,
      pattern: "and",
    },
  ]);
  const pProvider: pContext = {
    state: pattern,
    dispatch: dispatchPattern,
  };
  const iProvider: iContext = {
    state: input,
    dispatch: dispatchInput,
  };
  return (
    <PatternContext.Provider value={pProvider}>
      <InputContext.Provider value={iProvider}>{children}</InputContext.Provider>
    </PatternContext.Provider>
  );
};
