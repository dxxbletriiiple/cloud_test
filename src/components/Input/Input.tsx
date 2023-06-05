import { InputInterface } from '../../interfaces';
import st from './Input.module.scss';

export const Input = ({ label, type, placeholder }: InputInterface) => {
	return (
		<label>
			{label}
			<input className={st.input} type={type} placeholder={placeholder} />
		</label>
	);
};
