import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = (props: IInput) => {
	return (
		<>
			<input className={st.input} {...props} />
		</>
	);
};
