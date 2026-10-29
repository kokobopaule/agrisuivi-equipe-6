// MEMBRE 2 — Irrigation : lire les relevés des capteurs et décider quoi faire.
// Fiche : fiches/2-irrigation.md · Vérifier : npm run test:irrigation

// Renvoie seulement les relevés de la parcelle demandée.
export function relevesDeParcelle(releves, idParcelle) {
  throw new Error(
    "TODO Membre 2 : coder relevesDeParcelle dans src/irrigation.js",
  );
}

// Renvoie la moyenne des humidités, arrondie à l'entier le plus proche.
// Liste vide : null (on ne peut pas calculer de moyenne).
export function moyenneHumidite(releves) {
  throw new Error(
    "TODO Membre 2 : coder moyenneHumidite dans src/irrigation.js",
  );
}

// Renvoie 'INCONNU', 'ARROSER', 'DRAINER' ou 'OK'.
// Les bornes humiditeMin et humiditeMax font partie de la zone 'OK'.
export function etatIrrigation(humidite, culture) {
  throw new Error(
    "TODO Membre 2 : coder etatIrrigation dans src/irrigation.js",
  );
}

// Renvoie un tableau d'alertes, une par parcelle, dans le même ordre que parcelles.
// Chaque alerte : { id, producteur, culture, moyenne, etat }
export function alertesIrrigation(parcelles, releves, cultures) {
  throw new Error(
    "TODO Membre 2 : coder alertesIrrigation dans src/irrigation.js",
  );
}
