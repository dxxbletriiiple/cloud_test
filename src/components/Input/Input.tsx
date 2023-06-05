import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ type, placeholder }: IInput) => {
	return (
		<>
			<input className={st.input} type={type} placeholder={placeholder} />
		</>
	);
};
