import { useEffect, useState } from "react";

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
            {tileRows}
        </div>    
     );
}
 
export default GameBoard;