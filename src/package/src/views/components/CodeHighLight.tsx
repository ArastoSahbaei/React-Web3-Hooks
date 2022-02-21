import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeHighLight = () => {
   const codeString = 'import { useWeb3 } from \'react-web3-hooks\''
   return (
      <>
         <SyntaxHighlighter showLineNumbers={true} language="javascript" style={dark}>
            {'import { useWeb3 } from \'react-web3-hooks\' \n\n export const Example = () => {\n const { verifyWalletExtension } = useWeb3() \n return(\n <div>)}'}
         </SyntaxHighlighter>
      </>
   )
}