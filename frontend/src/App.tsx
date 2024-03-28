// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { connectMetamask } from "./utils/connectMetamask"
import React from 'react';
import Success from './pages/Success';

function App() {

  const [account, setAccount] = React.useState<string | null>(null);
  // const [provider, setProvider] = React.useState<any>(null);
  const [signer, setSigner] = React.useState<any>(null);

  React.useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      // setIsMetamaskInstalled(true);
      setAccount((window as any).ethereum.selectedAddress);
    }
  }, []);

  async function connectWallet(): Promise<void> {
    const connection = await connectMetamask();
    setAccount(connection?.address);
    // setProvider(connection?.web3Provider);
    setSigner(connection?.web3Signer);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
              connectWallet={connectWallet}
              account={account}
              signer={signer}
            />
          }>
            <Route path="/" element={
              <Home 
                account={account}
                signer={signer}
              />
            } />
            <Route path="/success" element={
              <Success
              />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
