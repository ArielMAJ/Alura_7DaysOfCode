const randomWord = require("../utils/random_word");
const seedrandom = require("seedrandom");

test("randomWord is defined", () => {
    expect(randomWord).toBeDefined();
});
