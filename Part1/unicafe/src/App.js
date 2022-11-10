import { useState } from "react";

const Header = () => (
  <div>
    <h1>give feedback</h1>
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = () => (
  <div>
    <h1>Statistics</h1>
  </div>
);

const Display = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(good + 1);
  };
  const onClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const onClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header />
      <Button handleClick={() => onClickGood()} text="good" />
      <Button handleClick={() => onClickNeutral()} text="neutral" />
      <Button handleClick={() => onClickBad()} text="bad" />

      <Statistics />
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
    </div>
  );
};

export default App;
