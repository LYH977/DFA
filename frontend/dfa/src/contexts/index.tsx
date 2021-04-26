import React, { useContext, useState, useReducer } from "react";
import { SET_INPUT, SET_PATTERN, SET_WORD, TOGGLE_PATTERN_ISCHECKED } from "../components/Constant";

export const PatternContext = React.createContext<any>(null);
export const InputContext = React.createContext<any>(null);
export const WordContext = React.createContext<any>(null);
//--------------------------------------------------------------------------------------------------

export interface InputContent {
  name: string;
  isAccepted: boolean;
  pattern: string | null;
  process: string;
  index: number;
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

export const initialInput: InputContent[] = [
  {
    name: `Waiting for text file
     upload...`,
    isAccepted: true,
    pattern: null,
    process: "empty",
    index: 0,
  },
];
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
export interface WordContent {
  index: number | null;
  name: string;
  process: string;
}

interface wAction {
  type: string;
  payload: WordContent;
}

interface wContext {
  state: WordContent;
  dispatch: React.Dispatch<wAction>;
}
const wordReducer = (state: WordContent, action: wAction) => {
  switch (action.type) {
    case SET_WORD:
      return action.payload;
    default:
      return state;
  }
};

export const initialWord: WordContent = {
  name: "-",
  process: "-",
  index: null,
};
//--------------------------------------------------------------------------------------------------

export const ContextProvider: React.FC = ({ children }) => {
  const [word, dispatchWord] = useReducer(wordReducer, initialWord);
  const [pattern, dispatchPattern] = useReducer(patternReducer, {});
  const [input, dispatchInput] = useReducer(inputReducer, initialInput);
  const pProvider: pContext = {
    state: pattern,
    dispatch: dispatchPattern,
  };
  const iProvider: iContext = {
    state: input,
    dispatch: dispatchInput,
  };
  const wProvider: wContext = {
    state: word,
    dispatch: dispatchWord,
  };
  return (
    <PatternContext.Provider value={pProvider}>
      <InputContext.Provider value={iProvider}>
        <WordContext.Provider value={wProvider}>{children}</WordContext.Provider>
      </InputContext.Provider>
    </PatternContext.Provider>
  );
};
