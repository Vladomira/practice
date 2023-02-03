import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter-reducer";
import pokemonsReducer from "./pokemons/pokemons-reducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer,
    },
    // middleware,
    devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
