import { MouseEvent as ME } from 'react';

import { Project } from '../../../../../common/hooks/useGetProjects';
import { CommonProjectProps } from '../../../common/types';

export type ProjectLinkMouseEvent = ME<HTMLAnchorElement, globalThis.MouseEvent>;

export type ProjectProps = Project & {
	inView: boolean;
	timeout: number;
} & CommonProjectProps;
