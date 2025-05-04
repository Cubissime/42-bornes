// Données des cartes basées sur CARTES.xlsx
const cartesData = [
    // Cartes KM
    { nom: "1K très rapide", type: "km", quantite: 3, valeur: 1, temps: 3 },
    { nom: "1K rapide", type: "km", quantite: 3, valeur: 1, temps: 4 },
    { nom: "1K normal", type: "km", quantite: 7, valeur: 1, temps: 5 },
    { nom: "1K lent", type: "km", quantite: 5, valeur: 1, temps: 7 },
    { nom: "1K très lent", type: "km", quantite: 5, valeur: 1, temps: 9 },
    { nom: "2K très rapide", type: "km", quantite: 3, valeur: 2, temps: 6 },
    { nom: "2K rapide", type: "km", quantite: 3, valeur: 2, temps: 8 },
    { nom: "2K normal", type: "km", quantite: 7, valeur: 2, temps: 10 },
    { nom: "2K lent", type: "km", quantite: 5, valeur: 2, temps: 15 },
    { nom: "2K très lent", type: "km", quantite: 5, valeur: 2, temps: 18 },
    { nom: "5K très rapide", type: "km", quantite: 2, valeur: 5, temps: 15 },
    { nom: "5K rapide", type: "km", quantite: 2, valeur: 5, temps: 20 },
    { nom: "5K normal", type: "km", quantite: 6, valeur: 5, temps: 25 },
    { nom: "5K lent", type: "km", quantite: 4, valeur: 5, temps: 35 },
    { nom: "5K très lent", type: "km", quantite: 4, valeur: 5, temps: 45 },
    { nom: "8K très rapide", type: "km", quantite: 1, valeur: 8, temps: 25 },
    { nom: "8K rapide", type: "km", quantite: 1, valeur: 8, temps: 35 },
    { nom: "8K normal", type: "km", quantite: 4, valeur: 8, temps: 40 },
    { nom: "8K lent", type: "km", quantite: 2, valeur: 8, temps: 60 },
    { nom: "8K très lent", type: "km", quantite: 2, valeur: 8, temps: 75 },
    { nom: "10K très rapide", type: "km", quantite: 1, valeur: 10, temps: 35 },
    { nom: "10K rapide", type: "km", quantite: 1, valeur: 10, temps: 45 },
    { nom: "10K normal", type: "km", quantite: 4, valeur: 10, temps: 60 },
    { nom: "10K lent", type: "km", quantite: 2, valeur: 10, temps: 75 },
    { nom: "10K très lent", type: "km", quantite: 2, valeur: 10, temps: 90 },
    { nom: "Arrivée", type: "arrivee", quantite: 10, valeur: 0.195, temps: 0 },
    // Crasses
    { nom: "Chute", type: "crasse", quantite: 6, temps: 0 },
    { nom: "Crampe", type: "crasse", quantite: 6, temps: 0 },
    { nom: "Déshydratation", type: "crasse", quantite: 6, temps: 0 },
    { nom: "Hypoglycémie", type: "crasse", quantite: 6, temps: 0 },
    { nom: "Pipi", type: "crasse", quantite: 6, temps: 0 },
    { nom: "Limite 2K", type: "crasse", quantite: 8, temps: 0 },
    // Parades
    { nom: "Banane", type: "parade", quantite: 6, temps: 3, contre: ["Hypoglycémie"] },
    { nom: "Sucre", type: "parade", quantite: 6, temps: 1, contre: ["Hypoglycémie"] },
    { nom: "Eau", type: "parade", quantite: 12, temps: 2, contre: ["Déshydratation"] },
    { nom: "Électrolyte", type: "parade", quantite: 12, temps: 2, contre: ["Crampe"] },
    { nom: "Medic", type: "parade", quantite: 12, temps: 7, contre: ["Chute"] },
    { nom: "Buisson", type: "parade", quantite: 6, temps: 4, contre: ["Pipi"] },
    { nom: "Voiture", type: "parade", quantite: 6, temps: 3, contre: ["Pipi"] },
    { nom: "Meneur", type: "parade", quantite: 16, temps: 0, contre: ["Limite 2K"] },
    // Ravitaillement
    { nom: "Ravito", type: "ravito", quantite: 8, temps: 0 },
    // Bottes
    { nom: "3 pipis avant départ", type: "botte", quantite: 1, temps: 0, protege: ["Pipi"] },
    { nom: "Genouillère", type: "botte", quantite: 1, temps: 0, protege: ["Chute"] },
    { nom: "Gourdes d’électrolyte", type: "botte", quantite: 1, temps: 0, protege: ["Crampe"] },
    { nom: "Poche d’eau", type: "botte", quantite: 1, temps: 0, protege: ["Déshydratation"] },
    { nom: "Stock de gel et barre", type: "botte", quantite: 1, temps: 0, protege: ["Hypoglycémie", "Limite 2K"] }
];

// Cartes Départ séparées
const cartesDepart = [
    { nom: "Sas 2H15", type: "depart", quantite: 2, tempsMax: 135 },
    { nom: "Sas 2H30", type: "depart", quantite: 2, tempsMax: 150 },
    { nom: "Sas 2H45", type: "depart", quantite: 2, tempsMax: 165 },
    { nom: "Sas 3H00", type: "depart", quantite: 2, tempsMax: 180 },
    { nom: "Sas 3H15", type: "depart", quantite: 2, tempsMax: 195 },
    { nom: "Sas 3H30", type: "depart", quantite: 2, tempsMax: 210 },
    { nom: "Sas 3H45", type: "depart", quantite: 2, tempsMax: 225 },
    { nom: "Sas 4H00", type: "depart", quantite: 2, tempsMax: 240 },
    { nom: "Sas 4H15", type: "depart", quantite: 2, tempsMax: 255 },
    { nom: "Sas 4H30", type: "depart", quantite: 2, tempsMax: 270 },
    { nom: "Sas 4H45", type: "depart", quantite: 2, tempsMax: 285 },
    { nom: "Sas 5H00", type: "depart", quantite: 2, tempsMax: 300 }
];

let deck = [], defausse = [], joueurActif = 1, aPioche = false, dernierCrasseJoueur = null, aJoueCarte = false;
let joueurs = [];
let modeJeu = null; // "premier" ou "contreLaMontre"
let typePartie = null; // "humains" ou "contreIA"
let nombreJoueurs = 0;
let enReactionActive = false;
let enAttentePasseJoueur = false;
let enFinDeTour = false;
let aReagi = false;
let crasseEnCours = null;
let cibleCrasse = null;

// Attacher les écouteurs d'événements directement
const btnModePremier = document.getElementById("modePremier");
const btnModeContreLaMontre = document.getElementById("modeContreLaMontre");
const btnModeHumains = document.getElementById("modeHumains");
const btnModeContreIA = document.getElementById("modeContreIA");
const btnReagir = document.getElementById("btnReagir");
const btnPiocher = document.getElementById("btnPiocher");
const btnPrendreDefausse = document.getElementById("btnPrendreDefausse");
const btnFinTour = document.getElementById("btnFinTour");
const btnPasser = document.getElementById("btnPasser");
const btnTermine = document.getElementById("btnTermine");
const btnPasseJoueur = document.getElementById("btnPasseJoueur");

