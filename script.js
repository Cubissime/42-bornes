body {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

/* Masquer les écrans par défaut */
#modeSelectionScreen, #gameTypeScreen, #playerSelectionScreen, #gameScreen, #reactionScreen, #endGameScreen {
    display: none;
}

/* Afficher l'écran de jeu par défaut */
#gameScreen {
    display: block;
}

/* Styles pour les conteneurs principaux */
#zoneJeu, #mainJoueur, #piocheJet {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.zone-joueur, .main-joueur, .pile-parades {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
}

/* Style pour les cartes */
.carte {
    width: 100px;
    height: 140px;
    margin: 5px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 14px;
    cursor: default;
    transition: transform 0.2s;
}

/* Couleurs des cartes selon leur type */
.carte.km { background-color: #d4edda; } /* Vert clair */
.carte.crasse { background-color: #f8d7da; } /* Rouge clair */
.carte.parade { background-color: #cce5ff; } /* Bleu clair */
.carte.botte { background-color: #d1ecf1; } /* Cyan clair */
.carte.ravito { background-color: #e2e3e5; } /* Gris clair */
.carte.arrivee { background-color: #fff3cd; } /* Jaune clair */
.carte.depart { background-color: #e9ecef; } /* Gris très clair */

/* Boutons sur les cartes */
.carte button {
    margin: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
}

.carte button:hover {
    background-color: #0056b3;
}

/* Style pour les cartes empilées */
.carte-superposee {
    height: 30px; /* Seule la partie haute est visible */
    justify-content: flex-start; /* Le texte est en haut */
    overflow: hidden; /* Cache le reste de la carte */
}

/* Styles pour les piles de cartes (km et parades) */
.pile-km, .pile-parades-stack {
    position: relative;
    width: 120px; /* Largeur fixe pour la pile */
    height: 150px; /* Hauteur pour accueillir les cartes empilées */
}

.pile-km .carte, .pile-parades-stack .carte {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    margin: 0;
}

/* Décalage vertical pour chaque carte dans la pile */
.pile-km .carte:nth-child(1), .pile-parades-stack .carte:nth-child(1) { top: 0; }
.pile-km .carte:nth-child(2), .pile-parades-stack .carte:nth-child(2) { top: 20px; }
.pile-km .carte:nth-child(3), .pile-parades-stack .carte:nth-child(3) { top: 40px; }
.pile-km .carte:nth-child(4), .pile-parades-stack .carte:nth-child(4) { top: 60px; }
.pile-km .carte:nth-child(5), .pile-parades-stack .carte:nth-child(5) { top: 80px; }

/* La carte du dessus est entièrement visible */
.pile-km .carte:last-child, .pile-parades-stack .carte:last-child {
    height: 140px;
    justify-content: space-between;
}

/* Style pour la pioche et le jet */
#piocheJet .carte.pioche, #piocheJet .carte.jet {
    width: 100px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
}

#piocheJet button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#piocheJet button:hover {
    background-color: #218838;
}

/* Style pour les conteneurs de fin de tour, réaction, etc. */
#finTourContainer, #reactionButtonsContainer, #passeJoueurContainer, #crasseTargetContainer {
    margin: 20px 0;
    text-align: center;
}

#finTourContainer button, #reactionButtonsContainer button, #passeJoueurContainer button, #crasseTargetContainer button {
    padding: 10px 20px;
    margin: 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#finTourContainer button:hover, #reactionButtonsContainer button:hover, #passeJoueurContainer button:hover, #crasseTargetContainer button:hover {
    background-color: #0056b3;
}

/* Style pour les zones bloquées */
.zone-bloquee {
    border: 2px solid red;
    padding: 10px;
    border-radius: 8px;
}

/* Style pour les titres et statuts */
#joueurActif, #status {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
    text-align: center;
}

h2, h3 {
    margin: 10px 0;
    font-size: 16px;
}

/* Style pour les écrans de sélection */
#modeSelectionScreen, #gameTypeScreen, #playerSelectionScreen {
    text-align: center;
}

#modeSelectionScreen button, #gameTypeScreen button, #playerSelectionScreen button {
    padding: 15px 30px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

#modeSelectionScreen button:hover, #gameTypeScreen button:hover, #playerSelectionScreen button:hover {
    background-color: #0056b3;
}

/* Style pour l'écran de réaction */
#reactionScreen {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#reactionMessage {
    font-size: 18px;
    margin-bottom: 20px;
}
