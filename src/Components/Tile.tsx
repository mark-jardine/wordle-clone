import * as React from 'react';
import { useState, useEffect } from 'react';

interface LetterBoxProps{
    inputCharacter: string
};

function Tile({inputCharacter}:LetterBoxProps){
    //The character to be displayed
    const [character, setCharacter] = useState<string | null>(null);

    useEffect(() => {
        setCharacter(inputCharacter);
    }, [inputCharacter])

    return (
    <div>
        [character]
    </div>
    );
}
 
export default Tile;