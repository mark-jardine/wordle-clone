import { useEffect, useState } from "react";
import TileRow from "./TileRow";

const GameBoard = () =>{
    const [rows, setRows] = useState(
        [
            <TileRow key="r0" tileArray={[]} selectedRow={true}/>,
            <TileRow key="r1" tileArray={[]} selectedRow={false}/>,
            <TileRow key="r2" tileArray={[]} selectedRow={false}/>,
            <TileRow key="r3" tileArray={[]} selectedRow={false}/>,
            <TileRow key="r4" tileArray={[]} selectedRow={false}/>
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