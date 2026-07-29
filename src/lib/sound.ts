import { Audio } from "expo-av";

// Sons courts et discrets pour les moments clés (retournement de carte, tirage).
// Chaque appel charge et joue son propre instance, puis la libère à la fin — adapté à
// des effets brefs et peu fréquents plutôt qu'à une musique de fond.
let soundEnabled = true;

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
}

export function isSoundEnabled() {
  return soundEnabled;
}

async function playAsset(mod: number) {
  if (!soundEnabled) return;
  try {
    const { sound } = await Audio.Sound.createAsync(mod, { shouldPlay: true, volume: 0.7 });
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        sound.unloadAsync().catch(() => {});
      }
    });
  } catch {
    // silencieux : l'absence de son ne doit jamais bloquer l'expérience
  }
}

export function playCardReveal() {
  return playAsset(require("../../assets/sounds/card-reveal.wav"));
}

export function playCardShuffle() {
  return playAsset(require("../../assets/sounds/card-shuffle.wav"));
}
