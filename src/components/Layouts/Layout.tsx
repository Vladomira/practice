import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
   return (
      <>
         <header
            style={{
               paddingBottom: "30px",
               paddingTop: "30px",
               display: "flex",
               justifyContent: "center",
               background: "darkslategrey",
            }}
         >
            <CustomLink to="/">Counter/home</CustomLink>

            <CustomLink to="/pokemons">Pokemons</CustomLink>
            <CustomLink to="/todos">Todos</CustomLink>
         </header>
         <main
            style={{
               display: "flex",
               justifyContent: "center",
               flexDirection: "column",
               padding: "0px 16px",
            }}
         >
            <Outlet />
         </main>
         <footer style={{ margin: "50px 30px" }}>2023</footer>
      </>
   );
};
