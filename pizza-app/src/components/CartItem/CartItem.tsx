import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch } from '../../store/store';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';

function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const decrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};

	return (
		<div className={styles['item']}>
			<div
				className={styles['image']}
				style={{ backgroundImage: `url('${props.image}')` }}
			></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}> {props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img
						className={styles['minus-icon']}
						src='./public/minus-icon.svg'
						alt='Удалить из корзины'
					/>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img
						className={styles['plus-icon']}
						src='./public/plus-icon.svg'
						alt='Добавить в корзину'
					/>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src='./public/delete-icon.svg' alt='Удалить все' />
				</button>
			</div>
		</div>
	);
}

export default CartItem;
