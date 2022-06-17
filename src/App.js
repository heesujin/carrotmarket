import "./App.css";
import Start from "./page/Start";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Start />
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
