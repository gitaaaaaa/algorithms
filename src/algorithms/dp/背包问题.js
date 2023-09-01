// function knapSack(input) {
//     const lines = input.split('/n')
//     const capacity = Number(lines[0]) // 背包最大容量
//     console.log()
//     console.log('lines--',lines)
// }


function knapSack(capacity, weights, values) {
  const n = values.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) { // {1}
    if (weights[i] <= capacity - load) { // {2}
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i]; // {3}
      val += r * values[i];
      load += weights[i];
    }
  }
  return val;
}

module.exports = knapSack


