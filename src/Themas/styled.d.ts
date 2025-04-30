/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { ThemaDefault } from './ThemaDefault'; // Importe o tema que você criou

type ThemaType = typeof ThemaDefault;

// Estenda o DefaultTheme do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemaType {}
}