if (btnModePremier && btnModeContreLaMontre && btnModeHumains && btnModeContreIA) {
    console.log("Boutons de mode trouvés, attache des événements...");
    btnModePremier.addEventListener("click", () => {
        console.log("Clic sur Mode Premier détecté");
        demarrerJeu("premier");
    });
    btnModeContreLaMontre.addEventListener("click", () => {
        console.log("Clic sur Mode Contre-la-montre détecté");
        demarrerJeu("contreLaMontre");
    });
    btnModeHumains.addEventListener("click", () => {
        console.log("Clic sur Mode Humains détecté");
        selectGameType("humains");
    });
    btnModeContreIA.addEventListener("click", () => {
        console.log("Clic sur Mode Contre IA détecté");
        selectGameType("contreIA");
    });
} else {
    console.error("Erreur : Boutons de mode ou de type introuvables", {
        btnModePremier: !!btnModePremier,
        btnModeContreLaMontre: !!btnModeContreLaMontre,
        btnModeHumains: !!btnModeHumains,
        btnModeContreIA: !!btnModeContreIA
    });
    alert("Erreur : Boutons de mode ou de type introuvables. Vérifiez l'HTML.");
}

if (btnReagir) btnReagir.addEventListener("click", activerReaction);
if (btnPiocher) btnPiocher.addEventListener("click", () => piocher("pioche"));
if (btnPrendreDefausse) btnPrendreDefausse.addEventListener("click", () => piocher("defausse"));
if (btnFinTour) btnFinTour.addEventListener("click", finTour);
if (btnPasser) btnPasser.addEventListener("click", passerReaction);
if (btnTermine) btnTermine.addEventListener("click", terminerReaction);
if (btnPasseJoueur) btnPasseJoueur.addEventListener("click", passerJoueur);

function demarrerJeu(mode) {
    console.log(`Mode sélectionné : ${mode}`);
    modeJeu = mode;
    const modeSelectionScreen = document.getElementById("modeSelectionScreen");
    const gameTypeScreen = document.getElementById("gameTypeScreen");
    if (modeSelectionScreen && gameTypeScreen) {
        console.log("Écrans trouvés, transition vers gameTypeScreen...");
        modeSelectionScreen.style.display = "none";
        gameTypeScreen.style.display = "block";
    } else {
        console.error("Erreur : modeSelectionScreen ou gameTypeScreen introuvable", {
            modeSelectionScreen: !!modeSelectionScreen,
            gameTypeScreen: !!gameTypeScreen
        });
        alert("Erreur d'initialisation. Rechargez la page.");
    }
}

function selectGameType(type) {
    console.log(`Type de partie sélectionné : ${type}`);
    typePartie = type;
    const gameTypeScreen = document.getElementById("gameTypeScreen");
    const playerSelectionScreen = document.getElementById("playerSelectionScreen");
    if (gameTypeScreen && playerSelectionScreen) {
        gameTypeScreen.style.display = "none";
        playerSelectionScreen.style.display = "block";
    } else {
        console.error("Erreur : gameTypeScreen ou playerSelectionScreen introuvable");
        alert("Erreur d'initialisation. Rechargez la page.");
    }
}

function selectPlayers(nbJoueurs) {
    console.log(`Nombre de joueurs sélectionné : ${nbJoueurs}`);
    nombreJoueurs = nbJoueurs;
    const playerSelectionScreen = document.getElementById("playerSelectionScreen");
    const gameScreen = document.getElementById("gameScreen");
    if (playerSelectionScreen && gameScreen) {
        playerSelectionScreen.style.display = "none";
        gameScreen.style.display = "block";
        init();
    } else {
        console.error("Erreur : playerSelectionScreen ou gameScreen introuvable");
        alert("Erreur d'initialisation. Rechargez la page.");
    }
}

function activerReaction() {
    enReactionActive = true;
    aReagi = false;
    console.log(`J${joueurActif} active la réaction`);
    maj();
    const joueur = getJoueur(joueurActif);
    if (joueur.estIA) {
        setTimeout(() => jouerReactionIA(joueur), 1000);
    }
}

function genererDeck() {
    let cartes = [];
    let id = 1;
    for (const c of cartesData) {
        for (let i = 0; i < c.quantite; i++) {
            cartes.push({ ...c, id: id++ });
        }
    }
    return cartes.sort(() => Math.random() - 0.5);
}

function genererDeckDepart() {
    let cartes = [];
    let id = 1000;
    for (const c of cartesDepart) {
        for (let i = 0; i < c.quantite; i++) {
            cartes.push({ ...c, id: id++ });
        }
    }
    return cartes.sort(() => Math.random() - 0.5);
}

function init() {
    if (!modeJeu || !typePartie || !nombreJoueurs) {
        console.error("Erreur : Mode de jeu, type de partie ou nombre de joueurs non sélectionné");
        setStatus("Erreur : Mode de jeu, type de partie ou nombre de joueurs non sélectionné.");
        return;
    }
    deck = genererDeck();
    const deckDepart = genererDeckDepart();
    
    let personnalites = typePartie === "contreIA" && modeJeu === "contreLaMontre" ? ["James", "Lucie", "Matt"] : ["James", "Lucie", "Matt"];
    personnalites = personnalites.sort(() => Math.random() - 0.5);
    
    joueurs = [];
    for (let i = 1; i <= nombreJoueurs; i++) {
        const main = deck.splice(0, 5);
        if (deckDepart.length > 0) {
            main.push(deckDepart.shift());
        } else {
            console.error("Erreur : Pas assez de cartes Départ disponibles");
            setStatus("Erreur : Pas assez de cartes Départ.");
            return;
        }
        joueurs.push({
            id: i,
            main: main,
            zone: [],
            pileParades: [],
            km: 0,
            temps: 0,
            points: 0,
            depart: false,
            sas: 0,
            huitKm: 0,
            dixKm: 0,
            estIA: typePartie === "contreIA" && i !== 1,
            personnalite: typePartie === "contreIA" && i !== 1 ? personnalites.shift() || "James" : null
        });
    }

    defausse = [];
    joueurActif = 1;
    aPioche = false;
    aJoueCarte = false;
    dernierCrasseJoueur = null;
    crasseEnCours = null;
    cibleCrasse = null;
    enReactionActive = false;
    enAttentePasseJoueur = false;
    enFinDeTour = false;
    aReagi = false;
    console.log("Jeu initialisé", { 
        modeJeu, 
        typePartie, 
        nombreJoueurs, 
        joueurs: joueurs.map(j => ({ id: j.id, estIA: j.estIA, personnalite: j.personnalite })) 
    });
    maj();
}

function getJoueur(id) {
    return joueurs.find(j => j.id === id);
}

