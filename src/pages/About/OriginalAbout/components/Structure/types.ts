import { StackProps } from '@chakra-ui/react';

import { CommonAboutProps } from '../../common/types';

export type StructureProps = Pick<StackProps, 'children'> & {
	label: string;
} & CommonAboutProps;
