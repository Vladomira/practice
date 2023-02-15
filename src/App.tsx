import Counter from "./components/Counter";
import Pokemons from "./components/Pokemons/Pokemons";
import { Todos } from "./components/Todos";

function App() {
    return (
        <div className="App">
            <div className="card">
                <Todos />
                {/* <Counter /> */}
                {/* <Pokemons /> */}
            </div>
        </div>
    );
}

export default App;
