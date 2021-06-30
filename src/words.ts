/**
 * @author WMXPY
 * @namespace WordsEnglish
 * @description Words
 */

import { Words } from "@sudoo/words";
import { EnglishAdjectives } from "./adjectives";
import { EnglishNouns } from "./nouns";
import { EnglishVerbs } from "./verbs";

export const englishWords: Words = Words.create();
englishWords.addAdjectives(EnglishAdjectives);
englishWords.addNouns(EnglishNouns);
englishWords.addVerbs(EnglishVerbs);
