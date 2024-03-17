import styles from './FooterComponent.module.css';

function FooterComponent() {
	return (
		<div className={styles.attribution}>
			Challenge by{' '}
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
				Frontend Mentor
			</a>
			. Coded by{' '}
			<a href="https://github.com/mahiv87/linksy-doodles" target="_blank">
				Marcus Herrera
			</a>
			.
		</div>
	);
}

export default FooterComponent;
