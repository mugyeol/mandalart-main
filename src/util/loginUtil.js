export function loginWithKakao() {
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO_JS_KEY;
  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  console.log(window.Kakao.isInitialized());

  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  window.Kakao.Auth.authorize({
    redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
  });
}
export function checkUser (){
  return localStorage.getItem("access_token") !== null
}