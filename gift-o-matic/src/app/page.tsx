"use client";

import GameProvider from "@/components/game/GameProvider";

import Machine from "@/components/game/Machine";

export default function Home() {
  return (
    <>
      <GameProvider src="/game.json">
        <Machine />
      </GameProvider>
    </>
  );
}
