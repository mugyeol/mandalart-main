import { Fragment } from "react";
import styled from "styled-components";
import { loginWithKakao } from "../../util/loginUtil";
import Button from "../Button/Button";
import Title from "../Title/Title";

const LoginWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Login = () => {

  return (
    <Fragment>
      <Title />
      <LoginWrapper>
        <Button row={false} onClick={loginWithKakao}>
          카카오 로그인
        </Button>
        <Button row={false}>네이버 로그인</Button>
        <Button row={false}>구글 로그인</Button>
        <Button row={false}>애플 로그인</Button>
      </LoginWrapper>
    </Fragment>
  );
};
export default Login;
