# La Tarologia

Application mobile de tarot (React Native / Expo) : tirage gratuit du jour, contenu pédagogique
sur le tarot, méthodes de tirage classiques, interprétation des 78 cartes et de leurs associations,
comptes utilisateurs en ligne et abonnement Premium via achats intégrés App Store / Play Store.

Tout le contenu de lecture (cartes, tirages, articles, associations) a été rédigé spécifiquement
pour cette application, dans un style original, à partir d'une synthèse de connaissances générales
sur le tarot — aucun texte n'est repris d'un ouvrage ou d'un site existant.

## Stack technique

- **Expo (React Native) + TypeScript**, routage par fichiers avec `expo-router`
- **Supabase** : authentification par e-mail/mot de passe, base de données (profils, historique de tirages)
- **RevenueCat** (`react-native-purchases`) : gestion des abonnements in-app App Store / Play Store
- Le contenu (cartes, tirages, articles) est stocké localement dans `src/data`, pas besoin de backend
  de contenu séparé

## Structure du projet

```
app/                     Écrans (expo-router)
  (tabs)/
    index.tsx             Accueil : tirage gratuit du jour (2 cartes)
    decouvrir/             Onglet "Découvrir" : histoire du tarot, Marseille vs Rider-Waite, etc.
    tirages/                Onglet "Tirages" : méthodes de tirage classiques + tirage interactif
    cartes/                 Onglet "Cartes" : interprétation des 78 cartes + associations
    profil/                 Compte, historique, gestion de l'abonnement
  auth/                    Connexion / inscription
  paywall.tsx              Écran d'abonnement Premium

src/
  data/                    Contenu éditorial : cartes.ts (+ 4 fichiers par famille), spreads.ts,
                           articles.ts, combos.ts
  context/                 AuthContext (Supabase), SubscriptionContext (RevenueCat)
  lib/                     Clients Supabase / RevenueCat
  components/              Composants UI réutilisables
  theme/                   Couleurs et espacements

supabase/schema.sql        Schéma SQL à exécuter dans votre projet Supabase
```

## Modèle freemium

- **Gratuit** : tirage du jour (accueil), les 22 arcanes majeurs + 4 as, les 3 premiers articles
  pédagogiques, les tirages à 1, 2 et 3 cartes.
- **Premium** : les 56 arcanes mineurs restants, tous les articles, tous les tirages avancés
  (croix, croix celtique, amour, année, décision, chakras) et **toutes les associations de cartes**
  (`src/data/combos.ts`), intégralement payantes.

Le statut `isFree` de chaque carte/tirage/article/association dans `src/data` contrôle cet accès ;
il est entièrement modifiable selon la stratégie commerciale souhaitée.

### Associations de cartes (contenu Premium)

Chaque association est analysée sous 5 angles : **Général**, **Amour**, **Pro**, **Guidance** et
**Les sentiments de la personne envers vous**. Le principe de lecture retenu est celui, classique
chez les tarologues, où la première carte tirée porte l'énergie dominante du tirage et la seconde
vient la préciser : chaque association explique donc aussi comment son sens se déplace si l'ordre
de tirage est inversé (champ `siOrdreInverse`). Le contenu s'appuie sur une synthèse de
significations de combinaisons largement partagées dans la pratique du tarot, reformulée dans un
style propre à l'application.

C'est la fonctionnalité la plus riche de l'application : elle couvre **248 associations**,
réparties en deux fichiers :
- `src/data/combos.ts` : 22 associations emblématiques mêlant arcanes majeurs et mineurs
  (ex. Deux de Coupes + Le Soleil, La Lune + L'Impératrice)
- `src/data/combos.majeurs.ts` : la **couverture complète des 231 associations possibles entre
  les 22 arcanes majeurs** deux à deux (226 paires dans ce fichier, 5 déjà présentes dans
  `combos.ts`), organisées par première carte

L'écran Associations (`app/(tabs)/cartes/associations.tsx`) propose une recherche et un filtre
par carte pour naviguer facilement dans ce volume de contenu.

## Mise en route (développement local)

```bash
npm install
npm run typecheck   # vérifie que le code compile
npm start           # lance Expo (scanner le QR code avec Expo Go, ou touche i / a pour simulateur)
```

## Configuration requise avant publication

L'application est fonctionnelle "à vide" (le contenu s'affiche, la navigation fonctionne), mais
trois services externes doivent être configurés avec vos propres identifiants avant de pouvoir
tester les comptes et les abonnements, puis publier :

