import { CardCombo } from "@/types/tarot";

// Associations de cartes : contenu Premium.
// Principe de lecture : la première carte de "cardIds" porte l'énergie dominante du tirage,
// celle qui donne le ton général ; la seconde vient la préciser, la nuancer ou l'éclairer.
// Ce principe, largement partagé chez les tarologues qui pratiquent la lecture combinée,
// est rappelé dans le champ "siOrdreInverse" pour chaque association : si les cartes sortent
// dans l'ordre inverse de celui indiqué ici, l'accent se déplace vers l'autre carte.
// Contenu rédigé pour l'application à partir d'une synthèse de connaissances générales sur les
// associations de cartes classiques, reformulée avec un style propre — aucun texte n'est copié
// d'un site ou d'un ouvrage existant.
export const combos: CardCombo[] = [
  {
    id: "combo-deuxcoupes-soleil",
    cardIds: ["cou-02", "maj-19"],
    title: "Deux de Coupes et Le Soleil",
    isFree: false,
    contexte:
      "Un lien à deux, sincère et réciproque, vient d'être éclairé par une joie franche : c'est l'une des associations les plus favorables du tarot pour tout ce qui touche au cœur.",
    general:
      "Cette association parle d'harmonie qui se confirme au grand jour. Ce qui se construisait discrètement entre deux personnes, ou dans un projet à deux, reçoit une validation claire et lumineuse. Peu d'ambiguïté ici : la confiance mutuelle et la bonne humeur dominent largement.",
    amour:
      "Une relation qui s'épanouit dans la sincérité et la complicité, sans jeu ni calcul. Ce duo annonce souvent un couple heureux, une réconciliation réussie, ou une nouvelle rencontre qui s'annonce sous les meilleurs auspices, avec un vrai respect mutuel en toile de fond.",
    travail:
      "Une association ou une collaboration qui fonctionne bien, portée par une entente naturelle entre les personnes impliquées. Bon présage pour un partenariat professionnel, un travail d'équipe ou une négociation menée dans un climat de confiance.",
    guidance:
      "Laissez cette relation ou ce projet s'épanouir sans trop chercher à le complexifier : ce qui est simple et sincère entre vous n'a pas besoin d'être davantage prouvé.",
    sentimentsDeLAutre:
      "La personne concernée ressent un attachement sincère et joyeux à votre égard, sans arrière-pensée. Elle se sent bien avec vous, en confiance, et associe probablement votre présence à un sentiment de légèreté et de bonheur simple.",
    siOrdreInverse:
      "Si Le Soleil sort en premier et le Deux de Coupes ensuite, l'accent se déplace : c'est d'abord une période de réussite et de confiance en soi generale qui se précise ensuite par une connexion affective particulière — la joie de vivre attire la bonne relation, plutôt que l'inverse.",
  },
  {
    id: "combo-lune-imperatrice",
    cardIds: ["maj-18", "maj-03"],
    title: "La Lune et L'Impératrice",
    isFree: false,
    contexte:
      "Une intuition encore floue, presque instinctive, rencontre une énergie nourricière et créative : ce duo parle d'une croissance intérieure qui se joue davantage dans le ressenti que dans la logique.",
    general:
      "Une période où les émotions et l'imagination sont particulièrement actives, mais où elles trouvent, grâce à la présence rassurante de l'Impératrice, un terrain fertile plutôt qu'anxiogène pour s'exprimer. Ce n'est pas le moment de tout rationaliser : quelque chose grandit doucement, sans qu'on en maîtrise encore tous les contours.",
    amour:
      "Un attachement profond mais encore un peu trouble, où l'on sent beaucoup de choses sans parvenir à les nommer précisément. Cette association évoque aussi une grossesse, un désir d'enfant, ou une relation qui se nourrit d'une sensualité et d'une intuition partagées plus que de longues discussions.",
    travail:
      "Un projet créatif encore en gestation, qui a besoin d'être protégé et nourri avant d'être exposé publiquement. Ce n'est pas encore le moment de tout dévoiler : laissez l'idée mûrir dans un cadre bienveillant.",
    guidance:
      "Faites confiance à ce que vous ressentez, même si vous ne pouvez pas encore tout expliquer clairement ; prenez soin de cette intuition comme on prend soin d'une graine qui pousse.",
    sentimentsDeLAutre:
      "Cette personne ressent quelque chose de fort et de sincère à votre égard, mais elle-même n'y voit pas encore totalement clair : un mélange de tendresse, d'attirance et d'incertitude émotionnelle qui ne demande qu'à se préciser avec le temps.",
    siOrdreInverse:
      "Si L'Impératrice sort en premier et La Lune ensuite, la dynamique change : une situation qui semblait généreuse et épanouie en apparence cache en réalité des zones d'ombre, des non-dits ou des émotions plus complexes qu'il ne faudrait pas balayer sous un vernis de douceur.",
  },
  {
    id: "combo-amoureux-ascoupes",
    cardIds: ["maj-06", "cou-01"],
    title: "L'Amoureux et l'As de Coupes",
    isFree: false,
    contexte:
      "Un choix de cœur rencontre une émotion neuve et sincère : cette association annonce souvent le tout début d'un attachement fort, où l'attirance et le sentiment naissant s'accordent parfaitement.",
    general:
      "Une attraction mutuelle qui ne demande qu'à s'exprimer pleinement. Ce duo marque un moment charnière où un choix affectif important s'accompagne d'une émotion sincère et débordante, sans calcul ni retenue.",
    amour:
      "Un très bon présage pour une déclaration, un premier rendez-vous réussi ou une relation qui démarre sur des bases sincères. Ce duo indique que le cœur et le choix conscient vont dans la même direction, ce qui est plutôt rare et précieux.",
    travail:
      "Un choix professionnel motivé par une réelle passion plutôt que par le seul calcul, ou une collaboration qui démarre avec un enthousiasme sincère et partagé.",
    guidance:
      "Laissez-vous porter par cet élan sincère : les conditions sont réunies pour que ce choix de cœur s'exprime sans crainte d'être mal reçu.",
    sentimentsDeLAutre:
      "La personne ressent une attirance sincère et un début d'attachement émotionnel réel ; elle est probablement en train de réaliser, elle aussi, qu'un choix se dessine en votre faveur, avec une émotion neuve qu'elle n'a pas encore totalement exprimée.",
    siOrdreInverse:
      "Si l'As de Coupes sort en premier et L'Amoureux ensuite, l'émotion précède la décision : un sentiment sincère est déjà là, et c'est ce sentiment qui va guider un choix conscient à venir, plutôt qu'un choix raisonné qui ouvrirait la porte à l'émotion.",
  },
  {
    id: "combo-diable-dixcoupes",
    cardIds: ["maj-15", "cou-10"],
    title: "Le Diable et le Dix de Coupes",
    isFree: false,
    contexte:
      "Un attachement teinté de dépendance se heurte au désir sincère d'un bonheur familial stable et durable : ce duo révèle souvent une tension entre ce qui attire fort et ce qui comblerait vraiment.",
    general:
      "Ce que l'on vit ou recherche avec intensité n'est pas nécessairement ce qui apporterait la paix durable que l'on souhaite au fond. Cette association invite à distinguer la passion qui enchaîne de l'harmonie qui construit réellement quelque chose de solide.",
    amour:
      "Une relation intense, parfois possessive, qui empêche d'accéder au bonheur familial stable dont on rêve pourtant sincèrement. Ce duo pousse à se demander si l'attachement actuel sert vraiment le projet de vie que l'on souhaite construire à long terme.",
    travail:
      "Une dépendance à une situation professionnelle, un salaire ou un statut, qui empêche d'aller vers un équilibre de vie plus satisfaisant et plus stable pour l'entourage proche.",
    guidance:
      "Interrogez honnêtement si ce qui vous retient sert réellement le bonheur durable que vous recherchez, ou s'il ne fait que le retarder.",
    sentimentsDeLAutre:
      "Cette personne ressent une attirance forte, presque compulsive, mais elle sait au fond d'elle-même que cette relation ne lui apporte pas la stabilité affective dont elle a réellement besoin ; un conflit intérieur qu'elle n'a pas encore résolu.",
    siOrdreInverse:
      "Si le Dix de Coupes sort en premier et Le Diable ensuite, un bonheur familial ou une stabilité déjà acquise se voit menacé par une tentation, une dépendance ou un attachement extérieur qui vient fragiliser un équilibre pourtant précieux.",
  },
  {
    id: "combo-troisepees-neufepees",
    cardIds: ["epe-03", "epe-09"],
    title: "Trois d'Épées et Neuf d'Épées",
    isFree: false,
    contexte:
      "Une blessure franche laisse place à des nuits agitées : ce duo, plus lourd que la moyenne, décrit un chagrin qui continue de tourner en boucle dans l'esprit bien après le choc initial.",
    general:
      "Une peine réelle, déjà vécue, continue de peser sur le mental sous forme de ruminations, d'inquiétudes ou de scénarios anxieux. Ce n'est pas une nouvelle blessure qui s'annonce, mais une ancienne qui n'a pas fini de cicatriser.",
    amour:
      "Une rupture ou une déception amoureuse qui continue de hanter les pensées, surtout la nuit. Ce duo suggère un besoin réel d'accompagnement pour tourner la page, plutôt qu'une simple question de temps.",
    travail:
      "Une déception professionnelle, un licenciement ou une critique dure, dont l'impact continue de générer du stress et de l'anxiété bien après les faits.",
    guidance:
      "Ne restez pas seul avec cette rumination : en parler à quelqu'un de confiance allège presque toujours ce type de poids mental.",
    sentimentsDeLAutre:
      "Cette personne porte encore une blessure liée à votre histoire commune, et cette blessure continue de la préoccuper, parfois plus qu'elle ne le laisse paraître ; ses pensées reviennent régulièrement sur ce qui s'est passé.",
    siOrdreInverse:
      "Si le Neuf d'Épées sort en premier et le Trois d'Épées ensuite, une période d'anxiété diffuse aboutit à une vérité douloureuse mais clarifiante : ce que l'on redoutait vaguement finit par se préciser, ce qui, curieusement, peut aussi soulager à terme.",
  },
  {
    id: "combo-reinebatons-soleil",
    cardIds: ["bat-13", "maj-19"],
    title: "Reine de Bâtons et Le Soleil",
    isFree: false,
    contexte:
      "Une confiance en soi rayonnante rencontre une réussite éclatante : ce duo décrit une personne, ou une énergie, qui attire naturellement la réussite parce qu'elle assume pleinement qui elle est.",
    general:
      "Cette association parle d'un magnétisme personnel assumé, qui porte ses fruits sans qu'il soit nécessaire de forcer les choses. La confiance authentique attire la lumière plutôt que de la rechercher activement.",
    amour:
      "Une attirance forte et sincère, portée par le charisme et l'indépendance de l'une des deux personnes. Ce duo évoque souvent une rencontre marquante avec quelqu'un de rayonnant, ou une relation où l'on se sent valorisé et vu tel que l'on est.",
    travail:
      "Un leadership naturel qui porte ses fruits publiquement, une reconnaissance méritée pour quelqu'un qui a su rester fidèle à sa propre énergie sans se conformer aux attentes des autres.",
    guidance:
      "Continuez d'assumer pleinement votre façon d'être : c'est précisément cette authenticité qui attire la réussite en ce moment.",
    sentimentsDeLAutre:
      "Cette personne est sincèrement admirative de votre énergie et de votre indépendance ; elle vous perçoit comme quelqu'un de rayonnant et de stimulant, et cette admiration s'accompagne d'une réelle attirance.",
    siOrdreInverse:
      "Si Le Soleil sort en premier et la Reine de Bâtons ensuite, une période déjà heureuse et réussie se voit renforcée par l'arrivée ou l'affirmation d'une personne indépendante et charismatique dans le tableau, qui vient amplifier cette dynamique positive.",
  },
  {
    id: "combo-cavaliercoupes-deuxcoupes",
    cardIds: ["cou-12", "cou-02"],
    title: "Cavalier de Coupes et Deux de Coupes",
    isFree: false,
    contexte:
      "Une proposition romantique sincère rencontre une réciprocité réelle : ce duo décrit une démarche affective qui, contrairement à d'autres élans plus fougueux, trouve un véritable écho chez l'autre.",
    general:
      "Un geste romantique, une déclaration ou une invitation faite avec sincérité aboutit à une connexion mutuelle authentique. Ce n'est pas un enthousiasme à sens unique : la réponse est réellement au rendez-vous.",
    amour:
      "Une déclaration ou une demande faite avec le cœur qui reçoit une réponse positive et sincère. Ce duo est particulièrement favorable pour une nouvelle relation qui démarre, ou pour un rapprochement suite à une période d'incertitude.",
    travail:
      "Une proposition de collaboration séduisante qui, après discussion, débouche sur un vrai partenariat équilibré et de confiance.",
    guidance:
      "Osez faire le premier pas avec sincérité : les conditions sont favorables pour que votre geste soit accueilli avec la même ouverture.",
    sentimentsDeLAutre:
      "Cette personne est sincèrement touchée par votre attention et se sent prête à s'engager émotionnellement en retour ; l'idée d'une relation réciproque avec vous ne lui fait pas peur, bien au contraire.",
    siOrdreInverse:
      "Si le Deux de Coupes sort en premier et le Cavalier de Coupes ensuite, une connexion déjà établie et équilibrée s'apprête à franchir une étape plus affirmée, avec une déclaration ou une initiative romantique qui vient concrétiser ce qui existait déjà en filigrane.",
  },
  {
    id: "combo-maisondieu-etoile",
    cardIds: ["maj-16", "maj-17"],
    title: "La Maison-Dieu et L'Étoile",
    isFree: false,
    contexte:
      "L'effondrement suivi de l'apaisement : ce couple raconte une crise qui, aussi violente soit-elle, ouvre la voie à une guérison sincère plutôt qu'à un chaos durable.",
    general:
      "Ce n'est pas un hasard si ces deux cartes se suivent souvent dans les tirages de transformation : ce qui semblait une perte se révèle être la condition d'une clarté et d'un espoir plus solides qu'avant. La chute n'était pas une punition mais un passage nécessaire.",
    amour:
      "Une rupture ou une révélation brutale qui bouleverse la relation ouvre, malgré la douleur initiale, la voie à une relation plus honnête, ou à une reconstruction personnelle plus sereine si la relation ne se poursuit pas.",
    travail:
      "Un changement professionnel soudain, difficile sur le moment, qui débouche sur une situation finalement plus alignée avec ce que l'on recherche vraiment.",
    guidance:
      "Ne vous accrochez pas à ce qui vient de s'effondrer : la clarté et l'apaisement qui suivent sont déjà en chemin, même s'ils demandent un peu de patience.",
    sentimentsDeLAutre:
      "Cette personne traverse ou vient de traverser une remise en question importante à votre sujet ; une fois la poussière retombée, ses sentiments envers vous devraient gagner en clarté et en sincérité.",
    siOrdreInverse:
      "Si L'Étoile sort en premier et La Maison-Dieu ensuite, un espoir ou une confiance encore fragile risque d'être mis à l'épreuve par un événement soudain — un signal à ne pas ignorer, sans pour autant céder au pessimisme.",
  },
  {
    id: "combo-mort-soleil",
    cardIds: ["maj-13", "maj-19"],
    title: "L'Arcane sans Nom et Le Soleil",
    isFree: false,
    contexte:
      "Une fin nécessaire débouche directement sur une période radieuse : cette association montre qu'un cycle achevé était la condition d'un bonheur plus sincère et plus immédiat qu'on ne l'imaginait.",
    general:
      "Ce qui semblait une perte se révèle être la condition d'un renouveau franc et lumineux. Ce duo rassure sur le fait qu'une fin, même difficile à traverser, ouvre rapidement sur quelque chose de meilleur.",
    amour:
      "La fin d'une relation ou d'une façon d'aimer devenue obsolète ouvre directement la voie à une période affective heureuse, parfois plus vite qu'on ne l'aurait imaginé.",
    travail:
      "La fin d'un poste, d'un projet ou d'une méthode de travail laisse rapidement place à une réussite ou une reconnaissance méritée dans ce qui suit.",
    guidance:
      "Ne redoutez pas cette fin : elle est directement suivie d'une période de joie et de clarté, à condition de la laisser vraiment se refermer.",
    sentimentsDeLAutre:
      "Cette personne est en train de tourner une page importante en ce qui vous concerne, et ce changement s'annonce positif : ce qui en ressortira sera plus franc, plus léger et plus sincère qu'avant.",
    siOrdreInverse:
      "Si Le Soleil sort en premier et L'Arcane sans Nom ensuite, une période heureuse touche à sa fin naturellement, non par accident mais parce qu'un cycle est simplement arrivé à son terme, pour laisser place à autre chose.",
  },
  {
    id: "combo-diable-amoureux",
    cardIds: ["maj-15", "maj-06"],
    title: "Le Diable et L'Amoureux",
    isFree: false,
    contexte:
      "Une attirance intense se heurte à un vrai choix à faire : ce duo interroge la part de désir libre et la part de dépendance dans ce que l'on ressent pour quelqu'un.",
    general:
      "Le désir est réel, sincère même, mais une part d'attachement ou de dépendance s'y mêle. Ce duo invite à distinguer ce qui relève du choix libre de ce qui relève du besoin de combler un manque.",
    amour:
      "Une relation où l'attirance physique et émotionnelle est indéniable, mais où un vrai choix reste à faire consciemment : est-ce que ce lien nourrit réellement, ou comble-t-il seulement un vide ?",
    travail:
      "Un choix professionnel motivé en partie par la passion, en partie par une dépendance financière ou un confort dont il est difficile de se détacher.",
    guidance:
      "Prenez le temps de démêler ce qui, dans cette attirance, relève d'un vrai choix libre et ce qui relève d'un attachement plus difficile à justifier.",
    sentimentsDeLAutre:
      "Cette personne ressent une attirance forte et sincère envers vous, mais elle est elle-même partagée entre ce désir et une forme de dépendance ou de peur qui l'empêche de choisir librement et clairement.",
    siOrdreInverse:
      "Si L'Amoureux sort en premier et Le Diable ensuite, un choix affectif conscient et assumé risque de se transformer en attachement plus difficile à gérer si l'on n'y prend pas garde : la vigilance reste de mise même après une belle décision.",
  },
  {
    id: "combo-dixbatons-quatredeniers",
    cardIds: ["bat-10", "den-04"],
    title: "Dix de Bâtons et Quatre de Deniers",
    isFree: false,
    contexte:
      "Une surcharge de responsabilités rencontre un besoin de tout contrôler : ce duo décrit un épuisement entretenu par la difficulté à lâcher prise ou à déléguer, même un peu.",
    general:
      "On porte plus que ce qui est raisonnable, souvent parce qu'on a du mal à faire confiance à quelqu'un d'autre pour partager la charge. Cette association pointe un besoin de sécurité qui, poussé trop loin, devient lui-même source d'épuisement.",
    amour:
      "Porter seul le poids du foyer ou de la relation, par peur de perdre le contrôle si l'on délègue une partie des responsabilités à l'autre.",
    travail:
      "Une surcharge de travail entretenue par une difficulté à déléguer ou à faire confiance à une équipe ; le stress s'accumule sans réelle nécessité.",
    guidance:
      "Identifiez ce que vous pouvez réellement partager ou déléguer : la sécurité que vous recherchez ne dépend pas de tout porter seul.",
    sentimentsDeLAutre:
      "Cette personne se sent débordée en ce moment, ce qui peut affecter la disponibilité émotionnelle qu'elle vous offre ; ce n'est pas un désintérêt envers vous, mais une saturation générale qu'il faut prendre en compte.",
    siOrdreInverse:
      "Si le Quatre de Deniers sort en premier et le Dix de Bâtons ensuite, un besoin légitime de sécurité et de stabilité se transforme progressivement en surcharge, parce que l'on accumule des responsabilités supplémentaires pour se rassurer davantage.",
  },
  {
    id: "combo-roideniers-troisdeniers",
    cardIds: ["den-14", "den-03"],
    title: "Roi de Deniers et Trois de Deniers",
    isFree: false,
    contexte:
      "Une réussite matérielle solide s'accompagne d'un vrai savoir-faire collectif : ce duo est l'une des associations les plus favorables pour tout ce qui touche à la carrière et à l'argent.",
    general:
      "Cette association décrit une réussite construite avec méthode, reconnue par les autres, et qui s'appuie sur un vrai travail d'équipe plutôt que sur un succès solitaire et fragile.",
    amour:
      "Une relation stable, construite comme un vrai projet à deux, où chacun apporte ses compétences et où la sécurité matérielle n'est jamais un sujet de tension.",
    travail:
      "Une réussite professionnelle solide et bien méritée, portée par une collaboration efficace ; excellent présage pour une promotion, un nouveau contrat ou la reconnaissance d'une expertise.",
    guidance:
      "Continuez à vous appuyer sur les compétences de ceux qui vous entourent : votre réussite sera d'autant plus solide qu'elle sera construite collectivement.",
    sentimentsDeLAutre:
      "Cette personne vous voit comme quelqu'un de fiable et de compétent, sur qui elle peut compter ; son estime pour vous est sincère et se construit sur des bases solides plutôt que sur un simple engouement passager.",
    siOrdreInverse:
      "Si le Trois de Deniers sort en premier et le Roi de Deniers ensuite, un travail d'équipe encore en cours de construction est en train de préparer une réussite personnelle plus large et plus durable, qui arrivera un peu plus tard.",
  },
  {
    id: "combo-cavalierepees-cinqepees",
    cardIds: ["epe-12", "epe-05"],
    title: "Cavalier d'Épées et Cinq d'Épées",
    isFree: false,
    contexte:
      "Une action précipitée débouche sur une victoire qui laisse un goût amer : ce duo met en garde contre les décisions prises trop vite, sans mesurer leur coût relationnel.",
    general:
      "Agir dans la précipitation, sans prendre le temps de la réflexion, mène ici à un résultat obtenu, certes, mais au prix de tensions ou de relations abîmées qui auraient pu être évitées.",
    amour:
      "Une dispute déclenchée par des mots trop vite lâchés, où l'on peut avoir raison sur le fond tout en abîmant la relation dans la façon de le dire.",
    travail:
      "Une décision professionnelle prise trop rapidement qui, si elle atteint son but immédiat, laisse des traces dans les relations avec les collègues ou les partenaires concernés.",
    guidance:
      "Avant d'agir dans l'urgence, demandez-vous si la victoire recherchée vaut vraiment le prix relationnel qu'elle pourrait coûter.",
    sentimentsDeLAutre:
      "Cette personne peut se sentir blessée par une parole ou une décision un peu trop abrupte de votre part ; ses sentiments ne sont pas nécessairement négatifs, mais une réparation ou une explication sincère serait bienvenue.",
    siOrdreInverse:
      "Si le Cinq d'Épées sort en premier et le Cavalier d'Épées ensuite, un conflit déjà entamé risque de s'envenimer davantage si l'on continue d'agir dans la précipitation plutôt que de chercher l'apaisement.",
  },
  {
    id: "combo-septdeniers-rouedefortune",
    cardIds: ["den-07", "maj-10"],
    title: "Sept de Deniers et La Roue de Fortune",
    isFree: false,
    contexte:
      "Une patience investie dans un projet de longue haleine rencontre un tournant favorable : ce duo annonce souvent qu'un effort soutenu est sur le point de porter ses fruits, parfois plus vite que prévu.",
    general:
      "Ce qui a été semé avec patience arrive à un moment charnière où les circonstances extérieures viennent enfin donner un coup d'accélérateur. Le travail de fond rencontre l'opportunité.",
    amour:
      "Une relation construite patiemment traverse un tournant favorable, une étape franchie, ou une opportunité de rapprochement qui arrive au bon moment.",
    travail:
      "Un investissement, un projet ou une formation menée avec patience trouve enfin l'occasion de porter ses fruits, souvent grâce à un concours de circonstances favorable.",
    guidance:
      "Restez attentif : après une longue période de patience, une occasion favorable pourrait se présenter rapidement, il faudra la saisir sans hésiter.",
    sentimentsDeLAutre:
      "Les sentiments de cette personne à votre égard, construits progressivement, sont sur le point d'évoluer suite à un événement ou une occasion qui va accélérer les choses entre vous.",
    siOrdreInverse:
      "Si La Roue de Fortune sort en premier et le Sept de Deniers ensuite, une occasion favorable inattendue demande à être consolidée par de la patience et un travail de fond, sous peine de retomber aussi vite qu'elle est arrivée.",
  },
  {
    id: "combo-reinecoupes-roiepees",
    cardIds: ["cou-13", "epe-14"],
    title: "Reine de Coupes et Roi d'Épées",
    isFree: false,
    contexte:
      "Une sensibilité intuitive rencontre une rigueur rationnelle : ce duo décrit une dynamique entre deux façons très différentes d'aborder une même situation, qui peuvent s'équilibrer ou s'opposer selon le contexte.",
    general:
      "Deux logiques bien différentes cohabitent : celle du cœur et de l'intuition, celle de la raison et de la structure. Cette association fonctionne bien quand les deux énergies se complètent, moins bien quand elles s'opposent frontalement.",
    amour:
      "Une relation entre deux tempéraments contrastés, l'un plus émotionnel, l'autre plus rationnel, qui peut être très complémentaire si chacun respecte la façon de fonctionner de l'autre, ou source d'incompréhension dans le cas contraire.",
    travail:
      "Une collaboration entre une approche intuitive et une approche méthodique, qui gagne à être valorisée plutôt qu'opposée : les deux visions se complètent souvent mieux qu'il n'y paraît.",
    guidance:
      "Ne cherchez pas à faire taire l'une des deux voix, l'émotionnelle ou la rationnelle : la meilleure décision se trouve probablement à leur croisement.",
    sentimentsDeLAutre:
      "Cette personne ressent quelque chose de sincère pour vous, mais elle a tendance à filtrer ses émotions par la raison avant de les exprimer ; ne prenez pas sa retenue apparente pour un désintérêt.",
    siOrdreInverse:
      "Si le Roi d'Épées sort en premier et la Reine de Coupes ensuite, une approche d'abord rationnelle et distante d'une situation commence à s'ouvrir à une dimension plus sensible et plus intuitive, ce qui est plutôt bon signe pour la suite.",
  },
  {
    id: "combo-pendu-huitepees",
    cardIds: ["maj-12", "epe-08"],
    title: "Le Pendu et le Huit d'Épées",
    isFree: false,
    contexte:
      "Une pause volontaire se transforme en sentiment de blocage : ce duo pointe le risque de confondre un temps d'arrêt utile avec une impasse qui, en réalité, n'existe que dans l'esprit.",
    general:
      "Ce qui devait être un temps de recul se transforme en un sentiment d'impuissance, souvent plus lié aux pensées qu'à la réalité extérieure. Cette association invite à vérifier si la situation est vraiment bloquée, ou si c'est la façon de la regarder qui l'est.",
    amour:
      "Une relation ou une situation sentimentale en pause qui commence à être vécue comme une impasse anxiogène plutôt que comme un temps utile de réflexion.",
    travail:
      "Un projet mis en attente qui commence à générer un sentiment de blocage disproportionné par rapport à la réalité de la situation.",
    guidance:
      "Prenez un peu de recul sur votre propre sentiment de blocage : les liens qui vous entravent sont souvent plus lâches que vous ne le croyez actuellement.",
    sentimentsDeLAutre:
      "Cette personne traverse une période où elle se sent elle-même bloquée ou indécise à votre sujet, davantage à cause de ses propres doutes intérieurs que d'un désintérêt réel envers vous.",
    siOrdreInverse:
      "Si le Huit d'Épées sort en premier et Le Pendu ensuite, un sentiment de blocage bien réel commence à s'apaiser grâce à un choix conscient de prendre du recul plutôt que de continuer à subir la situation.",
  },
  {
    id: "combo-neufdeniers-hermite",
    cardIds: ["den-09", "maj-09"],
    title: "Neuf de Deniers et L'Hermite",
    isFree: false,
    contexte:
      "Une indépendance matérielle confortable s'accompagne d'un vrai besoin de retrait et d'introspection : ce duo décrit une période d'autonomie assumée, choisie plus que subie.",
    general:
      "Cette association parle d'un bien-être construit en solitaire, où l'on n'a besoin de personne d'autre pour se sentir stable et satisfait. Le calme retrouvé sert autant à profiter de ce qui a été construit qu'à réfléchir à la suite.",
    amour:
      "Une période de célibat vécue sereinement, sans manque ni urgence, propice à mieux se connaître avant une éventuelle nouvelle rencontre.",
    travail:
      "Une stabilité financière construite en solo qui permet de prendre du recul sur ses choix professionnels sans pression extérieure.",
    guidance:
      "Profitez de cette indépendance pour réfléchir sereinement à ce que vous voulez vraiment pour la suite, sans vous sentir obligé de vous précipiter.",
    sentimentsDeLAutre:
      "Cette personne traverse actuellement une phase où elle privilégie son indépendance et son propre cheminement ; cela ne signifie pas qu'elle ne ressent rien pour vous, mais elle a besoin de ce temps pour elle avant de s'investir pleinement.",
    siOrdreInverse:
      "Si L'Hermite sort en premier et le Neuf de Deniers ensuite, une période d'introspection solitaire débouche sur un sentiment de satisfaction et de stabilité personnelle, comme une récompense méritée après ce temps de retrait.",
  },
  {
    id: "combo-valetcoupes-deuxcoupes",
    cardIds: ["cou-11", "cou-02"],
    title: "Valet de Coupes et Deux de Coupes",
    isFree: false,
    contexte:
      "Un message sincère et sensible ouvre la porte à une connexion réciproque : ce duo est particulièrement favorable pour une déclaration ou une nouvelle qui touche vraiment le cœur.",
    general:
      "Une communication émotionnelle sincère, portée par une vraie vulnérabilité, trouve un écho positif chez l'autre personne. Ce n'est pas un enthousiasme naïf : la réciprocité est bien réelle.",
    amour:
      "Un message, une déclaration ou un geste tendre qui touche sincèrement l'autre personne et ouvre la voie à une relation équilibrée et sincère.",
    travail:
      "Une proposition créative reçue avec un vrai intérêt, qui débouche sur une collaboration basée sur une entente sincère plutôt que sur un simple accord de façade.",
    guidance:
      "Exprimez ce que vous ressentez sans crainte : le moment est favorable pour que votre sincérité soit accueillie avec la même ouverture.",
    sentimentsDeLAutre:
      "Cette personne a été touchée par un geste ou une attention de votre part, et elle se montre sincèrement réceptive à l'idée de construire quelque chose d'équilibré avec vous.",
    siOrdreInverse:
      "Si le Deux de Coupes sort en premier et le Valet de Coupes ensuite, une connexion déjà établie s'apprête à recevoir une nouvelle tendre ou une confirmation sincère qui vient renforcer ce qui existe déjà entre vous.",
  },
  {
    id: "combo-cinqcoupes-sixcoupes",
    cardIds: ["cou-05", "cou-06"],
    title: "Cinq de Coupes et Six de Coupes",
    isFree: false,
    contexte:
      "Un chagrin encore présent se tourne vers des souvenirs plus doux : ce duo décrit un processus de deuil affectif qui commence à trouver un peu de réconfort dans la nostalgie plutôt que dans la seule tristesse.",
    general:
      "Une perte ou une déception continue de peser, mais le regard commence à se tourner vers des souvenirs plus tendres, signe que le processus de guérison est en marche, même s'il n'est pas terminé.",
    amour:
      "Une rupture encore douloureuse s'accompagne d'une nostalgie pour une relation passée, parfois une envie de renouer avec un amour de jeunesse ou de retrouver ce qui semblait plus simple avant.",
    travail:
      "Une déception professionnelle récente pousse à repenser avec tendresse à une période antérieure plus satisfaisante, ce qui peut aider à clarifier ce que l'on recherche vraiment pour la suite.",
    guidance:
      "Autorisez-vous cette nostalgie sans vous y enfermer : elle fait partie du chemin vers l'acceptation, mais elle ne doit pas devenir un refuge permanent.",
    sentimentsDeLAutre:
      "Cette personne pense encore à ce qui s'est passé entre vous, avec un mélange de regret et de tendresse ; le souvenir de moments simples et heureux pèse probablement plus lourd qu'elle ne le montre.",
    siOrdreInverse:
      "Si le Six de Coupes sort en premier et le Cinq de Coupes ensuite, une nostalgie apparemment douce cache en réalité une tristesse plus profonde qui n'a pas encore été pleinement reconnue ni traversée.",
  },
  {
    id: "combo-jugement-monde",
    cardIds: ["maj-20", "maj-21"],
    title: "Le Jugement et Le Monde",
    isFree: false,
    contexte:
      "Un bilan honnête et une prise de conscience débouchent directement sur un aboutissement complet : ce duo est l'une des associations les plus fortes du tarot pour marquer la fin réussie d'un grand cycle de vie.",
    general:
      "Une décision importante, prise après un vrai temps de réflexion, mène à un accomplissement pleinement satisfaisant. Ce duo marque souvent un tournant de vie majeur mené jusqu'à son terme avec succès.",
    amour:
      "Une décision affective assumée, prise en conscience, débouche sur une relation pleinement épanouie ou sur un cheminement personnel abouti qui rend disponible pour un amour sincère.",
    travail:
      "Une réorientation professionnelle mûrement réfléchie aboutit à une réussite complète et reconnue, souvent après plusieurs années d'efforts.",
    guidance:
      "Faites confiance à l'appel intérieur qui vous pousse à conclure ce cycle : l'aboutissement qui suit sera à la hauteur de la décision que vous prendrez.",
    sentimentsDeLAutre:
      "Cette personne est en train de faire, à votre sujet, un bilan sincère et déterminant qui devrait déboucher sur un engagement clair et abouti, dans un sens ou dans l'autre.",
    siOrdreInverse:
      "Si Le Monde sort en premier et Le Jugement ensuite, un cycle de vie déjà accompli invite à un nouveau bilan pour savoir comment poursuivre : la réussite obtenue appelle une nouvelle décision consciente pour la suite.",
  },
  {
    id: "combo-asdeniers-troisdeniers",
    cardIds: ["den-01", "den-03"],
    title: "As de Deniers et Trois de Deniers",
    isFree: false,
    contexte:
      "Une opportunité concrète rencontre rapidement une reconnaissance collective : ce duo est un très bon présage pour le lancement d'un projet professionnel ou l'arrivée d'une nouvelle opportunité de carrière.",
    general:
      "Une occasion matérielle qui se présente trouve rapidement un cadre collectif favorable pour se développer, avec le soutien ou la reconnaissance de personnes compétentes autour de soi.",
    amour:
      "Un projet de vie à deux qui démarre sur des bases concrètes et solides, avec le soutien de l'entourage proche.",
    travail:
      "Une offre d'emploi, un nouveau contrat ou une idée de projet trouve rapidement un écho favorable auprès de collaborateurs ou de partenaires compétents.",
    guidance:
      "Saisissez cette opportunité sans attendre : les conditions sont réunies pour qu'elle soit rapidement soutenue par les bonnes personnes.",
    sentimentsDeLAutre:
      "Cette personne voit en vous quelqu'un avec qui construire quelque chose de concret et de durable, et elle est prête à s'investir sérieusement à vos côtés.",
    siOrdreInverse:
      "Si le Trois de Deniers sort en premier et l'As de Deniers ensuite, une collaboration déjà en cours ouvre la voie à une nouvelle opportunité matérielle, comme la conséquence naturelle d'un travail d'équipe déjà bien engagé.",
  },
  {
    id: "combo-reinedeniers-dixcoupes",
    cardIds: ["den-13", "cou-10"],
    title: "Reine de Deniers et Dix de Coupes",
    isFree: false,
    contexte:
      "Un soin concret et généreux apporté aux siens débouche sur un vrai bonheur familial : ce duo compte parmi les associations les plus chaleureuses du tarot pour tout ce qui touche au foyer.",
    general:
      "Cette association décrit un équilibre de vie où l'attention portée au quotidien, aux gestes concrets et au bien-être matériel des proches se traduit directement par une harmonie familiale durable.",
    amour:
      "Une relation stable et généreuse, où les gestes concrets d'attention nourrissent un vrai bonheur partagé ; excellent présage pour un projet de vie commun ou une famille qui s'agrandit.",
    travail:
      "Un équilibre réussi entre vie professionnelle et vie de famille, où le sens pratique et l'organisation permettent de profiter pleinement des deux.",
    guidance:
      "Continuez à prendre soin des vôtres à travers des gestes simples et concrets : c'est exactement ce qui nourrit le bonheur durable que vous construisez.",
    sentimentsDeLAutre:
      "Cette personne vous perçoit comme quelqu'un de fiable et d'attentionné, avec qui elle se sent en sécurité ; ses sentiments s'inscrivent dans une vraie vision d'avenir plutôt que dans un engouement passager.",
    siOrdreInverse:
      "Si le Dix de Coupes sort en premier et la Reine de Deniers ensuite, un bonheur familial déjà présent s'appuie désormais sur une gestion concrète et posée du quotidien pour continuer à durer sereinement.",
  },
];

export function getComboForCards(
  cardIdFirst: string,
  cardIdSecond: string
): { combo: CardCombo; reversedOrder: boolean } | undefined {
  const exact = combos.find((c) => c.cardIds[0] === cardIdFirst && c.cardIds[1] === cardIdSecond);
  if (exact) return { combo: exact, reversedOrder: false };

  const inverted = combos.find((c) => c.cardIds[0] === cardIdSecond && c.cardIds[1] === cardIdFirst);
  if (inverted) return { combo: inverted, reversedOrder: true };

  return undefined;
}
