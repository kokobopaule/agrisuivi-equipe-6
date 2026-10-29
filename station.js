// BONUS — Station connectée : simuler des capteurs qui répondent après un délai.
// Fiche : fiches/6-bonus-station.md · Vérifier : npm run test:station

// Renvoie une promesse qui se résout après capteur.delai millisecondes avec
// { parcelle, humidite }, ou qui est rejetée si le capteur n'est pas en ligne.
export function interrogerCapteur(capteur) {
  throw new Error("TODO Bonus : coder interrogerCapteur dans src/station.js");
}

// Même travail que interrogerCapteur, mais ne rejette jamais :
// en cas d'erreur, renvoie { parcelle, erreur } avec le message de l'erreur.
export async function interrogerSansPlanter(capteur) {
  throw new Error(
    "TODO Bonus : coder interrogerSansPlanter dans src/station.js",
  );
}

// Interroge les capteurs L'UN APRÈS L'AUTRE (on attend chaque réponse).
export async function releverUnParUn(capteurs) {
  throw new Error("TODO Bonus : coder releverUnParUn dans src/station.js");
}

// Interroge tous les capteurs EN MÊME TEMPS. Les résultats gardent l'ordre des capteurs.
export async function releverEnParallele(capteurs) {
  throw new Error("TODO Bonus : coder releverEnParallele dans src/station.js");
}
