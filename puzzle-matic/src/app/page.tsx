'use client';

import GameProvider from "@/components/game/GameProvider";

import Machine from "@/components/machine/Machine";

export default function Home() {
  return (
    <>
      <GameProvider src="/game.json">
        <Machine />
      </GameProvider>
    </>
  );
}
