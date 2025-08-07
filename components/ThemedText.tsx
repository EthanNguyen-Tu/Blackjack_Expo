import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
    type?: "default" | "defaultBold" | "defaultSemiBold" | "footer" | "link" | "subtitle" | "theme" | "title";
};

export function ThemedText({ style, type = "default", ...rest }: ThemedTextProps) {
    return <Text style={[type ? styles[type] : "", style]} {...rest} />;
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.ui.text.plain,
    },
    defaultBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "800",
        color: Colors.ui.text.plain,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "600",
        color: Colors.ui.text.plain,
    },
    footer: {
        fontSize: 12,
        color: Colors.ui.text.plain,
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: Colors.ui.link,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.ui.text.plain,
    },
    theme: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.ui.text.theme,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 32,
        color: Colors.ui.text.theme,
    },
});