function peutReagir(joueurId) {
    const joueur = getJoueur(joueurId);
    if (!joueur || !joueur.zone.length) return false;
    const crasseActive = joueur.zone[joueur.zone.length - 1];
    if (!crasseActive || !crasseActive.nom) return false;
    return joueur.main.some(carte => 
        (carte.type === "parade" && carte.contre && carte.contre.includes(crasseActive.nom)) ||
        (carte.type === "botte" && carte.protege && carte.protege.includes(crasseActive.nom))
    );
}

function maj() {
    const modeSelectionScreen = document.getElementById("modeSelectionScreen");
    const gameTypeScreen = document.getElementById("gameTypeScreen");
    const playerSelectionScreen = document.getElementById("playerSelectionScreen");
    const gameScreen = document.getElementById("gameScreen");
    const reactionScreen = document.getElementById("reactionScreen");
    const zoneJeu = document.getElementById("zoneJeu");
    const mainJoueur = document.getElementById("mainJoueur");
    const piocheDefausse = document.getElementById("piocheDefausse");
    const finTourContainer = document.getElementById("finTourContainer");
    const reactionButtonsContainer = document.getElementById("reactionButtonsContainer");
    const passeJoueurContainer = document.getElementById("passeJoueurContainer");
    const crasseTargetContainer = document.getElementById("crasseTargetContainer");
    const btnPrendreDefausse = document.getElementById("btnPrendreDefausse");
    const btnPasser = document.getElementById("btnPasser");
    const btnTermine = document.getElementById("btnTermine");

    if (!modeJeu) {
        modeSelectionScreen.style.display = "block";
        gameTypeScreen.style.display = "none";
        playerSelectionScreen.style.display = "none";
        gameScreen.style.display = "none";
        return;
    }
    if (!typePartie) {
        modeSelectionScreen.style.display = "none";
        gameTypeScreen.style.display = "block";
        playerSelectionScreen.style.display = "none";
        gameScreen.style.display = "none";
        return;
    }
    if (!nombreJoueurs) {
        modeSelectionScreen.style.display = "none";
        gameTypeScreen.style.display = "none";
        playerSelectionScreen.style.display = "block";
        gameScreen.style.display = "none";
        return;
    }

    const joueur = getJoueur(joueurActif);
    if (!joueur) {
        console.error("Erreur : joueurActif invalide", joueurActif);
        setStatus("Erreur : joueur actif invalide.");
        return;
    }

    if (joueur.id === 1 && joueur.estIA) {
        console.error("Erreur : J1 est marqué comme IA ! Correction forcée.");
        joueur.estIA = false;
        joueur.personnalite = null;
    }

    if (dernierCrasseJoueur && !enReactionActive && !joueur.estIA) {
        reactionScreen.style.display = "flex";
        gameScreen.style.display = "none";
        const crasseActive = joueur.zone.slice(-1)[0]?.nom || "inconnue";
        document.getElementById("reactionMessage").textContent = `J${joueurActif}, réagis à la crasse : ${crasseActive}`;
        return;
    } else {
        reactionScreen.style.display = "none";
        gameScreen.style.display = "block";
    }

    document.getElementById("joueurActif").textContent = `Joueur actif : J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}${dernierCrasseJoueur ? " (réaction)" : crasseEnCours ? " (choix cible)" : enFinDeTour ? " (fin de tour)" : ""}`;
    document.getElementById("status").textContent = getStatus();
    document.getElementById("piocheCount").textContent = `(${deck.length})`;
    document.getElementById("defausse").innerHTML = defausse.length ? defausse[defausse.length - 1].nom : "vide";

    zoneJeu.innerHTML = "";
    joueurs.forEach(joueur => {
        const div = document.createElement("div");
        div.className = estBloque(joueur.zone) ? "zone-bloquee" : "";
        div.innerHTML = `
            <h2>J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} (<span id="kmJ${joueur.id}">${joueur.km.toFixed(3)}</span> km, 
            <span id="tempsJ${joueur.id}">${modeJeu === "contreLaMontre" || typePartie === "contreIA" ? joueur.temps : "-"}</span> min, 
            Points: <span id="pointsJ${joueur.id}">${joueur.points}</span>)</h2>
            <div id="zoneJ${joueur.id}"></div>
            <h3>Parades utilisées</h3>
            <div id="pileParadesJ${joueur.id}" class="pile-parades"></div>
        `;
        zoneJeu.appendChild(div);
        joueur.zone.forEach(c => afficherCarte(document.getElementById(`zoneJ${joueur.id}`), c));
        if (modeJeu === "contreLaMontre" || typePartie === "contreIA") {
            joueur.pileParades.forEach(c => afficherCarte(document.getElementById(`pileParadesJ${joueur.id}`), c));
        }
    });

    mainJoueur.innerHTML = "";
    joueurs.forEach(joueur => {
        const div = document.createElement("div");
        div.id = `mainJ${joueur.id}Container`;
        div.innerHTML = `<h2>Main J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}</h2><div id="mainJ${joueur.id}"></div>`;
        mainJoueur.appendChild(div);
        if (!joueur.estIA && joueur.id === joueurActif && (enReactionActive || !enFinDeTour || (!aPioche && !aJoueCarte))) {
            joueur.main.forEach(c => afficherCarte(document.getElementById(`mainJ${joueur.id}`), c, true));
        }
    });

    if (enAttentePasseJoueur) {
        mainJoueur.style.display = "none";
        piocheDefausse.style.display = "none";
        finTourContainer.style.display = "none";
        reactionButtonsContainer.style.display = "none";
        passeJoueurContainer.style.display = joueur.estIA ? "none" : "block";
        crasseTargetContainer.style.display = "none";
        document.getElementById("passeJoueurMessage").textContent = `Passe au joueur n°${joueurActif === nombreJoueurs ? 1 : joueurActif + 1}`;
    } else if (crasseEnCours) {
        mainJoueur.style.display = "none";
        piocheDefausse.style.display = "none";
        finTourContainer.style.display = "none";
        reactionButtonsContainer.style.display = "none";
        passeJoueurContainer.style.display = "none";
        crasseTargetContainer.style.display = joueur.estIA ? "none" : "block";
        const crasseTargetButtons = document.getElementById("crasseTargetButtons");
        crasseTargetButtons.innerHTML = "";
        joueurs.forEach(j => {
            if (j.id !== joueurActif) {
                const btn = document.createElement("button");
                btn.innerText = `J${j.id}${j.estIA ? ` (IA, ${j.personnalite})` : ""}`;
                btn.onclick = () => poserCrasseSurJoueur(crasseEnCours, j.id);
                crasseTargetButtons.appendChild(btn);
            }
        });
    } else if (dernierCrasseJoueur && enReactionActive) {
        joueurs.forEach(j => {
            document.getElementById(`mainJ${j.id}Container`).style.display = (!j.estIA && j.id === joueurActif) ? "block" : "none";
        });
        mainJoueur.style.display = joueur.estIA ? "none" : "block";
        piocheDefausse.style.display = "none";
        finTourContainer.style.display = "none";
        reactionButtonsContainer.style.display = joueur.estIA ? "none" : "block";
        passeJoueurContainer.style.display = "none";
        crasseTargetContainer.style.display = "none";
        btnPasser.style.display = !aReagi ? "inline" : "none";
        btnTermine.style.display = aReagi ? "inline" : "none";
    } else if (dernierCrasseJoueur) {
        mainJoueur.style.display = "none";
        piocheDefausse.style.display = "none";
        finTourContainer.style.display = "none";
        reactionButtonsContainer.style.display = "none";
        passeJoueurContainer.style.display = "none";
        crasseTargetContainer.style.display = "none";
    } else if (enFinDeTour) {
        joueurs.forEach(j => {
            document.getElementById(`mainJ${j.id}Container`).style.display = (!j.estIA && j.id === joueurActif) ? "block" : "none";
        });
        mainJoueur.style.display = joueur.estIA ? "none" : "block";
        piocheDefausse.style.display = "none";
        finTourContainer.style.display = joueur.estIA ? "none" : "block";
        reactionButtonsContainer.style.display = "none";
        passeJoueurContainer.style.display = "none";
        crasseTargetContainer.style.display = "none";
    } else {
        joueurs.forEach(j => {
            document.getElementById(`mainJ${j.id}Container`).style.display = (!j.estIA && j.id === joueurActif) ? "block" : "none";
        });
        mainJoueur.style.display = joueur.estIA ? "none" : "block";
        piocheDefausse.style.display = (!aPioche && !aJoueCarte && joueur.main.length <= 6 && !joueur.estIA) ? "flex" : "none";
        btnPrendreDefausse.style.display = defausse.length > 0 ? "inline" : "none";
        finTourContainer.style.display = (aPioche || aJoueCarte) && joueur.main.length <= 6 && !joueur.estIA ? "block" : "none";
        reactionButtonsContainer.style.display = "none";
        passeJoueurContainer.style.display = "none";
        crasseTargetContainer.style.display = "none";
    }

    if (joueur.estIA && joueur.id !== 1 && !enReactionActive && !enAttentePasseJoueur && !crasseEnCours && !enFinDeTour) {
        console.log(`Appel de jouerTourIA pour J${joueur.id} (${joueur.personnalite})`);
        setTimeout(() => jouerTourIA(joueur), 1000);
    }
}

