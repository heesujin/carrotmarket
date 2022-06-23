import React, { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

const Like = ({ postID }) => {
  const [isloaded, setIsloaded] = useState(false);
  const [like_count, setLike_count] = useState(0);
  const [like, setLike] = useState();
  useEffect(() => {
    async function likeLoad() {
      await axios
        .get(`http://13.124.188.218/like/${postID}`)
        .then((response) => {
          console.log(response);
          setLike(response.data);
        });
      setIsloaded(true);
    }
    likeLoad();
  }, []);

  // 좋아요 추가
  const addLike = async () => {
    await axios.post(`http://13.124.188.218/like/${postID}`);
    setLike_count(like_count + 1);
    setLike(false);
  };
  // 좋아요 취소
  const deleteLike = async () => {
    await axios.post(`http://13.124.188.218/like/${postID}`);
    setLike_count(like_count - 1);
    setLike(true);
  };

  return (
    <>
      {isloaded && (
        <>
          {like ? (
            <Heart onClick={addLike}>
              ❤<span style={{ fontSize: "22px" }}>{like_count}</span>
            </Heart>
          ) : (
            <Heart onClick={deleteLike}>
              ❤<span style={{ fontSize: "22px" }}>{like_count}</span>
            </Heart>
          )}
        </>
      )}
    </>
  );
};

// const LikeCnt = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

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

export default Like;
