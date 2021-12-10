import React from 'react';

import { Section, SectionText, SectionTitle, Spant } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br/>
       Binitie William
      </SectionTitle>
      <SectionText>
      I am a dedicated and diligent software developer that enjoys bringing ideas to reality, whether working alone, as part of a team, or as a team leader.
      </SectionText>
      <Button onClick={()=> window.location = '/#about'}>Tell me More</Button>
    </LeftSection>

  </Section>
);

export default Hero;