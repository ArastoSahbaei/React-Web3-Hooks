import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const CodeHighLight = (props: { code: string }) => {
   const reactImport = 'import react from \'react\' \n'
   const hookImport = 'import { useWeb3 } from \'react-web3-hooks\' \n\n'

   return (
      <div style={{ width: '50%', margin: '0 auto', padding: '1%'}}>
         <SyntaxHighlighter showLineNumbers={true} language="javascript" style={dark}>
            {reactImport + hookImport + props.code}
         </SyntaxHighlighter>
      </div>
   )
}