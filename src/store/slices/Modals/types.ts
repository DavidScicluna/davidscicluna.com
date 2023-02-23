import { ProjectID } from '../../../common/content/projects';

export type PlaygroundModal = {
	isOpen: boolean;
	id?: ProjectID;
};

export type ModalsStateProps = {
	ui: {
		playgroundModal: PlaygroundModal;
	};
};
