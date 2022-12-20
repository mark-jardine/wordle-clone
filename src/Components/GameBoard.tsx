import { ReactNode, useEffect, useState } from "react";
import Tile from "./Tile";
import TileRow from "./TileRow";

type GameBoardProps = {
    tileRows : JSX.Element[] 
};

const GameBoard = ({tileRows}: GameBoardProps) =>{
    const [rows, setRows] = useState();
 
    useEffect(()=>{

    }, [])

    const loadRows = () => {
    }

    return ( 
        <div id="game-board" onLoad={loadRows}>
            <TileRow tileArray={[
                <Tile inputCharacter="" />
            ]}/>
        </div>    
     );
}
 
export default GameBoard;