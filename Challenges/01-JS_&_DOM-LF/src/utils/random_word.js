const words = require("../assets/words.json");
const seedrandom = require("seedrandom");

const randomWord = (seed) => {
    const rng = seedrandom(seed);
    const random_word_pos = Math.floor(rng() * words["amount_of_words"]);
    const word = words["word_list"][random_word_pos];

    return word;
};
