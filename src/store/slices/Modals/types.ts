import { ProjectID } from '../../../common/hooks/useGetProjects';

export type PlaygroundModal = {
	isOpen: boolean;
	id?: ProjectID;
};

export type ModalsStateProps = {
	ui: {
		playgroundModal: PlaygroundModal;
		isInternationalizationModalOpen: boolean;
	};
};
