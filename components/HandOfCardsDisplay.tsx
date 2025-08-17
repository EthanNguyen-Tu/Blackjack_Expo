import React from "react";
import { HandOfCards } from "@/models/HandOfCards";
import PlayingCard from "@/components/PlayingCard";
import { VisibilityHandOfCards } from "@/models/VisibilityHandOfCards";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export enum HandOfCardsVariants {
    PLAYER = "Player",
    DEALER = "Dealer",
}

interface HandOfCardsProps {
    variant: HandOfCardsVariants;
    hand: HandOfCards | VisibilityHandOfCards;
    style?: StyleProp<ViewStyle>;
}

const cardOverlap = -75;
const centerOffset = cardOverlap / 4;

export default function HandOfCardsDisplay({ variant, hand, style }: HandOfCardsProps) {
    if (hand instanceof VisibilityHandOfCards) {
        let hiddenCards = hand.getHiddenCards();
        let cards = [...hiddenCards, ...hand.getVisibleCards()];
        return (
            <View style={[styles.container, style]}>
                {cards.map((card, idx) => (
                    <PlayingCard
                        card={card}
                        flipped={idx < hiddenCards.length}
                        style={{ left: cardOverlap * idx - centerOffset * cards.length, zIndex: idx }}
                        key={variant + "-hand-card-" + idx}
                    />
                ))}
            </View>
        );
    }
    let cards = hand.getHand();
    return (
        <View style={[styles.container, style]}>
            {cards.map((card, idx) => (
                <PlayingCard card={card} style={{ left: cardOverlap * idx - centerOffset * cards.length, zIndex: idx }} key={variant + "-hand-card-" + idx} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
