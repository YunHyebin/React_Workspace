import React from "react";
//태그 사이의 내용을 보여주는 children
const Props_children = (props) => {
  const {name, age, hobby, adv, etc} = props;
  return (
    <>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <div>취미: {hobby}</div>
      <div>특기: {adv}</div>
      <div>그 외: {etc}</div>
      <div>children값: {props.children}</div>
    </>
  );
}

Props_children.defaultProps = {
  etc: '없음'
};

export default Props_children;