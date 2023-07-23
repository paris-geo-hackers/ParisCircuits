const snarkjs = require("snarkjs");
const fs = require("fs");

async function script() {
  const { proof, publicSignals } = await snarkjs.plonk.fullProve(
    { in: [49, 49, 28, 28] },
    "build/poseidon_js/poseidon.wasm",
    "circuit_0000.zkey"
  );

  console.log(publicSignals);
  console.log(proof);

  const vKey = JSON.parse(fs.readFileSync("verification_key.json"));
  const res = await snarkjs.plonk.verify(vKey, publicSignals, proof);

  if (res === true) {
    console.log("Verification OK");
  } else {
    console.log("Invalid proof");
  }
}

script();
