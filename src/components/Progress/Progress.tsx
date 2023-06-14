import cn from 'classnames';
import CheckPoint from '../CheckPoint';
import { CheckPiontState } from '../../interfaces';
import st from './Progress.module.scss';

export const Progress = () => {
	return (
		<div className={cn(st.progress, st.two)}>
			{[...Array(3)].map((_, i) => (
				<CheckPoint index={i + 1} state={CheckPiontState.DONE} key={crypto.randomUUID()} />
			))}
		</div>
	);
};
