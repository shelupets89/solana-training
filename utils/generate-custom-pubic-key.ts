import "dotenv/config";
import { Keypair } from "@solana/web3.js";
import { getExecutionTime } from "./get-execution-time";


export const generateCustomPubicKey = (searchKey: string) => {
  let count = 0;
  let publicKey = "";
  let secretKey: Uint8Array;
  const startTime = performance.now()
  do {
    const keypair = Keypair.generate();
    publicKey = keypair.publicKey.toBase58();
    secretKey = keypair.secretKey;
    if (count % 10_000 === 0) {
        console.log("Try #", count);
    }
    count++
  } while (!publicKey.toLowerCase().startsWith(searchKey));

  console.log("Search time :", getExecutionTime(startTime), 'ms');
  console.log("secretKey : ", secretKey, "| Try #", count);
};

