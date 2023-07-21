# ParisCircuits

## Steps

### Compile the circuit

circom main.circom --r1cs --wasm --sym

### Computing the witness with WebAssembly

node generate_witness.js main.wasm input.json witness.wtns

### Generate zKey

Download ptau file from: [list](https://github.com/iden3/snarkjs)

snarkjs plonk setup main.r1cs powersOfTau28_hez_final_08.ptau proving_key.zkey
