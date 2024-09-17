#include <stdio.h>
#include "solution.c"

int main() {
  char* input = "MCMXCIV";
  int sum = romanToInt(input);
  printf("%d\n", sum);
}
