impl Solution {
  pub fn xor_queries(arr Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<i32> {
    queries
      .into_iter()
      .map(|x| {
        let q1 = x[0] as usize;
        let q2 = x[1] as usize;

        arr[q1..=q2].iter().fold(0, |acc, x| acc ^ x)
      })
      .collect()
  }
}
