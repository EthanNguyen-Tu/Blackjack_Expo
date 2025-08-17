import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import Settings from "@/components/Settings";
import { Colors } from "@/constants/Colors";
import { SettingsProvider } from "@/providers/SettingsProvider";
import { ActivityIndicator, Image, StyleSheet, View, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    if (!loaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={Colors.ui.text.theme} />
                <ThemedText type="theme">Loading...</ThemedText>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SettingsProvider>
                <Stack
                    screenOptions={{
                        headerShadowVisible: false,
                        headerTransparent: true,
                        title: "Blackjack",
                        headerTintColor: Colors.ui.text.contrast,
                        headerTitleStyle: { fontWeight: "bold", fontSize: 35 },
                        headerLeft: () => (
                            <Image
                                source={require("@/assets/images/Nguyen-Tu_BlackjackLogo.png")}
                                style={{ height: 40, width: 40, marginLeft: 25, marginRight: 15 }}
                                alt={"Ethan Nguyen-Tu's Blackjack Logo"}
                            />
                        ),
                        headerRight: () => <Settings />,
                    }}
                >
                    <Stack.Screen name="+not-found" />
                </Stack>
                <View style={styles.footer}>
                    <ThemedText type="footer">Copyright (c) 2025 Ethan Nguyen-Tu. All rights reserved.</ThemedText>
                </View>
                <StatusBar style="auto" />
            </SettingsProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.ui.background,
        rowGap: 10,
    },
    footer: {
        position: "absolute",
        marginBottom: 10,
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
});
