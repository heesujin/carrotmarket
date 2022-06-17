import styled from "styled-components";
import carrot from "../image/당근마켓.png";

function Start() {
  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <Title>당신 근처의 당근마켓</Title>
        <Pone>우리동네 중고거래를 편리하게! </Pone>
        <Ptwo>가입하고 중고서비스를 이용하세요!</Ptwo>
      </Comments>
      <SignUpBtn>회원가입</SignUpBtn>

      <Login>
        이미 계정이 있나요? <LoginBtn>로그인</LoginBtn>
      </Login>
    </All>
  );
}

const All = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 50px;
`;

const Comments = styled.div`
  margin-top: 50px;
`;

const Title = styled.h3`
  color: white;
`;

const Pone = styled.p`
  color: white;
  margin-left: -20px;
`;
const Ptwo = styled.p`
  color: white;
  margin-left: -30px;
`;

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
`;

const Login = styled.p`
  margin-top: 30px;
  color: white;
`;

const LoginBtn = styled.span`
  color: #ee8548;
`;

export default Start;
