import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoalBoxSection from "./GoalBoxSection";
import { fillSubGoals } from "../../util/util";
import Nav from "../Nav/Nav";
import Title from "../Title/Title";
import { getDummyData } from "../../test/DummyMaker";

const GoalBoxMain = () => {
  window.onunload = function () {};
  const [goalStates, setGoalStates] = useState([]);
  const [placeholder, setPlaceHolder] = useState([]);
  const name = "무결";
  // const [subSectionStates, setSubSectionStates] = useState(
  //   new Array(8).fill(false)
  // );
  const url = "http://129.154.220.20:55555/ma/malist";
  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        access_token: localStorage.getItem("access_token"),
      }),
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("main data : ", data);
        // setPlaceHolder(data.mandal);
        // setGoalStates(data.mandal);
        // setGoalStates(fillSubGoals(dummy));
        setGoalStates(data.mandal);
      });
  }, []);
  const dummy = getDummyData();
  function drawSections() {
    const rows = goalStates?.map((item, index) => {
      // const rows = dummy.map((item, index) => {
      return (
        <GoalBoxSection
          key={index}
          sectionIndex={index}
          onAddGoal={addGoalHandler}
          goals={item.goals}
          // placeholder={placeholder[index].goals}
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
    const postUrl = "http://129.154.220.20:55555/ma/maupdate";
    fetch(postUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({
        access_token: localStorage.getItem("access_token"),
        mandal: goalStates,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {});
  }

  return (
    <Wrapper>
      <Title />
      <Nav updateGoals={updateGoals} />
      <MainWrapper>
        <h2>{localStorage.getItem("nickname")}의 만다라트</h2>
        <Main id="capture">{drawSections()}</Main>
      </MainWrapper>
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
const MainWrapper = styled.div`
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
