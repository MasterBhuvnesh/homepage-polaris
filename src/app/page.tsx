"use client"

import BackgroundLines from "./components/BackgroundLines";
import BackgroundVideo from "./components/BackgroundVideo";
import Header from "./components/Header";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
      <Loading />
      <Header />
      <BackgroundVideo />
      <BackgroundLines />
    </>
  );
}
