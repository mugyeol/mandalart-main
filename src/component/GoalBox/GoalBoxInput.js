import styled, { css } from "styled-components";
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
  position: relative;

  textarea {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 100%;
    width: 100%;
    /* height: 100%; */
    padding-top: 1.9rem;
    text-align: center;
    text-orientation: center;
    font-size: 1rem;
    /* overflow: hidden; */

    /* outline: none; */
    resize: none;
    border-style: none;
    border-color: Transparent;
    //수정 중일때 폰트 size & color
    color: ${({ filter }) =>
      filter.isFinal
        ? "red"
        : filter.isMidTerm || filter.isMidTermTwin
        ? css`var(--purple)`
        : filter.isShortTerm && "black"};

    font-size: ${({ filter }) =>
      filter.isFinal
        ? css`1.3rem`
        : filter.isMidTerm || filter.isMidTermTwin
        ? css`1.2rem`
        : filter.isShortTerm && css`1rem`};
    cursor: ${({ filter }) => (filter.isMidTermTwin ? "default" : "text")};
  }
`;

const GoalBoxInput = (props) => {
  //div focus를 누를 때 text cursor로 만들어주기
  const onClickSpan = (e) => {
    if (e.target === e.currentTarget) {
      // e.target.querySelector("span").focus();
    }
  };
  const preventSpaceBar = (e) => {
    console.log("keycode", e.keyCode);
    console.log("props.goal.title", props.goal.title);
    if (props.goal.title === "" && e.keyCode === 32) {
      console.log("preventspacebar");
      e.preventDefault();
    }
  };
  const preventEnter = (e) => {
    console.log("keycode", e.keyCode);
    console.log("key", e.key);
    console.log("text", e.target.innerText);
    if (e.key === "Enter") {
      e.preventDefault();
      // inputHandler(e)
    }
  };

  const inputHandler = (e) => {
    console.log("inputHandlertext", e.target.innerText);
    console.log("inputHandlertext", e.target.value);

    const goalTitle = e.target.value;
    console.log(
      "innerText",
      e.target.innerText,
      "section",
      props.sectionIndex,
      "goal",
      props.goalIndex
    );
    console.log("onaddgoal e.kye", e.keyCode);
    if (e.key !== "Tab") {
      if (e.key !== "Shift") {
        if (props.goal.title === "" && e.key === " ") {
        } else {
          console.log("onaddgoal");
          props.onAddGoal(goalTitle, props.sectionIndex, props.goalIndex);
        }
      }
    }
  };

  // object => key : 1.isSubCenter 2. isMainSub 3. isMainCenter
  const filter = inputFilter(props.sectionIndex, props.goalIndex);
  function placeholder() {
    const plhStr = "goaL";
    return filter.isFinal
      ? "최종목표"
      : filter.isMidTerm
      ? plhStr + (props.goalIndex < 4 ? props.goalIndex + 1 : props.goalIndex)
      : filter.isMidTermTwin
      ? plhStr +
        (props.sectionIndex < 4 ? props.sectionIndex + 1 : props.sectionIndex)
      : "";
  }

  return (
    <Fragment>
      <Div filter={filter} onClick={onClickSpan}>
        <textarea
          placeholder={placeholder()}
          onChange={inputHandler}
          value={props.goal.title}
        ></textarea>

        {/* <span
          className={
            props.goal.title === "" &&
            (filter.isFinal || filter.isMidTerm || filter.isMidTermTwin)
              ? "placeholder"
              : "goal"
          }
          contentEditable={!filter.isMidTermTwin}
          data-placeholder={placeholder()}
          data-title={props.goal.title}
          // onBlur={inputHandler} //이벤트 발생 후 텍스트 인식
          // onKeyDown={preventSpaceBar}
          onKeyDown={preventEnter}
        >
          {props.goal.title}
        </span> */}
      </Div>
    </Fragment>
  );
};

export default GoalBoxInput;
