const snarkjs = require("snarkjs");

async function script() {
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    { in: [10] },
    "build/poseidon_js/poseidon.wasm",
    "circuit_0000.zkey"
  );
  console.log(publicSignals);
  console.log(proof);
}

script();
