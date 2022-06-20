import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import Header from "./Header";
import PlusAdd from "./PlusAdd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5001/post").then((res) => {
      console.log(res.data, "데이터 불러오기");
      setPostList(res.data);
    });
  }, []);
  return (
    <div>
      <Header />
      <AllCards>
        <Cards>
          {postList.map((post, index) => {
            return (
              <Card
                key={index}
                onClick={() => {
                  navigate(`/post/${post.id}`);
                }}
              >
                <CardImg>
                  <Img
                    src={post.imageURL[0]}
                    alt={`${post.imageURL[0]}-${0}`}
                  />
                </CardImg>
                <Content>
                  <Th>
                    <Title>{post.title}</Title>
                    <Heart>
                      ❤<span style={{ fontSize: "22px" }}>0</span>
                    </Heart>
                  </Th>

                  <Price>₩ 100,000</Price>
                  {/* 🤍 */}
                </Content>
              </Card>
            );
          })}
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>

              <Price>₩ 100,000</Price>
              {/* 🤍 */}
            </Content>
          </Card>
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>
              <Price>₩ 100,000</Price>
            </Content>
          </Card>
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>
              <Price>₩ 100,000</Price>
            </Content>
          </Card>
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>
              <Price>₩ 100,000</Price>
            </Content>
          </Card>
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>
              <Price>₩ 100,000</Price>
            </Content>
          </Card>
          <Card>
            <CardImg>
              <Img
                src="https://contents.lotteon.com/itemimage/_v165153/LO/16/53/47/92/32/_1/65/34/79/23/3/LO1653479232_1653479233_1.jpg/dims/optimize/dims/resizemc/400x400"
                alt=""
              />
            </CardImg>
            <Content>
              <Th>
                <Title>title</Title>
                <Heart>
                  ❤<span style={{ fontSize: "22px" }}>0</span>
                </Heart>
              </Th>
              <Price>₩ 100,000</Price>
            </Content>
          </Card>
        </Cards>
      </AllCards>
      <PlusAdd />
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

const AllCards = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  position: absolute;
  margin-top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin-left: 30px; */
  width: 1500px;
  height: 900px;
  overflow: auto;

  /* height: 600px; */
  @media (max-width: 1024px) {
    //769px~1024px
    width: 768px;
  }
  @media (max-width: 768px) {
    //~768px
    width: 100%;
  }
  /* background-color: yellow; */

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const CardImg = styled.div`
  width: 240px;
  height: 260px;
  margin: 20px auto;
`;

const Card = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 280px;
  height: 405px;
  margin: 30px;
  display: inline-block;
  float: left;
`;

const Img = styled.img`
  margin: auto;
  width: 240px;
  height: 260px;
  border-radius: 5px;
`;

const Cards = styled.div`
  border: none;
  width: 1400px;
  height: 420px;
`;

const Content = styled.div`
  margin-left: 30px;
`;

const Title = styled.h2`
  color: white;
`;

const Price = styled.h3`
  color: white;
`;

const Heart = styled.p`
  color: white;
  margin-left: 130px;
  margin-top: 14px;
  font-size: 30px;
`;

const Th = styled.div`
  display: flex;
  margin-top: -20px;
  margin-bottom: -27px;
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
  margin-top: 14px;
`;

export default Main;
