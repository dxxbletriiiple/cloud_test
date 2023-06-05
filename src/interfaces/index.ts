export interface IButton {
	text: string;
	id: string;
	isOutlined?: boolean;
	handler: () => void;
}
