"use client";

import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import BackgroundLines from "./components/BackgroundLines";
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import Loading from "./components/Loading";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  animation: ${(props) => (props.$isLoading ? "none" : fadeOut)} 0.8s
    ease-in-out forwards;
`;

const MainContentContainer = styled.div<{ $isLoading: boolean }>`
  opacity: 0;
  animation: ${(props) => (!props.$isLoading ? fadeIn : "none")} 0.8s
    ease-in-out 0.3s forwards;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  // Return a consistent initial state for SSR
  if (!isMounted) {
    return (
      <LoadingContainer $isLoading={true}>
        <Loading />
      </LoadingContainer>
    );
  }

  return (
    <>
      <LoadingContainer $isLoading={isLoading}>
        <Loading />
      </LoadingContainer>

      <MainContentContainer $isLoading={isLoading}>
        <Header />
        <BackgroundVideo />
        <BackgroundLines />
      </MainContentContainer>
    </>
  );
}
