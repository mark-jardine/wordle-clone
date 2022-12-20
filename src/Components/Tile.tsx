import { useState, useEffect } from 'react';

type TileProps = {
    inputCharacter: string
};

const Tile = ( {inputCharacter}: TileProps ) => {
    //The character to be displayed
    const [character, setCharacter] = useState<string | null>(null);
    //Is the current tile in operation
    const [selectedTile, setSelectedTile] = useState(false);

    useEffect(() => {
        setCharacter(inputCharacter);
    }, [inputCharacter])

    return (
    <span id="tile">
        {character}
    </span>
    );
}
 
export default Tile;