import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "latarologia.favorites";

export async function getFavorites(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as string[]) : [];
}

export async function toggleFavorite(cardId: string): Promise<boolean> {
  const favs = await getFavorites();
  const idx = favs.indexOf(cardId);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(cardId);
  }
  await AsyncStorage.setItem(KEY, JSON.stringify(favs));
  return idx < 0;
}

export async function isFavorite(cardId: string): Promise<boolean> {
  const favs = await getFavorites();
  return favs.includes(cardId);
}
