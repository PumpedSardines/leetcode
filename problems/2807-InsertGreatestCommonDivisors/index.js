/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let cursor = head;

  while (cursor.next) {
    const primeDivisorsThis = primeDivisors(cursor.val);
    const primeDivisorsThat = primeDivisors(cursor.next.val);
    const biggestDivisor = commonDivisor(primeDivisorsThis, primeDivisorsThat);
    cursor.next = new ListNode(biggestDivisor, cursor.next);
    cursor = cursor.next.next;
  }

  return head;
};

module.exports = insertGreatestCommonDivisors;

function* primes(num) {
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      yield i;
    }
  }
}

const primeMap = new Map();
function isPrime(num) {
  if (num === 0) return false;
  if (num === 1) return false;

  if (primeMap.has(num)) {
    return primeMap.get(num);
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      primeMap.set(num, false);
      return false;
    }
  }

  primeMap.set(num, true);
  return true;
}

const primeDivisorsMap = new Map();
function primeDivisors(num) {
  if (num === 1) return [];

  if (primeDivisorsMap.has(num)) {
    return primeDivisorsMap.get(num);
  }

  if (isPrime(num)) {
    primeDivisorsMap.set(num, [num]);
    return [num];
  }

  for (const prime of primes(Math.ceil(Math.sqrt(num)))) {
    if (num % prime === 0) {
      const ret = [prime, ...primeDivisors(num / prime)];
      primeDivisorsMap.set(num, ret);
      return ret;
    }
  }

  throw new Error("Can't get here");
}

function commonDivisor(a, b) {
  const aMap = new Map();
  for (const aE of a) {
    aMap.set(aE, (aMap.get(aE) ?? 0) + 1);
  }

  const bMap = new Map();
  for (const bE of b) {
    bMap.set(bE, (bMap.get(bE) ?? 0) + 1);
  }

  let total = 1;
  for (const [k, v] of aMap.entries()) {
    const bV = bMap.get(k) ?? 0;

    total *= Math.min(k ** v, k ** bV);
  }

  return total;
}