### 1. Supabase (comptes utilisateurs)

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Dans l'éditeur SQL du projet, exécutez le contenu de `supabase/schema.sql` (crée les tables
   `profiles` et `draws`, avec Row Level Security).
3. Dans **Authentication > Providers**, l'authentification par e-mail est activée par défaut.
   Vous pouvez désactiver la confirmation par e-mail en développement dans **Authentication > Settings**.
4. Récupérez l'URL du projet et la clé `anon public` dans **Project Settings > API**.
5. Renseignez-les dans `app.json`, section `expo.extra` :
   ```json
   "supabaseUrl": "https://xxxxx.supabase.co",
   "supabaseAnonKey": "eyJ..."
   ```

### 2. RevenueCat (abonnements)

1. Créez un compte sur [revenuecat.com](https://www.revenuecat.com) et un projet.
2. Configurez vos produits d'abonnement dans **App Store Connect** (voir étape 3) et/ou
   **Google Play Console**, puis reliez-les dans RevenueCat (**Products**).
3. Créez un **Entitlement** nommé `premium` (ou adaptez `revenueCatEntitlementId` dans `app.json`)
   et associez-y vos produits.
4. Créez une **Offering** avec vos packages (mensuel, annuel…).
5. Récupérez les clés API publiques iOS et Android dans **Project Settings > API Keys**.
6. Renseignez-les dans `app.json` :
   ```json
   "revenueCatApiKeyIOS": "appl_xxx",
   "revenueCatApiKeyAndroid": "goog_xxx",
   "revenueCatEntitlementId": "premium"
   ```

### 3. App Store Connect (publication iOS)

Ces étapes nécessitent un compte développeur Apple payant (99 $/an) :

1. Créez l'app dans [App Store Connect](https://appstoreconnect.apple.com) avec le bundle
   identifier `com.constastra.latarologia` (ou modifiez-le dans `app.json` si besoin).
2. Dans **Fonctionnalités > Achats intégrés**, créez un ou plusieurs abonnements auto-renouvelables
   (ex. mensuel et annuel), dans un même groupe d'abonnement. Notez leurs identifiants de produit
   pour les relier dans RevenueCat.
3. Remplissez la fiche App Store (description, captures d'écran, catégorie, politique de
   confidentialité — obligatoire dès lors qu'il y a un compte utilisateur).
4. Installez l'outil de build EAS :
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   eas build --platform ios
   eas submit --platform ios
   ```
   (`eas build` nécessite un compte Expo, gratuit, et gère automatiquement les certificats
   iOS si vous le souhaitez.)
5. Une fois le build validé par Apple (délai de revue habituel : 1 à 3 jours), publiez la version.

### 4. Icônes et écran de lancement

Les fichiers `assets/icon.png`, `assets/splash.png`, `assets/adaptive-icon.png` et
`assets/favicon.png` sont pour l'instant des aplats de couleur (placeholders). Remplacez-les par
vos propres visuels avant soumission (icône 1024×1024 sans transparence pour l'App Store).

## Notes de conception

- Le tirage du jour est généré aléatoirement une fois par jour et conservé en local
  (`AsyncStorage`) pour rester identique si l'utilisateur rouvre l'app plusieurs fois dans la
  journée ; il est aussi enregistré dans l'historique Supabase si l'utilisateur est connecté.
- L'ordre des arcanes majeurs suit la tradition du tarot de Marseille (Justice en VIII, Force en XI) ;
  l'article "Tarot de Marseille et Rider-Waite" explique ce choix et la différence avec l'autre
  tradition.
- Les visuels de cartes sont pour l'instant symboliques (icône + nom) plutôt que des illustrations
  dessinées, afin d'éviter toute dépendance à des visuels protégés par le droit d'auteur. Il est
  possible d'ajouter vos propres illustrations dans `assets/cards/` et de les référencer dans
  `src/data/cards*.ts` par la suite.
