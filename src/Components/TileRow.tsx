import { useState, useEffect } from "react";
import Tile from './Tile';

type TileRowProps = {
    tileArray: JSX.Element[]
    selectedRow: boolean
};

const TileRow = ({tileArray, selectedRow}: TileRowProps) => {
    const [tiles,setTiles] = useState<JSX.Element[]>(
        [
            // Default Row- If this row is selected (the current row being played on by user),
            //              then set the first tile as selected. 
            <Tile inputCharacter='' selectedTile={selectedRow} />,
            <Tile inputCharacter='' selectedTile={false}/>,
            <Tile inputCharacter='' selectedTile={false}/>,
            <Tile inputCharacter='' selectedTile={false}/>,
            <Tile inputCharacter='' selectedTile={false}/>
        ]
    ); 
    
    // useEffect(() => {
    //     setTiles([
    //     <Tile inputCharacter='' selectedTile={false} />,
    //     <Tile inputCharacter='' selectedTile={false}/>,
    //     <Tile inputCharacter='' selectedTile={false}/>,
    //     <Tile inputCharacter='' selectedTile={false}/>,
    //     <Tile inputCharacter='' selectedTile={false}/>
    //     ]);
    // }, [tileArray])

    return ( 
    <div id="tile-row">
        {tiles}
    </div>
     );
}

export default TileRow;