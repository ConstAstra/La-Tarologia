import { CardMeaning } from "@/types/tarot";
import { batons } from "./cards.batons";
import { coupes } from "./cards.coupes";
import { epees } from "./cards.epees";
import { deniers } from "./cards.deniers";

// Arcanes majeurs : les 22 grandes étapes du chemin symbolique du tarot.
// Contenu 100% rédigé pour cette application, sans reprise de texte de tiers.
const majorArcana: CardMeaning[] = [
  {
    id: "maj-00",
    number: 0,
    name: "Le Fou",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["élan", "liberté totale", "insouciance assumée", "seuil du possible"],
    keywordsReversed: ["imprudence", "fuite en avant", "absence de repères", "naïveté qui coûte cher"],
    uprightMeaning:
      "Le Fou ne calcule pas, il avance. Cette carte ne vous demande pas d'être raisonnable : elle vous somme de faire le premier pas avant d'avoir toutes les réponses. Un projet neuf, une rupture avec l'ancien schéma, une décision prise au ressenti plus qu'à la logique — peu importe le prétexte, l'énergie est la même : sauter, puis apprendre en marchant. Ne demandez pas de garanties à cette carte, elle n'en donne pas.",
    reversedMeaning:
      "À l'envers, l'élan devient de l'inconscience pure : vous partez sans regarder où vous mettez les pieds, vous dites oui pour ne pas réfléchir, vous fuyez une réalité que vous préférez ne pas nommer. Le Fou renversé ne vous punit pas — il vous avertit une seule fois : ce précipice existe vraiment.",
    love: "Un coup de foudre ou une envie de tout plaquer sur un coup de tête : grisant, mais seulement si une vraie conversation suit l'enthousiasme — sinon, ce n'est qu'une fuite déguisée en aventure.",
    travailArgent:
      "Le moment de vous lancer, changer de cap ou quitter un poste qui vous étouffait — à condition de ne pas confondre audace et improvisation totale.",
    conseil: "Sautez. Mais gardez les yeux ouverts en tombant : l'élan ne dispense pas de regarder où vous atterrissez.",
    symbolisme:
      "Le personnage marche au bord d'un précipice, un baluchon léger sur l'épaule, un chien à ses pieds : la route est déjà commencée, et pourtant tout reste possible.",
  },
  {
    id: "maj-01",
    number: 1,
    name: "Le Bateleur",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["initiative", "habileté", "passage à l'acte", "ressources à portée de main"],
    keywordsReversed: ["agitation stérile", "bluff", "manipulation", "moyens mal employés"],
    uprightMeaning:
      "Le Bateleur n'attend rien ni personne : il a ses outils sur la table, et il s'en sert, maintenant. Cette carte marque le moment précis où une idée cesse d'être une idée pour devenir un geste concret. Ce n'est pas une carte de préparation, c'est une carte d'exécution. Vous avez déjà ce qu'il faut.",
    reversedMeaning:
      "Renversé, il s'agite sans construire : de l'énergie dépensée pour l'illusion plutôt que pour le résultat, un bagout qui masque un manque de fond, ou pire, une tentation de manipuler plutôt que de convaincre honnêtement.",
    love: "Une déclaration franche, une initiative assumée sans attendre que l'autre fasse le premier pas ; le charme fonctionne, mais seulement s'il est sincère.",
    travailArgent:
      "Lancez le projet que vous repoussez depuis trop longtemps ; votre aisance à convaincre fera basculer une négociation en votre faveur.",
    conseil: "Arrêtez de peaufiner, commencez. La perfection n'existe pas avant l'action, seulement après plusieurs essais.",
    symbolisme:
      "Debout devant sa table couverte d'objets, un bras levé vers le ciel et l'autre vers le sol, il relie l'idée et l'action.",
  },
  {
    id: "maj-02",
    number: 2,
    name: "La Prêtresse",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["intuition", "retrait choisi", "savoir intérieur", "mystère assumé"],
    keywordsReversed: ["secrets mal digérés", "coupure avec soi", "rigidité mentale"],
    uprightMeaning:
      "La Prêtresse ne s'explique pas, et elle n'a pas à le faire. Elle sait des choses que la logique n'atteint pas encore, et elle vous demande une seule chose : cessez de vouloir tout comprendre avant d'agir. Certaines réponses ne viennent qu'en se taisant. Cette carte protège un savoir qui mûrit dans l'ombre — ne le forcez pas à sortir trop tôt.",
    reversedMeaning:
      "À l'envers, vous vous coupez de ce que vous savez déjà : vous rationalisez pour ne pas ressentir, vous gardez un secret qui finit par peser plus qu'il ne protège. Ce que vous fuyez ne disparaît pas, il attend simplement que vous cessiez de courir.",
    love: "Une relation non déclarée, un attrait que ni l'un ni l'autre n'ose nommer ; le silence en dit ici plus long que n'importe quel mot.",
    travailArgent:
      "Observez avant d'agir. Ce n'est ni le moment de vous positionner publiquement, ni celui de forcer une décision : la situation n'a pas encore livré tous ses éléments.",
    conseil: "Faites confiance à ce que vous sentez, même sans preuve. L'intuition n'a jamais eu besoin de votre validation pour avoir raison.",
    symbolisme:
      "Assise entre deux colonnes, un livre à demi ouvert sur les genoux, elle garde le seuil entre le visible et ce qui ne l'est pas encore.",
  },
  {
    id: "maj-03",
    number: 3,
    name: "L'Impératrice",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["abondance", "sensualité", "créativité fertile", "générosité naturelle"],
    keywordsReversed: ["surmenage", "dépendance affective", "création à l'arrêt"],
    uprightMeaning:
      "L'Impératrice ne demande pas la permission de s'épanouir. Ce que vous avez semé pousse, sans effort excessif, avec la générosité brute de la nature qui donne sans compter. C'est une carte de plaisir assumé, de création qui prend forme, de sensualité qui ne s'excuse de rien. Prenez ce qui vous est offert.",
    reversedMeaning:
      "Renversée, cette générosité se retourne contre vous : vous donnez plus que vous ne recevez, un projet créatif s'étiole faute de temps pour vous-même, votre corps réclame une attention que vous lui refusez depuis trop longtemps.",
    love: "Une relation sensuelle et nourrissante, parfois un désir de fonder un foyer qui se précise nettement ; l'envie de construire quelque chose de tangible, pas juste d'en parler.",
    travailArgent:
      "Une période fertile pour un projet créatif ou un investissement qui demande du temps pour mûrir ; ne récoltez pas avant l'heure.",
    conseil: "Prenez soin de ce que vous construisez sans vous oublier dans l'équation. Une créatrice épuisée ne crée plus rien.",
    symbolisme:
      "Assise dans un champ de blé mûr, entourée d'abondance végétale, elle incarne la nature qui donne sans compter.",
  },
  {
    id: "maj-04",
    number: 4,
    name: "L'Empereur",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["structure", "autorité assumée", "stabilité", "cadre protecteur"],
    keywordsReversed: ["rigidité", "autoritarisme", "besoin de tout contrôler"],
    uprightMeaning:
      "L'Empereur pose un cadre et s'y tient. Pas de zone grise, pas de règle à moitié appliquée : une structure qui tient parce que quelqu'un a décidé qu'elle tiendrait. Cette carte ne parle pas de pouvoir pour le plaisir du pouvoir, mais d'une autorité qui protège précisément parce qu'elle est ferme. Prenez position, clairement.",
    reversedMeaning:
      "À l'envers, la structure devient une prison : contrôle excessif, entêtement qui refuse toute remise en question, ou à l'inverse un vide total d'organisation où plus rien ne tient debout. Interrogez qui détient vraiment l'autorité ici, et si elle sert encore à quelque chose.",
    love: "Un partenaire stable et protecteur, ou au contraire trop directif : la relation a besoin de règles posées à deux, pas imposées par un seul.",
    travailArgent:
      "Le moment de poser un cadre, négocier des conditions solides, ou assumer une responsabilité que vous repoussiez.",
    conseil: "Structurez fermement ce qui en a besoin. La fermeté n'est pas de la rigidité tant qu'elle reste au service de quelque chose.",
    symbolisme:
      "Assis sur un trône de pierre orné de béliers, il tient un sceptre : la matière domptée par la volonté.",
  },
  {
    id: "maj-05",
    number: 5,
    name: "Le Pape",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["transmission", "tradition", "conseil avisé", "engagement formel"],
    keywordsReversed: ["dogmatisme", "conformisme forcé", "mauvais conseil suivi aveuglément"],
    uprightMeaning:
      "Le Pape transmet ce qui a fait ses preuves : un savoir, un cadre, une tradition qui donne du sens à ce que vous traversez seul depuis trop longtemps. Cette carte parle d'engagements qui se formalisent — mariage, contrat, formation — et d'un mentor dont l'expérience vaut la peine d'être écoutée, sans être avalée sans discernement.",
    reversedMeaning:
      "Renversé, il pointe un enseignement suivi sans jamais le questionner, une pression du groupe à vous conformer, ou un conseil qui ne vous correspond pas mais que vous suivez par habitude. Pensez par vous-même, même quand l'autorité s'y oppose.",
    love: "Une union qui se formalise, ou l'influence, parfois pesante, d'un tiers sur votre relation : famille, ami, tradition.",
    travailArgent:
      "Une formation, un mentorat ou une démarche administrative à mener avec sérieux, sans bâcler les détails qui comptent.",
    conseil: "Appuyez-vous sur l'expérience de qui sait déjà, sans jamais renoncer à votre propre jugement.",
    symbolisme:
      "Il bénit deux disciples agenouillés devant lui, dépositaire d'un savoir qui se transmet de génération en génération.",
  },
  {
    id: "maj-06",
    number: 6,
    name: "L'Amoureux",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["choix décisif", "alignement", "attirance franche", "cœur et raison réconciliés"],
    keywordsReversed: ["indécision qui traîne", "tentation", "désaccord intérieur"],
    uprightMeaning:
      "L'Amoureux ne vous demande pas d'être raisonnable, il vous demande d'être honnête. Un choix se présente, et il engage vraiment : suivre ce qui vous attire au fond, ou ce qui semble sûr sur le papier. Cette carte parle d'harmonie retrouvée entre le désir et la raison, mais seulement quand vous arrêtez de mentir sur ce que vous voulez réellement.",
    reversedMeaning:
      "À l'envers, l'hésitation s'éternise, un triangle relationnel s'installe, ou un choix se fait par peur plutôt que par désir. Tant que vous refusez de trancher, la situation décidera à votre place, et rarement en votre faveur.",
    love: "Une histoire marquante, un choix décisif, parfois un dilemme entre deux personnes ou deux vies possibles ; le flou n'est plus tenable.",
    travailArgent:
      "Une décision entre deux propositions : choisissez celle qui est réellement alignée avec vos valeurs, pas celle qui rassure le plus.",
    conseil: "Décidez avec un cœur informé par la raison, pas l'un contre l'autre, mais l'un éclairant l'autre.",
    symbolisme:
      "Un homme entre deux figures féminines, sous un ange qui veille : le choix humain reste libre, mais jamais totalement seul.",
  },
  {
    id: "maj-07",
    number: 7,
    name: "Le Chariot",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["victoire par la volonté", "détermination", "avancée maîtrisée", "deux forces domptées"],
    keywordsReversed: ["perte de contrôle", "obstination stérile", "épuisement"],
    uprightMeaning:
      "Le Chariot avance parce que son conducteur a dompté deux forces qui tirent en sens contraire, sans fouet, par la seule force de la volonté. C'est une carte de victoire obtenue par détermination pure, pas par chance : un obstacle franchi, un déplacement, un objectif atteint parce que vous avez refusé de lâcher.",
    reversedMeaning:
      "Renversé, le chariot part dans tous les sens : trop de fronts ouverts en même temps, une avancée forcée qui vous épuise, une victoire qui vous file entre les doigts faute de direction claire. Choisissez une seule bataille.",
    love: "Une relation qui avance vite, portée par une volonté commune forte ; attention à ne pas tirer chacun de votre côté sous prétexte d'avancer ensemble.",
    travailArgent:
      "Le moment de mener un projet jusqu'au bout sans dévier, de négocier fermement, ou d'entreprendre un déplacement décisif.",
    conseil: "Gardez le cap. Mais vérifiez d'abord que les deux forces qui vous animent tirent vraiment dans la même direction.",
    symbolisme:
      "Le conducteur tient les rênes de deux sphinx, l'un clair, l'un sombre, sans fouet : c'est par la volonté seule qu'il les fait avancer ensemble.",
  },
  {
    id: "maj-08",
    number: 8,
    name: "La Justice",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["équité", "vérité qui s'impose", "conséquence assumée", "décision lucide"],
    keywordsReversed: ["injustice", "déni", "décision biaisée"],
    uprightMeaning:
      "La Justice ne négocie pas avec les faits : chaque acte porte sa conséquence, et le moment est venu de la regarder en face. Une décision, un jugement, un règlement pris avec lucidité, où ce qui s'est réellement passé compte plus que ce que vous auriez préféré qu'il se passe.",
    reversedMeaning:
      "À l'envers, le déséquilibre s'installe : une décision partiale, une vérité que vous évitez soigneusement, un sentiment d'injustice qui demande réparation et non résignation. Une procédure traîne parce que quelqu'un refuse de trancher.",
    love: "Un rééquilibrage s'impose : qui donne, qui reçoit, et depuis combien de temps la balance penche du même côté.",
    travailArgent:
      "Contrat, procédure ou négociation où seules la rigueur et l'honnêteté feront la différence ; les raccourcis se paient toujours.",
    conseil: "Regardez la situation sans complaisance envers vous-même. La vérité dérange d'abord, elle répare ensuite.",
    symbolisme:
      "Assise entre deux colonnes, une balance dans une main, une épée droite dans l'autre : elle pèse avant de trancher.",
  },
  {
    id: "maj-09",
    number: 9,
    name: "L'Hermite",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["introspection", "sagesse silencieuse", "solitude choisie", "guidance intérieure"],
    keywordsReversed: ["isolement subi", "repli sur soi", "refus d'aide"],
    uprightMeaning:
      "L'Hermite tourne le dos au bruit, pas par misanthropie mais parce que sa propre voix ne s'entend qu'en silence. Cette carte exige un retrait, une solitude choisie, un temps de recul avant d'avancer à l'aveugle vers la prochaine étape. Elle peut aussi désigner un mentor dont la sagesse discrète vaut mieux qu'un conseil bruyant.",
    reversedMeaning:
      "Renversé, l'isolement pèse au lieu d'éclairer : vous refusez qu'on vous aide, ou vous gardez pour vous une sagesse qui gagnerait à être partagée. La solitude a cessé d'être un choix pour devenir un mur.",
    love: "Un besoin réel d'espace personnel, ou un célibat vécu non comme un manque mais comme un temps utile de recentrage sur vous-même.",
    travailArgent:
      "Un travail de fond, souvent solitaire, qui prépare une décision plutôt qu'il ne la précipite ; ne brûlez pas cette étape.",
    conseil: "Accordez-vous le temps de réfléchir seul avant de répondre. Une décision prise sous pression sociale est rarement la bonne.",
    symbolisme:
      "Une lanterne à la main, il marche lentement dans l'obscurité, éclairant juste assez de terrain pour le pas suivant.",
  },
  {
    id: "maj-10",
    number: 10,
    name: "La Roue de Fortune",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["tournant décisif", "cycle qui bascule", "chance objective", "mouvement inévitable"],
    keywordsReversed: ["résistance au changement", "contretemps en série", "malchance passagère"],
    uprightMeaning:
      "La Roue tourne, point final. Rien ne reste figé, et ce tournant qui s'annonce échappe largement à votre contrôle direct, que ce soit une chance inattendue ou la fin nette d'un cycle. Cette carte ne demande pas votre avis, elle vous informe : quelque chose bouge, préparez-vous à suivre le mouvement plutôt qu'à le combattre.",
    reversedMeaning:
      "À l'envers, vous résistez à un changement qui prolonge inutilement une phase difficile, ou vous traversez une série de contretemps. Ce n'est pas une fatalité définitive : la roue continue de tourner, y compris pour vous.",
    love: "Un changement de statut, une rencontre providentielle, ou une relation qui atteint un tournant décisif qu'il devient impossible d'ignorer.",
    travailArgent:
      "Une opportunité surgit sans prévenir, ou une situation professionnelle bascule : restez prêt à saisir ce qui passe, pas à l'attendre passivement.",
    conseil: "Cessez de lutter contre ce qui échappe à votre contrôle. Concentrez toute votre énergie sur ce que vous pouvez encore orienter.",
    symbolisme:
      "Une roue couverte de symboles tourne, portée par des figures mi-animales mi-humaines : le destin mêle hasard et évolution.",
  },
  {
    id: "maj-11",
    number: 11,
    name: "La Force",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["maîtrise douce", "courage tenace", "patience", "self-control réel"],
    keywordsReversed: ["colère mal contenue", "doute de soi", "épuisement nerveux"],
    uprightMeaning:
      "La Force ne s'impose jamais par les muscles. Elle dompte ce qui semblait indomptable — une peur, une colère, une situation qui vous dépasse — avec une douceur tenace qui use les résistances mieux que n'importe quelle confrontation. C'est un courage silencieux, et c'est précisément ce qui le rend inébranlable.",
    reversedMeaning:
      "Renversée, l'énergie déborde : une colère mal contenue, une émotion que vous ne parvenez plus à canaliser, ou à l'inverse un sentiment d'impuissance total face à une situation qui vous semble trop grande pour vous.",
    love: "Une relation qui a besoin de patience et de douceur plutôt que de rapports de force ; votre capacité à apaiser plutôt qu'à gagner fait toute la différence.",
    travailArgent:
      "Une situation difficile qui se résout par la persévérance calme, jamais par la confrontation frontale.",
    conseil: "Affrontez ce qui vous fait peur avec douceur et constance. Les coups de force ne dressent que des résistances plus solides.",
    symbolisme:
      "Une femme referme sans effort apparent la gueule d'un lion : la vraie maîtrise ne crie pas.",
  },
  {
    id: "maj-12",
    number: 12,
    name: "Le Pendu",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["pause choisie", "changement de perspective", "lâcher-prise actif", "attente qui construit"],
    keywordsReversed: ["blocage volontaire", "sacrifice inutile", "refus de voir autrement"],
    uprightMeaning:
      "Le Pendu n'a pas trébuché : il a choisi cette position. Suspendre l'action pour voir le monde autrement n'est pas un échec, même si tout, dans votre culture de la performance, vous pousse à le croire. Cette carte impose un temps mort, une attente, un renoncement provisoire qui ouvre une compréhension qu'aucune action pressée n'aurait révélée.",
    reversedMeaning:
      "À l'envers, le blocage se prolonge sans raison valable, un sacrifice se fait pour de mauvais motifs, ou vous refusez obstinément de changer d'angle alors que la situation le réclame à grands cris.",
    love: "Une pause dans la relation, parfois frustrante sur le moment, mais qui permet d'y voir enfin avec clarté ce qui se joue réellement.",
    travailArgent:
      "Un projet en stand-by, un délai à accepter sans le combattre : cette décision gagne à mûrir plutôt qu'à être précipitée.",
    conseil: "Ne forcez rien maintenant. Ce temps suspendu n'est pas perdu, il prépare la décision que vous ne pourriez pas encore prendre correctement.",
    symbolisme:
      "Suspendu par un pied, le visage serein, il regarde le monde à l'envers et y trouve une paix inattendue.",
  },
  {
    id: "maj-13",
    number: 13,
    name: "L'Arcane sans Nom",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["fin de cycle nette", "transformation", "renoncement nécessaire", "renaissance"],
    keywordsReversed: ["résistance au changement", "fin refusée", "stagnation douloureuse"],
    uprightMeaning:
      "Cette carte ne parle presque jamais de mort littérale, et c'est précisément pour cela qu'elle mérite d'être prise au sérieux : elle annonce la fin nette d'un cycle. Une relation, une habitude, une identité que vous portiez arrive à son terme. Cette fermeture, aussi rude soit-elle, dégage l'espace nécessaire à ce qui va suivre — rien ne pousse tant que l'ancien occupe toute la place.",
    reversedMeaning:
      "Renversée, elle montre une fin que vous refusez d'accepter : une situation maintenue artificiellement en vie, par peur du vide plus que par réel attachement, qui ne fait que prolonger une souffrance déjà entendue.",
    love: "La fin d'une relation ou d'une façon d'aimer devenue obsolète, douloureuse, mais elle ouvre la voie à quelque chose de plus juste que ce qui vient de se terminer.",
    travailArgent:
      "Un projet, un poste ou une méthode touche à sa fin. Ne vous y accrochez pas : préparer la suite vaut mieux que retarder l'inévitable.",
    conseil: "Laissez partir ce qui doit finir. S'y accrocher ne retarde qu'une chose : ce qui a besoin de cette place pour naître.",
    symbolisme:
      "Un squelette fauche un champ où repoussent déjà des mains et des têtes : la fin nourrit toujours un renouveau.",
  },
  {
    id: "maj-14",
    number: 14,
    name: "Tempérance",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["équilibre travaillé", "patience", "juste mesure", "réconciliation"],
    keywordsReversed: ["excès", "déséquilibre", "impatience destructrice"],
    uprightMeaning:
      "Tempérance verse d'un vase à l'autre sans en perdre une goutte : c'est l'art du dosage exact, la patience qui réconcilie deux éléments qui semblaient incompatibles. Après une période tendue, cette carte impose un apaisement qui ne doit rien au hasard, un travail d'équilibriste mené avec méthode.",
    reversedMeaning:
      "À l'envers, l'excès s'installe, dans un sens ou dans l'autre : une impatience qui fait déborder un équilibre encore fragile. Ralentissez avant que tout ne se renverse.",
    love: "Une relation qui trouve enfin son rythme, un compromis sain, une réconciliation méritée après une période de friction.",
    travailArgent:
      "Un projet qui avance mieux dosé que foncé tête baissée : c'est le bon moment pour négocier un compromis durable.",
    conseil: "Cherchez le juste milieu, même si la modération vous demande davantage de patience que l'extrême.",
    symbolisme:
      "Un pied sur terre, un pied dans l'eau, elle verse un liquide d'une coupe à l'autre en un geste continu et mesuré.",
  },
  {
    id: "maj-15",
    number: 15,
    name: "Le Diable",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["attachement", "tentation", "dépendance", "emprise à nommer"],
    keywordsReversed: ["prise de conscience", "libération", "rupture d'un lien toxique"],
    uprightMeaning:
      "Le Diable ne juge pas le désir, il pointe la chaîne. Un attachement qui enchaîne plus qu'il ne comble : une dépendance affective, une habitude installée, une pulsion, une relation d'emprise. Cette carte ne condamne rien, elle vous met simplement face à ce lien, souvent bien plus lâche que vous ne voulez l'admettre.",
    reversedMeaning:
      "Renversée, c'est presque toujours une bonne nouvelle : vous prenez conscience d'un lien toxique, et le détachement commence, même si le chemin vers la liberté demande encore du courage.",
    love: "Une attirance intense mais possessive, une relation d'emprise, une jalousie qu'il devient urgent d'interroger honnêtement plutôt que de justifier.",
    travailArgent:
      "Une dépendance financière, un poste qui use sans nourrir, une situation dont vous connaissez déjà les limites sans oser en sortir.",
    conseil: "Regardez lucidement ce qui vous retient. La chaîne est presque toujours plus facile à défaire que vous ne le croyez ; le vrai obstacle, c'est d'oser regarder.",
    symbolisme:
      "Deux personnages enchaînés à un piédestal où trône une figure cornue : leurs liens sont lâches, ils pourraient s'en défaire s'ils le décidaient.",
  },
  {
    id: "maj-16",
    number: 16,
    name: "La Maison-Dieu",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["rupture soudaine", "vérité qui éclate", "effondrement libérateur"],
    keywordsReversed: ["catastrophe évitée de justesse", "changement retardé", "crise intérieure qui couve"],
    uprightMeaning:
      "La Maison-Dieu fait tomber d'un coup ce qui reposait sur de mauvaises fondations. Un choc, une rupture, une vérité qui éclate sans prévenir, brutal sur le moment, mais cette chute évite un effondrement bien plus grave en libérant ce qui n'était de toute façon plus tenable.",
    reversedMeaning:
      "À l'envers, la crise couve sans encore éclater, ou un effondrement a été évité de justesse grâce à un changement engagé juste à temps. Le répit est réel, mais fragile.",
    love: "Une rupture brutale ou une révélation qui bouleverse la relation, mais qui la remet sur des bases enfin honnêtes.",
    travailArgent:
      "Un changement soudain, une perte ou une remise en cause imprévue d'une situation qui semblait pourtant stable ; elle ne l'était pas autant qu'il y paraissait.",
    conseil: "Ne vous accrochez pas à une structure qui craque déjà. Ce qui s'effondre laisse toujours place à quelque chose de plus solide, mais seulement si vous cessez de la retenir.",
    symbolisme:
      "La foudre frappe une tour et en fait tomber la couronne : ce qui était bâti sur l'orgueil ne résiste pas à la vérité.",
  },
  {
    id: "maj-17",
    number: 17,
    name: "L'Étoile",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["espoir sincère", "apaisement réel", "inspiration", "confiance retrouvée"],
    keywordsReversed: ["découragement passager", "perte de repères", "espoir fragilisé"],
    uprightMeaning:
      "Après l'orage de la Maison-Dieu, l'Étoile impose un apaisement sincère, pas un pansement provisoire. L'espoir revient sans naïveté, les idées se clarifient, et il redevient possible de croire en l'avenir sans se mentir. Cette carte ne promet rien de spectaculaire, elle promet quelque chose de plus rare : une guérison réelle.",
    reversedMeaning:
      "Renversée, l'espoir vacille, un découragement passager s'installe, ou vous vous êtes un peu perdu de vue. La lumière n'a pas disparu, elle est simplement voilée pour l'instant.",
    love: "Un climat de confiance et de sincérité s'installe, propice à se dévoiler sans craindre le jugement de l'autre.",
    travailArgent:
      "Un projet porteur de sens, une reconnaissance méritée, ou un regain de motivation franc après une période difficile.",
    conseil: "Laissez-vous inspirer et recroyez en ce que vous entreprenez ; sans forcer, la confiance se régénère d'elle-même.",
    symbolisme:
      "Agenouillée près d'un point d'eau, elle verse l'eau de deux cruches sous un ciel constellé d'étoiles : la confiance se régénère.",
  },
  {
    id: "maj-18",
    number: 18,
    name: "La Lune",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["intuition trouble", "illusion", "peurs enfouies", "zone d'ombre"],
    keywordsReversed: ["clarification progressive", "confusion qui se dissipe", "peur infondée révélée"],
    uprightMeaning:
      "La Lune n'éclaire jamais franchement : elle révèle des intuitions puissantes mais aussi des illusions, des peurs mal définies, une situation qui n'est pas encore nette. Rien n'est faux dans ce que vous ressentez, mais rien n'est totalement fiable non plus ; c'est précisément ce qui rend cette carte inconfortable.",
    reversedMeaning:
      "À l'envers, le brouillard commence enfin à se lever : une confusion se clarifie, une peur ancienne se révèle moins fondée qu'elle ne le semblait, une vérité cachée refait surface d'elle-même.",
    love: "Une relation marquée par le doute ou le non-dit, où votre intuition capte des choses que les mots ne disent pas encore ; écoutez-la, sans pour autant tout dramatiser.",
    travailArgent:
      "Une situation peu claire, des informations incomplètes : méfiez-vous de toute décision prise sur une première impression.",
    conseil: "Ne tranchez rien de définitif tant que la situation reste dans le flou. Le temps, ici, éclaircit ce que la précipitation ne ferait qu'embrouiller.",
    symbolisme:
      "Entre deux tours, un chien et un loup hurlent à la lune tandis qu'une écrevisse sort de l'eau : les instincts remontent des profondeurs.",
  },
  {
    id: "maj-19",
    number: 19,
    name: "Le Soleil",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["réussite franche", "joie sans détour", "clarté totale", "vitalité"],
    keywordsReversed: ["réussite retardée", "optimisme excessif", "besoin de recharge"],
    uprightMeaning:
      "Le Soleil ne laisse aucune place au doute, c'est l'une des cartes les plus favorables du tarot, sans nuance à chercher. Réussite, joie franche, clarté totale : ce qui se vit maintenant est vrai, chaleureux, sans calcul. Profitez-en pleinement, cette carte ne demande aucune prudence particulière.",
    reversedMeaning:
      "Renversé, il n'annonce jamais un malheur, seulement un éclat temporairement voilé : un succès qui tarde un peu, une fatigue à ne pas ignorer, un optimisme un peu trop confiant à tempérer légèrement.",
    love: "Une période lumineuse, une relation joyeuse et sincère, ou d'excellentes nouvelles du côté de la famille.",
    travailArgent:
      "Une réussite méritée, une reconnaissance publique, ou un projet qui aboutit porté par une belle énergie collective.",
    conseil: "Profitez pleinement de cette période favorable, et partagez cette énergie plutôt que de la garder pour vous seul.",
    symbolisme:
      "Un enfant nu chevauche un cheval blanc sous un grand soleil rayonnant : la vitalité pure, sans détour ni calcul.",
  },
  {
    id: "maj-20",
    number: 20,
    name: "Le Jugement",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["bilan honnête", "appel intérieur", "renaissance", "décision qui engage l'avenir"],
    keywordsReversed: ["autocritique excessive", "refus d'entendre l'appel", "occasion manquée"],
    uprightMeaning:
      "Le Jugement sonne comme un appel auquel il devient impossible de ne pas répondre. Un bilan s'impose, une vérité intérieure se réveille brutalement, une décision importante se dessine, et cette fois, vous ne pouvez plus faire semblant de ne pas l'entendre. C'est une renaissance qui suit toujours une prise de conscience, jamais l'inverse.",
    reversedMeaning:
      "À l'envers, l'auto-critique devient trop sévère, ou vous refusez d'entendre ce que la situation exige clairement : une occasion de changer passe sans être saisie, faute d'avoir écouté à temps.",
    love: "Un bilan honnête de la relation s'impose, avec parfois une décision claire à prendre pour son avenir ; plus de zone grise possible.",
    travailArgent:
      "Une évaluation, un retour attendu depuis longtemps, ou l'occasion de tirer un trait net sur une période professionnelle révolue.",
    conseil: "Écoutez l'appel intérieur qui vous pousse à changer, même s'il tombe à un moment que vous n'aviez pas choisi.",
    symbolisme:
      "Un ange sonne de la trompette et des silhouettes se relèvent de leur tombeau, les bras ouverts : l'appel réveille ce qui semblait endormi.",
  },
  {
    id: "maj-21",
    number: 21,
    name: "Le Monde",
    arcana: "majeur",
    suit: null,
    isFree: true,
    keywordsUpright: ["accomplissement réel", "aboutissement", "unité", "réussite complète"],
    keywordsReversed: ["accomplissement incomplet", "dernière étape qui traîne", "sentiment d'inachevé"],
    uprightMeaning:
      "Le Monde clôt le cycle des arcanes majeurs sans ambiguïté : c'est l'aboutissement, la boucle bouclée, un objectif réellement atteint au terme d'un vrai parcours, pas un lot de consolation. Cette carte annonce une réussite complète, un sentiment d'unité rare, et souvent déjà l'appel discret d'un cycle suivant, plus vaste encore.",
    reversedMeaning:
      "Renversé, l'aboutissement est proche sans être tout à fait atteint : il manque un dernier effort, un détail à régler, avant de pouvoir vraiment tourner la page.",
    love: "Une relation pleinement épanouie, ou l'aboutissement heureux d'un cheminement personnel qui vous rend enfin réellement disponible à l'amour.",
    travailArgent:
      "La réussite d'un projet mené jusqu'au bout, une reconnaissance méritée, la concrétisation d'un objectif que vous poursuiviez depuis longtemps.",
    conseil: "Savourez ce que vous avez accompli avant de vous relancer, l'esprit libre, vers le cycle suivant.",
    symbolisme:
      "Une figure danse dans une couronne végétale, entourée des quatre créatures des évangélistes : toutes les forces de l'existence réunies en un seul mouvement.",
  },
];

export const cards: CardMeaning[] = [...majorArcana, ...batons, ...coupes, ...epees, ...deniers];

export function getCardById(id: string): CardMeaning | undefined {
  return cards.find((c) => c.id === id);
}

export function getFreeCards(): CardMeaning[] {
  return cards.filter((c) => c.isFree);
}

export function drawRandomCards(count: number): { card: CardMeaning; reversed: boolean }[] {
  const pool = [...cards];
  const result: { card: CardMeaning; reversed: boolean }[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    const [card] = pool.splice(idx, 1);
    result.push({ card, reversed: Math.random() < 0.5 });
  }
  return result;
}
