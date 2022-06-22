import styled from "styled-components";
import carrot from "../image/당근마켓.png";
import React from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Write() {
  const contentRef = React.useRef(null);
  const titleRef = React.useRef(null);
<<<<<<< HEAD
=======
  const imgRef = React.useRef(null);
  const priceRef = React.useRef(null);
>>>>>>> 39650171336c834027dc8f072558ff201e62953a

  const [postImages, setPostImages] = React.useState([]);
  const [showImages, setShowImages] = React.useState([]);

  //input 숫자 천단위 콤마
  const [num, setNum] = React.useState();

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    //setPostImages(Array.from(imageLists));
    console.log(imageLists);
    let imageUrlLists = [...showImages];
    console.log(imageUrlLists);

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const uploadFB = async () => {
    console.log(postImages);
    for (let i = 0; i < postImages.length; i++) {
      let image = await uploadBytes(
        ref(storage, `images/${postImages[i].name}`),
        postImages[i]
      );
      console.log(image);
      const file_url = await getDownloadURL(image);
    }
  };

  const addPost = () => {
    console.log(postImages);

    const data = {
      userId: localStorage.getItem("id"),
      content: contentRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      imageURL: [
        "https://cdn.pixabay.com/photo/2021/10/19/11/35/yoga-6723315_960_720.jpg",
      ],
    };

    console.log(data);
    axios
      .post(`http://13.124.188.218/post`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response, "포스트 추가");
        window.location.replace("/main");
      })
      .catch((error) => console.log(error, "포스트 추가 에러"));
  };

  return (
    <div>
      <Header />
      <Contents>
        <TBox>
          <Title>중고 물품 올리기</Title>
        </TBox>

        <AddImg>
          {showImages.map((image, id) => (
            <SelectImg key={id}>
              <div>
                <Img src={image} alt={`${image}-${id}`} />
              </div>

              <DeleteBtn onClick={() => handleDeleteImage(id)}>X</DeleteBtn>
            </SelectImg>
          ))}
        </AddImg>
        <AddBtn>
          <label
            htmlFor="input-file"
            //   className={classes.addButton}
            onChange={handleAddImages}
          >
            <input
              type="file"
              id="input-file"
              style={{ display: "none" }}
              multiple

              // className={classes.addButton}
            />
            {/* <Plus fill="#646F7C" /> */}
            <Add>사진추가</Add>
          </label>
        </AddBtn>
        <IBox>
          <TName>TITLE</TName>
          <Put type="text" ref={titleRef} />
          <TName>PRICE</TName>
          <Put
            ref={priceRef}
            type="text"
            value={num || " "}
            onChange={(e) => setNum(inputPriceFormat(e.target.value))}
          />
          <TName>Explanation</TName>
          <Text ref={contentRef} />
          <Btn>
            <PlusBtn onClick={uploadFB}>올리기</PlusBtn>
          </Btn>
        </IBox>
      </Contents>
    </div>
  );
}

const Text = styled.textarea`
  width: 500px;
  height: 100px;
  resize: none;
  background-color: #212121;
  border: 1.5px solid white;
  border-radius: 8px;
  color: white;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
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

const TBox = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  margin-top: 30px;
`;

const AddImg = styled.div`
  /* background-color: yellow; */
  width: 800px;
  height: 270px;
  display: block;
  overflow: auto;
  margin: auto;
  margin-top: 30px;

  justify-content: center;
  border: 1px solid #ee8548;
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 8px;
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
  width: 200px;
  height: 200px;
  margin-top: 15px;
  margin-left: 12px;
  border-radius: 10px;
`;

const SelectImg = styled.div`
  display: flex;
  width: 230px;
  height: 230px;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 8px;
  float: left;
  margin-left: 23px;
  /* background-color: white; */
`;

const DeleteBtn = styled.button`
  height: 200px;
  height: 25px;
`;

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
  margin-top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 950px;
  border-radius: 15px;
  display: block;
  /* text-align: center; */
  /* background-color: yellow; */
`;

const AddBtn = styled.div`
  margin: auto;
  width: 100px;
  margin-top: 20px;
`;

const Add = styled.span`
  border: 1px solid #ee8548;
  color: white;
  background-color: #ee8548;
  padding: 5px 15px;
  border-radius: 10px;
`;

const IBox = styled.div`
  width: 900px;
  margin: auto;
`;

const TName = styled.h2`
  color: white;
`;

const Put = styled.input`
  background-color: #212121;
  border: 1.5px solid white;
  border-radius: 8px;
  width: 400px;
  height: 30px;
  color: white;
`;

const Btn = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const PlusBtn = styled.span`
  border: 1px solid #ee8548;
  color: white;
  background-color: #ee8548;
  padding: 10px 150px;
  border-radius: 15px;
`;

export default Write;
