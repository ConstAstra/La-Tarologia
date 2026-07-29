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

export default function TermsScreen() {
  return (
    <Screen>
      <Text style={styles.title}>Conditions d'utilisation</Text>
      <Text style={styles.updated}>Dernière mise à jour : 2026</Text>

      <H>1. Objet</H>
      <P>
        La Tarologia est une application de tarot à visée de divertissement et de réflexion personnelle. Les
        interprétations proposées n'ont aucune valeur prédictive garantie et ne remplacent en aucun cas un avis
        médical, psychologique, juridique ou financier professionnel. Vous restez seul responsable des décisions
        que vous prenez ; l'application n'écrit rien à votre place.
      </P>

      <H>2. Compte utilisateur</H>
      <P>
        La création d'un compte est nécessaire pour synchroniser votre historique de tirages entre appareils et
        gérer votre abonnement. Vous êtes responsable de la confidentialité de vos identifiants et de toute
        activité effectuée depuis votre compte.
      </P>

      <H>3. Contenu gratuit et abonnement Premium</H>
      <P>
        Une partie du contenu (arcanes majeurs, un tirage quotidien, certains articles et méthodes de tirage) est
        accessible gratuitement. L'abonnement Premium débloque l'intégralité des 78 cartes, des associations de
        cartes, des méthodes de tirage et des articles.
      </P>
      <P>
        L'abonnement est un abonnement à renouvellement automatique. Le paiement est prélevé sur votre compte
        Apple ID ou Google Play au moment de la confirmation d'achat. L'abonnement se renouvelle automatiquement
        pour une durée identique, sauf si le renouvellement automatique est désactivé au moins 24 heures avant la
        fin de la période en cours. Votre compte est débité du montant du renouvellement dans les 24 heures
        précédant la fin de la période en cours. Toute portion inutilisée d'une période d'essai gratuite, le cas
        échéant, est perdue lors de l'achat d'un abonnement.
      </P>
      <P>
        Vous pouvez gérer ou annuler votre abonnement à tout moment depuis les réglages de votre compte Apple ID
        (App Store) ou Google Play, selon la plateforme utilisée pour l'achat. L'application elle-même ne traite
        aucun paiement directement.
      </P>

      <H>4. Propriété intellectuelle</H>
      <P>
        Les textes, illustrations et l'identité visuelle de La Tarologia sont la propriété de son éditeur. Toute
        reproduction non autorisée est interdite.
      </P>

      <H>5. Limitation de responsabilité</H>
      <P>
        La Tarologia est un outil de réflexion et de divertissement. L'éditeur ne saurait être tenu responsable
        des décisions prises sur la base des interprétations proposées dans l'application.
      </P>

      <H>6. Modification des présentes conditions</H>
      <P>
        Ces conditions peuvent être mises à jour ponctuellement. La poursuite de l'utilisation de l'application
        après une modification vaut acceptation des nouvelles conditions.
      </P>

      <H>7. Contact</H>
      <P>Pour toute question relative à ces conditions, écrivez-nous à contact@latarologia.app.</P>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.gold, fontSize: 24, fontFamily: fonts.heading, marginBottom: spacing.xs },
  updated: { color: colors.textMuted, fontSize: 12, marginBottom: spacing.lg },
  heading: { color: colors.primary, fontFamily: fonts.bodyBold, fontSize: 14, marginTop: spacing.md, marginBottom: spacing.xs, textTransform: "uppercase" },
  paragraph: { color: colors.text, lineHeight: 20, marginBottom: spacing.xs },
});
