function codeIsInRanges(number: number, arrayOfRanges: number[][]): boolean {
  return arrayOfRanges.some(
    ([lowerBound, upperBound]) => lowerBound <= number && number <= upperBound
  );
}

const isCJK: WordBoundFunction = (c) => {
  if ("string" !== typeof c) {
    return false;
  }
  const charCode = c.charCodeAt(0);

  return codeIsInRanges(charCode, [
    [0x3040, 0x309f],
    [0x4e00, 0x9fff],
    [0xac00, 0xd7a3],
    [0x20000, 0x2ebe0],
  ]);
};

const isAnsiWordBound: WordBoundFunction = (c) => " \n\r\t".includes(c);

export type WordBoundFunction = (c: string) => boolean;

export interface ReadingTimeOptions {
  wordsPerMinute?: number;
  wordBound?: WordBoundFunction;
}
const isPunctuation: WordBoundFunction = (c) => {
  if ("string" !== typeof c) {
    return false;
  }
  const charCode = c.charCodeAt(0);
  return codeIsInRanges(charCode, [
    [0x21, 0x2f],
    [0x3a, 0x40],
    [0x5b, 0x60],
    [0x7b, 0x7e],
    [0x3000, 0x303f],
    [0xff00, 0xffef],
  ]);
};

export function readingTime(text: string, options: ReadingTimeOptions = {}) {
  let words = 0,
    start = 0,
    end = text.length - 1;

  const wordsPerMinute = options.wordsPerMinute || 200;
  const isWordBound = options.wordBound || isAnsiWordBound;

  while (isWordBound(text[start])) start++;
  while (isWordBound(text[end])) end--;
  const normalizedText = `${text}\n`;

  for (let i = start; i <= end; i++) {
    if (
      isCJK(normalizedText[i]) ||
      (!isWordBound(normalizedText[i]) &&
        (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1])))
    ) {
      words++;
    }
    if (isCJK(normalizedText[i])) {
      while (
        i <= end &&
        (isPunctuation(normalizedText[i + 1]) ||
          isWordBound(normalizedText[i + 1]))
      ) {
        i++;
      }
    }
  }

  const minutes = words / wordsPerMinute;
  const time = Math.round(minutes * 60 * 1000);
  const displayed = Math.ceil(Number(minutes.toFixed(2)));

  return {
    text: displayed + " min read",
    minutes: minutes,
    time: time,
    words: words,
  };
}
