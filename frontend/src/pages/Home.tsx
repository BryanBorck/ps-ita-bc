import { ethers } from 'ethers';
import { NFTabi } from '../contracts/NFT';
import { NFTAddress } from '../utils/addresses';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ account, signer }: { account: string | null; signer: any;}) {

    const [loading, setLoading] = useState<boolean>(false);

    const navigator = useNavigate();

    async function handleMint() {

        setLoading(true);

        try{
            const NFTcontract = new ethers.Contract(NFTAddress, NFTabi, signer);
            const tx = await NFTcontract.mint(account);
            await tx.wait();
            console.log("Minted successfully!");
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
            if(account) {
                navigator('/success');
            }
        }
    }

    return (
        <div className="w-[100vw] h-[100vh] p-6">
        <div className="flex flex-col justify-center align-center space-y-8 mt-8 px-[25%]">
            <h1 className="text-4xl font-bold text-center text-primary-600">Mint your NFT now!</h1>
            <p className="text-xl text-center text-gray-500">Don't forget to connect your wallet</p>
            <button className="px-4 py-2 my-2 bg-yellow-500 text-white rounded-lg shadow focus:outline-none hover:bg-primary-600 mx-12" onClick={handleMint}>
                {loading ? 
                "Minting..." 
                : 
                account ? "Mint NFT" : "Connect Wallet in the Header"
                }
            </button>
        </div>
        </div>
    );
}