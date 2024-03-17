import './App.css';
import CardComponent from './components/Card/CardComponent';
import avatar from './assets/images/avatar-jessica.jpeg';

function App() {
	const user = {
		avatar: avatar,
		name: 'Jessica Randall',
		location: 'London, United Kingdom',
		headline: 'Front-end developer and avid reader.',
		links: [
			{
				id: 1,
				name: 'GitHub',
				link: 'https://github.com'
			},
			{
				id: 2,
				name: 'Frontend Mentor',
				link: 'https://frontendmentor.io/'
			},
			{
				id: 3,
				name: 'LinkedIn',
				link: 'https://linkedin.com'
			},
			{
				id: 4,
				name: 'Twitter',
				link: 'https://twitter.com'
			},
			{
				id: 5,
				name: 'Instagram',
				link: 'https://instagram.com'
			}
		]
	};

	return (
		<>
			<CardComponent
				avatar={user.avatar}
				name={user.name}
				location={user.location}
				headline={user.headline}
				links={user.links}
			/>

			{/* <div className="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://github.com/mahiv87/linksy-doodles" target="_blank">
					Marcus Herrera
				</a>
				.
			</div> */}
		</>
	);
}

export default App;
