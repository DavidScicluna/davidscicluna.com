import { StackProps } from '@chakra-ui/react';

export type StructureProps = Pick<StackProps, 'children'> & { label: string };
