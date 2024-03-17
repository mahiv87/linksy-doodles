import styles from './ButtonComponent.module.css';

function ButtonComponent({ name, link }) {
	return (
		<a href={link} target="_blank">
			<p className={styles.linkButton}>{name}</p>
		</a>
	);
}

export default ButtonComponent;
