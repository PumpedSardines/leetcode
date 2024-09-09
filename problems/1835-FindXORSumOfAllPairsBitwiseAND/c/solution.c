int getXORSum(int* arr1, int arr1Size, int* arr2, int arr2Size) {
  int xorArr1 = 0;
  for(int i = 0; i < arr1Size; i++) {
    xorArr1 ^= arr1[i];
  }

  int res = 0;
  for(int i = 0; i < arr2Size; i++) {
    res ^= arr2[i] & xorArr1;
  }
    
  return res;
}
