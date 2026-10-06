import "./App.css";
import { MovieList } from "./components/Homepage";
import { MovieModel } from "./components/MovieModel";
import { Header } from "./header/Header";
function App() {
  return (
    <div className="App bg-black">
      <Header />
      <MovieList />
      <MovieModel />
    </div>
  );
}

export default App;