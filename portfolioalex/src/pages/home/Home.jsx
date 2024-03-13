import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
	return (
		<section className='home section grid'>
			<img src={Profile} alt='' className='home__img' />

			<div className='home__content'>
				<div className='home__data'>
					<h1 className='home__title'>
						<span>Hi, i'm Alex.</span> Aspiring Web Developer
					</h1>

					<p className='home__description'>
						I'm Moldavian born, Portuguese citizen who is looking for a new challenge as a front-end developer. As a junior employee, I'm eager to learn more about web development.
					</p>

					<Link to='/about' className='button'>
						More About Me{' '}
						<span className='button__icon'>
							<FaArrowRight />
						</span>
					</Link>
				</div>
			</div>

			<div className='color__block'></div>
		</section>
	);
};

export default Home;
