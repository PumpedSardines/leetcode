#include <stdio.h>
#include "solution.c"
int main() {
  int nums1[] = {1};
  int nums2[] = {2,3,4,5};

  double out = findMedianSortedArrays(nums1, 1, nums2, 4);

  printf("%f\n", out);
}

