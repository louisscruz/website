import 'styled-components';
import { Theme } from './theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
