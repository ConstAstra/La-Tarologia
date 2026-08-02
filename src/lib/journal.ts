import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = "latarologia.journal.";

export async function getJournalNote(key: string): Promise<string> {
  return (await AsyncStorage.getItem(PREFIX + key)) ?? "";
}

export async function saveJournalNote(key: string, note: string): Promise<void> {
  if (note.trim()) {
    await AsyncStorage.setItem(PREFIX + key, note.trim());
  } else {
    await AsyncStorage.removeItem(PREFIX + key);
  }
}
