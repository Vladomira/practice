import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import { PokemonAction } from "./pokemons-types";
import { fetchPokemons } from "./pokemons-operations";
import { PokemonsType, PokemonState } from "./pokemons-types";

// const entities = createReducer([], {
//     [fetchPokemons.fulfilled]: (_, action: PokemonAction) => action.payload,
// });

// const isLoading = createReducer(false, {
//     [fetchPokemons.pending]: () => true,
//     [fetchPokemons.fulfilled]: () => false,
//     [fetchPokemons.rejected]: () => false,
// });

// const error = createReducer(null, {
//     [fetchPokemons.rejected]: (_, { payload }: PokemonAction) => payload,
//     [fetchPokemons.pending]: () => null,
// });

// const pokemonsReducer = combineReducers({
//     entities,
//     isLoading,
//     error,
// });
// export default pokemonsReducer;

// ****Redux ToolKit
const initialState: PokemonState = {
    pokemons: { entities: [], isLoading: false, error: null },
};

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPokemons.fulfilled,
                (state, action: PokemonAction) => {
                    return {
                        ...state,
                        entities: action.payload,
                        isLoading: false,
                    };
                }
            )
            .addCase(fetchPokemons.pending, (state, action) => {
                return {
                    ...state,
                    isLoading: true,
                };
            })
            .addCase(fetchPokemons.rejected, (state, action) => ({
                ...state,
                error: action.payload,
                isLoading: false,
            }))

            .addDefaultCase((state, action) => ({ ...state }));
    },

    // ***
    // without TS but works:
    // extraReducers: {
    //     [fetchPokemons.fulfilled]: (
    //         state: PokemonState,
    //         action: PokemonAction
    //     ) => {
    //         return {
    //             ...state,
    //             entities: action.payload,
    //         };
    //     },

    //     [fetchPokemons.pending]: (
    //         state: PokemonState,
    //         action: PokemonAction
    //     ) => ({ ...state, isLoading: true }),

    //     [fetchPokemons.rejected]: (
    //         state: PokemonState,
    //         { payload }: PokemonAction
    //     ) => ({ ...state, error: payload }),
    // },
});

export default pokemonsSlice.reducer;
