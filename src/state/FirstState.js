import React, { useState } from 'react'

const FirstState = ({name, age, plusAge, minusAge, hobby, adv}) => {
    const [colorName, setColorName] = useState('검정색');
    const colorBlack = () => setColorName('검정색');
    const colorBlue = () => setColorName("파란색");
    const colorRed = () => setColorName("빨간색");
    const colorYellow = () => setColorName("노란색");

    const [color, setColor] = useState({ color: 'black' });
  const setColorBlack = () => setColor({ color: 'black' });
  const setColorBlue = () => setColor({ color: 'blue' });
  const setColorRed = () => setColor({ color: 'red' });
  const setColorYellow = () => setColor({ color: "yellow" });

    function onClickBlack(){
        colorBlack();
        setColorBlack();
    }
    function onClickBlue(){
        colorBlue();
        setColorBlue();
    }
    function onClickRed(){
        colorRed();
        setColorRed();
    }
    function onClickYellow(){
        colorYellow();
        setColorYellow();
    }

  return (
    <>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <button onClick={plusAge}>+1살</button>
      <button onClick={minusAge}>-1살</button>
      <div>취미: {hobby}</div>
      <div>특기: {adv}</div>
      <div>좋아하는 색상:</div>
      <div style={color}>{colorName}</div>
      <button style={{ color: "black" }} onClick={onClickBlack}>
        검정색
      </button>
      <button style={{ color: "blue" }} onClick={onClickBlue}>
        파란색
      </button>
      <button style={{ color: "red" }} onClick={onClickRed}>
        빨간색
      </button>
      <button style={{ color: "yellow" }} onClick={onClickYellow}>
        노란색
      </button>
    </>
  );
}

export default FirstState