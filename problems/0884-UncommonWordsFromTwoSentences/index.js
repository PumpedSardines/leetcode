/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = (s1, s2) =>
  Object.entries([...s1[(t = "split")]((k = " ")),...s2[t](k)]
    .reduce((a,v)=>({...a,[v]:(a[v]??0)+1}),{}))
    .filter(([_,v])=>v-1)
    .map(([v])=>v);
