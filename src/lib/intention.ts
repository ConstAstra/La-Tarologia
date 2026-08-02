import AsyncStorage from "@react-native-async-storage/async-storage";

function weekKey(): string {
  const d = new Date();
  const startOfYear = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - startOfYear.getTime()) / 86_400_000 + startOfYear.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

const KEY_PREFIX = "latarologia.intention.";

export async function getWeeklyIntention(): Promise<string> {
  const val = await AsyncStorage.getItem(KEY_PREFIX + weekKey());
  return val ?? "";
}

export async function saveWeeklyIntention(text: string): Promise<void> {
  await AsyncStorage.setItem(KEY_PREFIX + weekKey(), text);
}
