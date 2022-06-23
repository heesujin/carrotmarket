# 항해99 클론코딩 1조 - 당근마켓

<img src="https://user-images.githubusercontent.com/105143449/175262910-b75e9b52-e57b-4fa1-a687-7b4a068e384d.png" width="500px">

 
 ## 🍠🍠 프로젝트 소개 
 <p> 클론 코딩으로 당근 마켓을 선정해 보았습니다. </p>
 <p> </p>
 <p> </p>
 <p> </p>

 ## 팀원들 소개 😁😁
------------------

  - FE : 이현석, 노희수
  - BE : 강유신, 이진희, 최봉규

    BE 깃허브 주소
    https://github.com/souliat
</br>


 ## 시연 영상입니다! 링크로 들어가시면 확인 가능합니다!
[https://youtu.be/MD0YCfuaAkQ](https://youtu.be/0uQjn9fsS9Y)


 ## 🏼‍💻 개발기간 및 팀원소개
 ### 기간: 2022.06.17 ~ 2022.06.23   
 <p> </p>
 <p> </p>
 <p> </p>


### API 설계서
[https://www.notion.so/8-Clone-Coding-e23b83af71d744b492a8771ee301d9cd](https://www.notion.so/294d55d5dc8f4fb5980e0eedeefbe43d?v=61c4ffb91ea54bc79fcfe67f3923527a)


## 사용 기술 📙📙
------------------
 - FE : React
 - BE : Spring

 <p> </p>
 <p> </p>
 <p> </p>

## 와이어 그램 📋📋
------------------

![와이어그램-1](https://user-images.githubusercontent.com/105143449/175266986-048c149c-4d01-49d3-81fd-d80184176f82.png)

![와이어그램-2](https://user-images.githubusercontent.com/105143449/175267000-a9672592-1137-434f-bac9-583dc07512a5.png)

![와이어그램-3](https://user-images.githubusercontent.com/105143449/175267052-cddd4ee2-8b18-4259-8737-ddc76198846a.png)

![와이어그램-4](https://user-images.githubusercontent.com/105143449/175267105-9ac0e5c4-d333-42ec-b8a1-9a29ecdfc035.png)

![와이어그램-5](https://user-images.githubusercontent.com/105143449/175267151-8310bfde-cd14-44b0-b7db-d959b8a29a9e.png)

![와이어그램-6](https://user-images.githubusercontent.com/105143449/175267183-2e0b44bd-fe79-40c9-9949-47b6ca35153f.png)

![와이어그램-7](https://user-images.githubusercontent.com/105143449/175267217-2a4c4f44-b111-4201-99a0-e80258db9985.png)

## 🧾Trouble & Trouble Shooting

 <p> </p>
 <p> </p>
 <p> </p>

1. (FE) 이미지 : 처음 useRef를 이용해서 여러장을 불러오려고 했었는데, JSON파일로 옮기면 빈배열로 옮겨지는 것을 확인 후 formData를 이용
 
해서 변형하여 넣으려고 노력했으나 실력이 부족하여 FireBase의 Stoage에 이미지를 넣어서 넘겨주기로 결정!

2. (FE) 이미지 슬라이드 : React Slick을 이용하여 여러 이미지를 옆으로 넘길 수 있도록 기능을 수행할 수 있게 만들려 했지만, 기능 구현 실패.

3. (FE) 배포 : AWS에서 S3를 이용해서 배포하려 했으나 버켓을 새로 생성하고 권한설정 중에 버킷 정책에서 Resource field is not valid.

You must enter a valid ARN. 이라는 문구가 뜨면서 생성이 되지 않아 배포에 실패.
    
4. (FE <-> BE) 좋아요 기능 : 백엔드에서 미리 만들어준 API 명세서와 달리 로그인한 유저의 ID를 이용해서 axios로 DB에 저장하고 저장한 값 길이

만큼 카운트를 새어 값이 증가 및 감소할 수 있게 기능을 구현하려 했으나 아이디별 한번만 값을 넣고 카운트가 증가하는 것까지 기능을 수행했으나,

값을 삭제하는 부분에서 기능을 구현해 내지 못하여 미완.
                             
5. (FE) 로그인 벨리데이션 : 구글링을 통해 벨리데이션을 넣는 과정 중에 정규 표현식을 이해하지 못하여 문제가 있었지만, 정규 표현식에서 사용하는

메소드 중 test를 이용하여 안되던 기능을 구현함.
                           
6. (FE <-> BE) 회원가입 : 협업하는 중에 respose값과 request값이 달라 400에러를 해결하기 위해 맞춰가는 시간을 많이 잡았으며, 400에러 메세지가

뜨는 경우를 하나하나 Client가 이해할 수 있게 구현하기 위해 노력하였습니다.
