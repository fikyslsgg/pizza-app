import { Link, Outlet } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img
						className={styles['avatar']}
						src='/avatar.png'
						alt='Аватар пользователя'
					/>
					<div className={styles['name']}>Юрий Сидякин</div>
					<div className={styles['email']}>yurafikys@gmail.com</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src='/menu-icon.svg' alt='Иконка меню' />
						Меню
					</Link>
					<Link className={styles['link']} to='/cart'>
						<img src='/cart-icon.svg' alt='Иконка корзины' />
						Корзина
					</Link>
				</div>
				<Button className={styles['exit']}>
					<img src='/exit-icon.svg' alt='Иконка выхода' />
					Выход
				</Button>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
