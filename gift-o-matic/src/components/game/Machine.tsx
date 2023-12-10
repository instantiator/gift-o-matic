import { useContext } from "react";
import { GameContext, GameState } from "./GameProvider";

export default function Machine() {
  const game = useContext(GameContext);

  return (
    <>
        <div style={{ border: 'solid 1px black', backgroundColor: 'white' }}>
            <p>MACHINE: {GameState[game.state]}</p>
        </div>
    </>
  );
}
