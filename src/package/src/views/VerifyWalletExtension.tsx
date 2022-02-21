import { CodeHighLight } from "./components/CodeHighLight"
import { Description } from "./components/Description"

export const VerifyWalletExtension = () => {

   const usage = '      <button onClick={() => alert(verifyWalletExtension)}>Call Function</button>'
   const RAFC = `export const Example = () => {\n const { verifyWalletExtension } = useWeb3() \n return (\n    <div> \n${usage}   \n   </div> \n )}`

   return (
      <div>
         <Description
            functionName="verifyWalletExtension()"
            description="Returns a boolean value depending on if the client has a wallet extension(ex MetaMask) available in the browser."
         />
         <CodeHighLight code={RAFC} />
      </div>
   )
}