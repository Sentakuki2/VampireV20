
const DISCIPLINES = {
  alienation: {
    nom: "Aliénation",

    intro:
      "Discipline emblématique des Malkaviens, l'Aliénation permet d'altérer les émotions, les perceptions et la stabilité mentale des victimes.",
    pouvoirs: [
      {
        niveau: "•",
        nom: "Passion",

        description:
          "Le vampire amplifie ou atténue une émotion déjà présente chez sa cible.",

        systeme:
          "Jet conseillé : Charisme + Empathie. La durée dépend des réussites."
      },

      {
        niveau: "••",
        nom: "Hantise",

        description:
          "La victime subit des hallucinations ou perceptions troublantes affectant un ou plusieurs sens.",

        systeme:
          "Jet conseillé : Manipulation + Subterfuge après dépense de sang."
      },

      {
        niveau: "•••",
        nom: "Yeux du Chaos",

        description:
          "Le vampire perçoit des motifs cachés, des vérités dissimulées ou la nature profonde d'un individu.",

        systeme:
          "Jet conseillé : Perception + Occultisme."
      },

      {
        niveau: "••••",
        nom: "Voix de la Folie",

        description:
          "La voix du vampire déclenche panique, frénésie ou terreur incontrôlable.",

        systeme:
          "Jet conseillé : Manipulation + Empathie après dépense de sang."
      },

      {
        niveau: "•••••",
        nom: "Démence Absolue",

        description:
          "Le vampire plonge la victime dans une crise profonde de folie surnaturelle.",

        systeme:
          "Jet conseillé : Manipulation + Intimidation après dépense de sang."
      }
    ]
  },
  animalisme: {
    nom: "Animalisme",

    intro:
      "Discipline liée à la Bête intérieure, l’Animalisme permet de communiquer avec les animaux, de les influencer, puis d’agir sur la part instinctive des mortels et des créatures surnaturelles. Elle est particulièrement associée aux Gangrels, Nosferatus, Ravnos et Tzimisces.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Murmures de Fauve",
        description:
          "Le vampire établit un lien empathique avec un animal afin de communiquer avec lui ou de lui transmettre des ordres simples.",
        systeme:
          "Parler avec l’animal ne demande généralement pas de jet, mais donner un ordre nécessite Manipulation + Animaux. La difficulté dépend du type d’animal."
      },

      {
        niveau: "••",
        nom: "Appel",
        description:
          "Le vampire pousse un cri mystique imitant une espèce animale précise, attirant les représentants de cette espèce qui peuvent l’entendre.",
        systeme:
          "Jet conseillé : Charisme + Survie. Les réussites déterminent combien d’animaux répondent à l’appel."
      },

      {
        niveau: "•••",
        nom: "Dompter la Bête",
        description:
          "Le vampire apaise ou écrase la Bête intérieure d’un mortel ou d’un animal, plongeant la cible dans l’apathie, la peur ou une docilité surnaturelle.",
        systeme:
          "Jet conseillé : Manipulation + Intimidation ou Manipulation + Empathie. Il faut accumuler assez de réussites pour soumettre la volonté de la cible."
      },

      {
        niveau: "••••",
        nom: "Soumission de l’Esprit",
        description:
          "Le vampire projette sa conscience dans le corps d’un animal et en prend le contrôle, laissant son propre corps immobile.",
        systeme:
          "Jet conseillé : Manipulation + Animaux. Les réussites déterminent le degré de contrôle et les disciplines mentales utilisables pendant la possession."
      },

      {
        niveau: "•••••",
        nom: "Extraire la Bête",
        description:
          "Le vampire transfère sa frénésie ou sa Bête intérieure dans une autre créature visible, qui devient alors le réceptacle de cette rage surnaturelle.",
        systeme:
          "Jet conseillé : Manipulation + Maîtrise de soi. En cas d’échec, la frénésie empire ; en cas d’échec critique, les conséquences peuvent être graves."
      }
    ]
  },
  augure: {
    nom: "Augure",

    intro:
      "Discipline des perceptions surnaturelles, l’Augure aiguise les sens, révèle les auras, permet de lire les traces psychiques et peut projeter l’esprit hors du corps. Elle sert aussi à percer certaines formes d’invisibilité, d’illusions ou de dissimulation surnaturelle.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Intensification des Sens",
        description:
          "Le vampire amplifie ses sens, améliorant sa vue, son ouïe, son odorat, son goût et son toucher. Cette perception accrue peut aussi provoquer des intuitions ou flashs sensoriels.",
        systeme:
          "Ne demande généralement pas de jet. Peut réduire certaines difficultés de perception, aider à détecter des menaces ou à repérer ce qui est caché. Des stimuli violents peuvent saturer les sens."
      },

      {
        niveau: "••",
        nom: "Perception de l’Aura",
        description:
          "Le vampire observe l’aura d’une personne ou d’une créature, révélant émotions dominantes, nature surnaturelle ou changements subtils d’état intérieur.",
        systeme:
          "Jet conseillé : Perception + Empathie. Les réussites déterminent la précision de la lecture."
      },

      {
        niveau: "•••",
        nom: "Contact de l’Esprit",
        description:
          "En touchant un objet, le vampire lit les impressions psychiques laissées par ceux qui l’ont manipulé ou par les événements marquants liés à l’objet.",
        systeme:
          "Jet conseillé : Perception + Empathie. La difficulté dépend de l’ancienneté et de l’intensité émotionnelle de l’empreinte."
      },

      {
        niveau: "••••",
        nom: "Télépathie",
        description:
          "Le vampire projette sa conscience vers l’esprit d’une cible proche afin de communiquer mentalement ou de lire ses pensées.",
        systeme:
          "Jet conseillé : Intelligence + Subterfuge contre la Volonté de la cible. Les secrets profonds demandent davantage de réussites."
      },

      {
        niveau: "•••••",
        nom: "Projection Psychique",
        description:
          "Le vampire sépare sa conscience de son corps et voyage sous forme astrale, laissant son corps physique inerte.",
        systeme:
          "Dépense de Volonté puis jet conseillé : Perception + Occultisme. La difficulté dépend de la distance et de la complexité du voyage."
      }
    ]
  },
  celerite: {
    nom: "Célérité",

    intro:
      "La Célérité confère au vampire une vitesse et des réflexes surnaturels. Les utilisateurs de cette discipline peuvent agir bien plus vite que les mortels ou les autres vampires, donnant l’impression de se déplacer à une vitesse impossible à suivre du regard.",

    pouvoirs: [
      {
        niveau: "• à •••••",
        nom: "Vitesse Surnaturelle",

        description:
          "Le vampire agit avec une rapidité fulgurante, capable d’effectuer plusieurs actions physiques supplémentaires dans le même tour sans subir les pénalités habituelles des actions multiples.",

        systeme:
          "Le vampire dépense un point de sang pour gagner, au tour suivant, un nombre d’actions physiques supplémentaires égal à son score de Célérité."
      }
    ]
  },
  chimerie: {
    nom: "Chimérie",

    intro:
      "Discipline emblématique des Ravnos, la Chimérie permet de créer des illusions capables de tromper les sens, les perceptions et parfois même l’esprit des victimes. Les mirages créés peuvent sembler parfaitement réels, bien qu’ils ne possèdent généralement aucune véritable substance physique.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Ignis Fatuus",

        description:
          "Le vampire crée une illusion simple et immobile affectant un seul sens, comme une odeur, une image ou une sensation tactile.",

        systeme:
          "Coûte un point de Volonté. L’illusion persiste jusqu’à sa dissipation ou jusqu’à ce que le Ravnos s’en éloigne."
      },

      {
        niveau: "••",
        nom: "Fata Morgana",

        description:
          "Le vampire crée une illusion complexe affectant tous les sens, mais qui reste statique.",

        systeme:
          "Coûte un point de Volonté et un point de sang. L’illusion reste jusqu’à sa dissipation."
      },

      {
        niveau: "•••",
        nom: "Apparition",

        description:
          "Le vampire anime ses illusions, leur donnant mouvement et apparence de vie.",

        systeme:
          "Coûte un point de sang pour donner un mouvement contrôlé à une illusion existante."
      },

      {
        niveau: "••••",
        nom: "Permanence",

        description:
          "Les illusions persistent même lorsque leur créateur n’est plus présent ou ne les observe plus.",

        systeme:
          "Coûte un point de sang. L’illusion devient durable jusqu’à sa destruction."
      },

      {
        niveau: "•••••",
        nom: "Réalité Monstrueuse",

        description:
          "Le vampire projette directement des hallucinations dans l’esprit d’une victime, capables de provoquer douleurs, blessures ou terreur bien réelles pour elle.",

        systeme:
          "Coûte deux points de Volonté. Jet conseillé : Manipulation + Subterfuge contre la résistance mentale de la cible."
      }
    ]
  },
  daimonion: {
    nom: "Daimonion",

    intro:
      "Voie infernale liée aux Baalis, le Daimonion est autant une pratique occulte qu'une foi dévoyée. Ses adeptes y voient une communion avec des puissances démoniaques, utilisant rites, invocations et pactes pour obtenir pouvoir et corruption.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Sentir le Péché",
        description:
          "Le Baali perçoit les failles morales, les faiblesses spirituelles ou les ténèbres intérieures d'une cible.",
        systeme:
          "Jet conseillé : Perception + Subterfuge contre la résistance mentale de la cible. Peut aussi être utilisé sur soi pour faciliter les usages de Daimonion."
      },
      {
        niveau: "••",
        nom: "Converser avec les Démons",
        description:
          "Le Baali comprend et parle la langue infernale nécessaire aux rites, invocations et échanges avec les entités démoniaques.",
        systeme:
          "Permet de communiquer avec des démons ou fléaux. Les échanges complexes peuvent demander Intelligence + Occultisme."
      },
      {
        niveau: "•••",
        nom: "Convoquer un Quisling",
        description:
          "Le Baali invoque un démon mineur capable d'accomplir des tâches simples comme espionner, harceler ou servir.",
        systeme:
          "Jet conseillé : Astuce + Occultisme, difficulté élevée. Les réussites déterminent la puissance et l'intelligence de la créature."
      },
      {
        niveau: "••••",
        nom: "Convoquer Serviteur",
        description:
          "Le Baali peut appeler et tenter de lier un démon plus puissant, mais ces créatures ne sont pas forcément dociles.",
        systeme:
          "Rituel long. Jet conseillé : Astuce + Occultisme. Un échec critique peut attirer une entité hostile."
      },
      {
        niveau: "•••••",
        nom: "Convoquer Tentateur",
        description:
          "Le Baali invoque un démon nommé et dangereux, capable d'accomplir une tâche importante ou de servir de mentor infernal.",
        systeme:
          "Rituel très long avec sacrifice de sang. Jet conseillé : Astuce + Occultisme. Un échec critique peut avoir des conséquences catastrophiques."
      }
    ]
  },
  domination: {
    nom: "Domination",

    intro:
      "Discipline de contrôle mental et d’autorité surnaturelle, la Domination permet au vampire d’imposer sa volonté à une cible par le regard et la parole. Elle exige généralement que la victime comprenne l’ordre donné et ne fonctionne pas sur un vampire de Sang plus puissant.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Ordre",

        description:
          "Le vampire impose un ordre bref et immédiat à sa cible, généralement en un ou deux mots.",

        systeme:
          "Jet conseillé : Manipulation + Intimidation contre la Volonté permanente de la cible. L’ordre doit être clair et ne peut pas pousser directement la cible à se détruire."
      },

      {
        niveau: "••",
        nom: "Hypnotisme",

        description:
          "Le vampire implante une suggestion ou une idée dans le subconscient de la cible, qui pourra s’activer immédiatement ou plus tard selon les conditions établies.",

        systeme:
          "Jet conseillé : Manipulation + Commandement contre la Volonté permanente de la cible. Les réussites déterminent la force et la complexité de la suggestion."
      },

      {
        niveau: "•••",
        nom: "Esprit Distrait",

        description:
          "Le vampire altère, efface ou reconstruit les souvenirs d’une cible, depuis un simple oubli jusqu’à une réécriture plus profonde de la mémoire.",

        systeme:
          "Jet conseillé : Astuce + Subterfuge contre la Volonté de la cible. Les réussites déterminent l’ampleur des souvenirs pouvant être modifiés."
      },

      {
        niveau: "••••",
        nom: "Conditionnement",

        description:
          "Par une influence répétée, le vampire rend une cible mortelle de plus en plus soumise à sa volonté et résistante aux tentatives de contrôle d’autres vampires.",

        systeme:
          "Jet conseillé : Charisme + Commandement contre la Volonté permanente de la cible. C’est une action étendue demandant de nombreuses réussites sur une longue période."
      },

      {
        niveau: "•••••",
        nom: "Possession",

        description:
          "Le vampire écrase l’esprit d’un mortel et projette sa conscience dans son corps, qu’il utilise alors comme une enveloppe temporaire.",

        systeme:
          "Dépense de Volonté puis lutte mentale contre la cible. Une fois la Volonté temporaire de la cible brisée, un jet de Manipulation + Intimidation détermine le contrôle obtenu."
      }
    ]
  },
  force_d_ame: {
    nom: "Force d'âme",

    intro:
      "La Force d’âme représente la résistance surnaturelle du vampire. Cette discipline permet d’ignorer des blessures qui détruiraient un mortel et même de résister à certaines formes de dégâts aggravés comme le feu ou la lumière du soleil.",

    pouvoirs: [
      {
        niveau: "• à •••••",

        nom: "Résistance Surnaturelle",

        description:
          "Le vampire renforce sa capacité à encaisser les blessures, les armes et même certaines menaces mortelles pour les Damnés.",

        systeme:
          "Le score de Force d’âme s’ajoute aux jets d’absorption des dégâts normaux et peut également servir à absorber certains dégâts aggravés."
      }
    ]
  },
  necromancie: {
    nom: "Nécromancie",

    intro:
      "La Nécromancie est l'art vampirique de manipuler les morts, les fantômes et les énergies du monde des défunts.",

    sections: [

      {
        nom: "Branche du Sépulcre",

        pouvoirs: [
          {
            niveau: "•",
            nom: "Introspection",
            description:
              "Le nécromant voit les derniers instants d’un cadavre à travers ses yeux.",
            systeme:
              "Jet conseillé : Perception + Occultisme."
          },

          {
            niveau: "••",
            nom: "Invocation d’une âme",
            description:
              "Le vampire invoque un fantôme afin de communiquer avec lui.",
            systeme:
              "Jet conseillé : Perception + Occultisme."
          },

          {
            niveau: "•••",
            nom: "Contrainte d’une âme",
            description:
              "Le nécromant force un revenant à obéir à ses ordres.",
            systeme:
              "Jet conseillé : Manipulation + Occultisme."
          },

          {
            niveau: "••••",
            nom: "Hantise",
            description:
              "Le vampire lie un fantôme à un lieu ou un objet.",
            systeme:
              "Jet conseillé : Manipulation + Occultisme."
          },

          {
            niveau: "•••••",
            nom: "Tourment",
            description:
              "Le nécromant peut blesser directement les fantômes.",
            systeme:
              "Jet conseillé : Vigueur + Empathie."
          }
        ]
      },

      {
        nom: "Branche des Ossements",
         
        intro:
          "La Branche des Ossements manipule les cadavres et permet au nécromant d’animer les morts ou de rappeler temporairement des âmes dans le monde physique.",


        pouvoirs: [
          {
            niveau: "•",
            nom: "Spasmes",
            description:
              "Le vampire anime brièvement un cadavre.",
            systeme:
              "Jet conseillé : Dextérité + Occultisme."
          },

          {
            niveau: "••",
            nom: "Balais de l’Apprenti",
            description:
              "Le nécromant relève des cadavres pour accomplir des tâches simples.",
            systeme:
              "Jet conseillé : Astuce + Occultisme."
          },

          {
            niveau: "•••",
            nom: "Hordes Trébuchantes",
            description:
              "Le vampire anime des zombis capables d’attaquer.",
            systeme:
              "Jet conseillé : Astuce + Occultisme."
          },

          {
            niveau: "••••",
            nom: "Vol de l’Âme",
            description:
              "Le nécromant arrache temporairement l’âme d’un corps vivant.",
            systeme:
              "Jet de Volonté en opposition."
          },

          {
            niveau: "•••••",
            nom: "Possession Démoniaque",
            description:
              "Une âme ou un fantôme possède un cadavre récent.",
            systeme:
              "Jet de Volonté selon la cible."
          }
        ]
      },

      {
        nom: "Branche des Cendres",

        intro:
          "La Branche des Cendres permet d’interagir directement avec le monde des morts. Elle est considérée comme la plus dangereuse des voies de Nécromancie car elle expose le vampire aux revenants et aux dangers de l’Au-delà.",


        pouvoirs: [
          {
            niveau: "•",
            nom: "Perception au-delà du Voile",
            description:
              "Le vampire voit les fantômes et le monde des morts.",
            systeme:
              "Jet conseillé : Perception + Vigilance."
          },

          {
            niveau: "••",
            nom: "Langage des Trépassés",
            description:
              "Le vampire peut converser librement avec les morts.",
            systeme:
              "Jet conseillé : Perception + Occultisme."
          },

          {
            niveau: "•••",
            nom: "Main Morte",
            description:
              "Le vampire peut manipuler les objets et créatures fantomatiques.",
            systeme:
              "Jet conseillé : Astuce + Occultisme."
          },

          {
            niveau: "••••",
            nom: "Ex Nihilo",
            description:
              "Le vampire entre physiquement dans le monde des morts.",
            systeme:
              "Jet conseillé : Vigueur + Occultisme."
          },

          {
            niveau: "•••••",
            nom: "Maîtrise du Voile",
            description:
              "Le nécromant renforce ou affaiblit la frontière entre les morts et les vivants.",
            systeme:
              "Jet de Volonté."
          }
        ]
      },

      {
        nom: "Rituels",

        intro:
          "Les rituels de Nécromancie sont des pratiques occultes complexes permettant de produire des effets durables liés aux morts et au monde spirituel. Les rituels présentés ici ne sont que quelques exemples parmi une infinité de possibilités que le MJ peut autoriser ou créer.",


        pouvoirs: [
          {
            niveau: "",
            nom: "Appel des Morts Avides",
            description:
              "La cible entend les voix des morts.",
            systeme:
              "Rituel de niveau 1."
          },

          {
            niveau: "",
            nom: "Yeux de la Tombe",
            description:
              "La cible subit des visions de sa propre mort.",
            systeme:
              "Rituel de niveau 2."
          },

          {
            niveau: "",
            nom: "Rituel des Entraves Funestes",
            description:
              "Le nécromant crée un lien mystique avec un objet important pour un revenant.",
            systeme:
              "Rituel de niveau 3."
          },

          {
            niveau: "",
            nom: "Contact de Cadavre",
            description:
              "Transforme temporairement un vivant en cadavre ambulant.",
            systeme:
              "Rituel de niveau 4."
          },

          {
            niveau: "",
            nom: "Larcin Fantomatique",
            description:
              "Permet de ramener un objet du monde des morts.",
            systeme:
              "Rituel de niveau 5."
          }
        ]
      }
    ]
  },
 obeah: {
    nom: "Obéah",

    intro:
      "Discipline emblématique des salubriens, celle discipline permet de jauger et d'améliorer la santé d'un individu ce qui fait de ces utilisateurs des guérriseur, ceux qui dévelloppe cette discpline se voient dotés d'un troisieme oeil",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Sentir la vitalité",

        description:
          "le vampire sent la vitalité d'un sujet en le touchant et donc savoir combien de niveaux de santé il a ou qui lui reste mais aussi la nature et l'état de son sang",

        systeme:
          "Jet conseillé : jet de Perception + Empathie ( difficulté 7)"
      },

      {
        niveau: "••",
        nom: "Toucher Anesthésiant",

        description:
          "Ce pouvori bloque la douleur ou plonge dans un sommeil apaisant d'un simple toucher",

        systeme:
          "Jet conseillé :  Volonté ( difficulté 6 ou 8 si non consentant) + 1 point de sang"
      },

      {
        niveau: "•••",
        nom: "Corpore sano",

        description:
          "le salunien peux soigner les plaie et blessures ave cune imposition des mains",

        systeme:
          "chaque niveau de santé soigné demande un  point de sng et 1 tour, pour les blessure aggravé il doit  dépenser 2 point de sang"
      },

      {
        niveau: "••••",
        nom: "Veille du berger",

        description:
          "le vampire cree une barriere invisible pour protéger lui et ses allié",

        systeme:
          "coute 2 point de volonté pour cree une barriere invisible sur 3 metre de rayon autour du vampire qui empeche ceux a l'exterieur d'y rentrer."
      },

      {
        niveau: "•••••",
        nom: "mens sana",

        description:
          "Le vampire peut guérir la folie calmer les démons intérieur et apaiser les ames",

        systeme:
          "jet conseillé : 2 point de sang et  Intelligence + empathie ( difficulté 8)"
      }
    ]
  },
  obtenebration: {
    nom: "Obténébration",

    intro:
      "Discipline emblématique des Lasombras, l’Obténébration permet de manipuler les ténèbres et l’obscurité vivante. Certains pensent que ces ombres sont une extension de l’âme du vampire elle-même.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Jeu d’Ombres",

        description:
          "Le vampire manipule les ombres existantes, leur donnant des formes inquiétantes ou oppressantes capables d’effrayer et de gêner ses victimes.",

        systeme:
          "Coûte un point de sang. Les ombres peuvent gêner, masquer ou affaiblir une cible durant une scène."
      },

      {
        niveau: "••",
        nom: "Voile de la Nuit",

        description:
          "Le vampire crée un nuage de ténèbres surnaturelles qui engloutit lumière et sons, plongeant les victimes dans une obscurité totale.",

        systeme:
          "Jet conseillé : Manipulation + Occultisme (difficulté 7). Les victimes subissent de lourdes pénalités sensorielle et physiques."
      },

      {
        niveau: "•••",
        nom: "Bras des Abysses",

        description:
          "Des tentacules d’ombre surgissent des ténèbres pour saisir, immobiliser ou écraser les ennemis du vampire.",

        systeme:
          "Coûte un point de sang. Jet conseillé : Manipulation + Occultisme (difficulté 7). Le nombre de succès détermine le nombre de tentacules invoqués."
      },

      {
        niveau: "••••",
        nom: "Sombre Métamorphose",

        description:
          "Le Lasombra fusionne avec les ténèbres et prend une apparence démoniaque couverte d’ombres mouvantes et de tentacules.",

        systeme:
          "Coûte deux points de sang. Jet conseillé : Manipulation + Courage (difficulté 7). Le vampire gagne plusieurs avantages offensifs et terrifiants."
      },

      {
        niveau: "•••••",
        nom: "Forme Ténébreuse",

        description:
          "Le vampire devient une masse d’ombre vivante capable de se glisser partout et d’ignorer la plupart des attaques physiques.",

        systeme:
          "Coûte trois points de sang et demande plusieurs tours de transformation. Le vampire devient quasiment intangible mais reste vulnérable au feu et au soleil."
      }
    ]
  },
  occultation: {
    nom: "Occultation",

    intro:
      "L’Occultation permet au vampire d’échapper à l’attention des autres. Elle ne rend pas réellement invisible : elle pousse plutôt les témoins à ignorer sa présence, à détourner le regard ou à rationaliser son absence. À haut niveau, elle permet aussi de modifier l’apparence perçue ou de dissimuler un groupe.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Cape d’Ombre",

        description:
          "Le vampire se dissimule dans les ombres ou derrière un couvert, devenant presque impossible à remarquer tant qu’il reste immobile et silencieux.",

        systeme:
          "Aucun jet si les conditions sont réunies : obscurité, immobilité, silence et absence d’éclairage direct."
      },

      {
        niveau: "••",
        nom: "Présence Invisible",

        description:
          "Le vampire peut se déplacer sans être vu, les témoins détournant inconsciemment leur attention de lui.",

        systeme:
          "Aucun jet en temps normal. Un jet d’Astuce + Furtivité peut être demandé si le vampire parle, fait du bruit ou risque de révéler sa présence."
      },

      {
        niveau: "•••",
        nom: "Masque aux Mille Visages",

        description:
          "Le vampire modifie la perception que les autres ont de lui, apparaissant sous une autre identité ou avec un visage différent.",

        systeme:
          "Jet conseillé : Manipulation + Représentation. Les réussites déterminent la qualité et la crédibilité du déguisement."
      },

      {
        niveau: "••••",
        nom: "Disparition aux Yeux de l’Esprit",

        description:
          "Le vampire disparaît directement du champ de perception des témoins, même s’ils le regardaient déjà.",

        systeme:
          "Jet conseillé : Charisme + Furtivité contre la vigilance de la cible ou du groupe. Avec assez de réussites, le vampire devient totalement invisible à l’esprit des témoins."
      },

      {
        niveau: "•••••",
        nom: "Occultation de Groupe",

        description:
          "Le vampire étend ses pouvoirs de dissimulation à plusieurs personnes proches de lui.",

        systeme:
          "Permet de cacher une personne supplémentaire par point de Furtivité. Le groupe bénéficie du pouvoir d’Occultation choisi tant que chacun respecte ses conditions."
      }
    ]
  },
  presence: {
    nom: "Présence",

    intro:
      "La Présence est la discipline du charisme surnaturel et de l’influence émotionnelle. Elle permet au vampire d’inspirer fascination, peur, admiration ou dévotion chez ceux qui l’entourent.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Révérence",

        description:
          "Le vampire dégage une aura magnétique irrésistible qui pousse les autres à l’écouter, l’admirer ou vouloir rester proches de lui.",

        systeme:
          "Jet conseillé : Charisme + Représentation (difficulté 7). Le nombre de succès détermine combien de personnes sont affectées."
      },

      {
        niveau: "••",
        nom: "Regard Terrifiant",

        description:
          "Le vampire projette une terreur surnaturelle capable de briser le courage de ses victimes et de provoquer la fuite ou la paralysie.",

        systeme:
          "Jet conseillé : Charisme + Intimidation (difficulté 8). Les succès augmentent l’intensité de la peur."
      },

      {
        niveau: "•••",
        nom: "Transe",

        description:
          "La cible développe une dévotion émotionnelle intense envers le vampire et cherche naturellement à lui plaire ou à le servir.",

        systeme:
          "Jet conseillé : Apparence + Empathie contre la Volonté permanente de la cible. Les succès déterminent la durée de la Transe."
      },

      {
        niveau: "••••",
        nom: "Invocation",

        description:
          "Le vampire appelle à lui une personne qu’il connaît. La cible ressent un besoin irrésistible de rejoindre le vampire.",

        systeme:
          "Jet conseillé : Charisme + Subterfuge. Les succès déterminent la rapidité et l’intensité de la réponse."
      },

      {
        niveau: "•••••",
        nom: "Majesté",

        description:
          "Le vampire devient une incarnation vivante de l’autorité surnaturelle, inspirant admiration, terreur et soumission chez ceux qui le contemplent.",

        systeme:
          "Coûte un point de Volonté. Les personnes souhaitant s’opposer au vampire doivent réussir un jet de Courage."
      }
    ]
  },
  proteisme: {
    nom: "Protéisme",

    intro:
      "Discipline emblématique des Gangrels, le Protéisme permet au vampire de modifier sa propre forme physique : yeux surnaturels, griffes bestiales, fusion avec la terre, transformation animale ou corps de brume.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Yeux de la Bête",

        description:
          "Le vampire voit parfaitement dans l’obscurité totale. Ses yeux prennent une apparence rougeoyante et animale.",

        systeme:
          "Aucun jet. La transformation demande un tour complet. Les yeux visibles peuvent gêner les interactions sociales avec les mortels."
      },

      {
        niveau: "••",
        nom: "Griffes de Fauve",

        description:
          "Les ongles du vampire deviennent de longues griffes animales capables de déchirer la chair et même de blesser gravement les créatures surnaturelles.",

        systeme:
          "Coûte un point de sang et demande un tour complet. Les griffes infligent Force +1 dégâts aggravés et facilitent l’escalade."
      },

      {
        niveau: "•••",
        nom: "Fusion avec la Terre",

        description:
          "Le vampire s’enfonce dans la terre nue et fusionne avec elle, se mettant à l’abri du soleil et des dangers physiques ordinaires.",

        systeme:
          "Coûte un point de sang. Aucun jet. Le vampire entre dans un état proche de la torpeur et devient difficile à détecter."
      },

      {
        niveau: "••••",
        nom: "Forme de la Bête",

        description:
          "Le vampire prend la forme d’un animal, généralement un loup ou une chauve-souris, tout en conservant sa conscience et une partie de ses pouvoirs.",

        systeme:
          "Coûte un point de sang. La transformation prend plusieurs tours, réduits par dépense de sang supplémentaire. Chaque forme donne des capacités animales spécifiques."
      },

      {
        niveau: "•••••",
        nom: "Corps de Brume",

        description:
          "Le vampire se transforme en nuage de brume, capable de passer par les plus petites ouvertures et d’échapper aux attaques physiques normales.",

        systeme:
          "Coûte un point de sang. La transformation prend plusieurs tours. Le vampire devient immunisé aux attaques physiques ordinaires mais reste vulnérable aux effets surnaturels, au feu et au soleil."
      }
    ]
  },
  puissance: {
    nom: "Puissance",

    intro:
      "La Puissance confère une force physique surnaturelle aux vampires. Les utilisateurs de cette discipline peuvent briser des murs, lancer des objets massifs ou infliger des dégâts terrifiants à mains nues.",

    pouvoirs: [
      {
        niveau: "• à •••••",
        nom: "Force Surnaturelle",

        description:
          "Chaque niveau de Puissance augmente considérablement la force physique du vampire. Même un faible niveau permet déjà des exploits impossibles pour un humain.",

        systeme:
          "Chaque point de Puissance ajoute un succès automatique à tous les jets impliquant la Force. En combat au corps-à-corps, ces succès s’ajoutent également aux dégâts."
      }
    ]
  },
  quietus: {
    nom: "Quietus",

    intro:
      "Discipline secrète des Assamites, le Quietus transforme le sang du vampire en arme mortelle. Poison, silence surnaturel et destruction interne en font une discipline d’assassinat redoutée.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Silence de la Mort",

        description:
          "L’Assamite crée une zone de silence surnaturel autour de lui, empêchant tout bruit de s’échapper.",

        systeme:
          "Coûte un point de sang. Une zone de silence d’environ 6 mètres entoure le vampire pendant une heure."
      },

      {
        niveau: "••",
        nom: "Venin du Scorpion",

        description:
          "Le vampire transforme son sang en poison affaiblissant capable de réduire la vigueur de ses victimes.",

        systeme:
          "Le sang empoisonné est appliqué par contact, arme ou projection. La cible perd temporairement ou définitivement des points de vigueur selon les succès obtenus."
      },

      {
        niveau: "•••",
        nom: "Appel de Dagon",

        description:
          "Après avoir touché sa cible, l’Assamite peut faire exploser ses vaisseaux sanguins à distance, provoquant une lente agonie interne.",

        systeme:
          "Coûte un point de volonté. Jet opposé de vigueur. Inflige des dégâts létaux tant que le vampire continue d’alimenter le pouvoir."
      },

      {
        niveau: "••••",
        nom: "Caresse de Baal",

        description:
          "Le sang de l’Assamite devient un acide surnaturel capable d’infliger des blessures aggravées.",

        systeme:
          "Chaque attaque avec une arme enduite de ce sang inflige des dégâts aggravés. Chaque coup consomme un point de sang."
      },

      {
        niveau: "•••••",
        nom: "Goût de la Mort",

        description:
          "Le vampire projette son sang corrosif sur ses ennemis, brûlant chair et os.",

        systeme:
          "Jet de Vigueur + Athlétisme pour toucher. Chaque point de sang utilisé inflige des dégâts aggravés à la cible."
      }
    ]
  },
  serpentis: {
    nom: "Serpentis",

    intro:
      "Discipline mystique des Disciples de Seth, le Serpentis représente le pouvoir sacré du serpent : hypnose, mutation reptilienne et corruption surnaturelle.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Yeux du Serpent",

        description:
          "Le regard du Séthite devient hypnotique et reptilien. Les mortels croisant ses yeux restent paralysés sous l’emprise du serpent.",

        systeme:
          "Aucun jet contre les mortels. Les créatures surnaturelles nécessitent un jet de volonté difficulté 9 pour résister."
      },

      {
        niveau: "••",
        nom: "Langue de Vipère",

        description:
          "La langue du vampire devient longue, fourchue et dangereuse, capable de blesser ou de se nourrir à distance.",

        systeme:
          "La langue inflige des dégâts aggravés et permet de boire le sang d’une cible blessée. Elle aide également à percevoir les vibrations dans l’obscurité."
      },

      {
        niveau: "•••",
        nom: "Peau de l’Aspic",

        description:
          "Le vampire développe une peau écailleuse et surnaturellement résistante, tout en devenant plus souple et reptilien.",

        systeme:
          "Coûte un point de sang et un point de volonté. Réduit la difficulté des jets d’absorption et améliore la morsure du vampire."
      },

      {
        niveau: "••••",
        nom: "Forme du Cobra",

        description:
          "Le Séthite prend la forme d’un immense cobra noir doté d’un venin mortel et d’une grande mobilité.",

        systeme:
          "Coûte un point de sang. La transformation prend plusieurs tours. La morsure devient particulièrement dangereuse, surtout contre les mortels."
      },

      {
        niveau: "•••••",
        nom: "Cœur des Ténèbres",

        description:
          "Le vampire retire son propre cœur de sa poitrine et le cache afin de se protéger contre certaines faiblesses vampiriques.",

        systeme:
          "Le Séthite devient plus résistant à la frénésie et ne peut plus être immobilisé par un pieu dans le torse. Détruire son cœur entraîne cependant sa mort définitive."
      }
    ]
  },
  thaumaturgie: {
    nom: "Thaumaturgie",

    intro:
      "La Thaumaturgie est la magie du sang des Tremeres. Cette discipline ésotérique combine rites occultes, manipulation de la vitae et sorcellerie vampirique.",

    sections: [

      {
        nom: "Branche du Sang",

        intro:
          "La voie fondamentale des Tremeres, centrée sur la manipulation de la vitae vampirique et du sang des immortels.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "Goût du Sang",

            description:
              "Le thaumaturge analyse une vitae en la goûtant.",

            systeme:
              "Permet d’obtenir des informations sur la génération, la réserve de sang ou une éventuelle diablerie."
          },

          {
            niveau: "••",
            nom: "Rage Sanguinaire",

            description:
              "Le vampire force sa cible à dépenser son propre sang.",

            systeme:
              "Chaque succès oblige la cible à dépenser un point de sang immédiatement."
          },

          {
            niveau: "•••",
            nom: "Puissance du Sang",

            description:
              "Le thaumaturge concentre sa vitae pour augmenter temporairement sa puissance.",

            systeme:
              "Permet de réduire artificiellement sa génération pendant un temps limité."
          },

          {
            niveau: "••••",
            nom: "Vol de Vitae",

            description:
              "Le sang quitte le corps de la victime pour rejoindre le thaumaturge.",

            systeme:
              "Chaque succès permet d’absorber un point de sang à distance."
          },

          {
            niveau: "•••••",
            nom: "Chaudron de Sang",

            description:
              "Le vampire fait bouillir le sang de sa victime dans ses veines.",

            systeme:
              "Inflige des dégâts aggravés extrêmement dangereux."
          }
        ]
      },

      {
        nom: "Piège des Flammes",

        intro:
          "Cette branche invoque des flammes surnaturelles particulièrement redoutées des vampires.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "Chandelle",

            description:
              "Le thaumaturge crée une petite flamme magique.",

            systeme:
              "Inflige un faible niveau de dégâts aggravés."
          },

          {
            niveau: "••",
            nom: "Main de Feu",

            description:
              "Une flamme plus importante apparaît dans la main du vampire.",

            systeme:
              "Les dégâts aggravés deviennent plus sérieux."
          },

          {
            niveau: "•••",
            nom: "Feu de Camp",

            description:
              "Le thaumaturge invoque un véritable foyer de flammes.",

            systeme:
              "Cause plusieurs niveaux de dégâts aggravés."
          },

          {
            niveau: "••••",
            nom: "Feu de Joie",

            description:
              "Une déflagration imposante surgit à portée de vue.",

            systeme:
              "Très dangereux pour les vampires et les mortels."
          },

          {
            niveau: "•••••",
            nom: "Brasier",

            description:
              "Le thaumaturge invoque un incendie surnaturel massif.",

            systeme:
              "Inflige d’énormes dégâts aggravés."
          }
        ]
      },

      {
        nom: "Télékinésie",

        intro:
          "Cette branche permet de déplacer des objets par la seule force de la volonté.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "500 grammes",

            description:
              "Le thaumaturge peut manipuler de petits objets.",

            systeme:
              "Déplacement limité à de très faibles masses."
          },

          {
            niveau: "••",
            nom: "10 kilogrammes",

            description:
              "Le vampire contrôle des objets plus lourds.",

            systeme:
              "Manipulation plus stable et précise."
          },

          {
            niveau: "•••",
            nom: "100 kilogrammes",

            description:
              "Le thaumaturge peut soulever des charges massives et léviter.",

            systeme:
              "Permet également un déplacement aérien."
          },

          {
            niveau: "••••",
            nom: "250 kilogrammes",

            description:
              "Le vampire projette des objets comme des armes.",

            systeme:
              "Les objets peuvent infliger des dégâts importants."
          },

          {
            niveau: "•••••",
            nom: "500 kilogrammes",

            description:
              "Maîtrise télékinétique avancée.",

            systeme:
              "Le thaumaturge manipule des masses extrêmement lourdes."
          }
        ]
      },

      {
        nom: "Branche des Invocations",

        intro:
          "Cette branche permet d’invoquer des objets et des créations temporaires depuis le néant.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "Invocation de Forme Simple",

            description:
              "Le vampire crée un objet simple et inanimé.",

            systeme:
              "L’objet disparaît sans dépense continue de volonté."
          },

          {
            niveau: "••",
            nom: "Permanence",

            description:
              "Les objets invoqués deviennent durables.",

            systeme:
              "Les créations persistent sans entretien."
          },

          {
            niveau: "•••",
            nom: "Magie du Forgeron",

            description:
              "Le thaumaturge invoque des objets complexes.",

            systeme:
              "Permet de créer armes, outils et machines."
          },

          {
            niveau: "••••",
            nom: "Invocation Inversée",

            description:
              "Le vampire bannit un objet invoqué.",

            systeme:
              "Dissipe une création thaumaturgique existante."
          },

          {
            niveau: "•••••",
            nom: "Emprise sur la Vie",

            description:
              "Le thaumaturge crée des simulacres vivants.",

            systeme:
              "Les créatures invoquées restent temporaires et imparfaites."
          }
        ]
      },

      {
        nom: "Les Mains de la Destruction",

        intro:
          "Une branche redoutée centrée sur la corrosion, la décomposition et la destruction de la matière.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "Décomposition",

            description:
              "Le vampire accélère le vieillissement d’un objet.",

            systeme:
              "Les matières se dégradent rapidement."
          },

          {
            niveau: "••",
            nom: "Déformation du Bois",

            description:
              "Le thaumaturge tord et brise le bois.",

            systeme:
              "Peut rendre des armes ou pieux inutilisables."
          },

          {
            niveau: "•••",
            nom: "Contact Acide",

            description:
              "Le sang du vampire devient corrosif.",

            systeme:
              "Les attaques infligent des dégâts aggravés."
          },

          {
            niveau: "••••",
            nom: "Atrophie",

            description:
              "Le vampire dessèche un membre de sa victime.",

            systeme:
              "Le membre devient inutilisable."
          },

          {
            niveau: "•••••",
            nom: "Transformation en Poussière",

            description:
              "La cible vieillit jusqu’à la désintégration.",

            systeme:
              "Extrêmement mortel contre les mortels."
          }
        ]
      },

      {
        nom: "Rituels Thaumaturgiques",

        intro:
          "Les rituels sont des sorts complexes nécessitant préparation, composants et connaissances occultes. Il existe d’innombrables rituels, et les thaumaturges peuvent même en créer avec l’accord du MJ.",

        pouvoirs: [

          {
            niveau: "•",
            nom: "Communiquer avec son Sire",

            description:
              "Permet d’établir une communication télépathique avec son sire.",

            systeme:
              "Nécessite un objet ayant appartenu au sire."
          },

          {
            niveau: "•",
            nom: "Défense du Refuge Sacré",

            description:
              "Protège une zone contre la lumière du soleil.",

            systeme:
              "Des glyphes de sang empêchent les rayons d’entrer."
          },

          {
            niveau: "•",
            nom: "Déviation de la Malédiction du Bois",

            description:
              "Le premier pieu visant le cœur du Tremere se détruit.",

            systeme:
              "Protection active jusqu’à l’aube suivante."
          },

          {
            niveau: "••",
            nom: "Anti-Goules",

            description:
              "Un glyphe blesse les goules touchant un objet protégé.",

            systeme:
              "Inflige des dégâts létaux aux goules."
          },

          {
            niveau: "•••",
            nom: "Passage Incorporel",

            description:
              "Le thaumaturge devient intangible.",

            systeme:
              "Permet de traverser murs et obstacles."
          },

          {
            niveau: "••••",
            nom: "Os de Mensonges",

            description:
              "Force quiconque tient l’os à dire la vérité.",

            systeme:
              "Les mensonges sont mystiquement empêchés."
          },

          {
            niveau: "•••••",
            nom: "Pacte de Sang",

            description:
              "Crée un contrat mystique impossible à briser.",

            systeme:
              "Les signataires sont surnaturellement forcés de respecter le pacte."
          }
        ]
      }
    ]
  },
  vicissitude: {
    nom: "Vicissitude",

    intro:
      "Discipline monstrueuse des Tzimisces, la Vicissitude permet de remodeler la chair et les os, ceux du vampire comme ceux de ses victimes. Elle est autant un art qu’une pratique chirurgicale surnaturelle, souvent utilisée pour créer beauté inhumaine, serviteurs difformes ou horreurs de guerre.",

    pouvoirs: [
      {
        niveau: "•",
        nom: "Malléabilité",

        description:
          "Le vampire modifie son propre corps : visage, voix, taille, couleur de peau ou détails physiques mineurs.",

        systeme:
          "Coûte du sang selon les parties modifiées. Jet conseillé : Intelligence + Artisanat du corps. Copier quelqu’un demande plus de précision."
      },

      {
        niveau: "••",
        nom: "Sculpture de la Chair",

        description:
          "Le vampire remodèle la chair d’une autre créature, altérant peau, muscles, graisse ou cartilages sans toucher aux os.",

        systeme:
          "Jet conseillé : Dextérité + Artisanat du corps. Peut embellir, défigurer ou redistribuer la chair pour renforcer l’absorption."
      },

      {
        niveau: "•••",
        nom: "Sculpture des Os",

        description:
          "Le vampire manipule les os comme de l’argile, permettant déformations profondes, armes osseuses ou mutilations terribles.",

        systeme:
          "Jet conseillé : Force + Artisanat du corps. Peut servir à remodeler, blesser ou créer griffes, pointes et piquants."
      },

      {
        niveau: "••••",
        nom: "Forme Monstrueuse",

        description:
          "Le Tzimisce devient une créature de cauchemar immense, chitineuse et hérissée de griffes, conçue pour le combat et la terreur.",

        systeme:
          "Coûte deux points de sang. Les attributs sociaux tombent à zéro, mais les dégâts de mêlée augmentent et l’intimidation devient terrifiante."
      },

      {
        niveau: "•••••",
        nom: "Forme Sanglante",

        description:
          "Le vampire transforme tout ou partie de son corps en vitae consciente, capable de se reformer ou de s’écouler comme une masse de sang vivante.",

        systeme:
          "Chaque partie du corps devient une quantité de vitae. Sous forme complète, le vampire devient presque insaisissable mais reste vulnérable au feu et au soleil."
      }
    ]
  }
};
function initDiscipline() {
  const detailBox =
    document.getElementById("disciplineDetail");

  const titleBox =
    document.getElementById("disciplineTitle");

  const introBox =
    document.getElementById("disciplineIntro");

  const powersBox =
    document.getElementById("disciplinePowers");

  const closeButton =
    document.getElementById("closeDiscipline");

  if (
    !detailBox ||
    !titleBox ||
    !introBox ||
    !powersBox
  ) {
    return;
  }

  function openDiscipline(id) {
    const discipline =
      DISCIPLINES[id];

    if (!discipline) return;

    titleBox.textContent =
      discipline.nom;

    introBox.textContent =
      discipline.intro;

    powersBox.innerHTML = "";

    function renderPower(power) {
      const card = document.createElement("div");
      card.className = "power-card";

      card.innerHTML =
        '<div class="power-title">' +
        power.niveau + ' ' + power.nom +
        '</div>' +

        '<div>' +
        power.description +
        '</div>' +

        '<div class="power-system">' +
        power.systeme +
        '</div>';

      powersBox.appendChild(card);
    }

    function renderSectionList() {
      const sectionGrid = document.createElement("div");
      sectionGrid.className = "discipline-grid";

      discipline.sections.forEach(section => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "discipline-card";
        button.textContent = section.nom;

        button.addEventListener("click", () => {
          renderSection(section);
        });

        sectionGrid.appendChild(button);
      });

      powersBox.appendChild(sectionGrid);
    }

    function renderSection(section) {
      powersBox.innerHTML = "";

      const backButton = document.createElement("button");
      backButton.type = "button";
      backButton.className = "action-btn secondary";
      backButton.textContent = "← Retour aux voies";

      backButton.addEventListener("click", () => {
        powersBox.innerHTML = "";
        renderSectionList();
      });

      powersBox.appendChild(backButton);

      const sectionTitle = document.createElement("h3");
      sectionTitle.textContent = section.nom;
      powersBox.appendChild(sectionTitle);

      if (section.intro) {
        const sectionIntro = document.createElement("p");
        sectionIntro.textContent = section.intro;
        powersBox.appendChild(sectionIntro);
      }

      section.pouvoirs.forEach(power => {
        renderPower(power);
      });
    }

    if (discipline.sections) {
      renderSectionList();
    } else {
      discipline.pouvoirs.forEach(power => {
        renderPower(power);
      });
    }

    detailBox.classList.remove("hidden");
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      detailBox.classList.add("hidden");
    });
  }

  document
    .querySelectorAll(".discipline-card[data-discipline]")
    .forEach(button => {
      button.addEventListener("click", () => {
        openDiscipline(
          button.dataset.discipline
        );
      });
    });
}

document.addEventListener(
  "DOMContentLoaded",
  initDiscipline
);
