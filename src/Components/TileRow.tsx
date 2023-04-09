import { useEffect, useState } from "react";
import Tile from './Tile';

type TileRowProps = {
    tileArray: JSX.Element[]
    selectedRowIndex: number
    setSelectedRowIndex: React.Dispatch<React.SetStateAction<number>>
    rowIndex: number
    setRows: any
};

const TileRow = ({tileArray, selectedRowIndex, setSelectedRowIndex, rowIndex, setRows}: TileRowProps) => {
    const [tiles, setTiles] = useState<JSX.Element[]>([]);
    //Tile currently selected by User
    const [selectedTileIndex, setSelectedTileIndex] = useState<number>(0);

    useEffect(()=> {
        console.log(tiles);
    }, [tiles])

    useEffect(() => {
        let tiles: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            tiles.push(<Tile tileIndex={i} inputCharacter={''} selectedTileIndex={selectedTileIndex} setTiles={setTiles}/>)
        }
        //By default, the first row is set as selected
        tiles[0].props.selectedTile = true;

        setTiles(tiles);
    })

    return (
    <div id="tile-row">
        {tiles}
    </div>
     );
}

export default TileRow;