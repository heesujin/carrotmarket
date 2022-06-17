import "./App.css";
//페이지 가져오기
<<<<<<< Updated upstream
=======
import Start from "./page/Start";
import Login from "./page/Login";
import SingUp from "./page/Singup";
import Main from "./page/Main";
import Detail from "./page/Detail";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import styled from "styled-components";
import Router from "./Router";

function App() {
  return (
    <Container>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <Router />
=======
      <Detail />
>>>>>>> Stashed changes
=======
      <Detail />
>>>>>>> Stashed changes
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #212121;
  background-size: cover;
`;

export default App;
