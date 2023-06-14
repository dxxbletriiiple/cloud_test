import { Link } from 'react-router-dom';
import st from './NotFound.module.scss';

export const NotFound = () => {
	return (
		<section className={st.notfound}>
			<div className={st.text}>
				<div>404</div>
				<div>Not Found :(</div>
			</div>
			<span className={st.link}>
				<Link to='/'>Go To Main</Link>
			</span>
		</section>
	);
};
