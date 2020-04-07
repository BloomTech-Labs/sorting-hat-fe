import React, {useState, useEffect, useRef} from 'react';
import {Redirect} from 'react-router-dom';

//* Redux
import {connect} from 'react-redux';
import {setScores} from '../redux/actions/setScores';

//* Components
import ProgressBar from './ProgressBar';
import {GoTriangleLeft, GoTriangleRight} from 'react-icons/go';
import {FaRegSquare} from 'react-icons/fa';

function Quiz(props) {
	//Setting State
	const {setScores, questions, answers, scores, points} = props;

	//State of the Quiz
	const [num, setNum] = useState(0);
	const [pointHistory] = useState([]);
	const [selected, setSelected] = useState([]);
	const btnColorNext = useRef('purple-400');
	const btnColorBack = useRef('purple-400');
	// const questionMarker = useRef('purple-100');

	//Running Actions
	useEffect(() => {
		setScores({});
	}, []);

	if (!questions.length) {
		return <Redirect to="/" />;
	}

	//If the quiz if finished it will redirect to main page
	if (num === questions.length) {
		return <Redirect to="/results" />;
	}

	//Scores are being updated based off of user selections

	const updatePoints = () => {
		//This action updates the score based on points associated with the tracks

		if (selected.length) {
			//button background settings
			btnColorBack.current = 'purple-700';
			btnColorNext.current = 'purple-400';
			if (selected === pointHistory[num - 1]) {
				return null;
			}
			setNum(num + 1);
			let newScores = {};
			selected.forEach((point) => {
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
			pointHistory.push(selected);
		}
	};

	const backScore = () => {
		setNum(num - 1);
		let newScores = {};
		pointHistory[num - 1].forEach((point) => {
			let current = scores[point.track_id];
			const newPoint = JSON.parse(point.points);
			newScores = {
				...newScores,
				[point.track_id]: current - newPoint,
			};
			setScores(newScores);
		});
		pointHistory.pop();
	};

	function answerButton(answer, index) {
		//todo highlight answer when going back or forward...
		const markers = document.getElementsByClassName('mark');
		return (
			<div className=" flex justify-start items-center w-full mt-1">
				<p
					key={index}
					id="marker"
					className="mark h-3 w-3 bg-white border-2 border-black"
				/>
				<button
					key={index}
					onClick={() => {
						setSelected(
							points.filter((point) => point.answer_id === answer.id)
						);
						btnColorNext.current = 'purple-700';
						// questionMarker.current = 'purple-700';
						// marker.style.backgroundColor = 'rebeccapurple';
						// Array.from(marker).forEach(m => m.id));
						console.log(markers[0]);
					}}
					// hover:bg-purple-100 focus:bg-purple-100
					className="mark-select w-full p-1 ml-2 text-left"
				>
					{/* <FaRegSquare key={index} className="mark"/> */}
					{answer.choice}
				</button>
			</div>
		);
	}

	return (
		<div className="w-3/5 m-auto p-1 mt-3 h-screen">
			<h1 className="mt-2 text-xl pt-4">Question {num + 1}</h1>
			<ProgressBar progress={questions[num].id / questions.length} />
			<h1 className="mt-2">{questions[num].question}</h1>
			<div className="flex flex-col w-full mt-4 mb-2">
				{answers.map(
					(answer, index) =>
						answer.question_id === questions[num].id &&
						answerButton(answer, index)
				)}
			</div>
			<div className="actions flex m-auto mt-8 justify-between items-center">
				{num > 0 ? (
					<button
						onClick={backScore}
						className={`flex bg-${btnColorBack.current} text-white p-2 rounded-lg`}
					>
						<GoTriangleLeft size="1.3rem" /> Back
					</button>
				) : (
					<button
						onClick={() => props.history.push('/')}
						className={`text-white flex bg-purple-400 p-2 rounded-lg`}
					>
						<GoTriangleLeft size="1.3rem" /> Back
					</button>
				)}
				<span className="text-gray-600">{`${questions[num].id}/${questions.length}`}</span>
				<button
					onClick={updatePoints}
					className={`flex bg-${btnColorNext.current} text-white p-2 rounded-lg`}
				>
					Next <GoTriangleRight size="1.3rem" />
				</button>
			</div>
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

export default connect(mapStateToProps, {setScores})(Quiz);
