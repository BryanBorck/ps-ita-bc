import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

export function Header({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {

    const navigator = useNavigate();

    return (
        <header className="transform backdrop-blur-lg bg-white/30 transition-transform duration-600 sticky w-full top-0 z-20 shadow-lg">
            <div className="mx-auto px-4 py-2 sm:px-6 lg:px-12">
                <div className="w-full flex justify-between items-center space-x-4">
                    <div className='flex flex-row'>
                        <img
                            src={logo}
                            alt="Blockestate Logo"
                            className="h-10 w-10 mx-4"
                        />
                        <h1
                            className='text-primary-600 p-2 font-semibold cursor-pointer'
                            onClick={() => navigator('/')}
                        >
                            PS 2024.1
                        </h1>
                    </div>

                    {/* Connect Button */}
                    <button
                        className="px-4 py-2 my-2 bg-yellow-500 text-white rounded-lg shadow focus:outline-none hover:bg-primary-600 truncate"
                        onClick={connectWallet}
                    >
                        {signer 
                        ? "Connected: " +
                        account?.substring(0, 5) +
                        "..." +
                        account?.substring(38, 42) 
                        : "Connect Wallet"
                        }
                    </button>

                </div>
            </div>
        </header>
    );
  }