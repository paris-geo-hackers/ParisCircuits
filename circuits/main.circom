pragma circom 2.0.0;

include "./sha256/sha256.circom";
include "./sha256/constants.circom";
include "./sha256/sha256compression.circom";

template Location(){
  component SHA = Sha256(2);

  signal input location[2];

  SHA.in <== location;
         
  signal output date_out[256];
  date_out <== SHA.out;
}

component main { public [ location ] } = Location();
