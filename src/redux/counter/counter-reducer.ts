import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, changeStep } from "./counter-actions";
import { CounterAction, CounterState } from "./counter-types";

const valueReducer = createReducer(0, (builder) =>
   builder
      .addCase(increment, (value, { payload }) => {
         if (payload) return (value += payload);
         else if (!payload) return (value += 1);
      })
      .addCase(decrement, (value, { payload }) => {
         if (value > 0 && payload) return (value -= payload);
         if (value > 0 && !payload) return (value -= 1);
         else if (value === 0) return value;
      })
);

const stepReducer = createReducer(1, (builder) => {
   builder.addCase(changeStep, (value, { payload }) => {
      if (payload) return payload;
      else if (!payload) return 1;
   });
});
export const counterReducer = combineReducers({
   value: valueReducer,
   step: stepReducer,
});
export type RootState = ReturnType<typeof counterReducer>;

// https://redux-toolkit.js.org/api/createReducer
// const valueReducer = createReducer(0, {
//     [increment]: (value: number, action: CounterAction) =>
//         value + action.payload,
//     [decrement]: (value: number, action: CounterAction) =>
//         value - action.payload,
// });
// const stepReducer = (step = 1) => step;
