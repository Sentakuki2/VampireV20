const ATOUTS_HANDICAPS = {
  atouts_physiques: {
    nom: "Atouts physiques",
    intro: "Avantages liés au corps, aux sens ou aux capacités physiques.",
    elements: [
      { nom: "Ambidextrie", cout: "1 point", description: "Vous utilisez vos deux mains sans pénalité de mauvaise main." },
      { nom: "Équilibre félin", cout: "1 point", description: "Réduit de 2 la difficulté des jets liés à l’équilibre." },
      { nom: "Manducation", cout: "1 point", description: "Vous pouvez manger et savourer la nourriture, utile pour préserver la Mascarade." },
      { nom: "Sens aiguisé", cout: "1 point", description: "Un sens est particulièrement développé. Difficulté réduite de 2 pour les actions liées à ce sens." },
      { nom: "Bonne mine", cout: "2 points", description: "Vous avez l’air plus vivant et vous vous fondez mieux parmi les mortels." },
      { nom: "Voix enchanteresse", cout: "2 points", description: "Votre voix attire l’attention. Difficulté réduite de 2 pour persuader, charmer ou commander avec la voix." },
      { nom: "Casse-cou", cout: "3 points", description: "Lors d’actions très risquées, vous ajoutez 3 dés et ignorez un 1 éventuel." },
      { nom: "Digestion efficace", cout: "3 points", description: "Vous gagnez davantage de sang lorsque vous vous nourrissez, sans dépasser votre maximum." },
      { nom: "Taille gigantesque", cout: "4 points", description: "Vous êtes immense et bénéficiez d’un niveau de Contusion supplémentaire." }
    ]
  },

  atouts_mentaux: {
    nom: "Atouts mentaux",
    intro: "Avantages liés à l’esprit, au sang-froid ou à la volonté.",
    elements: [
      { nom: "Bon sens", cout: "1 point", description: "Le Conteur peut vous avertir si vous êtes sur le point de faire quelque chose de stupide ou dangereux." },
      { nom: "Chronométrie instinctive", cout: "1 point", description: "Vous estimez précisément le temps sans montre." },
      { nom: "Concentration", cout: "1 point", description: "Vous ignorez les pénalités dues aux distractions." },
      { nom: "Code de l’honneur", cout: "2 points", description: "Vous suivez un code personnel strict et gagnez 2 dés aux jets de Volonté ou de Vertus liés à ce code." },
      { nom: "Sommeil léger", cout: "2 points", description: "Vous vous réveillez instantanément au moindre signe suspect." },
      { nom: "Sang-froid", cout: "3 points", description: "Vous gagnez 2 dés pour résister à la frénésie. Interdit aux Brujahs." },
      { nom: "Volonté de Fer", cout: "3 points", description: "Vous pouvez résister plus efficacement à la Domination et aux pouvoirs altérant l’esprit." }
    ]
  },

  atouts_sociaux: {
    nom: "Atouts sociaux",
    intro: "Avantages liés au prestige, aux relations et à l’influence.",
    elements: [
      { nom: "Chef Naturel", cout: "1 point", description: "Vous inspirez naturellement le respect. +2 dés aux jets de Commandement. Charisme 3 minimum requis." },
      { nom: "Faveur", cout: "1 à 3 points", description: "Un ancien vous doit quelque chose. Plus le coût est élevé, plus la dette est importante." },
      { nom: "Sire prestigieux", cout: "1 point", description: "Votre sire possède ou possédait un statut important, ce qui influence la manière dont on vous traite." }
    ]
  },

  atouts_surnaturels: {
    nom: "Atouts surnaturels",
    intro: "Avantages paranormaux ou mystiques rares.",
    elements: [
      { nom: "Médium", cout: "2 points", description: "Vous pouvez sentir, entendre et communiquer avec les esprits ou fantômes." },
      { nom: "Résistance à la magie", cout: "2 points", description: "La difficulté des rituels ou sorts vous visant augmente de 2. Vous ne pouvez jamais apprendre la Thaumaturgie." },
      { nom: "Capacités prophétiques", cout: "3 points", description: "Vous pouvez interpréter présages et signes du destin avec Perception + Occultisme puis Intelligence + Occultisme." },
      { nom: "Chanceux", cout: "3 points", description: "Vous pouvez relancer trois jets ratés par scénario, y compris des échecs critiques." },
      { nom: "Guide spirituel", cout: "3 points", description: "Un esprit compagnon peut vous conseiller ou vous aider, selon les décisions du Conteur." },
      { nom: "Inaliénabilité", cout: "3 points", description: "Vous êtes immunisé au lien du sang." },
      { nom: "Grand amour", cout: "4 points", description: "Votre amour véritable vous donne un succès automatique aux jets de Volonté, sauf échec critique." },
      { nom: "Neuf vies", cout: "6 points", description: "Lorsque vous devriez mourir, le jet fatal est relancé jusqu’à ce que vous surviviez ou que vos neuf vies soient épuisées." },
      { nom: "Vraie Foi", cout: "7 points", description: "Vous commencez avec un point de Vraie Foi. Nécessite Humanité 9 ou plus." }
    ]
  },  handicaps_physiques: {
    nom: "Handicaps physiques",
    intro: "Faiblesses liées au corps, aux sens ou à la condition physique.",
    elements: [
      { nom: "Amblyopie", cout: "1 ou 3 points", description: "Votre vue est déficiente. La difficulté des jets liés à la vue augmente de 2. Version 1 point corrigible, version 3 points non corrigible." },
      { nom: "Audition déficiente", cout: "1 point", description: "Votre ouïe est mauvaise. Difficulté augmentée de 2 pour les jets liés à l’ouïe." },
      { nom: "Odeur de cimetière", cout: "1 point", description: "Vous dégagez une odeur de terre humide qui met les mortels mal à l’aise. Difficulté sociale envers eux +1." },
      { nom: "Petite taille", cout: "1 point", description: "Vous mesurez environ 1,40 m ou moins. Certaines actions physiques sont plus difficiles et votre vitesse de course est réduite." },
      { nom: "Borgne", cout: "2 points", description: "Vous n’avez qu’un œil. Difficulté augmentée pour les jets de vue et de perception des distances." },
      { nom: "Défiguré", cout: "2 points", description: "Votre visage est marqué ou difforme. Difficulté sociale +2 et Apparence maximum 2." },
      { nom: "Morsure infectieuse", cout: "2 points", description: "Vous ne pouvez pas refermer naturellement les plaies de votre morsure, qui peuvent s’infecter." },
      { nom: "Quatorzième Génération", cout: "2 points", description: "Votre sang est très faible : seuls 8 points de sang sur 10 sont utilisables. Interdit l’historique Génération." },
      { nom: "Blessure permanente", cout: "3 points", description: "Vous commencez chaque nuit avec le niveau de santé Blessure grave." },
      { nom: "Dépendance", cout: "3 points", description: "Vous dépendez d’une substance présente dans le sang que vous buvez." },
      { nom: "Difformité", cout: "3 points", description: "Une difformité physique affecte vos capacités et vos relations sociales." },
      { nom: "Enfant", cout: "3 points", description: "Vous avez été Étreint enfant. Vos attributs physiques sont limités et les mortels adultes vous prennent difficilement au sérieux." },
      { nom: "Estropié", cout: "3 points", description: "Vos jambes sont endommagées. Vous vous déplacez très lentement et ne pouvez pas courir." },
      { nom: "Guérison lente", cout: "3 points", description: "Guérir coûte plus cher en sang et les dégâts aggravés récupèrent beaucoup plus lentement." },
      { nom: "Monstre", cout: "3 points", description: "Votre apparence est monstrueuse. Apparence 0." },
      { nom: "Muet", cout: "4 points", description: "Vous ne pouvez pas parler et devez communiquer autrement." },
      { nom: "Porteur de maladie", cout: "4 points", description: "Votre sang transmet une maladie mortelle et vous devez dépenser davantage de sang au réveil." },
      { nom: "Sang clair", cout: "4 points", description: "Tous vos coûts en sang sont doublés et vous ne pouvez pas créer de lien du sang." },
      { nom: "Surdité", cout: "4 points", description: "Vous êtes sourd. Vous ne pouvez pas entendre et vos jets de Vigilance sont fortement pénalisés." },
      { nom: "Chair morte", cout: "5 points", description: "Vos blessures guérissent mécaniquement, mais votre chair garde des marques visibles." },
      { nom: "Cécité", cout: "6 points", description: "Vous êtes aveugle. Les actions demandant coordination visuelle sont fortement pénalisées." }
    ]
  },

  handicaps_mentaux: {
    nom: "Handicaps mentaux",
    intro: "Faiblesses liées au comportement, aux émotions ou à la stabilité mentale.",
    elements: [
      { nom: "Cauchemars", cout: "1 point", description: "Chaque réveil peut vous laisser troublé et pénalisé pour la nuit." },
      { nom: "Cœur sensible", cout: "1 point", description: "Vous supportez mal la souffrance d’autrui. Nécessite Humanité 7 ou plus." },
      { nom: "Défaut d’élocution", cout: "1 point", description: "Vous avez un trouble de parole. Difficulté +2 pour les jets liés à la parole." },
      { nom: "Proie taboue", cout: "1 point", description: "Vous refusez de vous nourrir sur une catégorie de victimes. Le viol de ce tabou peut provoquer frénésie ou perte d’Humanité." },
      { nom: "Sommeil lourd", cout: "1 point", description: "Il est difficile de vous réveiller pendant le jour." },
      { nom: "Timidité", cout: "1 point", description: "Vous êtes mal à l’aise socialement. Difficulté augmentée avec les étrangers ou face à un groupe." },
      { nom: "Amnésie", cout: "2 points", description: "Vous ne vous souvenez pas de votre passé, qui peut revenir vous hanter." },
      { nom: "Lunatique", cout: "2 points", description: "Les phases de la lune augmentent votre risque de frénésie." },
      { nom: "Phobie", cout: "2 points", description: "Vous avez une peur incontrôlable d’un objet, lieu ou concept précis." },
      { nom: "Soupe au lait", cout: "2 points", description: "Vous vous mettez facilement en colère. Difficulté augmentée pour éviter la frénésie. Interdit aux Brujahs." },
      { nom: "Territoire", cout: "2 points", description: "Vous êtes obsédé par votre domaine de chasse et réagissez violemment aux intrus." },
      { nom: "Vindicatif", cout: "2 points", description: "Vous êtes consumé par un désir de revanche contre une personne ou un groupe." },
      { nom: "Faible volonté", cout: "3 points", description: "Vous résistez très mal à la Domination, l’Intimidation et aux pouvoirs mentaux. Volonté maximum 4." },
      { nom: "Repas voyants", cout: "4 points", description: "Vous devez dévorer des organes en plus du sang, ce qui tue presque toujours vos victimes." }
    ]
  },

  handicaps_sociaux: {
    nom: "Handicaps sociaux",
    intro: "Faiblesses liées à la réputation, aux ennemis, au sire ou à l’appartenance politique.",
    elements: [
      { nom: "Ennemi", cout: "1 à 5 points", description: "Une personne ou un groupe cherche activement à vous nuire. Sa puissance dépend du coût." },
      { nom: "Hostilité du sire", cout: "1 point", description: "Votre sire vous hait et utilise ses moyens pour vous causer du tort." },
      { nom: "Sire infâme", cout: "1 point", description: "Votre sire est rejeté ou détesté, et cette réputation vous poursuit." },
      { nom: "Sosie", cout: "1 point", description: "Vous ressemblez à un autre vampire, ce qui provoque confusions et ennuis." },
      { nom: "Terrible secret", cout: "1 point", description: "Vous cachez un secret qui pourrait vous faire exclure ou condamner s’il était révélé." },
      { nom: "Membre probatoire d’une secte", cout: "4 points", description: "Vous êtes un transfuge encore mal accepté et traité avec méfiance." },
      { nom: "Proie", cout: "4 points", description: "Un chasseur fanatique vous traque, ainsi que ceux qui vous fréquentent." }
    ]
  },

  handicaps_surnaturels: {
    nom: "Handicaps surnaturels",
    intro: "Faiblesses mystiques, malédictions ou vulnérabilités surnaturelles.",
    elements: [
      { nom: "Absence de reflet", cout: "1 point", description: "Votre reflet est brouillé, ce qui complique la Mascarade." },
      { nom: "Allergie à l’ail", cout: "1 point", description: "L’odeur de l’ail vous repousse et peut vous forcer à quitter les lieux." },
      { nom: "Contact glacé", cout: "1 point", description: "Les plantes flétrissent près de vous et votre contact absorbe la chaleur des êtres vivants." },
      { nom: "Malédiction", cout: "1 à 5 points", description: "Vous êtes frappé par une malédiction surnaturelle dont la gravité dépend du coût." },
      { nom: "Présence inquiétante", cout: "2 points", description: "Les mortels sentent inconsciemment votre nature morte-vivante. Difficulté sociale envers eux +2." },
      { nom: "Fantôme", cout: "3 points", description: "Vous êtes hanté par un esprit hostile qui cherche à vous nuire." },
      { nom: "Incapacité à traverser l’eau vive", cout: "3 points", description: "Vous ne pouvez pas traverser une étendue d’eau vive sauf à grande hauteur." },
      { nom: "Répulsion pour la croix", cout: "3 points", description: "Les croix vous repoussent et peuvent provoquer fuite, terreur ou dégâts aggravés en cas de contact." },
      { nom: "Baiser brûlant", cout: "4 points", description: "Votre Baiser provoque douleur et terreur au lieu d’extase." },
      { nom: "Sensibilité à la lumière", cout: "5 points", description: "Le soleil vous inflige deux fois plus de dégâts, et même la lumière lunaire peut vous blesser." },
      { nom: "Sombre destin", cout: "5 points", description: "Vous êtes condamné à une fin terrible et recevez parfois des visions angoissantes de ce destin." }
    ]
  }
};
function initAtoutsHandicaps() {

  const detailBox =
    document.getElementById("ahDetail");

  const titleBox =
    document.getElementById("ahTitle");

  const introBox =
    document.getElementById("ahIntro");

  const itemsBox =
    document.getElementById("ahItems");

  const closeButton =
    document.getElementById("closeAh");

  if (
    !detailBox ||
    !titleBox ||
    !itemsBox
  ) {
    return;
  }

  function renderItem(item) {

    const card =
      document.createElement("div");

    card.className =
      "power-card";

    card.innerHTML =

      '<div class="power-title">' +

      item.nom +

      ' <span style="font-size:0.8em; opacity:0.8;">(' +

      item.cout +

      ')</span>' +

      '</div>' +

      '<div>' +

      item.description +

      '</div>';

    itemsBox.appendChild(card);
  }

  function openCategory(id) {

    const category =
      ATOUTS_HANDICAPS[id];

    if (!category) return;

    titleBox.textContent =
      category.nom;

    introBox.textContent =
      category.intro || "";

    itemsBox.innerHTML = "";

    category.elements.forEach(item => {

      renderItem(item);

    });

    detailBox.classList.remove("hidden");
  }

  if (closeButton) {

    closeButton.addEventListener("click", () => {

      detailBox.classList.add("hidden");

    });
  }

  document

    .querySelectorAll(
      ".discipline-card[data-ah-category]"
    )

    .forEach(button => {

      button.addEventListener("click", () => {

        openCategory(
          button.dataset.ahCategory
        );

      });

    });
}

document.addEventListener(
  "DOMContentLoaded",
  initAtoutsHandicaps
);