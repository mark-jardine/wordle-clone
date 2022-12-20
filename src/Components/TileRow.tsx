import { useState, useEffect, ReactNode } from "react";
import { Z_ASCII } from "zlib";
import Tile from './Tile';

type TileRowProps = {
    tileArray?: JSX.Element[]
};

const TileRow = ({tileArray}: TileRowProps) => {
    const [tiles,setTiles] = useState<JSX.Element[]>();
    const [selctedRow, setSelectedRow] = useState(false);
    

    useEffect(() => {
        setTiles([        
        <Tile inputCharacter='' />,
        <Tile inputCharacter='' />,
        <Tile inputCharacter='' />,
        <Tile inputCharacter='' />,
        <Tile inputCharacter='' />
        ]);
    }, [tileArray])

    return ( 
    <div id="tile-row">
        {tiles}
    </div>
     );
}

export default TileRow;