import React from "react";
import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SingUp() {
  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const pwCheck_ref = React.useRef(null);
  const email_ref = React.useRef(null);

  const callSignup = async () => {
    let data = {
      userId: id_ref.current.value,
      password: pw_ref.current.value,
      confirmPassword: pwCheck_ref.current.value,
      email: email_ref.current.value,
    };

    const emailRegex = /^[0-9a-zA-Z]+@+[0-9a-zA-Z]+.+[a-zA-Z]$/;
    const elseRegex = /^[ㄱ-ㅎ가-힣0-9a-zA-Z@$!%#?&]{3,10}$/;

    const emailValueCheck = emailRegex.test(data.userId);
    const passwordValueCheck = elseRegex.test(data.password);
    const IdValueCheck = elseRegex.test(data.userId);

    await axios
      .post("http://13.124.188.218/users/signup", data)
      .then((response) => {
        console.log(response.response);
      })

      /* if (response.status !== "400") {
          console.log(response, "회원가입");
          window.alert(response.data.errorMsg);
          //window.location.replace("/login");
        } else {
          window.alert(response.data.errorMsg);
        }
      }) */

      .catch((error) => {
        console.log(error, "에러");
        which (data.userId.length < 3 && !IdValueCheck) {
          window.alert("아이디를 제대로 작성했는지 확인해 주세요.");
        } case (emailValueCheck) {
          window.alert("이메일을 제대로 작성했는지 확인해 주세요.");
        } case (!passwordValueCheck) {
          window.alert("비밀번호를 제대로 작성했는지 확인해 주세요.");
        } case (data.password !== data.confirmPassword) {
          window.alert("비밀번호를 확인해 주세요.");
        } case {
          window.alert("남은 정보도 꼭! 다 채워주세요~");
        }
      });
  };

  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <Title>USER ID</Title>
        <IdPut
          autoComplete="username"
          name="username"
          placeholder="아이디"
          ref={id_ref}
        />
        <Pone>ID를 작성해 주세요(3자 이상)</Pone>
        <Title>USER EMAIL</Title>
        <IdPut
          autoComplete="email"
          name="email"
          placeholder="이메일"
          ref={email_ref}
        />
        <Pone>확인용 본인 이메일을 작성해주세요</Pone>
        <Title>PASSWORD</Title>
        <IdPut
          autoComplete="current-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          ref={pw_ref}
        />
        <Pone>숫자, 영어, 특수문자를 모두 포함해 6자 이상 작성해주세요</Pone>
        <Title>PASSWORD CHECK</Title>
        <IdPut
          autoComplete="new-password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          type="password"
          ref={pwCheck_ref}
        />
        <Pone>비밀번호가 일치하지 않습니다</Pone>
      </Comments>
      <SignUpBtn onClick={callSignup}>회원가입</SignUpBtn>

      <Log>
        다시 생각해보니 계정이 있나요?
        <LoginBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </LoginBtn>
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
  color: white;
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
