import { useState, useEffect } from "react";

type TileProps = {
    selectedTileIndex: number;
    setSelectedTileIndex: React.Dispatch<React.SetStateAction<number>>;
    setTiles: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
    tileIndex: number;

    //inSelectedRow = true when the row that the Tile is in, is selected
    inSelectedRow: boolean;
};

const Tile = ({
    selectedTileIndex,
    setSelectedTileIndex,
    setTiles,
    tileIndex,
    inSelectedRow,
}: TileProps) => {
    //The character to be displayed
    const [character, setCharacter] = useState<string>("");

    useEffect(() => {
        //Allow user to input a character if this Tile and this Tile's TileRow
        // is currently selected
        if (selectedTileIndex === tileIndex && inSelectedRow) {
            window.addEventListener("keydown", (e) => handleKeyDown(e));

            // window.removeEventListener('keydown', handleKeyDown);
        }
    }, [selectedTileIndex]);

    useEffect(() => {
        if (character) {
            //If final tile in row, stay on tile until ENTER

            //Else If there is a tile on the right to move to
            if (selectedTileIndex < 4) {
                //Move to next Tile
                setSelectedTileIndex(selectedTileIndex + 1);
            }
        }
    }, [character]);

    const handleKeyDown = (e: KeyboardEvent): void => {
        console.log(e.key);
        const key = e.key;

        //If key is a single letter
        if (key.match("\\w") && key.length === 1) {
            //Set tile's character to the uppercase version of that key
            setCharacter(key.toUpperCase());
        }
        //If user pressed backspace
        else if (key === "Backspace") {
            //If there is a character- set to empty string
            if (character) {
                setCharacter("");
            }
            //Otherwise, move to the previous tile in the selected tilerow
            else {
            }
        }
    };

    return (
        <span
            id="tile"
            className={selectedTileIndex === tileIndex ? "selected" : ""}
        >
            <input
                style={{ display: "none" }}
                onInput={(e) => console.log(e)}
            ></input>
            {character}
        </span>
    );
};

export default Tile;
