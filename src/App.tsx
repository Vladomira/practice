import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Pokemons from "./components/Pokemons/Pokemons";
import { Todos } from "./components/Todos";
import ErrorPage from "./components/ErrorPage";
import { Layout } from "./components/Layouts/Layout";
import TodoPage from "./components/Todos/Todo";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Counter />} />
               <Route path="todos" element={<Todos />} />
               <Route path="todos/:id" element={<TodoPage />} />
               <Route path="pokemons" element={<Pokemons />} />

               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
