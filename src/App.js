import { useState } from 'react';
import './App.css';
import FirstState from './state/FirstState';

function App() {
  let name = "신짱구";
  let hobby = "액션가면놀이";
  let adv = "엉덩이로 걷기";

  const [age, setAge] = useState(0);
  const addAge = () => setAge(age + 1);
  const minusAge = () => setAge(age - 1);

  return <FirstState name={name} age={age} plusAge={addAge} minusAge={minusAge} hobby={hobby} adv={adv}></FirstState>;
}

export default App;
