import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import carrot from "../image/당근마켓.png";

function Login() {
  const navigate = useNavigate();

  //아이디, 비밀번호
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onSubmit = async (e) => {
    let data = {
      userId: id,
      password,
    };
    //console.log(data);

    try {
      await axios
        .post("http://13.124.188.218/users/login", data)
        .then((res) => {
          const accessToken = res.data.token;
          if (accessToken !== null) {
            localStorage.setItem("token", accessToken);
            localStorage.setItem("id", res.data.userId);
            console.log(res, "로그인");
            window.alert(res.data.message);
            window.location.replace("/main");
          }
        });
    } catch (err) {
      console.log(err);
      window.alert(err.response.data.errorMessage);
    }
  };

  // 아이디
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setIdMessage("3글자 이상, 10글자 미만으로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("알맞게 작성되었습니다 :)");
      setIsId(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^[ㄱ-ㅎ가-힣0-9a-zA-Z@$!%#?&]{3,10}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("3글자 이상, 10글자 미만으로 입력해주세요. ");
      setIsPassword(false);
    } else {
      setPasswordMessage("알맞게 작성되었습니다 :)");
      setIsPassword(true);
    }
  }, []);

  return (
    <All>
      <div>
        <img src={carrot} alt="" />
      </div>
      <Comments>
        <Title>USER ID</Title>
        <IdPut text="ID" type="text" typeName="id" onChange={onChangeId} />
        <Pone>
          {id.length > 0 && (
            <span className={`message ${isId ? "success" : "error"}`}>
              {idMessage}
            </span>
          )}
        </Pone>
        <Title>PASSWORD</Title>
        <IdPut
          onChange={onChangePassword}
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
      </Comments>

      <SignInBtn
        type="submit"
        disabled={!(isId && isPassword && id && password)}
        onClick={onSubmit}
      >
        로그인
      </SignInBtn>

      <Log>
        계정을 만드셔야 하나요?{"  "}
        <RegisterBtn
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </RegisterBtn>
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
  background-color: transparent;
`;

const Comments = styled.div`
  margin-top: 50px;
  color: white;
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
  font-size: large;
  font-family: Jalnan;
  color: white;
`;

const Pone = styled.p`
  color: grey;
  margin-left: -105px;
  /* margin-top: -0.1px; */
  font-size: 13px;
`;

const SignInBtn = styled.button`
  color: ${(props) => (props.disabled ? "black" : "white")};
  background-color: ${(props) => (props.disabled ? "#f8cbac" : "#ee8548")};
  border: none;
  padding: 18px;
  width: 500px;
  margin-left: -150px;
  margin-top: 50px;
  border-radius: 10px;
  font-size: large;
  font-family: Jalnan;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#f8cbac" : "#c64d07;")}
    cursor: pointer;
  }
`;

const Log = styled.p`
  margin-top: 30px;
  color: white;
  margin-left: -45px;
`;

const RegisterBtn = styled.span`
  color: #ee8548;
  &:hover {
    color: #c64d07;
    cursor: pointer;
  }
`;

export default Login;
