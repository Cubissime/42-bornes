// Données des cartes basées sur CARTES.xlsx
const cartesData = [
    // Cartes KM
    { nom: "1K très rapide", type: "km", quantite: 3, valeur: 1, temps: 3, image: "images/1K_très_rapide.png" },
    { nom: "1K rapide", type: "km", quantite: 3, valeur: 1, temps: 4, image: "images/1K_rapide.png" },
    { nom: "1K Normal", type: "km", quantite: 7, valeur: 1, temps: 5, image: "images/1K_Normal.png" },
    { nom: "1K lent", type: "km", quantite: 5, valeur: 1, temps: 7, image: "images/1K_lent.png" },
    { nom: "1K très lent", type: "km", quantite: 5, valeur: 1, temps: 9, image: "images/1K_très_lent.png" },
    { nom: "2K très rapide", type: "km", quantite: 3, valeur: 2, temps: 6, image: "images/2K_très_rapide.png" },
    { nom: "2K rapide", type: "km", quantite: 3, valeur: 2, temps: 8, image: "images/2K_rapide.png" },
    { nom: "2K Normal", type: "km", quantite: 7, valeur: 2, temps: 10, image: "images/2K_Normal.png" },
    { nom: "2K lent", type: "km", quantite: 5, valeur: 2, temps: 15, image: "images/2K_lent.png" },
    { nom: "2K très lent", type: "km", quantite: 5, valeur: 2, temps: 18, image: "images/2K_très_lent.png" },
    { nom: "5K très rapide", type: "km", quantite: 2, valeur: 5, temps: 15, image: "images/5K_très_rapide.png" },
    { nom: "5K rapide", type: "km", quantite: 2, valeur: 5, temps: 20, image: "images/5K_rapide.png" },
    { nom: "5K Normal", type: "km", quantite: 6, valeur: 5, temps: 25, image: "images/5K_Normal.png" },
    { nom: "5K lent", type: "km", quantite: 4, valeur: 5, temps: 35, image: "images/5K_lent.png" },
    { nom: "5K très lent", type: "km", quantite: 4, valeur: 5, temps: 45, image: "images/5K_très_lent.png" },
    { nom: "8K très rapide", type: "km", quantite: 1, valeur: 8, temps: 25, image: "images/8K_très_rapide.png" },
    { nom: "8K rapide", type: "km", quantite: 1, valeur: 8, temps: 35, image: "images/8K_rapide.png" },
    { nom: "8K Normal", type: "km", quantite: 4, valeur: 8, temps: 40, image: "images/8K_Normal.png" },
    { nom: "8K lent", type: "km", quantite: 2, valeur: 8, temps: 60, image: "images/8K_lent.png" },
    { nom: "8K très lent", type: "km", quantite: 2, valeur: 8, temps: 75, image: "images/8K_très_lent.png" },
    { nom: "10K très rapide", type: "km", quantite: 1, valeur: 10, temps: 35, image: "images/10K_très_rapide.png" },
    { nom: "10K rapide", type: "km", quantite: 1, valeur: 10, temps: 45, image: "images/10K_rapide.png" },
    { nom: "10K Normal", type: "km", quantite: 4, valeur: 10, temps: 60, image: "images/10K_Normal.png" },
    { nom: "10K lent", type: "km", quantite: 2, valeur: 10, temps: 75, image: "images/10K_lent.png" },
    { nom: "10K très lent", type: "km", quantite: 2, valeur: 10, temps: 90, image: "images/10K_très_lent.png" },
    { nom: "Carte arrivée", type: "arrivee", quantite: 10, valeur: 0.195, temps: 0, image: "images/Carte_arrivée.png" },
    // Crasses
    { nom: "Chute", type: "crasse", quantite: 6, temps: 0, image: "images/Chute.png" },
    { nom: "Crampe", type: "crasse", quantite: 6, temps: 0, image: "images/Crampe.png" },
    { nom: "Déshydratation", type: "crasse", quantite: 6, temps: 0, image: "images/Déshydratation.png" },
    { nom: "Hypoglycémie", type: "crasse", quantite: 6, temps: 0, image: "images/Hypoglycémie.png" },
    { nom: "Pipi Femme", type: "crasse", quantite: 3, temps: 0, image: "images/Pipi_Femme.png" },
    { nom: "Pipi Homme", type: "crasse", quantite: 3, temps: 0, image: "images/Pipi_Homme.png" },
    { nom: "Limite 2K femme", type: "crasse", quantite: 4, temps: 0, image: "images/Limite_2K_femme.png" },
    { nom: "Limite 2K homme", type: "crasse", quantite: 4, temps: 0, image: "images/Limite_2K_homme.png" },
    // Parades
    { nom: "Banane", type: "parade", quantite: 6, temps: 3, contre: ["Hypoglycémie"], image: "images/Banane.png" },
    { nom: "Sucres", type: "parade", quantite: 6, temps: 1, contre: ["Hypoglycémie"], image: "images/Sucres.png" },
    { nom: "Eau", type: "parade", quantite: 12, temps: 2, contre: ["Déshydratation"], image: "images/Eau.png" },
    { nom: "Electrolyte", type: "parade", quantite: 12, temps: 2, contre: ["Crampe"], image: "images/Electrolyte.png" },
    { nom: "Medic", type: "parade", quantite: 12, temps: 7, contre: ["Chute"], image: "images/Medic.png" },
    { nom: "Buisson", type: "parade", quantite: 6, temps: 4, contre: ["Pipi Femme", "Pipi Homme"], image: "images/Buisson.png" },
    { nom: "Voitures", type: "parade", quantite: 6, temps: 3, contre: ["Pipi Femme", "Pipi Homme"], image: "images/Voitures.png" },
    { nom: "Meneur", type: "parade", quantite: 16, temps: 0, contre: ["Limite 2K femme", "Limite 2K homme"], image: "images/Meneur.png" },
    // Ravitaillement
    { nom: "Ravito", type: "ravito", quantite: 8, temps: 0, image: "images/Ravito.png" },
    // Bottes
    { nom: "3 pipis avant départ", type: "botte", quantite: 1, temps: 0, protege: ["Pipi Femme", "Pipi Homme"], kmNormal: 4, kmReaction: 8, image: "images/3_pipis_avant_départ.png" },
    { nom: "Genouillere", type: "botte", quantite: 1, temps: 0, protege: ["Chute"], kmNormal: 4, kmReaction: 8, image: "images/Genouillere.png" },
    { nom: "gourdes d'electrolyte", type: "botte", quantite: 1, temps: 0, protege: ["Crampe"], kmNormal: 4, kmReaction: 8, image: "images/gourdes_d_electrolyte.png" },
    { nom: "poche d'eau", type: "botte", quantite: 1, temps: 0, protege: ["Déshydratation"], kmNormal: 4, kmReaction: 8, image: "images/poche_d_eau.png" },
    { nom: "stock de gel et de barre", type: "botte", quantite: 1, temps: 0, protege: ["Hypoglycémie", "Limite 2K femme", "Limite 2K homme"], kmNormal: 4, kmReaction: 8, image: "images/stock_de_gel_et_de_barre.png" }
];

