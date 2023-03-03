import requests
import json

resp = requests.get(
    "https://gist.githubusercontent.com/shmookey/b28e342e1b1756c4700f42f17102c2ff/raw/ed4c33a168027aa1e448c579c8383fe20a3a6225/WORDS", timeout=100)

words = resp.content.decode("ascii")
word_list = words.split("\n")
word_list.remove("")

word_dict = {
    "amount_of_words": len(word_list),
    "word_list": word_list
}

with open("../src/assets/words.json", "w", encoding="utf8") as file:
    json.dump(word_dict, file)
