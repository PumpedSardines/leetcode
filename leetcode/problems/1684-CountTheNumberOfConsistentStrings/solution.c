#include <stdlib.h>

int countConsistentStrings(char *allowed, char **words, int wordsSize) {
  int *allowed_map = (int *)malloc(sizeof(int) * 256);
  for (int i = 0; i < 256; i++) {
    allowed_map[i] = 0;
  }
  for (int i = 0; allowed[i]; i++) {
    allowed_map[allowed[i]] = 1;
  }

  int matching_words = 0;

  for (int word_index = 0; word_index < wordsSize; word_index++) {
    char *word = words[word_index];
    for (int i = 0; word[i]; i++) {
      if (allowed_map[word[i]] == 0) {
        goto countConsistentStrings_for_outer; // Break
      }
    }

    matching_words++;

  countConsistentStrings_for_outer:
    (void)0;
  }

  return matching_words;
}
