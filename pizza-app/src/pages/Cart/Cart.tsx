import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Headling from '../../components/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { RootState } from '../../store/store';

export function Cart() {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProducts(res);
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<>
			<Headling>Корзина</Headling>
			{items.map(i => {
				const product = cartProducts.find(p => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem count={i.count} {...product} />;
			})}
		</>
	);
}
