import PropTypes from 'prop-types';

import ButtonComponent from '../Button/ButtonComponent';
import styles from './CardComponent.module.css';

function CardComponent({ avatar, name, location, headline, links }) {
	return (
		<div className={styles.card}>
			<img src={avatar} alt="Profile avatar" className={styles.avatar} />
			<h1 className={styles.name}>{name}</h1>
			<h4 className={styles.location}>{location}</h4>
			<p>&quot;{headline}&quot;</p>
			{links &&
				links.map((link) => (
					<ButtonComponent name={link.name} link={link.link} key={link.id} />
				))}
		</div>
	);
}

CardComponent.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	location: PropTypes.string,
	headline: PropTypes.string,
	links: PropTypes.array
};

export default CardComponent;
