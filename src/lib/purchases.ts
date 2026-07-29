import { Platform } from "react-native";
import Constants from "expo-constants";
import Purchases, { type CustomerInfo } from "react-native-purchases";

const extra = (Constants.expoConfig?.extra ?? {}) as Record<string, string>;

export const ENTITLEMENT_ID = extra.revenueCatEntitlementId || "premium";

let isConfigured = false;

export function configurePurchases(appUserId?: string) {
  const apiKey = Platform.OS === "ios" ? extra.revenueCatApiKeyIOS : extra.revenueCatApiKeyAndroid;

  if (!apiKey || apiKey.startsWith("YOUR-REVENUECAT")) {
    console.warn(
      "[La Tarologia] RevenueCat n'est pas configuré : renseignez les clés API dans app.json (extra)."
    );
    return;
  }

  if (isConfigured) return;
  Purchases.configure({ apiKey, appUserID: appUserId });
  isConfigured = true;
}

export async function switchPurchasesUser(appUserId: string | null): Promise<void> {
  if (!isConfigured) return;
  try {
    if (appUserId) {
      await Purchases.logIn(appUserId);
    } else {
      await Purchases.logOut();
    }
  } catch (e) {
    console.warn("[La Tarologia] Impossible de changer d'utilisateur RevenueCat", e);
  }
}

export function hasPremiumEntitlement(customerInfo: CustomerInfo): boolean {
  return typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined";
}

export async function getCustomerInfo(): Promise<CustomerInfo | null> {
  if (!isConfigured) return null;
  try {
    return await Purchases.getCustomerInfo();
  } catch (e) {
    console.warn("[La Tarologia] Impossible de récupérer les infos client RevenueCat", e);
    return null;
  }
}

export async function getOfferings() {
  if (!isConfigured) return null;
  try {
    const offerings = await Purchases.getOfferings();
    return offerings.current;
  } catch (e) {
    console.warn("[La Tarologia] Impossible de récupérer les offres RevenueCat", e);
    return null;
  }
}

export async function restorePurchases(): Promise<CustomerInfo | null> {
  if (!isConfigured) return null;
  try {
    return await Purchases.restorePurchases();
  } catch (e) {
    console.warn("[La Tarologia] Échec de la restauration des achats", e);
    return null;
  }
}
