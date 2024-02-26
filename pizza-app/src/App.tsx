import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	return (
		<>
			<Button onClick={() => console.log('123')}>Кнопка</Button>
			<Button appearence='big' onClick={() => console.log('123')}>
				Кнопка
			</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;
