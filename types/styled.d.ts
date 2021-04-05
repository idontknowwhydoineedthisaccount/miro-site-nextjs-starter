/* eslint-disable @typescript-eslint/no-empty-interface */
import {CSSProp, CSSObject} from 'styled-components'

import type {
  TemplatesColors,
  TemplatesTheme,
  TemplatesButtonVariants,
} from '@miro-site/templates-design'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TemplatesTheme {}
}

declare module '@miro-site/design-tokens' {
  export interface Colors extends TemplatesColors {}
  export interface ButtonVariants extends TemplatesButtonVariants {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject
  }
}
