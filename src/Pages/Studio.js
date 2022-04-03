import React from "react";
import { StyledStudio } from "../components/styles/Studio.styled";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Studio Hire`;

const mainText = (
  <div>
    <p>
      JoLi Studios has a 4x6 meter 'L' shape cyclorama with brackets at the top
      for mounting paper colorama or vinyl backdrops up to 3 meters in width.
    </p>
    <p>
      Our in-house kit list is always growing so contact us for a complete list
      however we typically have both studio flash head kits and continuous LED
      lights for both photography and video, 2 wide angle reflectors, two
      silver/white umbrellas, a large octobox, 2 large square softboxes, 2
      medium size softboxes, 2 stripboxes with grids, snoot, beauty dish, a wall
      mounted boom arm, a free standing boom arm and a wireless trigger system.
    </p>
    <p>
      We also have various coloured paper backdrops and lighting gels. If you
      have specific requirements for video or photography please let us know in
      advance as we can easily hire equipment in with given notice.
    </p>
    <p>
      Our facilities also include a roller shutter with ground floor access,
      kitchenette, toilet, shower, PA system for audio playback as well as a
      large off-road car park to accommodate as many vehicles as you need.
    </p>
    <p>
      As always if you have any questions or would like to pop down for a visit
      please don't hesitate to get in touch!
    </p>
    <p>
      For extremely competitive studio hire rates and availability give us a
      call or drop us a line with the contact form below.
    </p>
  </div>
);

export default function Studio() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <StyledStudio>
        <Main mainText={mainText} />

        <img src="images/studiobw.webp" alt="studio blueprint" />
      </StyledStudio>
    </>
  );
}
