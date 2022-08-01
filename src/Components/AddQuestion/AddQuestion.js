import { useState, useRef } from 'react';
import './AddQuestion.css'
import { useHistory } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { AiFillCheckCircle } from 'react-icons/ai';

const AddQuestion = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const redirect = useHistory();

    const questions = useRef()
    const rightAnswers = useRef()
    const answer2 = useRef()
    const answer3 = useRef()
    const answer4 = useRef()

    function submitQuestion(e) {
        e.preventDefault();
        console.log(questions.current.value)
        console.log(answer2.current.value)
        console.log(rightAnswers.current.value)
        console.log(answer3.current.value)
        console.log(answer4.current.value)

        const answersArray= [rightAnswers.current.value, answer2.current.value, answer3.current.value, answer4.current.value]
        const question = questions.current.value
        const rightAnswer = rightAnswers.current.value

        //Parsing into JSON 
        const answers = JSON.parse(JSON.stringify(answersArray))
        console.log(answers)
        const item = JSON.stringify({question , answers , rightAnswer});
        console.log(item) 

        //Fetch Post
         setLoading(true);
        fetch('http://localhost:8000/questions' ,{
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: item
        }).then(response => {
            if(!response.ok){
                throw Error('Failed uploading questions to database.')
            }
            setSuccess(true)
            setLoading(false)
        }).catch(err=>{
            setErrMessage(err.message)
            setLoading(false)
        })
        
        //Pushing User Back to Homepage
        redirect.push('/')
    }


    return ( 
        <form className='wrapper'>
            <div className='container'>
                <div className='title'>
                    <h1>New Question</h1>
                </div>
                <div className='question'>
                    <label for='question'>Enter your question here.</label>
                    <input required ref={questions} type='text' placeholder="Question..." name='question' className='questionInput' ></input>
                </div>
                <div className='answers'>
                    <label for='answer1'>Enter your correct answer choice.</label>
                    <input required  ref={rightAnswers} type='text' placeholder="Correct Answer" name='answer1' className='answerInput answer1'></input>
                </div>
                <div className='answers'>
                    <label for='answer2'>Enter your second answer choice.</label>
                    <input required  ref={answer2} type='text' placeholder="Option 2" name='answer2' className='answerInput answer2'></input>
                </div>
                <div className='answers'>
                    <label for='answer3'>Enter your third answer choice.</label>
                    <input required  ref={answer3} type='text' placeholder="Option 3" name='answer3' className='answerInput answer3'></input>
                </div>
                <div className='answers'>
                    <label for='answer4'>Enter your fourth answer choice.</label>
                    <input required  ref={answer4} type='text' placeholder="Option 4" name='answer4' className='answerInput answer4'></input>
                </div>
                { !loading && 
                <button className='submit' onClick={submitQuestion}>Submit</button>
                }

                { loading && 
                    <Loader />
                }

                { success && 
                    <div>
                        <AiFillCheckCircle />
                    </div>
                }

            </div>
        </form>
     );
}
 
export default AddQuestion;