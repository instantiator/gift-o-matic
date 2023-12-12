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
      {firstUnsolved !== null && (
        <>
          <div style={{ padding: 5 }}>
            <h2>{puzzles[firstUnsolved].title}</h2>
            <p>{puzzles[firstUnsolved].clue}</p>
          </div>
        </>
      )}
    </>
  );
}
