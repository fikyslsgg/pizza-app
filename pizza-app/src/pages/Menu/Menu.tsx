import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCart/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder='Введите блюдо или состав' />
			</div>
			<div>
				<ProductCard
					id={1}
					title={'Наслаждение'}
					description={'Салями, руккола, помидоры, оливки'}
					image='/product-demo.png'
					price={300}
					rating={4.5}
				></ProductCard>
			</div>
		</>
	);
}
