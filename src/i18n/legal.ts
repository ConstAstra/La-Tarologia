import { Locale } from "./locales";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export const TERMS: Record<Locale, LegalDoc> = {
  fr: {
    title: "Conditions d'utilisation",
    updated: "Dernière mise à jour : 2026",
    sections: [
      {
        heading: "1. Objet",
        paragraphs: [
          "La Tarologia est une application de tarot à visée de divertissement et de réflexion personnelle. Les interprétations proposées n'ont aucune valeur prédictive garantie et ne remplacent en aucun cas un avis médical, psychologique, juridique ou financier professionnel. Vous restez seul responsable des décisions que vous prenez ; l'application n'écrit rien à votre place.",
        ],
      },
      {
        heading: "2. Compte utilisateur",
        paragraphs: [
          "La création d'un compte est nécessaire pour synchroniser votre historique de tirages entre appareils et gérer votre abonnement. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée depuis votre compte.",
        ],
      },
      {
        heading: "3. Contenu gratuit et abonnement Premium",
        paragraphs: [
          "Une partie du contenu (arcanes majeurs, un tirage quotidien, certains articles et méthodes de tirage) est accessible gratuitement. L'abonnement Premium débloque l'intégralité des 78 cartes, des associations de cartes, des méthodes de tirage et des articles.",
          "L'abonnement est un abonnement à renouvellement automatique. Le paiement est prélevé sur votre compte Apple ID ou Google Play au moment de la confirmation d'achat. L'abonnement se renouvelle automatiquement pour une durée identique, sauf si le renouvellement automatique est désactivé au moins 24 heures avant la fin de la période en cours. Votre compte est débité du montant du renouvellement dans les 24 heures précédant la fin de la période en cours. Toute portion inutilisée d'une période d'essai gratuite, le cas échéant, est perdue lors de l'achat d'un abonnement.",
          "Vous pouvez gérer ou annuler votre abonnement à tout moment depuis les réglages de votre compte Apple ID (App Store) ou Google Play, selon la plateforme utilisée pour l'achat. L'application elle-même ne traite aucun paiement directement.",
        ],
      },
      {
        heading: "4. Propriété intellectuelle",
        paragraphs: [
          "Les textes, illustrations et l'identité visuelle de La Tarologia sont la propriété de son éditeur. Toute reproduction non autorisée est interdite.",
        ],
      },
      {
        heading: "5. Limitation de responsabilité",
        paragraphs: [
          "La Tarologia est un outil de réflexion et de divertissement. L'éditeur ne saurait être tenu responsable des décisions prises sur la base des interprétations proposées dans l'application.",
        ],
      },
      {
        heading: "6. Modification des présentes conditions",
        paragraphs: [
          "Ces conditions peuvent être mises à jour ponctuellement. La poursuite de l'utilisation de l'application après une modification vaut acceptation des nouvelles conditions.",
        ],
      },
      {
        heading: "7. Contact",
        paragraphs: ["Pour toute question relative à ces conditions, écrivez-nous à contact@latarologia.app."],
      },
    ],
  },
  en: {
    title: "Terms of use",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "1. Purpose",
        paragraphs: [
          "La Tarologia is a tarot app intended for entertainment and personal reflection. The interpretations it offers have no guaranteed predictive value and never replace professional medical, psychological, legal, or financial advice. You remain solely responsible for the decisions you make; the app never decides anything in your place.",
        ],
      },
      {
        heading: "2. User account",
        paragraphs: [
          "Creating an account is required to sync your draw history across devices and manage your subscription. You're responsible for keeping your credentials confidential and for any activity carried out from your account.",
        ],
      },
      {
        heading: "3. Free content and Premium subscription",
        paragraphs: [
          "Some content (major arcana, a daily draw, certain articles and spread methods) is available for free. The Premium subscription unlocks all 78 cards, card combinations, spread methods, and articles.",
          "The subscription is an auto-renewing subscription. Payment is charged to your Apple ID or Google Play account upon purchase confirmation. The subscription automatically renews for the same duration, unless auto-renewal is turned off at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. Any unused portion of a free trial period, where offered, is forfeited when a subscription is purchased.",
          "You can manage or cancel your subscription at any time from your Apple ID (App Store) or Google Play account settings, depending on the platform used for purchase. The app itself doesn't process any payment directly.",
        ],
      },
      {
        heading: "4. Intellectual property",
        paragraphs: [
          "The text, illustrations, and visual identity of La Tarologia are the property of its publisher. Any unauthorized reproduction is prohibited.",
        ],
      },
      {
        heading: "5. Limitation of liability",
        paragraphs: [
          "La Tarologia is a reflection and entertainment tool. The publisher cannot be held responsible for decisions made based on the interpretations offered in the app.",
        ],
      },
      {
        heading: "6. Changes to these terms",
        paragraphs: [
          "These terms may be updated from time to time. Continuing to use the app after a change constitutes acceptance of the new terms.",
        ],
      },
      {
        heading: "7. Contact",
        paragraphs: ["For any question about these terms, write to us at contact@latarologia.app."],
      },
    ],
  },
  es: {
    title: "Condiciones de uso",
    updated: "Última actualización: 2026",
    sections: [
      {
        heading: "1. Objeto",
        paragraphs: [
          "La Tarologia es una aplicación de tarot con fines de entretenimiento y reflexión personal. Las interpretaciones propuestas no tienen ningún valor predictivo garantizado y no sustituyen en ningún caso una opinión médica, psicológica, jurídica o financiera profesional. Sigues siendo el único responsable de las decisiones que tomes; la aplicación no decide nada en tu lugar.",
        ],
      },
      {
        heading: "2. Cuenta de usuario",
        paragraphs: [
          "Crear una cuenta es necesario para sincronizar tu historial de tiradas entre dispositivos y gestionar tu suscripción. Eres responsable de la confidencialidad de tus credenciales y de cualquier actividad realizada desde tu cuenta.",
        ],
      },
      {
        heading: "3. Contenido gratuito y suscripción Premium",
        paragraphs: [
          "Parte del contenido (arcanos mayores, una tirada diaria, ciertos artículos y métodos de tirada) es accesible de forma gratuita. La suscripción Premium desbloquea las 78 cartas completas, las combinaciones de cartas, los métodos de tirada y los artículos.",
          "La suscripción es de renovación automática. El pago se carga a tu cuenta de Apple ID o Google Play en el momento de confirmar la compra. La suscripción se renueva automáticamente por la misma duración, salvo que la renovación automática se desactive al menos 24 horas antes del final del período en curso. Se cobrará a tu cuenta el importe de la renovación en las 24 horas anteriores al final del período en curso. Cualquier parte no utilizada de un período de prueba gratuito, si lo hubiera, se pierde al comprar una suscripción.",
          "Puedes gestionar o cancelar tu suscripción en cualquier momento desde los ajustes de tu cuenta de Apple ID (App Store) o Google Play, según la plataforma usada para la compra. La aplicación en sí no procesa ningún pago directamente.",
        ],
      },
      {
        heading: "4. Propiedad intelectual",
        paragraphs: [
          "Los textos, ilustraciones e identidad visual de La Tarologia son propiedad de su editor. Queda prohibida cualquier reproducción no autorizada.",
        ],
      },
      {
        heading: "5. Limitación de responsabilidad",
        paragraphs: [
          "La Tarologia es una herramienta de reflexión y entretenimiento. El editor no puede ser considerado responsable de las decisiones tomadas a partir de las interpretaciones ofrecidas en la aplicación.",
        ],
      },
      {
        heading: "6. Modificación de estas condiciones",
        paragraphs: [
          "Estas condiciones pueden actualizarse puntualmente. Continuar usando la aplicación después de una modificación implica la aceptación de las nuevas condiciones.",
        ],
      },
      {
        heading: "7. Contacto",
        paragraphs: ["Para cualquier pregunta sobre estas condiciones, escríbenos a contact@latarologia.app."],
      },
    ],
  },
};

