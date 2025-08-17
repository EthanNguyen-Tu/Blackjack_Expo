import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

interface DeckContentDisplayProps {
    card_count: { [key: string]: number };
    style?: object;
}

export default function DeckContentDisplay({ card_count, style }: DeckContentDisplayProps) {
    return (
        <View style={[styles.container, style]}>
            <ThemedText type="subtitle" style={styles.title}>
                Cards Not Seen
            </ThemedText>
            <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <ThemedText type="defaultSemiBold" style={styles.cell}>
                            Card
                        </ThemedText>
                        <ThemedText type="defaultSemiBold" style={styles.cell}>
                            #
                        </ThemedText>
                    </View>

                    {Object.keys(card_count).map((key) => (
                        <View style={styles.row} key={key}>
                            <ThemedText type="default" style={styles.cell}>
                                {key}
                            </ThemedText>
                            <ThemedText type="default" style={[styles.cell, styles.countCell]}>
                                {card_count[key]}
                            </ThemedText>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        gap: 10,
        maxWidth: 300,
        padding: 15,
        alignItems: "center",
        zIndex: 75,
    },
    title: {
        textAlign: "center",
    },
    table: {
        backgroundColor: Colors.ui.translucentBackground,
        borderColor: Colors.ui.border,
        borderRadius: 10,
        borderWidth: 2,
        paddingVertical: 5,
    },
    row: {
        alignItems: "center",
        borderBottomColor: Colors.ui.border,
        borderBottomWidth: 2,
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        minWidth: 50,
        textAlign: "center",
    },
    countCell: {
        borderLeftColor: Colors.ui.border,
        borderLeftWidth: 2,
    },
});
