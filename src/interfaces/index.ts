import { ReactNode } from 'react';

export interface IButton {
	text: string;
	id: string;
	isOutlined?: boolean;
	handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ILabel {
	text: string;
	children: ReactNode;
}
export interface IInput {
	type: string;
	placeholder: string;
	onChange?: () => void;
}

export enum CheckPiontState {
	NOT_YET = 'notyet',
	IN_PROGRESS = 'inprogress',
	DONE = 'done',
}

export interface ICheckPoint {
	state: CheckPiontState;
}
