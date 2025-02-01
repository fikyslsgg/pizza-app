import axios, { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import { MenuList } from './MenuList/MenuList';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLodaing] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>('');

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
			setIsLodaing(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name,
				},
			});
			setProducts(data);
			setIsLodaing(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLodaing(false);
			return;
		}
	};

	const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};

	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search
					placeholder='Введите блюдо или состав'
					onChange={updateFilter}
				/>
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && products.length > 0 && <MenuList products={products} />}
				{!isLoading && products.length === 0 && <>Не найдено блюд по запросу</>}
				{isLoading && <>Загружаем продукты...</>}
			</div>
		</>
	);
}

export default Menu;
