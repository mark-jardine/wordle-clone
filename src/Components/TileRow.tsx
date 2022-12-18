import { useState, useEffect } from "react";

interface TileRowProps{
    tileArray: string[]
};

function TileRow({tileArray}: TileRowProps) {
    const emptyRow: string[] = ["", "", "", "", ""];
    const [tiles,setTiles] = useState<string[]>(emptyRow);
    

    useEffect(() => {
        setTiles(tileArray);
    }, [tileArray])

    const loadTileArray = () => {
        let tiles = new Array<string>(5);
        if(!tiles){
            //Set tiles as empty 
            tiles = emptyRow;
        }
        else{
            tiles = tileArray;
        }

        setTiles(tileArray)
    }

    const generateTiles = () => {
        let tilesJsx;

        if(tiles === emptyRow){
            tilesJsx = (
                tiles.map((tile)=>{
                    return (
                        <span id="tile"></span>
                    )
                })
            )
        }
        else{
            tilesJsx = (
                tiles.map((tile)=>{
                    return (
                        <span id="tile">{tile}</span>
                    )
                })
            )
        }
        return tilesJsx;
    }

    return ( 
    <div>
        {generateTiles()}
    </div>
     );
}

export default TileRow;