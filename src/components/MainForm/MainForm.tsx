import { redirect } from 'react-router-dom';
import Input from '../Input';
import Button from '../Buttons';

export const MainForm = () => {
	const handler = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('qq');
	};
	return (
		<form>
			<Input label='Номер телефона' type='number' placeholder='+7 999 999-99-99' />
			<Button text='Начать' id='button-start' handler={handler} />
		</form>
	);
};
