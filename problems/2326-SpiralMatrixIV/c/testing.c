struct ListNode {
    int val;
    struct ListNode *next;
};

#include <stdio.h>
#include "solution.c"

struct ListNode* toListNode(int* headRaw , int length) {
  struct ListNode* returnNode = 0;
  struct ListNode* cursor = 0;
  for(int i = 0; i < length; i++) {
    struct ListNode* curListNode = (struct ListNode*) malloc(sizeof(struct ListNode));
    curListNode->val = headRaw[i];
    if (cursor != 0) {
      cursor->next = curListNode;
    }
    cursor = curListNode;
    if (returnNode == 0) {
      returnNode = cursor;
    }
  }

  return returnNode;
}

void printListNode(struct ListNode* head) {
  struct ListNode* cursor = head;

  while(cursor) {
    printf("%d ", cursor->val);
    cursor = cursor->next;
  }
}

int main() {
  int m = 3;
  int n = 5;
  int headRaw[] = {3,0,2,6,8,1,7,9,4,2,5,5,0};
  int headRawLength = 13;
  struct ListNode* head = toListNode(headRaw, headRawLength);
  int** out = spiralMatrix(
    m,
    n,
    head,
    (int*)malloc(sizeof(int)),
    (int**)malloc(sizeof(int*))
  );

  printf("\n");
  printListNode(head);
  printf("\n");

  for (int y = 0; y < m; y++) {
    for (int x = 0; x < n; x++) {
      printf("%4d", out[y][x]);
    }
    printf("\n");
  }
}

