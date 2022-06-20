import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import logout from "../image/무제-1.png";

function Header() {
  return (
    <div>
      <LogoutImg src={logout} alt="" />
      <Logo>
        <LogoImg src={carrot} alt="" />
      </Logo>
      <Line />
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
  margin-left: 20px;
`;

const LogoutImg = styled.img`
  width: 35px;
  margin-top: 30px;
  float: right;
  margin-right: 50px;
`;

const Line = styled.hr`
  background-color: #ee8548;
  height: 1px;
  margin-left: 50px;
  margin-right: 50px;
  border: none;
  margin-top: 70px;
`;
export default Header;
