import "dotenv/config";
import { Keypair } from "@solana/web3.js";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

export const getPublicFromEnv = () => {
    const keyFromEnv = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]!));
    const keypair = Keypair.fromSecretKey(keyFromEnv);
    console.log(`Public!`, keypair.publicKey.toBase58());
  };
  