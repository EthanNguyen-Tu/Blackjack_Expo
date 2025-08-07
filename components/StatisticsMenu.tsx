import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useBlackjackContext } from "@/hooks/useBlackjackContext";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

interface StatisticsMenuProps {
    style?: ViewStyle;
}

export default function StatisticsMenu({ style }: StatisticsMenuProps) {
    const { totalGames, victories } = useBlackjackContext();

    const winRate = totalGames ? Math.round((victories / totalGames) * 100) : 0;

    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                <ThemedText type="subtitle">Statistics</ThemedText>
            </View>
            <View style={styles.row}>
                <ThemedText type="default" style={styles.label}>
                    Victories
                </ThemedText>
                <ThemedText type="defaultBold" style={styles.value}>
                    {victories}
                </ThemedText>
            </View>
            <View style={styles.row}>
                <ThemedText type="default" style={styles.label}>
                    Win Rate
                </ThemedText>
                <ThemedText type="defaultBold" style={styles.value}>
                    {winRate}%
                </ThemedText>
            </View>
            <View style={styles.row}>
                <ThemedText type="default" style={styles.label}>
                    Games Played
                </ThemedText>
                <ThemedText type="defaultBold" style={styles.value}>
                    {totalGames}
                </ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        padding: 15,
        zIndex: 75,
        backgroundColor: Colors.ui.translucentBackground,
        borderRadius: 10,
    },
    header: {
        marginBottom: 8,
        position: "relative",
    },
    label: {
        flex: 2,
        textAlign: "right",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    value: {
        flex: 1,
        textAlign: "right",
    },
});
