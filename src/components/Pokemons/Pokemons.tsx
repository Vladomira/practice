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
      <div style={{ margin: "40px 0px 0px " }}>
         <ul
            style={{
               display: "flex",
               justifyContent: "center",
               flexWrap: "wrap",
               marginLeft: "-30px ",
               marginTop: "-30px",
            }}
         >
            {pokemons &&
               pokemons.map(({ name, url }) => {
                  return (
                     <li
                        key={name}
                        style={{
                           display: "flex",
                           maxWidth: "150px",
                           height: "150px",
                           flexBasis: "calc(100% /2 - 30px)",
                           marginLeft: "30px ",
                           marginTop: "30px",
                           flexDirection: "column",
                           alignItems: "center",
                        }}
                     >
                        {name}
                        <img
                           src={getImg(url)}
                           style={{ width: "130px", height: "130px" }}
                        />
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
