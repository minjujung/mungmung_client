import React from "react";
import styled from "styled-components";
import { ThemeBtnColor } from "../common_css/style";
import { useDispatch, useSelector } from "react-redux";

const HospitalIntro = () => {
  const hospital = useSelector((state) => state.hospital.hospital);
  const { hospitalName, hospitalContent, subjectList } = hospital;
  return (
    <>
      <HostpitalName>{hospitalName}</HostpitalName>
      <IntroContent>{hospitalContent}</IntroContent>
      <HospitalSubjectTitle>진찰 가능 항목</HospitalSubjectTitle>
      <HospitalSubject>
        {subjectList?.map(({ subjectName }, index) => {
          if (subjectList.length === index + 1) {
            return subjectName;
          } else {
            return subjectName + ", ";
          }
        })}
      </HospitalSubject>
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
