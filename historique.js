const HISTORIQUES = {
  allies: {
    nom: "Alliés",
    intro: "Des humains qui vous aident volontairement : amis, famille, organisations ou personnes influentes.",
    niveaux: [
      "● Un allié de pouvoir et d'influence modérés.",
      "●● Deux alliés de pouvoir et d'influence modérés.",
      "●●● Trois alliés, dont un plutôt influent.",
      "●●●● Quatre alliés, dont un très influent.",
      "●●●●● Cinq alliés, dont un extrêmement influent."
    ]
  },

  contacts: {
    nom: "Contacts",
    intro: "Des informateurs et relations dispersés dans la ville, utiles pour obtenir des renseignements.",
    niveaux: [
      "● Un contact important.",
      "●● Deux contacts importants.",
      "●●● Trois contacts importants.",
      "●●●● Quatre contacts importants.",
      "●●●●● Cinq contacts importants."
    ]
  },
  fausseIdentite: {
    nom: "Fausse identité",
    intro: "Une identité alternative suffisamment crédible pour exister aux yeux de la société mortelle : papiers, comptes, traces administratives et présence numérique.",
    niveaux: [
      "● Identité sommaire et quelques faux papiers.",
      "●● Identité crédible pour les contrôles courants.",
      "●●● Identité solide avec une véritable existence administrative.",
      "●●●● Identité très élaborée, difficile à distinguer d’une véritable identité.",
      "●●●●● Identité presque parfaite, capable de résister à une enquête approfondie."
    ]
  },

  generation: {
    nom: "Génération",
    intro: "Représente la puissance du sang et la proximité avec Caïn.",
    niveaux: [
      "● 12e génération : réserve 11, 1 sang/tour.",
      "●● 11e génération : réserve 12, 1 sang/tour.",
      "●●● 10e génération : réserve 13, 1 sang/tour.",
      "●●●● 9e génération : réserve 14, 2 sang/tour.",
      "●●●●● 8e génération : réserve 15, 3 sang/tour."
    ]
  },

  influence: {
    nom: "Influence",
    intro: "Votre pouvoir dans la société mortelle : politique, police, administration, prestige ou chantage.",
    niveaux: [
      "● Influence modérée au niveau municipal.",
      "●● Bon entregent régional.",
      "●●● Influence nationale.",
      "●●●● Vaste pouvoir personnel.",
      "●●●●● Influence considérable."
    ]
  },

  mentor: {
    nom: "Mentor",
    intro: "Un ancien ou protecteur qui vous conseille et vous aide parfois.",
    niveaux: [
      "● Mentor de faible influence.",
      "●● Mentor respecté.",
      "●●● Mentor très influent.",
      "●●●● Mentor extrêmement puissant localement.",
      "●●●●● Mentor d’une puissance exceptionnelle."
    ]
  },

  renommee: {
    nom: "Renommée",
    intro: "Votre célébrité parmi les mortels, utile mais parfois dangereuse pour la Mascarade.",
    niveaux: [
      "● Connu dans un milieu précis.",
      "●● Célébrité locale.",
      "●●● Renommée régionale.",
      "●●●● Célébrité nationale.",
      "●●●●● Renommée mondiale."
    ]
  },

  ressources: {
    nom: "Ressources",
    intro: "Votre niveau de richesse, patrimoine, revenus et pouvoir d’achat.",
    niveaux: [
      "● Petites économies.",
      "●● Classe moyenne.",
      "●●● Grosses économies.",
      "●●●● Très aisé.",
      "●●●●● Immensément riche."
    ]
  },

  servants: {
    nom: "Servants",
    intro: "Goules, humains dominés, suivants loyaux ou animaux dressés au service du vampire.",
    niveaux: [
      "● Un servant.",
      "●● Deux servants.",
      "●●● Trois servants.",
      "●●●● Quatre servants.",
      "●●●●● Cinq servants."
    ]
  },

  statut: {
    nom: "Statut",
    intro: "Votre réputation et votre position dans la société vampirique.",
    niveaux: [
      "● Connu : nouveau-né.",
      "●● Respecté : acolyte.",
      "●●● Influent : ancien.",
      "●●●● Puissant : Primogène ou évêque.",
      "●●●●● Éclatant : prince ou archevêque."
    ]
  },

  troupeau: {
    nom: "Troupeau",
    intro: "Un groupe de mortels dont vous pouvez vous nourrir plus facilement.",
    niveaux: [
      "● 3 calices.",
      "●● 7 calices.",
      "●●● 15 calices.",
      "●●●● 30 calices.",
      "●●●●● 60 calices."
    ]
  },

  domaine: {
    nom: "Domaine",
    intro: "Un territoire contrôlé par le personnage. Les sous-catégories peuvent être adaptées selon ta chronique.",
    sections: [
        {
        nom: "Taille",
        intro: "Représente la taille et l’étendue du domaine contrôlé par le vampire.",
        niveaux: [
            "● Petit refuge : appartement, cave, squat, petite maison ou penthouse modeste.",
            "●● Domaine restreint : immeuble entier, grand manoir, entrepôt, club privé ou plusieurs bâtiments voisins.",
            "●●● Quartier contrôlé : rues entières, complexe industriel, réseau souterrain, campus ou zone urbaine importante.",
            "●●●● Territoire majeur : arrondissement, vaste propriété sécurisée, domaine rural étendu ou plusieurs quartiers reliés.",
            "●●●●● Domaine colossal : une petite ville, un district entier, un immense réseau souterrain ou un territoire reconnu par les autorités vampiriques."
        ]
        },
        {
        nom: "Établissement Commercial",
        intro: "Représente les activités économiques du domaine et les revenus qu’elles génèrent.",
        niveaux: [
            "● Petit commerce rentable : bar, boutique, garage, petit club ou affaire locale.",
            "●● Activité prospère : restaurant réputé, boîte de nuit, entreprise régionale ou plusieurs commerces.",
            "●●● Revenus importants : établissement influent, casino, chaîne locale ou activité très lucrative.",
            "●●●● Empire économique local : plusieurs sociétés, complexes commerciaux ou entreprises extrêmement rentables.",
            "●●●●● Véritable machine à profits : conglomérat, réseau criminel lucratif ou activité générant des revenus colossaux."
        ]
        },
        {
          nom: "Cellules",
          intro: "Représente les installations permettant de retenir, interroger ou contenir des captifs.",
          niveaux: [
            "● Une cellule discrète ou pièce sécurisée.",
            "●● Plusieurs cellules renforcées avec moyens de contention.",
            "●●● Installations spécialisées capables de retenir des créatures dangereuses ou surnaturelles."
          ]
        },
        {
        nom: "Sécurité",
        intro: "Représente les systèmes de sécurité, protections électroniques et dispositifs défensifs du domaine.",
        niveaux: [
            "● Serrures renforcées, alarmes simples, quelques caméras.",
            "●● Réseau de surveillance correct, alarmes modernes, accès sécurisés.",
            "●●● Domaine sous haute surveillance : caméras multiples, détecteurs, contrôle des accès.",
            "●●●● Sécurité avancée : surveillance centralisée, systèmes anti-intrusion sophistiqués, zones verrouillées.",
            "●●●●● Véritable forteresse technologique : sécurité militaire, capteurs spécialisés, surveillance permanente et contre-mesures élaborées."
        ]
        },
        {
        nom: "Veilleurs",
        intro: "Représente les gardes, hommes de main et forces de sécurité protégeant le domaine.",
        niveaux: [
            "● Quelques gros bras, videurs ou gardes peu entraînés. Armement léger.",
            "●● Petite équipe organisée : criminels armés, gang local, sécurité privée basique.",
            "●●● Gardes d’élite : combattants expérimentés, armes automatiques, équipements tactiques.",
            "●●●● Force paramilitaire : vétérans, mercenaires professionnels, matériel lourd et entraînement spécialisé.",
            "●●●●● Véritable armée privée : anciens forces spéciales, surveillance avancée, équipement militaire complet et réponse coordonnée."
        ]
        },
        {
        nom: "Luxueux",
        intro: "Représente le confort, le prestige et le raffinement du domaine.",
        niveaux: [
            "● Domaine confortable et bien aménagé.",
            "●● Refuge élégant avec mobilier de qualité et décoration raffinée.",
            "●●● Domaine prestigieux digne d’un notable ou d’un ancien influent.",
            "●●●● Luxe exceptionnel : œuvres d’art, équipements rares, confort extravagant.",
            "●●●●● Véritable palais nocturne mêlant richesse, prestige et démesure."
        ]
        },
        {
          nom: "Localisation",
          intro: "Représente un emplacement particulièrement avantageux ou convoité pour le domaine.",
          niveaux: [
            "● Domaine situé dans un emplacement avantageux : quartier influent, accès pratique, zone discrète ou fréquentée selon les besoins.",
            "●● Emplacement exceptionnel : Râtelier, centre-ville prestigieux, secteur ultra sécurisé, île privée ou position stratégique majeure."
          ]
        },
        {
        nom: "Camouflage",
        intro: "Représente la capacité du domaine à passer inaperçu et à dissimuler sa véritable nature.",
        niveaux: [
            "● Refuge discret difficile à remarquer pour un observateur ordinaire.",
            "●● Domaine soigneusement dissimulé : fausses identités, accès cachés, apparence banale.",
            "●●● Camouflage exceptionnel : le domaine semble inexistant ou totalement anodin même après enquête.",
            "●●●● Dissimulation avancée mêlant fausses pistes, protections administratives et accès secrets.",
            "●●●●● Refuge quasi introuvable, protégé par des identités fictives, réseaux souterrains et tromperies élaborées."
        ]
        },
        {
        nom: "Arsenal Caché",
        intro: "Représente les armes, munitions et équipements offensifs stockés dans le domaine.",
        niveaux: [
            "● Quelques armes et réserves discrètes.",
            "●● Cache d’armes conséquente : fusils, protections, munitions et matériel tactique.",
            "●●● Arsenal lourd comprenant explosifs, armes automatiques et équipements spécialisés.",
            "●●●● Réserve paramilitaire complète avec matériel militaire et armement rare.",
            "●●●●● Véritable dépôt de guerre capable d’équiper une petite armée."
        ]
        },
        {
        nom: "Évacuation",
        intro: "Représente les solutions de fuite et voies d’évasion du domaine en cas d’attaque ou d’urgence.",
        niveaux: [
            "● Une sortie discrète : porte arrière, tunnel de service, accès aux égouts ou véhicule prêt à partir.",
            "●● Plusieurs voies d’évacuation indépendantes : tunnels, passages secrets, accès vers des bâtiments voisins ou itinéraires sécurisés.",
            "●●● Réseau d’exfiltration avancé : issues dissimulées, caches de secours, faux refuges, véhicules dédiés et plans d’évacuation organisés."
        ]
        },
       {
          nom: "Furgus",
          intro: "Le domaine est bâti sur un point de convergence occulte où les énergies surnaturelles et spirituelles sont particulièrement fortes.",
          niveaux: [
            "● Faible nœud mystique perceptible uniquement par des moyens surnaturels.",
            "●● Le domaine se trouve sur une bifurcation importante des veines de la Terre ou une zone où le Voile est affaibli.",
            "●●● Puissant site occulte attirant phénomènes surnaturels, esprits et résonances mystiques."
          ]
        },
        {
          nom: "Protection Mystique",
          intro: "Représente les défenses occultes et protections surnaturelles du domaine.",
          niveaux: [
            "● Quelques sceaux, protections mineures ou alarmes mystiques.",
            "●● Défenses occultes efficaces contre les intrusions surnaturelles.",
            "●●● Domaine protégé par des rituels complexes, glyphes ou barrières mystiques.",
            "●●●● Véritable sanctuaire ésotérique capable de repousser ou détecter de puissantes créatures surnaturelles.",
            "●●●●● Forteresse occulte saturée de protections, wards et défenses thaumaturgiques majeures."
          ]
        }
        
    ]
  }
};

