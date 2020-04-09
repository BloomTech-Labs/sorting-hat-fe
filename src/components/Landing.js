import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../redux/actions/getQuestions';
import {getAnswers} from '../redux/actions/getAnswers';
import {getPoints} from '../redux/actions/getPoints';
import {getTracks} from '../redux/actions/getTracks';
import {Link, Redirect} from 'react-router-dom';
import ParticleTesting from './ParticleTesting';
// import Header from "../components/Header";

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
		<>
			<ParticleTesting className="fixed top-0 left-0 w-full h-full particle-wrapper" />

			<section className=" flex flex-wrap w-1/4 m-auto mt-40 pt-2 pb-2 justify-center">
				<h2 className=" fira sans z-10 text-5xl pt-2 pb-2 mb-1 text-center font-bold border-b-4 landingBorderColor">
					Discover the Tech Career for You
				</h2>
				<p className=" fira-sans text-center text-2xl">
					Take our 5 minute survey to discover which tech field would be right
					for you. Discover the opportunity at your fingertips.
				</p>
				<Link
					to="/quiz"
					className="fira-sans bg-purple-900 hover:bg-purple-700 text-white py-2 px-20 mt-4 border border-purple-900 rounded pointer-events-auto z-10"
				>
					Start Quiz
				</Link>
			</section>
		</>
	);
}

export default connect(null, {
	getQuestions,
	getAnswers,
	getTracks,
	getPoints,
})(Landing);
