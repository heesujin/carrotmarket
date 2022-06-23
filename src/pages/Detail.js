import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import logout from "../image/무제-1.png";
import "../App.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Detail() {
  const params = useParams();
  //const [isloaded, setIsloaded] = useState(false);
  const postId = params.postId;
  const [userId, setUserId] = useState();
  const [likeStatus, setLikeStatus] = useState();
  const [likeCount, setLikeCount] = useState();

  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://13.124.188.218/post").then((res) => {
      //console.log(res.data, "데이터 불러오기");
      setPostList(res.data);
      setUserId(localStorage.getItem("id"));
      console.log(setLikeCount(res));
      setLikeCount(res.data.length);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://13.124.188.218/like/${postId}`)
      .then((res) =>
        res.userId === userId ? setLikeStatus(true) : setLikeStatus(false)
      );
  }, []);

  const likeClick = (e) => {
    if (userId && !likeStatus) {
      axios.post(`http://13.124.188.218/like/${postId}`, userId);
    } else {
      axios.delete(`http://13.124.188.218/like/${postId}`, userId);
    }
  };

  /* const deletePost = (id) => {
    axios
      .delete(`http://localhost:5001/write/${id}`) // 삭제
      .then((response) => {
        setPostList((current) => current.filter((v) => v.id !== id));
      });
  }; */

  return (
    <>
      <div>
        <Header />
        {postList.map((item, index) => {
          //console.log(item);
          return (
            <Contents key={index}>
              {item.postId === params.id ? (
                <>
                  <Profile>
                    <Name>
                      {item.userId} &nbsp;<Time>{item.CreateAt}</Time>
                    </Name>
                    {item.userId === localStorage.getItem("id") ? (
                      <Btns>
                        <Btn
                          onClick={() => {
                            navigate(`/modify/${item.id}`);
                          }}
                        >
                          수정
                        </Btn>

                        <Btn
                          onClick={() => {
                            axios
                              .delete(`http://13.124.188.218/post/${item.id}`, {
                                headers: {
                                  Authorization: `Bearer ${localStorage.getItem(
                                    "token"
                                  )}`,
                                },
                              }) // 삭제
                              .then((response) => {
                                console.log(response);
                                setPostList((current) =>
                                  current.filter((v) => v.id !== item.postId)
                                );
                                navigate("/main");
                              });
                          }}
                        >
                          삭제
                        </Btn>
                      </Btns>
                    ) : null}
                  </Profile>

                  <div>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <Used>
                    <LeftIn>
                      <Imgs>
                        {item.imageURL.map((v, i) => (
                          <Img key={i} src={v} alt="" />
                        ))}
                      </Imgs>

                      <div>
                        <Price>₩ {item.price}</Price>
                      </div>
                    </LeftIn>

                    <UsedComments>
                      <ItemName>
                        <Title>{item.title}</Title>
                      </ItemName>
                      <ItemExplan>
                        <Explanation>{item.content}</Explanation>
                      </ItemExplan>
                      <Heart>
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "22px" }}
                          onClick={likeClick}
                        />
                        <span>{likeCount}</span>
                      </Heart>
                    </UsedComments>
                  </Used>
                </>
              ) : null}
            </Contents>
          );
        })}

        {/* <Plus>
          <Add>+</Add>
        </Plus> */}
      </div>
      {/* )} */}
    </>
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

const Contents = styled.div`
  border: 1px solid white;
  position: absolute;
  margin-top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftIn = styled.div`
  display: block;
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
  color: white;
  font-family: "Jalnan";
  cursor: pointer;
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
  margin-top: 15px;
`;

const Used = styled.div`
  display: flex;
`;

const Imgs = styled.div`
  width: 510px;
  height: 500px;
  margin-left: 50px;
  margin-top: 10px;
  border: 2px white solid;
  border-radius: 10px;
  display: block;
  overflow-y: auto;
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

const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;

const UsedComments = styled.div`
  display: block;

  width: 700px;
  height: 500px;
  margin: auto;
`;

const ItemName = styled.div`
  margin: 20px;
  display: block;
  text-align: center;
  margin-top: 60px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const ItemExplan = styled.div`
  margin: auto;
  width: 600px;
  height: 280px;
  overflow: auto;

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

const Explanation = styled.p`
  margin-left: 20px;
  color: white;
`;

const Heart = styled.p`
  color: white;
  margin-left: 570px;
  margin-top: 50px;
  font-size: 30px;
`;

const LikeHeart = styled.p`
  color: red;
  margin-left: 570px;
  margin-top: 50px;
  font-size: 30px;
`;

const Price = styled.h1`
  color: white;
  text-align: center;
`;

export default Detail;
