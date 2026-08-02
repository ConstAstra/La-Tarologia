import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const KEY_ENABLED = "latarologia.notifEnabled";
const KEY_HOUR = "latarologia.notifHour";
const KEY_MINUTE = "latarologia.notifMinute";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  if (Platform.OS === "web") return false;
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === "granted") return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

export async function scheduleDailyReminder(hour = 8, minute = 0): Promise<void> {
  if (Platform.OS === "web") return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "La Tarologia ✨",
      body: "Votre tirage du jour vous attend.",
    },
    trigger: { hour, minute, repeats: true },
  });
  await AsyncStorage.setItem(KEY_ENABLED, "true");
  await AsyncStorage.setItem(KEY_HOUR, String(hour));
  await AsyncStorage.setItem(KEY_MINUTE, String(minute));
}

export async function cancelDailyReminder(): Promise<void> {
  if (Platform.OS === "web") return;
  await Notifications.cancelAllScheduledNotificationsAsync();
  await AsyncStorage.setItem(KEY_ENABLED, "false");
}

export async function getNotificationPrefs(): Promise<{ enabled: boolean; hour: number; minute: number }> {
  const [enabled, hour, minute] = await Promise.all([
    AsyncStorage.getItem(KEY_ENABLED),
    AsyncStorage.getItem(KEY_HOUR),
    AsyncStorage.getItem(KEY_MINUTE),
  ]);
  return {
    enabled: enabled === "true",
    hour: hour ? parseInt(hour, 10) : 8,
    minute: minute ? parseInt(minute, 10) : 0,
  };
}
