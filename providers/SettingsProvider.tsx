import { SettingsContext } from "@/contexts/SettingsContext";
import React, { useState } from "react";

type SettingsProviderProps = {
    children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
    const [showStatsMenu, setShowStatsMenu] = useState<boolean>(true);
    const [showHandSum, setShowHandSum] = useState<boolean>(true);
    const [showCardsNotSeen, setShowCardsNotSeen] = useState<boolean>(true);

    return (
        <SettingsContext.Provider
            value={{
                showStatsMenu,
                setShowStatsMenu,
                showHandSum,
                setShowHandSum,
                showCardsNotSeen,
                setShowCardsNotSeen,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};
