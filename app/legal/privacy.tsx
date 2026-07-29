import React from "react";
import { StyleSheet } from "react-native";
import { AppText as Text } from "@/components/AppText";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/theme/colors";

function P({ children }: { children: React.ReactNode }) {
  return <Text style={styles.paragraph}>{children}</Text>;
}

function H({ children }: { children: React.ReactNode }) {
  return <Text style={styles.heading}>{children}</Text>;
}

export default function PrivacyScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Politique de confidentialité</Text>
      <Text style={styles.updated}>Dernière mise à jour : 2026</Text>

      <H>Données collectées</H>
      <P>
        Lorsque vous créez un compte, nous collectons votre adresse e-mail. Si vous êtes connecté, votre
        historique de tirages (cartes tirées, méthode utilisée, date) est enregistré pour vous permettre de le
        retrouver sur tous vos appareils. Votre statut d'abonnement (Premium ou non) est également conservé.
      </P>

      <H>Utilisation des données</H>
      <P>
        Ces données servent uniquement à faire fonctionner l'application : afficher votre historique, synchroniser
        votre abonnement entre vos appareils, et vous permettre de vous reconnecter. Elles ne sont jamais utilisées
        à des fins publicitaires et ne sont pas revendues à des tiers.
      </P>

      <H>Sous-traitants</H>
      <P>
        Votre compte et votre historique de tirages sont hébergés par Supabase (base de données et
        authentification). La gestion de votre abonnement passe par RevenueCat, qui communique avec l'App Store
        ou Google Play pour valider vos achats. Ces prestataires n'accèdent qu'aux données strictement
        nécessaires à leur service.
      </P>

      <H>Conservation des données</H>
      <P>
        Vos données sont conservées tant que votre compte reste actif. Vous pouvez demander la suppression
        complète de votre compte et de vos données à tout moment en nous contactant.
      </P>

      <H>Vos droits</H>
      <P>
        Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un
        droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits,
        contactez-nous à l'adresse indiquée ci-dessous.
      </P>

      <H>Sécurité</H>
      <P>
        Vos données sont stockées de façon sécurisée via l'infrastructure de Supabase. Aucun système n'étant
        infaillible, nous ne pouvons garantir une sécurité absolue, mais nous appliquons les bonnes pratiques
        standard du secteur.
      </P>

      <H>Modifications</H>
      <P>Cette politique peut être mise à jour ponctuellement ; la date de dernière mise à jour figure en haut de cette page.</P>

      <H>Contact</H>
      <P>Pour toute question sur vos données personnelles, écrivez-nous à contact@latarologia.app.</P>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 24, fontFamily: fonts.heading, marginBottom: spacing.xs },
  updated: { color: colors.textMuted, fontSize: 12, marginBottom: spacing.lg },
  heading: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginTop: spacing.md, marginBottom: spacing.xs, textTransform: "uppercase" },
  paragraph: { color: colors.text, lineHeight: 20, marginBottom: spacing.xs },
});
