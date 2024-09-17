#include <float.h>

double findMedianSortedArray(int* nums, int numsSize) {
  int mid_point = numsSize / 2;
  if(numsSize & 1) {
    return (double) nums[mid_point];
  } else {
    return ((double)nums[mid_point - 1] + (double)nums[mid_point]) / 2;
  }
}

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
  int total_len = (nums1Size + nums2Size);
  int mid_point = total_len / 2;
  if ((total_len & 1) == 0) {
    mid_point -= 1;
  }

  if(nums1Size == 0) {
    return findMedianSortedArray(nums2, nums2Size);
  }

  if(nums2Size == 0) {
    return findMedianSortedArray(nums1, nums1Size);
  }

  int cursor = 0;
  int cursor_nums1 = 0;
  int cursor_nums2 = 0;

  while(cursor < mid_point) {

    if (cursor_nums1 == nums1Size) {
      cursor_nums2++;
    } else if (cursor_nums2 == nums2Size) {
      cursor_nums1++;
    }else if (nums1[cursor_nums1] == nums2[cursor_nums2]) {

      if(cursor_nums2 < cursor_nums1) {
        cursor_nums2++;
      } else {
        cursor_nums1++;
      }

    }else if (nums1[cursor_nums1] < nums2[cursor_nums2]) {
      cursor_nums1++;
    } else {
      cursor_nums2++;
    }
    cursor++;
  }

  double nums1_median = DBL_MAX;
  double nums2_median = DBL_MAX;

  if(cursor_nums1 < nums1Size) {
    nums1_median = (double) nums1[cursor_nums1];
  }
  if(cursor_nums2 < nums2Size) {
    nums2_median = (double) nums2[cursor_nums2];
  }

  if (total_len & 1) {
    // Odd
    if (nums1_median < nums2_median) {
      return nums1_median;
    } else {
      return nums2_median;
    }
  } else {
    // Even
    
    double nums1_next_median = DBL_MAX;
    double nums2_next_median = DBL_MAX;
    double median_next = 0;
    double median = 0;

    if(cursor_nums1 < nums1Size-1) {
      nums1_next_median = (double) nums1[cursor_nums1 + 1];
    }
    if(cursor_nums2 < nums2Size-1) {
      nums2_next_median = (double) nums2[cursor_nums2 + 1];
    }

    if (nums1_median < nums2_median) {
      median = nums1_median;

      if (nums1_next_median < nums2_median) {
        median_next = nums1_next_median;
      } else {
        median_next = nums2_median;
      }
    } else {
      median = nums2_median;

      if (nums2_next_median < nums1_median) {
        median_next = nums2_next_median;
      } else {
        median_next = nums1_median;
      }
    }

    return (median + median_next) / 2;
  }
}
    
