export interface PokemonAction {
    type: string;
    payload: [];
}

export type PokemonsType = {
    name: string;
    url: string;
};
export interface PokemonState {
    pokemons: {
        entities: PokemonsType[];
        isLoading: boolean;
        error: null | string;
    };
}
