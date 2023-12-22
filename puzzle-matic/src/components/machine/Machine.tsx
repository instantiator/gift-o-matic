"use client";

import { useContext, useEffect, useState } from "react";
import { GameContext } from "../game/GameProvider";
import { Container, Form, Stack } from "react-bootstrap";
import MachineDisplay from "./MachineDisplay";
import MachineControl from "./MachineControl";
import CharacterDisplay from "./CharacterDisplay";
import { GameState, Puzzle } from "../game/GameData";

const PREFIX = process.env.NEXT_PUBLIC_PATH_PREFIX;

export default function Machine() {
  const game = useContext(GameContext);

  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [firstUnsolved, setFirstUnsolved] = useState<number | null>(null);
  const [speech, setSpeech] = useState<string | null>(null);

  useEffect(() => {
    console.log("Resetting active puzzles", game.puzzles);
    setPuzzles([...game.puzzles]);
  }, [game.puzzles]);

  useEffect(() => {
    let unsolved = puzzles.find((puzzle) => !puzzle.solved);
    setFirstUnsolved(!!unsolved ? puzzles.indexOf(unsolved) : null);
    if (puzzles.length > 0 && unsolved === undefined) {
      setSpeech(game.final.speech);
    }
  }, [puzzles]);

  const onSuccess = (index: number, puzzle: Puzzle) => {
    console.log("Solved puzzle", index, puzzle);
    puzzles[index].solved = true;
    setPuzzles([...puzzles]);
    setSpeech("Oh well done!");
  };

  const onFailure = (index: number, puzzle: Puzzle) => {
    console.log("Incorrect solution for puzzle", index, puzzle);
    setSpeech("Oh no, that's not right!");
  };

  return (
    <>
      {game.state === GameState.Ready && (
        <div style={{ width: '90%', paddingTop: 20, paddingBottom: 20 }}>

          <Stack gap={3}>
          {game.character && (
            <CharacterDisplay character={game.character} speech={speech} />
          )}

            <div>
              <img
                src={`${PREFIX}/holly.png`}
                alt="decorative holly"
                style={{ maxWidth: "30%" }}
              />
              <br />
              <div
                style={{
                  border: "solid 2px black",
                  backgroundColor: "#aa3333",
                  padding: 10,
                  borderRadius: 15,
                }}
                className="shadow"
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    color: "#333333",
                  }}
                >
                  <MachineDisplay
                    puzzles={puzzles}
                    final={game.final}
                    firstUnsolved={firstUnsolved}
                    speech={speech}
                  />
                </div>
              </div>
            </div>
              <div
                style={{
                  border: "solid 2px black",
                  backgroundColor: game.puzzles[firstUnsolved ?? 0].colour,
                  padding: 10,
                  borderRadius: 15,
                }}
                className="shadow"
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    color: "#333333",
                  }}
                >
                  {puzzles.map((puzzle, index) => (
                    <MachineControl
                      puzzle={puzzle}
                      key={`puzzle-${puzzle.id}`}
                      index={index}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      firstUnsolved={firstUnsolved}
                    />
                  ))}
                </div>
              </div>
              {/* <div>MACHINE: {GameState[game.state]}</div> */}
          </Stack>
        </div>
      )}
    </>
  );
}
