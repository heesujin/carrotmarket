import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

function SliceImg() {
  const [postList, setPostList] = useState([]);
  const setting = {
    arrow: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios.get("http://13.124.188.218/post").then((res) => {
      console.log(res.data, "데이터 불러오기");
      setPostList(res.data);
    });
  }, []);

  return (
    <>
      {postList.map((item, idx) => {
        <Imgs>
          <Slider {...setting}>
            <div>
              {postList.imageURL.map((v, i) => (
                <Img key={i} src={v} alt="" />
              ))}
            </div>
          </Slider>
          <Price>₩ {item.price}</Price>
        </Imgs>;
      })}
    </>
  );
}

const Imgs = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 50px;
  margin-top: 10px;
  border: 2px white solid;
  border-radius: 10px;
  display: block;
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;
const Price = styled.h1`
  color: white;
  text-align: center;
`;

export default SliceImg;
