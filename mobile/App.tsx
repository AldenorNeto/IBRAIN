import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handleNotification = async () => {
    await Notifications.presentNotificationAsync({
      title: "Notificação",
      body: "A notificação foi pressionada agora!",
    });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.nosso}>Hello, World!</Text>
      <Button title="Enviar Notificação" onPress={handleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  nosso: {
    color: "#fff",
  },
});