export const PRIVACY: Record<Locale, LegalDoc> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 2026",
    sections: [
      {
        heading: "Données collectées",
        paragraphs: [
          "Lorsque vous créez un compte, nous collectons votre adresse e-mail. Si vous êtes connecté, votre historique de tirages (cartes tirées, méthode utilisée, date) est enregistré pour vous permettre de le retrouver sur tous vos appareils. Votre statut d'abonnement (Premium ou non) est également conservé.",
        ],
      },
      {
        heading: "Utilisation des données",
        paragraphs: [
          "Ces données servent uniquement à faire fonctionner l'application : afficher votre historique, synchroniser votre abonnement entre vos appareils, et vous permettre de vous reconnecter. Elles ne sont jamais utilisées à des fins publicitaires et ne sont pas revendues à des tiers.",
        ],
      },
      {
        heading: "Sous-traitants",
        paragraphs: [
          "Votre compte et votre historique de tirages sont hébergés par Supabase (base de données et authentification). La gestion de votre abonnement passe par RevenueCat, qui communique avec l'App Store ou Google Play pour valider vos achats. Ces prestataires n'accèdent qu'aux données strictement nécessaires à leur service.",
        ],
      },
      {
        heading: "Conservation des données",
        paragraphs: [
          "Vos données sont conservées tant que votre compte reste actif. Vous pouvez demander la suppression complète de votre compte et de vos données à tout moment en nous contactant.",
        ],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous.",
        ],
      },
      {
        heading: "Sécurité",
        paragraphs: [
          "Vos données sont stockées de façon sécurisée via l'infrastructure de Supabase. Aucun système n'étant infaillible, nous ne pouvons garantir une sécurité absolue, mais nous appliquons les bonnes pratiques standard du secteur.",
        ],
      },
      {
        heading: "Modifications",
        paragraphs: ["Cette politique peut être mise à jour ponctuellement ; la date de dernière mise à jour figure en haut de cette page."],
      },
      {
        heading: "Contact",
        paragraphs: ["Pour toute question sur vos données personnelles, écrivez-nous à contact@latarologia.app."],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: 2026",
    sections: [
      {
        heading: "Data collected",
        paragraphs: [
          "When you create an account, we collect your email address. If you're logged in, your draw history (cards drawn, method used, date) is saved so you can find it on all your devices. Your subscription status (Premium or not) is also kept.",
        ],
      },
      {
        heading: "Use of data",
        paragraphs: [
          "This data is used solely to make the app work: displaying your history, syncing your subscription across your devices, and letting you log back in. It's never used for advertising purposes and is never resold to third parties.",
        ],
      },
      {
        heading: "Subprocessors",
        paragraphs: [
          "Your account and draw history are hosted by Supabase (database and authentication). Your subscription is managed through RevenueCat, which communicates with the App Store or Google Play to validate your purchases. These providers only access the data strictly necessary for their service.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "Your data is kept for as long as your account remains active. You can request the complete deletion of your account and data at any time by contacting us.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "In accordance with applicable data protection regulations, you have the right to access, rectify, delete, and port your data. To exercise these rights, contact us at the address below.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "Your data is stored securely via Supabase's infrastructure. No system being infallible, we can't guarantee absolute security, but we apply standard industry best practices.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["This policy may be updated from time to time; the last-updated date appears at the top of this page."],
      },
      {
        heading: "Contact",
        paragraphs: ["For any question about your personal data, write to us at contact@latarologia.app."],
      },
    ],
  },
  es: {
    title: "Política de privacidad",
    updated: "Última actualización: 2026",
    sections: [
      {
        heading: "Datos recopilados",
        paragraphs: [
          "Cuando creas una cuenta, recopilamos tu dirección de correo electrónico. Si has iniciado sesión, tu historial de tiradas (cartas tiradas, método usado, fecha) se guarda para que puedas encontrarlo en todos tus dispositivos. También se conserva tu estado de suscripción (Premium o no).",
        ],
      },
      {
        heading: "Uso de los datos",
        paragraphs: [
          "Estos datos se usan únicamente para hacer funcionar la aplicación: mostrar tu historial, sincronizar tu suscripción entre tus dispositivos y permitirte volver a iniciar sesión. Nunca se usan con fines publicitarios ni se revenden a terceros.",
        ],
      },
      {
        heading: "Subencargados",
        paragraphs: [
          "Tu cuenta y tu historial de tiradas están alojados en Supabase (base de datos y autenticación). La gestión de tu suscripción pasa por RevenueCat, que se comunica con la App Store o Google Play para validar tus compras. Estos proveedores solo acceden a los datos estrictamente necesarios para su servicio.",
        ],
      },
      {
        heading: "Conservación de los datos",
        paragraphs: [
          "Tus datos se conservan mientras tu cuenta permanezca activa. Puedes solicitar la eliminación completa de tu cuenta y tus datos en cualquier momento contactándonos.",
        ],
      },
      {
        heading: "Tus derechos",
        paragraphs: [
          "De acuerdo con la normativa aplicable en materia de protección de datos, dispones de un derecho de acceso, rectificación, supresión y portabilidad de tus datos. Para ejercer estos derechos, contáctanos en la dirección indicada más abajo.",
        ],
      },
      {
        heading: "Seguridad",
        paragraphs: [
          "Tus datos se almacenan de forma segura a través de la infraestructura de Supabase. Como ningún sistema es infalible, no podemos garantizar una seguridad absoluta, pero aplicamos las buenas prácticas estándar del sector.",
        ],
      },
      {
        heading: "Modificaciones",
        paragraphs: ["Esta política puede actualizarse puntualmente; la fecha de la última actualización figura en la parte superior de esta página."],
      },
      {
        heading: "Contacto",
        paragraphs: ["Para cualquier pregunta sobre tus datos personales, escríbenos a contact@latarologia.app."],
      },
    ],
  },
};
