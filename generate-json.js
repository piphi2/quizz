const fs = require("fs");

const folders = [
  {
    folder: "quizz_niveau1",
    output: "images1.json",
    key: "quizz_niveau1"
  },
  {
    folder: "quizz_niveau2",
    output: "images2.json",
    key: "quizz_niveau2"
  },
  {
    folder: "quizz_niveau3",
    output: "images3.json",
    key: "quizz_niveau3"
  }
];

let result = {};

folders.forEach(cfg => {

  const files = fs.readdirSync(cfg.folder)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  result[cfg.key] = files;

  fs.writeFileSync(cfg.output, JSON.stringify({
    [cfg.key]: files
  }, null, 2));

  console.log(`✔ Généré ${cfg.output}`);
});
