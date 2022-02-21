import { CodeHighLight } from "package/src/views/components/CodeHighLight"
import { GlobalStyle } from "shared/style/GlobalStyle"
import { Navigation } from "./components/navigation/Navigation"
import { Routing } from "./package/src/routes/Routes"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routing>
        <Navigation />
      </Routing>
      <CodeHighLight />
    </>
  )
}
