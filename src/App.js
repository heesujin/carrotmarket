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
  max-width: 500rem;
  max-height: 500rem;
  top: 0;
  left: 0;
  bottom: 0;
  /* min-height: 500rem; */
  width: 100%;
  height: auto;
  background-color: #212121;
  /* background-size: 200% 200%; */
  font-family: "Jalnan";
  background-size: contain;
`;

export default App;
