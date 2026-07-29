import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import Purchases, { type CustomerInfo, type PurchasesOffering, type PurchasesPackage } from "react-native-purchases";
import { useAuth } from "@/context/AuthContext";
import {
  configurePurchases,
  getCustomerInfo,
  getOfferings,
  hasPremiumEntitlement,
  restorePurchases,
  switchPurchasesUser,
} from "@/lib/purchases";

interface SubscriptionContextValue {
  isPremium: boolean;
  isLoading: boolean;
  offering: PurchasesOffering | null;
  purchase: (pkg: PurchasesPackage) => Promise<{ error: string | null }>;
  restore: () => Promise<void>;
  refresh: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextValue | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [offering, setOffering] = useState<PurchasesOffering | null>(null);

  const applyCustomerInfo = useCallback((info: CustomerInfo | null) => {
    if (info) setIsPremium(hasPremiumEntitlement(info));
  }, []);

  useEffect(() => {
    configurePurchases(user?.id);
    if (user?.id) switchPurchasesUser(user.id);

    const listener = (info: CustomerInfo) => applyCustomerInfo(info);
    Purchases.addCustomerInfoUpdateListener(listener);

    (async () => {
      setIsLoading(true);
      const [info, current] = await Promise.all([getCustomerInfo(), getOfferings()]);
      applyCustomerInfo(info);
      setOffering(current);
      setIsLoading(false);
    })();

    return () => {
      Purchases.removeCustomerInfoUpdateListener(listener);
    };
  }, [user?.id, applyCustomerInfo]);

  const value = useMemo<SubscriptionContextValue>(
    () => ({
      isPremium,
      isLoading,
      offering,
      purchase: async (pkg) => {
        try {
          const { customerInfo } = await Purchases.purchasePackage(pkg);
          applyCustomerInfo(customerInfo);
          return { error: null };
        } catch (e: any) {
          if (e?.userCancelled) return { error: null };
          return { error: e?.message ?? "L'achat a échoué." };
        }
      },
      restore: async () => {
        const info = await restorePurchases();
        applyCustomerInfo(info);
      },
      refresh: async () => {
        const info = await getCustomerInfo();
        applyCustomerInfo(info);
      },
    }),
    [isPremium, isLoading, offering, applyCustomerInfo]
  );

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

export function useSubscription(): SubscriptionContextValue {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription doit être utilisé à l'intérieur d'un SubscriptionProvider");
  return ctx;
}
