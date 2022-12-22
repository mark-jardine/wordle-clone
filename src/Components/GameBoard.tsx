import { useEffect, useState } from "react";
import TileRow from "./TileRow";

const GameBoard = () =>{
    const [rows, setRows] = useState(
        [
            <TileRow tileArray={[]} selectedRow={true}/>,
            <TileRow tileArray={[]} selectedRow={false}/>,
            <TileRow tileArray={[]} selectedRow={false}/>,
            <TileRow tileArray={[]} selectedRow={false}/>,
            <TileRow tileArray={[]} selectedRow={false}/>
        ]
    );
 
    useEffect(()=>{
    },[rows])

    return ( 
        <div id="game-board">
            {rows}
        </div>
     );
}
 
export default GameBoard;