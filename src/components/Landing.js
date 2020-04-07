import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../redux/actions/getQuestions';
import {getAnswers} from '../redux/actions/getAnswers';
import {getPoints} from '../redux/actions/getPoints';
import {getTracks} from '../redux/actions/getTracks';
import {Link, Redirect} from 'react-router-dom';
import Particles from 'react-particles-js';
// import Header from "../components/Header";
const particleOpt = {
	particles: {
		move: {
			speed: 0.8,
		},
		color: {
			value: '#44337a',
		},
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		size: {
			value: 5,
			random: true,
		},
	},
	line_linked: {
		enable: false,
		distance: 120,
		color: '#1129FF',
		width: 1,
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: false,
				mode: 'repulse',
			},
			onclick: {
				enable: true,
				mode: 'repulse',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 0,
				},
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			bubble: {
				distance: 100,
				size: 10,
			},
		},
	},
	retina_detect: true,
};

function Landing(props) {
	const {getQuestions, getAnswers, getTracks, getPoints} = props;

	useEffect(() => {
		getQuestions();
		getAnswers();
		getTracks();
		getPoints();
	}, []);
	if (props.location.state) {
		return <Redirect to="/quiz" />;
	}
	return (
		<div>
			{/*
      background-color: white;
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
  	z-index: -1; */}
			{/* <Header /> */}
			<div className="fixed top-0 left-0 w-full h-full particle-wrapper">
				<Particles params={particleOpt} />
			</div>
			<section className="flex flex-wrap w-3/6 m-auto mt-20">
				<div className="flex flex-wrap">
					<div className="relative w-full p-10">
						<span className="text-6xl italic right-10"></span>
						<h2 className=" fira sans z-10 text-2xl  text-center">
							Discover the Tech Career for You
						</h2>
						<p className="fira-sans text-center">
							Take our 5 minute survey to discover which tech field would be
							right for you. Discover the opportunity at your fingertips.
						</p>
					</div>
				</div>
			</section>

			<div className="flex px-1 py-1 justify-center">
				<Link
					to="/quiz"
					className="bg-purple-900 hover:bg-purple-800 text-white py-2 px-20 border border-purple-900 rounded"
				>
					Start Quiz
				</Link>
			</div>
			{/* flex flex-wrap w-3/6 m-auto mt-20 bg-blue-500relative w-full p-10 rounded
      shadow mb- bg-grayabsolute text-6xl italic text-gray-300 right-10absolute
      relative z-10 text-2xl text-gray-900block h-0 mt-5 mb-6 border-t-2
      border-red-500 w-{" "} */}
		</div>
	);
}

export default connect(null, {
	getQuestions,
	getAnswers,
	getTracks,
	getPoints,
})(Landing);
