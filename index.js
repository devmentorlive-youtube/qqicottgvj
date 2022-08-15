const arr = [-4, 3, -9, 0, 4, 1];

function pad6(float) {
  return parseFloat(float).toFixed(6).toString();
}

function writeLine(str) {
  process.stdout.write(str + "\n");
}

const pos = arr.filter((n) => n > 0);
const neg = arr.filter((n) => n < 0);
const zero = arr.filter((n) => n === 0);

writeLine(pad6(pos.length / arr.length));
writeLine(pad6(neg.length / arr.length));
writeLine(pad6(zero.length / arr.length));
