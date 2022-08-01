import { useState } from "react";
import FetchQuestions from "../fetchQuestions";
import { Link, useHistory } from "react-router-dom";
import './Game.css'

const Game = () => {
    const { data :questions, errMessage } = FetchQuestions('http://localhost:8000/questions')
    let [questionNumber, setQuestionNumber] = useState(0)
    let [scoreCount, setScoreCount] = useState(0)
    const [gameEnd, setGameEnd] = useState(false);
    const redirect = useHistory();

    function nextQuestion(e){
        let answerArray = [];

        //Check if the answer is true or false and store it in an array.
        if(e.target.innerHTML == questions[questionNumber].rightAnswer){
            setScoreCount(scoreCount += 1)
        }

        //Ends the game if it is over 5 questions
        if(questionNumber >= 5){
            document.querySelector('.showScore').style.display='flex';
            document.querySelector('.scorecount').style.display='none';
        }
        
        //Next Question
        setQuestionNumber(questionNumber += 1)

        //Game End
        if(questionNumber >= 5) {
            setGameEnd(true)
            redirect.push({
                pathname:'/gameEnd',
                state: {score:scoreCount}
            });
        }

    }

    return ( 
        <div className='game'>
            { errMessage && <h1>{errMessage}</h1>}
            { questions && 
            <div className='game-components'>
                <div className='question'>
                    <h1>{questions[questionNumber].question}</h1>
                </div>
                <div className='multiple-choices'>
                    <button onClick={nextQuestion} className='answer'>{questions[questionNumber].answers[0]}</button>
                    <button onClick={nextQuestion} className='answer'>{questions[questionNumber].answers[1]}</button>
                    <button onClick={nextQuestion} className='answer'>{questions[questionNumber].answers[2]}</button>
                    <button onClick={nextQuestion} className='answer'>{questions[questionNumber].answers[3]}</button>
                </div>
                <div className='scorecount'>
                    <h2>{questionNumber}/5</h2>
                </div>
            
            </div> }

                { gameEnd &&
                <div className='showScore'>
                    <Link to={{pathname: '/gameEnd', state: { score:scoreCount }}}><button>Show Score!</button></Link>
                </div>
                }   
        </div>   
     );
}

export default Game;