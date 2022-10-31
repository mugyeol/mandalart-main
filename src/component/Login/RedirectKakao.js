import { useNavigate } from "react-router-dom";

const RedirectKakao = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams.get("code");
  console.log("kako code : ", urlParams);

  const api_url = "http://129.154.220.20:55555/ma/kakao/login-app";

  fetch(api_url, {
    method: "post",
    body: urlParams,
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => {
      if (response.ok === true) {
        alert("토큰 성공~");
        return response.json();
      } else {
        alert("토큰 실패ㅜ_ㅜ");
        window.history.go(-1);
      }
    })
    .then((json) => {
      console.log("json : ", json);

      localStorage.setItem("access_token", json["access_token"]);
      localStorage.setItem("nickname", json.nickname);
      localStorage.setItem("message", json.message);
      navigate("/");
    }); //end fetch then

  return;
};
export default RedirectKakao;
