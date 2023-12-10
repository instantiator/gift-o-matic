"use client";

import { Puzzle } from "../game/GameProvider";

export default function MachineDisplay({
  puzzles,
  firstUnsolved,
  speech,
}: {
  puzzles: Puzzle[];
  firstUnsolved: number | null;
  speech: string | null;
}) {
  return (
    <>
      {!!speech && (
        <>
          <h2>{speech}</h2>
        </>
      )}
      {firstUnsolved !== null && (
        <>
          <h2>{puzzles[firstUnsolved].title}</h2>
          <p>{puzzles[firstUnsolved].clue}</p>
        </>
      )}
    </>
  );
}
