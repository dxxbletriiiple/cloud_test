import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import Button from '../Buttons';
import Label from '../Label';
import st from './MainForm.module.scss';

export const MainForm = () => {
	const navigate = useNavigate();
	const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		navigate('/one');
	};
	return (
		<form className={st.form}>
			<Label text='Номер телефона'>
				<Input type='number' placeholder='+7 999 999-99-99' />
			</Label>
			<Label text='Email'>
				<Input type='email' placeholder='tim.jennings@example.com' />
			</Label>
			<Button text='Начать' id='button-start' handler={handler} />
		</form>
	);
};
