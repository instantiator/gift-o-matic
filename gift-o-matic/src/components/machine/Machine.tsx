"use client";

import { useContext, useEffect, useState } from "react";
import { GameContext, GameState, Puzzle } from "../game/GameProvider";
import { Container, Form, Stack } from "react-bootstrap";
import MachineDisplay from "./MachineDisplay";
import MachineControl from "./MachineControl";

export default function Machine() {
  const game = useContext(GameContext);

  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
  const [firstUnsolved, setFirstUnsolved] = useState<number | null>(null);
  const [speech, setSpeech] = useState<string | null>(null);

  useEffect(() => {
    console.log('Resetting active puzzles', game.puzzles);
    setPuzzles([...game.puzzles]);
  }, [game.puzzles]);

  useEffect(() => {
    let unsolved = puzzles.find((puzzle) => !puzzle.solved);
    setFirstUnsolved(!!unsolved ? puzzles.indexOf(unsolved) : null);
    if (puzzles.length > 0 && unsolved === undefined) {
      setSpeech("Well done, you've solved all the puzzles!");
    }
  }, [puzzles]);

  const onSuccess = (index: number, puzzle: Puzzle) => {
    puzzles[index].solved = true;
    setPuzzles([...puzzles]);
    setSpeech("Oh well done!");
  };

  const onFailure = (index: number) => {
    setSpeech("Oh no, that's not right!");
  };

  return (
    <>
      {game.state === GameState.Ready && (
        <>
          <Stack
            gap={3}
            style={{ position: "fixed", bottom: "20px", width: "90%" }}
          >
            <div
              style={{ border: "solid 2px black", backgroundColor: "#efefef" }}
              className="shadow"
            >
              <MachineDisplay puzzles={puzzles} firstUnsolved={firstUnsolved} speech={speech} />
            </div>
            <div
              style={{ border: "solid 2px black", backgroundColor: "#efefef" }}
              className="shadow"
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
              {/* <div>MACHINE: {GameState[game.state]}</div> */}
            </div>
          </Stack>
        </>
      )}
    </>
  );
}
