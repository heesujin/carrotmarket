import styled from "styled-components";
import carrot from "../image/당근마켓.png";

function SingUp() {
  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <Title>EMAIL</Title>
        <IdPut type="text" />
        <Pone>email 형식으로 작성해주세요</Pone>
        <Title>NICKNAME</Title>
        <IdPut type="text" />
        <Pone>2자 이상 작성해주세요</Pone>
        <Title>PASSWORD</Title>
        <IdPut type="text" />
        <Pone>숫자, 영어, 특수문자를 모두 포함해 6자 이상 작성해주세요</Pone>
        <Title>PWCHECK</Title>
        <IdPut type="text" />
        <Pone>비밀번호가 일치하지 않습니다</Pone>
      </Comments>
      <SignUpBtn>회원가입</SignUpBtn>

      <Log>
        다시 생각해보니 계정이 있나요? <LoginBtn>로그인</LoginBtn>
      </Log>
    </All>
  );
}

const All = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 60px;
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

const Pone = styled.p`
  color: grey;
  margin-left: -105px;
  /* margin-top: -0.1px; */
  font-size: 13px;
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

const Log = styled.p`
  margin-top: 30px;
  color: white;
  margin-left: -45px;
`;

const LoginBtn = styled.span`
  color: #ee8548;
`;

export default SingUp;
