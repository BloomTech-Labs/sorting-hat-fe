import React from 'react';
import './styles/app.css';
import {Route} from 'react-router-dom';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Results from './components/Results';
import About from './components/About';
import Courses from './components/Courses';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Landing} />
			<Route path="/quiz" component={Quiz} />
			<Route path="/results" component={Results} />
			<Route path="/about" component={About} />
			<Route path="/courses" component={Courses} />
		</div>
	);
}
// testing
export default App;
