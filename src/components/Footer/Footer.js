import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+2347053832048"><AiOutlinePhone size="3rem"/></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email me</LinkTitle>
            <LinkItem href="mailto:binitiewilliam0511@gmail.com"><AiOutlineMail size="3rem"/></LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>CODED BY BINITIE WILLIAM  with ❤️</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Jaimewill0511">
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/william-binitie-45aa45138/">
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://Twitter.Com/JaimeofLagos">
      <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
        </SocialContainer>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
