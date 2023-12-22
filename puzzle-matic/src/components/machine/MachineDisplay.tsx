"use client";

import { FinalDetails, Puzzle } from "../game/GameData";

export default function MachineDisplay({
  puzzles,
  final,
  firstUnsolved,
  speech,
}: {
  puzzles: Puzzle[];
  final: FinalDetails;
  firstUnsolved: number | null;
  speech: string | null;
}) {
  return (
    <>
      {firstUnsolved !== null && (
        <>
          <div style={{ padding: 5 }}>
            <h2>{puzzles[firstUnsolved].title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: puzzles[firstUnsolved].clue }}
            />
            <p>
              <img
                src={puzzles[firstUnsolved].image}
                alt={puzzles[firstUnsolved].title}
                style={{ width: "100%", height: "auto" }}
              />
            </p>
          </div>
        </>
      )}
      {firstUnsolved === null && (
        <>
          <div style={{ padding: 5 }}>
            <h2>{final.title}</h2>
            <p>{final.message}</p>
            <img
                src={final.image}
                alt={final.title}
                style={{ width: "100%", height: "auto" }}
              />
          </div>
        </>
      )}
    </>
  );
}
