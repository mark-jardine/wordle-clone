import { useEffect, useState } from "react";
import TileRow from "./TileRow";

const GameBoard = () =>{
    const [rows, setRows] = useState<JSX.Element[]>([])
    //By default, the first row is set as selected
    const [selectedRowIndex, setSelectedRowIndex] = useState<number>(0);
 
    useEffect(()=>{
    },[rows])

    useEffect(() => {
        //Set default TileRows
        let rows: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            rows.push(<TileRow rowIndex={i} tileArray={[]} selectedRowIndex={selectedRowIndex} setSelectedRowIndex={setSelectedRowIndex} setRows={setRows}/>)
        }
        setRows(rows);
    })

    return (
        <div id="game-board">
            {rows}
        </div>
     );
}
 
export default GameBoard;