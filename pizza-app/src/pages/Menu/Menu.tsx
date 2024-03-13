import axios from 'axios';
import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCart/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLodaing] = useState<boolean>(false);

	const getMenu = async () => {
		try {
			setIsLodaing(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLodaing(false);
		} catch (e) {
			console.error(e);
			setIsLodaing(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div>
				{!isLoading &&
					products.map(p => (
						<ProductCard
							key={p.id}
							id={p.id}
							name={p.name}
							description={p.ingredients.join(', ')}
							image={p.image}
							price={p.price}
							rating={p.rating}
						></ProductCard>
					))}
				{isLoading && <>Загружаем продукты...</>}
			</div>
		</>
	);
}
