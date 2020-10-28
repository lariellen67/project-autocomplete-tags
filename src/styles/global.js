import { createGlobalStyle } from 'styled-components'

import { colors } from '~/themes'

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    background-color: ${colors.GREY_THREE};
  }
`
