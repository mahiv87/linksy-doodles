import styles from './ButtonComponent.module.css';

function ButtonComponent() {
	return (
		<a href="#">
			<p className={styles.linkButton}>GitHub</p>
		</a>
	);
}

export default ButtonComponent;
