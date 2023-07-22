import React from "react";

//props의 타입을 지정하는 propTypes
const Props_method = ({name, age, hobby, adv, propsFunc1, propsFunc2}) => {
  return (
    <>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <div>취미: {hobby}</div>
      <div>특기: {adv}</div>
      <button onClick={propsFunc1}>제출</button>
      <button onClick={propsFunc2}>취소</button>
    </>
  );
}

export default Props_method;