function getStatus() {
    const joueur = getJoueur(joueurActif);
    if (!joueur) return "Erreur : joueur actif invalide.";

    if (modeJeu === "premier" || typePartie === "contreIA") {
        const gagnant = joueurs.find(j => j.km >= 42.195 && j.zone.some(c => c.type === "arrivee"));
        if (gagnant) {
            calculerPointsFin();
            return `J${gagnant.id}${gagnant.estIA ? ` (IA, ${gagnant.personnalite})` : ""} gagne !`;
        }
    }
    if ((modeJeu === "contreLaMontre" || typePartie === "contreIA") && joueurs.every(j => j.km >= 42.195)) {
        calculerPointsFin();
        const meilleurTemps = Math.min(...joueurs.map(j => j.temps));
        const gagnants = joueurs.filter(j => j.temps === meilleurTemps);
        const resultat = gagnants.length === 1 ? `J${gagnants[0].id}${gagnants[0].estIA ? ` (IA, ${gagnants[0].personnalite})` : ""} gagne !` : `Égalité entre ${gagnants.map(j => `J${j.id}${j.estIA ? ` (IA, ${j.personnalite})` : ""}`).join(", ")} !`;
        return resultat;
    }

    if (crasseEnCours) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, choisis un joueur cible pour la crasse.`;
    if (dernierCrasseJoueur && enReactionActive) {
        if (aReagi) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, clique sur Terminé.`;
        return peutReagir(joueurActif) ? `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, réagis à la crasse !` : `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, aucune carte pour réagir. Clique sur Passer.`;
    }
    if (dernierCrasseJoueur) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, réagis à la crasse !`;
    if (enFinDeTour) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, termine ton tour.`;
    if ((aPioche || aJoueCarte) && joueur.main.length > 6) return `Tu dois défausser ${joueur.main.length - 6} carte(s) pour avoir 6 cartes en main.`;
    if (estBloque(joueur.zone)) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} est bloqué par une crasse !`;
    if (aJoueCarte) return `Clique sur Fin de tour.`;
    if (aPioche) return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, joue ou défausse une carte.`;
    return `J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}, piochez pour commencer votre tour.`;
}

function estCarteJouable(carte, joueurId) {
    if (!carte || !carte.nom || !carte.type) return false;
    const joueur = getJoueur(joueurId);
    let jouable = false;

    if (carte.type === "depart") {
        jouable = !joueur.depart;
    } else if (carte.type === "km") {
        jouable = joueur.depart &&
                  !estBloque(joueur.zone) &&
                  (!hasLimiteActive(joueur.zone) || carte.valeur <= 2) &&
                  (carte.valeur !== 8 || joueur.huitKm < 3) &&
                  (carte.valeur !== 10 || joueur.dixKm < 2) &&
                  (joueur.km + carte.valeur <= 42.195);
    } else if (carte.type === "arrivee") {
        jouable = joueur.km === 42 &&
                  joueur.depart &&
                  !estBloque(joueur.zone) &&
                  joueur.km + carte.valeur === 42.195;
    } else if (carte.type === "crasse") {
        jouable = true;
    } else if (carte.type === "parade") {
        jouable = joueur.zone.some(c => carte.contre && carte.contre.includes(c.nom));
    } else if (carte.type === "ravito" || carte.type === "botte") {
        jouable = true;
    }
    return jouable;
}

