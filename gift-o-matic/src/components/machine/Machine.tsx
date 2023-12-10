"use client";

import { useContext, useEffect, useState } from "react";
import { GameContext, GameState, Puzzle } from "../game/GameProvider";
import { Container, Form, Stack } from "react-bootstrap";
import MachineDisplay from "./MachineDisplay";
import MachineControl from "./MachineControl";

export default function Machine() {
  const game = useContext(GameContext);

  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);

  useEffect(() => {
    setPuzzles([...game.puzzles]);
  }, [game.puzzles]);

  const onSuccess = (index: number, puzzle: Puzzle) => {
    puzzles[index].solved = true;
    setPuzzles([...puzzles]);
  };

  const onFailure = (index: number) => {};

  const firstUnsolved = () => {
    let unsolved = puzzles.find((puzzle) => !puzzle.solved);
    return !!unsolved ? puzzles.indexOf(unsolved) : null;
  };

  return (
    <>
      {game.state === GameState.Ready && (
        <>
          <Stack gap={3} style={{ position: "fixed", bottom: "20px", width: "90%" }}>
            <div
              style={{ border: "solid 2px black", backgroundColor: "#efefef" }}
              className="shadow"
            >
              <MachineDisplay />
            </div>
            <div
              style={{ border: "solid 2px black", backgroundColor: "#efefef" }}
              className="shadow"
            >
              {/* {firstUnsolved() !== null &&
                <MachineControl
                  puzzle={puzzles[firstUnsolved()!]}
                  index={firstUnsolved()!}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                />} */}

              {puzzles.map((puzzle, index) => (
                <MachineControl
                  puzzle={puzzle}
                  index={index}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  firstUnsolved={firstUnsolved()}
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
