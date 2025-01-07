import React from "react";
import { Section, Video } from "./styles";

function BackgroundVideo() {
  return (
    <Section className="bg-video">
      <Video autoPlay muted loop>
        <source src="/videos/spiderman.mp4" type="video/mp4" />
      </Video>
    </Section>
  );
}

export default BackgroundVideo;
