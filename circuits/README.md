# ParisCircuits

## Steps

### Compile the circuit

circom main.circom --r1cs --wasm --sym

### Computing the witness with WebAssembly

node generate_witness.js main.wasm input.json witness.wtns

### Generate zKey

Download ptau file from: [list](https://github.com/iden3/snarkjs)

snarkjs plonk setup main.r1cs powersOfTau28_hez_final_08.ptau proving_key.zkey

### Ceremony

snarkjs powersoftau new bn128 12 pot12_0000.ptau -v

snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v

snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau -v

snarkjs groth16 setup main.r1cs pot12_final.ptau main_0000.zkey

snarkjs zkey contribute main_0000.zkey main_0001.zkey --name="1st Contributor Name" -v

snarkjs zkey export verificationkey main_0001.zkey verification_key.json

snarkjs groth16 prove main_0001.zkey witness.wtns proof.json public.json
