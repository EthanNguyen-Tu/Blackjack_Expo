import { BlackjackContext } from "@/contexts/BlackjackContext";
import React, { useState } from "react";

type BlackjackContextProviderProps = {
    children: React.ReactNode;
};

export const BlackjackProvider = ({ children }: BlackjackContextProviderProps) => {
    const [numOfDecks, setNumOfDecks] = useState<number>(1);
    const [soft17, setSoft17] = useState<boolean>(false);
    const [totalGames, setTotalGames] = useState<number>(0);
    const [victories, setVictories] = useState<number>(0);

    return (
        <BlackjackContext.Provider value={{ numOfDecks, setNumOfDecks, soft17, setSoft17, totalGames, setTotalGames, victories, setVictories }}>
            {children}
        </BlackjackContext.Provider>
    );
};
