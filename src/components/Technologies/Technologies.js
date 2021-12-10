import React from 'react';
import { DiReact, DiNodejs} from 'react-icons/di';
import { AiFillMobile} from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
  <br/>
  <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I've worked with a variety of web development technologies and have a strong understanding of web development architecture, as well as various key technologies such as Python, Flask, Node.js, React.js/redux, and others.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="6rem"/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>Experience with <br/>
         ReactJS/Redux</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="6rem"/>
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>Experience with <br/>
          NodeJS and Databases(MongoDb, Firebase & PostgreSQL).</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoPhonePortraitOutline size="6rem"/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>Experience with <br/>
          React Native.</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
