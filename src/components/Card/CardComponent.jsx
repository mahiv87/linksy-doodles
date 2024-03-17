import ButtonComponent from '../Button/ButtonComponent';
import styles from './CardComponent.module.css';
// import avatar from '../../assets/images/avatar-jessica.jpeg';

function CardComponent({ avatar, name, location, headline, links }) {
	return (
		<div className={styles.card}>
			<img src={avatar} alt="Profile avatar" className={styles.avatar} />
			<h1 className={styles.name}>{name}</h1>
			<h4 className={styles.location}>{location}</h4>
			<p>"{headline}"</p>
			{links &&
				links.map((link) => (
					<ButtonComponent name={link.name} link={link.link} key={link.id} />
				))}
		</div>
	);
}

export default CardComponent;
