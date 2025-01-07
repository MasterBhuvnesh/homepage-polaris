import styled, { keyframes } from 'styled-components';

import LinesSvg from '@/assets/svg-lines.svg';

export const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  object-fit: cover;
`;

const Line = keyframes`
  0%{
    stroke-dasharray: 200 50;
    stroke-dashoffset: 0;
  }
  100%{
    stroke-dasharray: 500 5;
    stroke-dashoffset: 1000;
  }
`;

export const Lines = styled(LinesSvg)`
  width: 100%;
  border: 0px solid green;

  & > g {
    path.line1,
    path.line2,
    path.line3,
    path.line4 {
      animation: ${Line} 7s ease infinite alternate;
    }
  }

  @media screen and (max-width: 960px) {
    height: 200%;
    border: 0px solid red;
  }
`;
