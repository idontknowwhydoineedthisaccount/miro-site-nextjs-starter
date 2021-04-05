import {CSSProp, CSSObject} from 'styled-components'
import {Theme} from '@miro-site/design-tokens'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject
  }
}
