import { CounterState } from "./counter-types";

export const getValue = (state: CounterState) => state.counter.value;

export const getStep = (state: CounterState) => state.counter.step;
