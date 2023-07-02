import { ProjectID } from '@/common/hooks/useGetProjects';

export type PlaygroundModal = {
	isOpen: boolean;
	id?: ProjectID;
};

export type ModalsSliceStateProps = {
	ui: {
		playgroundModal: PlaygroundModal;
		isInternationalizationModalOpen: boolean;
	};
};
