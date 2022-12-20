import './App.css';
import GameBoard from './Components/GameBoard';
import TileRow from './Components/TileRow';
function App() {
  return (
    <div>
      <GameBoard tileRows={[
        <TileRow tileArray={[]}/>,
        <TileRow tileArray={[]}/>,
        <TileRow tileArray={[]}/>,
        <TileRow tileArray={[]}/>,
        <TileRow tileArray={[]}/>
      ]} />
    </div>
  );
}

export default App;
