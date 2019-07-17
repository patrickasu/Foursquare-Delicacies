import React from 'react';
import Discover from '../components/discover';
import Catering from '../components/catering';
import Delicacies from '../components/delicacies';
import Gallery from '../components/gallery';
import Parallax from '../components/parallax';


const Home = () => {
	return (
		<React.Fragment>
			<Discover />
			<Catering />
			<Delicacies />
			<Parallax />
			<Gallery />
		</React.Fragment>
	)
}

export default Home;