import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import GoalBoxSection from "./GoalBoxSection";
import { isSubCenter } from "../util/util";

const Column = styled.div`
  width: 100%;
  display: grid;
  gap: 0px 0px;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: 175px 175px 175px;
  gap: 20px 20px;
`;

const GoalBoxColumn = () => {
  const containerQty = 9;
  const goalQty = 81;
  window.onunload = function() {
    console.log("window.onunload")
    };
    
  function makeSections() {
    const arr = [{ email: "ab@naver.com", mandar: [] }];
    for (let index = 0; index < 9; index++) {
      arr[0].mandar.push({ sectionId: index, goals: [] });
    }
    return arr;
  }

  function makeGoals(arr) {
    for (let index = 0; index < arr[0].mandar.length; index++) {
      for (let i = 0; i < 9; i++) {
        arr[0].mandar[index].goals.push({
          id: "m" + index + "h" + i,
          title: "",
          content: "content" + i,
        });
      }
    }

    return arr;
  }

  const goalsList = makeGoals(makeSections())[0].mandar;
  const [goalStates, setGoalStates] = useState(goalsList);
  // const email = goalsList.email;
  const [subSectionStates, setSubSectionStates] = useState(new Array(8).fill(false))
  console.log("subSectionStates",subSectionStates)
  
  const addGoalHandler = (goalTitle, sectionIndex, goalIndex) => {
    const goalList = [...goalStates];
    goalList[sectionIndex].goals[goalIndex].title = goalTitle

    // [linking] mainSub -> subCenter 
    if (sectionIndex === 4 && goalIndex !== 4) {
      goalList[goalIndex].goals[4].title = goalTitle
    }
    setGoalStates(goalList);

  };

  function drawSections() {
    const rows = goalStates.map((item) => {
      return (
        <GoalBoxSection
          key={item.sectionId}
          sectionId={item.sectionId}
          onAddGoal={addGoalHandler}
          list={item.goals}
        />
      );
    });
    return rows;
  }

  return (
    <Fragment>
      <Column>{drawSections()}</Column>
    </Fragment>
  );
};
export default GoalBoxColumn;
