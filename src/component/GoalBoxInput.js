import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React, { Fragment } from "react";
import styled from "styled-components";
import { inputFilter, isSubCenter } from "../util/util";

const Input = styled.input`
  width: 50px;
  height: 50px;
  margin: 0.1rem;
  cursor: ${({ filter }) => (filter.isSubCenter ? "default" : "auto")};
  color: ${({ filter }) =>
    filter.isMainCenter
      ? "blue"
      : filter.isSubCenter || filter.isMainSub
      ? "red"
      : "black"};
`;

const GoalBoxInput = (props) => {
  // object => key : 1.isSubCenter 2. isMainSub 3. isMainCenter
  const filter = inputFilter(props.sectionId, props.goalIndex);
  const inputHandler = (e) => {
    const goalTitle = e.target.value;
    console.log("inputHandler : ", goalTitle);
    props.onAddGoal(goalTitle, props.sectionId, props.goalIndex);
  };


  return (
    <Fragment>
      <Input
        placeholder={props.goal.id}
        value={props.goal.title}
        onChange={inputHandler}
        readOnly={filter.isSubCenter}
        filter={filter}
      />
      {/* 첫째, 둘째줄 다음 br 태그 추가  */}
      {(props.goalIndex + 1) % 3 === 0 && (props.goalIndex + 1) / 3 !== 3 && (
        <br />
      )}
    </Fragment>
  );
};
export default GoalBoxInput;
