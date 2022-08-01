import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './gameEnd.css'

const GameEnd = () => {
    const location = useLocation()
    const { score } = location.state
    const [gameEndMessage, setGameEndMessage] = useState(null)

    useEffect(()=>{
        if( score > 3){
            setGameEndMessage("Congrats, you've won!")
        } else if ( score < 3 ) {
            setGameEndMessage("Try again next time!")
        }
    },[score])

    return ( 
        <div className='gameEnd'>
            <div className='gameEnd-container container'>
                <div className='message'>
                    You have scored :
                </div>
                <div className='points'>
                { score } / 5.
                </div>
                <div className='winOrLose'>
                    {gameEndMessage}
                </div>
            </div>
        </div>
     );
}
 
export default GameEnd;