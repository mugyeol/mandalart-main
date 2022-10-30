import styled from "styled-components";
import { inputFilter } from "../../util/util";
import React, { Fragment } from "react";

const Div = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  justify-content: center;
  background-color: white;
  align-items: center;
  cursor: text;

  span {
    width: 100%;
    max-height: 100%;
    font-size: 1.3rem;
    /* opacity: 0.7; */
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    text-orientation: center;
    color: var(--placeholder);
    &:focus {
      outline: none;
    }

    &[contentEditable] {
      overflow-wrap: break-word;
    }

    cursor: ${({ filter }) => (filter.isSubCenter ? "default" : "text")};

    color: ${({ filter }) =>
      filter.isMainCenter
        ? "blue"
        : filter.isSubCenter || filter.isMainSub
        ? "red"
        : "black"};

    &[contentEditable]:empty::before {
      content: attr(data-placeholder);
    }
  }
`;

const GoalBoxInput = (props) => {
  //div focus를 누를 때 text cursor로 만들어주기
  const onClickSpan = (e) => {
    if (e.target === e.currentTarget) {
      e.target.querySelector("span").focus();
    }
  };

  const inputHandler = (e) => {
    const goalTitle = e.target.innerText;
    // goalTitle !== "" &&
    if (e.key !== "Tab")
      //탭할때 빈값 보내주는거 막아주기
      props.onAddGoal(goalTitle, props.sectionIndex, props.goalIndex);
  };

  // object => key : 1.isSubCenter 2. isMainSub 3. isMainCenter
  const filter = inputFilter(props.sectionIndex, props.goalIndex);
  return (
    <Fragment>
      <Div filter={filter} onClick={onClickSpan}>
        <span
          contentEditable={!filter.isSubCenter}
          data-placeholder={props.goal.title}
          // onKeyDown={inputHandler} //이벤트 발생 후 텍스트 인식
          onKeyUp={inputHandler}
        />
      </Div>
    </Fragment>
  );
};

export default GoalBoxInput;