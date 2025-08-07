import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type CustomButtonProps = {
    onPress: () => void;
    text: string;
    style?: StyleProp<ViewStyle>;
};

export default function CustomButton({ onPress, text, style }: CustomButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.7}>
            <ThemedText type="defaultSemiBold" style={styles.text}>
                {text}
            </ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.ui.button.background,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    text: {
        textAlign: "center",
    },
});
