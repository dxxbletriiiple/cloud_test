import cn from 'classnames';
import { CheckPiontState, ICheckPoint } from '../../interfaces';
import st from './CheckPoint.module.scss';

export const CheckPoint = (prop: ICheckPoint) => {
	return (
		<div
			className={cn(st.checkpoint, {
				[st.notyet]: prop.state == CheckPiontState.NOT_YET,
			})}
		>
			<div className={cn(st.dot, st[prop.state])}></div>
		</div>
	);
};
