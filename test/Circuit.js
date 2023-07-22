const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Circuit", async function () {
  let SimpleCircuitContract, VerifierContract;

  let deployer, jane, bob, tom;

  beforeEach(async () => {
    [deployer, jane, bob, tom] = await ethers.getSigners();

    const MyVerifier = await ethers.getContractFactory("Verifier");

    VerifierContract = await MyVerifier.deploy();

    await VerifierContract.waitForDeployment();

    console.log(VerifierContract.target);

    const MySimpleCircuit = await ethers.getContractFactory("SimpleCircuit");

    SimpleCircuitContract = await MySimpleCircuit.deploy(
      VerifierContract.target
    );

    await SimpleCircuitContract.waitForDeployment();
  });

  it("Compiles", async function () {
    /*     await MultiplierContract.mint(escrowContract.target, 10);
    expect(await exampleToken.balanceOf(escrowContract.target)).to.equal(10); */
  });
});
