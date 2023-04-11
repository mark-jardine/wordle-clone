import { useEffect, useState } from "react";
import Tile from './Tile';

type TileRowProps = {
    selectedRowIndex: number
    setSelectedRowIndex: React.Dispatch<React.SetStateAction<number>>
    rowIndex: number
    setRows: any
};

const TileRow = ({ selectedRowIndex, setSelectedRowIndex, rowIndex, setRows}: TileRowProps) => {
    const [tiles, setTiles] = useState<JSX.Element[]>([]);
    //Tile currently selected by User
    const [selectedTileIndex, setSelectedTileIndex] = useState<number>(0); //By default, the first row is set as selected

    useEffect(() => {
        createTiles();
    }, [])

    const createTiles = () =>{
        let tempTiles: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            tempTiles.push(
                <Tile key={crypto.randomUUID()} tileIndex={i} selectedTileIndex={selectedTileIndex}
                    setSelectedTileIndex={setSelectedTileIndex} setTiles={setTiles} inSelectedRow={selectedRowIndex==rowIndex}
                />
             )
        }
        setTiles(tempTiles);
    }

    const loadTiles = () =>{
        let tempTiles: JSX.Element[] = [];
        for (let i = 0; i < 5; i++) {
            tempTiles.push(
                <Tile tileIndex={i} selectedTileIndex={selectedTileIndex}
                    setSelectedTileIndex={setSelectedTileIndex} setTiles={setTiles} inSelectedRow={selectedRowIndex==rowIndex}
                />
             )
        }

        setTiles(tempTiles);
    }

    useEffect( ()=>{
        loadTiles();
    }, [selectedTileIndex])

    return (
    <div id="tile-row" className={selectedRowIndex===rowIndex? "selected":""}>
        {tiles}
    </div>
     );
}

export default TileRow;