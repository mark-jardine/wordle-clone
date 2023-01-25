import { useState, useEffect } from 'react';

type TileProps = {
    inputCharacter: string
    selectedTile: boolean
    setTiles: React.Dispatch<React.SetStateAction<JSX.Element[]>>
};

const Tile = ( {inputCharacter, selectedTile, setTiles}: TileProps ) => {
    //The character to be displayed
    const [character, setCharacter] = useState<string>(inputCharacter? inputCharacter: "");

    useEffect(()=> {
        //Allow user to input a character if this tile is currently selected
        if(selectedTile === true) {
            window.addEventListener('keydown', e => {
                console.log(e);
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
    }, [])

    useEffect(() => {
        if(character){
            //If final tile in row, stay on tile until ENTER
            //Else
                //Move to next tile
        }
    }, [character])

    return (
    <span id="tile" className={selectedTile? "selected":""}>
        <input style={{"display": "none"}} onInput={e => console.log(e)}></input>
        {character}
    </span>
    );
}
 
export default Tile;