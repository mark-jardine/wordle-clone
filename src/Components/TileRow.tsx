import { useEffect, useState } from "react";
import Tile from './Tile';

type TileRowProps = {
    tileArray: JSX.Element[]
    selectedRow: boolean
};

const TileRow = ({tileArray, selectedRow}: TileRowProps) => {
    const [tiles,setTiles] = useState<JSX.Element[]>([]);

    useEffect(()=> {
        console.log(tiles);
    }, [tiles])

    useEffect(() => {
        setTiles(
            [
                // Default Row- If this row is selected (the current row being played on by user),
                //              then set the first tile as selected.
                <Tile key="t0" inputCharacter='' selectedTile={selectedRow} setTiles={setTiles} />,
                <Tile key="t1" inputCharacter='' selectedTile={false} setTiles={setTiles} />,
                <Tile key="t2" inputCharacter='' selectedTile={false} setTiles={setTiles} />,
                <Tile key="t3" inputCharacter='' selectedTile={false} setTiles={setTiles} />,
                <Tile key="t4" inputCharacter='' selectedTile={false} setTiles={setTiles} />
            ]
        )
    }, [])

    return (
    <div id="tile-row">
        {tiles}
    </div>
     );
}

export default TileRow;