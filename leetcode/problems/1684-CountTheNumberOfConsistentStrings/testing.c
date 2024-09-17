#include <string.h>
#include <stdio.h>

#import "solution.c"

int main() {
  char allowed[] = "adc";
  char wordsRaw[][4] = {"a", "b", "c", "ab", "ac", "bc", "abc"};
  char **words = (char **)malloc(sizeof(char *) * 7);

  for(int i = 0; i < 7; i++) {
    words[i] = (char *)malloc(sizeof(char) * 4);
    strcpy(words[i], wordsRaw[i]);
  }

  int wordsSize = 7;

  int out = countConsistentStrings(allowed, words, wordsSize);

  printf("Output: %d\n", out);
}
