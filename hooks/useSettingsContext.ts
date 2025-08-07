import { SettingsContext } from "@/contexts/SettingsContext";
import { useContext } from "react";

export const useSettingsContext = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettingsContext must be used within SettingsProvider");
    }
    return context;
};