function initHistoriques() {
  const detailBox = document.getElementById("historiqueDetail");
  const titleBox = document.getElementById("historiqueTitle");
  const introBox = document.getElementById("historiqueIntro");
  const itemsBox = document.getElementById("historiqueItems");
  const closeButton = document.getElementById("closeHistorique");

  if (!detailBox || !titleBox || !introBox || !itemsBox) {
    return;
  }

  function renderLevels(niveaux, clear = true) {
    if (clear) {
      itemsBox.innerHTML = "";
    }

    niveaux.forEach(text => {
      const card = document.createElement("div");
      card.className = "power-card";
      card.innerHTML = "<div>" + text + "</div>";
      itemsBox.appendChild(card);
    });
  }

  function renderSections(historique, id) {
    itemsBox.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "discipline-grid";

    historique.sections.forEach(section => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "discipline-card";
      button.textContent = section.nom;

      button.addEventListener("click", () => {
        itemsBox.innerHTML = "";

        const backButton = document.createElement("button");
        backButton.type = "button";
        backButton.className = "action-btn secondary";
        backButton.textContent = "← Retour";

        backButton.addEventListener("click", () => {
          openHistorique(id);
        });

        itemsBox.appendChild(backButton);

        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = section.nom;
        itemsBox.appendChild(sectionTitle);

        const sectionIntro = document.createElement("p");
        sectionIntro.textContent = section.intro || "";
        itemsBox.appendChild(sectionIntro);

        renderLevels(section.niveaux || [], false);
      });

      grid.appendChild(button);
    });

    itemsBox.appendChild(grid);
  }

  function openHistorique(id) {
    const historique = HISTORIQUES[id];

    if (!historique) return;

    titleBox.textContent = historique.nom;
    introBox.textContent = historique.intro || "";
    itemsBox.innerHTML = "";

    if (historique.sections) {
      renderSections(historique, id);
    } else {
      renderLevels(historique.niveaux || []);
    }

    detailBox.classList.remove("hidden");
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      detailBox.classList.add("hidden");
    });
  }

  document
    .querySelectorAll(".discipline-card[data-historique]")
    .forEach(button => {
      button.addEventListener("click", () => {
        openHistorique(button.dataset.historique);
      });
    });
}

document.addEventListener("DOMContentLoaded", initHistoriques);