import cn from 'classnames';
import CheckPoint from '../CheckPoint';
import st from './Progress.module.scss';
import { CheckPiontState } from '../../interfaces';

export const Progress = () => {
	return (
		<div className={cn(st.progress, st.two)}>
			<CheckPoint state={CheckPiontState.DONE} />
			<CheckPoint state={CheckPiontState.IN_PROGRESS} />
			<CheckPoint state={CheckPiontState.NOT_YET} />
		</div>
	);
};
