import { Fragment } from "react";
import styled from "styled-components";
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
  // 등록된 앱의 JavaScript key
  const jsKey = "1e8546c53c8fb3ca9e6d6b0b173f6a1c";

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/redirectKakao",
    });
  }
  return (
    <Fragment>
    <Title/>
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
