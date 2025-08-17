import { Colors } from "@/constants/Colors";
import React from "react";
import { Dimensions, Platform, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

const { width } = Dimensions.get("window");

const isSmallScreen = width <= 600;

const CARD_WIDTH = isSmallScreen ? 100 : 150;
const BORDER_WIDTH = isSmallScreen ? 3 : 5;
const TEXT_FONT_SIZE = isSmallScreen ? 20 : 30;
const SYMBOL_FONT_SIZE = isSmallScreen ? 80 : 100;

type Suit = "h" | "d" | "c" | "s";
export const suits: Record<Suit, { icon: string; color: string }> = {
    h: { icon: "\u2665", color: Colors.card.hearts },
    d: { icon: "\u2666", color: Colors.card.diamonds },
    c: { icon: "\u2663", color: Colors.card.clubs },
    s: { icon: "\u2660", color: Colors.card.spades },
};
function isValidSuit(s: string): s is keyof typeof suits {
    return s in suits;
}

export const CardRoyalty = "KQJ";

export const cards = [
    "As",
    "Ks",
    "Qs",
    "Js",
    "10s",
    "9s",
    "8s",
    "7s",
    "6s",
    "5s",
    "4s",
    "3s",
    "2s",
    "Ah",
    "Kh",
    "Qh",
    "Jh",
    "10h",
    "9h",
    "8h",
    "7h",
    "6h",
    "5h",
    "4h",
    "3h",
    "2h",
    "Ac",
    "Kc",
    "Qc",
    "Jc",
    "10c",
    "9c",
    "8c",
    "7c",
    "6c",
    "5c",
    "4c",
    "3c",
    "2c",
    "Ad",
    "Kd",
    "Qd",
    "Jd",
    "10d",
    "9d",
    "8d",
    "7d",
    "6d",
    "5d",
    "4d",
    "3d",
    "2d",
];

type PlayCardProps = {
    card: string;
    flipped?: boolean;
    style?: StyleProp<ViewStyle>;
};

export default function PlayingCard({ card, flipped = false, style = {} }: PlayCardProps) {
    const cardSuit: string = card[card.length - 1];

    if (!isValidSuit(cardSuit)) {
        return;
    }

    const cardValue: string = card.substring(0, card.length - 1);
    const cardStyle: { icon: string; color: string } = suits[cardSuit];

    if (flipped) {
        return (
            <View style={[styles.card, style]}>
                <View style={styles.back} />
            </View>
        );
    }

    return (
        <View style={[styles.card, style]}>
            <View style={styles.top}>
                <Text style={[styles.text, { color: cardStyle.color }]}>{cardValue}</Text>
                <Text style={[styles.cornerSymbol, { color: cardStyle.color }]}>{cardStyle.icon}</Text>
            </View>
            <View style={styles.center}>
                <Text style={[styles.symbol, { color: cardStyle.color }]}>{cardStyle.icon}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={[styles.text, { color: cardStyle.color }]}>{cardValue}</Text>
                <Text style={[styles.cornerSymbol, { color: cardStyle.color }]}>{cardStyle.icon}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 5 / 7,
        width: CARD_WIDTH,
        backgroundColor: Colors.card.face,
        borderColor: Colors.card.border,
        borderWidth: BORDER_WIDTH,
        borderRadius: 10,
        fontFamily: Platform.OS === "ios" ? "Arial" : "sans-serif",
        position: "relative",
    },
    back: {
        width: "80%",
        height: "85%",
        borderRadius: 10,
        backgroundColor: Colors.card.back,
    },
    top: {
        position: "absolute",
        top: "5%",
        left: "5%",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
        lineHeight: 0.8,
    },
    center: {
        position: "absolute",
        top: "15%",
        left: "15%",
        width: "70%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    bottom: {
        position: "absolute",
        bottom: "5%",
        right: "5%",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
        lineHeight: 0.8,
        transform: [{ rotate: "180deg" }],
    },
    text: {
        fontSize: TEXT_FONT_SIZE,
    },
    symbol: {
        fontSize: SYMBOL_FONT_SIZE,
    },
    cornerSymbol: {
        fontSize: SYMBOL_FONT_SIZE / 4,
    },
});
