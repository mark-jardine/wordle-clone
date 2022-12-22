import { useState, useEffect } from 'react';

type TileProps = {
    inputCharacter: string
    selectedTile: boolean
};

const Tile = ( {inputCharacter, selectedTile}: TileProps ) => {
    //The character to be displayed
    const [character, setCharacter] = useState<string | null>(null);

    useEffect(() => {
        setCharacter(inputCharacter);
    }, [inputCharacter])

    return (
    <span id="tile" className={selectedTile? "selected":""}>
        {character}
    </span>
    );
}
 
export default Tile;