import ButtonComponent from '../Button/ButtonComponent';
import styles from './CardComponent.module.css';
import avatar from '../../assets/images/avatar-jessica.jpeg';

function CardComponent() {
	return (
		<div className={styles.card}>
			<img src={avatar} alt="Profile avatar" className={styles.avatar} />
			<h1>Jessica Randall</h1>
			<h4>London, United Kingdom</h4>
			<p>"Front-end developer and avid reader."</p>
			<ButtonComponent />
		</div>
	);
}

export default CardComponent;
