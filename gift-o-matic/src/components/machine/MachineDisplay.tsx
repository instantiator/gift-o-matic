'use client';

import { useContext } from "react";
import { GameContext } from "../game/GameProvider";

export default function MachineDisplay({}) {
const game = useContext(GameContext);

  return (
    <>
        display
    </>
  );
}
