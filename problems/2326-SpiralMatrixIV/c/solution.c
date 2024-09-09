#include <stdlib.h>

void handle_case(int x, int y, int** returnArray, struct ListNode** cursor) {
  int val = -1;
  if (*cursor) val = (*cursor)->val;

  returnArray[y][x] = val;

  if (*cursor) *cursor = (*cursor)->next;
}


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** spiralMatrix(int m, int n, struct ListNode* head, int* returnSize, int** returnColumnSizes) {

  // Initialize the return array
  int** returnArray = (int**)malloc(m * sizeof(int*));
  *returnSize = m;
  *returnColumnSizes = (int*)malloc(m * sizeof(int));
  for (int i = 0; i < m; i++) {
    returnArray[i] = (int*)malloc(n * sizeof(int));
    (*returnColumnSizes)[i] = n;
  }

  // Cursor to the return array
  struct ListNode* cursor = head;
  
  int width = n;
  int height = m;

  int curWidth = n;
  int curHeight = m;

  int i = 0;
  int x = 0;
  int y = 0;

  while (1) {
    while (x < curWidth) {
      handle_case(x, y, returnArray, &cursor);
      x++;

      i++;
      if (i == width * height) goto end;
    }

    x--;
    while (y < curHeight - 1) {
      y++;
      handle_case(x, y, returnArray, &cursor);

      i++;
      if (i == width * height) goto end;
    }

    while (x > width - curWidth) {
      x--;
      handle_case(x, y, returnArray, &cursor);

      i++;
      if (i == width * height) goto end;
    }

    while (y > height - curHeight + 1) {
      y--;
      handle_case(x, y, returnArray, &cursor);

      i++;
      if (i == width * height) goto end;
    }

    x++;
    curWidth -= 1;
    curHeight -= 1;
    if (i == width * height) goto end;
  }

end:

  return returnArray;
}
