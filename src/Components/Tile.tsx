import * as React from 'react';
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
    <div id="tile">
        [character]
    </div>
    );
}
 
export default Tile;