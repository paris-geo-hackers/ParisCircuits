# ParisCircuits

## Steps

### Compile the circuit

`circom poseidon.circom --wasm --r1cs -o ./build`

circom poseidonHasher.circom --wasm --r1cs -o ./build

### Generate zKey

Download ptau file from: [list](https://github.com/iden3/snarkjs)

`npx snarkjs groth16 setup build/poseidon.r1cs powersOfTau28_hez_final_09.ptau circuit_0000.zkey`

npx snarkjs groth16 setup build/poseidonHasher.r1cs powersOfTau28_hez_final_09.ptau Hasher_0000.zkey

for plonking:

`npx snarkjs plonk setup build/poseidon.r1cs powersOfTau28_hez_final_13.ptau plonk.zkey`

### Verification Key to the proof

`npx snarkjs zkey export verificationkey circuit_0000.zkey verification_key.json`

npx snarkjs zkey export verificationkey Hasher_0000.zkey verification_key_hasher.json

### Solidity File

`npx snarkjs zkey export solidityverifier circuit_0000.zkey verifier.sol`

npx snarkjs zkey export solidityverifier Hasher_0000.zkey FullVerifier.sol

## Further Links

[Imports](https://github.com/iden3/circom)
