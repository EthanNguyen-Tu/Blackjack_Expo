import { View, Switch, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function SwitchWithLabel({
    label,
    value,
    onValueChange,
}: {
    label: string;
    value: boolean;
    onValueChange: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <View style={styles.switchRow}>
            <ThemedText type="default">{label}</ThemedText>
            <Switch value={value} onValueChange={onValueChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8,
    },
});
