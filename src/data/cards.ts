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
    keywordsUpright: ["spontanéité", "liberté", "saut dans l'inconnu", "insouciance"],
    keywordsReversed: ["imprudence", "dispersion", "manque de repères", "fuite"],
    uprightMeaning:
      "Le Fou ouvre la marche : c'est l'énergie du tout début, celle qui n'a encore rien à perdre. Il annonce un départ, une idée neuve ou une décision prise au feeling plus qu'au calcul. Cette carte invite à faire confiance à l'élan plutôt qu'à vouloir tout maîtriser à l'avance.",
    reversedMeaning:
      "À l'envers, cette légèreté devient de l'étourderie : on part sans préparer, on dit oui trop vite, on esquive une réalité qui demanderait d'être regardée en face. Le Fou renversé rappelle qu'un peu de recul évite bien des faux pas.",
    love: "Une rencontre imprévue ou une envie de tout recommencer sur un coup de tête ; à double tranchant si aucune conversation sérieuse n'a lieu derrière l'enthousiasme.",
    travailArgent:
      "Bonne carte pour se lancer, changer de voie ou lâcher un poste trop sûr ; à condition de garder un minimum de filet avant de sauter.",
    conseil: "Osez le premier pas, mais gardez un œil ouvert sur ce qu'il y a devant vous.",
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
    keywordsUpright: ["initiative", "habileté", "ressources", "premier pas concret"],
    keywordsReversed: ["dispersion", "bluff", "manipulation", "moyens mal employés"],
    uprightMeaning:
      "Le Bateleur a tout sur sa table : il ne lui manque qu'à s'en servir. Cette carte marque le moment où une intention devient un projet concret, où l'on rassemble ses outils et où l'on commence, même modestement. Elle parle de débrouillardise et de confiance en ses propres moyens.",
    reversedMeaning:
      "Renversé, il évoque l'agitation stérile : beaucoup de mouvement, peu de résultat, ou une tentation de jouer un tour à quelqu'un plutôt que de construire honnêtement. Peut aussi signaler un manque d'assurance qui empêche de démarrer.",
    love: "Le début d'une séduction assumée, une déclaration ou une initiative prise sans attendre que l'autre fasse le premier geste.",
    travailArgent:
      "Un projet personnel, une idée à concrétiser, une négociation où votre aisance à parler fera la différence.",
    conseil: "Vous avez déjà ce qu'il faut sous la main ; commencez avant de vouloir tout perfectionner.",
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
    keywordsUpright: ["intuition", "retrait", "savoir intérieur", "mystère"],
    keywordsReversed: ["secrets mal digérés", "coupure avec soi", "rigidité"],
    uprightMeaning:
      "La Prêtresse est la carte du savoir qui ne s'apprend pas dans les livres. Elle invite à ralentir, à écouter ce que l'on sent avant de vouloir tout expliquer, et à respecter une période où l'on n'a pas encore toutes les réponses. C'est une énergie de patience et d'observation.",
    reversedMeaning:
      "À l'envers, elle peut indiquer que l'on se coupe de son intuition à force de vouloir tout rationaliser, ou qu'un secret pèse plus qu'il n'éclaire. Une invitation à ne pas fuir ce que l'on ressent, même inconfortable.",
    love: "Une relation encore floue, non déclarée, ou qui se joue davantage dans le non-dit que dans les mots.",
    travailArgent:
      "Ce n'est pas le moment d'agir en force : observez la situation avant de vous positionner publiquement.",
    conseil: "Faites confiance à ce que vous ressentez, même si vous ne pouvez pas encore le justifier.",
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
    keywordsUpright: ["abondance", "fertilité", "douceur", "créativité"],
    keywordsReversed: ["surmenage", "dépendance affective", "stagnation d'un projet"],
    uprightMeaning:
      "L'Impératrice porte une énergie de croissance généreuse : ce qui a été semé commence à porter du fruit. Elle parle de créativité, de plaisir des sens et d'une capacité à prendre soin, de soi comme des autres, sans s'épuiser.",
    reversedMeaning:
      "Renversée, elle peut signaler un excès de sollicitude qui vide plus qu'il ne nourrit, ou un projet créatif mis de côté par manque de temps pour soi. Le corps ou les émotions réclament de l'attention.",
    love: "Une relation nourrissante, sensuelle, parfois un désir d'enfant ou de foyer qui se précise.",
    travailArgent:
      "Une période fertile pour un projet créatif ou un investissement qui demande du temps pour mûrir.",
    conseil: "Prenez soin de ce que vous construisez, mais sans oublier de prendre soin de vous.",
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
    keywordsUpright: ["structure", "autorité", "stabilité", "cadre"],
    keywordsReversed: ["rigidité", "autoritarisme", "besoin de contrôle"],
    uprightMeaning:
      "L'Empereur pose un cadre solide : des règles, une organisation, une autorité assumée pour que les choses tiennent debout dans la durée. C'est la carte de la structure qui protège plutôt que celle qui étouffe, quand elle est bien utilisée.",
    reversedMeaning:
      "À l'envers, le cadre devient une cage : contrôle excessif, entêtement, ou au contraire absence totale de structure qui laisse tout partir dans le vague. Interroge le rapport à l'autorité, la vôtre ou celle qu'on vous impose.",
    love: "Un partenaire protecteur et stable, ou au contraire trop directif ; la relation demande des règles claires posées à deux.",
    travailArgent:
      "Bon moment pour poser un cadre, négocier des conditions solides ou prendre des responsabilités.",
    conseil: "Structurez ce qui a besoin de l'être, sans transformer la fermeté en rigidité.",
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
    keywordsUpright: ["transmission", "tradition", "conseil", "engagement"],
    keywordsReversed: ["dogmatisme", "conformisme forcé", "mauvais conseil"],
    uprightMeaning:
      "Le Pape représente la transmission : ce que l'on apprend d'un mentor, d'une institution ou d'une tradition, et qui donne un sens partagé à ce que l'on vit. Il évoque aussi les engagements officiels, mariage, contrat, formation.",
    reversedMeaning:
      "Renversé, il peut pointer un enseignement suivi sans le questionner, une pression du groupe à se conformer, ou un conseil reçu qui ne vous convient pas vraiment. Invite à penser par vous-même.",
    love: "Une union qui se formalise, ou l'influence d'un tiers, famille, ami, sur la relation.",
    travailArgent:
      "Une formation, un mentorat ou une démarche administrative importante à mener avec sérieux.",
    conseil: "Appuyez-vous sur l'expérience de ceux qui savent, sans renoncer à votre propre jugement.",
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
    keywordsUpright: ["choix", "alignement", "attirance", "cœur"],
    keywordsReversed: ["indécision", "tentation", "désaccord intérieur"],
    uprightMeaning:
      "L'Amoureux est la carte du choix qui engage : suivre ce qui attire vraiment plutôt que ce qui est raisonnable sur le papier. Elle parle d'harmonie retrouvée entre le cœur et la tête, et souvent d'une relation ou d'une option qui compte particulièrement.",
    reversedMeaning:
      "À l'envers, elle montre une hésitation qui traîne, un triangle relationnel, ou un choix fait pour de mauvaises raisons, par peur plutôt que par désir. Demande d'y voir plus clair avant de trancher.",
    love: "Une histoire marquante, un choix amoureux décisif, parfois un dilemme entre deux personnes ou deux chemins de vie.",
    travailArgent:
      "Une décision à prendre entre deux propositions ; privilégiez celle qui est réellement alignée avec vos valeurs.",
    conseil: "Choisissez avec le cœur informé par la raison, pas l'un contre l'autre.",
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
    keywordsUpright: ["victoire", "détermination", "avancée", "maîtrise de deux forces"],
    keywordsReversed: ["perte de contrôle", "obstination stérile", "épuisement"],
    uprightMeaning:
      "Le Chariot avance parce que son conducteur a appris à faire tenir ensemble deux forces qui tirent en sens contraire. C'est la carte de la volonté qui triomphe d'un obstacle, d'un déménagement, d'un voyage ou d'une victoire obtenue par la détermination plus que par la chance.",
    reversedMeaning:
      "Renversé, le chariot part dans tous les sens : trop de fronts ouverts à la fois, une avancée forcée qui épuise, ou une victoire qui vous échappe faute de direction claire.",
    love: "Une relation qui avance vite, portée par une forte volonté commune ; attention à ne pas tirer chacun de son côté.",
    travailArgent:
      "Bon moment pour mener un projet jusqu'au bout, négocier fermement, ou entreprendre un déplacement lié au travail.",
    conseil: "Gardez le cap fixé, mais assurez-vous que les deux forces qui vous animent tirent dans la même direction.",
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
    keywordsUpright: ["équité", "vérité", "conséquence", "décision juste"],
    keywordsReversed: ["injustice", "déni", "décision biaisée"],
    uprightMeaning:
      "La Justice rappelle que chaque acte porte sa conséquence, tôt ou tard. Elle annonce une décision, un jugement ou un règlement pris avec lucidité, où les faits comptent plus que les émotions du moment. Une carte d'équilibre et d'honnêteté envers soi-même.",
    reversedMeaning:
      "À l'envers, elle signale un déséquilibre : décision partiale, vérité évitée, ou sentiment d'injustice qui appelle réparation. Peut aussi indiquer une procédure qui traîne.",
    love: "Un rééquilibrage nécessaire dans la relation, ou une clarification honnête sur ce que chacun donne et reçoit.",
    travailArgent:
      "Contrat, procédure ou négociation où la rigueur et l'honnêteté seront déterminantes.",
    conseil: "Regardez la situation sans complaisance envers vous-même : la vérité, même inconfortable, remet les choses en ordre.",
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
    keywordsUpright: ["introspection", "sagesse", "solitude choisie", "guidance intérieure"],
    keywordsReversed: ["isolement subi", "repli", "refus d'aide"],
    uprightMeaning:
      "L'Hermite s'éloigne du bruit pour mieux entendre sa propre voix. Cette carte marque un besoin de recul, de silence ou de solitude choisie, souvent pour faire le point avant une nouvelle étape. Elle peut aussi représenter un mentor ou une figure sage qui éclaire le chemin.",
    reversedMeaning:
      "Renversé, il évoque un isolement qui pèse plus qu'il n'éclaire, un refus d'être aidé, ou une sagesse gardée pour soi qui gagnerait à être partagée.",
    love: "Un besoin d'espace personnel dans la relation, ou une période de célibat vécue comme un temps utile de recentrage.",
    travailArgent:
      "Un travail de fond, souvent en solitaire, qui prépare une décision plus qu'il ne la précipite.",
    conseil: "Accordez-vous le temps de réfléchir seul avant de répondre ou de vous engager.",
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
    keywordsUpright: ["changement", "cycle", "tournant", "chance"],
    keywordsReversed: ["retournement de situation", "résistance au changement", "malchance passagère"],
    uprightMeaning:
      "La Roue tourne, et rien ne reste figé bien longtemps. Cette carte annonce un tournant, un changement de situation souvent hors de votre contrôle direct, qui peut être une chance inattendue ou simplement la fin d'un cycle et le début d'un autre.",
    reversedMeaning:
      "À l'envers, elle peut indiquer une résistance au changement qui prolonge une phase difficile, ou une série de contretemps qu'il faut traverser sans y voir une fatalité définitive : la roue continue de tourner.",
    love: "Un changement de statut, une rencontre au bon moment, ou une relation qui traverse un tournant décisif.",
    travailArgent:
      "Une opportunité qui se présente sans prévenir, ou une situation professionnelle qui bascule ; restez prêt à saisir ce qui passe.",
    conseil: "Acceptez ce qui échappe à votre contrôle et concentrez votre énergie sur ce que vous pouvez encore orienter.",
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
    keywordsUpright: ["maîtrise douce", "courage intérieur", "patience", "self-control"],
    keywordsReversed: ["colère mal contenue", "doute de soi", "épuisement nerveux"],
    uprightMeaning:
      "La Force ne s'impose pas par les muscles mais par la douceur tenace : dompter ses peurs, ses colères ou une situation difficile sans violence, avec une patience qui use les résistances. C'est un courage discret, mais profondément solide.",
    reversedMeaning:
      "Renversée, elle indique une énergie qui déborde, une colère ou une émotion qu'on peine à canaliser, ou au contraire un sentiment d'impuissance face à une situation qui semble trop grande.",
    love: "Une relation qui demande de la patience et de la douceur plutôt que des rapports de force ; capacité à apaiser les tensions.",
    travailArgent:
      "Une situation difficile qui se résout par la persévérance calme plutôt que par la confrontation directe.",
    conseil: "Affrontez ce qui vous fait peur avec douceur et constance plutôt qu'avec des coups de force.",
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
    keywordsUpright: ["pause", "changement de perspective", "lâcher-prise", "attente active"],
    keywordsReversed: ["blocage volontaire", "sacrifice inutile", "résistance à voir autrement"],
    uprightMeaning:
      "Le Pendu ne subit pas sa position, il l'a choisie : suspendre l'action pour voir le monde autrement. Cette carte invite à accepter un temps mort, une attente ou un renoncement temporaire qui, loin d'être un échec, ouvre une compréhension nouvelle.",
    reversedMeaning:
      "À l'envers, elle peut signaler un blocage prolongé sans raison, un sacrifice fait pour de mauvaises raisons, ou un refus obstiné de changer de point de vue alors que la situation le demande clairement.",
    love: "Une pause dans la relation, une attente parfois frustrante, mais qui permet de voir la situation avec plus de clarté.",
    travailArgent:
      "Un projet en stand-by, un délai à accepter, une décision qui gagne à mûrir plutôt qu'à être précipitée.",
    conseil: "Ne forcez rien pour le moment : ce temps suspendu prépare une meilleure décision.",
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
    keywordsUpright: ["fin de cycle", "transformation", "renoncement nécessaire", "renaissance"],
    keywordsReversed: ["résistance au changement", "fin refusée", "stagnation douloureuse"],
    uprightMeaning:
      "Souvent redoutée, cette carte parle rarement de mort littérale : elle annonce la fin claire d'un cycle, pour laisser place à autre chose. Une relation, une habitude ou une situation arrive à son terme, et cette fermeture, même difficile, est nécessaire pour avancer.",
    reversedMeaning:
      "Renversée, elle montre une fin que l'on refuse d'accepter, une situation maintenue artificiellement en vie alors qu'elle n'a plus de sens, ce qui prolonge inutilement la souffrance.",
    love: "La fin d'une relation ou d'une façon d'aimer devenue obsolète, qui ouvre la voie à quelque chose de plus juste.",
    travailArgent:
      "Un projet, un poste ou une méthode de travail qui touche à sa fin ; inutile de s'accrocher, mieux vaut préparer la suite.",
    conseil: "Laissez partir ce qui doit finir : s'accrocher retarde seulement ce qui va naître ensuite.",
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
    keywordsUpright: ["équilibre", "patience", "juste mesure", "réconciliation"],
    keywordsReversed: ["excès", "déséquilibre", "impatience"],
    uprightMeaning:
      "Tempérance mélange les liquides d'un vase à l'autre sans en perdre une goutte : c'est l'art du dosage juste, de la patience et de la réconciliation entre deux éléments qui semblaient incompatibles. Une carte d'apaisement après une période plus tendue.",
    reversedMeaning:
      "À l'envers, elle indique un excès, dans un sens ou dans l'autre, une impatience qui gâche un équilibre encore fragile, ou une situation qui demande de ralentir avant de tout faire déborder.",
    love: "Une relation qui trouve son rythme, un compromis sain, ou une réconciliation après une période de friction.",
    travailArgent:
      "Un projet qui avance mieux en dosant les efforts qu'en fonçant tête baissée ; bon moment pour négocier un compromis.",
    conseil: "Cherchez le juste milieu plutôt que l'extrême, même si la modération demande plus de patience.",
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
    keywordsUpright: ["attachement", "tentation", "dépendance", "pulsion"],
    keywordsReversed: ["prise de conscience", "libération", "rupture d'un lien toxique"],
    uprightMeaning:
      "Le Diable pointe un attachement qui enchaîne plus qu'il ne comble : une dépendance affective, une habitude, une pulsion ou une relation d'emprise. Il ne juge pas le désir, mais invite à voir la chaîne, souvent plus lâche qu'on ne le croit.",
    reversedMeaning:
      "Renversée, cette carte est souvent bonne nouvelle : elle marque la prise de conscience d'un lien toxique et le début d'un détachement, même si le chemin vers la liberté demande encore du courage.",
    love: "Une attirance intense mais possessive, une relation d'emprise, ou une jalousie à interroger honnêtement.",
    travailArgent:
      "Une dépendance financière, un poste qui use sans nourrir, ou une situation dont on connaît les limites sans oser en sortir.",
    conseil: "Regardez lucidement ce qui vous retient : la chaîne est souvent plus facile à défaire qu'elle n'y paraît.",
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
    keywordsReversed: ["catastrophe évitée de justesse", "changement retardé", "crise intérieure"],
    uprightMeaning:
      "La Maison-Dieu fait tomber d'un coup ce qui reposait sur de mauvaises fondations. C'est un choc, une rupture ou une vérité qui éclate soudainement, difficile à vivre sur le moment mais qui empêche une chute plus grave encore en libérant ce qui n'était plus tenable.",
    reversedMeaning:
      "À l'envers, elle peut indiquer une crise que l'on sent venir sans qu'elle éclate encore, ou un effondrement évité de justesse grâce à un changement fait à temps.",
    love: "Une rupture brutale ou une révélation qui bouleverse la relation, mais qui remet les choses sur des bases plus vraies.",
    travailArgent:
      "Un changement soudain, une perte ou une remise en cause imprévue d'une situation qui semblait pourtant stable.",
    conseil: "Ne vous accrochez pas à une structure qui craque : ce qui tombe laisse place à quelque chose de plus solide.",
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
    keywordsUpright: ["espoir", "apaisement", "inspiration", "confiance retrouvée"],
    keywordsReversed: ["découragement", "perte de repères", "espoir fragilisé"],
    uprightMeaning:
      "Après l'orage de la Maison-Dieu, l'Étoile apporte un apaisement sincère : l'espoir revient, les idées se clarifient, et il redevient possible de croire en l'avenir sans naïveté. C'est une carte de guérison douce et d'inspiration retrouvée.",
    reversedMeaning:
      "Renversée, elle signale un espoir qui vacille, un découragement passager ou un sentiment de s'être un peu perdu de vue ; la lumière est toujours là, simplement voilée pour le moment.",
    love: "Un climat de confiance et de sincérité qui s'installe, propice à se dévoiler sans crainte du jugement.",
    travailArgent:
      "Un projet porteur de sens, une reconnaissance méritée, ou simplement un regain de motivation après une période difficile.",
    conseil: "Laissez-vous inspirer et croyez de nouveau en ce que vous entreprenez, sans forcer les choses.",
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
    keywordsUpright: ["intuition trouble", "illusion", "peurs enfouies", "imaginaire"],
    keywordsReversed: ["clarification progressive", "confusion qui se dissipe", "peurs infondées révélées"],
    uprightMeaning:
      "La Lune éclaire d'une lumière incertaine : elle parle d'intuitions puissantes mais aussi d'illusions, de peurs mal définies ou d'une situation qui n'est pas encore tout à fait claire. Rien n'est faux, mais rien n'est totalement net non plus.",
    reversedMeaning:
      "À l'envers, le brouillard commence à se lever : une confusion se clarifie, une peur ancienne se révèle moins fondée qu'elle n'y paraissait, ou une vérité cachée refait doucement surface.",
    love: "Une relation marquée par le doute ou le non-dit, où l'intuition capte des choses que les mots ne disent pas encore.",
    travailArgent:
      "Une situation peu claire, des informations incomplètes ; méfiez-vous des décisions prises sur une première impression.",
    conseil: "Ne prenez pas de décision définitive tant que la situation reste dans le flou ; laissez le temps éclaircir les choses.",
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
    keywordsUpright: ["réussite", "joie franche", "clarté", "vitalité"],
    keywordsReversed: ["réussite retardée", "optimisme excessif", "besoin de recharge"],
    uprightMeaning:
      "Le Soleil ne laisse pas de place au doute : c'est l'une des cartes les plus favorables du tarot, associée à la réussite, la joie simple et une clarté qui dissipe tous les brouillards de la Lune. Ce qui se vit maintenant est franc, vrai, chaleureux.",
    reversedMeaning:
      "Renversé, il n'annonce pas un malheur mais un éclat temporairement voilé : succès qui tarde, fatigue à ne pas ignorer, ou un optimisme un peu trop confiant à tempérer légèrement.",
    love: "Une période lumineuse, une relation joyeuse et sincère, ou d'excellentes nouvelles familiales.",
    travailArgent:
      "Réussite méritée, reconnaissance publique, ou un projet qui aboutit avec une belle énergie collective.",
    conseil: "Profitez pleinement de cette période favorable et partagez cette énergie positive autour de vous.",
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
    keywordsUpright: ["bilan", "appel", "renaissance", "décision qui engage l'avenir"],
    keywordsReversed: ["autocritique excessive", "refus d'entendre l'appel", "occasion manquée"],
    uprightMeaning:
      "Le Jugement sonne comme un appel auquel il devient difficile de ne pas répondre : un bilan s'impose, une vérité intérieure se réveille, et une décision importante se dessine pour la suite. C'est une carte de renaissance après une prise de conscience.",
    reversedMeaning:
      "À l'envers, elle peut indiquer une auto-critique trop sévère, un refus d'entendre ce que la situation demande clairement, ou une occasion de changer qui passe sans être saisie.",
    love: "Un bilan honnête de la relation s'impose, avec parfois une décision claire à prendre pour l'avenir du couple.",
    travailArgent:
      "Une évaluation, un retour attendu depuis longtemps, ou l'occasion de tirer un trait sur une période professionnelle révolue.",
    conseil: "Écoutez l'appel intérieur qui vous pousse à changer, même s'il arrive à un moment inattendu.",
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
    keywordsUpright: ["accomplissement", "aboutissement", "unité", "réussite complète"],
    keywordsReversed: ["accomplissement incomplet", "dernière étape qui traîne", "sentiment d'inachevé"],
    uprightMeaning:
      "Le Monde clôt le cycle des arcanes majeurs : c'est l'aboutissement, la boucle bouclée, un objectif enfin atteint après un vrai parcours. Elle annonce une réussite complète, un sentiment d'unité et souvent l'ouverture vers un nouveau cycle, plus vaste encore.",
    reversedMeaning:
      "Renversé, il indique que l'aboutissement est proche sans être tout à fait atteint : il manque un dernier effort, un détail à régler, avant de pouvoir vraiment tourner la page.",
    love: "Une relation pleinement épanouie, ou l'aboutissement heureux d'un cheminement personnel qui rend disponible à l'amour.",
    travailArgent:
      "Réussite d'un projet mené de bout en bout, reconnaissance méritée, ou concrétisation d'un objectif de longue date.",
    conseil: "Savourez ce que vous avez accompli avant de vous lancer, l'esprit libre, vers le cycle suivant.",
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
