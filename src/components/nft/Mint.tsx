import { useWriteNftMint } from "@/wagmi.generated";
import { Button } from "@mui/material";
import { useAccount } from "wagmi";

export function Mint() {
  const { address } = useAccount();
  const { writeContract, isIdle, ...args } = useWriteNftMint();
  console.log(args);
  console.log(address);

  if (!address) return null;

  return (
    <Button
      variant="contained"
      disabled={!isIdle}
      onClick={() => {
        console.log(address);
        writeContract({
          functionName: "mint", // https://github.com/wevm/wagmi/issues/3613
          args: [address],
        });
      }}
    >
      {isIdle ? "Mint NFT" : "Minting..."}
    </Button>
  );
}
