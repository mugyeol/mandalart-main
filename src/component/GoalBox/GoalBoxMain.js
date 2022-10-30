import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import GoalBoxSection from "./GoalBoxSection";
import { fillSubGoals, isSubCenter } from "../../util/util";
import Nav from "../Nav";
import Title from "../Title/Title";

const GoalBoxMain = () => {
  window.onunload = function () {};
  const [goalStates, setGoalStates] = useState([]);
  const [subSectionStates, setSubSectionStates] = useState(
    new Array(8).fill(false)
  );
  const url = "http://129.154.220.20:55555/tma/tmalistapp";

  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ id: "mcho@naver.com" }),
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGoalStates(fillSubGoals(data.mandal));
      });
  }, []);

  function drawSections() {
    const rows = goalStates?.map((item, index) => {
      return (
        <GoalBoxSection
          key={index}
          sectionIndex={index}
          onAddGoal={addGoalHandler}
          goals={item.goals}
        />
      );
    });
    return rows;
  }

  const addGoalHandler = (goalTitle, sectionIndex, goalIndex) => {
    const goalList = [...goalStates];
    goalList[sectionIndex].goals[goalIndex].title = goalTitle;
    // [linking] mainSub -> subCenter
    if (sectionIndex === 4 && goalIndex !== 4) {
      goalList[goalIndex].goals[4].title = goalTitle;
    }
    setGoalStates(goalList);
  };
  function updateGoals() {
    const postUrl = "http://129.154.220.20:55555/tma/tmaupdateapp";
    fetch(postUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({ id: "mcho@naver.com", mandal: goalStates }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {});
  }

  return (
    <Wrapper>
      <Title/>
      <Nav updateGoals={updateGoals} />
      <Main>{drawSections()}</Main>
      {/* <Login/> */}
    </Wrapper>
  );
};
export default GoalBoxMain;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 18.2rem 18.2rem 18.2rem;
  gap: 0.2rem;
`;