// Cartes Départ séparées
const cartesDepart = [
    { nom: "Sas 2H15", type: "depart", quantite: 2, tempsMax: 135, image: "images/Sas_2H15.png" },
    { nom: "Sas 2H30", type: "depart", quantite: 2, tempsMax: 150, image: "images/Sas_2H30.png" },
    { nom: "Sas 2H45", type: "depart", quantite: 2, tempsMax: 165, image: "images/Sas_2H45.png" },
    { nom: "Sas 3H00", type: "depart", quantite: 2, tempsMax: 180, image: "images/Sas_3H00.png" },
    { nom: "Sas 3H15", type: "depart", quantite: 2, tempsMax: 195, image: "images/Sas_3H15.png" },
    { nom: "Sas 3H30", type: "depart", quantite: 2, tempsMax: 210, image: "images/Sas_3H30.png" },
    { nom: "Sas 3H45", type: "depart", quantite: 2, tempsMax: 225, image: "images/Sas_3H45.png" },
    { nom: "Sas 4H00", type: "depart", quantite: 2, tempsMax: 240, image: "images/Sas_4H00.png" },
    { nom: "Sas 4H15", type: "depart", quantite: 2, tempsMax: 255, image: "images/Sas_4H15.png" },
    { nom: "Sas 4H30", type: "depart", quantite: 2, tempsMax: 270, image: "images/Sas_4H30.png" },
    { nom: "Sas 4H45", type: "depart", quantite: 2, tempsMax: 285, image: "images/Sas_4H45.png" },
    { nom: "Sas 5H00", type: "depart", quantite: 2, tempsMax: 300, image: "images/Sas_5H00.png" }
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

document.addEventListener("click", () => {
    document.querySelectorAll(".liste-deroulante").forEach(l => {
        l.style.display = "none";
    });
});

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
    console.log(`maj appelé pour J${joueurActif}, estIA=${getJoueur(joueurActif)?.estIA}, modeJeu=${modeJeu}, typePartie=${typePartie}, main=${getJoueur(joueurActif)?.main.length} cartes`);

    // Récupérer les éléments du DOM
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

    // Gérer l'affichage des écrans en fonction de l'état du jeu
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

    // Forcer J1 à être humain
    if (joueur.id === 1 && joueur.estIA) {
        console.error(`Erreur : J1 est marqué comme IA ! Correction forcée.`);
        joueur.estIA = false;
        joueur.personnalite = null;
    }

    // Afficher l'écran de réaction si un joueur doit réagir à une crasse
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

    // Mettre à jour les informations du joueur actif et le statut
    document.getElementById("joueurActif").textContent = `Joueur actif : J${joueurActif}${joueur.estIA ? ` (IA, ${joueur.personnalite})` : ""}${dernierCrasseJoueur ? " (réaction)" : crasseEnCours ? " (choix cible)" : enFinDeTour ? " (fin de tour)" : ""}`;
    document.getElementById("status").textContent = getStatus();
    // Suppression de : document.getElementById("piocheCount").textContent = `(${deck.length})`;

    // Mettre à jour la pioche et la défausse avec actualiserPiocheDefausse
    actualiserPiocheDefausse();

    // ... (le reste de la fonction maj reste inchangé)
}
// Nouvelle fonction pour regrouper les cartes
function regrouperCartes(cartes) {
    const groupes = [];
    const carteMap = {};

    cartes.forEach(carte => {
        if (!carte || !carte.nom || !carte.type) return;
        if (["botte", "depart"].includes(carte.type)) {
            groupes.push({ carte, quantite: 1, totalKm: carte.valeur || 0, totalTemps: carte.temps || 0 });
        } else if (carte.type === "crasse" && !carte.contre) {
            groupes.push({ carte, quantite: 1, totalKm: 0, totalTemps: 0 });
        } else if (carte.type === "parade" && carte.contre && cartes.some(c => c.type === "crasse" && c.nom === carte.contre)) {
            groupes.push({ carte, quantite: 1, totalKm: 0, totalTemps: 0 });
        } else {
            let cle = `${carte.type}-${carte.nom}`;
            if (carte.type === "km") {
                const distance = carte.nom.split(" ")[0];
                cle = `${carte.type}-${distance}`;
            }
            if (!carteMap[cle]) {
                carteMap[cle] = { 
                    carte, 
                    quantite: 0, 
                    totalKm: 0, 
                    totalTemps: 0 
                };
                groupes.push(carteMap[cle]);
            }
            carteMap[cle].quantite += 1;
            carteMap[cle].totalKm += carte.valeur || 0;
            carteMap[cle].totalTemps += carte.temps || 0;
        }
    });

    console.log("Groupes créés par regrouperCartes :", groupes.map(g => ({
        nom: g.carte.nom,
        type: g.carte.type,
        quantite: g.quantite,
        totalKm: g.totalKm,
        totalTemps: g.totalTemps
    })));

    return groupes;
}

