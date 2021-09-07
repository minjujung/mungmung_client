# 아프지멍 MUNG HOSPITAL 🐶

반려견을 위한 동물병원을 한눈에 비교하고 예약할 수 있는 사이트 입니다!

![첫페이지](https://user-images.githubusercontent.com/75834421/125802486-16912a54-418c-4d69-9f24-4504096a9644.png)

[📺 아프지멍 시연 영상 보러가기](https://www.youtube.com/watch?v=Sd98UjrPmB4)

<br/>

## 목차

### [1. 프로젝트 소개 ](#프로젝트-소개)

### [2. 기능 정보 ](#기능-정보)

### [3. 어려웠던 점 ](#어려웠던-점)

### [4. 프로젝트를 끝내며... ](#프로젝트를-끝내며)

---

<br/>

## 프로젝트 소개

### `React & Spring` 반려견 병원 예약 플랫폼!! 📆

자신의 반려견이 아플 때 맞는 병원을 찾아서 예약할 수 있도록 도와주는 서비스 입니다!<br/>
메인 페이지에서 **동물 병원들을 한눈에** 볼 수 있고 **각 병원들의 평점**을 볼 수 있어요!<br/>
병원별 상세페이지에서 **소개와 위치, 리뷰**를 볼 수 있습니다!<br/>
**예약내역을 마이페이지**에서 볼 수 있고 **프로필 사진**도 변경 가능합니다!

<br/>

### 기간 / 인원 🏃‍♀️🏃‍♂️

```
<2021.07.09 ~ 2021.07.15>(7일)
Front-end 3명, Beck-end 2명
```

<br/>

### Front-end가 사용한 기술 스택 📚

- View : **`React with JavaScript`, `React-Router`, `material-UI`, `Styled-components`**
- State Management : **`Redux`, `Redux-Thunk`, `Immer`, `Redux-actions`**
- Build Tool : **`Create React App`**
- Infrastructure **`AWS S3`, `Route 53`**
- Other Tools : **`Git`, `Github`, `notion`,`kakao-oven`**

<br/>

## 기능 정보

- [x] **로그인 & 회원가입** 🔓
- [x] **병원별 상세페이지 => 소개, 위치, 리뷰** 💻
- [x] **댓글 추가, 삭제, 수정** 📝
- [x] **예약하기** 🩺💉
- [x] **마이페이지 프로필 사진 변경** 📸
- [x] **키워드별 병원 검색** 🔎

<br />

## 어려웠던 점

### 로그인 유지 및 로그아웃

1. JWT 개념을 처음 접했고, 서버에서 보내준 토큰을 cookie에 저장

2. 요청마다 header에 토큰을 포함시켜서 보냄

3. 새로고침시 페이지 마다 토큰이 생성됨: **토큰을 저장하는 쿠키의 `path`를 지정해줌으로서 해결!**

4. 로그아웃이 안됨: **지금 사이트가 열려있는 `domain` 값 받아와서 쿠키를 생성 / 삭제시 추가**

   ```jsx
   const setCookie = (name, value, exp = 1, path = "/") => {
     let domain = window.location.hostname;
     let date = new Date();
     date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
     document.cookie = `${name} = ${value}; expires  =${date.toUTCString()}; domain=.${domain}; path = ${path}`;
   };

   //쿠키 삭제시 도메인이랑 path 넣어주기!
   const deleteCookie = (name) => {
     let date = new Date("2020-01-01").toUTCString();
     let domain = window.location.hostname;
     document.cookie =
       name + "=; expires=" + date + ";domain = " + domain + ";path = /";
   };
   ```

<br/>

### 선택한 Tag 만 css 다르게 적용 & 해당하는 data 불러오기

1. Tag 중 클릭 한 것만 배경색과 글자색을 변경해줘야 했음: 어떤 걸 기준으로 선택된 것과 안된 것을 구분할 수 있을 지 고민.

2. tag에 `onClick` 이벤트 추가한 뒤 선택한 tag의 **`index`** 값을 받아와서 `useState`를 이용해 상태값 저장, `api 요청`으로 `get method`를 통해 data 받아오는 코드도 추가

3. map을 통해 tag를 화면에 그려줄 때, 선택된 index와 동일한 index의 Tag(styled-components)에는 `color` props를 true로 지정

   ```jsx
       const [data, setData] = useState("");
       const [btnBg, setBtnBg] = useState("");
       const keyword_list = [
         "슬개골",
         "심장",
         "중성화",
         "예방접종",
         "내과",
         "외과",
         "치과",
         "24시",
         "호흡기",
       ];

       useEffect(() => {
         dispatch(userActions.loginCheckDB());
       }, []);

       const changeColor = (e, idx) => {
         e.preventDefault();
         setBtnBg(idx);
       };

       const search = (e, idx) => {
         changeColor(e, idx);
         const keyword = e.target.textContent;
         const encode = encodeURIComponent(keyword);
         instance.get(`/hospitals/search?subject=${encode}`).then((response) => {
           setData(response.data);
         });
       };

       return (
         <div>
           <Title>
             {" "}
             <Logo src={searchLogo} />
             {!user_info || Object.keys(user_info).length === 0
               ? "땡땡이"
               : user_info.dogName}
             (이)는 <br />
             어디가 아픈가요?
           </Title>
           <SearchField>
             <Keywords>
               {keyword_list.map((keyword, idx) => (
                 <Keyword
                   key={keyword}
                   onClick={(e) => search(e, idx)}
                   color={btnBg === idx ? true : false}
                 >
                   {keyword}
                 </Keyword>
               ))}
             </Keywords>
           </SearchField>
           {data ? (
             <SearchResult data={data} />
           ) : (
             <p style={{ textAlign: "center" }}> 키워드를 눌려보세요!</p>
           )}
           <Footer />
         </div>
       );
   };
   ```

<br/>

## 프로젝트를 끝내며...

리액트 심화 강의를 듣고 처음으로 백엔드 분들이랑 협업을 한 거였는데! 일단 함께 해서 정말 든든
했습니다. 그리고 늘 firebase를 이용하다가 axios로 직접 요청을 보내고 받은 응닫을 화면에 뿌려
줄 수 있는 것 자체가 즐거웠어요! 응답이 잘 들어올 때마다 신기했습니다! >< 또 구현해본 기능
하나 하나가 배포할 때마다 오류가 생겼는데 (특히.. 로그인..😥) 같이 해결해 나가면서도 많이 배운것 같습니다! 심화나 기본 과정에서 배운 걸 써먹을 수 있어서 너무 좋았구요! 백엔드와의 협업에 대해서 감을 잡은것 같아요 😂
