import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { history } from "../redux/configureStore";
import { getCookie } from "../shared/cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Review from "../components/Review";
import Location from "../components/Location";
import HospitalIntro from "../components/HospitalIntro";
import Footer from "../components/Footer";
import { ThemeBtnColor } from "../common_css/style";
SwiperCore.use([Navigation, Pagination]);

const HospitalDetail = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  const [tabIndex, setTabIndex] = React.useState(1);
  const [currentInfo, setCurrentInfo] = React.useState("intro");
  const [tabContent, setTabContent] = React.useState([
    {
      id: 1,
      title: "소개",
      type: "intro",
    },
    {
      id: 2,
      title: "리뷰",
      type: "review",
    },
    ,
    {
      id: 3,
      title: "위치",
      type: "location",
    },
  ]);

  const hospitalId = props.match.params.id;

  const handleCurrentInfo = (value) => {
    setCurrentInfo(value);
  };

  const goToReservation = (id) => {
    if (!getCookie()) {
      window.alert("로그인이 필요한 서비스 입니다!");
      history.push("/login");
      return;
    }
    history.push({
      pathname: "/reservation",
      state: { id: hospitalId },
    });
  };

  const imgBoxCss = { width: "100%", height: "250px" };
  const imgCss = { width: "100%", height: "100%" };

  const imgList = [
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLL6HvWwGwEg6mfw8LgN6DjDH14iQtJx9SGA&usqp=CAU",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWytcbbmd2EXBVNxU4xtRvO7xK-2OieG9cg&usqp=CAU",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-vYUHMm9_GYUCBDyLOinP0CZDFOhES478w&usqp=CAU",
    },
  ];
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imgList.map(({ img_url }, index) => {
          return (
            <SwiperSlide key={index}>
              <div style={imgBoxCss}>
                <img
                  style={imgCss}
                  src={img_url}
                  alt="병원 슬라이드 이미지"
                ></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <TabBox>
        {tabContent.map(({ title, type, id }) => {
          return (
            <Tab
              key={id}
              tabIndex={tabIndex}
              onClick={() => {
                handleCurrentInfo(type);
                setTabIndex(id);
              }}
            >
              {title}
            </Tab>
          );
        })}
      </TabBox>
      <CurrentInfoContainer>
        {(function () {
          switch (currentInfo) {
            case "intro": {
              return (
                <>
                  <HospitalIntro></HospitalIntro>
                  <Button onClick={() => goToReservation(hospitalId)}>
                    예약하기
                  </Button>
                </>
              );
            }
            case "review": {
              return (
                <>
                  <Review></Review>
                </>
              );
            }
            case "location": {
              return <Location></Location>;
            }
          }
        })()}
      </CurrentInfoContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

const TabBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabAfterCss = css`
  content: "";
  display: block;
  width: 100%;
  border-bottom: 3px solid #a4ffb0;
`;

const Tab = styled.div`
  text-align: center;
  width: 33.3333%;
  height: 50px;
  line-height: 50px;
  ${(props) =>
    props.tabIndex &&
    css`
      &:nth-child(${props.tabIndex}):after {
        ${TabAfterCss}
      }
    `}
`;

const CurrentInfoContainer = styled.div`
  padding: 15px;
`;

const Button = styled.div`
  width: 150px;
  position: absolute;
  bottom: 80px;
  right: 20px;
  ${ThemeBtnColor}
`;

export default HospitalDetail;
