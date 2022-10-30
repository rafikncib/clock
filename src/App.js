
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [breakLength,setBreakLength]=useState(5);
  const [sessionLength,setSessionLength]=useState(25);
  const [timerLabel,setTimelabel]=useState('Session');
  const [timeLeft,setTimeLeft]=useState(1500);
  const [timebegin,setTimebegin]=useState(false);
  

  const breakDecrement=()=>{
    if(breakLength>1)
    setBreakLength(breakLength-1);
  }
  const breakIncrement=()=>{
    if(breakLength<=59)
    setBreakLength(breakLength+1);
  }

  const sessionDecrement=()=>{
    if(sessionLength>1)
      {
        setSessionLength(sessionLength-1);
        setTimeLeft(timeLeft-60);
      }
  }
  const sessionIncrement=()=>{
    if(sessionLength<=59)
      {
        setSessionLength(sessionLength+1);
        setTimeLeft(timeLeft+60);
      }
  }
  const startStop=()=>{
    if(!timebegin)
    return setTimebegin(true);
    else 
    return setTimebegin(false);
  }
  
  const mmssTime=()=>{
    let time_left_minutes = Math.floor(timeLeft/60);
    let time_left_seconds = Math.floor(((timeLeft/60) - time_left_minutes) * 60);
    if(time_left_minutes<10){
      time_left_minutes="0"+time_left_minutes;
    }
    if(time_left_seconds<10){
      time_left_seconds="0"+time_left_seconds;
    }
    return time_left_minutes+":"+time_left_seconds;
  }
  

  useEffect(() => {
    if (timebegin) {
      console.log(timebegin);
      setTimeout(() => {
        if(timeLeft > 0) {
          setTimeLeft((timeLeft)=>timeLeft - 1)
          console.log(timeLeft);
        }else{
          setTimeLeft(1500);
          setTimelabel('Break');
        } 
      }, 1000);
    }
  });

  const reset=()=>{
    setBreakLength(5);
    setSessionLength(25);
    setTimelabel('Session');
    setTimeLeft(25 * 60);
    setTimebegin(false);
  }
  return (
   
    <div id='clock' className='bg-info container-fluid'>
      <main>
        <section className='w-50 mx-auto'>
          <h1 className='text-white text-center'>25 + 5 Clock</h1>
          <div className='row'>
            <div className='col'>
              <h2 id="break-label">Break Length</h2>
              <div className='row'>
                <div className='col' >
                  <button className='btn btn-secondary' id="break-decrement" onClick={breakDecrement}>-</button>
                </div>
                <div className='col'>
                  <h3 id="break-length">{breakLength}</h3>
                </div>
                <div className='col'>
                  <button className='btn btn-secondary' id="break-increment" onClick={breakIncrement}>+</button>
                </div>
              </div>
            </div>
            <div className='col'>
              <h2 id="session-label">Session Length</h2>
              <div className='row'>
                <div className='col'>
                  <button className='btn btn-secondary' id="session-decrement" onClick={sessionDecrement}>-</button>
                </div>
                <div className='col'>
                  <h3 id="session-length">{sessionLength}</h3>
                </div>
                <div className='col'>
                  <button className='btn btn-secondary' id="session-increment" onClick={sessionIncrement}>+</button>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <section>
              <h2 id="timer-label">{timerLabel}</h2>
              <p id="time-left">{mmssTime(timeLeft)}</p>
            </section>
          </div>
          <div className='btn-group' role='group'>
            <button id="start_stop" type="button" className="btn btn-primary" onClick={startStop}>+</button>
            <button type="button" className="btn btn-primary">+</button>
            <button id="reset" type="button" className="btn btn-primary" onClick={reset}>+</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
