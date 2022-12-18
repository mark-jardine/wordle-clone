import { useState } from "react";
import TileRow from "./TileRow";

function GameBoard () {
    const [tileRows, setTileRows] = useState<typeof TileRow[]>([]);

    const loadRows = () => {
        setTileRows(
            [

            ]
        )
    }

    return ( 
        <div onLoad={loadRows}>
                <TileRow tileArray={["a", "b", "c", "d", "e"]}/>
                <TileRow tileArray={["a", "b", "c", "d", "e"]}/>
                <TileRow tileArray={["a", "b", "c", "d", "e"]}/>
                <TileRow tileArray={["a", "b", "c", "d", "e"]}/>
                <TileRow tileArray={["a", "b", "c", "d", "e"]}/>
        </div>    
     );
}
 
export default GameBoard;