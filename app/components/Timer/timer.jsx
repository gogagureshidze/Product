import "./timer.css"

export default function Timer() {
  return (
    <div className="Timer">
        <div className="timer-content">
            <h1>The Deal of the Week</h1>
            <hr />

            <div className="countdown">
            <div className="time">
                <h1>21</h1>
                <p>Days</p>
            </div>
            <div className="time">
                <h1>14</h1>
                <p>Hours</p>
            </div>
            <div className="time">
                <h1>34</h1>
                <p>Minutes</p>
            </div>
            <div className="time">
                <h1>56</h1>
                <p>Seconds</p>
            </div>
            </div>

            <button className="countdownbutton">Shop Now</button>
        </div>
    </div>

  );
}
