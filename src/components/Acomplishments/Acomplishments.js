import React from 'react';

import { Section, SectionTitle, SectionText, SectionDivider} from '../../styles/GlobalComponents';
import { LeftSection, Img} from './AcomplishmentsStyles';



const Acomplishments = () => (
  <>
  <SectionDivider style={{margin: "auto", display: "block"}}/>
  <Section row id='about'>
  <Img src='/images/image.jpg' style={{marginRight: '20px'}}/>
  <LeftSection>
  <SectionTitle>About Me</SectionTitle>
  <SectionText>
  Let's break the ice a little.<br/>
  Working alone, as part of a team, or as the leader of a team of developers, my passion is bringing ideas to reality. Coding and solving logical challenges are two of my favorite things to do.
  React and Node.js are my go-to technologies, and I've used them on a variety of projects. Those aren't the only two libraries/frameworks I'm familiar with, and I'm always delighted to talk about my clients' needs and come up with the best solutions.
  As evidenced by my statistics, I consider myself to be both creative and hardworking. If you enjoy what you've seen so far in my profile, send me a message and we'll talk about how I can help you with your project.
  </SectionText>
  
  </LeftSection>
</Section>
</>
);

export default Acomplishments;
