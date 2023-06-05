import cn from 'classnames';
import { IButton } from '../../interfaces';
import st from './Button.module.scss';

export const Button = ({ id, text, isOutlined, handler }: IButton) => {
	return (
		<>
			<button className={cn(st.btn, { [st.outline]: isOutlined })} onClick={handler} id={id}>
				{text}
			</button>
		</>
	);
};
