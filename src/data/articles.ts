import { Article } from "@/types/tarot";

// Articles pédagogiques : contenu rédigé pour l'application, synthèse et vulgarisation
// personnelle de connaissances générales sur le tarot, sans reprise de texte existant.
export const articles: Article[] = [
  {
    id: "art-histoire-origines",
    category: "histoire",
    title: "D'où vient le tarot ?",
    isFree: true,
    summary: "Un rapide voyage dans le temps, de simples cartes à jouer italiennes jusqu'à l'outil de réflexion qu'on connaît aujourd'hui.",
    body: [
      "Le tarot n'est pas né comme un outil de divination. Ses premières traces remontent au nord de l'Italie, au quinzième siècle, où de riches familles faisaient peindre des jeux de cartes luxueux pour jouer à un jeu de plis proche du bridge actuel. On appelait alors ces jeux des « tarocchi », et ils comportaient déjà une série d'atouts illustrés, ancêtres directs de nos arcanes majeurs.",
      "Pendant longtemps, ces cartes sont restées un simple divertissement de cour. Ce n'est qu'à partir du dix-huitième siècle, dans un climat européen fasciné par les sciences occultes et les traditions égyptiennes ou hébraïques, que certains auteurs ont commencé à voir dans ces images bien plus qu'un jeu : un système symbolique capable de raconter une histoire universelle, celle d'un chemin de vie ponctué d'épreuves et de révélations.",
      "C'est de cette rencontre entre un jeu populaire et une soif d'ésotérisme qu'est né le tarot divinatoire tel qu'on le pratique aujourd'hui. Les figures se sont chargées de sens : le Bateleur est devenu le début du chemin, le Monde son aboutissement, et chaque carte intermédiaire une étape de cette traversée symbolique.",
      "Depuis, le tarot n'a cessé d'évoluer. Chaque époque, chaque courant spirituel ou artistique y a ajouté sa couche de sens, ce qui explique la grande diversité des jeux que l'on trouve aujourd'hui, tout en gardant une architecture commune : vingt-deux arcanes majeurs et cinquante-six arcanes mineurs répartis en quatre familles.",
    ],
  },
  {
    id: "art-histoire-evolution",
    category: "histoire",
    title: "Du jeu de cour à l'outil de développement personnel",
    isFree: true,
    summary: "Comment le tarot est passé du salon aristocratique à la table de nuit, en changeant de fonction plusieurs fois.",
    body: [
      "Au fil des siècles, le tarot a changé plusieurs fois de statut. Jeu de société dans l'Italie de la Renaissance, il devient au dix-neuvième siècle un objet d'étude pour des cercles ésotériques qui cherchent à en percer les correspondances cachées avec l'astrologie, la kabbale ou l'alchimie. C'est à cette période que se fixent une grande partie des associations symboliques encore utilisées aujourd'hui.",
      "Au vingtième siècle, avec la diffusion de jeux plus accessibles et de nombreux ouvrages de vulgarisation, le tarot sort peu à peu des cercles initiés pour arriver dans les foyers. Il devient un support de réflexion personnelle autant qu'un outil de consultation, utilisé aussi bien pour interroger l'avenir que pour mieux comprendre une situation présente.",
      "Aujourd'hui, une large partie des personnes qui tirent les cartes le font moins pour prédire un futur figé que pour explorer une question, prendre du recul ou clarifier une intuition. C'est cette dimension de miroir et de dialogue avec soi-même que cette application cherche à mettre en avant, sans jamais prétendre remplacer un choix personnel éclairé.",
    ],
  },
  {
    id: "art-marseille-vs-riderwaite",
    category: "styles",
    title: "Tarot de Marseille et Rider-Waite : deux visages du même chemin",
    isFree: true,
    summary: "Les deux grandes familles de tarot n'ont ni le même style ni tout à fait la même façon de se lire. Voici comment les distinguer.",
    body: [
      "Quand on débute, la diversité des jeux de tarot peut surprendre. Deux grandes familles dominent largement le paysage : le tarot de Marseille, plus ancien dans son style, et le tarot Rider-Waite-Smith, créé au tout début du vingtième siècle en Angleterre, qui a fortement influencé la plupart des jeux modernes, y compris les visuels de cette application.",
      "Le tarot de Marseille reste fidèle à une esthétique plus ancienne et plus stylisée. Ses arcanes mineurs, notamment, sont représentés de façon presque abstraite : quatre bâtons croisés pour le Quatre de Bâtons, des coupes alignées pour le Trois de Coupes, sans scène ni personnage. Lire ce jeu demande donc de bien connaître la symbolique des nombres et des familles, car l'image seule ne raconte pas une histoire.",
      "Le tarot Rider-Waite-Smith, à l'inverse, a fait un choix qui a changé durablement la pratique du tarot : illustrer chaque carte mineure d'une scène concrète, avec des personnages en action. Le Trois de Coupes montre trois femmes qui célèbrent ensemble, le Cinq d'Épées un vainqueur amer entouré d'adversaires qui s'éloignent. Cette approche narrative rend le jeu beaucoup plus intuitif pour les débutants, puisque l'image porte déjà une bonne partie du sens.",
      "Les deux traditions ne sont pas non plus tout à fait d'accord sur l'ordre de deux arcanes majeurs : le tarot de Marseille place la Justice en huitième position et la Force en onzième, tandis que le Rider-Waite-Smith inverse ces deux cartes, pour des raisons de correspondances astrologiques établies par les cercles ésotériques anglais du dix-neuvième siècle. Cette application a choisi l'ordre historique du tarot de Marseille, tout en s'appuyant sur des visuels et une lecture inspirés de la tradition Rider-Waite-Smith pour leur clarté.",
      "Au-delà de l'esthétique, la différence est surtout une question d'approche : le tarot de Marseille invite à une lecture plus symbolique et personnelle, où l'interprète construit du sens à partir de formes simples, quand le tarot Rider-Waite-Smith propose un sens plus immédiatement accessible grâce à ses scènes illustrées. Aucun des deux n'est « supérieur » à l'autre, ce sont deux langages différents pour explorer les mêmes questions.",
    ],
  },
  {
    id: "art-majeurs-mineurs",
    category: "pratique",
    title: "Arcanes majeurs et mineurs : quelle différence ?",
    isFree: true,
    summary: "Comprendre la structure du jeu de tarot pour mieux lire ce que raconte un tirage.",
    body: [
      "Un jeu de tarot complet compte septante-huit cartes, réparties en deux grands ensembles qui ne jouent pas le même rôle dans une lecture. Les vingt-deux arcanes majeurs, du Fou au Monde, représentent de grandes étapes existentielles : des thèmes universels comme l'amour, la perte, la transformation ou l'accomplissement. Quand plusieurs arcanes majeurs apparaissent dans un tirage, c'est souvent le signe qu'une période importante, presque initiatique, est en train de se jouer.",
      "Les cinquante-six arcanes mineurs, eux, se rapprochent davantage du quotidien. Répartis en quatre familles, les Bâtons pour l'action et l'énergie, les Coupes pour les émotions, les Épées pour la pensée et les Deniers pour le concret, ils décrivent des situations plus ordinaires : une conversation, une contrariété passagère, une bonne nouvelle professionnelle. Un tirage composé surtout d'arcanes mineurs parle en général d'un moment plus léger, plus terre-à-terre.",
      "Comprendre cette distinction change déjà beaucoup la façon de lire un tirage : la présence ou l'absence d'arcanes majeurs donne une indication sur l'intensité de ce qui se joue, avant même de s'intéresser au sens précis de chaque carte.",
    ],
  },
  {
    id: "art-symbolisme-nombres",
    category: "pratique",
    title: "Ce que racontent les nombres dans le tarot",
    isFree: false,
    summary: "Une grille de lecture simple pour comprendre la logique derrière les cartes numérotées de chaque famille.",
    body: [
      "Dans les arcanes mineurs, le numéro d'une carte porte presque autant de sens que sa famille. Cette logique, hérité d'une tradition numérologique ancienne, permet de deviner une bonne partie du sens d'une carte mineure avant même de connaître son illustration précise.",
      "L'As marque un commencement pur, une énergie encore à l'état de potentiel. Le Deux introduit un choix ou une rencontre, une première mise en relation. Le Trois évoque une expansion, les premiers résultats visibles d'un mouvement engagé. Le Quatre apporte une stabilité, parfois une pause bienvenue après cette phase de croissance.",
      "Le Cinq, souvent redouté, marque une remise en question ou une tension nécessaire pour ne pas s'endormir dans un confort trop figé. Le Six ramène un équilibre, une forme d'harmonie retrouvée après le trouble. Le Sept invite à l'introspection ou à la stratégie, un temps de recul avant de continuer. Le Huit relance le mouvement avec plus de maîtrise que lors des débuts.",
      "Le Neuf, avant-dernière étape, porte souvent une tension propre à ce qui touche presque à sa fin, entre fatigue et résilience. Le Dix, enfin, clôt le cycle, pour le meilleur, un accomplissement, comme pour le pire, une charge devenue trop lourde, selon la famille concernée.",
      "Les figures, Valet, Cavalier, Reine et Roi, ajoutent une dimension humaine à cette logique : le Valet incarne l'apprentissage et la curiosité, le Cavalier le mouvement et l'action, la Reine une maîtrise intérieure et incarnée de l'élément, le Roi une maîtrise extérieure, structurante et assumée.",
    ],
  },
  {
    id: "art-poser-question",
    category: "pratique",
    title: "Bien formuler sa question avant de tirer les cartes",
    isFree: false,
    summary: "La qualité d'une lecture dépend souvent autant de la question posée que des cartes tirées.",
    body: [
      "Une erreur fréquente en tarot consiste à poser des questions fermées, qui appellent seulement un oui ou un non : « Va-t-il me rappeler ? », « Vais-je réussir ? ». Ce type de question limite énormément la richesse d'une lecture, car les cartes racontent avant tout des dynamiques, des nuances, rarement des réponses binaires.",
      "Il est en général plus utile de formuler des questions ouvertes, centrées sur soi plutôt que sur les autres : « Que dois-je comprendre de cette situation ? », « Sur quoi devrais-je porter mon attention en ce moment ? », « Qu'est-ce qui m'empêche d'avancer sur ce projet ? ». Ce type de formulation laisse aux cartes la place de révéler des angles auxquels on n'aurait pas forcément pensé seul.",
      "Il est également conseillé d'éviter de poser une même question plusieurs fois de suite dans l'espoir d'obtenir une réponse plus favorable : le tarot fonctionne mieux comme un espace de réflexion honnête que comme une loterie que l'on tenterait de forcer.",
      "Enfin, prendre quelques instants de calme avant de tirer les cartes, pour formuler clairement son intention, change souvent beaucoup la pertinence perçue d'une lecture. Ce n'est pas une question de magie, mais simplement de clarté : plus la question est précise, plus l'interprétation qui suit a de chances de résonner avec la situation réelle.",
    ],
  },
  {
    id: "art-cartes-inversees",
    category: "pratique",
    title: "Faut-il tenir compte des cartes inversées ?",
    isFree: false,
    summary: "Une question classique chez les débutants, sans réponse universelle mais avec quelques repères utiles.",
    body: [
      "Certains tarologues lisent uniquement les cartes à l'endroit, considérant que le contexte du tirage suffit à nuancer une signification. D'autres, dont cette application s'inspire, intègrent les cartes inversées comme une façon d'ajouter une couche de nuance : une énergie qui a du mal à s'exprimer pleinement, un aspect plus intérieur ou bloqué de la même signification.",
      "Une carte inversée n'est presque jamais simplement « le contraire » de sa signification à l'endroit. Il s'agit plutôt d'une version freinée, retardée, mal exprimée ou encore en cours d'intégration de la même énergie. Le Six de Coupes à l'endroit parle de nostalgie douce ; inversé, il peut indiquer que cette même nostalgie devient un refuge qui empêche d'avancer.",
      "Il n'existe pas de règle universelle sur la fréquence à laquelle une carte devrait sortir inversée : certains tarologues tirent les cartes déjà mélangées dans les deux sens, d'autres ne les inversent jamais volontairement. Le plus important reste de choisir une méthode et de s'y tenir, pour développer une lecture cohérente au fil du temps.",
    ],
  },
  {
    id: "art-associations-cartes",
    category: "pratique",
    title: "Lire les cartes ensemble plutôt qu'isolément",
    isFree: false,
    summary: "Le vrai art du tarot commence quand on regarde comment les cartes dialoguent entre elles dans un même tirage.",
    body: [
      "Connaître la signification de chaque carte individuellement n'est qu'une première étape. La véritable finesse d'une lecture apparaît quand on observe comment les cartes d'un même tirage entrent en résonance les unes avec les autres, se renforcent ou se contredisent.",
      "Deux cartes d'énergie proche qui apparaissent ensemble, par exemple l'Étoile et le Soleil, tendent à confirmer et amplifier une même tendance positive. À l'inverse, deux cartes de tonalité opposée, comme le Chariot et la Maison-Dieu, racontent souvent une tension entre une volonté d'avancer et un événement qui vient bousculer cette trajectoire.",
      "Le nombre d'arcanes majeurs, la famille dominante parmi les arcanes mineurs, la répétition d'un même chiffre sur plusieurs cartes : autant de détails qui, une fois qu'on apprend à les repérer, enrichissent considérablement une lecture au-delà du sens isolé de chaque carte. C'est cette approche, par associations, que la section dédiée de l'application propose d'explorer carte par carte.",
    ],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}
