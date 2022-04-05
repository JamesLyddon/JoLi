import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Questions? Get in touch!`;

const mainText = (
  <div>
    <p>
      JoLi Studios
      <br />
      ​Unit 7
      <br />
      Moorside Business Park
      <br />
      Moorside, Colchester, Essex,
      <br />
      CO12ZF
    </p>
    <p>
      01206 615336
      <br />
      info@jolistudios.co.uk
    </p>
    <p>
      Directions:
      <br />
      Once in Colchester, follow signs for Rollerworld. We are just past it on
      the left at the end of the road, near the Royal Mail sorting office. The
      entrance is just before 'Mr Renewables' and the Café.
    </p>
    <p>
      Parking:
      <br />
      There are plenty of parking spaces on-site, simply follow the arrows on
      the road.
    </p>
  </div>
);

export default function Contact() {
  return (
    <div id="contact">
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </div>
  );
}
