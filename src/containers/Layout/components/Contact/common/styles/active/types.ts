import { ContactStyleProps } from '../types';

type Picked = 'theme' | 'color' | 'colorMode';

export type ContactActiveStyleProps = Pick<ContactStyleProps, Picked>;
