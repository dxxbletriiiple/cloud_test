import cn from 'classnames';
import { IInput } from '../../interfaces';
import st from './Input.module.scss';

export const Input = (props: IInput) => {
	return (
		<>
			<input
				className={cn(st.input, {
					[st.white]: props.id?.includes('field'),
				})}
				{...props}
			/>
		</>
	);
};
