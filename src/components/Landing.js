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
		<div>
			<ParticleTesting className="fixed top-0 left-0 w-full h-full particle-wrapper" />

			<section className="flex flex-wrap w-3/6 m-auto  mt-40 pt-2 pb-2 justify-center pointer-events-none ">
				<h2 className=" fira sans z-10 text-2xl pt-2 pb-2 text-center pointer-events-none">
					Discover the Tech Career for You
				</h2>
				<p className="fira-sans text-center pointer-events-none">
					Take our 5 minute survey to discover which tech field would be right
					for you. Discover the opportunity at your fingertips.
				</p>
				<Link
					to="/quiz"
					className="bg-purple-900 hover:bg-purple-800 text-white py-2 px-20 mt-1 border border-purple-900 rounded pointer-events-auto"
				>
					Start Quiz
				</Link>
			</section>
		</div>
	);
}

export default connect(null, {
	getQuestions,
	getAnswers,
	getTracks,
	getPoints,
})(Landing);
