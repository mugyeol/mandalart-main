import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GoalBoxSection from "./GoalBoxSection";
import Nav from "../Nav/Nav";
import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import mandalartImage from "../../asset/img/mandalart_otani.jpeg";

import Title from "../Title/Title";
import { fetchPatch, fetchPost } from "../../util/fetchUtil";
import { getDummyData } from "../../test/DummyMaker";
function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById("modal"));
}
const GoalBoxMain = () => {
  window.onunload = function () {};
  const [goalStates, setGoalStates] = useState([]);
  const dummy = getDummyData();
  const [isLoginUser, setIsLoginUser] = useState(false)
  const url = "http://129.154.220.20:55555/ma/malist";
  useEffect(() => {
    fetchPost(url).then((data) => {
      // data.msg==="fail" ? alert("비로그인상태") && setGoalStates(dummy): setGoalStates(data.mandal)
      if (data.msg === "fail") {
        console.log("fail")
        alert("비로그인상태");
        setIsLoginUser(false)
        setGoalStates(dummy);
      } else {
        setIsLoginUser(true)
        console.log("fail")

        setGoalStates(data.mandal);
      }

      console.log("main data : ", data);
    });
  }, []);
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
  function logOut() {
    const token = localStorage.getItem("access_token");

    const logoutUrl = "http://129.154.220.20:55555/ma/kakao/logout";
    // fetchPatch(logoutUrl)
    fetch(logoutUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: token,
      }),
    }).then((res) => {
      console.log("res", res.ok);
      alert("로그아웃 완료");
      window.location.reload();
    });
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
    if(isLoginUser===false){
      alert("로그인 후에 가능합니다.")
    }else{
      const postUrl = "http://129.154.220.20:55555/ma/maupdate";
      const object = {
        access_token: localStorage.getItem("access_token"),
        mandal: goalStates,
      };
      console.log("object to update ", object);
      fetch(postUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify(object),
      }).then((res) => {
        console.log("res", res);
      });
    }
    
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrapper>
      <Portal>
        <Modal
          isOpen={isModalOpen}
          onClickModal={closeModal}
          onPressEsc={closeModal}
        >
          <img src={mandalartImage} className="example" alt="mandal-art" />
        </Modal>
      </Portal>
      <Title />
      <Nav
        updateGoals={updateGoals}
        onClickExample={openModal}
        onClickLogout={logOut}
      />
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
