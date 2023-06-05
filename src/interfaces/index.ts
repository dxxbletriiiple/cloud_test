export interface IButton {
	text: string;
	id: string;
	isOutlined?: boolean;
	handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputInterface {
	label?: string;
	type: string;
	placeholder: string;
	onChange?: () => void;
}
