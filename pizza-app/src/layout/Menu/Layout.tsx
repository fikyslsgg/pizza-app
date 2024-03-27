import cn from 'classnames';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Layout.module.css';

export function Layout() {
	const logout = () => {
		const navigate = useNavigate();
		localStorage.removeItem('jwt');
		navigate('/auth/login');
	};

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
					<NavLink
						to='/'
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive,
							})
						}
					>
						<img src='/menu-icon.svg' alt='Иконка меню' />
						Меню
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive,
							})
						}
						to='/cart'
					>
						<img src='/cart-icon.svg' alt='Иконка корзины' />
						Корзина
					</NavLink>
				</div>
				<Button onClick={logout} className={styles['exit']}>
					<img src='/exit-icon.svg' alt='Иконка выхода' />
					Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
