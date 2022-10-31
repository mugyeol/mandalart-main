import styled from "styled-components";
import { saveToImage } from "../../util/imgUtil";
import { loginWithKakao } from "../../util/loginUtil";
import Button from "../Button/Button";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Nav = ({updateGoals}) => {
  return (
    <NavWrapper>
        <Button row={true} onClick={updateGoals}>데이터 저장</Button>
        <Button row={true} onClick={loginWithKakao}>카카오 로그인</Button>
        <Button row={true}>로그아웃</Button>
        <Button row={true} onClick={()=>saveToImage("무결")}>이미지로 저장</Button>
    </NavWrapper> 
  );
};

export default Nav;
