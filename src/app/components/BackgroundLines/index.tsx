import React from "react";
import { Section, Video } from "./styles";

function BackgroundLines() {
  return (
    <Section className="bg-video">
      <Video>
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
      </Video>
    </Section>
  );
}

export default BackgroundLines;
