import { ReactNode } from 'react';
interface Id {
	id: string;
}

interface Text {
	text: string;
}

interface ChildNode {
	children: ReactNode;
}
export interface IButton extends Id, Text {
	isOutlined?: boolean;
	handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ILabel extends Text, ChildNode {
	field?: boolean;
}
export interface IInput extends Partial<Id> {
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
	index: number;
}

export interface ISelect extends ChildNode, Id {}

export interface IOPtion extends Id, Text {
	value: string;
}
