import axios from 'axios';

export const getQuestion = () => axios.get('https://tech-sorting-hat.herokuapp.com/api/questions');
