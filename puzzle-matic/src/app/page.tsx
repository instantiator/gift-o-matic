'use client';

import GameProvider from "@/components/game/GameProvider";

import Machine from "@/components/machine/Machine";

const PREFIX = process.env.NEXT_PUBLIC_PATH_PREFIX;

export default function Home() {
  return (
    <>
      <GameProvider src={`${PREFIX}/game.json`}>
        <Machine />
      </GameProvider>
    </>
  );
}
