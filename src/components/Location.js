import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;
const Location = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("myMap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(
      "제주특별자치도 제주시 첨단로 242",
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">아프지멍 동물병원</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );
  }, []);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100%",
          height: "300px",
        }}
      ></div>
      <LocationInfo>
        <LocationAddr>주소 : 제주특별자치도 제주시 첨단로 242</LocationAddr>
        <LocationTel>전화번호 : 02 - 000 - 0000</LocationTel>
      </LocationInfo>
    </>
  );
};

const LocationInfo = styled.div`
  margin-top: 20px;
`;
const LocationAddr = styled.div`
  margin-bottom: 10px;
`;
const LocationTel = styled.div``;

export default Location;
