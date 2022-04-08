import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";
import { StyledTestimonial } from "../components/styles/Testimonial.styled";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const headlineText = `Testimonials`;

const mainText1 = (
  <div>
    <p className="refText">
      <p className="quote-left">
        <ImQuotesLeft className="quote" />
      </p>
      I’ve worked with Jon on a number of occasions, most recently in the world
      of regional TV commercials and corporate film making. Jon is as supportive
      as he is knowledgeable, in any aspect of Production - be it on-set as a
      Camera Assistant or as an Editor during the Post Production process. He
      retains an easy going nature with clients and co-workers when under
      pressure and clearly shows a passion for the industry whilst tackling any
      task with both skill and enthusiasm, despite the common industry
      constraints of time and budget. As a fellow professional, I would not
      hesitate in recommending Jon as someone who is totally able to both
      fulfill and deliver.
      <p className="quote-right">
        <ImQuotesRight className="quote" />
      </p>
      <p className="refName">Steven Hall - DoP</p>{" "}
    </p>
  </div>
);

const mainText2 = (
  <div>
    <p className="refText">
      <p className="quote-left">
        <ImQuotesLeft className="quote" />
      </p>
      Jon is a rare breed of designer that can successfully fuse creativity with
      technical know-how. His vast skill-set and knowledge mean that he knows
      exactly what is required to complete a project smoothly. He has never
      failed to meet any deadline or timescale I have ever set and they can
      often be quite unrealistic. His friendly and patient approach to work even
      when under pressure makes him a pleasure to work with.
      <p className="quote-right">
        <ImQuotesRight className="quote" />
      </p>
      <p className="refName">Vicki Smith - Marketing Manager</p>{" "}
    </p>
  </div>
);

export default function Testimonials() {
  return (
    <div id="testimonials">
      <Headline headlineText={headlineText} />
      <StyledTestimonial>
        <Main mainText={mainText1} />
        <Main mainText={mainText2} />
      </StyledTestimonial>
    </div>
  );
}
