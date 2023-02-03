import axios from "axios";

axios.defaults.baseURL = " https://pokeapi.co/api/v2/";

export async function fetchPokemonsAPI() {
    const { data } = await axios.get("pokemon?offset=1&limit=10");

    return data.results;
}
export async function fetchPokemonByIdAPI(pokemonId: number) {
    const { data } = await axios.get(`pokemon?/${pokemonId}`);

    return data;
}
