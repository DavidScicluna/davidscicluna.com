import { ContactStyleProps as AllContactStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'colorMode';

export type ContactStyleProps = Pick<AllContactStyleProps, Picked>;
