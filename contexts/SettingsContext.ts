import { createContext } from "react";

interface SettingsContextType {
    showStatsMenu: boolean;
    setShowStatsMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showHandSum: boolean;
    setShowHandSum: React.Dispatch<React.SetStateAction<boolean>>;
    showCardsNotSeen: boolean;
    setShowCardsNotSeen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = createContext<SettingsContextType>({
    showStatsMenu: true,
    setShowStatsMenu: () => {},
    showHandSum: true,
    setShowHandSum: () => {},
    showCardsNotSeen: true,
    setShowCardsNotSeen: () => {},
});
