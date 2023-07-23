const snarkjs = require("snarkjs");
const fs = require("fs");

async function script() {
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    {
      in: [49, 49, 28, 28],
      hash: "5030721519648967171775999709067353421399522859939493651428972159058492489196",
    },
    "build/poseidonHasher_js/poseidonHasher.wasm",
    "Hasher_0000.zkey"
  );

  console.log(publicSignals);
  console.log(proof);

  const vKey = JSON.parse(fs.readFileSync("verification_key_hasher.json"));
  const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);

  if (res === true) {
    console.log("Verification OK");
  } else {
    console.log("Invalid proof");
  }
}

script();
