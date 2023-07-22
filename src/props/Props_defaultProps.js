import React from "react";
//defaultProps로 기본값 설정하기
const Props_defaultProps = ({name, age, hobby, adv, etc}) => {
    return (
      <>
        <div>이름: {name}</div>
        <div>나이: {age}</div>
        <div>취미: {hobby}</div>
        <div>특기: {adv}</div>
        <div>그 외: {etc}</div>
      </>
    );
};

Props_defaultProps.defaultProps = {
  etc: '없음'
};

export default Props_defaultProps;