import { createAction } from "@reduxjs/toolkit";

export const increment = createAction<number>("counter/Incremen");
export const decrement = createAction<number>("counter/Decremen");
export const changeStep = createAction<number>("counter/ChangeStep");
