// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.13;

// Interface to Verifier.sol
interface IVerifier {
    function verifyProof(bytes memory proof, uint[] memory pubSignals) external view returns (bool);
}

contract SimpleCircuit {
    address public s_VerifierAddress;

    event ProofResult(bool result);

    constructor(address VerifierAddress) {
        s_VerifierAddress = VerifierAddress;
    }

    // ZK proof is generated in the browser and submitted as a transaction w/ the proof as bytes.
    function submitProof(bytes memory proof, uint256[] memory pubSignals) public returns (bool) {
        bool result = IVerifier(s_VerifierAddress).verifyProof(proof, pubSignals);
        emit ProofResult(result);
        return result;
    }
}
