import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export default function Layout({ connectWallet, account, signer }: 
    { connectWallet: any; account: string | null; signer: any;}) {

    return (
        <div className='relative w-[100vw] md:h-[100vh] md:flex md:flex-col lg:h-[100vh] lg:flex lg:flex-col overflow-y-auto overflow-x-hidden relative'>
            <Header
                connectWallet={connectWallet}
                account={account}
                signer={signer}
            />
            <Outlet/>
        </div>
    )
}