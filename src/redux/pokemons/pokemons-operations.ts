import { createAsyncThunk } from "@reduxjs/toolkit";
import * as pokemonsApi from "../../api/pokemons-api";

export const fetchPokemons = createAsyncThunk(
    "pokemons/fetchPokemons",
    async (_, { rejectWithValue }) => {
        try {
            const pokemons = await pokemonsApi.fetchPokemonsAPI();

            return pokemons;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// without Toolkit
// export const fetchPokemons =
//     () =>
//     async (
//         dispatch: (arg0: {
//             payload: undefined;
//             type:
//                 | "pokemons/fetchPkmnsSuccess"
//                 | "pokemons/fetchPkmnsRequest"
//                 | "pokemons/fetchPkmnsError";
//         }) => void
//     ) => {
//         dispatch(pokemonsActions.fetchPkmnsRequest());

// try {
//     const pokemons = await pokemonsApi.fetchPokemonsAPI();

//     dispatch(pokemonsActions.fetchPkmnsSuccess(pokemons));
// } catch (error: any) {
//     dispatch(pokemonsActions.fetchPkmnsError(error));
// }
//     };
