import { useSettingsContext } from "@/hooks/useSettingsContext";
import React, { useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import SwitchWithLabel from "@/components/ui/SwitchWithLabel";

export default function Settings() {
    const [isVisible, setIsVisible] = useState(false);
    const { showStatsMenu, setShowStatsMenu, showHandSum, setShowHandSum, showCardsNotSeen, setShowCardsNotSeen } = useSettingsContext();

    const toggleSettings = () => setIsVisible(!isVisible);

    return (
        <View>
            <TouchableOpacity onPress={toggleSettings} style={styles.settingsButton} accessibilityLabel="Open Settings">
                <IconSymbol name="gearshape.fill" size={35} color={Colors.ui.button.background} />
            </TouchableOpacity>

            <Modal visible={isVisible} transparent animationType="fade" onRequestClose={toggleSettings}>
                <Pressable style={styles.overlay} onPress={toggleSettings}>
                    <Pressable style={styles.container} onPress={(e) => e.stopPropagation && e.stopPropagation()}>
                        <View style={styles.header}>
                            <ThemedText type="subtitle" style={styles.title}>
                                Settings
                            </ThemedText>
                            <TouchableOpacity onPress={toggleSettings} accessibilityLabel="Close Settings">
                                <IconSymbol name="xmark" size={28} color={Colors.ui.button.foreground} />
                            </TouchableOpacity>
                        </View>

                        <SwitchWithLabel label="Show Statistics Menu" value={showStatsMenu} onValueChange={setShowStatsMenu} />
                        <SwitchWithLabel label="Show Hand Sums" value={showHandSum} onValueChange={setShowHandSum} />
                        <SwitchWithLabel label="Show Cards Not Seen" value={showCardsNotSeen} onValueChange={setShowCardsNotSeen} />
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.ui.background,
        borderRadius: 10,
        padding: 15,
        width: 300,
        elevation: 5, // Android shadow
        shadowColor: Colors.ui.shadow, // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    overlay: {
        flex: 1,
        backgroundColor: Colors.overlay,
        justifyContent: "center",
        alignItems: "center",
    },
    settingsButton: {
        padding: 20,
        backgroundColor: "none",
    },
    title: {
        flex: 1,
    },
});
