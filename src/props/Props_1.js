import React from "react";
//한번에 하나의 변수로 props값 받기
const Props_1 = (props) => {
  return (
    <>
      <div>이름: {props.name}</div>
      <div>나이: {props.age}</div>
      <div>취미: {props.hobby}</div>
      <div>특기: {props.adv}</div>
    </>
  );
}

export default Props_1