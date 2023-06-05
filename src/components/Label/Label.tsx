import { ILabel } from '../../interfaces';
import st from './Label.module.scss';

export const Label = ({ text, children }: ILabel) => {
	return (
		<label className={st.label}>
			<span>{text}</span>
			{children}
		</label>
	);
};
