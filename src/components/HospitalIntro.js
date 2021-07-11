import React from "react";
import styled from "styled-components";

const HospitalIntro = () => {
  return (
    <>
      <HostpitalName>아프지멍 병원</HostpitalName>
      <IntroContent>
        안녕하세요.안녕하세요.안녕하세요.안녕하세요. 안녕하세요. 안녕하세요.
        안녕하세요.안녕하세요.안녕하세요.안녕하세요.
        안녕하세요.안녕하세요.안녕하세요.안녕하세요.
        안녕하세요.안녕하세요.안녕하세요.안녕하세요. 안녕하세요.안녕하세요.
        안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
      </IntroContent>
      <HospitalSubjectTitle>진찰 가능 항목</HospitalSubjectTitle>
      <HospitalSubject>슬개골, 중성화, 스케일링 등등</HospitalSubject>
    </>
  );
};

const HostpitalName = styled.h2``;
const IntroContent = styled.pre`
  white-space: pre-wrap;
  word-break: break-all;
`;
const HospitalSubjectTitle = styled.h3``;
const HospitalSubject = styled.div``;
export default HospitalIntro;
