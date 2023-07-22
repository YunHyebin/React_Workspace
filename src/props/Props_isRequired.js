import React from "react";
import PropTypes from 'prop-types';

//props의 타입을 지정하는 propTypes
const Props_isRequired = (props) => {
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

Props_isRequired.defaultProps = {
  etc: '없음'
};

Props_isRequired.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobby : PropTypes.string.isRequired
};

export default Props_isRequired;