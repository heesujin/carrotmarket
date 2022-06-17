import styled from "styled-components";
import carrot from "../image/당근마켓.png";

function Detail() {
  return (
    <div>
      <Logo>
        <LogoImg src={carrot} alt="" />
      </Logo>
      <Line />
      <Contents>
        <Profile>
          <Name>
            작성자 &nbsp;<Time>00:00:00 00:00</Time>
          </Name>
          <Btns>
            <Btn>수정</Btn>
            <Btn>삭제</Btn>
          </Btns>
        </Profile>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </Contents>
      <Plus>
        <Add>+</Add>
      </Plus>
    </div>
  );
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 60px;
  margin-top: 50px;
`;

const Line = styled.hr`
  background-color: #ee8548;
  height: 1px;
  margin-left: 50px;
  margin-right: 50px;
  border: none;
  margin-top: 70px;
`;

const Contents = styled.div`
  border: 1px solid white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 700px;
  border-radius: 15px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  color: white;
  margin-left: 20px;
`;

const Time = styled.span`
  color: grey;
  font-size: 17px;
`;

const Btns = styled.div`
  margin-top: 20px;
  margin-right: 30px;
`;

const Btn = styled.button`
  border: none;
  background-color: #ee8548;
  height: 30px;
  margin-left: 10px;
  padding: 0px 10px;
  border-radius: 5px;
`;

const Plus = styled.div`
  background-color: #ee8548;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50px;
`;

const Add = styled.p`
  color: white;
  font-size: 50px;
  margin-top: -2px;
`;

export default Detail;
