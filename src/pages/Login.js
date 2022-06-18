import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import "../App.css";

function Login() {
  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <Title>EMAIL</Title>
        <IdPut type="text" />
        {/* <Pone>email 형식으로 작성해주세요</Pone> */}
        <Title>PASSWORD</Title>
        <IdPut type="text" />
        {/* <Pone></Pone> */}
      </Comments>
      <SignUpBtn>로그인</SignUpBtn>

      {/* <Log>
        전에 만든 계정이 생각나셨나요? <LoginBtn>로그인</LoginBtn>
      </Log> */}
    </All>
  );
}

const All = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 60px;
  background-color: transparent;
`;

const Comments = styled.div`
  margin-top: 50px;
`;

const Title = styled.h3`
  color: white;
  margin-left: -110px;
`;

const IdPut = styled.input`
  background-color: #212121;
  border: 1.5px solid white;
  border-radius: 8px;
  width: 400px;
  height: 30px;
  margin-left: -115px;
`;

// const Pone = styled.p`
//   color: grey;
//   margin-left: -105px;
//   /* margin-top: -0.1px; */
//   font-size: 13px;
// `;

const SignUpBtn = styled.button`
  color: white;
  background-color: #ee8548;
  border: none;
  padding: 18px;
  width: 500px;
  margin-left: -150px;
  margin-top: 50px;
  border-radius: 10px;
  font-size: large;
  font-family: "Jalnan";
`;

export default Login;
