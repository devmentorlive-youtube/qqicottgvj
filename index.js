const arr = [-4, 3, -9, 0, 4, 1];

function pad6(float) {
  return parseFloat(float).toFixed(6).toString();
}

function writeLine(str) {
  process.stdout.write(str + "\n");
}

const [pos, neg, zero] = [[], [], []];

for (let i = 0; i < arr.length; i++) {
  if (parseFloat(arr[i]) > 0) {
    pos.push(arr[i]);
    continue;
  }

  if (parseFloat(arr[i]) < 0) {
    neg.push(arr[i]);
    continue;
  }

  zero.push(arr[i]);
}

writeLine(pad6(pos.length / arr.length));
writeLine(pad6(neg.length / arr.length));
writeLine(pad6(zero.length / arr.length));