function afficherCarte(container, carte, interactif = false) {
    if (!carte || !carte.nom || !carte.type) return;
    const div = document.createElement("div");
    div.className = `carte ${carte.type}${carte.type === "botte" && container.id.includes("zone") && dernierCrasseJoueur ? " botte-surprise" : ""}`;
    
    // Encapsuler le texte dans un span pour un meilleur contrôle
    const texteCarte = document.createElement("span");
    let nomAffiche = carte.nom;
    if (carte.type === "depart" && modeJeu === "premier") nomAffiche = carte.nom.replace("Sas", "Départ");
    else if (carte.type === "km" && modeJeu === "premier") nomAffiche = carte.nom.split(" ")[0];
    texteCarte.innerText = `${nomAffiche}${(modeJeu === "contreLaMontre" || typePartie === "contreIA") && carte.temps > 0 ? ` (${carte.temps} min)` : ""}`;
    div.appendChild(texteCarte);
    
    if (interactif) {
        const joueur = getJoueur(joueurActif);
        const estEnReaction = dernierCrasseJoueur && dernierCrasseJoueur !== joueurActif && enReactionActive;
        const estJouable = estCarteJouable(carte, joueurActif);
        if (estJouable && !estEnReaction) {
            div.classList.add("jouable");
        }
        if (estEnReaction && !aReagi) {
            const crasseActive = joueur.zone.length > 0 ? joueur.zone[joueur.zone.length - 1].nom : "aucune";
            const peutReagir = (carte.type === "parade" && carte.contre && carte.contre.includes(crasseActive)) ||
                               (carte.type === "botte" && carte.protege && carte.protege.includes(crasseActive));
            if (peutReagir) {
                const btnReagir = document.createElement("button");
                btnReagir.innerText = "Réagir";
                btnReagir.onclick = () => jouerCarte(carte);
                div.appendChild(btnReagir);
            }
        } else if (!aJoueCarte && aPioche && !crasseEnCours) {
            if (carte.type === "crasse") {
                const btnJouer = document.createElement("button");
                btnJouer.innerText = "Jouer";
                btnJouer.onclick = () => jouerCrasse(carte);
                div.appendChild(btnJouer);
            } else if (estJouable) {
                const btnJouer = document.createElement("button");
                btnJouer.innerText = "Jouer";
                btnJouer.onclick = () => jouerCarte(carte);
                div.appendChild(btnJouer);
            }
            const btnDef = document.createElement("button");
            btnDef.innerText = "Jeter";
            btnDef.onclick = () => defausserCarte(carte);
            div.appendChild(btnDef);
        } else if ((aPioche || aJoueCarte) && joueur.main.length > 6) {
            div.classList.add("defausse-forcee");
            const btnDef = document.createElement("button");
            btnDef.innerText = "Jeter";
            btnDef.onclick = () => defausserCarte(carte);
            div.appendChild(btnDef);
        }
    }
    container.appendChild(div);
}

function piocher(source, automatique = false) {
    const joueur = getJoueur(joueurActif);
    if (!automatique) {
        if (dernierCrasseJoueur || crasseEnCours) return setStatus("Tu ne peux ni piocher ni défausser en phase de réaction ou de choix de cible.");
        if (aPioche) return setStatus("Tu as déjà pioché ce tour.");
        if (aJoueCarte) return setStatus("Tu as déjà joué une carte ce tour.");
        if (enFinDeTour) return setStatus("Termine ton tour, tu ne peux pas piocher.");
    }

    if (source === "defausse" && defausse.length > 0) {
        joueur.main.push(defausse.pop());
        console.log(`J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} pioche depuis défausse${automatique ? " (automatique)" : ""}`);
    } else if (source === "pioche") {
        if (deck.length === 0 && defausse.length > 0) {
            deck = defausse.splice(0).sort(() => Math.random() - 0.5);
            setStatus("Défausse mélangée dans la pioche.");
        }
        if (deck.length > 0) {
            joueur.main.push(deck.shift());
            console.log(`J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} pioche${automatique ? " (automatique)" : ""}`);
        } else {
            return setStatus("Pioche et défausse vides.");
        }
    } else {
        return setStatus("Défausse vide.");
    }
    if (!automatique) aPioche = true;
    maj();
}

function estBloque(zone) {
    return zone.some(c => 
        c.type === "crasse" && !["Limite 2K"].includes(c.nom) && 
        !zone.some(p => p.type === "parade" && p.contre && p.contre.includes(c.nom))
    );
}

function estProtege(zone, crasseNom) {
    return zone.some(b => b.type === "botte" && b.protege && b.protege.includes(crasseNom));
}

function hasLimiteActive(zone) {
    return zone.some(c => 
        ["Limite 2K"].includes(c.nom) && 
        !zone.some(p => p.type === "parade" && p.nom === "Meneur") &&
        !zone.some(b => b.type === "botte" && b.nom === "Stock de gel et barre")
    );
}

function jouerCrasse(carte) {
    if (!carte || carte.type !== "crasse") return setStatus("Erreur : carte invalide.");
    if (!aPioche) return setStatus("Tu dois piocher avant de jouer.");
    if (aJoueCarte) return setStatus("Tu ne peux jouer qu’une seule carte par tour.");
    crasseEnCours = carte;
    aJoueCarte = true;
    console.log(`J${joueurActif} joue crasse ${carte.nom}`);
    maj();
    const joueur = getJoueur(joueurActif);
    if (joueur.estIA) {
        setTimeout(() => choisirCibleIA(carte), 1000);
    }
}

function poserCrasseSurJoueur(carte, cibleId) {
    const joueurCible = getJoueur(cibleId);
    const joueur = getJoueur(joueurActif);
    if (!joueurCible || joueurCible.id === joueurActif) {
        crasseEnCours = null;
        aJoueCarte = false;
        maj();
        return setStatus("Cible invalide.");
    }
    if (!["Limite 2K"].includes(carte.nom) && !joueurCible.depart) {
        crasseEnCours = null;
        aJoueCarte = false;
        maj();
        return setStatus("Le joueur cible n’a pas posé de Départ.");
    }
    if (estProtege(joueurCible.zone, carte.nom)) {
        crasseEnCours = null;
        aJoueCarte = false;
        maj();
        return setStatus("Le joueur cible est protégé contre cette crasse.");
    }
    if (["Limite 2K"].includes(carte.nom)) {
        if (hasLimiteActive(joueurCible.zone)) {
            crasseEnCours = null;
            aJoueCarte = false;
            maj();
            return setStatus("Une limite est déjà active sur ce joueur.");
        }
    } else {
        const hasOtherCrasse = joueurCible.zone.some(c => c.type === "crasse" && !["Limite 2K"].includes(c.nom));
        if (hasOtherCrasse) {
            crasseEnCours = null;
            aJoueCarte = false;
            maj();
            return setStatus("Une autre crasse est déjà active sur ce joueur.");
        }
    }

    joueurCible.zone.push(carte);
    retirerCarte(joueur.main, carte);
    dernierCrasseJoueur = joueurActif;
    joueurActif = cibleId;
    crasseEnCours = null;
    cibleCrasse = cibleId;
    console.log(`Crasse ${carte.nom} posée sur J${cibleId} par J${joueur.id}`);
    setStatus(`J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} a posé ${carte.nom} sur J${cibleId}${joueurCible.estIA ? ` (IA, ${joueurCible.personnalite})` : ""}.`);
    maj();
}

