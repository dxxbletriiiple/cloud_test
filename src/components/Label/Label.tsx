import cn from 'classnames';
import { ILabel } from '../../interfaces';
import st from './Label.module.scss';

export const Label = ({ text, children, field }: ILabel) => {
	return (
		<label className={cn(st.label, { [st.field]: field })}>
			<span>{text}</span>
			{children}
		</label>
	);
};
