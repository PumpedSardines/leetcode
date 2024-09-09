int to_value(char c) {
  switch (c) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
  }
  return -1;
}

int romanToInt(char* s) {
  int last = -1;
  int sum = 0;
  
  for(int i = 0; s[i]; i++) {
    char c = s[i];
    int v = to_value(c);

    if (last == -1) {
      last = v;
    } else if (v > last) {
      sum += v - last;
      last = -1;
    } else {
      sum += last;
      last = v;
    }
  }

  if (last != -1) {
    sum += last;
  }

  return sum;
}