function jouerCarte(carte) {
    if (!carte || !carte.nom || !carte.type) return setStatus("Erreur : carte invalide.");
    if (enFinDeTour) return setStatus("Termine ton tour, tu ne peux pas jouer.");
    if (!aPioche && !dernierCrasseJoueur) return setStatus("Tu dois piocher avant de jouer.");
    if (aJoueCarte && !dernierCrasseJoueur) return setStatus("Tu ne peux jouer qu’une seule carte par tour.");
    if (crasseEnCours) return setStatus("Choisis un joueur cible pour la crasse.");
    const joueur = getJoueur(joueurActif);
    const pileParades = joueur.pileParades;

    if (dernierCrasseJoueur && dernierCrasseJoueur !== joueurActif) {
        const crasseActive = joueur.zone[joueur.zone.length - 1];
        if (!crasseActive || !crasseActive.nom) return setStatus("Erreur : crasse active invalide.");
        if (carte.type === "parade" && carte.contre && carte.contre.includes(crasseActive.nom)) {
            const crasse = joueur.zone.pop();
            defausse.push(crasse, carte);
            // Pas d'ajout de temps pour les parades immédiates en réaction
            retirerCarte(joueur.main, carte);
            aReagi = true;
            if (joueur.main.length < 6 && (deck.length > 0 || defausse.length > 0)) {
                piocher("pioche", true);
            }
            console.log(`J${joueur.id} réagit avec ${carte.nom} contre ${crasse.nom}`);
            setStatus(`J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} a joué ${carte.nom} pour contrer ${crasse.nom}.`);
            maj();
            return;
        } else if (carte.type === "botte" && carte.protege && carte.protege.includes(crasseActive.nom)) {
            joueur.zone.push(carte);
            joueur.km += 8;
            joueur.points += (modeJeu === "premier" || typePartie === "contreIA") ? 10 : 8;
            retirerCarte(joueur.main, carte);
            defausse.push(joueur.zone.pop());
            aReagi = true;
            console.log(`J${joueur.id} réagit avec botte ${carte.nom} contre ${crasseActive.nom}`);
            setStatus(`J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} a joué ${carte.nom} pour contrer ${crasseActive.nom}.`);
            maj();
            return;
        }
        return setStatus("Carte invalide pour réagir à la crasse.");
    }

    if (!estCarteJouable(carte, joueurActif)) return setStatus("Action non autorisée pour cette carte.");

    if (carte.type === "depart") {
        joueur.depart = true;
        joueur.sas = carte.tempsMax;
        joueur.zone.push(carte);
        aJoueCarte = true;
    } else if (carte.type === "km") {
        joueur.km += carte.valeur;
        joueur.temps += (modeJeu === "contreLaMontre" || typePartie === "contreIA") ? carte.temps : 0;
        if (carte.valeur === 8) joueur.huitKm++;
        if (carte.valeur === 10) joueur.dixKm++;
        joueur.zone.push(carte);
        aJoueCarte = true;
    } else if (carte.type === "arrivee") {
        joueur.km += 0.195;
        joueur.zone.push(carte);
        aJoueCarte = true;
    } else if (carte.type === "parade") {
        const crasse = joueur.zone.find(c => carte.contre && carte.contre.includes(c.nom));
        if (!crasse) return setStatus("Aucune crasse à contrer avec cette parade.");
        if (modeJeu === "premier" || typePartie === "contreIA") {
            defausse.push(carte, joueur.zone.splice(joueur.zone.indexOf(crasse), 1)[0]);
            joueur.temps += carte.temps;
        } else {
            if (carte.nom === "Meneur") {
                defausse.push(carte, joueur.zone.splice(joueur.zone.indexOf(crasse), 1)[0]);
            } else {
                pileParades.push(carte);
                defausse.push(joueur.zone.splice(joueur.zone.indexOf(crasse), 1)[0]);
                joueur.temps += carte.temps;
            }
        }
        aJoueCarte = true;
    } else if (carte.type === "ravito") {
        joueurs.forEach(j => {
            j.zone = j.zone.filter(c => c.type !== "crasse" && c.type !== "parade");
            j.pileParades.length = 0;
        });
        defausse.push(carte);
        aJoueCarte = true;
    } else if (carte.type === "botte") {
        joueur.km += dernierCrasseJoueur ? 8 : 4;
        joueur.points += modeJeu === "premier" ? (dernierCrasseJoueur ? 10 : 5) : (dernierCrasseJoueur ? 8 : 4);
        joueur.zone.push(carte);
        aJoueCarte = true;
    }
    retirerCarte(joueur.main, carte);
    console.log(`J${joueur.id} joue ${carte.nom}`);
    setStatus(`J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} a joué ${carte.nom}.`);
    maj();
}

function defausserCarte(carte) {
    if (!carte || !carte.nom || !carte) return setStatus("Erreur : carte invalide.");
    if (dernierCrasseJoueur || crasseEnCours) return setStatus("Tu ne peux ni piocher ni défausser en phase de réaction ou de choix de cible.");
    if (enFinDeTour) return setStatus("Termine ton tour, tu ne peux pas défausser.");
    const joueur = getJoueur(joueurActif);
    if (!aPioche) return setStatus("Tu dois piocher avant de défausser.");
    if (aJoueCarte) return setStatus("Tu as déjà joué une carte ce tour.");
    retirerCarte(joueur.main, carte);
    defausse.push(carte);
    aJoueCarte = true;
    console.log(`J${joueur.id} défausse ${carte.nom}`);
    setStatus(`J${joueur.id}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""} a défaussé ${carte.nom}.`);
    maj();
}

function retirerCarte(main, carte) {
    const index = main.findIndex(c => c && c.id === carte.id);
    if (index !== -1) main.splice(index, 1);
}

function setStatus(message) {
    document.getElementById("status").textContent = message;
}

function calculerPointsFin() {
    if (modeJeu === "premier") {
        const gagnant = joueurs.find(j => j.km >= 42.195 && j.zone.some(c => c.type === "arrivee"));
        if (gagnant) {
            gagnant.points += 100;
            joueurs.forEach(j => {
                if (j !== gagnant && j.km === 42.195 && j.zone.some(c => c.type === "arrivee")) {
                    j.points += 50;
                } else if (j.km > 42.195) {
                    j.points = 0;
                }
            });
        }
    } else if (modeJeu === "contreLaMontre" || typePartie === "contreIA") {
        const meilleurTemps = Math.min(...joueurs.map(j => j.temps));
        joueurs.forEach(j => {
            if (j.temps === meilleurTemps) j.points += 30;
            if (j.temps < j.sas) j.points += 20 + Math.floor((j.sas - j.temps) / 15) * 10;
            else j.points -= Math.floor((j.temps - j.sas) / 15) * 10;
        });
    }

    const gameScreen = document.getElementById("gameScreen");
    gameScreen.innerHTML = `
        <h2>Résultats finaux</h2>
        <table style="margin: 20px auto; border-collapse: collapse;">
            <tr style="background-color: #f0f0f0;">
                <th style="padding: 10px; border: 1px solid #000;">Joueur</th>
                <th style="padding: 10px; border: 1px solid #000;">KM</th>
                <th style="padding: 10px; border: 1px solid #000;">Temps</th>
                <th style="padding: 10px; border: 1px solid #000;">Points</th>
            </tr>
            ${joueurs.map(j => `
                <tr>
                    <td style="padding: 10px; border: 1px solid #000;">J${j.id}${j.estIA ? ` (IA, ${j.personnalite})` : ""}</td>
                    <td style="padding: 10px; border: 1px solid #000;">${j.km.toFixed(3)}</td>
                    <td style="padding: 10px; border: 1px solid #000;">${j.temps} min</td>
                    <td style="padding: 10px; border: 1px solid #000;">${j.points}</td>
                </tr>
            `).join("")}
        </table>
        <button onclick="window.location.reload()">Nouvelle partie</button>
    `;
}

