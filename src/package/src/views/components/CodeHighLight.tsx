import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeHighLight = () => {
   const reactImport = 'import react from \'react\' \n'
   const hookImport = 'import { useWeb3 } from \'react-web3-hooks\' \n\n'
   const usage = '      <button onClick={() => alert(verifyWalletExtension)}>Call Function</button>'
   const RAFC = `export const Example = () => {\n const { verifyWalletExtension } = useWeb3() \n return (\n    <div> \n${usage}   \n   </div> \n )}`

   return (
      <>
         <SyntaxHighlighter showLineNumbers={true} language="javascript" style={dark}>
            {reactImport + hookImport + RAFC}
         </SyntaxHighlighter>
      </>
   )
}