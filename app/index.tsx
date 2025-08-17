import Blackjack from "@/components/Blackjack";
import { BlackjackProvider } from "@/providers/BlackjackProvider";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
    return (
        <BlackjackProvider>
            <View style={styles.container}>
                <Blackjack />
            </View>
        </BlackjackProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
