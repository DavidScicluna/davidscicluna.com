import { StackProps } from '@chakra-ui/react';

export type DummyStructureProps = Pick<StackProps, 'children'> & { label: string };
