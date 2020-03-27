import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../redux/actions/getQuestions';
import {getAnswers} from '../redux/actions/getAnswers';
import {setScores} from '../redux/actions/setScores';
import {getPoints} from '../redux/actions/getPoints';
import {getTracks} from '../redux/actions/getTracks';
import {Redirect} from 'react-router-dom';
import ProgressBar from './ProgressBar';
import 'antd/dist/antd.css';
import {Progress} from 'antd';

// ReactDOM.render(

function Quiz(props) {
	const {
		getQuestions,
		getAnswers,
		getTracks,
		setScores,
		getPoints,
		questions,
		answers,
		tracks,
		scores,
		points
	} = props;

	const [num, setNum] = useState(0);

	useEffect(() => {
		getQuestions();
		getAnswers();
		getTracks();
		getPoints();
	}, []);

	if (num === questions.length) {
		return <Redirect to="/results" />;
	}

	const updatePoints = point => {
		//This action updates the score based on points associated with the tracks
		console.log({scores});
		console.log({point});
		const current = scores[point.track_id];
		const newPoint = JSON.parse(point.points);
		console.log({current});
		console.log({newPoint});

		setScores({
			...scores,
			[point.track_id]: current + newPoint
		});
	};

	return (
		<div className="w-4/5 m-auto">
			<h1 className="mt-2">Question {num + 1}</h1>
			<h2>{questions[num].question}</h2>

			<div className="flex flex-col m-4">
				{answers.map(answer => {
					if (answer.question_id === questions[num].id) {
						return (
							// todo create form to replace button
							// todo add state for back button
							// <div className="hover:bg-red-500  w-1/2 p-1 m-auto text-left">
							//  <input type="checkbox" props={...props} name="checkbox" />
							<button
								key={answer.id}
								onClick={() => {
									const point = points.find(
										point => point.answer_id === answer.id
									);
									setNum(num + 1);
									updatePoints(point);
								}}
								className="hover:bg-red-500  w-1/2 p-1 m-auto text-left"
								// hover:border-4 hover:border-solid hover:border-black hover:rounded-md
							>
								{answer.choice}
							</button>
							// </div>
						);
					}
				})}
			</div>
			<ProgressBar progress={questions[num].id / questions.length} />
			{/* <Progress percent={(questions[num].id / questions.length) * 100} /> */}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		questions: state.questions,
		answers: state.answers,
		tracks: state.tracks,
		scores: state.scores,
		points: state.points
		//! THE ANSWER POINTS ARE NOT BEING SAVED THROUGHOUT THE QUIZ
	};
};

export default connect(mapStateToProps, {
	getQuestions,
	getAnswers,
	setScores,
	getTracks,
	getPoints
})(Quiz);
