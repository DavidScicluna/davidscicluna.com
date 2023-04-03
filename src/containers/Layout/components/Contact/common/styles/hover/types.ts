import { ContactStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'colorMode';

export type ContactHoveringStyleProps = Pick<ContactStyleProps, Picked>;
