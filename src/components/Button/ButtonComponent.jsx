import PropTypes from 'prop-types';

import styles from './ButtonComponent.module.css';

function ButtonComponent({ name, link }) {
	return (
		<a href={link} target="_blank">
			<p className={styles.linkButton}>{name}</p>
		</a>
	);
}

ButtonComponent.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};

export default ButtonComponent;
