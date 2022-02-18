import { useWeb3 } from "../useWeb3"

export const HomeView = () => {
   const { verifyWalletExtension, connectToWallet, getWalletBalance, createPayment } = useWeb3()

   return (
      <div>
         <h1>Access to the decentralized web, simplified.</h1>
         <h3>Installation:</h3>
         <h3>Github link</h3>
         <h3>NPM package link</h3>
         <button onClick={() => verifyWalletExtension()}>verifyWalletExtension</button>
         <button onClick={() => console.log(connectToWallet())}>connectToWallet</button>
         <button onClick={() => console.log(getWalletBalance('0xf4a2f01cd178b88b7946708f4f7a053aae8cb0c1'))}>getWalletBalance</button>
         <button onClick={() => console.log(createPayment('0xf4a2f01cd178b88b7946708f4f7a053aae8cb0c1', 0.02))}>createPayment</button>
      </div>
   )
}