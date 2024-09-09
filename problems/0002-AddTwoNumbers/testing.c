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
  int l1raw[] = {9,9,9,9,9,9,9};
  int l2raw[] = {9,9,9,9};

  struct ListNode* l1 = toListNode(l1raw, 7);
  struct ListNode* l2 = toListNode(l2raw, 4);

  struct ListNode* out = addTwoNumbers(l1, l2);

  printListNode(out);
}