function finTour() {
    if (dernierCrasseJoueur) return setStatus("Tu dois réagir à la crasse avant de finir ton tour.");
    if (crasseEnCours) return setStatus("Choisis un joueur cible pour la crasse.");
    const joueur = getJoueur(joueurActif);

    if ((aPioche || aJoueCarte) && joueur.main.length > 6) {
        console.warn(`J${joueur.id} a ${joueur.main.length} cartes ! Défausse requise.`);
        setStatus(`Tu dois défausser ${joueur.main.length - 6} carte(s) pour avoir 6 cartes en main.`);
        maj();
        return;
    }

    enAttentePasseJoueur = true;
    console.log(`J${joueur.id} termine son tour`);
    maj();
}

function passerReaction() {
    if (!dernierCrasseJoueur || !enReactionActive) return setStatus("Action non autorisée hors phase de réaction.");
    if (aReagi) return setStatus("Tu as déjà réagi. Clique sur Terminé.");
    console.log(`J${joueurActif}${getJoueur(joueurActif).estIA ? ` (IA, ${getJoueur(joueurActif).personnalite})` : ""} passe sa réaction`);
    enReactionActive = false;
    aReagi = false;
    joueurActif = dernierCrasseJoueur;
    enFinDeTour = true;
    dernierCrasseJoueur = null;
    cibleCrasse = null;
    aPioche = false;
    setStatus(`J${joueurActif}${getJoueur(joueurActif).estIA ? ` (IA, ${joueurActif.personnalite})` : ""} a passé sa réaction.`);
    maj();
}

function terminerReaction() {
    if (!dernierCrasseJoueur || !enReactionActive) return setStatus("Action non autorisée hors phase de réaction.");
    if (!aReagi) return setStatus("Tu n’as pas réagi. Clique sur Passer.");
    console.log(`J${joueurActif}${getJoueur(joueurActif).estIA ? ` (IA, ${joueurActif.personnalite})` : ""} termine sa réaction`);
    enReactionActive = false;
    aReagi = false;
    joueurActif = dernierCrasseJoueur;
    enFinDeTour = true;
    dernierCrasseJoueur = null;
    cibleCrasse = null;
    aPioche = false;
    setStatus(`J${joueurActif}${getJoueur(joueurActif).estIA ? ` (IA, ${joueurActif.personnalite})` : ""} a terminé sa réaction.`);
    maj();
}

function passerJoueur() {
    aPioche = false;
    aJoueCarte = false;
    enAttentePasseJoueur = false;
    enFinDeTour = false;
    enReactionActive = false;
    dernierCrasseJoueur = null;
    crasseEnCours = null;
    cibleCrasse = null;
    aReagi = false;

    joueurActif = joueurActif === nombreJoueurs ? 1 : joueurActif + 1;
    const joueur = getJoueur(joueurActif);

    if (joueur.main.length > 6) {
        console.warn(`J${joueur.id} a ${joueur.main.length} cartes au début du tour !`);
        setStatus(`J${joueur.id}, défausse jusqu'à 6 cartes pour continuer.`);
        if (joueur.estIA) {
            while (joueur.main.length > 6) {
                const carte = joueur.main[0];
                defausserCarte(carte);
                console.log(`J${joueur.id} (IA) défausse automatiquement ${carte.nom}`);
            }
        }
    }

    console.log(`Passage au joueur J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}`);
    maj();
}

function jouerTourIA(joueur) {
    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : jouerTourIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    console.log(`Tour de J${joueur.id} (IA, ${joueur.personnalite}), état :`, {
        aPioche,
        aJoueCarte,
        enReactionActive,
        enAttentePasseJoueur,
        crasseEnCours,
        enFinDeTour,
        main: joueur.main.length
    });

    if (dernierCrasseJoueur || crasseEnCours || enReactionActive) {
        console.log(`J${joueur.id} ne peut pas jouer : en attente de réaction ou crasse`);
        return;
    }

    if (joueur.main.length > 6) {
        console.warn(`J${joueur.id} a ${joueur.main.length} cartes ! Défausse automatique.`);
        const carte = joueur.main[0];
        defausserCarte(carte);
        setTimeout(() => jouerTourIA(joueur), 1000);
        return;
    }

    if (!aPioche) {
        piocher(deck.length > 0 ? "pioche" : "defausse");
        setTimeout(() => jouerActionIA(joueur), 1000);
    } else {
        jouerActionIA(joueur);
    }
}

