import React from "react";
//비구조할당으로 props값 받기
const Props_2 = ({name, age, hobby, adv}) => {
    return (
      <>
        <div>이름: {name}</div>
        <div>나이: {age}</div>
        <div>취미: {hobby}</div>
        <div>특기: {adv}</div>
      </>
    );
}

export default Props_2;