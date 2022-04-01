// Secret Santa
// -------------
// Given a list of players, pair up players so that:
// 1. Each player gives a gift once.
// 2. Each player receives a gift once.
// 3. Players cannot give or receive to themselves.
// 4. Selection must be random.
//
// Example input: ['Captain America', 'Hulk', 'Iron Man', 'Thor']
// Example output:
// [
//   ['Captain America', 'Thor'],
//   ['Hulk', 'Captain America'],
//   ['Iron Man', 'Hulk'],
//   ['Thor', 'Iron Man'],
// ]
//
// Known bug: in some random scenario we may get the last person to give to himself :-)

(async () => {
  const players = ['Captain America', 'Hulk', 'Iron Man', 'Thor'];
  const santas = go(players);
  console.log({ players });
  console.log({ santas });
})();

function go(people) {
  const pairs = [];
  const givers = [...people];
  const receivers = permutation(givers); // for the sake of randomness

  for (let i = 0; i < people.length; i++) {
    const from = givers.shift();
    const to = receivers[0] === from ? receivers.pop() : receivers.shift();
    pairs.push([from, to]);
  }

  return pairs;
}

function permutation(arr) {
  const res = [];
  const tmp = [...arr];

  while (tmp.length > 0) {
    const i = Math.floor(Math.random() * tmp.length);
    res.push(tmp[i]);
    tmp.splice(i, 1);
  }

  return res;
}
