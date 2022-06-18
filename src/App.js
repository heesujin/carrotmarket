import "./App.css";
//페이지 가져오기
import styled from "styled-components";
import Router from "./Router";

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #212121;
  background-size: cover;
`;

export default App;
