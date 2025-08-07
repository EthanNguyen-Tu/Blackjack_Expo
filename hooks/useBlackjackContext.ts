import { BlackjackContext } from "@/contexts/BlackjackContext";
import { useContext } from "react";

export const useBlackjackContext = () => {
    const context = useContext(BlackjackContext);
    if (!context) {
        throw new Error("useBlackjackContext must be used within a BlackjackProvider");
    }
    return context;
};
