import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../redux/actions/getQuestions';
import {getAnswers} from '../redux/actions/getAnswers';
import {setScores} from '../redux/actions/setScores';
import {getPoints} from '../redux/actions/getPoints';
import {getTracks} from '../redux/actions/getTracks';
import {Redirect} from 'react-router-dom';
import ProgressBar from './ProgressBar';
import BarGraph from './BarGraph';

function Quiz(props) {
	//Setting State
	const {
		getQuestions,
		getAnswers,
		getTracks,
		setScores,
		getPoints,
		questions,
		answers,
		scores,
		points,
	} = props;

	const [num, setNum] = useState(0);
	const [pointHistory, setPointHistory] = useState([]);
	//Running Actions
	useEffect(() => {
		getQuestions();
		getAnswers();
		getTracks();
		getPoints();
		setScores({});
	}, []);

	//If the quiz if finished it will redirect to main page
	if (num === questions.length) {
		return <Redirect to="/results" />;
	}

	//Scores are being updated based off of user selections

	const updatePoints = (point) => {
		//This action updates the score based on points associated with the tracks
		let newScores = {};
		point.forEach((point) => {
			let current = scores[point.track_id];
			const newPoint = JSON.parse(point.points);
			if (!current) {
				current = 0;
			}
			newScores = {
				...newScores,
				[point.track_id]: current + newPoint,
			};
			setScores(newScores);
		});
		// pointHistory.push({ question: num, points: point });
		// setPointHistory([...pointHistory, { question: num, points: point }]);
	};

	const backScore = () => {
		console.log(num - 1);
		// let newScores = {}
		// setPointHistory([pointHistory.filter(e => )])
		// lastPoint.forEach(point => {
		//   let current = scores[point.track_id];
		//   const lastPoint = JSON.parse(point.points)
		//   newScores = {
		//     ...newScores,
		//     [point.track_id]: current - lastPoint
		//   }
		// })
		console.log(pointHistory);
	};

	return (
		<div className="w-4/5 m-auto">
			<h1 className="mt-2">Question {num + 1}</h1>
			<h2>{questions[num].question}</h2>
			<div className="flex flex-col m-4">
				{answers.map(
					(answer) =>
						answer.question_id === questions[num].id && (
							<button
								key={answer.id}
								onClick={() => {
									const point = points.filter(
										(point) => point.answer_id === answer.id
									);
									setNum(num + 1);
									updatePoints(point);
								}}
								className="hover:bg-red-500  w-1/2 p-1 m-auto text-left"
								// hover:border-4 hover:border-solid hover:border-black hover:rounded-md
							>
								{answer.choice}
							</button>
						)
				)}
				<button onClick={backScore} className="hidden">
					Back
				</button>
			</div>
			<ProgressBar progress={questions[num].id / questions.length} />
		</div>
	);
}

//Redux interface

const mapStateToProps = (state) => {
	return {
		questions: state.questions,
		answers: state.answers,
		scores: state.scores,
		points: state.points,
	};
};

export default connect(mapStateToProps, {
	getQuestions,
	getAnswers,
	setScores,
	getTracks,
	getPoints,
})(Quiz);
