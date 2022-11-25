import GoalBoxMain from "./component/GoalBox/GoalBoxMain";
import GlobalStyle from "./global.styles";
import { Fragment } from "react";
import Login from "./component/Login/Login";
import { Route, Routes } from "react-router-dom";
import RedirectKakao from "./component/Login/RedirectKakao";

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<GoalBoxMain/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/redirectKakao" element={<RedirectKakao />} />
      </Routes>

    </Fragment>
  );
}

export default App;
