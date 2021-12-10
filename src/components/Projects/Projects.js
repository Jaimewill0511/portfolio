import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const Projects = () => (
  
  <Section nopadding id='projects'>
  <SectionDivider style={{margin: "auto"}}/>
  <SectionTitle main style={{margin: "auto"}}>Projects</SectionTitle>
  <GridContainer>
  {projects.map(({id, description, title, image, tags ,source , visit}) => {
   return(
    <BlogCard key={id}>
      <Img src={image}/>
      <TitleContent>
        <HeaderThree >{title}</HeaderThree>
      </TitleContent>
      <Hr/>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks target="_blank" href={visit}>Visit</ExternalLinks>
        <ExternalLinks target="_blank" href={source}>Code</ExternalLinks>
      </UtilityList>
    </BlogCard>
   ) 
  })}
  </GridContainer>

  </Section>
);

export default Projects;