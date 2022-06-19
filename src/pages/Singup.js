import React from "react";
import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";

function SingUp() {
  const navigate = useNavigate();

  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onSubmit = useCallback(async (e) => {
    let data = {
      userId: id,
      password,
      email,
      confirmPassword: passwordConfirm,
    };
    //console.log(data);
    e.preventDefault();
    try {
      await axios
        .post("http://13.124.188.218/user/signup", data)
        .then((res) => {
          console.log("response:", res);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  // 이름
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length < 10) {
      setNameMessage("3글자 이상 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("알맞게 작성되었습니다 :)");
      setIsName(true);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식을 다시 한번 확인해 주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("알맞게 작성되었습니다 :)");
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^[ㄱ-ㅎ가-힣0-9a-zA-Z@$!%#?&]{3,10}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("3자 이상 10자 미만으로 작성해 주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("알맞게 작성되었습니다 :)");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호를 다시한번 확인해 주세요.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <form onSubmit={onSubmit}>
          <Title>USER ID</Title>
          <IdPut text="ID" type="text" typeName="id" onChange={onChangeId} />
          <Pone>
            {id.length > 0 && (
              <span className={`message ${isName ? "success" : "error"}`}>
                {nameMessage}
              </span>
            )}
          </Pone>
          <Title>USER EMAIL</Title>
          <IdPut
            text="이메일"
            type="email"
            typeName="email"
            onChange={onChangeEmail}
          />
          <Pone>
            {email.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
          </Pone>
          <Title>PASSWORD</Title>
          <IdPut
            onChange={onChangePassword}
            passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
            title="비밀번호"
            typeTitle="password"
            type="password"
          />
          <Pone>
            {password.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {passwordMessage}
              </span>
            )}
          </Pone>
          <Title>PASSWORD CHECK</Title>
          <IdPut
            onChange={onChangePasswordConfirm}
            passwordText=" "
            title="비밀번호 확인"
            typeTitle="passwordConfirm"
            type="password"
          />
          <Pone>
            {passwordConfirm.length > 0 && (
              <span
                className={`message ${isPasswordConfirm ? "success" : "error"}`}
              >
                {passwordConfirmMessage}
              </span>
            )}
          </Pone>
        </form>
      </Comments>
      <SignUpBtn
        type="submit"
        disabled={
          !(
            isName &&
            isEmail &&
            isPassword &&
            isPasswordConfirm &&
            id &&
            email &&
            password &&
            passwordConfirm
          )
        }
        onClick={onSubmit}
      >
        회원가입
      </SignUpBtn>

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
  color: ${(props) => (props.disabled ? "black" : "white")};
  background-color: ${(props) => (props.disabled ? "#f8cbac" : "#ee8548")};
  border: none;
  padding: 18px;
  width: 500px;
  margin-left: -150px;
  margin-top: 50px;
  border-radius: 10px;
  font-size: large;
  &:hover {
    background-color: #c64d07;
    cursor: pointer;
  }
`;

const Log = styled.p`
  margin-top: 30px;
  color: white;
  margin-left: -45px;
`;

const LoginBtn = styled.span`
  color: #ee8548;
  &:hover {
    color: #c64d07;
    cursor: pointer;
  }
`;

export default SingUp;
