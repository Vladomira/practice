import { PokemonState } from "./pokemons-types";

export const getPokemons = (state: PokemonState) => state.pokemons.entities;
