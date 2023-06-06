import MainForm from '../../components/MainForm';
import st from './MainPage.module.scss';

export const MainPage = () => {
	return (
		<>
			<div className={st.profile}>
				<div className={st.pic}>
					<span>ДА</span>
				</div>
				<div className={st.info}>
					<div className={st.name}>Джавлон Ахунджанов</div>
					<div className={st.links}>
						<a className={st.link} href='https://t.me/dxxbletriiiple' target='_blank'>
							Telegram
						</a>
						<a className={st.link} href='https://github.com/dxxbletriiiple' target='_blank'>
							GitHub
						</a>
						<a
							className={st.link}
							href='https://drive.google.com/file/d/1NVaoAoIU1SHOK22LlTlLYFtB4NIi6ewH/view'
							target='_blank'
						>
							Resume
						</a>
					</div>
				</div>
			</div>
			<hr className={st.devider} />
			<MainForm />
		</>
	);
};
