import { useWeb3 } from './hooks/src/useWeb3'

export const App = () => {
  const { verifyWalletExtension, connectToWallet, getWalletBalance, createPayment } = useWeb3()

  return (
    <>
      <h1>Application</h1>
      <button onClick={() => verifyWalletExtension()}>hasWalletExtension</button>
      <button onClick={() => console.log(connectToWallet())}>connectToWallet</button>
      <button onClick={() => console.log(getWalletBalance('0xf4a2f01cd178b88b7946708f4f7a053aae8cb0c1'))}>getWalletBalance</button>
      <button onClick={() => console.log(createPayment('0xf4a2f01cd178b88b7946708f4f7a053aae8cb0c1', 0.02))}>createPayment</button>
    </>
  )
}
