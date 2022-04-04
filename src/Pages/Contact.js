import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Questions?

Get in touch!`;

const mainText = `JoLi Studios

​Unit 7

Moorside Business Park,
Moorside, Colchester, Essex,

CO12ZF
 

Main contact details:

 

info@jolistudios.co.uk
01206 615336

﻿

 

Directions:

 

Once in Colchester, follow signs for

Rollerworld.  We are just past it on the left at

the end of the road, near the Royal Mail

sorting office.  The entrance is just before 'Mr Renewables' and the Café.

 

﻿Parking:

 

There are plenty of parking spaces on-site,

simply follow the arrows on the road.`;

export default function Contact() {
  return (
    <div id="contact">
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </div>
  );
}
