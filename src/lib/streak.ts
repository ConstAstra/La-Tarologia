import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "latarologia.streak";

interface StreakData {
  count: number;
  lastDate: string;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey() {
  return new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
}

export async function recordDrawAndGetStreak(): Promise<number> {
  const today = todayKey();
  const raw = await AsyncStorage.getItem(KEY);
  if (raw) {
    const data = JSON.parse(raw) as StreakData;
    if (data.lastDate === today) return data.count;
    const count = data.lastDate === yesterdayKey() ? data.count + 1 : 1;
    await AsyncStorage.setItem(KEY, JSON.stringify({ count, lastDate: today }));
    return count;
  }
  await AsyncStorage.setItem(KEY, JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

export async function getStreak(): Promise<number> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return 0;
  const data = JSON.parse(raw) as StreakData;
  if (data.lastDate !== todayKey() && data.lastDate !== yesterdayKey()) return 0;
  return data.count;
}
