import DeckContentDisplay from "@/components/DeckContentsDisplay";
import { DeckOfCards } from "@/models/DeckOfCards";
import HandOfCardsDisplay, { HandOfCardsVariants } from "@/components/HandOfCardsDisplay";
import StatisticsMenu from "@/components/StatisticsMenu";
import { VisibilityHandOfCards } from "@/models/VisibilityHandOfCards";
import { useBlackjackContext } from "@/hooks/useBlackjackContext";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { HandOfCards } from "@/models/HandOfCards";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useSettingsContext } from "@/hooks/useSettingsContext";
import DecisionPanel from "@/components/DecisionPanel";
import { BlackjackState } from "@/constants/BlackjackStates";
import { checkDealerDraws, checkPlayerVictory, clearCards } from "@/utils/blackjackHelpers";

export default function Blackjack() {
    const { numOfDecks, gameState, setGameState, soft17, victories, setVictories, totalGames, setTotalGames } = useBlackjackContext();
    const { showStatsMenu, showHandSum, showCardsNotSeen } = useSettingsContext();

    const deck = useRef<DeckOfCards>(new DeckOfCards(numOfDecks)).current;
    const dealerHand = useRef<VisibilityHandOfCards>(new VisibilityHandOfCards()).current;
    const playerHand = useRef<HandOfCards>(new HandOfCards()).current;

    useEffect(() => {
        switch (gameState) {
            case BlackjackState.START:
                dealerHand.addCard(deck.drawCard(true), false);
                dealerHand.addCard(deck.drawCard());
                playerHand.addCard(deck.drawCard());
                playerHand.addCard(deck.drawCard());
                setGameState(BlackjackState.PLAYER_TURN);
                break;
            case BlackjackState.PLAYER_HIT:
                playerHand.addCard(deck.drawCard());
                if (playerHand.getHandValue() > 21) {
                    dealerHand.revealAll(true);
                    setGameState(BlackjackState.END);
                } else {
                    setGameState(BlackjackState.PLAYER_TURN);
                }
                break;
            case BlackjackState.CARD_REVEAL:
                deck.countAll();
                dealerHand.revealAll(true);
            // fall through
            case BlackjackState.DEALER_TURN:
                setGameState(checkDealerDraws(dealerHand.getHandValue(), soft17, dealerHand.hasAce()) ? BlackjackState.DEALER_HIT : BlackjackState.END);
                break;
            case BlackjackState.DEALER_HIT:
                dealerHand.addCard(deck.drawCard());
                setGameState(BlackjackState.DEALER_TURN);
                break;
            case BlackjackState.END:
                if (setTotalGames && setVictories) {
                    return () => {
                        setTotalGames(totalGames + 1);

                        if (checkPlayerVictory(playerHand.getHandValue(), dealerHand.getHandValue())) {
                            setVictories(victories + 1);
                        }
                    };
                }
                break;
            case BlackjackState.NEW_ROUND:
                clearCards(dealerHand, playerHand);
                setGameState(BlackjackState.START);
        }
    }, [dealerHand, deck, gameState, playerHand, setGameState, setTotalGames, setVictories, soft17, totalGames, victories]);

    return (
        <View style={styles.container}>
            {showStatsMenu && <StatisticsMenu style={styles.statMenu} />}
            {showCardsNotSeen && <DeckContentDisplay card_count={deck.getCardCount()} style={styles.deckContent} />}
            <HandOfCardsDisplay variant={HandOfCardsVariants.DEALER} hand={dealerHand} />
            <View style={styles.middleContainer}>
                {showHandSum && <ThemedText type="default">Dealer Hand Visible Value: {dealerHand.getVisibleValue()}</ThemedText>}
                <DecisionPanel />
                {showHandSum && <ThemedText type="default">Player Hand Value: {playerHand.getHandValue()}</ThemedText>}
            </View>
            <HandOfCardsDisplay variant={HandOfCardsVariants.PLAYER} hand={playerHand} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: Colors.table.felt,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        rowGap: 10,
    },
    middleContainer: {
        justifyContent: "center",
        alignContent: "center",
        height: 150,
    },
    statMenu: {
        position: "absolute",
        top: 60,
        left: 30,
    },
    deckContent: {
        position: "absolute",
        top: 60,
        right: 30,
    },
});
