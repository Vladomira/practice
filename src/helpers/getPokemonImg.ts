const sprites =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const getImg = (url: string) => `${sprites}${url.slice(34, -1)}.png`;
