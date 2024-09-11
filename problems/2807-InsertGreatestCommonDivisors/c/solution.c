#import "./lsp.c"
// Copy bellow into leetcode

int get_gcd(int a, int b) {
  if (!b) {
    return a;
  }

  return get_gcd(b, a % b);
}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* insertGreatestCommonDivisors(struct ListNode* head){
  struct ListNode* cursor = head;

  int next_node_block_index = 0;
  struct ListNode* next_node_blocks = (struct ListNode*) malloc(sizeof(struct ListNode) * 5001);

  while(cursor->next) {
    int gcd = get_gcd(cursor->val, cursor->next->val);
    struct ListNode* next_node = &next_node_blocks[next_node_block_index];
    next_node_block_index++;
    next_node->val = gcd;
    next_node->next = cursor->next;
    cursor->next = next_node;
    cursor = next_node->next;
  }

  return head;
}

