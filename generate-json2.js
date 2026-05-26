const fs = require('fs');
const path = require('path');

const dossiers = [
    'quizz_niveau1',
    'quizz_niveau2',
    'quizz_niveau3'
];

const extensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.webp'
];

const resultat = {};

dossiers.forEach(dossier => {

    const fichiers = fs.readdirSync(dossier);

    resultat[dossier] = fichiers.filter(fichier => {

        const extension = path.extname(fichier).toLowerCase();

        return extensions.includes(extension);

    });

});

fs.writeFileSync(
    'images.json',
    JSON.stringify(resultat, null, 2),
    'utf8'
);

console.log('images.json généré automatiquement');