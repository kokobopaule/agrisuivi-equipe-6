// MEMBRE 1 — Parcelles : chercher, filtrer et additionner des informations.
// Fiche : fiches/1-parcelles.md · Vérifier : npm run test:parcelles

// Renvoie une ligne de texte qui décrit la parcelle.
// Exemple : 'P01 | Awa Diallo | Soubré | cacao | 3 ha'
export function formaterParcelle(parcelle) {
  throw new Error(
    "TODO Membre 1 : coder formaterParcelle dans src/parcelles.js",
  );
}

// Renvoie la parcelle dont l'id est demandé, ou undefined si elle n'existe pas.
export function trouverParcelle(parcelles, id) {
  throw new Error(
    "TODO Membre 1 : coder trouverParcelle dans src/parcelles.js",
  );
}

// Renvoie un nouveau tableau avec seulement les parcelles de cette culture.
export function parcellesParCulture(parcelles, culture) {
  throw new Error(
    "TODO Membre 1 : coder parcellesParCulture dans src/parcelles.js",
  );
}

// Renvoie la somme des surfaces (en hectares). Liste vide : 0.
export function surfaceTotale(parcelles) {
  throw new Error("TODO Membre 1 : coder surfaceTotale dans src/parcelles.js");
}

// Renvoie un objet : pour chaque culture, le nombre de parcelles et leur surface.
// Exemple : { cacao: { nombre: 2, surface: 5 }, riz: { nombre: 1, surface: 1 } }
export function resumeParCulture(parcelles) {
  throw new Error(
    "TODO Membre 1 : coder resumeParCulture dans src/parcelles.js",
  );
}
