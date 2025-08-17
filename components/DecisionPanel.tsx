import { StyleSheet, View } from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import { Colors } from "@/constants/Colors";
import { BlackjackState } from "@/constants/BlackjackStates";
import { useBlackjackContext } from "@/hooks/useBlackjackContext";

export default function DecisionPanel() {
    const { gameState, setGameState } = useBlackjackContext();
    const handleStart = () => setGameState(BlackjackState.START);
    const handleHit = () => setGameState(BlackjackState.PLAYER_HIT);
    const handleStand = () => setGameState(BlackjackState.CARD_REVEAL);
    const handleNextGame = () => setGameState(BlackjackState.NEW_ROUND);

    switch (gameState) {
        case BlackjackState.PLAYER_TURN:
            return (
                <View style={styles.container}>
                    <CustomButton key="Button-Hit" text="Hit" onPress={handleHit} style={styles.button} />
                    <CustomButton key="Button-Stand" text="Stand" onPress={handleStand} style={styles.button} />
                </View>
            );
        case BlackjackState.END:
            return (
                <View style={styles.container}>
                    <CustomButton key="Button-NextGame" text="Next Game" onPress={handleNextGame} style={styles.button} />
                </View>
            );
        default:
            return (
                <View style={styles.container}>
                    <CustomButton key="Button-Start" text="Start" onPress={handleStart} style={styles.button} />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 230,
        borderRadius: 10,
        backgroundColor: Colors.ui.background,
        borderWidth: 5,
        borderColor: Colors.ui.border,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 500,
        paddingVertical: 10,
    },
    button: {
        height: 50,
        width: "100%",
        borderRadius: 6,
        backgroundColor: "none",
    },
});
