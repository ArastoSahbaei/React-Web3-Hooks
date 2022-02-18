import { createGlobalStyle } from 'styled-components'
import { fadeInOpacity } from './animations/fadeInOpacity'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  body, html {
	animation: ${fadeInOpacity} 500ms ease-in;
  }

  p, span, h1, h2, h3, h4, h5, h6 {
  font-family: PressStart2P, cursive;
  }
`
