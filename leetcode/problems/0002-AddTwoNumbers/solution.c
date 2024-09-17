#include <stdlib.h>

struct ListNode* get_node(int index, struct ListNode* block) {
  return (struct ListNode*) ((long)block + (long)index * sizeof(struct ListNode));
}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
  struct ListNode* l1head = l1;
  struct ListNode* l2head = l2;
  struct ListNode* node = 0;
  struct ListNode* cursor = 0;

  int cur_node = 0;
  struct ListNode* nodes = (struct ListNode*)malloc(sizeof(struct ListNode) * 100);

  int carry = 0;

    
  while(l1head || l2head) {

    int v1 = 0;
    int v2 = 0;
    if (l1head) v1 = l1head->val;
    if (l2head) v2 = l2head->val;

    int v = v1 + v2 + carry;
    carry = v / 10; 
    v = v % 10;

    struct ListNode* c_node = get_node(cur_node, nodes);
    cur_node++;
    c_node->val = v;
    c_node->next = 0;

    if (cursor) {
      cursor->next = c_node;
      cursor = c_node;
    } else {
      node = c_node;
      cursor = c_node;
    }

    if (l1head) l1head = l1head->next;
    if (l2head) l2head = l2head->next;
  }

  if (carry) {
    struct ListNode* c_node = get_node(cur_node, nodes);
    c_node->val = carry;
    c_node->next = 0;
    cursor->next = c_node;
  }

  return node;
}
