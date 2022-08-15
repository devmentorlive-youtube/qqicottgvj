const arr = [-4, 3, -9, 0, 4, 1];

function pad6(float) {
  return parseFloat(float).toFixed(6).toString();
}

function writeLine(str) {
  process.stdout.write(str + "\n");
}

function update(obj, key, n) {
  return {
    ...obj,
    [key]: [...obj[key], n],
  };
}

const defaultState = {
  pos: [],
  neg: [],
  zero: [],
};

const { pos, neg, zero } = arr.reduce((acc, n) => {
  if (parseFloat(n) > 0) return update(acc, "pos", n);
  if (parseFloat(n) < 0) return update(acc, "neg", n);
  return update(acc, "zero", n);
}, defaultState);

writeLine(pad6(pos.length / arr.length));
writeLine(pad6(neg.length / arr.length));
writeLine(pad6(zero.length / arr.length));
