import { createContext } from 'react';

export const defaultGraphState = {
  nodes: [],
  edges: [],
};

export const GraphContext = createContext(defaultGraphState);
