const input = [-4, 3, -9, 0, 4, 1];

function pad6(float) {
  return parseFloat(float).toFixed(6).toString();
}

function writeLine(str) {
  process.stdout.write(str + "\n");
}

writeLine(pad6(0.5));
