import styled from "styled-components";
import { saveToImage } from "../../util/imgUtil";
import { checkUser, loginWithKakao } from "../../util/loginUtil";
import Button from "../Button/Button";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Nav = ({ updateGoals, onClickExample, onClickLogout }) => {
  return (
    <NavWrapper>
      {checkUser() ? (
        <Button row={true} onClick={onClickLogout}>
          로그아웃
        </Button>
      ) : (
        <Button row={true} onClick={loginWithKakao}>
          카카오 로그인
        </Button>
      )}
      <Button row={true} onClick={updateGoals}>
        데이터 저장
      </Button>
      <Button row={true} onClick={() => saveToImage("무결")}>
        이미지로 저장
      </Button>
      <Button row={true} onClick={onClickExample}>
        예시보기
      </Button>
    </NavWrapper>
  );
};

export default Nav;
