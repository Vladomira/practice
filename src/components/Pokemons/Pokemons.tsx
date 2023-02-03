import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImg } from "../../helpers/getPokemonImg";
import { useAppDispatch } from "../../redux/hooks";
import { fetchPokemons, getPokemons } from "../../redux/pokemons";
import { AppDispatch } from "../../redux/store";

export default function Pokemons() {
    // const dispacth = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    const pokemons = useSelector(getPokemons);

    useEffect(() => {
        const res = dispatch(fetchPokemons());
    }, [dispatch]);

    return (
        <ul>
            {pokemons &&
                pokemons.map(({ name, url }) => {
                    return (
                        <li
                            key={name}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            {name}
                            <img
                                src={getImg(url)}
                                style={{ width: "90px", height: "90px" }}
                            />
                        </li>
                    );
                })}
        </ul>
    );
}
