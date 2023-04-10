import { useState, useEffect } from 'react';

type TileProps = {
    inputCharacter: string
    selectedTileIndex: number
    setTiles: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    tileIndex: number
};

const Tile = ( {inputCharacter, selectedTileIndex, setTiles, tileIndex}: TileProps ) => {
    //The character to be displayed
    const [character, setCharacter] = useState<string>(inputCharacter? inputCharacter: "");

    useEffect(()=> {
        //Allow user to input a character if this tile is currently selected
        if(selectedTileIndex === tileIndex) {
            window.addEventListener('keydown', e => {
                console.log(e.key);
                const key = e.key;
                
                //If key is a single letter
                if(key.match("\\w") && key.length === 1){
                    //Set tile's character to the uppercase version of that key
                    setCharacter(key.toUpperCase());
                    
                }
                //If user pressed backspace
                else if(key === "Backspace"){
                    //If there is a character- set to empty string
                    if(character){
                        setCharacter("");
                    }
                    //Otherwise, move to the previous tile in the selected tilerow
                    else{
                        
                    }
                }
            });
        }
    }, [selectedTileIndex])

    useEffect(() => {
        if(character){
            //If final tile in row, stay on tile until ENTER
            //Else
                //Move to next tile
        }
    }, [character])

    return (
    <span id="tile" className={selectedTileIndex===tileIndex? "selected":""}>
        <input style={{"display": "none"}} onInput={e => console.log(e)}></input>
        {character}
    </span>
    );
}
 
export default Tile;