function jouerActionIA(joueur) {
    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : jouerActionIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    let carteJouee = null;
    console.log(`J${joueur.id} (IA, ${joueur.personnalite}) choisit une action`);

    if (joueur.personnalite === "James") {
        if (!joueur.depart) {
            carteJouee = joueur.main.find(c => c.type === "depart");
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const cartesKm = joueur.main.filter(c => c.type === "km" && estCarteJouable(c, joueur.id));
        if (cartesKm.length > 0) {
            carteJouee = cartesKm.find(c => c.valeur === 10 || c.valeur === 8) || cartesKm.sort((a, b) => b.valeur - a.valeur)[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        if (joueur.km === 42) {
            carteJouee = joueur.main.find(c => c.type === "arrivee" && estCarteJouable(c, joueur.id));
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const parades = joueur.main.filter(c => c.type === "parade" && estCarteJouable(c, joueur.id));
        if (parades.length > 0) {
            carteJouee = parades[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const bottesOuRavito = joueur.main.filter(c => (c.type === "botte" || c.type === "ravito") && estCarteJouable(c, joueur.id));
        if (bottesOuRavito.length > 0) {
            carteJouee = bottesOuRavito[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const crasses = joueur.main.filter(c => c.type === "crasse");
        if (crasses.length > 0) {
            carteJouee = crasses[0];
            jouerCrasse(carteJouee);
            return;
        }
        const nonJouables = joueur.main.filter(c => !estCarteJouable(c, joueur.id));
        if (nonJouables.length > 0) {
            defausserCarte(nonJouables[0]);
        } else if (joueur.main.length > 0) {
            defausserCarte(joueur.main[0]);
        }
        setTimeout(() => finTourIA(joueur), 1000);
    } else if (joueur.personnalite === "Lucie") {
        if (!joueur.depart) {
            carteJouee = joueur.main.find(c => c.type === "depart");
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const crasses = joueur.main.filter(c => c.type === "crasse");
        if (crasses.length > 0) {
            carteJouee = crasses.sort((a, b) => a.nom === "Limite 2K" ? -1 : 1)[0];
            jouerCrasse(carteJouee);
            return;
        }
        const parades = joueur.main.filter(c => c.type === "parade" && estCarteJouable(c, joueur.id));
        if (parades.length > 0) {
            carteJouee = parades[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const cartesKm = joueur.main.filter(c => c.type === "km" && estCarteJouable(c, joueur.id));
        if (cartesKm.length > 0) {
            carteJouee = cartesKm.sort((a, b) => a.temps - b.temps)[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        if (joueur.km === 42) {
            carteJouee = joueur.main.find(c => c.type === "arrivee" && estCarteJouable(c, joueur.id));
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const bottesOuRavito = joueur.main.filter(c => (c.type === "botte" || c.type === "ravito") && estCarteJouable(c, joueur.id));
        if (bottesOuRavito.length > 0) {
            carteJouee = bottesOuRavito[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const nonJouables = joueur.main.filter(c => !estCarteJouable(c, joueur.id));
        if (nonJouables.length > 0) {
            defausserCarte(nonJouables[0]);
        } else if (joueur.main.length > 0) {
            defausserCarte(joueur.main[0]);
        }
        setTimeout(() => finTourIA(joueur), 1000);
    } else if (joueur.personnalite === "Matt") {
        if (!joueur.depart) {
            carteJouee = joueur.main.find(c => c.type === "depart");
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const bottesOuRavito = joueur.main.filter(c => (c.type === "botte" || c.type === "ravito") && estCarteJouable(c, joueur.id));
        if (bottesOuRavito.length > 0) {
            carteJouee = bottesOuRavito[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const parades = joueur.main.filter(c => c.type === "parade" && estCarteJouable(c, joueur.id));
        if (parades.length > 0) {
            carteJouee = parades[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        const cartesKm = joueur.main.filter(c => c.type === "km" && estCarteJouable(c, joueur.id));
        if (cartesKm.length > 0) {
            carteJouee = cartesKm.sort((a, b) => a.temps - b.temps)[0];
            jouerCarte(carteJouee);
            setTimeout(() => finTourIA(joueur), 1000);
            return;
        }
        if (joueur.km === 42) {
            carteJouee = joueur.main.find(c => c.type === "arrivee" && estCarteJouable(c, joueur.id));
            if (carteJouee) {
                jouerCarte(carteJouee);
                setTimeout(() => finTourIA(joueur), 1000);
                return;
            }
        }
        const crasses = joueur.main.filter(c => c.type === "crasse");
        if (crasses.length > 0) {
            carteJouee = crasses[0];
            jouerCrasse(carteJouee);
            return;
        }
        const nonJouables = joueur.main.filter(c => !estCarteJouable(c, joueur.id));
        if (nonJouables.length > 0) {
            defausserCarte(nonJouables[0]);
        } else if (joueur.main.length > 0) {
            defausserCarte(joueur.main[0]);
        }
        setTimeout(() => finTourIA(joueur), 1000);
    }
}

function finTourIA(joueur) {
    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : finTourIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    if ((aPioche || aJoueCarte) && joueur.main.length > 6) {
        const carte = joueur.main[0];
        defausserCarte(carte);
        setTimeout(() => finTourIA(joueur), 1000);
        return;
    }

    finTour();
    setTimeout(() => passerJoueur(), 1000);
}

function choisirCibleIA(carte) {
    const joueur = getJoueur(joueurActif);
    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : choisirCibleIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    let cible = null;
    if (joueur.personnalite === "James") {
        const joueursAvecKm = joueurs.filter(j => j.id !== joueurActif && j.depart && j.km > 0);
        if (joueursAvecKm.length > 0) {
            cible = joueursAvecKm.sort((a, b) => b.km - a.km)[0];
        } else {
            cible = joueurs.find(j => j.id !== joueurActif && j.depart);
        }
    } else if (joueur.personnalite === "Lucie") {
        const joueursSansLimite = joueurs.filter(j => j.id !== joueurActif && j.depart && !hasLimiteActive(j.zone));
        if (carte.nom === "Limite 2K" && joueursSansLimite.length > 0) {
            cible = joueursSansLimite.sort((a, b) => b.km - a.km)[0];
        } else {
            const joueursSansCrasse = joueurs.filter(j => j.id !== joueurActif && j.depart && !j.zone.some(c => c.type === "crasse" && !["Limite 2K"].includes(c.nom)));
            if (joueursSansCrasse.length > 0) {
                cible = joueursSansCrasse.sort((a, b) => b.temps - a.temps)[0];
            } else {
                cible = joueurs.find(j => j.id !== joueurActif && j.depart);
            }
        }
    } else if (joueur.personnalite === "Matt") {
        const joueursSansCrasse = joueurs.filter(j => j.id !== joueurActif && j.depart && !j.zone.some(c => c.type === "crasse"));
        if (joueursSansCrasse.length > 0) {
            cible = joueursSansCrasse.sort((a, b) => b.temps - a.temps)[0];
        } else {
            cible = joueurs.find(j => j.id !== joueurActif && j.depart);
        }
    }

    if (cible) {
        console.log(`J${joueur.id} (IA, ${joueur.personnalite}) choisit J${cible.id} comme cible pour ${carte.nom}`);
        poserCrasseSurJoueur(carte, cible.id);
    } else {
        console.log(`J${joueur.id} (IA) n’a pas trouvé de cible valide pour ${carte.nom}`);
        crasseEnCours = null;
        aJoueCarte = false;
        maj();
        setTimeout(() => finTourIA(joueur), 1000);
    }
}

function jouerReactionIA(joueur) {
    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : jouerReactionIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    if (!dernierCrasseJoueur || !enReactionActive) {
        console.log(`J${joueur.id} (IA) ne peut pas réagir : pas en phase de réaction`);
        return;
    }

    const crasseActive = joueur.zone[joueur.zone.length - 1];
    if (!crasseActive || !crasseActive.nom) {
        console.log(`J${joueur.id} (IA) : aucune crasse active à contrer`);
        passerReaction();
        return;
    }

    let carteJouee = null;
    if (joueur.personnalite === "James") {
        carteJouee = joueur.main.find(c => 
            (c.type === "parade" && c.contre && c.contre.includes(crasseActive.nom)) ||
            (c.type === "botte" && c.protege && c.protege.includes(crasseActive.nom))
        );
    } else if (joueur.personnalite === "Lucie") {
        const parades = joueur.main.filter(c => c.type === "parade" && c.contre && c.contre.includes(crasseActive.nom));
        const bottes = joueur.main.filter(c => c.type === "botte" && c.protege && c.protege.includes(crasseActive.nom));
        carteJouee = parades.sort((a, b) => a.temps - b.temps)[0] || bottes[0];
    } else if (joueur.personnalite === "Matt") {
        const bottes = joueur.main.filter(c => c.type === "botte" && c.protege && c.protege.includes(crasseActive.nom));
        const parades = joueur.main.filter(c => c.type === "parade" && c.contre && c.contre.includes(crasseActive.nom));
        carteJouee = bottes[0] || parades.sort((a, b) => a.temps - b.temps)[0];
    }

    if (carteJouee) {
        console.log(`J${joueur.id} (IA, ${joueur.personnalite}) réagit avec ${carteJouee.nom}`);
        jouerCarte(carteJouee);
        setTimeout(() => terminerReaction(), 1000);
    } else {
        console.log(`J${joueur.id} (IA, ${joueur.personnalite}) passe sa réaction`);
        passerReaction();
    }
}