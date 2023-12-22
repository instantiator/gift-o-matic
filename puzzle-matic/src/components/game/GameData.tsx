
export enum GameState {
    Init,
    Loading,
    Error,
    Ready
};

export interface GameData {
    puzzles: Puzzle[];
    character: Character | null;
    state: GameState;
    final: FinalDetails;
};

export interface Puzzle {
    id: number;
    title: string;
    clue: string;
    hint: string;
    image: string | undefined;
    answer: string;
    colour: string;
    variant: string;
    solved: boolean | undefined;
};

export interface Character {
    name: string;
    image: string;
};

export interface FinalDetails {
    title: string;
    message: string;
    speech: string;
    image: string;
}
