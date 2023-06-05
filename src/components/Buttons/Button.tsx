import { IButton } from '../../interfaces';
import st from './Button.module.scss';

export const Button = ({ id, text, handler }: IButton) => {
	return (
		<>
			<button className={st.btn} onClick={handler} id={id}>
				{text}
			</button>
		</>
	);
};