// Nouvelle fonction pour afficher une carte ou un groupe de cartes
function afficherCarteGroupee(container, carte, quantite, totalKm = 0, totalTemps = 0) {
    if (!carte || !carte.nom || !carte.type) {
        console.warn("afficherCarteGroupee - Carte invalide:", carte);
        return;
    }

    console.log(`afficherCarteGroupee - Carte: ${carte.nom}, Type: ${carte.type}, Quantité: ${quantite}, Total KM: ${totalKm}, Total Temps: ${totalTemps}, estReaction: ${carte.estReaction}`);

    const div = document.createElement("div");
    const isBotteReaction = carte.type === "botte" && carte.estReaction === true;
    div.className = `carte ${carte.type}${carte.type === "botte" && container.id.includes("zone") && dernierCrasseJoueur ? " botte-surprise" : ""}${quantite > 1 ? " carte-regroupee carte-chevauchee" : ""}${isBotteReaction ? " botte-reaction" : ""}`;

    // Ajouter l'image de la carte
    const img = document.createElement("img");
    img.src = carte.image || "images/placeholder.png";
    img.alt = carte.nom;
    img.className = "carte-image";
    img.onerror = () => {
        console.warn(`Image manquante pour la carte : ${carte.nom}`);
        img.style.display = "none";
        const texteErreur = document.createElement("span");
        texteErreur.innerText = carte.nom;
        texteErreur.style.color = "red";
        texteErreur.style.fontSize = "11px";
        div.insertBefore(texteErreur, img);
    };
    div.appendChild(img);

    // Ajouter le texte de la carte
    const texteCarte = document.createElement("span");
    let nomAffiche = carte.nom;
    if (carte.type === "depart" && modeJeu === "premier") {
        nomAffiche = carte.nom.replace("Sas", "Départ");
    } else if (carte.type === "km") {
        nomAffiche = carte.nom.split(" ")[0];
        if ((modeJeu === "contreLaMontre" || typePartie === "contreIA") && totalTemps > 0) {
            nomAffiche += ` (${totalTemps} min)`;
        }
    }
    texteCarte.innerText = nomAffiche;
    div.appendChild(texteCarte);

    if (quantite > 1) {
        const badge = document.createElement("div");
        badge.className = "badge";
        badge.innerText = `x${quantite}`;
        div.appendChild(badge);

        const listeDeroulante = document.createElement("div");
        listeDeroulante.className = "liste-deroulante";
        const cartesDansZone = container.id.startsWith("zoneJ") 
            ? joueurs[parseInt(container.id.replace("zoneJ", "")) - 1].zone 
            : joueurs[parseInt(container.id.replace("pileParadesJ", "")) - 1].pileParades;
        const cartesRegroupees = cartesDansZone.filter(c => 
            c.type === carte.type && (carte.type !== "km" || c.nom.split(" ")[0] === carte.nom.split(" ")[0])
        );
        cartesRegroupees.forEach(c => {
            const carteIndividuelle = document.createElement("div");
            carteIndividuelle.className = `carte ${c.type}`;
            const imgIndividuelle = document.createElement("img");
            imgIndividuelle.src = c.image || "images/placeholder.png";
            imgIndividuelle.alt = c.nom;
            imgIndividuelle.className = "carte-image";
            imgIndividuelle.onerror = () => {
                console.warn(`Image manquante pour la carte : ${c.nom}`);
                imgIndividuelle.style.display = "none";
                const texteErreur = document.createElement("span");
                texteErreur.innerText = c.nom;
                texteErreur.style.color = "red";
                texteErreur.style.fontSize = "11px";
                carteIndividuelle.insertBefore(texteErreur, imgIndividuelle);
            };
            carteIndividuelle.appendChild(imgIndividuelle);
            const texteIndividuel = document.createElement("span");
            let nomIndividuel = c.nom;
            if (c.type === "km") {
                nomIndividuel = c.nom.split(" ")[0];
                if ((modeJeu === "contreLaMontre" || typePartie === "contreIA") && c.temps > 0) {
                    nomIndividuel += ` (${c.temps} min)`;
                }
            }
            texteIndividuel.innerText = nomIndividuel;
            carteIndividuelle.appendChild(texteIndividuel);
            listeDeroulante.appendChild(carteIndividuelle);
        });
        div.appendChild(listeDeroulante);

        div.addEventListener("click", (e) => {
            e.stopPropagation();
            const currentlyVisible = listeDeroulante.style.display === "block";
            document.querySelectorAll(".liste-deroulante").forEach(l => {
                l.style.display = "none";
            });
            listeDeroulante.style.display = currentlyVisible ? "none" : "block";
        });
    }

    container.appendChild(div);
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
function actualiserPiocheDefausse() {
    const pioche = document.getElementById("pioche");
    const defausse = document.getElementById("defausse");
    pioche.innerHTML = "";
    defausse.innerHTML = "";

    // Afficher le dos de la carte pour la pioche
    if (deck.length > 0) {
        const div = document.createElement("div");
        div.className = "carte pioche";
        const img = document.createElement("img");
        img.src = "images/Back_Card.png";
        img.alt = "Dos de carte";
        img.className = "carte-image";
        img.onerror = () => {
            console.warn("Image du dos de carte manquante : Back_Card.png");
            img.style.display = "none";
            const texteErreur = document.createElement("span");
            texteErreur.innerText = "Pioche";
            texteErreur.style.color = "red";
            texteErreur.style.fontSize = "11px";
            div.insertBefore(texteErreur, img);
        };
        div.appendChild(img);
        const texte = document.createElement("span");
        texte.className = "pioche-count";
        texte.innerText = `Pioche (${deck.length})`;
        texte.style.display = "block";
        div.appendChild(texte);
        pioche.appendChild(div);
    } else {
        const texte = document.createElement("span");
        texte.innerText = "Pioche vide";
        pioche.appendChild(texte);
    }

    // Afficher l'avant de la dernière carte pour la défausse, ou "Défausse vide"
    if (defausse.length > 0) {
        const carte = defausse[defausse.length - 1];
        afficherCarte(defausse, carte, false);
    } else {
        const div = document.createElement("div");
        div.className = "carte defausse";
        const img = document.createElement("img");
        img.src = "images/Back_Card.png";
        img.alt = "Défausse vide";
        img.className = "carte-image";
        img.onerror = () => {
            console.warn("Image du dos de carte manquante : Back_Card.png");
            img.style.display = "none";
            const texteErreur = document.createElement("span");
            texteErreur.innerText = "Défausse";
            texteErreur.style.color = "red";
            texteErreur.style.fontSize = "11px";
            div.insertBefore(texteErreur, img);
        };
        div.appendChild(img);
        const texte = document.createElement("span");
        texte.className = "defausse-count";
        texte.innerText = "Défausse vide";
        texte.style.display = "block";
        div.appendChild(texte);
        defausse.appendChild(div);
    }
}

function afficherCarte(container, carte, interactif = false) {
    if (!carte || !carte.nom || !carte.type) {
        console.warn("afficherCarte - Carte invalide:", carte);
        return;
    }

    const estReaction = carte.estReaction === true;
    console.log(`afficherCarte - Carte: ${carte.nom}, Type: ${carte.type}, estReaction: ${carte.estReaction}, Applique botte-reaction: ${carte.type === "botte" && estReaction}`);

    const div = document.createElement("div");
    const isBotteReaction = carte.type === "botte" && estReaction;
    div.className = `carte ${carte.type}${carte.type === "botte" && container.id.includes("zone") && dernierCrasseJoueur ? " botte-surprise" : ""}${isBotteReaction ? " botte-reaction" : ""}`;

    // Ajouter l'image de la carte (avant de la carte)
    const img = document.createElement("img");
    img.src = carte.image || "images/placeholder.png";
    img.alt = carte.nom;
    img.className = "carte-image";
    img.onerror = () => {
        console.warn(`Image manquante pour la carte : ${carte.nom}`);
        img.style.display = "none"; // Cacher l'image cassée
        const texteErreur = document.createElement("span");
        texteErreur.innerText = carte.nom; // Afficher le nom à la place
        texteErreur.style.color = "red";
        texteErreur.style.fontSize = "11px";
        div.insertBefore(texteErreur, img);
    };
    div.appendChild(img);

    // Ajouter le texte de la carte
    const texteCarte = document.createElement("span");
    let nomAffiche = carte.nom;
    if (carte.type === "depart" && modeJeu === "premier") {
        nomAffiche = carte.nom.replace("Sas", "Départ");
    } else if (carte.type === "km") {
        nomAffiche = carte.nom.split(" ")[0];
        if ((modeJeu === "contreLaMontre" || typePartie === "contreIA") && carte.temps > 0) {
            nomAffiche += ` (${carte.temps} min)`;
        }
    }
    texteCarte.innerText = nomAffiche;
    div.appendChild(texteCarte);

    if (interactif) {
        const joueur = getJoueur(joueurActif);
        const estEnReaction = dernierCrasseJoueur && dernierCrasseJoueur !== joueurActif && enReactionActive;
        const estJouable = estCarteJouable(carte, joueurActif);

        const boutonsContainer = document.createElement("div");
        boutonsContainer.className = "boutons-container";

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
                boutonsContainer.appendChild(btnReagir);
            }
        } else if (!aJoueCarte && aPioche && !crasseEnCours) {
            if (carte.type === "crasse") {
                const btnJouer = document.createElement("button");
                btnJouer.innerText = "Jouer";
                btnJouer.onclick = () => jouerCrasse(carte);
                boutonsContainer.appendChild(btnJouer);
            } else if (estJouable) {
                const btnJouer = document.createElement("button");
                btnJouer.innerText = "Jouer";
                btnJouer.onclick = () => jouerCarte(carte);
                boutonsContainer.appendChild(btnJouer);
            }
            const btnDef = document.createElement("button");
            btnDef.innerText = "Jeter";
            btnDef.onclick = () => defausserCarte(carte);
            boutonsContainer.appendChild(btnDef);
        } else if ((aPioche || aJoueCarte) && joueur.main.length > 6) {
            div.classList.add("defausse-forcee");
            const btnDef = document.createElement("button");
            btnDef.innerText = "Jeter";
            btnDef.onclick = () => defausserCarte(carte);
            boutonsContainer.appendChild(btnDef);
        }

        if (boutonsContainer.children.length > 0) {
            div.appendChild(boutonsContainer);
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
    dernierCrasseJoueur = joueur.id; // J1
    joueurActif = cibleId; // J2
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

    // Initialiser estReaction à false pour toutes les cartes
    carte.estReaction = false;

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
            // Retirer la crasse avant d'ajouter la botte
            const crasseIndex = joueur.zone.findIndex(c => c.nom === crasseActive.nom);
            if (crasseIndex === -1) return setStatus("Erreur : crasse introuvable dans la zone.");
            const crasse = joueur.zone.splice(crasseIndex, 1)[0]; // Retirer la crasse
            defausse.push(crasse); // Défausser la crasse

            // Ajouter la botte après avoir retiré la crasse
            carte.estReaction = true;
            joueur.zone.push(carte);
            joueur.km += carte.kmReaction || carte.kmNormal || 0;
            joueur.points += (modeJeu === "premier" || typePartie === "contreIA") ? 10 : 8;
            retirerCarte(joueur.main, carte);
            aReagi = true;

            // Ajouter une carte automatiquement si la main a moins de 6 cartes
            if (joueur.main.length < 6 && (deck.length > 0 || defausse.length > 0)) {
                piocher("pioche", true);
            }

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
        // Utiliser kmNormal car posée pendant le tour normal
        carte.estReaction = false; // Pas une réaction
        joueur.km += carte.kmNormal || 0;
        joueur.points += modeJeu === "premier" ? 5 : 4;
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
    console.log(`Avant passerJoueur : joueurActif=${joueurActif}, aPioche=${aPioche}, aJoueCarte=${aJoueCarte}, enFinDeTour=${enFinDeTour}, enReactionActive=${enReactionActive}, crasseEnCours=${crasseEnCours}`);

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

    if (!joueur) {
        console.error(`Erreur : Aucun joueur trouvé pour joueurActif=${joueurActif}`);
        return;
    }

    console.log(`Nouveau joueurActif : J${joueur.id}, estIA=${joueur.estIA}, main=${joueur.main.length} cartes`);

    if (joueur.main.length > 6) {
        console.warn(`J${joueur.id} a ${joueur.main.length} cartes au début du tour !`);
        setStatus(`J${joueur.id}, défausse jusqu'à 6 cartes pour continuer.`);
        if (joueur.estIA) {
            while (joueur.main.length > 6) {
                const carte = joueur.main[0];
                defausserCarte(carte);
                console.log(`J${joueur.id} (IA) défausse automatiquement ${carte.nom}`);
            }
            maj();
        } else {
            console.log(`J${joueur.id} (humain) doit défausser manuellement`);
            // Ne pas appeler maj() ici pour permettre à J1 de défausser manuellement
            return;
        }
    }

    console.log(`Après passerJoueur : joueurActif=${joueurActif}, estIA=${joueur.estIA}, personnalite=${joueur.personnalite}`);
    maj();
}

function jouerTourIA(joueur) {
    console.log(`jouerTourIA appelé pour J${joueur.id}, estIA=${joueur.estIA}, personnalite=${joueur.personnalite}`);

    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : jouerTourIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    if (joueurActif !== joueur.id) {
        console.error(`Erreur : jouerTourIA appelé pour J${joueur.id} mais joueurActif=${joueurActif}`);
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
        console.log(`J${joueur.id} défausse automatiquement ${carte.nom}`);
        setTimeout(() => {
            if (joueurActif === joueur.id && joueur.main.length > 6) {
                jouerTourIA(joueur);
            } else {
                maj();
            }
        }, 1000);
        return;
    }

    if (!aPioche) {
        console.log(`J${joueur.id} pioche`);
        piocher(deck.length > 0 ? "pioche" : "defausse");
        setTimeout(() => {
            if (joueurActif === joueur.id) {
                jouerActionIA(joueur);
            }
        }, 1000);
    } else {
        jouerActionIA(joueur);
    }
}

function jouerActionIA(joueur) {
    console.log(`jouerActionIA pour J${joueur.id} (${joueur.personnalite}), main=${joueur.main.length} cartes`);

    if (joueur.id === 1 || !joueur.estIA) {
        console.error(`Erreur : jouerActionIA appelé pour J${joueur.id} qui n'est pas une IA !`);
        return;
    }

    if (joueurActif !== joueur.id) {
        console.error(`Erreur : jouerActionIA appelé pour J${joueur.id} mais joueurActif=${joueurActif}`);
        return;
    }

    const cartesJouables = joueur.main.filter(carte => estCarteJouable(carte, joueur.id));
    const cartesCrasse = joueur.main.filter(carte => carte.type === "crasse");

    console.log(`J${joueur.id} cartes jouables :`, cartesJouables.map(c => c.nom));
    console.log(`J${joueur.id} cartes crasse :`, cartesCrasse.map(c => c.nom));

    if (cartesCrasse.length > 0 && Math.random() < 0.5) {
        const crasse = cartesCrasse[0];
        const cibles = joueurs.filter(j => j.id !== joueur.id && !j.zone.some(c => c.type === "botte" && c.protege && c.protege.includes(crasse.nom)));
        if (cibles.length > 0) {
            const cible = cibles[Math.floor(Math.random() * cibles.length)];
            console.log(`J${joueur.id} joue crasse ${crasse.nom} sur J${cible.id}`);
            jouerCrasse(crasse, cible.id);
            return;
        }
    }

    if (cartesJouables.length > 0) {
        const carte = cartesJouables[Math.floor(Math.random() * cartesJouables.length)];
        console.log(`J${joueur.id} joue ${carte.nom}`);
        jouerCarte(carte);
        setTimeout(() => {
            if (joueurActif === joueur.id && !crasseEnCours && !enReactionActive) {
                console.log(`J${joueur.id} termine son tour après avoir joué ${carte.nom}`);
                enFinDeTour = true;
                maj();
            }
        }, 1000);
        return;
    }

    if (aPioche && !aJoueCarte) {
        console.log(`J${joueur.id} n'a pas de carte jouable, défausse une carte`);
        const carte = joueur.main[0];
        defausserCarte(carte);
        console.log(`J${joueur.id} défausse ${carte.nom}`);
    }

    console.log(`J${joueur.id} termine son tour`);
    enFinDeTour = true;
    setTimeout(() => {
        if (joueurActif === joueur.id) {
            passerJoueur();
        }
    }, 1000);
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
