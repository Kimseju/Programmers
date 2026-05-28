function solution(my_string, queries) {
  var answer = my_string.split("");
  for (que of queries) {
    let a = answer.slice(que[0], que[1] + 1).reverse();
    answer.splice(que[0], que[1] - que[0] + 1, ...a);
  }
  return answer.join("");
}