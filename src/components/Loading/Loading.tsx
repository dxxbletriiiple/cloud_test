import st from './Loading.module.scss';

export const Loading = () => {
	return (
		<div className={st.loading}>
			<div className={st.text}>Loading...</div>
			<div className={st.loader}>
				<div className={st.bar}></div>
			</div>
		</div>
	);
};
