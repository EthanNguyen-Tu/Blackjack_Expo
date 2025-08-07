import { createContext } from "react";

interface BlackjackContextType {
    numOfDecks: number;
    setNumOfDecks: React.Dispatch<React.SetStateAction<number>>;
    soft17: boolean;
    setSoft17: React.Dispatch<React.SetStateAction<boolean>>;
    totalGames: number;
    setTotalGames: React.Dispatch<React.SetStateAction<number>>;
    victories: number;
    setVictories: React.Dispatch<React.SetStateAction<number>>;
}

export const BlackjackContext = createContext<BlackjackContextType>({
    numOfDecks: 1,
    setNumOfDecks: () => {},
    soft17: false,
    setSoft17: () => {},
    totalGames: 0,
    setTotalGames: () => {},
    victories: 0,
    setVictories: () => {},
});
