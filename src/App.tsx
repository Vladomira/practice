import Counter from "./components/Counter";
import Pokemons from "./components/Pokemons/Pokemons";

function App() {
    return (
        <div className="App">
            <div className="card">
                <Counter />
                <Pokemons />
            </div>
        </div>
    );
}

export default App;
