import React from "react";
import { Section } from "./styles";

function BackgroundVideo() {
  return (
    <Section className="bg-video">
      {/* <Video> */}
      <video
        autoPlay
        muted
        loop
      >
        <source
          src="/videos/spiderman.mp4"
          type="video/mp4"
        />
      </video>
      {/* </Video> */}
    </Section>
  );
}

export default BackgroundVideo;
