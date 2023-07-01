import { ReactNode } from 'react';

export type LayoutProps = { children: ReactNode };

export type LayoutContext = { navigationWidth: number; navigationHeight: number };
