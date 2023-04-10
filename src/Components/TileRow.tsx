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

    useEffect(() => {
        loadTiles();
    }, [])

    const loadTiles = () =>{
        let tempTiles: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            tempTiles.push(<Tile key={i} tileIndex={i} inputCharacter={''} selectedTileIndex={selectedTileIndex} setTiles={setTiles}/>)
        }
        setTiles(tempTiles);

        //By default, the first row is set as selected
        setSelectedTileIndex(0);
    }

    return (
    <div id="tile-row">
        {tiles}
    </div>
     );
}

export default TileRow;