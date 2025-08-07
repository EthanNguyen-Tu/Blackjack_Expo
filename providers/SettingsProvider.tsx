import { SettingsContext } from "@/contexts/SettingsContext";
import React, { useState } from "react";

type SettingsProviderProps = {
    children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
    const [showStatsMenu, setShowStatsMenu] = useState(true);
    const toggleStatsMenu = () => setShowStatsMenu((prev) => !prev);
    const [showHandSum, setShowHandSum] = useState(true);
    const toggleHandSum = () => setShowHandSum((prev) => !prev);
    const [showCardsNotSeen, setShowCardsNotSeen] = useState(true);
    const toggleCardsNotSeen = () => setShowCardsNotSeen((prev) => !prev);

    return (
        <SettingsContext.Provider
            value={{
                showStatsMenu,
                toggleStatsMenu,
                showHandSum,
                toggleHandSum,
                showCardsNotSeen,
                toggleCardsNotSeen,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};
