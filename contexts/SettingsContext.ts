import { createContext } from "react";

interface SettingsContextType {
    showStatsMenu: boolean;
    toggleStatsMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showHandSum: boolean;
    toggleHandSum: React.Dispatch<React.SetStateAction<boolean>>;
    showCardsNotSeen: boolean;
    toggleCardsNotSeen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsContext = createContext<SettingsContextType>({
    showStatsMenu: true,
    toggleStatsMenu: () => {},
    showHandSum: true,
    toggleHandSum: () => {},
    showCardsNotSeen: true,
    toggleCardsNotSeen: () => {},
});
